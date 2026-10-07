import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyBar from '@/components/StickyBar';
import Analytics from '@/components/Analytics';
import JsonLd from '@/components/JsonLd';
import { site } from '@/lib/site';

const description =
  'Professional CCTV installation and remote phone monitoring in Addis Ababa for homes, shops, pharmacies, offices and factories. Call or WhatsApp 0945-282035.';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'CCTV Installation in Addis Ababa | Ethio Smart Security & CCTV', template: '%s | Ethio Smart Security' },
  description,
  keywords: ['CCTV installation Addis Ababa', 'CCTV camera Addis Ababa', 'CCTV Ethiopia', 'security camera Addis Ababa', '4G CCTV camera Ethiopia', 'solar CCTV Ethiopia'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website', locale: 'en_ET', url: site.url, siteName: site.name,
    title: 'CCTV Installation in Addis Ababa | Ethio Smart Security & CCTV',
    description,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Ethio Smart Security & CCTV' }],
  },
  twitter: { card: 'summary_large_image', title: 'Ethio Smart Security & CCTV – Addis Ababa', description, images: ['/og.png'] },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  width: 'device-width', initialScale: 1, themeColor: '#07122b', viewportFit: 'cover',
};

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id': `${site.url}/#business`,
  name: site.name,
  url: site.url,
  logo: `${site.url}/logo.png`,
  image: `${site.url}/og.png`,
  telephone: site.phoneTel,
  description,
  address: { '@type': 'PostalAddress', streetAddress: 'Megenagna, near Lem Hotel / Fenasi Building', addressLocality: 'Addis Ababa', addressCountry: 'ET' },
  areaServed: { '@type': 'City', name: 'Addis Ababa' },
  priceRange: '$$',
  sameAs: [site.tiktokUrl, site.facebookUrl, site.telegramUrl].filter((u) => u !== 'https://www.tiktok.com/' && u !== 'https://www.facebook.com/'),
  makesOffer: ['CCTV installation', 'Remote CCTV monitoring setup', '4G CCTV cameras', 'Solar CCTV cameras'].map((n) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: n } })),
};

import { LanguageProvider } from '@/lib/i18n';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Ethiopic:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>
          <a href="#main" className="sr">Skip to content</a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <StickyBar />
          <Analytics />
          <JsonLd data={localBusiness} />
        </LanguageProvider>
      </body>
    </html>
  );
}

