// ─────────────────────────────────────────────────────────────
// MDX Content Processing
// Handles reading and parsing MDX files from /content/research/
// ─────────────────────────────────────────────────────────────

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content', 'research');

export interface MdxFrontmatter {
  title: string;
  summary: string;
  category: string;
  tags: string[];
  publishedDate: string;
  updatedDate?: string;
  status: 'published' | 'draft';
  featured?: boolean;
}

export interface MdxContent {
  slug: string;
  frontmatter: MdxFrontmatter;
  content: string;
  readTime: string;
}

// ── Get all MDX slugs ────────────────────────────────────────

export function getAllMdxSlugs(): string[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const files = fs.readdirSync(contentDirectory);
  return files
    .filter(file => file.endsWith('.mdx'))
    .map(file => file.replace(/\.mdx$/, ''));
}

// ── Read and parse a single MDX file ─────────────────────────

export function getMdxBySlug(slug: string): MdxContent | null {
  const filePath = path.join(contentDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const wordCount = content.split(/\s+/).length;
  const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

  return {
    slug,
    frontmatter: data as MdxFrontmatter,
    content,
    readTime,
  };
}

// ── Get all published MDX articles ───────────────────────────

export function getAllPublishedMdxArticles(): MdxContent[] {
  const slugs = getAllMdxSlugs();

  return slugs
    .map(slug => getMdxBySlug(slug))
    .filter(
      (article): article is MdxContent =>
        article !== null && article.frontmatter.status === 'published'
    )
    .sort(
      (a, b) =>
        new Date(b.frontmatter.publishedDate).getTime() -
        new Date(a.frontmatter.publishedDate).getTime()
    );
}

// ── Generate table of contents from content ──────────────────

export function generateTableOfContents(
  content: string
): { id: string; title: string; level: number }[] {
  const headings: { id: string; title: string; level: number }[] = [];
  const lines = content.split('\n');

  lines.forEach(line => {
    const match = line.match(/^(#{2,3})\s+(.+)/);
    if (match) {
      const level = match[1].length;
      const title = match[2].trim();
      const id = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
      headings.push({ id, title, level });
    }
  });

  return headings;
}
