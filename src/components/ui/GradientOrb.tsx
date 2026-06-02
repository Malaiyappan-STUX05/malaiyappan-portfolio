'use client';

import { motion } from 'framer-motion';

interface GradientOrbProps {
  color?: 'cyan' | 'red' | 'teal';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  position?: { top?: string; bottom?: string; left?: string; right?: string };
  delay?: number;
  className?: string;
}

const colorMap = {
  cyan: 'bg-[radial-gradient(circle,rgba(0,240,255,0.15),transparent_70%)]',
  red: 'bg-[radial-gradient(circle,rgba(255,45,85,0.1),transparent_70%)]',
  teal: 'bg-[radial-gradient(circle,rgba(0,196,212,0.1),transparent_70%)]',
};

const sizeMap = {
  sm: 'w-48 h-48',
  md: 'w-72 h-72',
  lg: 'w-96 h-96',
  xl: 'w-[32rem] h-[32rem]',
};

export function GradientOrb({
  color = 'cyan',
  size = 'md',
  position = {},
  delay = 0,
  className = '',
}: GradientOrbProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay, ease: 'easeOut' }}
      aria-hidden="true"
      className={`absolute pointer-events-none rounded-full blur-3xl ${colorMap[color]} ${sizeMap[size]} ${className}`.trim()}
      style={position}
    />
  );
}
