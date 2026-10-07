'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import ContactLink from './ContactLink';
import { site } from '@/lib/site';
import { useLanguage, LanguageSwitch } from '@/lib/i18n';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { t, isAm } = useLanguage();

  const nav = [
    { href: '/', label: t.nav.home },
    { href: '/solutions', label: t.nav.solutions },
    { href: '/calculator', label: isAm ? 'ካልኩሌተር' : 'Calculator' },
    { href: '/installations', label: t.nav.installations },
    { href: '/services', label: t.nav.services },
    { href: '/proforma', label: t.nav.proforma || (isAm ? 'ፕሮፎርማ' : 'Proforma') },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <header className="header">
      <div className="wrap header-in">
        <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label={`${site.name} home`}>
          <Image src="/logo.png" alt="" width={44} height={44} priority />
          <span className="brand-text">
            {isAm ? (
              <>ኢትዮ ስማርት <b>ሴኩሪቲ</b></>
            ) : (
              <>Ethio Smart <b>Security</b></>
            )}
          </span>
        </Link>
        <nav className="nav-desktop" aria-label="Main">
          {nav.map((n) => {
            const isActive = n.href === '/' ? pathname === '/' : pathname.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={isActive ? 'active' : ''}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="header-cta">
          <LanguageSwitch variant="pill" />
          <Link href="/proforma" className="btn btn-proforma only-desktop" style={{ minHeight: 40, padding: '0 14px', fontSize: '0.88rem', gap: 6 }}>
            <FileText size={15} />
            <span>{isAm ? 'ፕሮፎርማ' : 'Proforma'}</span>
          </Link>
          <ContactLink kind="call" location="header" label={site.phoneDisplay} size="md" />
          <button className="menu-btn" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="nav-mobile" aria-label="Mobile">
          <div className="nav-mobile-lang">
            <span>ቋንቋ / Language</span>
            <LanguageSwitch variant="pill" />
          </div>
          {nav.map((n) => {
            const isActive = n.href === '/' ? pathname === '/' : pathname.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={isActive ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}

