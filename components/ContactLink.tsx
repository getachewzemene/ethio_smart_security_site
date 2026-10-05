'use client';

import { track } from '@/lib/track';
import { site, whatsappLink, telTel } from '@/lib/site';
import { Phone, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export type Kind = 'call' | 'whatsapp' | 'telegram';

const icons = { call: Phone, whatsapp: MessageCircle, telegram: Send };

type Props = {
  kind: Kind;
  location: string; // where on the page the click happened, e.g. "hero", "sticky_bar"
  message?: string; // WhatsApp prefilled message
  label?: string;
  variant?: 'solid' | 'outline' | 'bar' | 'ghost';
  size?: 'md' | 'lg';
  hideIcon?: boolean;
  className?: string;
};

export default function ContactLink({ kind, location, message, label, variant = 'solid', size = 'md', hideIcon, className = '' }: Props) {
  const { t, isAm } = useLanguage();
  const Icon = icons[kind];

  const defaultLabel = {
    call: t.actions.callNow,
    whatsapp: t.actions.whatsappUs,
    telegram: t.actions.telegram,
  };

  const defaultWaMessage = isAm
    ? 'ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ የሲሲቲቪ ካሜራ ገጠማ እፈልጋለሁ። ልትረዱኝ ትችላላችሁ?'
    : 'Hello Ethio Smart Security, I want CCTV. Can you help me?';

  const href =
    kind === 'call'
      ? telTel()
      : kind === 'whatsapp'
      ? whatsappLink(message || defaultWaMessage)
      : site.telegramUrl;

  return (
    <a
      href={href}
      className={`btn btn-${kind} btn-${variant} btn-${size} ${className}`}
      {...(kind !== 'call' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      onClick={() => track('cta_click', { cta_type: kind, cta_location: location })}
    >
      {!hideIcon && <Icon size={size === 'lg' ? 22 : 20} aria-hidden strokeWidth={2.2} />}
      <span>{label || defaultLabel[kind]}</span>
    </a>
  );
}

