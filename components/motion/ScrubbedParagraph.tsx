'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isReducedMotion } from '@/lib/motion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrubbedParagraphProps {
  text: string;
  className?: string;
}

export default function ScrubbedParagraph({ text, className = '' }: ScrubbedParagraphProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (isReducedMotion() || !containerRef.current) return;

    const words = wordsRef.current.filter(Boolean);
    if (words.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: 0.22 },
        {
          opacity: 1,
          stagger: 0.02,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'bottom 50%',
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [text]);

  const words = text.split(' ');

  return (
    <p
      ref={containerRef}
      className={`font-body text-17 md:text-21 text-forest-ink leading-[1.6] max-w-[68ch] ${className}`}
    >
      {words.map((word, idx) => (
        <span
          key={idx}
          ref={(el) => {
            if (el) wordsRef.current[idx] = el;
          }}
          className="inline-block mr-[0.25em] transition-opacity duration-150"
        >
          {word}
        </span>
      ))}
    </p>
  );
}
