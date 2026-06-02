'use client';

import { type HTMLAttributes, type ReactNode } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: 'default' | 'cyan' | 'red' | 'muted' | 'outline';
  size?: 'sm' | 'md';
}

const variantStyles = {
  default:
    'bg-[rgba(0,240,255,0.1)] text-[#00F0FF] border border-[rgba(0,240,255,0.2)]',
  cyan:
    'bg-[rgba(0,240,255,0.15)] text-[#00F0FF] border border-[rgba(0,240,255,0.3)]',
  red:
    'bg-[rgba(255,45,85,0.1)] text-[#FF2D55] border border-[rgba(255,45,85,0.2)]',
  muted:
    'bg-[rgba(154,154,170,0.1)] text-[#9A9AAA] border border-[rgba(154,154,170,0.15)]',
  outline:
    'bg-transparent text-[#E8E8F0] border border-[rgba(232,232,240,0.2)]',
};

const sizeStyles = {
  sm: 'px-2.5 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
};

export function Badge({
  children,
  variant = 'default',
  size = 'sm',
  className = '',
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center font-medium rounded-full ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  );
}
