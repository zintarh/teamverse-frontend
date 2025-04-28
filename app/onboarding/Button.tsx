"use client"
import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' |'tertiary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'rounded-lg font-medium cursor-pointer transition-colors duration-200',
        size === 'sm' && 'px-3 py-2 text-sm',
        size === 'md' && 'px-4 py-3',
        size === 'lg' && 'px-5 py-4 text-lg',
        variant === 'primary' && 'bg-white text-gray-900 hover:bg-gray-100',
        variant === 'secondary' && 'bg-purple-500 text-white hover:bg-purple-600',
        variant === 'outline' && 'border border-gray-300 bg-transparent hover:bg-white/10',
        variant === 'ghost' && 'bg-transparent text-gray-300 hover:bg-white/10',
        variant === "tertiary" && 'bg-[#333333] text-white hover:bg-gray-700',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
