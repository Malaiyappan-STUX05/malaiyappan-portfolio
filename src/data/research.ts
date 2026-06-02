import { ResearchContribution, ResearchArticle } from '@/types';

// ── Research Contributions ───────────────────────────────────

export const researchContributions: ResearchContribution[] = [
  {
    id: 'ncrc-handbook-4',
    title: 'National Cybersecurity Research Handbook (4th Edition)',
    publication: 'National Cyber Security Research Council',
    description:
      'Contributed research to the 4th Edition of the National Cybersecurity Research Handbook, a publication that compiles cybersecurity research from contributors across India.',
    url: undefined,
    date: '2024',
  },
];

// ── Research Articles ────────────────────────────────────────

export const researchArticles: ResearchArticle[] = [
  // Articles will be added here as they are written.
  // Each entry references an MDX file in /content/research/
  //
  // Example:
  // {
  //   id: 'building-vrs',
  //   slug: 'building-vulnerability-risk-scoring',
  //   title: 'Building a Vulnerability Risk Scoring System: Extending CVSS with ML',
  //   summary: 'A deep dive into designing and implementing a contextual vulnerability scoring system...',
  //   category: 'vulnerability-research',
  //   tags: ['vulnerability-management', 'machine-learning', 'cvss'],
  //   publishedDate: '2025-01-15',
  //   status: 'published',
  //   featured: true,
  // },
];

// ── Helper Functions ─────────────────────────────────────────

export function getPublishedArticles(): ResearchArticle[] {
  return researchArticles.filter(a => a.status === 'published');
}

export function getFeaturedArticles(): ResearchArticle[] {
  return researchArticles.filter(a => a.featured && a.status === 'published');
}

export function getArticleBySlug(slug: string): ResearchArticle | undefined {
  return researchArticles.find(a => a.slug === slug);
}

export function getArticlesByCategory(
  category: ResearchArticle['category']
): ResearchArticle[] {
  return researchArticles.filter(
    a => a.category === category && a.status === 'published'
  );
}
