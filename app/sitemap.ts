import { MetadataRoute } from 'next';
import { SERVICES, DENTISTS, BLOG_POSTS } from '@/lib/clinic-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://novadental.com';

  const coreRoutes = [
    '',
    '/about',
    '/dentists',
    '/dental-implants',
    '/root-canal',
    '/teeth-whitening',
    '/dental-cleaning',
    '/braces',
    '/cosmetic-dentistry',
    '/emergency-dentist',
    '/book-appointment',
    '/contact',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route.includes('emergency') || route.includes('book') ? 0.9 : 0.8,
  }));

  const dentistRoutes = DENTISTS.map((d) => ({
    url: `${baseUrl}/dentists/${d.slug}/`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.lastUpdated).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...coreRoutes, ...dentistRoutes, ...blogRoutes];
}
