import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LenisProvider from '@/components/motion/LenisProvider';
import PagePreloader from '@/components/motion/PagePreloader';
import JsonLd from '@/components/ui/JsonLd';
import { generateLocalBusinessSchema } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL('https://drmarcelosouzabezerra.com.br'),
  title: {
    default: 'Consultório Odontológico Dr. Marcelo de Souza Bezerra | Manaus',
    template: '%s | Dr. Marcelo de Souza Bezerra',
  },
  description:
    'Consultório Odontológico Dr. Marcelo de Souza Bezerra em Manaus. Especialistas em implantes dentários com técnica de carga imediata para recuperar seu sorriso em 1 dia, odontologia domiciliar e aparelhos ortodônticos.',
  keywords: [
    'Dr Marcelo de Souza Bezerra',
    'Dra Bruna',
    'Consultório Odontológico Manaus',
    'Implantes Carga Imediata Manaus',
    'Sorriso em 1 Dia',
    'Odontologia Domiciliar Manaus',
    'Aparelhos Ortodonticos Manaus',
    'Dentista Cachoeirinha Manaus',
  ],
  authors: [{ name: 'Dr. Marcelo de Souza Bezerra & Dra. Bruna' }],
  icons: {
    icon: [
      { url: '/images/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: [{ url: '/images/logo.png', type: 'image/png' }],
    apple: [{ url: '/images/logo.png', sizes: '180x180', type: 'image/png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-paper text-forest-ink min-h-screen flex flex-col selection:bg-[#D9F3FC] selection:text-[#0A2472]">
        <PagePreloader />
        <JsonLd data={generateLocalBusinessSchema()} />
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
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
