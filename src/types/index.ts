// ─────────────────────────────────────────────────────────────
// Core Type Definitions for Malaiyappan S Portfolio
// All data files and components consume these interfaces.
// ─────────────────────────────────────────────────────────────

// ── Social Links ─────────────────────────────────────────────

export interface Social {
  platform: string;
  url: string;
  icon: string;
  displayText: string;
}

// ── Profile ──────────────────────────────────────────────────

export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  tagline: string;
  bio: string;
  shortBio: string;
  location: string;
  avatar: string;
  resumeUrl: string;
  education: Education[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

// ── Projects ─────────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  problemStatement: string;
  solutionOverview: string;
  architectureNotes: string;
  threatModel: string;
  techStack: TechCategory[];
  implementationDetails: string;
  challengesFaced: string;
  lessonsLearned: string;
  futureImprovements: string;
  screenshots: Screenshot[];
  githubUrl: string;
  liveDemoUrl?: string;
  status: ProjectStatus;
  featured: boolean;
  order: number;
  tags: string[];
}

export type ProjectStatus = 'completed' | 'in-progress' | 'planned';

export interface TechCategory {
  category: string;
  items: string[];
}

export interface Screenshot {
  src: string;
  alt: string;
  caption?: string;
}

// ── Skills ───────────────────────────────────────────────────

export type SkillLevel = 'advanced' | 'intermediate' | 'working-knowledge';

export interface Skill {
  name: string;
  level: SkillLevel;
  description?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  skills: Skill[];
}

// ── Experience ───────────────────────────────────────────────

export type ExperienceType =
  | 'full-time'
  | 'part-time'
  | 'internship'
  | 'self-directed'
  | 'research';

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  achievements: string[];
  techUsed: string[];
  type: ExperienceType;
}

// ── Certifications ───────────────────────────────────────────

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string | null;
  credentialId?: string;
  credentialUrl?: string;
  logo: string;
  featured: boolean;
}

// ── Research Contributions ──────────────────────────────────

export interface ResearchContribution {
  id: string;
  title: string;
  publication: string;
  description: string;
  url?: string;
  date: string;
}

// ── Research Articles (MDX) ──────────────────────────────────

export type ResearchCategory =
  | 'vulnerability-research'
  | 'appsec'
  | 'devsecops'
  | 'threat-analysis'
  | 'tooling';

export type ArticleStatus = 'published' | 'draft';

export interface ResearchArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: ResearchCategory;
  tags: string[];
  publishedDate: string;
  updatedDate?: string;
  status: ArticleStatus;
  featured: boolean;
}

export interface ResearchArticleWithContent extends ResearchArticle {
  content: string;
  readTime: string;
  tableOfContents: TableOfContentsItem[];
}

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

// ── Site Configuration ───────────────────────────────────────

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  keywords: string[];
  socials: Social[];
  navLinks: NavLink[];
  footerLinks: FooterLink[];
}

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}
