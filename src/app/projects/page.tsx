import { type Metadata } from 'next';
import { projects } from '@/data/projects';
import { siteConfig } from '@/data/site';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: `Projects — ${siteConfig.name}`,
  description:
    'Security projects and tools engineered by Malaiyappan S. Vulnerability scoring, threat detection, secure APIs, and DevSecOps.',
  openGraph: {
    title: `Projects — ${siteConfig.name}`,
    description:
      'Security projects and tools engineered by Malaiyappan S.',
    url: `${siteConfig.url}/projects`,
  },
};

export default function ProjectsPage() {
  const featured = projects.filter(p => p.featured).sort((a, b) => a.order - b.order);
  const other = projects.filter(p => !p.featured).sort((a, b) => a.order - b.order);

  return (
    <main className="min-h-screen pt-24 pb-24 md:pt-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection direction="up">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-[#E8E8F0] tracking-tight">
              Projects
            </h1>
            <p className="mt-4 text-lg text-[#9A9AAA] max-w-2xl">
              Security systems and tools I have engineered. Each project
              addresses a specific security problem with a practical,
              well-architected solution.
            </p>
          </div>
        </AnimatedSection>

        {/* Featured projects */}
        {featured.length > 0 && (
          <section className="mb-16">
            <AnimatedSection direction="up" delay={0.1}>
              <h2 className="text-sm font-semibold text-[#00F0FF] uppercase tracking-[0.2em] mb-8">
                Featured Projects
              </h2>
            </AnimatedSection>
            <StaggerContainer className="space-y-8">
              {featured.map((project, i) => (
                <StaggerItem key={project.id}>
                  <ProjectCard project={project} featured index={i} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>
        )}

        {/* Other projects */}
        {other.length > 0 && (
          <section>
            <AnimatedSection direction="up" delay={0.1}>
              <h2 className="text-sm font-semibold text-[#5A5A72] uppercase tracking-[0.2em] mb-8">
                Additional Projects
              </h2>
            </AnimatedSection>
            <StaggerContainer className="grid md:grid-cols-2 gap-6">
              {other.map((project, i) => (
                <StaggerItem key={project.id}>
                  <ProjectCard project={project} index={i} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>
        )}
      </div>
    </main>
  );
}
