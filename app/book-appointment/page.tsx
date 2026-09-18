import React from 'react';
import { Metadata } from 'next';
import { CLINIC_INFO } from '@/lib/clinic-data';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BookingForm from '@/components/sections/booking/BookingForm';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Book a Dental Appointment | Nova Dental Multan',
  description:
    'Schedule your comprehensive restorative examination, 3D implant consultation, or hygiene appointment at Nova Dental on Bosan Road, Multan.',
  pathname: '/book-appointment/',
});

const BOOKING_STEPS = [
  {
    step: 1,
    title: 'Submit Clinical Request',
    description: 'Select your preferred treatment discipline, date, and time window via our secure digital form.',
  },
  {
    step: 2,
    title: 'Coordinator Intake Review',
    description: 'Our clinical triage coordinator reviews your request to ensure sufficient surgical time is reserved.',
  },
  {
    step: 3,
    title: 'Direct Confirmation Call',
    description: 'We telephone or email you within two business hours to confirm your exact appointment time.',
  },
  {
    step: 4,
    title: 'Unhurried Clinical Visit',
    description: 'Arrive at our Civic Center pavilion for your comprehensive 3D examination with Dr. Ahmad Raza or Dr. Farheen Zahra.',
  },
];

export default function BookAppointmentPage() {
  return (
    <div className="flex flex-col w-full bg-paper">
      {/* SECTION 1: Appointment Introduction */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'Book Appointment', path: '/book-appointment/' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8 items-start">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-3 uppercase tracking-wider font-medium">
                  Direct Patient Consultation
                </span>
                <WordRevealH1 text="Reserve your unhurried clinical consultation." />
                <div className="mt-8">
                  <ScrubbedParagraph text="We allocate ample clinical time for every new patient examination. Meet directly with Dr. Ahmad Raza or Dr. Farheen Zahra for diagnostic 3D imaging and comprehensive treatment planning." />
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-4 lg:pl-6">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
                <div className="p-6 bg-paper border border-mist space-y-3 font-body text-13 text-forest-ink/80 shadow-sm">
                  <span className="font-medium text-forest block">Immediate Scheduling Assistance:</span>
                  <p className="text-forest-ink/70">
                    Prefer to schedule by telephone? Our reception team is available during clinic hours.
                  </p>
                  <a
                    href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                    className="font-display text-17 text-forest font-medium block hover:underline"
                  >
                    {CLINIC_INFO.contact.phone}
                  </a>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3: Interactive Form & 4-Step Process Explanation */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: 4-Step Sequential Process */}
            <div className="lg:col-span-5 flex flex-col space-y-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <div>
                  <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                    Transparent Workflow
                  </span>
                  <h2 className="font-display text-26 md:text-33 text-forest-ink mb-4">
                    How our appointment process works
                  </h2>
                  <p className="font-body text-15 text-forest-ink/80 leading-relaxed mb-6">
                    Because our specialists perform complex surgical and microsurgical procedures, all consultations are scheduled with confirmed clinical time allocations.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Numbered Step Sequence */}
              <div className="space-y-6">
                {BOOKING_STEPS.map((step, idx) => (
                  <AnimateOnScroll key={step.step} animation="fade-up" delay={idx * 0.1}>
                    <div className="flex items-start gap-4 p-4 bg-paper border border-mist shadow-sm">
                      <span className="w-8 h-8 rounded-full bg-forest text-paper flex items-center justify-center font-display text-15 flex-shrink-0">
                        {step.step}
                      </span>
                      <div>
                        <h3 className="font-display text-17 text-forest-ink mb-1">
                          {step.title}
                        </h3>
                        <p className="font-body text-13 text-forest-ink/70 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>

            {/* Right: Interactive Form with in-place confirmation */}
            <div className="lg:col-span-7">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.15}>
                <BookingForm />
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4, 5, 6: Contact Options, Opening Hours, Location */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Options */}
            <AnimateOnScroll animation="fade-up" delay={0.1}>
              <div className="p-8 bg-paper border border-mist h-full shadow-sm">
                <span className="font-body text-13 text-forest block mb-2 font-medium uppercase tracking-wider">Direct Contact</span>
                <h3 className="font-display text-21 text-forest-ink mb-4">Communication Channels</h3>
                <div className="space-y-3 font-body text-13 text-forest-ink/80">
                  <div>
                    <span className="text-forest-ink/60 block">Main Desk:</span>
                    <a href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`} className="font-medium text-forest hover:underline">
                      {CLINIC_INFO.contact.phone}
                    </a>
                  </div>
                  <div>
                    <span className="text-forest-ink/60 block">Clinical Email:</span>
                    <a href={`mailto:${CLINIC_INFO.contact.email}`} className="font-medium text-forest hover:underline">
                      {CLINIC_INFO.contact.email}
                    </a>
                  </div>
                  <div>
                    <span className="text-forest-ink/60 block">WhatsApp:</span>
                    <a href={`https://wa.me/${CLINIC_INFO.contact.whatsapp.replace(/[^0-9]/g, '')}`} className="font-medium text-forest hover:underline">
                      {CLINIC_INFO.contact.whatsapp}
                    </a>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Opening Hours */}
            <AnimateOnScroll animation="fade-up" delay={0.2}>
              <div className="p-8 bg-paper border border-mist h-full shadow-sm">
                <span className="font-body text-13 text-forest block mb-2 font-medium uppercase tracking-wider">Schedule</span>
                <h3 className="font-display text-21 text-forest-ink mb-4">Clinical Operating Hours</h3>
                <div className="space-y-1.5 font-body text-13 text-forest-ink/80">
                  <div className="flex justify-between">
                    <span>Mon – Thu</span>
                    <span className="tabular-nums">08:00 – 17:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday</span>
                    <span className="tabular-nums">08:00 – 16:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="tabular-nums">09:00 – 14:00</span>
                  </div>
                  <div className="flex justify-between text-forest font-medium pt-1 border-t border-mist">
                    <span>Sunday</span>
                    <span>Emergency On-Call</span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Physical Location */}
            <AnimateOnScroll animation="fade-up" delay={0.3}>
              <div className="p-8 bg-paper border border-mist h-full shadow-sm">
                <span className="font-body text-13 text-forest block mb-2 font-medium uppercase tracking-wider">Location</span>
                <h3 className="font-display text-21 text-forest-ink mb-4">Civic Center Pavilion</h3>
                <address className="not-italic font-body text-13 text-forest-ink/80 leading-relaxed mb-3">
                  {CLINIC_INFO.primaryLocation.street}
                  <br />
                  {CLINIC_INFO.primaryLocation.suite}
                  <br />
                  {CLINIC_INFO.primaryLocation.city}, {CLINIC_INFO.primaryLocation.state} {CLINIC_INFO.primaryLocation.postalCode}
                </address>
                <p className="font-body text-13 text-forest-ink/60">
                  Validated patient parking via Birch Street.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
