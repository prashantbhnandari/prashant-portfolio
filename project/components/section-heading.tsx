'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, className }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn('mx-auto max-w-2xl text-center', className)}
    >
      <span className="mb-3 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
    </motion.div>
  );
}
