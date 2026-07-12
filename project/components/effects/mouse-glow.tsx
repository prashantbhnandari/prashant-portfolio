'use client';

import { useEffect, useState } from 'react';

export function MouseGlow() {
  const [position, setPosition] = useState({ x: -500, y: -500 });

  useEffect(() => {
    if (window.matchMedia('(pointer: fine)').matches === false) return;
    let raf = 0;
    const move = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setPosition({ x: e.clientX, y: e.clientY }));
    };
    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed -z-10 hidden h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px] transition-transform duration-200 ease-out lg:block"
      style={{ transform: `translate(${position.x - 200}px, ${position.y - 200}px)` }}
    />
  );
}
