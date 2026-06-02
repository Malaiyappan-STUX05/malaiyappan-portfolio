import { type Metadata } from 'next';
import { researchArticles } from '@/data/research';
import { getAllPublishedMdxArticles } from '@/lib/mdx';
import { siteConfig } from '@/data/site';
import { type ResearchArticle, type ResearchCategory } from '@/types';
import { ResearchCard } from '@/components/research/ResearchCard';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { PenTool } from 'lucide-react';

export const metadata: Metadata = {
  title: `Research & Writeups — ${siteConfig.name}`,
  description:
    'Security research, technical articles, and writeups by Malaiyappan S. Covering vulnerability research, application security, and DevSecOps.',
  openGraph: {
    title: `Research & Writeups — ${siteConfig.name}`,
    description: 'Security research and technical articles.',
    url: `${siteConfig.url}/research`,
  },
};

export default function ResearchPage() {
  // Combine data-driven articles + MDX articles
  const dataArticles = researchArticles.filter(a => a.status === 'published');
  const mdxArticles = getAllPublishedMdxArticles();

  const allArticles = [
    ...dataArticles.map(a => ({
      ...a,
      type: 'data' as const,
    })),
    ...mdxArticles.map(a => ({
      id: a.slug,
      slug: a.slug,
      title: a.frontmatter.title,
      summary: a.frontmatter.summary,
      category: a.frontmatter.category as ResearchCategory,
      tags: a.frontmatter.tags,
      publishedDate: a.frontmatter.publishedDate,
      status: a.frontmatter.status,
      featured: a.frontmatter.featured ?? false,
      type: 'mdx' as const,
    })),
  ].sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  return (
    <main className="min-h-screen pt-24 pb-24 md:pt-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection direction="up">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-[#E8E8F0] tracking-tight">
              Research & Writeups
            </h1>
            <p className="mt-4 text-lg text-[#9A9AAA] max-w-2xl">
              Security research, technical deep dives, and engineering articles.
            </p>
          </div>
        </AnimatedSection>

        {allArticles.length > 0 ? (
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allArticles.map((article, i) => (
              <StaggerItem key={article.id}>
                <ResearchCard article={article} />
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
                <p className="text-[#9A9AAA] text-sm leading-relaxed">
                  I am working on technical articles covering vulnerability
                  research, security tooling, and DevSecOps engineering.
                  Check back soon or follow me on LinkedIn for updates.
                </p>
              </div>
            </div>
          </AnimatedSection>
        )}
      </div>
    </main>
  );
}
