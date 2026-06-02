import { type Metadata } from 'next';
import { Download, FileText, MapPin, Mail, Linkedin, Github, GraduationCap } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { SkillLevelBadge } from '@/components/ui/SkillTag';
import {
  getProfile,
  getSiteConfig,
  getExperiences,
  getSkillCategories,
  getCertifications,
  getProjectsForHomepage,
} from '@/lib/data';

export const metadata: Metadata = {
  title: `Resume — ${getSiteConfig().name}`,
  description: `Resume of ${getProfile().name}. Cybersecurity engineer with experience in application security, DevSecOps, and security research.`,
};

const site = getSiteConfig();
const profile = getProfile();
const experiences = getExperiences();
const skillCategories = getSkillCategories();
const certifications = getCertifications();
const projects = getProjectsForHomepage();

export default function ResumePage() {
  return (
    <main className="min-h-screen pt-24 pb-24 md:pt-32">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection direction="up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-[#E8E8F0] tracking-tight">
                Resume
              </h1>
              <p className="mt-2 text-lg text-[#9A9AAA]">
                {profile.name} — {profile.role}
              </p>
            </div>
            <Button
              variant="primary"
              size="lg"
              href={profile.resumeUrl}
              external
            >
              <Download className="w-5 h-5" />
              Download PDF
            </Button>
          </div>
        </AnimatedSection>

        <div className="space-y-12">
          {/* Contact Info */}
          <AnimatedSection direction="up" delay={0.1}>
            <Card variant="glass">
              <div className="flex flex-wrap gap-6 text-sm">
                <span className="inline-flex items-center gap-2 text-[#9A9AAA]">
                  <MapPin className="w-4 h-4 text-[#00F0FF]" />
                  {profile.location}
                </span>
                <a
                  href="mailto:malaiyappan.official@gmail.com"
                  className="inline-flex items-center gap-2 text-[#9A9AAA] hover:text-[#00F0FF] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#00F0FF]" />
                  {site.socials.find(s => s.platform === 'email')?.displayText}
                </a>
                <a
                  href="https://www.linkedin.com/in/malaiyappanssecurityprofessional/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#9A9AAA] hover:text-[#00F0FF] transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#00F0FF]" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Malaiyappan-STUX05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#9A9AAA] hover:text-[#00F0FF] transition-colors"
                >
                  <Github className="w-4 h-4 text-[#00F0FF]" />
                  GitHub
                </a>
              </div>
            </Card>
          </AnimatedSection>

          {/* Summary */}
          <AnimatedSection direction="up" delay={0.15}>
            <section>
              <h2 className="text-xl font-bold text-[#E8E8F0] mb-4 flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#00F0FF]" />
                Professional Summary
              </h2>
              <Card variant="glass">
                <p className="text-[#9A9AAA] leading-relaxed">
                  {profile.shortBio} Through internships with industry leaders
                  including Palo Alto Networks, Zscaler, and Hack Secure, I have
                  gained hands-on experience across the security stack. I contribute
                  to security research — including the National Cybersecurity
                  Research Handbook — and build practical tools for vulnerability
                  management, threat detection, and secure development.
                </p>
              </Card>
            </section>
          </AnimatedSection>

          {/* Education */}
          <AnimatedSection direction="up" delay={0.2}>
            <section>
              <h2 className="text-xl font-bold text-[#E8E8F0] mb-4 flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-[#00F0FF]" />
                Education
              </h2>
              <Card variant="glass">
                {profile.education.map((edu, i) => (
                  <div key={i}>
                    <h3 className="font-semibold text-[#E8E8F0]">{edu.degree}</h3>
                    <p className="text-[#00F0FF] text-sm">{edu.institution}</p>
                    <p className="text-[#5A5A72] text-sm">{edu.period}</p>
                  </div>
                ))}
              </Card>
            </section>
          </AnimatedSection>

          {/* Skills */}
          <AnimatedSection direction="up" delay={0.25}>
            <section>
              <h2 className="text-xl font-bold text-[#E8E8F0] mb-4 flex items-center gap-3">
                <Badge className="rounded-lg w-5 h-5 p-0 flex items-center justify-center bg-[rgba(0,240,255,0.15)]" />
                Technical Skills
              </h2>
              <Card variant="glass">
                <div className="space-y-5">
                  {skillCategories.map(cat => (
                    <div key={cat.id}>
                      <h3 className="text-sm font-semibold text-[#5A5A72] uppercase tracking-wider mb-2">
                        {cat.name}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map(skill => (
                          <div key={skill.name} className="flex items-center gap-1.5">
                            <span className="text-sm text-[#E8E8F0]">{skill.name}</span>
                            <SkillLevelBadge level={skill.level} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </section>
          </AnimatedSection>

          {/* Experience */}
          <AnimatedSection direction="up" delay={0.3}>
            <section>
              <h2 className="text-xl font-bold text-[#E8E8F0] mb-4 flex items-center gap-3">
                <Badge className="rounded-lg w-5 h-5 p-0 flex items-center justify-center bg-[rgba(0,240,255,0.15)]" />
                Experience & Internships
              </h2>
              <div className="space-y-4">
                {experiences.map(exp => (
                  <Card key={exp.id} variant="glass">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="font-semibold text-[#E8E8F0]">{exp.role}</h3>
                        <p className="text-[#00F0FF] text-sm">{exp.organization}</p>
                      </div>
                      <span className="text-xs text-[#5A5A72] font-mono flex-shrink-0">
                        {exp.startDate}{exp.endDate ? ` — ${exp.endDate}` : ' — Present'}
                      </span>
                    </div>
                    <p className="text-[#9A9AAA] text-sm mt-2">{exp.description}</p>
                    {exp.achievements.length > 0 && (
                      <ul className="mt-3 space-y-1">
                        {exp.achievements.map((a, i) => (
                          <li key={i} className="text-xs text-[#5A5A72] flex items-start gap-2">
                            <span className="text-[#00F0FF]">›</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    )}
                  </Card>
                ))}
              </div>
            </section>
          </AnimatedSection>

          {/* Projects */}
          <AnimatedSection direction="up" delay={0.35}>
            <section>
              <h2 className="text-xl font-bold text-[#E8E8F0] mb-4 flex items-center gap-3">
                <Badge className="rounded-lg w-5 h-5 p-0 flex items-center justify-center bg-[rgba(0,240,255,0.15)]" />
                Key Projects
              </h2>
              <div className="space-y-4">
                {projects.map(project => (
                  <Card key={project.id} variant="glass">
                    <h3 className="font-semibold text-[#E8E8F0]">{project.title}</h3>
                    <p className="text-[#9A9AAA] text-sm mt-1">{project.shortDescription}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {project.tags.slice(0, 4).map(tag => (
                        <Badge key={tag} variant="muted" size="sm">{tag}</Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </AnimatedSection>

          {/* Certifications */}
          <AnimatedSection direction="up" delay={0.4}>
            <section>
              <h2 className="text-xl font-bold text-[#E8E8F0] mb-4 flex items-center gap-3">
                <Badge className="rounded-lg w-5 h-5 p-0 flex items-center justify-center bg-[rgba(0,240,255,0.15)]" />
                Certifications
              </h2>
              <Card variant="glass">
                <div className="space-y-3">
                  {certifications.map(cert => (
                    <div key={cert.id} className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-[#E8E8F0] text-sm">{cert.name}</h3>
                        <p className="text-[#9A9AAA] text-xs">{cert.issuer}</p>
                      </div>
                      <span className="text-xs text-[#5A5A72]">{cert.issueDate}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </section>
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
}
