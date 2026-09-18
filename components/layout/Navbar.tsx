'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { CLINIC_INFO, SERVICES } from '@/lib/clinic-data';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md py-3 sm:py-3.5 border-b border-gray-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.06)]'
          : 'bg-white/95 md:bg-white/90 backdrop-blur-md py-3.5 sm:py-4 border-b border-gray-100 shadow-sm'
      }`}
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Prominent Enriched Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 sm:gap-4 no-underline focus-visible:outline-offset-4 flex-shrink-0"
          aria-label="Nova Dental Home"
        >
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0 bg-white rounded-xl shadow-md border border-gray-200/80 p-1.5 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/logo.png"
              alt="Nova Dental Logo"
              width={64}
              height={64}
              priority
              className="object-contain w-full h-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-20 sm:text-24 md:text-28 tracking-[-0.03em] font-semibold text-forest-ink group-hover:text-forest transition-colors leading-tight">
              Nova Dental
            </span>
            <span className="font-body text-12 sm:text-13 font-medium text-forest-ink/70 hidden sm:block">
              Dr. Ahmad Raza & Dr. Farheen Zahra
            </span>
          </div>
        </Link>

        {/* Desktop Primary Navigation (Active on xl screens >= 1200px) */}
        <nav className="hidden xl:flex items-center gap-7 2xl:gap-8" aria-label="Main Navigation">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              type="button"
              className={`font-body text-15 py-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
                pathname?.includes('dental-') ||
                pathname?.includes('root-canal') ||
                pathname?.includes('teeth-whitening') ||
                pathname?.includes('braces') ||
                pathname?.includes('cosmetic-dentistry')
                  ? 'text-forest font-semibold'
                  : 'text-forest-ink/80 hover:text-forest-ink font-medium'
              }`}
              aria-expanded={servicesDropdownOpen}
            >
              <span>Treatments</span>
              <span
                className={`w-1.5 h-1.5 border-r border-b border-forest-ink/60 transition-transform duration-200 ${
                  servicesDropdownOpen ? '-rotate-135 -translate-y-0.5' : 'rotate-45 translate-y-[-2px]'
                }`}
                aria-hidden="true"
              />
            </button>

            {/* Dropdown Panel with Pure White Background and Smooth Shadow */}
            {servicesDropdownOpen && (
              <div className="absolute top-full -left-4 pt-2 w-64 z-50 animate-fade-in">
                <div className="p-2 bg-white border border-gray-100 shadow-[0_12px_36px_rgba(0,0,0,0.12)] rounded-2xl">
                  <div className="space-y-0.5">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/${s.slug}/`}
                        className={`block px-3.5 py-2 text-14 font-body transition-all duration-200 rounded-xl ${
                          pathname === `/${s.slug}/`
                            ? 'bg-emerald-50 text-forest font-semibold shadow-xs'
                            : 'text-forest-ink/85 hover:bg-emerald-50/70 hover:text-forest hover:translate-x-1'
                        }`}
                      >
                        <span className="block font-medium">{s.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about/"
            className={`font-body text-15 py-2 transition-colors ${
              pathname === '/about/'
                ? 'text-forest font-semibold'
                : 'text-forest-ink/80 hover:text-forest-ink font-medium'
            }`}
          >
            About Us
          </Link>

          <Link
            href="/dentists/"
            className={`font-body text-15 py-2 transition-colors ${
              pathname?.startsWith('/dentists')
                ? 'text-forest font-semibold'
                : 'text-forest-ink/80 hover:text-forest-ink font-medium'
            }`}
          >
            Our Doctors
          </Link>

          <Link
            href="/blog/"
            className={`font-body text-15 py-2 transition-colors ${
              pathname?.startsWith('/blog')
                ? 'text-forest font-semibold'
                : 'text-forest-ink/80 hover:text-forest-ink font-medium'
            }`}
          >
            Clinical Journal
          </Link>

          <Link
            href="/contact/"
            className={`font-body text-15 py-2 transition-colors ${
              pathname === '/contact/'
                ? 'text-forest font-semibold'
                : 'text-forest-ink/80 hover:text-forest-ink font-medium'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA / Phone + Emergency */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/emergency-dentist/"
            className="hidden sm:inline-flex font-body text-13 font-semibold text-forest bg-mist/60 hover:bg-mist px-3 py-1.5 transition-colors border border-mist"
          >
            Emergency 24/7
          </Link>

          <Button href="/book-appointment/" variant="forest" size="sm" className="hidden sm:inline-flex text-13 px-4 py-2 font-medium">
            Book Appointment
          </Button>

          {/* Mobile / Tablet Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-forest-ink focus-visible:outline-offset-2 flex items-center justify-center cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-[2px] bg-forest-ink transition-transform duration-250 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-full h-[2px] bg-forest-ink transition-opacity duration-200 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-full h-[2px] bg-forest-ink transition-transform duration-250 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Drawer Menu */}
      <div
        className={`xl:hidden fixed inset-x-0 top-full h-[calc(100dvh-100%)] bg-white border-t border-gray-200/80 overflow-y-auto px-6 py-6 flex flex-col justify-between z-[999] transition-all duration-300 ease-in-out shadow-2xl ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col space-y-4">
          <span className="font-body text-13 text-forest-ink/60 font-semibold uppercase tracking-wider">
            Treatments & Services
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}/`}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-body text-15 py-1.5 ${
                  pathname === `/${s.slug}/` ? 'text-forest font-semibold' : 'text-forest-ink hover:text-forest'
                }`}
              >
                {s.navLabel}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-mist flex flex-col space-y-3">
            <Link
              href="/about/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-body text-17 ${
                pathname === '/about/' ? 'text-forest font-semibold' : 'text-forest-ink hover:text-forest'
              }`}
            >
              About Us
            </Link>
            <Link
              href="/dentists/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-body text-17 ${
                pathname?.startsWith('/dentists') ? 'text-forest font-semibold' : 'text-forest-ink hover:text-forest'
              }`}
            >
              Our Doctors (Dr. Ahmad Raza & Dr. Farheen Zahra)
            </Link>
            <Link
              href="/emergency-dentist/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-body text-17 ${
                pathname === '/emergency-dentist/' ? 'text-forest font-bold' : 'text-forest font-medium'
              }`}
            >
              Emergency Dentist (Urgent Care)
            </Link>
            <Link
              href="/blog/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-body text-17 ${
                pathname?.startsWith('/blog') ? 'text-forest font-semibold' : 'text-forest-ink hover:text-forest'
              }`}
            >
              Clinical Journal (Blog)
            </Link>
            <Link
              href="/contact/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-body text-17 ${
                pathname === '/contact/' ? 'text-forest font-semibold' : 'text-forest-ink hover:text-forest'
              }`}
            >
              Contact & Hours
            </Link>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-mist flex flex-col gap-3">
          <Button
            href="/book-appointment/"
            variant="forest"
            size="lg"
            className="w-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Appointment
          </Button>
          <a
            href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
            className="text-center font-body text-15 text-forest py-2 font-medium"
          >
            Call {CLINIC_INFO.contact.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
