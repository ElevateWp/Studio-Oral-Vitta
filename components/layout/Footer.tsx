import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CLINIC_INFO, SERVICES, DENTISTS } from '@/lib/clinic-data';

export default function Footer() {
  return (
    <footer className="w-full bg-forest text-paper border-t border-mist/20 pt-16 md:pt-24 pb-12">
      <div className="max-w-site mx-auto px-6 md:px-12">
        {/* Top Section: Clinic Thesis & Immediate Emergency Alert */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-mist/20">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl p-2 flex items-center justify-center flex-shrink-0 shadow-md">
                <Image
                  src="/images/logo.png"
                  alt="Nova Dental"
                  width={60}
                  height={60}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-28 md:text-36 font-medium leading-tight">Nova Dental</span>
                <span className="font-body text-13 text-paper/70 font-medium">Dr. Ahmad Raza & Dr. Farheen Zahra</span>
              </div>
            </div>
            <p className="font-body text-16 text-paper/80 leading-relaxed max-w-xl">
              Led by Dr. Ahmad Raza (BDS, RDS) (Owner) and Dr. Farheen Zahra (BDS, RDS) (Demonstrator in BAMDC). Dedicated to biological tooth preservation, surgical implants, microscopic endodontics, and gentle restorative care.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-13 text-paper/60">
              <span>BAMDC Academic Affiliated</span>
              <span>•</span>
              <span>PMDC Registered Specialists</span>
              <span>•</span>
              <span>Modern Sterilization Suites</span>
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-12 flex flex-col justify-between">
            <div className="p-6 bg-paper/5 border border-mist/20 rounded-none shadow-sm">
              <span className="font-body text-13 text-lime block mb-2 font-semibold uppercase tracking-wider">
                Immediate Urgent Triage
              </span>
              <p className="font-body text-15 text-paper/90 mb-4">
                Experiencing severe toothache, knocked-out tooth, or traumatic dental emergency?
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${CLINIC_INFO.contact.emergencyPhone.replace(/[^0-9+]/g, '')}`}
                  className="font-body text-15 font-semibold text-lime hover:underline"
                >
                  Emergency Line: {CLINIC_INFO.contact.emergencyPhone}
                </a>
                <Link
                  href="/emergency-dentist/"
                  className="font-body text-13 text-paper/80 underline underline-offset-4 hover:text-paper"
                >
                  View Emergency Protocols
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Complete Internal Linking Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-16 border-b border-mist/20">
          {/* Column 1: Clinical Treatments */}
          <div className="col-span-1">
            <span className="font-body text-13 text-paper/40 uppercase tracking-wider block mb-4 font-semibold">
              Treatments
            </span>
            <ul className="space-y-2.5 font-body text-15">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}/`}
                    className="text-paper/80 hover:text-lime transition-colors"
                  >
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Clinical Team (2 Doctors) */}
          <div className="col-span-1">
            <span className="font-body text-13 text-paper/40 uppercase tracking-wider block mb-4 font-semibold">
              Our Doctors
            </span>
            <ul className="space-y-2.5 font-body text-15">
              <li>
                <Link href="/dentists/" className="text-paper/80 hover:text-lime transition-colors">
                  All Doctors
                </Link>
              </li>
              {DENTISTS.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/dentists/${d.slug}/`}
                    className="text-paper/80 hover:text-lime transition-colors"
                  >
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: The Clinic */}
          <div className="col-span-1">
            <span className="font-body text-13 text-paper/40 uppercase tracking-wider block mb-4 font-semibold">
              The Clinic
            </span>
            <ul className="space-y-2.5 font-body text-15">
              <li>
                <Link href="/about/" className="text-paper/80 hover:text-lime transition-colors">
                  About Practice
                </Link>
              </li>
              <li>
                <Link href="/blog/" className="text-paper/80 hover:text-lime transition-colors">
                  Clinical Journal
                </Link>
              </li>
              <li>
                <Link href="/book-appointment/" className="text-paper/80 hover:text-lime transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="text-paper/80 hover:text-lime transition-colors">
                  Location & Map
                </Link>
              </li>
              <li>
                <Link href="/emergency-dentist/" className="text-paper/80 hover:text-lime transition-colors">
                  Emergency Triage
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <span className="font-body text-13 text-paper/40 uppercase tracking-wider block mb-4 font-semibold">
              Direct Contact
            </span>
            <div className="space-y-3 font-body text-15 text-paper/80">
              <div>
                <span className="text-paper/50 block text-13">Phone:</span>
                <a
                  href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-lime transition-colors font-medium"
                >
                  {CLINIC_INFO.contact.phone}
                </a>
              </div>
              <div>
                <span className="text-paper/50 block text-13">WhatsApp:</span>
                <a
                  href={`https://wa.me/${CLINIC_INFO.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lime transition-colors"
                >
                  {CLINIC_INFO.contact.whatsapp}
                </a>
              </div>
              <div>
                <span className="text-paper/50 block text-13">Address:</span>
                <address className="not-italic leading-relaxed text-13 text-paper/70">
                  {CLINIC_INFO.primaryLocation.street}, {CLINIC_INFO.primaryLocation.suite}
                  <br />
                  {CLINIC_INFO.primaryLocation.city}, {CLINIC_INFO.primaryLocation.state} {CLINIC_INFO.primaryLocation.postalCode}
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-body text-13 text-paper/60">
          <div>
            © {new Date().getFullYear()} {CLINIC_INFO.legalName}. All rights reserved. Directed by Dr. Ahmad Raza & Dr. Farheen Zahra.
          </div>
          <div className="flex items-center gap-6">
            <span>PMDC Registered</span>
            <span>•</span>
            <span>BAMDC Academic Affiliated</span>
            <span>•</span>
            <span>ADA / AAID Protocol Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
