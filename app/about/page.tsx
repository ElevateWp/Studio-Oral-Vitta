import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';
import PanelWipe from '@/components/motion/PanelWipe';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Button from '@/components/ui/Button';
import DentistCard from '@/components/sections/dentists/DentistCard';
import { CLINIC_INFO, DENTISTS } from '@/lib/clinic-data';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'About Our Practice & Surgical Team',
  description:
    'Learn about Nova Dental: led by Dr. Ahmad Raza (BDS, RDS) and Dr. Farheen Zahra (BDS, RDS), committed to restorative precision and biological tooth preservation.',
  pathname: '/about/',
});

const TIMELINE = [
  {
    year: '2018',
    title: 'Founding of Nova Dental Clinic',
    description: 'Dr. Ahmad Raza (BDS, RDS) established Nova Dental with a core vision of micro-invasive biological dentistry and advanced restorative surgical care.',
  },
  {
    year: '2020',
    title: 'Addition of Microscopic Rotary Endodontics',
    description: 'Dr. Farheen Zahra (BDS, RDS, Demonstrator in BAMDC) joined the clinical faculty, standardizing microscopic endodontic therapy and preventive protocols.',
  },
  {
    year: '2022',
    title: 'Full Digital Implantology Suite',
    description: 'Upgraded surgical theaters with high-precision 3D CBCT volumetric imaging and guided surgical placement systems.',
  },
  {
    year: '2024',
    title: 'Advanced Clear Aligners & Aesthetic Center',
    description: 'Integrated digital intraoral scanning and computer-designed orthodontic aligners for minimally invasive smile design.',
  },
];

