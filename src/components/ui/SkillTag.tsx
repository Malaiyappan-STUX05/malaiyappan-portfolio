'use client';

import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { type SkillLevel } from '@/types';

interface SkillTagProps {
  name: string;
  level?: SkillLevel;
  description?: string;
  showLevel?: boolean;
  className?: string;
}

const levelConfig: Record<SkillLevel, { label: string; color: string }> = {
  advanced: {
    label: 'Advanced',
    color: 'text-[#00F0FF] bg-[rgba(0,240,255,0.1)] border-[rgba(0,240,255,0.2)]',
  },
  intermediate: {
    label: 'Intermediate',
    color:
      'text-[#00C4D4] bg-[rgba(0,196,212,0.1)] border-[rgba(0,196,212,0.2)]',
  },
  'working-knowledge': {
    label: 'Working Knowledge',
    color:
      'text-[#9A9AAA] bg-[rgba(154,154,170,0.1)] border-[rgba(154,154,170,0.15)]',
  },
};

export function SkillTag({
  name,
  level,
  description,
  showLevel = false,
  className = '',
}: SkillTagProps) {
  const config = level ? levelConfig[level] : null;

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -2 }}
      transition={{ duration: 0.2 }}
      className={`group relative inline-flex items-center gap-2 ${className}`}
    >
      <span
        className={`inline-flex items-center px-3.5 py-1.5 rounded-lg text-sm font-medium border ${
          config ? config.color : 'text-[#E8E8F0] bg-[rgba(232,232,240,0.05)] border-[rgba(232,232,240,0.1)]'
        }`}
      >
        {name}
        {showLevel && config && (
          <span className="ml-2 text-xs opacity-70">{config.label}</span>
        )}
      </span>

      {/* Tooltip on hover */}
      {description && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-[#1A1A25] border border-[rgba(0,240,255,0.15)] rounded-lg text-xs text-[#9A9AAA] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
          {description}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-[#1A1A25]" />
        </div>
      )}
    </motion.div>
  );
}

interface SkillLevelBadgeProps {
  level: SkillLevel;
  className?: string;
}

export function SkillLevelBadge({ level, className = '' }: SkillLevelBadgeProps) {
  const config = levelConfig[level];
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider border ${config.color} ${className}`.trim()}
    >
      {config.label}
    </span>
  );
}
