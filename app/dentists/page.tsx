import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Button from '@/components/ui/Button';
import DentistCard from '@/components/sections/dentists/DentistCard';
import { DENTISTS, SERVICES } from '@/lib/clinic-data';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Our Specialist Dentists & Surgical Team',
  description:
    'Meet Dr. Ahmad Raza (BDS, RDS) (Owner) and Dr. Farheen Zahra (BDS, RDS) (Demonstrator in BAMDC): leading dental surgeons at Nova Dental.',
  pathname: '/dentists/',
});

export default function DentistsPage() {
  return (
    <div className="flex flex-col w-full bg-paper">
      {/* SECTION 1: Introduction */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'Our Dentists', path: '/dentists/' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-3 font-medium uppercase tracking-wider">
                  Clinical Faculty
                </span>
                <WordRevealH1 text="Specialist clinicians dedicated to surgical and restorative craft." />
                <div className="mt-8">
                  <ScrubbedParagraph text="Led by Dr. Ahmad Raza (Owner) and Dr. Farheen Zahra (Demonstrator in BAMDC), Nova Dental brings focused mastery to surgical implantology, microscopic endodontics, clear aligners, and restorative ceramics." />
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-4 lg:pl-6 flex flex-col justify-end">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
                <div className="p-6 bg-paper border border-mist space-y-2 font-body text-13 text-forest-ink/80 shadow-sm">
                  <span className="font-medium text-forest block">Specialist Led Only</span>
                  <p className="text-forest-ink/70">
                    All complex surgical and endodontic treatments are performed exclusively by registered, qualified clinical specialists.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Dentist Profiles (Portrait Grid Assembly - 2 Doctors) */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-16">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Surgical Faculty Profiles
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Our clinical directors & specialists
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-4xl mx-auto pb-8">
            {DENTISTS.map((dentist, idx) => (
              <DentistCard
                key={dentist.id}
                dentist={dentist}
                offsetY={idx === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Areas of Expertise */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-16">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Clinical Specializations
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Specialist disciplines across the practice
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimateOnScroll animation="fade-up" delay={0.1}>
              <div className="p-6 bg-paper border border-mist h-full flex flex-col justify-between hover:border-forest/40 transition-colors shadow-sm">
                <div>
                  <h3 className="font-display text-21 text-forest-ink mb-3">
                    Surgical Implantology
                  </h3>
                  <p className="font-body text-13 text-forest-ink/70 leading-relaxed mb-4">
                    Guided osteotomy, bone grafting, and full-arch immediate load rehabilitation led by Dr. Ahmad Raza.
                  </p>
                </div>
                <Link href="/dental-implants/" className="font-body text-13 text-forest font-medium hover:underline">
                  Explore Dental Implants →
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={0.2}>
              <div className="p-6 bg-paper border border-mist h-full flex flex-col justify-between hover:border-forest/40 transition-colors shadow-sm">
                <div>
                  <h3 className="font-display text-21 text-forest-ink mb-3">
                    Microscopic Endodontics
                  </h3>
                  <p className="font-body text-13 text-forest-ink/70 leading-relaxed mb-4">
                    High-magnification surgical canal debridement and pulpal preservation led by Dr. Farheen Zahra.
                  </p>
                </div>
                <Link href="/root-canal/" className="font-body text-13 text-forest font-medium hover:underline">
                  Explore Root Canal Therapy →
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={0.3}>
              <div className="p-6 bg-paper border border-mist h-full flex flex-col justify-between hover:border-forest/40 transition-colors shadow-sm">
                <div>
                  <h3 className="font-display text-21 text-forest-ink mb-3">
                    Orthodontics & Aligners
                  </h3>
                  <p className="font-body text-13 text-forest-ink/70 leading-relaxed mb-4">
                    Physiological arch alignment, digital clear aligners, and bite correction led by Dr. Farheen Zahra.
                  </p>
                </div>
                <Link href="/braces/" className="font-body text-13 text-forest font-medium hover:underline">
                  Explore Orthodontics →
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={0.4}>
              <div className="p-6 bg-paper border border-mist h-full flex flex-col justify-between hover:border-forest/40 transition-colors shadow-sm">
                <div>
                  <h3 className="font-display text-21 text-forest-ink mb-3">
                    Cosmetic & Restorations
                  </h3>
                  <p className="font-body text-13 text-forest-ink/70 leading-relaxed mb-4">
                    Digital Smile Design, feldspathic veneers, and enamel whitening led by Dr. Ahmad Raza.
                  </p>
                </div>
                <Link href="/cosmetic-dentistry/" className="font-body text-13 text-forest font-medium hover:underline">
                  Explore Cosmetic Dentistry →
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 4: Education & Qualifications */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-16">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Academic Credentials
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Verified education & hospital training
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="divide-y divide-mist border-t border-b border-mist">
            {DENTISTS.map((d, idx) => (
              <AnimateOnScroll key={d.id} animation="fade-up" delay={idx * 0.15}>
                <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-4">
                    <h3 className="font-display text-21 md:text-26 text-forest-ink">
                      {d.name}
                    </h3>
                    <span className="font-body text-13 text-forest font-medium">{d.title}</span>
                  </div>
                  <div className="lg:col-span-8 space-y-2 font-body text-15 text-forest-ink/80">
                    {d.education.map((edu, eIdx) => (
                      <div key={eIdx} className="flex items-start gap-2">
                        <span className="text-forest mt-1">•</span>
                        <span>{edu}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Treatment Philosophy */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="max-w-3xl">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Guiding Ethos
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
                Our clinical covenant with patients
              </h2>
              <p className="font-body text-17 md:text-21 text-forest-ink/90 leading-relaxed mb-8">
                We reject high-volume transactional dental care. Every appointment is allocated ample clinical time to ensure procedures are completed with thoroughness, sterile discipline, and uncompromised craftsmanship.
              </p>
              <div className="p-6 bg-mist/40 border-l-2 border-forest shadow-sm">
                <span className="font-body text-15 text-forest-ink/80 block italic">
                  “True medical luxury is unhurried clinical time, microscopic accuracy, biological preservation, and complete surgical transparency.”
                </span>
                <span className="font-body text-13 text-forest block mt-2 font-medium">
                  — Dr. Ahmad Raza (BDS, RDS), Owner & Lead Surgeon
                </span>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 5.5: Verified PMDC Accreditation & Faculty Showcase */}
      <section className="py-20 md:py-32 border-b border-mist bg-mist/20">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  Verified Accreditation & Faculty
                </span>
                <h2 className="font-display text-26 md:text-33 text-forest-ink mb-6">
                  Official Specialists Directory & Services
                </h2>
                <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed mb-6">
                  Dr. Ahmad Raza (BDS UHS, RDS PMDC, C-Endo, C-Ortho, C-Implant) and Dr. Farheen Zahra (BDS UHS, RDS PMDC, C-Endo, C-Ortho) provide specialized surgical implantology, rotary root canal therapy, teeth whitening, scaling, cosmetic crowns, and invisible braces.
                </p>
                <div className="space-y-3 font-body text-13 text-forest-ink/80">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                    <span>Private Consultation & Personalized Treatment Planning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                    <span>Dedicated Operating Theaters & Modern Dental Chairs</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AnimateOnScroll animation="zoom-in" duration={0.8}>
                <div className="relative aspect-[3/4] bg-mist overflow-hidden border border-mist shadow-sm">
                  <Image
                    src="/images/doctors-standee.jpg"
                    alt="Dr. Ahmad Raza and Dr. Farheen Zahra credentials"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute bottom-2 left-2 bg-paper/95 backdrop-blur-sm text-forest-ink font-body text-13 px-2 py-0.5 border border-mist/50">
                    Faculty Credentials
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="zoom-in" duration={0.8} delay={0.1}>
                <div className="relative aspect-[3/4] bg-mist overflow-hidden border border-mist shadow-sm">
                  <Image
                    src="/images/consultation-office.jpg"
                    alt="Doctor consultation office"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-paper/95 backdrop-blur-sm text-forest-ink font-body text-13 px-2 py-0.5 border border-mist/50">
                    Consultation Room
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Related Treatments */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Direct Clinical Offerings
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Treatments provided by our clinicians
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {SERVICES.map((s, idx) => (
              <AnimateOnScroll key={s.slug} animation="zoom-in" delay={idx * 0.05}>
                <Link
                  href={`/${s.slug}/`}
                  className="p-4 bg-paper border border-mist hover:border-forest transition-all flex flex-col justify-between h-32 hover:shadow-sm"
                >
                  <span className="font-display text-17 text-forest-ink leading-tight">
                    {s.navLabel}
                  </span>
                  <span className="font-body text-13 text-forest font-medium">
                    Learn more →
                  </span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Appointment CTA */}
      <section className="py-20 md:py-28 bg-forest text-paper">
        <div className="max-w-site mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <AnimateOnScroll animation="fade-right" duration={0.8}>
            <div>
              <span className="font-body text-13 text-lime uppercase tracking-wider block mb-2 font-medium">
                Book Consultation
              </span>
              <h2 className="font-display text-33 md:text-41 text-paper">
                Consult directly with Dr. Ahmad Raza & Dr. Farheen Zahra
              </h2>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
            <Button href="/book-appointment/" variant="lime" size="lg">
              Request consultation
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
