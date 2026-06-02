import { type Metadata } from 'next';
import { MapPin, GraduationCap, Mail, Linkedin, Github } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { getProfile, getSiteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: `About — ${getSiteConfig().name}`,
  description: `Learn about ${getProfile().name}, a cybersecurity engineer specializing in application security, DevSecOps, and security research.`,
  openGraph: {
    title: `About — ${getSiteConfig().name}`,
    description: getProfile().shortBio,
  },
};

const site = getSiteConfig();
const profile = getProfile();

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-24 md:pt-32">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection direction="up">
          <h1 className="text-4xl md:text-5xl font-black text-[#E8E8F0] tracking-tight">
            About Me
          </h1>
          <p className="mt-4 text-xl text-[#9A9AAA]">
            {profile.shortBio}
          </p>
        </AnimatedSection>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {/* Bio — 2 columns */}
          <div className="md:col-span-2 space-y-6">
            <AnimatedSection direction="up" delay={0.1}>
              <Card variant="glass">
                <h2 className="text-xl font-bold text-[#E8E8F0] mb-4">
                  My Story
                </h2>
                <div className="space-y-4 text-[#9A9AAA] leading-relaxed">
                  <p>{profile.bio}</p>
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <Card variant="glass">
                <h2 className="text-xl font-bold text-[#E8E8F0] mb-4">
                  What I Focus On
                </h2>
                <ul className="space-y-3 text-[#9A9AAA]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#00F0FF] mt-1">›</span>
                    <span>
                      <strong className="text-[#E8E8F0]">Application Security</strong> —
                      Building tools and processes to identify, prioritize, and
                      remediate security vulnerabilities in applications.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00F0FF] mt-1">›</span>
                    <span>
                      <strong className="text-[#E8E8F0]">DevSecOps</strong> —
                      Integrating security into CI/CD pipelines and automating
                      security controls in the development lifecycle.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00F0FF] mt-1">›</span>
                    <span>
                      <strong className="text-[#E8E8F0]">Security Research</strong> —
                      Investigating emerging threats, contributing to security
                      publications, and exploring how AI can reshape defensive
                      security.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00F0FF] mt-1">›</span>
                    <span>
                      <strong className="text-[#E8E8F0]">Cloud Security</strong> —
                      Securing cloud infrastructure, implementing security
                      groups, IAM policies, and monitoring cloud environments.
                    </span>
                  </li>
                </ul>
              </Card>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <AnimatedSection direction="left" delay={0.15}>
              <Card variant="glass">
                <h3 className="text-sm font-semibold text-[#5A5A72] uppercase tracking-wider mb-4">
                  Quick Info
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-[#9A9AAA]">
                    <MapPin className="w-4 h-4 text-[#00F0FF] flex-shrink-0" />
                    {profile.location}
                  </div>
                  {profile.education.map((edu, i) => (
                    <div key={i} className="flex items-start gap-3 text-[#9A9AAA]">
                      <GraduationCap className="w-4 h-4 text-[#00F0FF] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[#E8E8F0] font-medium">{edu.degree}</p>
                        <p className="text-xs">{edu.institution}</p>
                        <p className="text-xs text-[#5A5A72]">{edu.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.25}>
              <Card variant="glass">
                <h3 className="text-sm font-semibold text-[#5A5A72] uppercase tracking-wider mb-4">
                  Get in Touch
                </h3>
                <div className="space-y-3">
                  <Button
                    variant="secondary"
                    size="sm"
                    href="mailto:malaiyappan.official@gmail.com"
                    external
                    className="w-full justify-center"
                  >
                    <Mail className="w-4 h-4" />
                    Email Me
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    href="https://www.linkedin.com/in/malaiyappanssecurityprofessional/"
                    external
                    className="w-full justify-center"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    href="https://github.com/Malaiyappan-STUX05"
                    external
                    className="w-full justify-center"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </main>
  );
}
