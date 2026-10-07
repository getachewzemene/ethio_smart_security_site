'use client';

import Link from 'next/link';
import { site } from '@/lib/site';
import { solutions, useCases } from '@/lib/content';
import ContactLink from './ContactLink';
import { useLanguage, LanguageSwitch } from '@/lib/i18n';

export default function Footer() {
  const { t, isAm } = useLanguage();

  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <p className="footer-brand">{isAm ? t.site.name : site.name}</p>
          <p>{t.site.address}</p>
          <p className="footer-phone"><a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a></p>
          <div className="footer-cta">
            <ContactLink kind="whatsapp" location="footer" variant="solid" />
            <ContactLink kind="telegram" location="footer" variant="outline" />
          </div>
          <LanguageSwitch variant="footer" />
        </div>
        <div>
          <p className="footer-h">{t.nav.solutions}</p>
          <ul>
            {solutions.map((s) => (
              <li key={s.slug}>
                <Link href={`/solutions/${s.slug}`}>{t.solutions[s.slug]?.title || s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer-h">{isAm ? 'ሲሲቲቪ ለ' : 'CCTV for'}</p>
          <ul>
            {useCases.map((u) => (
              <li key={u.slug}>
                <Link href={`/cctv-for/${u.slug}`}>{t.useCases[u.slug]?.title || u.title}</Link>
              </li>
            ))}
          </ul>
          <p className="footer-h" style={{ marginTop: 20 }}>
            {isAm ? 'ይፋዊ ሰነዶች እና ፕሮፎርማ' : 'Corporate & Procurement'}
          </p>
          <ul>
            <li><Link href="/proforma">{isAm ? 'ህጋዊ ፕሮፎርማ ይጠይቁ' : 'Request Proforma / Quote'}</Link></li>
            <li><Link href="/company-profile">{isAm ? 'የድርጅት መገለጫ (Profile)' : 'Company Profile'}</Link></li>
            <li><Link href="/#cctv-calculator">{isAm ? 'የሲሲቲቪ ስቶሬጅ ካልኩሌተር' : 'CCTV Storage Calculator'}</Link></li>
            <li><Link href="/services">{t.nav.services}</Link></li>
          </ul>
          <p className="footer-h" style={{ marginTop: 20 }}>
            {isAm ? 'የማሳያ ቪዲዮዎቻችንን ይከታተሉ' : 'Follow our demos'}
          </p>
          <ul>
            <li><a href={site.tiktokUrl} target="_blank" rel="noopener noreferrer">TikTok</a></li>
            <li><a href={site.facebookUrl} target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href={site.telegramUrl} target="_blank" rel="noopener noreferrer">Telegram</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-base">
        © {new Date().getFullYear()} {isAm ? t.site.copyright : `${site.name}. Addis Ababa, Ethiopia.`}
      </div>
    </footer>
  );
}

