'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isReducedMotion } from '@/lib/motion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface MediaParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // default 0.08 (8%)
}

export default function MediaParallax({
  children,
  className = '',
  speed = 0.08,
}: MediaParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion() || !containerRef.current || !targetRef.current) return;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;
      const effectiveSpeed = isMobile ? speed * 0.5 : speed;
      const yPercent = effectiveSpeed * 100;

      gsap.fromTo(
        targetRef.current,
        { yPercent: -yPercent },
        {
          yPercent: yPercent,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div ref={targetRef} className="w-full h-full will-change-transform scale-[1.14]">
        {children}
      </div>
    </div>
  );
}
