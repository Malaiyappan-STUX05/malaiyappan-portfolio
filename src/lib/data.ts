// ─────────────────────────────────────────────────────────────
// Data Access Helpers
// Centralized imports so components import from one place.
// ─────────────────────────────────────────────────────────────

import { profile } from '@/data/profile';
import { socials } from '@/data/socials';
import { skillCategories } from '@/data/skills';
import { experiences } from '@/data/experience';
import { certifications, featuredCertifications } from '@/data/certifications';
import {
  projects,
  getProjectById,
  getFeaturedProjects,
  getAllProjectIds,
} from '@/data/projects';
import {
  researchContributions,
  researchArticles,
  getPublishedArticles,
} from '@/data/research';
import { siteConfig } from '@/data/site';

// ── Profile ──────────────────────────────────────────────────

export function getProfile() {
  return profile;
}

export function getSocials() {
  return socials;
}

// ── Skills ───────────────────────────────────────────────────

export function getSkillCategories() {
  return skillCategories;
}

// ── Experience ───────────────────────────────────────────────

export function getExperiences() {
  return experiences;
}

// ── Certifications ───────────────────────────────────────────

export function getCertifications() {
  return certifications;
}

export function getFeaturedCertifications() {
  return featuredCertifications;
}

// ── Projects ─────────────────────────────────────────────────

export { getProjectById, getFeaturedProjects, getAllProjectIds, projects };

// ── Research ─────────────────────────────────────────────────

export function getResearchContributions() {
  return researchContributions;
}

export function getResearchArticles() {
  return getPublishedArticles();
}

export { researchArticles };

// ── Site ─────────────────────────────────────────────────────

export function getSiteConfig() {
  return siteConfig;
}
