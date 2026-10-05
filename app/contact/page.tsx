import type { Metadata } from 'next';
import ContactPageContent from '@/components/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact Ethio Smart Security & CCTV – Call or WhatsApp 0945-282035',
  description: 'Call, WhatsApp or Telegram Ethio Smart Security & CCTV in Megenagna, Addis Ababa on 0945-282035.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
