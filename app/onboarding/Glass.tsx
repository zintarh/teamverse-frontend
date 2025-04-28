"use client"
import React from 'react';
import clsx from 'clsx';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
  hoverable?: boolean;
  children?: React.ReactNode;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  selected = false,
  hoverable = true,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-4 py-5 transition-all duration-200',
        hoverable && 'hover:bg-white/20 cursor-pointer',
        selected && 'bg-purple-500/40 border-purple-500/60',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};