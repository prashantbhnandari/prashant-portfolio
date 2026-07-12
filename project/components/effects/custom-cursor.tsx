'use client';

import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: fine)').matches === false) return;

    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, input, textarea, [role="button"]');
      setIsHovering(!!interactive);
    };

    const leave = () => setIsVisible(false);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ring */}
      <div
        className="pointer-events-none fixed z-[9999] hidden h-8 w-8 rounded-full border border-blue-400/60 transition-[width,height,opacity] duration-200 lg:block"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
          width: isHovering ? '48px' : '32px',
          height: isHovering ? '48px' : '32px',
          marginLeft: isHovering ? '-8px' : '0',
          marginTop: isHovering ? '-8px' : '0',
        }}
      />
      {/* Inner dot */}
      <div
        className="pointer-events-none fixed z-[9999] hidden h-2 w-2 rounded-full bg-blue-400 lg:block"
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
          opacity: isHovering ? 0 : 1,
          transition: 'opacity 0.2s',
        }}
      />
    </>
  );
}
