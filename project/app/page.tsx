'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Skills } from '@/components/sections/skills';
import { Projects } from '@/components/sections/projects';
import { Education } from '@/components/sections/education';
import { Certifications } from '@/components/sections/certifications';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { AnimatedBackground } from '@/components/effects/animated-background';
import { CustomCursor } from '@/components/effects/custom-cursor';
import { ScrollProgress } from '@/components/effects/scroll-progress';
import { LoadingScreen } from '@/components/effects/loading-screen';
import { MouseGlow } from '@/components/effects/mouse-glow';
import { BackToTop } from '@/components/effects/back-to-top';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <AnimatedBackground />
      <MouseGlow />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
      </motion.main>

      <BackToTop />
    </>
  );
}
