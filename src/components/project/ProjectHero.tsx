'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { type Project } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-[#9A9AAA] hover:text-[#00F0FF] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-[#E8E8F0] leading-tight tracking-tight"
        >
          {project.title}
        </motion.h1>

        {/* Short description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-xl text-[#9A9AAA] leading-relaxed max-w-3xl"
        >
          {project.shortDescription}
        </motion.p>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 flex flex-wrap gap-2"
        >
          {project.tags.map(tag => (
            <Badge key={tag} variant="muted" size="md">
              {tag}
            </Badge>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          {project.githubUrl && (
            <Button
              variant="primary"
              size="lg"
              href={project.githubUrl}
              external
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </Button>
          )}
          {project.liveDemoUrl && (
            <Button
              variant="secondary"
              size="lg"
              href={project.liveDemoUrl}
              external
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
