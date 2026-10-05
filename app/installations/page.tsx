import type { Metadata } from 'next';
import InstallationsPageContent from '@/components/InstallationsPageContent';

export const metadata: Metadata = {
  title: 'CCTV Installation Projects in Addis Ababa',
  description: 'Real CCTV installations by Ethio Smart Security in Addis Ababa: homes, shops, pharmacies, offices, factories and compounds.',
  alternates: { canonical: '/installations' },
};

export default function InstallationsPage() {
  return <InstallationsPageContent />;
}
