import type { Metadata } from 'next';
import { services } from '@/lib/content';
import { site } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import ServicesPageContent from '@/components/ServicesPageContent';

export const metadata: Metadata = {
  title: 'CCTV Services in Addis Ababa: Installation, Design, Upgrade & Support',
  description: 'CCTV installation, system design, remote viewing setup, upgrades, maintenance and security consultation in Addis Ababa. Call or WhatsApp 0945-282035.',
  keywords: ['CCTV installation Addis Ababa', 'CCTV installation Ethiopia', 'security systems Addis Ababa'],
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesPageContent />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'CCTV services',
          itemListElement: services.map((s, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
              '@type': 'Service',
              name: s.title,
              description: s.text,
              provider: { '@id': `${site.url}/#business` },
              areaServed: { '@type': 'City', name: 'Addis Ababa' },
            },
          })),
        }}
      />
    </>
  );
}
