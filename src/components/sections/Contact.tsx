'use client';

import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { getProfile, getSocials } from '@/lib/data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

const profile = getProfile();
const socials = getSocials();

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
};

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          label="Contact"
          title="Let's Connect"
          description="Open to opportunities in cybersecurity, application security, and DevSecOps."
        />

        <AnimatedSection direction="up">
          <Card variant="glass" className="max-w-2xl mx-auto text-center">
            {/* Location */}
            <div className="inline-flex items-center gap-2 text-[#9A9AAA] text-sm mb-8">
              <MapPin className="w-4 h-4 text-[#00F0FF]" />
              {profile.location}
            </div>

            {/* Social links */}
            <StaggerContainer className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {socials.map(social => {
                const Icon = iconMap[social.platform] || Mail;
                return (
                  <StaggerItem key={social.platform}>
                    <a
                      href={social.url}
                      target={
                        social.platform !== 'email' ? '_blank' : undefined
                      }
                      rel={
                        social.platform !== 'email'
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-[rgba(0,240,255,0.05)] border border-[rgba(0,240,255,0.1)] text-[#E8E8F0] hover:bg-[rgba(0,240,255,0.1)] hover:border-[rgba(0,240,255,0.25)] hover:text-[#00F0FF] transition-all duration-300 group"
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium text-sm">
                        {social.displayText}
                      </span>
                    </a>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            {/* Open to work note */}
            <div className="mt-8 pt-8 border-t border-[rgba(0,240,255,0.06)]">
              <p className="text-[#5A5A72] text-sm">
                Currently open to full-time roles, internships, and
                collaborative security research.
              </p>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}
