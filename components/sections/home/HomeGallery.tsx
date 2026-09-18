import React from 'react';
import Image from 'next/image';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeGallery() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
            Clinical Environment & Pavilion
          </span>
          <h2 className="font-display text-33 md:text-41 text-forest-ink">
            Inside Nova Dental — Designed for calm, privacy and sterile care
          </h2>
        </AnimateOnScroll>

        {/* Intentionally Curated Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-6">
          {/* Item 1: Patient Reception & Lounge (Col 1-5) */}
          <AnimateOnScroll animation="fade-right" duration={0.85} className="md:col-span-5 min-h-[380px] md:min-h-[440px] relative bg-mist overflow-hidden border border-mist shadow-sm">
            <MediaParallax speed={0.06} className="w-full h-full">
              <Image
                src="/images/clinic-reception.jpg"
                alt="Nova Dental calm acoustic patient reception and waiting lounge"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </MediaParallax>
            <div className="absolute bottom-3 left-3 bg-paper/95 backdrop-blur-sm text-forest-ink font-body text-13 px-3 py-1 font-medium border border-mist/50">
              Patient Reception & Lounge
            </div>
          </AnimateOnScroll>

          {/* Item 2: Wide Surgical Operatory Suite (Col 6-12) */}
          <AnimateOnScroll animation="fade-down" duration={0.85} className="md:col-span-7 min-h-[380px] md:min-h-[440px] relative bg-mist overflow-hidden border border-mist shadow-sm">
            <MediaParallax speed={0.08} className="w-full h-full">
              <Image
                src="/images/dental-operatory.jpg"
                alt="Nova Dental clinical operatory and treatment suite"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
              />
            </MediaParallax>
            <div className="absolute bottom-3 left-3 bg-paper/95 backdrop-blur-sm text-forest-ink font-body text-13 px-3 py-1 font-medium border border-mist/50">
              Clinical Operatory & Treatment Suite
            </div>
          </AnimateOnScroll>
        </div>

        {/* Second Row: 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Item 3: Consultation Office */}
          <AnimateOnScroll animation="zoom-in" duration={0.8} className="aspect-[4/3] relative bg-mist overflow-hidden border border-mist shadow-sm">
            <MediaParallax speed={0.05} className="w-full h-full">
              <Image
                src="/images/consultation-office.jpg"
                alt="Doctor consultation office and treatment planning desk"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </MediaParallax>
            <div className="absolute bottom-3 left-3 bg-paper/95 backdrop-blur-sm text-forest-ink font-body text-13 px-3 py-1 font-medium border border-mist/50">
              Specialist Consultation Room
            </div>
          </AnimateOnScroll>

          {/* Item 4: Clinic Exterior & Night Storefront */}
          <AnimateOnScroll animation="zoom-in" duration={0.8} delay={0.1} className="aspect-[4/3] relative bg-mist overflow-hidden border border-mist shadow-sm">
            <MediaParallax speed={0.07} className="w-full h-full">
              <Image
                src="/images/clinic-exterior.jpg"
                alt="Nova Dental clinic exterior entrance and storefront facade"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </MediaParallax>
            <div className="absolute bottom-3 left-3 bg-paper/95 backdrop-blur-sm text-forest-ink font-body text-13 px-3 py-1 font-medium border border-mist/50">
              Clinic Entrance & Exterior
            </div>
          </AnimateOnScroll>

          {/* Item 5: Faculty & Credentials Display */}
          <AnimateOnScroll animation="zoom-in" duration={0.8} delay={0.2} className="aspect-[4/3] relative bg-mist overflow-hidden border border-mist shadow-sm sm:col-span-2 md:col-span-1">
            <MediaParallax speed={0.06} className="w-full h-full">
              <Image
                src="/images/doctors-standee.jpg"
                alt="Nova Dental certified specialists directory and disciplines"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top"
              />
            </MediaParallax>
            <div className="absolute bottom-3 left-3 bg-paper/95 backdrop-blur-sm text-forest-ink font-body text-13 px-3 py-1 font-medium border border-mist/50">
              Clinical Specialists & Services
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
