'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Brain, Lightbulb, MessagesSquare, Puzzle, Sparkles, Users } from 'lucide-react';
import { aboutParagraphs, profileTraits } from '@/lib/data';
import { SectionHeading } from '@/components/section-heading';

const traitIcons = [
  { label: 'Quick Learner', Icon: Brain },
  { label: 'Communication Skills', Icon: MessagesSquare },
  { label: 'Problem Solving', Icon: Puzzle },
  { label: 'Team Collaboration', Icon: Users },
  { label: 'Creativity', Icon: Lightbulb },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="About Me" title="Who I Am" />

        <div className="mt-16 grid items-start gap-8 lg:grid-cols-5">

          {/* ─── Bio card ──────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass-strong rounded-3xl p-8 md:p-10">
              {/* Header with small photo */}
              <div className="mb-7 flex items-center gap-5">
                <AboutPhoto />
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">
                    Prashant Bhandari
                  </h3>
                  <p className="mt-0.5 text-sm text-blue-400">Full Stack Developer</p>
                </div>
              </div>

              <div className="space-y-4">
                {aboutParagraphs.map((p, i) => (
                  <p key={i} className="text-[15px] leading-relaxed text-white/70">
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() =>
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
                >
                  Let's Connect
                </button>
                <button
                  onClick={() =>
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="rounded-full glass px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
                >
                  See My Work
                </button>
              </div>
            </div>
          </motion.div>

          {/* ─── Traits card ───────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="gradient-border relative overflow-hidden rounded-3xl glass-strong p-8">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
              <h3 className="mb-6 font-display text-lg font-semibold text-white">What I Bring</h3>
              <div className="space-y-3">
                {profileTraits.map((trait, i) => {
                  const meta = traitIcons.find((t) => t.label === trait);
                  const Icon = meta?.Icon ?? Sparkles;
                  return (
                    <motion.div
                      key={trait}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                      className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3.5 transition-all hover:border-blue-500/30 hover:bg-blue-500/5"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400 transition-transform group-hover:scale-110">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium text-white/85">{trait}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Small circular profile photo for About header ─────────────────── */
function AboutPhoto() {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className="relative flex-shrink-0"
    >
      {/* Glow ring */}
      <div className="absolute -inset-[2px] rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 opacity-70" />
      {/* Photo */}
      <div
        className="relative h-20 w-20 overflow-hidden rounded-full"
        style={{ boxShadow: '0 0 20px rgba(59,130,246,0.45), 0 4px 20px rgba(0,0,0,0.4)' }}
      >
        <div className="absolute inset-0 z-10 rounded-full ring-1 ring-white/15" />
        <Image
          src="/images/image.png"
          alt="Prashant Bhandari"
          fill
          sizes="80px"
          className="object-cover object-top"
          quality={85}
        />
      </div>
    </motion.div>
  );
}
