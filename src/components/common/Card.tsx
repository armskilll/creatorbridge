import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  withShadow?: boolean;
};

export default function Card({
  children,
  className = '',
  padding = 'md',
  withShadow = true,
}: CardProps) {
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-8',
  };
  
  return (
    <div 
      className={`
        bg-white rounded-lg 
        ${withShadow ? 'shadow-md hover:shadow-lg transition-shadow' : ''}
        ${paddingClasses[padding]} 
        ${className}
      `}
    >
      {children}
    </div>
  );
}
