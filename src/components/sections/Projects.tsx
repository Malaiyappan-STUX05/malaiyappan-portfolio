'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getProjectsForHomepage } from '@/lib/data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

const homepageProjects = getProjectsForHomepage();

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          description="Security systems and tools I have engineered from the ground up."
        />

        {/* Featured project — full width */}
        {homepageProjects.length > 0 && (
          <AnimatedSection direction="up" className="mb-8">
            <ProjectCard project={homepageProjects[0]} featured index={0} />
          </AnimatedSection>
        )}

        {/* Remaining projects — grid */}
        {homepageProjects.length > 1 && (
          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {homepageProjects.slice(1).map((project, i) => (
              <StaggerItem key={project.id}>
                <ProjectCard project={project} index={i + 1} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}

        {/* View all projects link */}
        <AnimatedSection direction="up" delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[#00F0FF] font-semibold hover:text-[#00C4D4] transition-colors group"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
