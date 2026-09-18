'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MOTION, isReducedMotion } from '@/lib/motion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface CountingNumberProps {
  value: number;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export default function CountingNumber({
  value,
  suffix = '',
  decimals = 0,
  className = '',
}: CountingNumberProps) {
  const numRef = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState<string>(value.toLocaleString());

  useEffect(() => {
    if (isReducedMotion() || !numRef.current) {
      setDisplayValue(value.toLocaleString());
      return;
    }

    const obj = { count: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        count: value,
        duration: MOTION.duration.long,
        ease: MOTION.ease.count,
        scrollTrigger: {
          trigger: numRef.current,
          start: 'top 90%',
          once: true,
        },
        onUpdate: () => {
          if (decimals > 0) {
            setDisplayValue(obj.count.toFixed(decimals));
          } else {
            setDisplayValue(Math.round(obj.count).toLocaleString());
          }
        },
      });
    }, numRef);

    return () => ctx.revert();
  }, [value, decimals]);

  return (
    <span ref={numRef} className={`tabular-nums inline-block ${className}`}>
      {displayValue}
      {suffix}
    </span>
  );
}
