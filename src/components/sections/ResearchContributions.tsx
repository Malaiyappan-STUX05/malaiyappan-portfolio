'use client';

import { BookOpen, ExternalLink } from 'lucide-react';
import { getResearchContributions } from '@/lib/data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

const contributions = getResearchContributions();

export function ResearchContributions() {
  if (contributions.length === 0) return null;

  return (
    <section id="research-contributions" className="relative py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          label="Research"
          title="Research Contributions"
          description="Published research and contributions to the cybersecurity community."
        />

        <StaggerContainer className="space-y-6">
          {contributions.map(contribution => (
            <StaggerItem key={contribution.id}>
              <Card variant="glass" hover>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(0,240,255,0.08)] border border-[rgba(0,240,255,0.15)] flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-[#00F0FF]" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-[#E8E8F0]">
                          {contribution.title}
                        </h3>
                        <p className="text-[#00F0FF] font-medium text-sm mt-0.5">
                          {contribution.publication}
                        </p>
                      </div>
                      <Badge variant="muted" size="sm">
                        {contribution.date}
                      </Badge>
                    </div>

                    <p className="text-[#9A9AAA] text-sm mt-3 leading-relaxed">
                      {contribution.description}
                    </p>

                    {contribution.url && (
                      <a
                        href={contribution.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-[#00F0FF] hover:text-[#00C4D4] transition-colors mt-4"
                      >
                        View Publication
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
