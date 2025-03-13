/**
 * Fetches data from an API endpoint
 * 
 * @param {string} url - The URL to fetch from
 * @param {RequestInit} options - Fetch options
 * @returns {Promise<T>} The parsed response data
 * @throws {Error} If the request fails
 */
export async function fetchApi<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || `API request failed with status ${response.status}`);
  }

  // For empty responses
  if (response.status === 204) {
    return {} as T;
  }

  return response.json();
}

/**
 * Makes a GET request to the API
 * 
 * @param {string} url - The URL to fetch from
 * @param {RequestInit} options - Additional fetch options
 * @returns {Promise<T>} The parsed response data
 */
export function get<T>(url: string, options?: RequestInit): Promise<T> {
  return fetchApi<T>(url, { method: 'GET', ...options });
}

/**
 * Makes a POST request to the API
 * 
 * @param {string} url - The URL to fetch from
 * @param {any} data - The data to send in the request body
 * @param {RequestInit} options - Additional fetch options
 * @returns {Promise<T>} The parsed response data
 */
export function post<T>(url: string, data: any, options?: RequestInit): Promise<T> {
  return fetchApi<T>(url, {
    method: 'POST',
    body: JSON.stringify(data),
    ...options,
  });
}

/**
 * Makes a PUT request to the API
 * 
 * @param {string} url - The URL to fetch from
 * @param {any} data - The data to send in the request body
 * @param {RequestInit} options - Additional fetch options
 * @returns {Promise<T>} The parsed response data
 */
export function put<T>(url: string, data: any, options?: RequestInit): Promise<T> {
  return fetchApi<T>(url, {
    method: 'PUT',
    body: JSON.stringify(data),
    ...options,
  });
}

/**
 * Makes a DELETE request to the API
 * 
 * @param {string} url - The URL to fetch from
 * @param {RequestInit} options - Additional fetch options
 * @returns {Promise<T>} The parsed response data
 */
export function del<T>(url: string, options?: RequestInit): Promise<T> {
  return fetchApi<T>(url, { method: 'DELETE', ...options });
}

export const api = {
  get,
  post,
  put,
  delete: del,
}; 