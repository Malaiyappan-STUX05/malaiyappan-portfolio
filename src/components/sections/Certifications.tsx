'use client';

import Image from 'next/image';
import { ExternalLink, Award } from 'lucide-react';
import { getCertifications } from '@/lib/data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

const allCertifications = getCertifications();

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Certifications"
          title="Credentials & Certifications"
          description="Industry-recognized certifications validating my cybersecurity expertise."
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCertifications.map(cert => (
            <StaggerItem key={cert.id}>
              <Card
                variant="glass"
                hover
                className="h-full flex flex-col"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  {/* Logo placeholder */}
                  <div className="w-12 h-12 rounded-xl bg-[#1A1A25] border border-[rgba(0,240,255,0.1)] flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {cert.logo ? (
                      <Image
                        src={cert.logo}
                        alt={cert.issuer}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    ) : (
                      <Award className="w-6 h-6 text-[#00F0FF]" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-[#E8E8F0] leading-snug">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-[#00F0FF] font-medium mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="mt-auto pt-4 border-t border-[rgba(0,240,255,0.06)]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#5A5A72]">
                      Issued: {cert.issueDate}
                      {cert.expiryDate && ` · Expires: ${cert.expiryDate}`}
                    </span>
                    {cert.featured && (
                      <Badge variant="cyan" size="sm">
                        Featured
                      </Badge>
                    )}
                  </div>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#00F0FF] hover:text-[#00C4D4] transition-colors mt-3"
                    >
                      Verify Credential
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
