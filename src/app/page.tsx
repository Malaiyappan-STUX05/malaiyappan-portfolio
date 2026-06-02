import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Certifications } from '@/components/sections/Certifications';
import { ResearchContributions } from '@/components/sections/ResearchContributions';
import { ResearchWriteups } from '@/components/sections/ResearchWriteups';
import { Resume } from '@/components/sections/Resume';
import { Contact } from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <ResearchContributions />
      <ResearchWriteups />
      <Resume />
      <Contact />
    </main>
  );
}
