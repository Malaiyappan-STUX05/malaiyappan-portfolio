'use client';

import {
  FileText,
  AlertTriangle,
  Network,
  Shield,
  Wrench,
  Code,
  Puzzle,
  GraduationCap,
  Rocket,
  Camera,
  ArrowLeft,
} from 'lucide-react';
import Link from 'next/link';
import { type Project, type ResearchArticle } from '@/types';
import { Card } from '@/components/ui/Card';
import { ProjectHero } from './ProjectHero';
import { ProjectSection } from './ProjectSection';
import { ArchitectureDiagram, ArchitectureDiagramPlaceholder } from './ArchitectureDiagram';
import { TechStackList } from './TechStackList';
import { ProjectNavigation } from './ProjectNavigation';
import { ScreenshotGallery } from '@/components/ui/ScreenshotGallery';
import { CodeBlock } from '@/components/ui/CodeBlock';

interface ProjectContentProps {
  project: Project;
  previousProject?: Project;
  nextProject?: Project;
}

export function ProjectContent({
  project,
  previousProject,
  nextProject,
}: ProjectContentProps) {
  return (
    <article>
      <ProjectHero project={project} />

      <div className="max-w-4xl mx-auto px-6 pb-24">
        <div className="divide-y divide-[rgba(0,240,255,0.06)]">
          {/* Executive Summary */}
          <ProjectSection
            id="executive-summary"
            title="Executive Summary"
            icon={FileText}
          >
            <p>{project.detailedDescription}</p>
          </ProjectSection>

          {/* Problem Statement */}
          <ProjectSection
            id="problem-statement"
            title="Problem Statement"
            icon={AlertTriangle}
          >
            <p>{project.problemStatement}</p>
          </ProjectSection>

          {/* Solution Overview */}
          <ProjectSection
            id="solution-overview"
            title="Solution Overview"
            icon={Network}
          >
            <p>{project.solutionOverview}</p>
          </ProjectSection>

          {/* Architecture */}
          <ProjectSection
            id="architecture"
            title="Architecture"
            icon={Network}
          >
            <p className="mb-4">{project.architectureNotes}</p>
            {project.screenshots.length > 0 &&
              project.screenshots[0]?.alt.toLowerCase().includes('arch') ? (
              <ArchitectureDiagram
                src={project.screenshots[0].src}
                alt={project.screenshots[0].alt}
                caption={project.screenshots[0].caption}
              />
            ) : (
              <ArchitectureDiagramPlaceholder />
            )}
          </ProjectSection>

          {/* Technical Design */}
          <ProjectSection
            id="technical-design"
            title="Technical Design"
            icon={Code}
          >
            <p>{project.implementationDetails}</p>
          </ProjectSection>

          {/* Threat Model */}
          <ProjectSection
            id="threat-model"
            title="Threat Model & Security Considerations"
            icon={Shield}
          >
            <p>{project.threatModel}</p>
          </ProjectSection>

          {/* Technology Stack */}
          <ProjectSection
            id="tech-stack"
            title="Technology Stack"
            icon={Wrench}
          >
            <TechStackList categories={project.techStack} />
          </ProjectSection>

          {/* Implementation Details */}
          {project.implementationDetails && (
            <ProjectSection
              id="implementation"
              title="Implementation Details"
              icon={Code}
            >
              <p>{project.implementationDetails}</p>
            </ProjectSection>
          )}

          {/* Challenges Faced */}
          <ProjectSection
            id="challenges"
            title="Challenges Faced"
            icon={Puzzle}
          >
            <p>{project.challengesFaced}</p>
          </ProjectSection>

          {/* Lessons Learned */}
          <ProjectSection
            id="lessons"
            title="Lessons Learned"
            icon={GraduationCap}
          >
            <p>{project.lessonsLearned}</p>
          </ProjectSection>

          {/* Future Improvements */}
          <ProjectSection
            id="future"
            title="Future Improvements"
            icon={Rocket}
          >
            <p>{project.futureImprovements}</p>
          </ProjectSection>

          {/* Screenshots */}
          <ProjectSection
            id="screenshots"
            title="Screenshots & Visuals"
            icon={Camera}
          >
            <ScreenshotGallery screenshots={project.screenshots} />
          </ProjectSection>
        </div>

        {/* GitHub link */}
        <div className="mt-12 text-center">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[rgba(0,240,255,0.08)] border border-[rgba(0,240,255,0.15)] text-[#00F0FF] font-semibold hover:bg-[rgba(0,240,255,0.15)] transition-all"
          >
            View on GitHub →
          </a>
        </div>

        {/* Project navigation */}
        <ProjectNavigation
          previousProject={previousProject}
          nextProject={nextProject}
        />
      </div>
    </article>
  );
}
