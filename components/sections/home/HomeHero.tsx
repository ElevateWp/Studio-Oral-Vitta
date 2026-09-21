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
              className="font-display text-[#111827] text-33 sm:text-41 md:text-52 lg:text-65 xl:text-81 leading-[1.05] tracking-[-0.03em] font-normal mb-6 md:mb-8 max-w-4xl"
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
              Liderado pelo <strong className="font-semibold text-forest-ink">Dr. Marcelo de Souza Bezerra</strong> e pela <strong className="font-semibold text-forest-ink">Dra. Bruna</strong>, oferecemos implantes de carga imediata que podem trazer seu sorriso em 1 dia, atendimento em odontologia domiciliar e aparelhos ortodônticos com excelência e conforto.
            </p>

            <div
              ref={actionsRef}
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-8"
            >
              <Button href="/book-appointment/" variant="forest" size="lg" className="w-full sm:w-auto font-medium">
                Agendar Consulta
              </Button>
              <Button
                href={`https://api.whatsapp.com/send?phone=5592992656280`}
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto font-medium"
              >
                WhatsApp {CLINIC_INFO.contact.phone}
              </Button>
            </div>

            <div
              ref={locationRef}
              className="font-body text-13 text-[#111827]/70 flex flex-wrap items-center gap-2"
            >
              <span className="font-medium text-[#0A2472]">{CLINIC_INFO.primaryLocation.street}</span>
              <span className="hidden sm:inline">•</span>
              <span>{CLINIC_INFO.primaryLocation.suite}, {CLINIC_INFO.primaryLocation.city}</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-[#08A9DE] font-semibold">★ 4.7 (59 Avaliações Google)</span>
            </div>
          </div>

          {/* Columns 9–12: Quiet Clinical Credential Brief */}
          <div
            ref={infoRef}
            className="lg:col-span-4 lg:pl-4 flex flex-col justify-center"
          >
            <div className="p-6 sm:p-8 bg-[#F4F7FA] border border-[#D7E1E8] shadow-sm flex flex-col space-y-4">
              <span className="font-body text-13 text-[#08A9DE] uppercase tracking-wider font-semibold">
                Destaques Clínicos
              </span>
              <p className="font-body text-13 sm:text-15 text-[#111827]/90 leading-relaxed">
                <strong className="text-[#0A2472] font-semibold">&ldquo;Implantes carga imediata pode trazer seu sorriso em 1 dia&rdquo;</strong> &mdash; Atendimento humanizado com <strong className="text-[#0A2472] font-semibold">Dr. Marcelo de Souza Bezerra</strong> e <strong className="text-[#0A2472] font-semibold">Dra. Bruna</strong> no consultório e em odontologia domiciliar.
              </p>
              <div className="pt-3 border-t border-[#D7E1E8] flex items-center justify-between text-13 font-body text-[#111827]/70">
                <span>Manaus - AM</span>
                <span className="text-[#08A9DE] font-semibold">CRO-AM Verificado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
