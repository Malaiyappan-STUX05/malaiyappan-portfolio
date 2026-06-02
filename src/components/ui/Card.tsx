'use client';

import { type HTMLAttributes, type ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'glass' | 'elevated';
  hover?: boolean;
  glow?: boolean;
}

const variantStyles = {
  default:
    'bg-[#12121A] border border-[rgba(0,240,255,0.08)]',
  glass:
    'bg-[rgba(18,18,26,0.8)] border border-[rgba(0,240,255,0.1)] backdrop-blur-xl',
  elevated:
    'bg-[#1A1A25] border border-[rgba(0,240,255,0.06)]',
};

export function Card({
  children,
  variant = 'default',
  hover = false,
  glow = false,
  className = '',
  ...props
}: CardProps) {
  const hoverStyles = hover
    ? 'transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[rgba(0,240,255,0.25)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]'
    : '';

  const glowStyles = glow
    ? 'shadow-[0_0_40px_rgba(0,240,255,0.05)]'
    : '';

  return (
    <div
      className={`rounded-2xl p-6 ${variantStyles[variant]} ${hoverStyles} ${glowStyles} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`mb-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={`text-xl font-bold text-[#E8E8F0] ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`text-[#9A9AAA] leading-relaxed mt-2 ${className}`} {...props}>
      {children}
    </p>
  );
}

export function CardContent({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`mt-4 pt-4 border-t border-[rgba(0,240,255,0.08)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
