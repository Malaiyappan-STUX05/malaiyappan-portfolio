'use client';

import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { type ResearchArticle } from '@/types';
import { Badge } from '@/components/ui/Badge';

interface ResearchCardProps {
  article: ResearchArticle;
}

const categoryLabels: Record<string, string> = {
  'vulnerability-research': 'Vulnerability Research',
  appsec: 'Application Security',
  devsecops: 'DevSecOps',
  'threat-analysis': 'Threat Analysis',
  tooling: 'Security Tooling',
};

export function ResearchCard({ article }: ResearchCardProps) {
  return (
    <Link href={`/research/${article.slug}`} className="group block h-full">
      <article className="flex flex-col h-full rounded-2xl bg-[#12121A] border border-[rgba(0,240,255,0.06)] p-6 transition-all duration-500 hover:border-[rgba(0,240,255,0.2)] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-[#5A5A72] mb-4">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {new Date(article.publishedDate).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
        </div>

        {/* Category */}
        <Badge variant="cyan" className="self-start mb-3">
          {categoryLabels[article.category] || article.category}
        </Badge>

        {/* Title */}
        <h3 className="text-lg font-bold text-[#E8E8F0] group-hover:text-[#00F0FF] transition-colors duration-300 mb-3 leading-snug">
          {article.title}
        </h3>

        {/* Summary */}
        <p className="text-sm text-[#9A9AAA] leading-relaxed flex-1 line-clamp-3">
          {article.summary}
        </p>

        {/* Tags */}
        {article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {article.tags.slice(0, 3).map(tag => (
              <span
                key={tag}
                className="text-xs text-[#5A5A72] bg-[rgba(90,90,114,0.15)] px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Read more */}
        <div className="mt-4 pt-4 border-t border-[rgba(0,240,255,0.06)] inline-flex items-center gap-2 text-sm font-semibold text-[#00F0FF] group-hover:gap-3 transition-all duration-300">
          Read Article
          <ArrowRight className="w-4 h-4" />
        </div>
      </article>
    </Link>
  );
}
