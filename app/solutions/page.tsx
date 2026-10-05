import type { Metadata } from 'next';
import SolutionsPageContent from '@/components/SolutionsPageContent';

export const metadata: Metadata = {
  title: 'CCTV Solutions in Addis Ababa: Outdoor, 4G, Solar, Battery',
  description: 'CCTV solutions by problem: outdoor, indoor, 4G/SIM, battery backup, solar, PTZ and complete systems, installed in Addis Ababa.',
  alternates: { canonical: '/solutions' },
};

export default function SolutionsPage() {
  return <SolutionsPageContent />;
}
