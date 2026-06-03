"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project, type ThreatLevel } from "@/lib/data/projects";

const threatColors: Record<ThreatLevel, { bg: string; text: string; border: string }> = {
  CRITICAL: { bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/30" },
  HIGH: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/30" },
  MEDIUM: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/30" },
  LOW: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/30" },
};

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const colors = threatColors[project.threatLevel];
  return (
    <motion.div
      layoutId={`project-${project.id}`}
      onClick={onClick}
      className={`card-glass p-6 cursor-pointer group relative overflow-hidden border ${colors.border}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className={`px-2 py-0.5 text-xs font-mono font-bold ${colors.bg} ${colors.text} rounded border ${colors.border}`}>
          {project.threatLevel}
        </span>
        <svg className="w-4 h-4 text-text-muted group-hover:text-accent-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
      <h3 className="font-display font-semibold text-text-primary mb-1 group-hover:text-accent-primary transition-colors">{project.title}</h3>
      <p className="text-text-muted text-sm mb-4">{project.subtitle}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tools.map((tool) => (
          <span key={tool} className="px-2 py-0.5 text-xs font-mono text-text-secondary bg-bg-tertiary rounded border border-border/50">{tool}</span>
        ))}
      </div>
      <p className="text-text-secondary text-sm line-clamp-2">{project.description}</p>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const colors = threatColors[project.threatLevel];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-bg-primary/80 backdrop-blur-sm" />
      <motion.div
        layoutId={`project-${project.id}`}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto card-glass p-8 border border-border"
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-2 text-text-muted hover:text-text-primary transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <span className={`inline-block px-3 py-1 text-xs font-mono font-bold ${colors.bg} ${colors.text} rounded border ${colors.border} mb-4`}>
          THREAT LEVEL: {project.threatLevel}
        </span>
        <h2 className="font-display text-display-md font-bold text-text-primary mb-2">{project.title}</h2>
        <p className="text-text-secondary mb-6">{project.subtitle}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tools.map((tool) => (
            <span key={tool} className="px-3 py-1 text-sm font-mono text-accent-primary bg-accent-primary/10 rounded border border-accent-primary/20">{tool}</span>
          ))}
        </div>
        <p className="text-text-secondary mb-6">{project.description}</p>
        <div className="mb-6">
          <h4 className="font-mono text-xs uppercase tracking-wider text-text-muted mb-3">Key Outcomes</h4>
          <ul className="space-y-3">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-sm text-text-secondary">
                <span className="text-accent-primary mt-0.5 shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-3">
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View Code
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="section-label">// Projects</span>
          <h2 className="section-title">Mission Briefings</h2>
          <p className="section-subtitle">Security systems and tools engineered from the ground up. Click any briefing for full details.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </section>
  );
}
