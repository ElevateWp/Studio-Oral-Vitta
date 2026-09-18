import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LenisProvider from '@/components/motion/LenisProvider';
import PagePreloader from '@/components/motion/PagePreloader';
import JsonLd from '@/components/ui/JsonLd';
import { generateLocalBusinessSchema } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL('https://novadental.com'),
  title: {
    default: 'Nova Dental | Restorative & Surgical Dentistry',
    template: '%s | Nova Dental Clinic',
  },
  description:
    'Nova Dental Clinic led by Dr. Ahmad Raza (Owner) & Dr. Farheen Zahra (BAMDC Demonstrator) dedicated to biologically conservative dental implants, microscopic root canals, clear aligner orthodontics, and restorative excellence.',
  keywords: [
    'Nova Dental',
    'Dr Ahmad Raza Dentist',
    'Dr Farheen Zahra BAMDC',
    'Dental Implants',
    'Microscopic Root Canal',
    'Clear Aligners',
    'Emergency Dentist',
    'Cosmetic Dentistry',
  ],
  authors: [{ name: 'Dr. Ahmad Raza & Dr. Farheen Zahra' }],
  icons: {
    icon: [
      { url: '/images/logo.png', type: 'image/png' },
    ],
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-paper text-forest-ink min-h-screen flex flex-col selection:bg-lime selection:text-forest-ink">
        <PagePreloader />
        <JsonLd data={generateLocalBusinessSchema()} />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <LenisProvider>
          <Navbar />
          <main id="main-content" className="flex-grow pt-[72px]">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
