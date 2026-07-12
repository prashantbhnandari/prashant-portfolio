'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, Download, FolderGit2, Github, Linkedin, Mail } from 'lucide-react';
import { heroTypingRoles, personal } from '@/lib/data';
import { useTypingEffect } from '@/hooks/use-typing-effect';
import { ParticlesBackground } from '@/components/effects/particles-background';
import { FloatingIcons } from '@/components/effects/floating-icons';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export function Hero() {
  const typed = useTypingEffect({ words: heroTypingRoles });

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <ParticlesBackground />
      <FloatingIcons />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-5 pt-20 pb-16 text-center"
      >
        <motion.div variants={item} className="relative mb-10">
          <ProfilePhoto />
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m <span className="gradient-text">Prashant Bhandari</span>
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-4 flex items-center justify-center gap-1 font-display text-xl font-semibold text-white sm:text-2xl"
        >
          <span>I&apos;m a </span>
          <span className="gradient-text">{typed}</span>
          <span className="ml-0.5 inline-block h-7 w-[3px] animate-blink bg-blue-400 sm:h-8" />
        </motion.div>

        <motion.p
          variants={item}
          className="mx-auto mt-5 max-w-xl text-balance text-base text-white/60 sm:text-lg"
        >
          {personal.subtitle}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] sm:w-auto"
          >
            <FolderGit2 className="h-4 w-4" />
            View Projects
          </button>
          <a
            href={personal.resumeUrl}
            download
            className="flex w-full items-center justify-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10 sm:w-auto"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
          <button
            onClick={() => scrollTo('#contact')}
            className="flex w-full items-center justify-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10 sm:w-auto"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </button>
        </motion.div>

        <motion.div variants={item} className="mt-7 flex items-center justify-center gap-3">
          <a
            href={`https://github.com/${personal.github}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-white/60 transition-all hover:scale-110 hover:text-blue-400"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={`https://linkedin.com/in/${personal.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-white/60 transition-all hover:scale-110 hover:text-blue-400"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-white/60 transition-all hover:scale-110 hover:text-blue-400"
          >
            <Mail className="h-4 w-4" />
          </a>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => scrollTo('#about')}
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 transition-colors hover:text-white/70"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}

function ProfilePhoto() {
  return (
    <motion.div
      animate={{ y: [0, -16, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      whileHover={{ scale: 1.05 }}
      className="relative flex items-center justify-center"
    >
      <div
        className="absolute inset-0 scale-150 rounded-full blur-[60px]"
        style={{
          background:
            'radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(30,58,138,0.18) 45%, transparent 70%)',
        }}
      />

      <div className="absolute inset-0 scale-125 rounded-full bg-[#3B82F6]/25 blur-[35px]" />

      <div className="absolute -inset-[2px] rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-md" />

      <div className="absolute -inset-[2px] rounded-full ring-1 ring-blue-500/30" />

      <div
        className="relative h-[140px] w-[140px] overflow-hidden rounded-full sm:h-[170px] sm:w-[170px] md:h-[220px] md:w-[220px]"
        style={{
          boxShadow:
            '0 0 30px rgba(59,130,246,0.45), 0 0 60px rgba(59,130,246,0.2), 0 10px 40px rgba(0,0,0,0.5)',
        }}
      >
        <div className="absolute inset-0 z-10 rounded-full ring-1 ring-white/10" />
        <Image
          src="/images/image.png"
          alt="Prashant Bhandari - Full Stack Developer"
          fill
          priority
          sizes="(max-width: 640px) 140px, (max-width: 768px) 170px, 220px"
          className="object-cover object-top"
          quality={90}
        />
      </div>
    </motion.div>
  );
}
