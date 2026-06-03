"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/[0.02] to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="section-label">// Experience</span>
          <h2 className="section-title">Mission History</h2>
          <p className="section-subtitle">Real-world security operations across industry leaders and startups.</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 last:mb-0 md:flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-accent-primary border-4 border-bg-primary -translate-x-1.5 md:-translate-x-1.5 mt-6 z-10" />

              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="card-glass-hover p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display font-semibold text-text-primary">{exp.role}</h3>
                      <p className="text-accent-primary text-sm">{exp.company}</p>
                    </div>
                    <span className="text-xs font-mono text-text-muted px-2 py-1 bg-bg-tertiary rounded border border-border/50">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-text-muted text-xs mb-4">{exp.location} &middot; {exp.type}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex gap-2 text-sm text-text-secondary">
                        <span className="text-accent-primary mt-1.5 shrink-0">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs font-mono text-text-muted bg-bg-tertiary rounded border border-border/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
