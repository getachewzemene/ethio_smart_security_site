import type { Metadata } from 'next';
import CompanyProfileContent from '@/components/CompanyProfileContent';
import JsonLd from '@/components/JsonLd';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Company Profile & Capabilities | Ethio Smart Security & CCTV',
  description:
    'Official Company Profile of Ethio Smart Security & CCTV. Enterprise security engineering, CCTV installation, biometric access control, and maintenance contracts in Addis Ababa, Ethiopia.',
  alternates: { canonical: '/company-profile' },
  openGraph: {
    title: 'Company Profile | Ethio Smart Security & CCTV',
    description:
      'Enterprise security engineering, hardware certifications, and technical standards in Addis Ababa.',
    url: `${site.url}/company-profile`,
    images: ['/og.png'],
  },
};

export default function CompanyProfilePage() {
  return (
    <>
      <CompanyProfileContent />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'Ethio Smart Security Company Profile',
          description: 'Official capabilities, engineering standards, and solutions portfolio.',
          publisher: { '@id': `${site.url}/#business` },
        }}
      />
    </>
  );
}
