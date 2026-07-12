'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personal } from '@/lib/data';

export function Footer() {
  const socials = [
    {
      Icon: Github,
      label: 'GitHub',
      href: `https://github.com/${personal.github}`,
    },
    {
      Icon: Linkedin,
      label: 'LinkedIn',
      href: `https://linkedin.com/in/${personal.linkedin}`,
    },
    {
      Icon: Mail,
      label: 'Email',
      href: `mailto:${personal.email}`,
    },
  ];

  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-6 md:flex-row"
        >
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 font-display text-xs font-bold text-white">
              PB
            </span>
            <span className="font-display text-sm font-medium text-white">
              {personal.name}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="glass flex h-10 w-10 items-center justify-center rounded-full text-white/60 transition-all hover:scale-110 hover:text-blue-400"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <p className="text-xs text-white/40">
            © 2026 {personal.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
