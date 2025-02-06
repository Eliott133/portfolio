import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  to,
  href,
  ...props 
}) => {
  const baseClasses = 'btn flex items-center gap-2 transition-all duration-300';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost',
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonClasses} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={buttonClasses} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
};