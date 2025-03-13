/**
 * Formats a date as a string
 * 
 * @param {Date|string|number} date - The date to format
 * @param {Intl.DateTimeFormatOptions} options - Format options
 * @param {string} locale - The locale to use
 * @returns {string} The formatted date
 */
export function formatDate(
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  },
  locale: string = 'en-US'
): string {
  const dateObj = date instanceof Date ? date : new Date(date);
  return new Intl.DateTimeFormat(locale, options).format(dateObj);
}

/**
 * Formats a date as a relative time string (e.g., "2 days ago")
 * 
 * @param {Date|string|number} date - The date to format
 * @param {string} locale - The locale to use
 * @returns {string} The relative time string
 */
export function formatRelativeTime(
  date: Date | string | number,
  locale: string = 'en-US'
): string {
  const dateObj = date instanceof Date ? date : new Date(date);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);
  
  // Define time units in seconds
  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = day * 365;
  
  // Format the relative time
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
  
  if (diffInSeconds < minute) {
    return rtf.format(-Math.floor(diffInSeconds), 'second');
  } else if (diffInSeconds < hour) {
    return rtf.format(-Math.floor(diffInSeconds / minute), 'minute');
  } else if (diffInSeconds < day) {
    return rtf.format(-Math.floor(diffInSeconds / hour), 'hour');
  } else if (diffInSeconds < week) {
    return rtf.format(-Math.floor(diffInSeconds / day), 'day');
  } else if (diffInSeconds < month) {
    return rtf.format(-Math.floor(diffInSeconds / week), 'week');
  } else if (diffInSeconds < year) {
    return rtf.format(-Math.floor(diffInSeconds / month), 'month');
  } else {
    return rtf.format(-Math.floor(diffInSeconds / year), 'year');
  }
}

/**
 * Formats a date as a time string
 * 
 * @param {Date|string|number} date - The date to format
 * @param {string} locale - The locale to use
 * @returns {string} The formatted time
 */
export function formatTime(
  date: Date | string | number,
  locale: string = 'en-US'
): string {
  const dateObj = date instanceof Date ? date : new Date(date);
  return new Intl.DateTimeFormat(locale, { 
    hour: 'numeric', 
    minute: 'numeric',
    hour12: true
  }).format(dateObj);
}

/**
 * Checks if a date is today
 * 
 * @param {Date|string|number} date - The date to check
 * @returns {boolean} Whether the date is today
 */
export function isToday(date: Date | string | number): boolean {
  const dateObj = date instanceof Date ? date : new Date(date);
  const today = new Date();
  return (
    dateObj.getDate() === today.getDate() &&
    dateObj.getMonth() === today.getMonth() &&
    dateObj.getFullYear() === today.getFullYear()
  );
}

/**
 * Adds a specified number of days to a date
 * 
 * @param {Date|string|number} date - The date to add days to
 * @param {number} days - The number of days to add
 * @returns {Date} The new date
 */
export function addDays(date: Date | string | number, days: number): Date {
  const dateObj = date instanceof Date ? new Date(date) : new Date(date);
  dateObj.setDate(dateObj.getDate() + days);
  return dateObj;
}

export const dateUtils = {
  formatDate,
  formatRelativeTime,
  formatTime,
  isToday,
  addDays,
}; 