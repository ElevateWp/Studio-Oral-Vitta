'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { isReducedMotion } from '@/lib/motion';

export type AnimationType =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'fade-in'
  | 'zoom-in'
  | 'stagger';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: AnimationType;
  duration?: number;
  delay?: number;
  stagger?: number;
  distance?: number;
  threshold?: string;
  className?: string;
  as?: React.ElementType;
}

export default function AnimateOnScroll({
  children,
  animation = 'fade-up',
  duration = 0.75,
  delay = 0,
  stagger = 0.08,
  distance = 28,
  className = '',
  as: Component = 'div',
}: AnimateOnScrollProps) {
  const elRef = useRef<HTMLElement>(null);
  // Use a ref (not state) so we never re-run the effect when it flips
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    if (isReducedMotion()) {
      // Make visible immediately
      gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1 });
      hasAnimatedRef.current = true;
      return;
    }

    // Set initial hidden state
    let initVars: gsap.TweenVars = { opacity: 0 };
    switch (animation) {
      case 'fade-up':    initVars.y = distance; break;
      case 'fade-down':  initVars.y = -distance; break;
      case 'fade-left':  initVars.x = distance; break;
      case 'fade-right': initVars.x = -distance; break;
      case 'zoom-in':    initVars.scale = 0.94; initVars.y = distance * 0.4; break;
      case 'stagger':    initVars.y = distance; break;
      case 'fade-in':    break;
    }

    if (animation === 'stagger' && el.children.length > 0) {
      gsap.set(Array.from(el.children), initVars);
    } else {
      gsap.set(el, initVars);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            observer.unobserve(el);

            const toVars: gsap.TweenVars = {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration,
              delay,
              ease: 'power3.out',
              clearProps: 'transform',
            };

            if (animation === 'stagger' && el.children.length > 0) {
              gsap.to(Array.from(el.children), { ...toVars, stagger });
            } else {
              gsap.to(el, toVars);
            }
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

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Component
      ref={elRef}
      className={`will-change-[transform,opacity] ${className}`}
    >
      {children}
    </Component>
  );
}
