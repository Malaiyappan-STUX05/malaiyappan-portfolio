'use client';

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  href?: string;
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-[#00F0FF] to-[#00C4D4] text-[#0A0A0F] font-bold shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:shadow-[0_0_50px_rgba(0,240,255,0.5)] hover:-translate-y-0.5',
  secondary:
    'bg-[rgba(0,240,255,0.08)] text-[#00F0FF] border border-[rgba(0,240,255,0.3)] backdrop-blur-sm hover:bg-[rgba(0,240,255,0.15)] hover:border-[rgba(0,240,255,0.5)]',
  ghost:
    'bg-transparent text-[#9A9AAA] hover:text-[#00F0FF] hover:bg-[rgba(0,240,255,0.05)]',
  outline:
    'bg-transparent text-[#E8E8F0] border border-[rgba(232,232,240,0.2)] hover:border-[#00F0FF] hover:text-[#00F0FF]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-xl',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      href,
      external,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 ease-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClassName}
          >
            {children}
          </a>
        );
      }
      return (
        <a href={href} className={combinedClassName}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
