'use client';

import { motion } from 'framer-motion';
import { Award, BadgeCheck } from 'lucide-react';
import { certifications } from '@/lib/data';
import { SectionHeading } from '@/components/section-heading';

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading eyebrow="Certifications" title="Achievements & Certifications" />

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group glass-strong relative flex items-center gap-4 overflow-hidden rounded-2xl p-6"
            >
              <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-opacity group-hover:bg-blue-500/20" />
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 text-blue-400">
                <Award className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <h3 className="font-display text-sm font-semibold leading-snug text-white">
                  {cert.title}
                </h3>
                {cert.issuer && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-blue-400">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    {cert.issuer}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
