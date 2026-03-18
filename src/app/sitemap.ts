import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.techbes.co.in';
  
  const routes = [
    '',
    '/about-us',
    '/services',
    '/services/network-infrastructure',
    '/services/data-centre',
    '/services/security-solutions',
    '/services/collaboration-solutions',
    '/services/cctv-solutions',
    '/services/system-sales',
    '/services/amc',
    '/services/fire-alarm-systems',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1.0 : (route === '/services' || route === '/contact' ? 0.9 : 0.8),
  }));

  return routes;
}
