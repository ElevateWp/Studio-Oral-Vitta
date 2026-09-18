'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { isReducedMotion } from '@/lib/motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // max pixels (default 6)
  radius?: number;   // active radius (default 90)
}

export default function MagneticButton({
  children,
  className = '',
  strength = 6,
  radius = 90,
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion() || !btnRef.current) return;
    if (window.matchMedia('(hover: none)').matches) return; // ignore touch devices

    const btn = btnRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);

      if (dist < radius) {
        const x = ((e.clientX - centerX) / radius) * strength;
        const y = ((e.clientY - centerY) / radius) * strength;

        gsap.to(btn, {
          x,
          y,
          duration: 0.35,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      } else {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.45,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength, radius]);

  return (
    <div ref={btnRef} className={`inline-block will-change-transform ${className}`}>
      {children}
    </div>
  );
}
