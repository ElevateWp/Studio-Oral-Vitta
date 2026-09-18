import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CLINIC_INFO, EMERGENCY_CONDITIONS } from '@/lib/clinic-data';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';
import JsonLd from '@/components/ui/JsonLd';
import { createMetadata, generateFaqSchema } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Emergency Dentist Multan | Same-Day Dental Pain Relief',
  description:
    'Urgent dental care in Multan for severe toothache, knocked-out teeth, broken crowns, dental abscesses, and trauma. Call/WhatsApp +92 370 3301987.',
  pathname: '/emergency-dentist/',
});

const EMERGENCY_FAQS = [
  {
    question: 'How quickly can I be seen for a dental emergency today?',
    answer: 'We reserve emergency surgical slots every morning and afternoon. Patients with acute dental trauma, avulsed teeth, or severe facial swelling are prioritized for immediate same-day triage within 1 to 2 hours of calling.',
  },
  {
    question: 'What if my dental emergency happens after hours or on Sunday?',
    answer: 'Our direct emergency line (+1 (415) 890-4129) connects to our on-call clinical doctor 24/7. We provide immediate tele-triage, prescribe necessary emergency analgesics or antibiotics, and open our surgical suite for urgent trauma cases.',
  },
  {
    question: 'How do I save a tooth that was knocked out completely?',
    answer: 'Handle the tooth ONLY by the top white crown. Never touch the root. Rinse gently for 5 seconds in cold milk or saline if dirty. Attempt to slide it gently back into the socket and bite softly on a clean cloth. If unable, store it in whole milk or saliva and arrive at our clinic within 60 minutes.',
  },
  {
    question: 'How much does an emergency dental visit cost?',
    answer: 'Emergency diagnostic triage and localized digital imaging starts at $150–$250. Exact procedure fees (such as pulpal debridement or surgical stabilization) are itemized in writing before treatment is performed.',
  },
];

