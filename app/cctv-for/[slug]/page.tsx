import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getUseCase, useCases } from '@/lib/content';
import { site } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import UseCaseSlugContent from '@/components/UseCaseSlugContent';

export function generateStaticParams() {
  return useCases.map((u) => ({ slug: u.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const u = getUseCase(params.slug);
  if (!u) return {};
  return {
    title: u.seoTitle,
    description: u.seoDescription,
    keywords: u.keywords,
    alternates: { canonical: `/cctv-for/${u.slug}` },
    openGraph: {
      title: u.seoTitle,
      description: u.seoDescription,
      url: `${site.url}/cctv-for/${u.slug}`,
      images: ['/og.png'],
    },
  };
}

export default function UseCasePage({ params }: { params: { slug: string } }) {
  const u = getUseCase(params.slug);
  if (!u) notFound();

  return (
    <>
      <UseCaseSlugContent slug={params.slug} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: u.headline,
          description: u.seoDescription,
          provider: { '@id': `${site.url}/#business` },
          areaServed: { '@type': 'City', name: 'Addis Ababa' },
        }}
      />
    </>
  );
}
