import type { Metadata } from 'next';
import AboutPageContent from '@/components/AboutPageContent';

export const metadata: Metadata = {
  title: 'About Ethio Smart Security & CCTV',
  description: 'Ethio Smart Security & CCTV is an Addis Ababa team that recommends, installs and supports CCTV for homes and businesses.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
