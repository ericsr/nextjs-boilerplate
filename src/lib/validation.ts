/**
 * Validates that a value is not empty
 * 
 * @param {string} value - The value to validate
 * @returns {string|undefined} Error message or undefined if valid
 */
export const required = (value: string): string | undefined => {
  return value ? undefined : 'This field is required';
};

/**
 * Validates that a value is a valid email address
 * 
 * @param {string} value - The value to validate
 * @returns {string|undefined} Error message or undefined if valid
 */
export const isEmail = (value: string): string | undefined => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return value && !emailRegex.test(value) ? 'Invalid email address' : undefined;
};

/**
 * Validates that a value has a minimum length
 * 
 * @param {number} minLength - The minimum length
 * @returns {(value: string) => string|undefined} Validation function
 */
export const minLength = (minLength: number) => (value: string): string | undefined => {
  return value && value.length < minLength
    ? `Must be at least ${minLength} characters`
    : undefined;
};

/**
 * Validates that a value has a maximum length
 * 
 * @param {number} maxLength - The maximum length
 * @returns {(value: string) => string|undefined} Validation function
 */
export const maxLength = (maxLength: number) => (value: string): string | undefined => {
  return value && value.length > maxLength
    ? `Must be no more than ${maxLength} characters`
    : undefined;
};

/**
 * Validates that a value matches a pattern
 * 
 * @param {RegExp} pattern - The pattern to match
 * @param {string} errorMessage - The error message
 * @returns {(value: string) => string|undefined} Validation function
 */
export const matchesPattern = (pattern: RegExp, errorMessage: string) => (
  value: string
): string | undefined => {
  return value && !pattern.test(value) ? errorMessage : undefined;
};

/**
 * Validates that a value matches another value
 * 
 * @param {string} field - The field to match
 * @param {Record<string, any>} allValues - All form values
 * @returns {(value: string) => string|undefined} Validation function
 */
export const matchesField = (field: string, fieldName: string) => (
  value: string,
  allValues: Record<string, unknown>
): string | undefined => {
  return value !== allValues[field] ? `Must match ${fieldName}` : undefined;
};

/**
 * Combines multiple validators
 * 
 * @param {Array<(value: string, allValues?: Record<string, any>) => string|undefined>} validators - Validators to combine
 * @returns {(value: string, allValues?: Record<string, any>) => string|undefined} Combined validation function
 */
export const composeValidators = (
  ...validators: Array<(value: string, allValues?: Record<string, unknown>) => string | undefined>
) => (value: string, allValues?: Record<string, unknown>): string | undefined => {
  for (const validator of validators) {
    const error = validator(value, allValues);
    if (error) {
      return error;
    }
  }
  return undefined;
};

export const validation = {
  required,
  isEmail,
  minLength,
  maxLength,
  matchesPattern,
  matchesField,
  composeValidators,
}; 