"use client";

import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

/**
 * Container component for consistent layout widths
 * 
 * @param {ContainerProps} props - The container properties
 * @returns {React.ReactElement} The Container component
 */
export const Container = ({
  children,
  className = '',
  size = 'lg',
}: ContainerProps): React.ReactElement => {
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <div className={`mx-auto w-full px-4 sm:px-6 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
};

export default Container; 