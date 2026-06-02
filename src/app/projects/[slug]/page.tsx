import { notFound } from 'next/navigation';
import { type Metadata } from 'next';
import {
  projects,
  getProjectById,
  getAllProjectIds,
} from '@/data/projects';
import { ProjectContent } from '@/components/project/ProjectContent';
import { siteConfig } from '@/data/site';

// ── Generate static params for all projects ──────────────────

export function generateStaticParams() {
  return getAllProjectIds().map(id => ({ slug: id }));
}

// ── Generate metadata per project ────────────────────────────

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectById(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} — ${siteConfig.name}`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — ${siteConfig.name}`,
      description: project.shortDescription,
      type: 'article',
      url: `${siteConfig.url}/projects/${project.id}`,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — ${siteConfig.name}`,
      description: project.shortDescription,
    },
  };
}

// ── Page component ───────────────────────────────────────────

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectById(params.slug);

  if (!project) {
    notFound();
  }

  // Find previous/next for navigation
  const currentIndex = projects.findIndex(p => p.id === project.id);
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : undefined;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : undefined;

  return (
    <ProjectContent
      project={project}
      previousProject={previousProject}
      nextProject={nextProject}
    />
  );
}
