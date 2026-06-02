'use client';

import { Download, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getProfile } from '@/lib/data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const profile = getProfile();

export function Resume() {
  return (
    <section id="resume" className="relative py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          label="Resume"
          title="My Professional Profile"
          description="Download my resume for the complete picture."
        />

        <AnimatedSection direction="up">
          <Card variant="glass" hover className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-[rgba(0,240,255,0.08)] border border-[rgba(0,240,255,0.15)] flex items-center justify-center flex-shrink-0">
                <FileText className="w-10 h-10 text-[#00F0FF]" />
              </div>

              {/* Content */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl font-bold text-[#E8E8F0]">
                  {profile.name} — Resume
                </h3>
                <p className="text-[#9A9AAA] text-sm mt-1">
                  Comprehensive overview of my experience, education,
                  projects, and certifications.
                </p>
              </div>

              {/* Download */}
              <Button
                variant="primary"
                size="lg"
                href={profile.resumeUrl}
                external
                className="flex-shrink-0"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </Button>
            </div>
          </Card>
        </AnimatedSection>

        {/* Full resume page link */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="mt-8 text-center">
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 text-[#00F0FF] font-semibold hover:text-[#00C4D4] transition-colors group"
            >
              View Full Resume Page
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
