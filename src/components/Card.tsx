"use client";

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  footer?: React.ReactNode;
}

/**
 * Card component for displaying content in a contained box
 * 
 * @param {CardProps} props - The card properties
 * @returns {React.ReactElement} The Card component
 */
export const Card = ({
  children,
  className = '',
  title,
  footer,
}: CardProps): React.ReactElement => {
  return (
    <div className={`rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm ${className}`}>
      {title && (
        <div className="border-b border-gray-200 dark:border-gray-700 px-4 py-3">
          <h3 className="text-lg font-medium dark:text-white">{title}</h3>
        </div>
      )}
      <div className="p-4">{children}</div>
      {footer && (
        <div className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-3 rounded-b-lg">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card; 