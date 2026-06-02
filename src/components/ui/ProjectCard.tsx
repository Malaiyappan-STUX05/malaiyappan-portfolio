'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { type Project } from '@/types';
import { Badge } from './Badge';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  index?: number;
}

export function ProjectCard({
  project,
  featured = false,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`group relative flex flex-col rounded-2xl border transition-all duration-500 overflow-hidden ${
        featured
          ? 'bg-[rgba(18,18,26,0.9)] border-[rgba(0,240,255,0.12)] backdrop-blur-xl hover:border-[rgba(0,240,255,0.3)] hover:shadow-[0_0_50px_rgba(0,240,255,0.08),0_20px_60px_rgba(0,0,0,0.4)]'
          : 'bg-[#12121A] border-[rgba(0,240,255,0.06)] hover:border-[rgba(0,240,255,0.2)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]'
      } hover:-translate-y-1`}
    >
      {/* Accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex flex-col flex-1 p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            {featured && (
              <Badge variant="cyan" className="mb-3">
                Featured
              </Badge>
            )}
            <h3 className="text-xl md:text-2xl font-bold text-[#E8E8F0] group-hover:text-[#00F0FF] transition-colors duration-300">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-[#9A9AAA] leading-relaxed mb-6 flex-1">
          {project.shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.slice(0, 2).flatMap(tc =>
            tc.items.slice(0, 3).map(item => (
              <Badge key={item} variant="muted" size="sm">
                {item}
              </Badge>
            ))
          )}
          {project.techStack.reduce((acc, tc) => acc + tc.items.length, 0) > 6 && (
            <Badge variant="outline" size="sm">
              +{project.techStack.reduce((acc, tc) => acc + tc.items.length, 0) - 6}
            </Badge>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-4 pt-4 border-t border-[rgba(0,240,255,0.06)]">
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00F0FF] hover:text-[#00C4D4] transition-colors"
          >
            View Details
            <ExternalLink className="w-4 h-4" />
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#9A9AAA] hover:text-[#E8E8F0] transition-colors"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
