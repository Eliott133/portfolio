import React from 'react';

export const Card = ({ 
  children, 
  className = '', 
  hover = true,
  glass = true,
  ...props 
}) => {
  const baseClasses = 'card shadow-lg';
  const hoverClasses = hover ? 'hover:shadow-xl transition-shadow' : '';
  const glassClasses = glass ? 'glass' : '';
  
  return (
    <div 
      className={`${baseClasses} ${hoverClasses} ${glassClasses} ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};