import type { Metadata } from 'next';
import HomePageContent from '@/components/HomePageContent';
import JsonLd from '@/components/JsonLd';
import { resolvedFaqs } from '@/lib/content';

export const metadata: Metadata = {
  title: { absolute: 'CCTV Installation in Addis Ababa | Ethio Smart Security & CCTV' },
  alternates: { canonical: '/' },
};

export default function Home() {
  const faqs = resolvedFaqs();

  return (
    <>
      <HomePageContent />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />
    </>
  );
}