export default function EmergencyDentistPage() {
  return (
    <div className="flex flex-col w-full bg-paper">
      <JsonLd data={generateFaqSchema(EMERGENCY_FAQS)} />

      {/* TOP EMERGENCY URGENCY BANNER */}
      <div className="bg-forest text-paper py-3 px-6 border-b border-mist/20">
        <div className="max-w-site mx-auto flex flex-wrap items-center justify-between gap-4 font-body text-13">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-lime animate-ping" />
            <span className="font-semibold text-lime">Emergency Slots Open Today:</span>
            <span>Same-Day Pain Relief & Trauma Care</span>
          </div>
          <a
            href={`tel:${CLINIC_INFO.contact.emergencyPhone.replace(/[^0-9+]/g, '')}`}
            className="font-bold text-paper underline hover:text-lime"
          >
            Direct Line: {CLINIC_INFO.contact.emergencyPhone}
          </a>
        </div>
      </div>

      {/* SECTION 1: Emergency Introduction & Immediate Action */}
      <section className="py-12 md:py-16 bg-paper border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'Emergency Dentist', path: '/emergency-dentist/' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 items-start">
            <div className="lg:col-span-8">
              <span className="font-body text-13 text-forest font-semibold block mb-2 uppercase tracking-wider">
                Immediate Urgent Care
              </span>
              <h1 className="font-display text-33 sm:text-41 md:text-52 text-forest-ink leading-tight mb-4">
                Immediate relief for acute dental pain and trauma.
              </h1>
              <p className="font-body text-17 text-forest-ink/90 leading-relaxed mb-6 max-w-2xl">
                If you are suffering from severe throbbing tooth pain, a knocked-out tooth, dental abscess swelling, or a fractured restoration, our surgical specialists provide same-day emergency stabilization.
              </p>

              {/* Direct Immediate Call Action */}
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  href={`tel:${CLINIC_INFO.contact.emergencyPhone.replace(/[^0-9+]/g, '')}`}
                  variant="lime"
                  size="lg"
                  className="font-bold text-17"
                >
                  Call Emergency Hotline: {CLINIC_INFO.contact.emergencyPhone}
                </Button>
                <Button href="/book-appointment/" variant="ghost" size="lg">
                  Request Same-Day Slot Online
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 bg-forest text-paper">
              <span className="font-body text-13 text-lime font-medium uppercase tracking-wider block mb-2">
                Walk-In Clinical Location
              </span>
              <address className="not-italic font-body text-15 text-paper leading-relaxed mb-4">
                {CLINIC_INFO.name}
                <br />
                {CLINIC_INFO.primaryLocation.street}, {CLINIC_INFO.primaryLocation.suite}
                <br />
                {CLINIC_INFO.primaryLocation.city}, {CLINIC_INFO.primaryLocation.state} {CLINIC_INFO.primaryLocation.postalCode}
              </address>
              <div className="pt-3 border-t border-mist/20 text-13 text-paper/80 font-body">
                Civic Center Plaza • Direct Ground Floor Elevator
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 4: Common Dental Emergencies & Immediate Pre-Visit Actions */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="mb-12">
            <span className="font-body text-13 text-forest-ink/60 block mb-2">
              Condition Identification & First-Aid
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink">
              What to do immediately before arriving at our clinic
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EMERGENCY_CONDITIONS.map((cond) => (
              <div
                key={cond.id}
                className="p-8 border border-mist bg-paper flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="font-display text-21 text-forest-ink">
                      {cond.title}
                    </span>
                    <span className="font-body text-13 text-forest font-semibold bg-mist/60 px-2.5 py-1">
                      {cond.urgency}
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="font-body text-13 text-forest-ink/60 uppercase tracking-wider block mb-1 font-medium">
                      Symptoms:
                    </span>
                    <ul className="space-y-1 font-body text-13 text-forest-ink/80">
                      {cond.symptoms.map((s, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-forest">•</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-mist/30 border-l-2 border-forest mb-4">
                    <span className="font-body text-13 text-forest font-semibold block mb-1">
                      Immediate Action:
                    </span>
                    <ul className="space-y-1 font-body text-13 text-forest-ink/90">
                      {cond.immediateAction.map((act, i) => (
                        <li key={i}>• {act}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-mist text-13 font-body text-forest-ink/70">
                  <strong className="text-forest font-medium">Clinic Protocol:</strong> {cond.clinicTreatment}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: When You Should Seek Immediate Care */}
      <section className="py-16 md:py-24 border-b border-mist bg-paper">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-8">
            <span className="font-body text-13 text-forest-ink/60 block mb-2">
              Triage Criteria
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
              When a dental issue is a genuine emergency
            </h2>
            <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed">
              Dental infections can spread rapidly into deep facial spaces if untreated. You should seek same-day care if you experience any of the following critical indicators:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-mist/30 border border-mist">
              <h3 className="font-display text-17 text-forest-ink mb-2">Visible Facial Swelling</h3>
              <p className="font-body text-13 text-forest-ink/70">
                Swelling extending toward the cheek, jawline, eye, or throat indicates active purulent infection requiring rapid drainage.
              </p>
            </div>
            <div className="p-6 bg-mist/30 border border-mist">
              <h3 className="font-display text-17 text-forest-ink mb-2">Uncontrolled Bleeding</h3>
              <p className="font-body text-13 text-forest-ink/70">
                Continuous oral bleeding that fails to stop after 20 minutes of firm, direct gauze pressure.
              </p>
            </div>
            <div className="p-6 bg-mist/30 border border-mist">
              <h3 className="font-display text-17 text-forest-ink mb-2">Traumatic Tooth Avulsion</h3>
              <p className="font-body text-13 text-forest-ink/70">
                A permanent tooth dislodged by physical impact must be reimplanted within 60 minutes for highest survival rate.
              </p>
            </div>
            <div className="p-6 bg-mist/30 border border-mist">
              <h3 className="font-display text-17 text-forest-ink mb-2">Severe Pulpitis Pain</h3>
              <p className="font-body text-13 text-forest-ink/70">
                Throbbing pain that fails to respond to maximum permitted doses of ibuprofen or acetaminophen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Emergency Treatment Options */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="mb-12">
            <span className="font-body text-13 text-forest-ink/60 block mb-2">
              Clinical Interventions
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink">
              Procedures performed during emergency visits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-paper border border-mist">
              <h3 className="font-display text-21 text-forest-ink mb-2">Microscopic Pulpotomy / Debridement</h3>
              <p className="font-body text-13 text-forest-ink/80 leading-relaxed mb-4">
                Immediate removal of inflamed pulpal nerve tissue to eliminate agonizing toothache pain instantly.
              </p>
              <Link href="/root-canal/" className="font-body text-13 text-forest underline">
                Endodontic details →
              </Link>
            </div>

            <div className="p-6 bg-paper border border-mist">
              <h3 className="font-display text-21 text-forest-ink mb-2">Trauma Splinting & Reimplantation</h3>
              <p className="font-body text-13 text-forest-ink/80 leading-relaxed mb-4">
                Biological socket debridement, gentle tooth repositioning, and flexible periodontal wire stabilization.
              </p>
              <Link href="/dental-implants/" className="font-body text-13 text-forest underline">
                Implant replacement options →
              </Link>
            </div>

            <div className="p-6 bg-paper border border-mist">
              <h3 className="font-display text-21 text-forest-ink mb-2">Abscess Incision & Decompression</h3>
              <p className="font-body text-13 text-forest-ink/80 leading-relaxed mb-4">
                Localized surgical decompression to release trapped infection pressure, accompanied by targeted antibiotics.
              </p>
              <Link href="/contact/" className="font-body text-13 text-forest underline">
                Clinic contact desk →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 & 7: Same-Day Information & Direct Emergency Contact */}
      <section className="py-16 md:py-24 border-b border-mist bg-forest text-paper">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <span className="font-body text-13 text-lime uppercase tracking-wider block mb-2 font-medium">
                Immediate Telephone Triage
              </span>
              <h2 className="font-display text-33 md:text-41 text-paper mb-4">
                Speak directly with our on-call dental team
              </h2>
              <p className="font-body text-17 text-paper/90 leading-relaxed mb-8 max-w-2xl">
                We accept emergency calls 24 hours a day, 7 days a week. Our clinical staff will immediately assess your symptoms, advise on pain management, and prepare our surgical suite for your arrival.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  href={`tel:${CLINIC_INFO.contact.emergencyPhone.replace(/[^0-9+]/g, '')}`}
                  variant="lime"
                  size="lg"
                  className="font-bold text-17"
                >
                  Call {CLINIC_INFO.contact.emergencyPhone}
                </Button>
                <Button
                  href={`https://wa.me/${CLINIC_INFO.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  variant="ghost"
                  size="lg"
                  className="text-paper border-paper/30 hover:border-paper hover:bg-paper/10"
                >
                  WhatsApp Clinical Desk
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 bg-paper/10 border border-mist/20">
              <span className="font-body text-13 text-lime block mb-2 font-medium">
                Walk-In Triage Policy
              </span>
              <p className="font-body text-13 text-paper/80 leading-relaxed">
                While we recommend calling ahead so we can prepare a sterile suite, true acute dental trauma walk-ins are welcomed directly at our Civic Center pavilion during business hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Location & Opening Hours */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <span className="font-body text-13 text-forest-ink/60 block mb-2">Location</span>
              <h2 className="font-display text-26 md:text-33 text-forest-ink mb-4">
                How to reach our emergency clinic
              </h2>
              <address className="not-italic font-body text-15 text-forest-ink/80 leading-relaxed mb-4">
                {CLINIC_INFO.name}
                <br />
                {CLINIC_INFO.primaryLocation.street}, {CLINIC_INFO.primaryLocation.suite}
                <br />
                {CLINIC_INFO.primaryLocation.city}, {CLINIC_INFO.primaryLocation.state} {CLINIC_INFO.primaryLocation.postalCode}
              </address>
              <p className="font-body text-13 text-forest-ink/70">
                {CLINIC_INFO.primaryLocation.directions}
              </p>
            </div>

            <div className="lg:col-span-6">
              <span className="font-body text-13 text-forest-ink/60 block mb-2">Operating Hours</span>
              <div className="border border-mist divide-y divide-mist bg-paper font-body text-13">
                <div className="p-3 flex justify-between">
                  <span>Monday – Thursday</span>
                  <span className="tabular-nums">08:00 – 17:30</span>
                </div>
                <div className="p-3 flex justify-between">
                  <span>Friday</span>
                  <span className="tabular-nums">08:00 – 16:30</span>
                </div>
                <div className="p-3 flex justify-between">
                  <span>Saturday</span>
                  <span className="tabular-nums">09:00 – 14:00</span>
                </div>
                <div className="p-3 flex justify-between bg-mist/40 text-forest font-medium">
                  <span>Sunday & After-Hours</span>
                  <span>24/7 On-Call Triage Phone</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: Emergency FAQs */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="font-body text-13 text-forest-ink/60 block mb-2">FAQs</span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                Emergency care FAQs
              </h2>
            </div>
            <div className="lg:col-span-7">
              <Accordion items={EMERGENCY_FAQS} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: Final Emergency Action CTA */}
      <section className="py-16 md:py-24 bg-forest text-paper">
        <div className="max-w-site mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <h2 className="font-display text-33 md:text-41 text-paper mb-4">
            Do not endure severe dental pain.
          </h2>
          <p className="font-body text-15 md:text-17 text-paper/80 mb-8 max-w-xl">
            Our surgical doctors are prepared to relieve your pain and preserve your natural tooth structure today.
          </p>
          <Button
            href={`tel:${CLINIC_INFO.contact.emergencyPhone.replace(/[^0-9+]/g, '')}`}
            variant="lime"
            size="lg"
            className="font-bold text-17"
          >
            Call {CLINIC_INFO.contact.emergencyPhone}
          </Button>
        </div>
      </section>
    </div>
  );
}
