'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { projects } from '@/lib/data';
import { SectionHeading } from '@/components/section-heading';

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Projects" title="Things I've Built" />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group glass-strong relative flex flex-col overflow-hidden rounded-3xl p-7"
              >
                {/* Glow */}
                <div
                  className={`absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${project.gradient} opacity-10 blur-3xl transition-opacity group-hover:opacity-25`}
                />

                {/* Icon */}
                <div className="mb-5 flex items-center justify-between">
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient} text-white shadow-lg`}
                  >
                    <Icon className="h-7 w-7" />
                  </span>
                  <span className="font-display text-5xl font-bold text-white/5">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white">{project.title}</h3>

                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {project.description}
                </p>

                {project.features && (
                  <ul className="mt-5 grid grid-cols-2 gap-2">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-white/70">
                        <Check className="h-3.5 w-3.5 shrink-0 text-blue-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech */}
                <div className="mt-6 flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
