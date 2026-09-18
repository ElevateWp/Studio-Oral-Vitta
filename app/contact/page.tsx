import React from 'react';
import { Metadata } from 'next';
import { CLINIC_INFO } from '@/lib/clinic-data';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Button from '@/components/ui/Button';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import TextureBackground from '@/components/layout/TextureBackground';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Contact Nova Dental Multan | Bosan Rd, Opposite Mall of Multan',
  description:
    'Contact Nova Dental Clinic in Multan. Phone/WhatsApp +92 370 3301987, Bosan Road opposite Mall of Multan, Sabzazar Metro Station. Open daily till 10 PM.',
  pathname: '/contact/',
});

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-paper">
      {/* SECTION 1: Contact Introduction with Signature Texture 3 of 4 behind header */}
      <section className="relative py-16 md:py-24 border-b border-mist overflow-hidden">
        <TextureBackground variant="contact" className="opacity-30" />

        <div className="relative z-10 max-w-site mx-auto px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'Contact Us', path: '/contact/' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-3 uppercase tracking-wider font-medium">
                  Clinical Inquiries & Directions
                </span>
                <WordRevealH1 text="Connect with our clinical administration." />
                <p className="font-body text-17 md:text-21 text-forest-ink/90 leading-relaxed mt-6 max-w-2xl">
                  Whether requesting medical records, scheduling a consultation with Dr. Ahmad Raza or Dr. Farheen Zahra, or seeking immediate trauma guidance, our team responds promptly.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2-7: Contact Methods Directory, Hours, Address & Map */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Direct Communication Channels List */}
            <div className="lg:col-span-6 flex flex-col space-y-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <div>
                  <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                    Direct Lines
                  </span>
                  <h2 className="font-display text-26 md:text-33 text-forest-ink mb-6">
                    Verified communication channels
                  </h2>

                  <div className="divide-y divide-mist border-t border-b border-mist">
                    {/* Phone */}
                    <div className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="font-body text-13 text-forest-ink/60 block">Main Telephone Desk</span>
                        <a
                          href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                          className="font-display text-21 text-forest hover:underline"
                        >
                          {CLINIC_INFO.contact.phone}
                        </a>
                      </div>
                      <span className="font-body text-13 text-forest-ink/60">Mon – Fri (08:00 – 17:30)</span>
                    </div>

                    {/* Emergency Line */}
                    <div className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-mist/30 px-4 -mx-4 rounded-sm">
                      <div>
                        <span className="font-body text-13 text-forest font-semibold block">24/7 Acute Emergency Line</span>
                        <a
                          href={`tel:${CLINIC_INFO.contact.emergencyPhone.replace(/[^0-9+]/g, '')}`}
                          className="font-display text-21 text-forest font-bold hover:underline"
                        >
                          {CLINIC_INFO.contact.emergencyPhone}
                        </a>
                      </div>
                      <span className="font-body text-13 text-forest font-medium">On-Call Doctor</span>
                    </div>

                    {/* WhatsApp */}
                    <div className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="font-body text-13 text-forest-ink/60 block">Direct Clinical WhatsApp</span>
                        <a
                          href={`https://wa.me/${CLINIC_INFO.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-display text-21 text-forest hover:underline"
                        >
                          {CLINIC_INFO.contact.whatsapp}
                        </a>
                      </div>
                      <span className="font-body text-13 text-forest-ink/60">Messaging & Triage</span>
                    </div>

                    {/* Email */}
                    <div className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="font-body text-13 text-forest-ink/60 block">Confidential Email</span>
                        <a
                          href={`mailto:${CLINIC_INFO.contact.email}`}
                          className="font-display text-21 text-forest hover:underline"
                        >
                          {CLINIC_INFO.contact.email}
                        </a>
                      </div>
                      <span className="font-body text-13 text-forest-ink/60">HIPAA Encrypted</span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Physical Location & Directions */}
              <AnimateOnScroll animation="fade-up" duration={0.8} delay={0.2}>
                <div>
                  <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                    Physical Practice
                  </span>
                  <h3 className="font-display text-21 text-forest-ink mb-3">
                    {CLINIC_INFO.name} — Multan
                  </h3>
                  <address className="not-italic font-body text-15 text-forest-ink/90 leading-relaxed mb-4">
                    {CLINIC_INFO.primaryLocation.street}
                    <br />
                    {CLINIC_INFO.primaryLocation.suite}
                    <br />
                    {CLINIC_INFO.primaryLocation.city}, {CLINIC_INFO.primaryLocation.state} {CLINIC_INFO.primaryLocation.postalCode}, {CLINIC_INFO.primaryLocation.country}
                  </address>
                  <div className="p-4 bg-mist/40 border-l-2 border-forest font-body text-13 text-forest-ink/80 leading-relaxed">
                    <strong>Landmarks & Transit:</strong> {CLINIC_INFO.primaryLocation.directions} {CLINIC_INFO.primaryLocation.landmarks}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right: Opening Hours Table & Stylized Palette Map */}
            <div className="lg:col-span-6 flex flex-col space-y-8">
              <AnimateOnScroll animation="fade-left" duration={0.8}>
                <div>
                  <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                    Operating Hours
                  </span>
                  <div className="border border-mist divide-y divide-mist bg-paper font-body text-13 shadow-sm">
                    {CLINIC_INFO.schedule.map((item) => (
                      <div key={item.day} className="p-3.5 flex justify-between">
                        <span className="font-medium text-forest-ink">{item.day}</span>
                        <span className="tabular-nums text-forest-ink/80">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Stylized Palette Map */}
              <AnimateOnScroll animation="zoom-in" duration={0.8} delay={0.2}>
                <div className="p-8 bg-forest text-paper flex flex-col justify-between aspect-[16/10] shadow-sm">
                  <div>
                    <span className="font-body text-13 text-lime block mb-2 font-medium uppercase tracking-wider">
                      Google Maps Location & Plus Code
                    </span>
                    <h3 className="font-display text-26 text-paper mb-2">
                      Opposite Mall of Multan, Bosan Rd
                    </h3>
                    <p className="font-body text-13 text-paper/80 leading-relaxed">
                      Sabzazar Metro Station, Gulgasht Colony, Multan, Pakistan. Plus Code: 6FMJ+FM Multan.
                    </p>
                    <div className="mt-3 inline-flex items-center gap-2 bg-paper/10 px-3 py-1 text-lime font-body text-13">
                      <span>★ 5.0 Rating (28 Google Reviews)</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-mist/20 flex flex-wrap items-center justify-between gap-4">
                    <Button
                      href={`https://maps.google.com/?q=${encodeURIComponent(
                        `Nova Dental Bosan Rd near sabzazar metrostation opposite mall of Gulgasht Colony Multan`
                      )}`}
                      variant="lime"
                      size="sm"
                    >
                      Open Google Maps
                    </Button>
                    <span className="font-body text-13 text-paper/60">
                      Plus Code: 6FMJ+FM Multan
                    </span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Final Contact / Appointment CTA */}
      <section className="py-20 md:py-28 bg-forest text-paper">
        <div className="max-w-site mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <AnimateOnScroll animation="fade-right" duration={0.8}>
            <div>
              <span className="font-body text-13 text-lime uppercase tracking-wider block mb-2 font-medium">
                Begin Treatment
              </span>
              <h2 className="font-display text-33 md:text-41 text-paper">
                Ready to schedule your appointment?
              </h2>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
            <Button href="/book-appointment/" variant="lime" size="lg">
              Request Appointment Online
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
