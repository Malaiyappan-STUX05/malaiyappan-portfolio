'use client';

import { type HTMLAttributes } from 'react';

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  className = '',
  ...props
}: SectionHeadingProps) {
  const alignStyles = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`mb-16 ${alignStyles} ${className}`} {...props}>
      <span className="inline-block text-[#00F0FF] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#E8E8F0] leading-tight tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-[#9A9AAA] max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
