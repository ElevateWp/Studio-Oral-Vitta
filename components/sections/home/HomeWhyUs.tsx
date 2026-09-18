import React from 'react';
import Image from 'next/image';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

const REASONS = [
  {
    title: 'Biological Tooth Preservation',
    description: 'We treat surgical extraction as a last resort. Operating microscopes allow us to preserve natural root structures and vital enamel whenever biologically viable.',
  },
  {
    title: 'Microscopic & CBCT Guided Accuracy',
    description: 'Every surgical fixture and root canal is pre-planned in three dimensions with low-dose digital tomography to prevent anatomical nerve or sinus complications.',
  },
  {
    title: 'Proactive Patient Comfort & Sedation',
    description: 'We eliminate procedural stress through computer-controlled local anesthesia delivery, noise-canceling acoustics, and gentle anxiety-free care.',
  },
  {
    title: 'Sterile Operating Environments',
    description: 'Our surgical suites maintain medical-grade air filtration and autoclave sterilization protocols exceeding international dental guidelines.',
  },
];

export default function HomeWhyUs() {
  return (
    <section className="relative z-20 w-full bg-paper py-16 md:py-24 lg:py-32 overflow-hidden border-t border-mist">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Columns 1–6: Left-Aligned Editorial Reasons List */}
          <div className="lg:col-span-6">
            <AnimateOnScroll animation="fade-right" duration={0.85}>
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Clinical Methodology
              </span>
              <h2 className="font-display text-26 sm:text-33 md:text-41 text-forest-ink mb-8 md:mb-10 leading-tight">
                Why patients and referring dentists choose Nova Dental
              </h2>

              <div className="divide-y divide-mist">
                {REASONS.map((reason, idx) => (
                  <AnimateOnScroll
                    key={reason.title}
                    animation="fade-up"
                    delay={idx * 0.1}
                    className="py-5 sm:py-6 first:pt-0 last:pb-0"
                  >
                    <h3 className="font-display text-17 sm:text-21 text-forest-ink mb-2">
                      {reason.title}
                    </h3>
                    <p className="font-body text-15 text-forest-ink/80 leading-relaxed">
                      {reason.description}
                    </p>
                  </AnimateOnScroll>
                ))}
              </div>
            </AnimateOnScroll>
          </div>

          {/* Columns 7–12: High-Resolution Clinical Photograph with Subtle Parallax */}
          <div className="lg:col-span-6">
            <AnimateOnScroll animation="fade-left" duration={0.85}>
              <div className="relative aspect-[4/3] sm:aspect-[4/5] bg-mist overflow-hidden border border-mist w-full shadow-sm">
                <MediaParallax speed={0.06} className="w-full h-full">
                  <Image
                    src="/images/dental-operatory.jpg"
                    alt="Nova Dental clinical treatment suite and modern surgical setup"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </MediaParallax>
                <div className="absolute bottom-3 left-3 bg-paper/95 backdrop-blur-sm text-forest-ink font-body text-13 px-3 py-1 font-medium border border-mist/50">
                  Nova Dental Clinical Operatory Suite
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
