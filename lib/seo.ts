import { Metadata } from 'next';
import { CLINIC_INFO } from './clinic-data';

export const BASE_URL = 'https://novadental.com';

export function createMetadata({
  title,
  description,
  pathname,
  image,
}: {
  title: string;
  description: string;
  pathname: string;
  image?: string;
}): Metadata {
  const url = `${BASE_URL}${pathname}`;
  const fullTitle = `${title} | Nova Dental Clinic`;
  const defaultImage = `${BASE_URL}/images/og-nova-dental.jpg`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: CLINIC_INFO.name,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: image || defaultImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image || defaultImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    '@id': `${BASE_URL}/#dentist`,
    name: CLINIC_INFO.name,
    legalName: CLINIC_INFO.legalName,
    url: BASE_URL,
    telephone: CLINIC_INFO.contact.phone,
    email: CLINIC_INFO.contact.email,
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${CLINIC_INFO.primaryLocation.street}, ${CLINIC_INFO.primaryLocation.suite}`,
      addressLocality: CLINIC_INFO.primaryLocation.city,
      addressRegion: CLINIC_INFO.primaryLocation.state,
      postalCode: CLINIC_INFO.primaryLocation.postalCode,
      addressCountry: CLINIC_INFO.primaryLocation.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: CLINIC_INFO.primaryLocation.coordinates.lat,
      longitude: CLINIC_INFO.primaryLocation.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'],
        opens: '11:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Friday'],
        opens: '15:00',
        closes: '22:00',
      },
    ],
    medicalSpecialty: [
      'Dentistry',
      'Prosthodontics',
      'Endodontics',
      'Orthodontics',
      'Periodontics',
    ],
  };
}

export function generateMedicalProcedureSchema(serviceName: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: serviceName,
    description: description,
    procedureType: 'https://schema.org/SurgicalProcedure',
    url: `${BASE_URL}${url}`,
    performer: {
      '@type': 'Organization',
      name: CLINIC_INFO.name,
    },
  };
}

export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}
