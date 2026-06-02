'use client';

import { motion } from 'framer-motion';
import { type ComponentType } from 'react';

interface ProjectSectionProps {
  id: string;
  title: string;
  icon?: ComponentType<{ className?: string }>;
  children: React.ReactNode;
  delay?: number;
}

export function ProjectSection({
  id,
  title,
  icon: Icon,
  children,
  delay = 0,
}: ProjectSectionProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="py-8"
    >
      {/* Section header */}
      <div className="flex items-center gap-3 mb-6">
        {Icon && (
          <div className="w-8 h-8 rounded-lg bg-[rgba(0,240,255,0.08)] border border-[rgba(0,240,255,0.15)] flex items-center justify-center">
            <Icon className="w-4 h-4 text-[#00F0FF]" />
          </div>
        )}
        <h2 className="text-xl md:text-2xl font-bold text-[#E8E8F0]">
          {title}
        </h2>
      </div>

      {/* Content */}
      <div className="text-[#9A9AAA] leading-relaxed space-y-4 pl-0 md:pl-11">
        {children}
      </div>
    </motion.div>
  );
}
