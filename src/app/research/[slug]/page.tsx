import { notFound } from 'next/navigation';
import { type Metadata } from 'next';
import { getAllMdxSlugs, getMdxBySlug, generateTableOfContents } from '@/lib/mdx';
import { siteConfig } from '@/data/site';
import { ArticleContent } from '@/components/research/ArticleContent';

// ── Generate static params ───────────────────────────────────

export function generateStaticParams() {
  return getAllMdxSlugs().map(slug => ({ slug }));
}

// ── Generate metadata ────────────────────────────────────────

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getMdxBySlug(params.slug);

  if (!article) {
    return { title: 'Article Not Found' };
  }

  return {
    title: `${article.frontmatter.title} — ${siteConfig.name}`,
    description: article.frontmatter.summary,
    openGraph: {
      title: `${article.frontmatter.title} — ${siteConfig.name}`,
      description: article.frontmatter.summary,
      type: 'article',
      url: `${siteConfig.url}/research/${article.slug}`,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: article.frontmatter.title,
        },
      ],
    },
  };
}

// ── Page component ───────────────────────────────────────────

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getMdxBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const tableOfContents = generateTableOfContents(article.content);

  // Build a compatible object for ArticleContent
  const articleData = {
    id: article.slug,
    slug: article.slug,
    title: article.frontmatter.title,
    summary: article.frontmatter.summary,
    category: article.frontmatter.category as
      | 'vulnerability-research'
      | 'appsec'
      | 'devsecops'
      | 'threat-analysis'
      | 'tooling',
    tags: article.frontmatter.tags,
    publishedDate: article.frontmatter.publishedDate,
    updatedDate: article.frontmatter.updatedDate,
    status: article.frontmatter.status,
    featured: article.frontmatter.featured ?? false,
  };

  return (
    <ArticleContent
      article={articleData}
      readTime={article.readTime}
      tableOfContents={tableOfContents}
    />
  );
}
