"use client";

import { useState, useEffect } from 'react';

/**
 * Safely parse JSON with validation
 * Returns undefined if parsing fails or data is invalid
 */
function safeJsonParse<T>(value: string | null, validator?: (data: unknown) => data is T): T | undefined {
  if (value === null) {
    return undefined;
  }

  try {
    const parsed = JSON.parse(value);

    // If a validator is provided, use it to validate the parsed data
    if (validator && !validator(parsed)) {
      console.warn('localStorage data failed validation');
      return undefined;
    }

    return parsed as T;
  } catch {
    console.warn('Failed to parse localStorage JSON');
    return undefined;
  }
}

/**
 * Custom hook for managing state in localStorage
 *
 * @param {string} key - The localStorage key
 * @param {T} initialValue - The initial value
 * @param {function} validator - Optional validation function for stored data
 * @returns {[T, (value: T | ((val: T) => T)) => void]} State and setter
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  validator?: (data: unknown) => data is T
): [T, (value: T | ((val: T) => T)) => void] {
  // Get from local storage then parse stored json or return initialValue
  const readValue = (): T => {
    // Prevent build error "window is undefined" but keep working
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      const parsed = safeJsonParse<T>(item, validator);
      return parsed !== undefined ? parsed : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  };

  // State to store our value
  const [storedValue, setStoredValue] = useState<T>(readValue);

  // Return a wrapped version of useState's setter function that persists the new value to localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // Save state
      setStoredValue(valueToStore);
      
      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  useEffect(() => {
    setStoredValue(readValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key && event.newValue) {
        const parsed = safeJsonParse<T>(event.newValue, validator);
        if (parsed !== undefined) {
          setStoredValue(parsed);
        }
        // If parsing fails, keep the current value rather than corrupting state
      }
    };

    // Listen for changes to this localStorage key in other tabs/windows
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key, validator]);

  return [storedValue, setValue];
}

export default useLocalStorage; 