import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { solutions, useCases } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Core main pages with SEO priorities
  const corePages: MetadataRoute.Sitemap = [
    {
      url: `${site.url}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${site.url}/solutions`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${site.url}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${site.url}/installations`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${site.url}/proforma`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${site.url}/company-profile`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${site.url}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${site.url}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
  ];

  // Specific CCTV solution landing pages for search queries in Addis Ababa
  const solutionPages: MetadataRoute.Sitemap = solutions.map((s) => ({
    url: `${site.url}/solutions/${s.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // CCTV by use-case pages (homes, shops, pharmacies, offices, factories)
  const useCasePages: MetadataRoute.Sitemap = useCases.map((u) => ({
    url: `${site.url}/cctv-for/${u.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  return [...corePages, ...solutionPages, ...useCasePages];
}
