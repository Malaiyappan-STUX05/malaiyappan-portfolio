'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap } from 'lucide-react';
import { getProfile, getSkillCategories, getFeaturedProjects } from '@/lib/data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

const profile = getProfile();
const skillCategories = getSkillCategories();
const featuredProjects = getFeaturedProjects();

const stats = [
  { label: 'Featured Projects', value: featuredProjects.length.toString() },
  { label: 'Skill Categories', value: skillCategories.length.toString() },
  { label: 'Certifications', value: '5' },
  { label: 'Internships', value: '5' },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="About"
          title="Who I Am"
          description="Cybersecurity engineer focused on building intelligent security systems."
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left column — Photo + Info */}
          <AnimatedSection
            direction="left"
            className="lg:col-span-2"
          >
            <Card variant="glass" className="h-full">
              {/* Avatar */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-2xl overflow-hidden bg-[#1A1A25] border-2 border-[rgba(0,240,255,0.15)]">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
                {/* Fallback if image doesn't load */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#1A1A25] text-3xl font-black text-[#00F0FF]">
                  {profile.firstName[0]}{profile.lastName[0]}
                </div>
              </div>

              {/* Name & Role */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-[#E8E8F0]">
                  {profile.name}
                </h3>
                <p className="text-[#00F0FF] font-medium mt-1">
                  {profile.role}
                </p>
              </div>

              {/* Quick info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-[#9A9AAA]">
                  <MapPin className="w-4 h-4 text-[#00F0FF] flex-shrink-0" />
                  {profile.location}
                </div>
                {profile.education.map((edu, i) => (
                  <div key={i} className="flex items-start gap-3 text-[#9A9AAA]">
                    <GraduationCap className="w-4 h-4 text-[#00F0FF] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[#E8E8F0] font-medium text-sm">
                        {edu.degree}
                      </p>
                      <p className="text-xs">{edu.institution}</p>
                      <p className="text-xs text-[#5A5A72]">{edu.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </AnimatedSection>

          {/* Right column — Bio + Stats */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <AnimatedSection direction="right">
              <Card variant="glass">
                <h3 className="text-lg font-bold text-[#E8E8F0] mb-4">
                  My Approach
                </h3>
                <div className="space-y-4 text-[#9A9AAA] leading-relaxed">
                  <p>
                    I do not just use security tools — I engineer them. From
                    enhancing CVSS-based vulnerability scoring with machine
                    learning to architecting defense-in-depth file upload
                    pipelines, I build systems that make security teams more
                    effective.
                  </p>
                  <p>
                    My work sits at the intersection of application security,
                    DevSecOps, and security research. I focus on building
                    practical solutions to real security problems — systems
                    that prioritize what matters, detect what is hidden, and
                    protect what is critical.
                  </p>
                  <p>
                    Through internships with Palo Alto Networks, Zscaler, and
                    Hack Secure, I have gained hands-on experience across the
                    security stack — from network security and cloud platforms
                    to penetration testing and security research.
                  </p>
                </div>
              </Card>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection direction="up" delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                  <Card
                    key={stat.label}
                    variant="default"
                    className="text-center"
                  >
                    <div className="text-3xl font-black text-[#00F0FF]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#5A5A72] mt-1 font-medium uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
