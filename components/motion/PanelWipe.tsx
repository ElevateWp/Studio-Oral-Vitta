'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { isReducedMotion } from '@/lib/motion';

interface PanelWipeProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export default function PanelWipe({ children, className = '', as: Component = 'section' }: PanelWipeProps) {
  const panelRef = useRef<HTMLElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;

    if (isReducedMotion()) return;

    // Simple fade-up — no clipPath so layout is never broken
    gsap.set(el, { opacity: 0, y: 40 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            observer.unobserve(el);

            gsap.to(el, {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: 'power3.out',
            });
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -30px 0px',
        threshold: 0.05,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={panelRef}
      className={`relative w-full bg-forest text-paper overflow-hidden ${className}`}
    >
      {children}
    </Component>
  );
}