const APPROACH_STEPS = [
  {
    title: 'Comprehensive 3D Diagnostics',
    description: 'We never guess. Digital volumetric CBCT tomography, microscopic imaging, and intraoral scans form the objective baseline for every treatment decision.',
  },
  {
    title: 'Transparent Treatment Planning',
    description: 'You receive itemized written clinical plans with full radiological explanations, clear recovery timelines, and exact fees prior to starting care.',
  },
  {
    title: 'Biological Tooth Preservation',
    description: 'We believe your natural tooth structure is irreplaceable. Every intervention aims to conserve enamel, dentin, and vital pulpal tissue.',
  },
  {
    title: 'Longitudinal Follow-Up Care',
    description: 'Our care continues long after procedure completion with standardized 6- and 12-month radiographic reviews and periodontal monitoring.',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-paper">
      {/* SECTION 1: Introduction */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'About Us', path: '/about/' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-3 font-medium uppercase tracking-wider">
                  About Nova Dental
                </span>
                <WordRevealH1 text="A specialist restorative clinic dedicated to quiet excellence." />
                <div className="mt-8">
                  <ScrubbedParagraph text="Led by Dr. Ahmad Raza and Dr. Farheen Zahra, Nova Dental serves patients seeking uncompromising restorative precision, surgical implantology, and microscopic endodontics in an atmosphere of deliberate calm." />
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-4 lg:pl-6 flex flex-col justify-end">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
                <div className="p-6 bg-paper border border-mist space-y-3 font-body text-13 text-forest-ink/80 shadow-sm">
                  <div className="flex justify-between border-b border-mist pb-2">
                    <span>Established</span>
                    <span className="font-medium text-forest">{CLINIC_INFO.establishedYear}</span>
                  </div>
                  <div className="flex justify-between border-b border-mist pb-2">
                    <span>Clinical Leadership</span>
                    <span className="font-medium text-forest">Dr. Ahmad Raza (Owner)</span>
                  </div>
                  <div className="flex justify-between border-b border-mist pb-2">
                    <span>Academic Faculty</span>
                    <span className="font-medium text-forest">Dr. Farheen Zahra (BAMDC)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Accreditation</span>
                    <span className="font-medium text-forest">PMDC / PDA Registered</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Our Story (Vertical timeline on full-bleed --forest panel wipe) */}
      <PanelWipe className="py-20 md:py-32">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="max-w-2xl mb-16">
              <span className="font-body text-13 text-paper/60 uppercase tracking-wider block mb-2 font-medium">
                Practice Evolution
              </span>
              <h2 className="font-display text-33 md:text-41 text-paper">
                Our clinical development
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="relative border-l border-mist/30 pl-8 md:pl-12 space-y-12 max-w-3xl">
            {TIMELINE.map((item, idx) => (
              <AnimateOnScroll
                key={item.year}
                animation="fade-up"
                delay={idx * 0.1}
                className="relative"
              >
                {/* Year Marker */}
                <div className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 rounded-full bg-forest border-2 border-lime flex items-center justify-center" />
                <span className="font-display text-21 text-lime block mb-1">
                  {item.year}
                </span>
                <h3 className="font-display text-21 md:text-26 text-paper mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-15 text-paper/80 leading-relaxed">
                  {item.description}
                </p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </PanelWipe>

      {/* SECTION 3: Our Approach */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-16">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Clinical Philosophy
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Four pillars of our patient care model
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {APPROACH_STEPS.map((step, idx) => (
              <AnimateOnScroll
                key={step.title}
                animation={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
                delay={idx * 0.1}
              >
                <div className="p-8 border border-mist bg-paper flex flex-col justify-between h-full hover:border-forest/40 transition-colors shadow-sm">
                  <div>
                    <span className="font-body text-13 text-forest block mb-3 font-medium">
                      Pillar 0{idx + 1}
                    </span>
                    <h3 className="font-display text-21 md:text-26 text-forest-ink mb-3">
                      {step.title}
                    </h3>
                    <p className="font-body text-15 text-forest-ink/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Our Dentists */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  Medical Leadership
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink">
                  Our specialist clinicians
                </h2>
              </div>
              <Link
                href="/dentists/"
                className="font-body text-15 text-forest font-medium hover:underline underline-offset-4"
              >
                View detailed curriculum vitae →
              </Link>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-4xl mx-auto">
            {DENTISTS.map((dentist, idx) => (
              <DentistCard key={dentist.id} dentist={dentist} offsetY={idx === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Clinic Facilities (with Media Parallax) */}
      <section className="py-20 md:py-32 border-b border-mist overflow-hidden">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  Surgical Facilities
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
                  Engineered for micron-level clinical control
                </h2>
                <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed mb-6">
                  Our surgical suites feature high-precision dental operating microscopes, 3D CBCT digital imaging, and medical-grade sterilization systems to guarantee uncompromised patient safety during surgical implant and endodontic procedures.
                </p>
                <div className="space-y-2 font-body text-13 text-forest-ink/70">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                    <span>ISO-standard clinical air purification & laminar flow</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                    <span>Dedicated rotary endodontic and implant surgical suites</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-6">
              <AnimateOnScroll animation="zoom-in" duration={0.8}>
                <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                  <MediaParallax speed={0.08} className="w-full h-full">
                    <Image
                      src="/images/dental-operatory.jpg"
                      alt="Nova Dental surgical operatory and clinical suites"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </MediaParallax>
                  <div className="absolute bottom-3 left-3 bg-paper/95 backdrop-blur-sm text-forest-ink font-body text-13 px-3 py-1 font-medium border border-mist/50">
                    Surgical Operatory Suite
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Hygiene & Patient Safety */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="max-w-3xl mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Sterilization & Safety
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                Uncompromising biological infection control
              </h2>
              <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed">
                Every surgical instrument undergoes multi-stage ultrasonic cleaning, vacuum thermal disinfection, and Class-B autoclave sterilization with individual biological spore test verification.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimateOnScroll animation="fade-up" delay={0.1}>
              <div className="p-6 bg-mist/30 border border-mist h-full">
                <h3 className="font-display text-17 md:text-21 text-forest-ink mb-2">
                  Class-B Autoclaves
                </h3>
                <p className="font-body text-13 text-forest-ink/70">
                  Triple vacuum fractionated steam sterilization eliminating 100% of bacterial and viral pathogens.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={0.2}>
              <div className="p-6 bg-mist/30 border border-mist h-full">
                <h3 className="font-display text-17 md:text-21 text-forest-ink mb-2">
                  Continuous Spore Logging
                </h3>
                <p className="font-body text-13 text-forest-ink/70">
                  Third-party biological spore testing conducted weekly to audit all sterilization chambers.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={0.3}>
              <div className="p-6 bg-mist/30 border border-mist h-full">
                <h3 className="font-display text-17 md:text-21 text-forest-ink mb-2">
                  HEPA Medical Filtration
                </h3>
                <p className="font-body text-13 text-forest-ink/70">
                  Continuous 12 air changes per hour with hospital-grade filtration capturing particles down to 0.1 microns.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 7: Clinic Gallery */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Visual Tour
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Inside our clinical pavilion
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <AnimateOnScroll animation="zoom-in" delay={0.1}>
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/clinic-reception.jpg"
                  alt="Nova Dental patient reception lounge"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-paper/95 backdrop-blur-sm text-forest-ink font-body text-13 px-2.5 py-0.5 border border-mist/50">
                  Reception Lounge
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="zoom-in" delay={0.2}>
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/consultation-office.jpg"
                  alt="Doctor consultation and planning office"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-paper/95 backdrop-blur-sm text-forest-ink font-body text-13 px-2.5 py-0.5 border border-mist/50">
                  Consultation Office
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="zoom-in" delay={0.3}>
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/clinic-exterior.jpg"
                  alt="Nova Dental clinic entrance"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-paper/95 backdrop-blur-sm text-forest-ink font-body text-13 px-2.5 py-0.5 border border-mist/50">
                  Clinic Entrance
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 8: Appointment CTA */}
      <section className="py-20 md:py-28 bg-forest text-paper">
        <div className="max-w-site mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <AnimateOnScroll animation="fade-right" duration={0.8}>
            <div>
              <span className="font-body text-13 text-lime uppercase tracking-wider block mb-2 font-medium">
                Next Steps
              </span>
              <h2 className="font-display text-33 md:text-41 text-paper">
                Schedule your clinical evaluation
              </h2>
              <p className="font-body text-15 text-paper/80 mt-2 max-w-xl">
                Meet directly with Dr. Ahmad Raza and Dr. Farheen Zahra for comprehensive treatment planning.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/book-appointment/" variant="lime" size="lg">
                Book Appointment
              </Button>
              <Button href="/contact/" variant="ghost" size="lg" className="text-paper border-paper/30 hover:border-paper hover:bg-paper/10">
                Contact Clinic
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
