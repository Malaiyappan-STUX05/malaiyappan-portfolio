"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/data/achievements";

const typeIcons: Record<string, string> = {
  certification: "🏅",
  award: "🏆",
  competition: "🎯",
  role: "⭐",
};

const typeColors: Record<string, string> = {
  certification: "border-accent-primary/30 bg-accent-primary/5",
  award: "border-accent-secondary/30 bg-accent-secondary/5",
  competition: "border-cyan-500/30 bg-cyan-500/5",
  role: "border-purple-500/30 bg-purple-500/5",
};

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="section-label">// Achievements</span>
          <h2 className="section-title">Certifications & Recognition</h2>
          <p className="section-subtitle">
            Industry certifications, competition results, and leadership roles.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`card-glass p-5 border ${typeColors[achievement.type]}`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl">{typeIcons[achievement.type]}</span>
                <span className="text-xs font-mono text-text-muted">{achievement.date}</span>
              </div>
              <h4 className="font-semibold text-text-primary text-sm mb-1">
                {achievement.title}
              </h4>
              <p className="text-text-muted text-xs leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
