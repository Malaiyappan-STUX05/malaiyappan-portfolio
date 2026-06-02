'use client';

import Link from 'next/link';
import { ArrowRight, PenTool } from 'lucide-react';
import { getResearchArticles } from '@/lib/data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArticleCard, ArticleCardPlaceholder } from '@/components/ui/ArticleCard';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

const articles = getResearchArticles();

export function ResearchWriteups() {
  return (
    <section id="research-writeups" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Writeups"
          title="Security Research & Technical Articles"
          description="Deep dives into security research, tooling, and engineering."
        />

        {articles.length > 0 ? (
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <StaggerItem key={article.id}>
                <ArticleCard article={article} index={i} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <AnimatedSection direction="up">
            <div className="max-w-lg mx-auto">
              <div className="rounded-2xl bg-[#12121A] border border-dashed border-[rgba(0,240,255,0.1)] p-10 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[rgba(0,240,255,0.05)] border border-[rgba(0,240,255,0.1)] flex items-center justify-center mx-auto mb-5">
                  <PenTool className="w-8 h-8 text-[#00F0FF]" />
                </div>
                <h3 className="text-xl font-bold text-[#E8E8F0] mb-2">
                  Writeups Coming Soon
                </h3>
                <p className="text-[#9A9AAA] text-sm leading-relaxed mb-6">
                  I am working on technical articles covering vulnerability
                  research, security tooling, and DevSecOps engineering.
                  Follow me on LinkedIn for updates.
                </p>
                <Link
                  href="/research"
                  className="inline-flex items-center gap-2 text-[#00F0FF] font-semibold hover:text-[#00C4D4] transition-colors group"
                >
                  Browse Research Section
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        )}

        {articles.length > 0 && (
          <AnimatedSection direction="up" delay={0.3}>
            <div className="mt-12 text-center">
              <Link
                href="/research"
                className="inline-flex items-center gap-2 text-[#00F0FF] font-semibold hover:text-[#00C4D4] transition-colors group"
              >
                View All Articles
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
