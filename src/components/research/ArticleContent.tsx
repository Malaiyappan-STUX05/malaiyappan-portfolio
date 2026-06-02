'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { type ResearchArticle } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { TableOfContents } from './TableOfContents';

interface ArticleContentProps {
  article: ResearchArticle;
  readTime?: string;
  tableOfContents?: { id: string; title: string; level: number }[];
}

const categoryLabels: Record<string, string> = {
  'vulnerability-research': 'Vulnerability Research',
  appsec: 'Application Security',
  devsecops: 'DevSecOps',
  'threat-analysis': 'Threat Analysis',
  tooling: 'Security Tooling',
};

export function ArticleContent({
  article,
  readTime = '5 min read',
  tableOfContents = [],
}: ArticleContentProps) {
  return (
    <article>
      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/research"
              className="inline-flex items-center gap-2 text-sm text-[#9A9AAA] hover:text-[#00F0FF] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Research
            </Link>
          </motion.div>

          {/* Category */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Badge variant="cyan" className="mb-4">
              {categoryLabels[article.category] || article.category}
            </Badge>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-[#E8E8F0] leading-tight tracking-tight"
          >
            {article.title}
          </motion.h1>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-[#9A9AAA] leading-relaxed max-w-3xl"
          >
            {article.summary}
          </motion.p>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#5A5A72]"
          >
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(article.publishedDate).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {readTime}
            </span>
          </motion.div>

          {/* Tags */}
          {article.tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-4 flex flex-wrap gap-2"
            >
              {article.tags.map(tag => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 text-xs text-[#5A5A72] bg-[rgba(90,90,114,0.15)] px-2.5 py-1 rounded-full"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Content area with TOC */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
            {/* Article body */}
            <div className="prose prose-invert prose-cyan max-w-none">
              {/* 
                MDX content will be rendered here.
                For now, this is a placeholder structure.
                When MDX is integrated, this will render the full article content.
              */}
              <div className="text-[#9A9AAA] leading-relaxed space-y-6">
                <p className="text-lg">
                  This article is being written. The MDX content system is
                  ready — articles will appear here as they are published.
                </p>
              </div>
            </div>

            {/* Table of contents — sidebar on desktop */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TableOfContents items={tableOfContents} />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </article>
  );
}
