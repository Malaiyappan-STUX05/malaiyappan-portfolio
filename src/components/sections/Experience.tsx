'use client';

import { getExperiences } from '@/lib/data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TimelineItem } from '@/components/ui/TimelineItem';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const experiences = getExperiences();

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          label="Experience"
          title="Professional Journey"
          description="Internships and team experiences that have shaped my cybersecurity engineering skills."
        />

        <AnimatedSection direction="up">
          <div className="relative">
            {experiences.map((exp, i) => (
              <TimelineItem
                key={exp.id}
                experience={exp}
                index={i}
                isLast={i === experiences.length - 1}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
