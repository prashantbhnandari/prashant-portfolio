'use client';

import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';
import { education } from '@/lib/data';
import { SectionHeading } from '@/components/section-heading';

export function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading eyebrow="Education" title="My Journey" />

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-blue-500 via-blue-500/40 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {education.map((item, i) => {
              const isLeft = i % 2 === 0;
              const Icon = i === 0 ? GraduationCap : School;
              return (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex md:items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-4 top-1 z-10 -translate-x-1/2 md:left-1/2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-500/40 bg-[#0a0a12] text-blue-400">
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>

                  {/* Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="glass-strong rounded-2xl p-5 transition-transform hover:scale-[1.02]">
                      <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                        {item.period}
                      </span>
                      <h3 className="mt-2 font-display text-base font-semibold text-white">
                        {item.degree}
                      </h3>
                      {item.institution && (
                        <p className="mt-1 text-sm text-white/60">{item.institution}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
