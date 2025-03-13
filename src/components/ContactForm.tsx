"use client";

import React from 'react';
import { Button } from './Button';
import { useForm } from '@/hooks/useForm';
import { validation } from '@/lib/validation';

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

/**
 * Contact form component using the useForm hook
 * 
 * @returns {React.ReactElement} The ContactForm component
 */
export const ContactForm = (): React.ReactElement => {
  const initialValues: ContactFormValues = {
    name: '',
    email: '',
    message: '',
  };

  const validateForm = (values: ContactFormValues) => {
    const errors: Partial<Record<keyof ContactFormValues, string>> = {};
    
    const nameError = validation.required(values.name);
    if (nameError) errors.name = nameError;
    
    const emailRequired = validation.required(values.email);
    if (emailRequired) {
      errors.email = emailRequired;
    } else {
      const emailFormatError = validation.isEmail(values.email);
      if (emailFormatError) errors.email = emailFormatError;
    }
    
    const messageError = validation.required(values.message);
    if (messageError) errors.message = messageError;
    
    return errors;
  };

  const handleSubmit = async (values: ContactFormValues) => {
    // In a real application, you would send the form data to your API
    console.log('Form submitted:', values);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form after successful submission
    resetForm();
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit: submitForm,
    resetForm,
  } = useForm<ContactFormValues>({
    initialValues,
    onSubmit: handleSubmit,
    validate: validateForm,
  });

  return (
    <form onSubmit={submitForm} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={() => handleBlur('name')}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
          placeholder="Your name"
        />
        {touched.name && errors.name && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={() => handleBlur('email')}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
          placeholder="your.email@example.com"
        />
        {touched.email && errors.email && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          onBlur={() => handleBlur('message')}
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
          placeholder="Your message"
        />
        {touched.message && errors.message && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
        )}
      </div>
      
      <div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm; 