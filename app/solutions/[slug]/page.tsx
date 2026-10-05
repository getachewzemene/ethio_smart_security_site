import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSolution, solutions } from '@/lib/content';
import { site } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import SolutionSlugContent from '@/components/SolutionSlugContent';

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getSolution(params.slug);
  if (!s) return {};
  return {
    title: s.seoTitle,
    description: s.seoDescription,
    keywords: s.keywords,
    alternates: { canonical: `/solutions/${s.slug}` },
    openGraph: {
      title: s.seoTitle,
      description: s.seoDescription,
      url: `${site.url}/solutions/${s.slug}`,
      images: ['/og.png'],
    },
  };
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const s = getSolution(params.slug);
  if (!s) notFound();

  return (
    <>
      <SolutionSlugContent slug={params.slug} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: s.seoTitle.split(' – ')[0],
          description: s.seoDescription,
          provider: { '@id': `${site.url}/#business` },
          areaServed: { '@type': 'City', name: 'Addis Ababa' },
          serviceType: s.title,
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
            { '@type': 'ListItem', position: 2, name: 'Solutions', item: `${site.url}/solutions` },
            { '@type': 'ListItem', position: 3, name: s.title, item: `${site.url}/solutions/${s.slug}` },
          ],
        }}
      />
    </>
  );
}
