import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeFeaturedTreatments() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
            Curated Case Studies
          </span>
          <h2 className="font-display text-33 md:text-41 text-forest-ink">
            Featured clinical reconstructions
          </h2>
        </AnimateOnScroll>

        <div className="flex flex-col space-y-24">
          {/* Featured Case 1: Guided Dental Implantology */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6 order-2 lg:order-1">
              <span className="font-body text-13 text-forest uppercase tracking-wider block mb-2 font-medium">
                Dr. Ahmad Raza (Owner) • Surgical Implantology
              </span>
              <h3 className="font-display text-26 md:text-33 text-forest-ink mb-4">
                Single Anterior Dental Implant: Immediate Digital Workflow
              </h3>
              <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed mb-6">
                Using 3D printed surgical guides and immediate customized emergence profiles, Dr. Ahmad Raza restores missing tooth function while preserving delicate interdental papilla and buccal bone contour.
              </p>
              <div className="p-4 bg-mist/40 border-l-2 border-forest mb-6">
                <span className="font-body text-13 text-forest-ink/80">
                  <strong className="text-forest font-medium">Outcome Metric:</strong> 100% preservation of labial bone thickness confirmed by digital imaging.
                </span>
              </div>
              <Button href="/dental-implants/" variant="ghost" size="md">
                Learn about dental implants
              </Button>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000"
                  alt="Clinical implant diagnostic simulation on 3D monitor"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>
          </div>

          {/* Featured Case 2: Microscopic Endodontics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1000"
                  alt="Dr. Farheen Zahra performing precision endodontics"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6">
              <span className="font-body text-13 text-forest uppercase tracking-wider block mb-2 font-medium">
                Dr. Farheen Zahra (BAMDC Demonstrator) • Endodontics
              </span>
              <h3 className="font-display text-26 md:text-33 text-forest-ink mb-4">
                Preserving Natural Teeth: Rotary Single-Visit Endodontics
              </h3>
              <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed mb-6">
                Using rotary nickel-titanium instruments and 3D bioceramic obturation, Dr. Farheen Zahra eradicates complex canal infections painlessly in a single visit, protecting natural root structures from extraction.
              </p>
              <div className="p-4 bg-mist/40 border-l-2 border-forest mb-6">
                <span className="font-body text-13 text-forest-ink/80">
                  <strong className="text-forest font-medium">Outcome Metric:</strong> Complete relief of pulpal pain and verified osseous remineralization.
                </span>
              </div>
              <Button href="/root-canal/" variant="ghost" size="md">
                Learn about root canal care
              </Button>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
