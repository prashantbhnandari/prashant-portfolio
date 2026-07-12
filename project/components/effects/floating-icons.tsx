'use client';

import { motion } from 'framer-motion';
import { Braces, Code2, Database, Github, Hash, Server, Terminal } from 'lucide-react';

const icons = [
  { Icon: Code2, x: '8%', y: '18%', delay: 0 },
  { Icon: Terminal, x: '85%', y: '12%', delay: 0.5 },
  { Icon: Database, x: '78%', y: '70%', delay: 1 },
  { Icon: Server, x: '12%', y: '75%', delay: 1.5 },
  { Icon: Hash, x: '45%', y: '85%', delay: 0.8 },
  { Icon: Github, x: '92%', y: '45%', delay: 1.2 },
  { Icon: Braces, x: '5%', y: '45%', delay: 0.3 },
];

export function FloatingIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {icons.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute text-blue-400/20"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -24, 0],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay,
          }}
        >
          <Icon className="h-10 w-10 md:h-14 md:w-14" strokeWidth={1.2} />
        </motion.div>
      ))}
    </div>
  );
}
