'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MOTION, isReducedMotion } from '@/lib/motion';

interface WordRevealH1Props {
  text: string;
  className?: string;
  delay?: number;
  id?: string;
}

export default function WordRevealH1({ text, className = '', delay = 0.5, id }: WordRevealH1Props) {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (isReducedMotion() || !h1Ref.current) return;

    const words = wordsRef.current.filter(Boolean);
    if (words.length === 0) return;

    gsap.fromTo(
      words,
      { y: '115%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: MOTION.duration.panel,
        stagger: MOTION.stagger.word,
        ease: MOTION.ease.travel,
        delay,
        clearProps: 'will-change',
      }
    );
  }, [text, delay]);

  const wordsArray = text.split(' ');

  return (
    <h1
      ref={h1Ref}
      id={id}
      aria-label={text}
      className={`font-display text-forest-ink text-41 md:text-52 lg:text-65 leading-[1.05] tracking-[-0.025em] font-normal ${className}`}
    >
      {wordsArray.map((word, idx) => (
        <span
          key={idx}
          className="inline-block overflow-hidden align-top pb-[0.08em] mr-[0.28em] last:mr-0"
        >
          <span
            ref={(el) => {
              if (el) wordsRef.current[idx] = el;
            }}
            className="inline-block will-change-transform"
          >
            {word}
          </span>
        </span>
      ))}
    </h1>
  );
}
