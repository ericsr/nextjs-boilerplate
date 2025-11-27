/**
 * Custom API error class with sanitized messages
 */
export class ApiError extends Error {
  public readonly status: number;
  public readonly statusText: string;

  constructor(status: number, statusText: string, message?: string) {
    // Use generic messages to avoid leaking server details
    const safeMessage = message || ApiError.getSafeMessage(status);
    super(safeMessage);
    this.name = 'ApiError';
    this.status = status;
    this.statusText = statusText;
  }

  static getSafeMessage(status: number): string {
    switch (status) {
      case 400:
        return 'Invalid request. Please check your input.';
      case 401:
        return 'Authentication required. Please log in.';
      case 403:
        return 'You do not have permission to perform this action.';
      case 404:
        return 'The requested resource was not found.';
      case 429:
        return 'Too many requests. Please try again later.';
      case 500:
      case 502:
      case 503:
      case 504:
        return 'A server error occurred. Please try again later.';
      default:
        return 'An unexpected error occurred. Please try again.';
    }
  }
}

/**
 * Fetches data from an API endpoint
 *
 * @param {string} url - The URL to fetch from
 * @param {RequestInit} options - Fetch options
 * @returns {Promise<T>} The parsed response data
 * @throws {ApiError} If the request fails
 */
export async function fetchApi<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  if (!response.ok) {
    // Don't expose raw server error messages to users
    // Log the actual error server-side for debugging
    if (process.env.NODE_ENV === 'development') {
      const errorText = await response.text().catch(() => '');
      console.error(`API Error [${response.status}]:`, errorText);
    }

    throw new ApiError(response.status, response.statusText);
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