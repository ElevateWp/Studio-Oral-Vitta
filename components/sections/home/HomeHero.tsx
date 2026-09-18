'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CLINIC_INFO } from '@/lib/clinic-data';
import { MOTION, isReducedMotion } from '@/lib/motion';
import Button from '@/components/ui/Button';
import TextureBackground from '@/components/layout/TextureBackground';

export default function HomeHero() {
  const heroRef = useRef<HTMLElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion() || !heroRef.current) return;

    const words = wordsRef.current.filter(Boolean);

    const tl = gsap.timeline({
      delay: 0.5,
    });

    // 0.50s H1 word reveal
    if (words.length > 0) {
      tl.fromTo(
        words,
        { y: '115%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 0.85,
          stagger: 0.04,
          ease: 'power3.out',
        }
      );
    }

    // Supporting paragraph fades up
    if (paraRef.current) {
      tl.fromTo(
        paraRef.current,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
        },
        '-=0.5'
      );
    }

    // Actions arrive with scale
    if (actionsRef.current) {
      tl.fromTo(
        actionsRef.current.children,
        { scale: 0.95, opacity: 0, y: 10 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
        },
        '-=0.4'
      );
    }

    // Dentist info slides in from right
    if (infoRef.current) {
      tl.fromTo(
        infoRef.current,
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.5'
      );
    }

    // Location line
    if (locationRef.current) {
      tl.fromTo(
        locationRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        '-=0.3'
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  const headline = 'Restorative dentistry shaped by clinical precision and calm.';
  const headlineWords = headline.split(' ');

  return (
    <section
      ref={heroRef}
      className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center bg-paper overflow-hidden py-12 sm:py-16 md:py-24"
    >
      {/* Signature Element 1 of 4: Organic Marbled Vein Texture bleeding off right edge */}
      <TextureBackground variant="hero" className="opacity-40" />

      <div className="relative z-10 max-w-site mx-auto px-4 sm:px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Columns 1–8: Left-aligned H1, Paragraph, Actions */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            {/* Semantic Single H1 */}
            <h1
              ref={h1Ref}
              aria-label={headline}
              className="font-display text-forest-ink text-33 sm:text-41 md:text-52 lg:text-65 xl:text-81 leading-[1.05] tracking-[-0.03em] font-normal mb-6 md:mb-8 max-w-4xl"
            >
              {headlineWords.map((word, idx) => (
                <span
                  key={idx}
                  className="inline-block overflow-hidden align-top pb-[0.08em] mr-[0.24em] last:mr-0"
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

            <p
              ref={paraRef}
              className="font-body text-15 sm:text-17 md:text-21 text-forest-ink/90 leading-relaxed mb-8 md:mb-10 max-w-2xl"
            >
              Led by Dr. Ahmad Raza (Owner) & Dr. Farheen Zahra (BAMDC Demonstrator), we provide specialist-led surgical implantology, microscopic endodontics, clear aligners, and aesthetic restorations designed for physical comfort and biological longevity.
            </p>

            <div
              ref={actionsRef}
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-8"
            >
              <Button href="/book-appointment/" variant="forest" size="lg" className="w-full sm:w-auto font-medium">
                Book consultation
              </Button>
              <Button
                href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto font-medium"
              >
                Call {CLINIC_INFO.contact.phone}
              </Button>
            </div>

            <div
              ref={locationRef}
              className="font-body text-13 text-forest-ink/70 flex flex-wrap items-center gap-2"
            >
              <span className="font-medium text-forest-ink">{CLINIC_INFO.primaryLocation.street}</span>
              <span className="hidden sm:inline">•</span>
              <span>{CLINIC_INFO.primaryLocation.suite}, {CLINIC_INFO.primaryLocation.city}</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-amber-700 font-semibold">★ 5.0 (28 Google Reviews)</span>
            </div>
          </div>

          {/* Columns 9–12: Quiet Clinical Credential Brief */}
          <div
            ref={infoRef}
            className="lg:col-span-4 lg:pl-4 flex flex-col justify-center"
          >
            <div className="p-6 sm:p-8 bg-paper/90 backdrop-blur-sm border border-mist shadow-sm flex flex-col space-y-4">
              <span className="font-body text-13 text-forest uppercase tracking-wider font-semibold">
                Clinical Leadership
              </span>
              <p className="font-body text-13 sm:text-15 text-forest-ink/90 leading-relaxed">
                Led by <strong className="text-forest-ink font-semibold">Dr. Ahmad Raza</strong> (BDS, RDS, Owner & Principal Surgeon) and <strong className="text-forest-ink font-semibold">Dr. Farheen Zahra</strong> (BDS, RDS, Demonstrator in BAMDC), practicing under microscopic magnification and 3D CBCT guided protocols.
              </p>
              <div className="pt-3 border-t border-mist flex items-center justify-between text-13 font-body text-forest-ink/70">
                <span>Direct Surgical Suites</span>
                <span className="text-forest font-semibold">PMDC / BAMDC Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
