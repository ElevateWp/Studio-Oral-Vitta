import React from 'react';
import Accordion, { AccordionItem } from '@/components/ui/Accordion';
import JsonLd from '@/components/ui/JsonLd';
import { generateFaqSchema } from '@/lib/seo';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

const HOME_FAQS: AccordionItem[] = [
  {
    question: 'How often should I visit Nova Dental for routine care?',
    answer: 'For patients with healthy teeth and stable periodontal architecture, an examination and guided airflow cleaning every 6 months is recommended. Dr. Ahmad Raza and Dr. Farheen Zahra provide comprehensive oral examinations to keep your teeth healthy.',
    relatedLink: { href: '/dental-cleaning/', label: 'View our Dental Cleaning & Hygiene protocol →' },
  },
  {
    question: 'Is dental implant surgery painful during or after the procedure?',
    answer: 'No. Under profound local anesthesia, you feel only mild pressure. Dr. Ahmad Raza plans every implant in 3D for minimally invasive placement with quick, comfortable recovery.',
    relatedLink: { href: '/dental-implants/', label: 'Read our Dental Implants procedure walkthrough →' },
  },
  {
    question: 'How does single-visit root canal treatment relieve tooth pain?',
    answer: 'Dr. Farheen Zahra (BAMDC Demonstrator) uses rotary instrumentation and ultrasonic irrigation to clean and sterilize infected root canals painlessly in a single 60- to 80-minute visit.',
    relatedLink: { href: '/root-canal/', label: 'Explore Endodontics →' },
  },
  {
    question: 'How long do professional teeth whitening results last?',
    answer: 'In-chair medical whitening typically lasts 12 to 24 months. Using custom-fitted maintenance trays once every 6 to 12 months maintains peak shade stability.',
    relatedLink: { href: '/teeth-whitening/', label: 'Learn about Prescription Teeth Whitening →' },
  },
  {
    question: 'What should I do in an acute dental emergency?',
    answer: 'Call our direct emergency line at +1 (415) 890-4129 immediately for same-day pain relief, trauma splinting, or abscess management.',
    relatedLink: { href: '/emergency-dentist/', label: 'Access Emergency Triage Protocol →' },
  },
];

export default function HomeFaqs() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <JsonLd data={generateFaqSchema(HOME_FAQS)} />
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <AnimateOnScroll animation="fade-right" duration={0.85} className="lg:col-span-5">
            <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
              Patient Inquiries
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
              Frequently asked clinical questions
            </h2>
            <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed mb-6">
              Clear answers regarding clinical safety, procedure timelines, recovery expectations, and treatment indications.
            </p>
            <div className="p-6 bg-mist/40 border border-mist">
              <span className="font-body text-13 text-forest font-medium block mb-1">
                Have an unlisted question?
              </span>
              <p className="font-body text-13 text-forest-ink/70 mb-3">
                Our surgical coordinators provide direct answers prior to any consultation.
              </p>
              <a
                href="/contact/"
                className="font-body text-13 text-forest font-medium underline underline-offset-4"
              >
                Contact our clinical desk
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" duration={0.85} className="lg:col-span-7">
            <Accordion items={HOME_FAQS} />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
