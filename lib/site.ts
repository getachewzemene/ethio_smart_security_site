// Single source of truth for business details. Edit here, not in components.
const env = (v: string | undefined, fallback: string) => (v && v.trim() ? v.trim() : fallback);

export const site = {
  name: 'Ethio Smart Security & CCTV',
  shortName: 'Ethio Smart Security',
  url: env(process.env.NEXT_PUBLIC_SITE_URL, 'https://ethiosmartsecurity.com').replace(/\/$/, ''),
  phoneDisplay: '0945-282035',
  phoneTel: '+251945282035',
  whatsappNumber: '251945282035',
  email: 'info@ethiosmartsecurity.com',
  tinText: 'VAT & TIN registered business. Official proforma invoices and receipts issued.',
  telegramUrl: env(process.env.NEXT_PUBLIC_TELEGRAM_URL, 'https://t.me/+251945282035'),
  tiktokUrl: env(process.env.NEXT_PUBLIC_TIKTOK_URL, 'https://www.tiktok.com/'),
  facebookUrl: env(process.env.NEXT_PUBLIC_FACEBOOK_URL, 'https://www.facebook.com/'),
  address: 'Megenagna, near Lem Hotel / Fenasi Building, Addis Ababa, Ethiopia',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Lem+Hotel+Megenagna+Addis+Ababa',
  hours: 'Monday – Saturday: 8:30 AM – 6:30 PM; Emergency & corporate support available 24/7.',
  // Only shown on the site as a proof point secondary to real installs.
  followers: { tiktok: '46K+', facebook: '7K+' },
  // TODO(owner): replace with the real warranty policy (used in FAQ + solution pages).
  warrantyText:
    'Yes. Our cameras and systems come with warranty. The period depends on the camera model and is confirmed with you in writing on the quotation before installation.',
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
export const telTel = () => `tel:${site.phoneTel}`;
