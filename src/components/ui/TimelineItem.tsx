'use client';

import { motion } from 'framer-motion';
import { type Experience } from '@/types';
import { Badge } from './Badge';

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

export function TimelineItem({
  experience,
  index,
  isLast,
}: TimelineItemProps) {
  const isCurrent = experience.endDate === null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="relative flex gap-6 md:gap-8"
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <div
          className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
            isCurrent
              ? 'bg-[#00F0FF] border-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.5)]'
              : 'bg-[#0A0A0F] border-[rgba(0,240,255,0.3)]'
          }`}
        />
        {!isLast && (
          <div className="w-px flex-1 bg-gradient-to-b from-[rgba(0,240,255,0.2)] to-transparent" />
        )}
      </div>

      {/* Content */}
      <div className={`flex-1 pb-12 ${isLast ? 'pb-0' : ''}`}>
        {/* Date */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-sm font-mono text-[#00F0FF]">
            {experience.startDate}
            {experience.endDate ? ` — ${experience.endDate}` : ' — Present'}
          </span>
          {isCurrent && (
            <Badge variant="cyan" size="sm">
              Current
            </Badge>
          )}
        </div>

        {/* Card */}
        <div className="rounded-xl bg-[#12121A] border border-[rgba(0,240,255,0.06)] p-5 md:p-6 hover:border-[rgba(0,240,255,0.15)] transition-colors duration-300">
          <h3 className="text-lg font-bold text-[#E8E8F0]">
            {experience.role}
          </h3>
          <p className="text-[#00F0FF] font-medium text-sm mt-0.5">
            {experience.organization}
          </p>
          <p className="text-[#5A5A72] text-xs mt-1">{experience.location}</p>

          <p className="text-[#9A9AAA] text-sm mt-3 leading-relaxed">
            {experience.description}
          </p>

          {/* Achievements */}
          {experience.achievements.length > 0 && (
            <ul className="mt-4 space-y-2">
              {experience.achievements.map((achievement, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-[#9A9AAA]"
                >
                  <span className="text-[#00F0FF] mt-1 flex-shrink-0">›</span>
                  {achievement}
                </li>
              ))}
            </ul>
          )}

          {/* Tech tags */}
          {experience.techUsed.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {experience.techUsed.map(tech => (
                <Badge key={tech} variant="muted" size="sm">
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
