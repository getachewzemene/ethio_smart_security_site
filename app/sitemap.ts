import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { solutions, useCases } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const core = ['', '/solutions', '/services', '/installations', '/about', '/contact'].map((p) => ({
    url: `${site.url}${p}`, lastModified: now, changeFrequency: 'weekly' as const, priority: p === '' ? 1 : 0.8,
  }));
  const sol = solutions.map((s) => ({ url: `${site.url}/solutions/${s.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 }));
  const uc = useCases.map((u) => ({ url: `${site.url}/cctv-for/${u.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 }));
  return [...core, ...sol, ...uc];
}
