'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { type Project } from '@/types';

interface ProjectNavigationProps {
  previousProject?: Project;
  nextProject?: Project;
}

export function ProjectNavigation({
  previousProject,
  nextProject,
}: ProjectNavigationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-16 pt-8 border-t border-[rgba(0,240,255,0.08)]"
    >
      <div className="flex items-center justify-between gap-4">
        {/* Previous */}
        {previousProject ? (
          <Link
            href={`/projects/${previousProject.id}`}
            className="group flex-1 flex items-center gap-3 p-4 rounded-xl bg-[#12121A] border border-[rgba(0,240,255,0.06)] hover:border-[rgba(0,240,255,0.2)] transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-[#5A5A72] group-hover:text-[#00F0FF] transition-colors flex-shrink-0" />
            <div className="min-w-0">
              <span className="text-xs text-[#5A5A72] block">Previous</span>
              <span className="text-sm font-semibold text-[#E8E8F0] group-hover:text-[#00F0FF] transition-colors truncate block">
                {previousProject.title}
              </span>
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}

        {/* Next */}
        {nextProject ? (
          <Link
            href={`/projects/${nextProject.id}`}
            className="group flex-1 flex items-center justify-end gap-3 p-4 rounded-xl bg-[#12121A] border border-[rgba(0,240,255,0.06)] hover:border-[rgba(0,240,255,0.2)] transition-all text-right"
          >
            <div className="min-w-0">
              <span className="text-xs text-[#5A5A72] block">Next</span>
              <span className="text-sm font-semibold text-[#E8E8F0] group-hover:text-[#00F0FF] transition-colors truncate block">
                {nextProject.title}
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#5A5A72] group-hover:text-[#00F0FF] transition-colors flex-shrink-0" />
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </motion.div>
  );
}
