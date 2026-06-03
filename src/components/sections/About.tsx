"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data/education";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="section-label">// About</span>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-subtitle">
            A cybersecurity engineer in the making — combining academic rigor with real-world security operations experience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-3 space-y-6"
          >
            <motion.p variants={itemVariants} className="text-text-secondary text-lg leading-relaxed">
              I&apos;m a final-year Computer Science Engineering student at SRM Institute with a specialization in Cybersecurity. Over the past two years, I&apos;ve completed{" "}
              <span className="text-text-primary font-medium">5 security internships</span> spanning blue team operations, vulnerability assessment, cloud security, and security research.
            </motion.p>
            <motion.p variants={itemVariants} className="text-text-secondary leading-relaxed">
              My work has involved implementing <span className="text-accent-primary">Zero Trust architectures</span> at Palo Alto Networks and Zscaler, conducting{" "}
              <span className="text-accent-primary">VAPT for 15+ applications</span> at Corizo Technologies, and building{" "}
              <span className="text-accent-primary">ML-powered threat detection systems</span> as personal projects.
            </motion.p>
            <motion.p variants={itemVariants} className="text-text-secondary leading-relaxed">
              I&apos;m passionate about building intelligent security systems that don&apos;t just detect threats — they{" "}
              <span className="text-accent-primary">predict and prevent</span> them. Currently seeking full-time opportunities in application security, blue team operations, or DevSecOps.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-4">
              {["Chennai, India", "SRM Institute", "GPA: 8.1/10", "Class of 2026"].map((item) => (
                <span key={item} className="px-3 py-1.5 text-sm font-mono text-text-secondary border border-border rounded-lg bg-surface">
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="card-glass p-6 sticky top-24">
              <h3 className="font-display font-semibold text-text-primary mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422A12.083 12.083 0 0121 12.017V19l-9 5-9-5v-6.983c0-2.08.89-4.032 2.4-5.385L12 14z" />
                </svg>
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-text-primary font-medium text-sm">{education.degree}</p>
                  <p className="text-accent-primary text-sm">{education.institution}</p>
                  <p className="text-text-muted text-xs mt-1">{education.location} &middot; {education.period}</p>
                  <p className="text-accent-secondary text-sm font-mono mt-1">GPA: {education.gpa}</p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-xs text-text-muted font-mono uppercase tracking-wider mb-3">Relevant Coursework</p>
                  <div className="flex flex-wrap gap-1.5">
                    {education.coursework.map((course) => (
                      <span key={course} className="px-2 py-1 text-xs font-mono text-text-secondary bg-bg-tertiary rounded border border-border/50">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
