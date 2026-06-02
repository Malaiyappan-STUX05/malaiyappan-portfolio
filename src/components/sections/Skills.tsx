'use client';

import {
  Shield,
  Code,
  Cloud,
  Activity,
  Terminal,
  Search,
} from 'lucide-react';
import { getSkillCategories } from '@/lib/data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { SkillTag, SkillLevelBadge } from '@/components/ui/SkillTag';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Code,
  Cloud,
  Activity,
  Terminal,
  Search,
};

const skillCategories = getSkillCategories();

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Skills"
          title="Technical Arsenal"
          description="Security tools, technologies, and domains I work with."
        />

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(category => {
            const Icon = iconMap[category.icon] || Shield;
            const advanced = category.skills.filter(
              s => s.level === 'advanced'
            );
            const intermediate = category.skills.filter(
              s => s.level === 'intermediate'
            );
            const working = category.skills.filter(
              s => s.level === 'working-knowledge'
            );

            return (
              <StaggerItem key={category.id}>
                <Card variant="glass" hover className="h-full">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(0,240,255,0.08)] border border-[rgba(0,240,255,0.15)] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#00F0FF]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#E8E8F0]">
                      {category.name}
                    </h3>
                  </div>

                  {/* Advanced */}
                  {advanced.length > 0 && (
                    <div className="mb-4">
                      <SkillLevelBadge level="advanced" className="mb-2" />
                      <div className="flex flex-wrap gap-2">
                        {advanced.map(skill => (
                          <SkillTag
                            key={skill.name}
                            name={skill.name}
                            description={skill.description}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Intermediate */}
                  {intermediate.length > 0 && (
                    <div className="mb-4">
                      <SkillLevelBadge level="intermediate" className="mb-2" />
                      <div className="flex flex-wrap gap-2">
                        {intermediate.map(skill => (
                          <SkillTag
                            key={skill.name}
                            name={skill.name}
                            description={skill.description}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Working Knowledge */}
                  {working.length > 0 && (
                    <div>
                      <SkillLevelBadge level="working-knowledge" className="mb-2" />
                      <div className="flex flex-wrap gap-2">
                        {working.map(skill => (
                          <SkillTag
                            key={skill.name}
                            name={skill.name}
                            description={skill.description}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
