'use client';

import React, { useState, useEffect } from 'react';
import CtaRow from '@/components/CtaRow';
import ContactLink from '@/components/ContactLink';
import { ShimmerImage } from '@/components/Skeleton';
import { installations, Installation } from '@/lib/installations';
import { HelpBlock } from '@/components/Sections';
import BeforeAfterComparison from '@/components/BeforeAfterComparison';
import NationwideCoverageStrip from '@/components/NationwideCoverageStrip';
import { useLanguage } from '@/lib/i18n';
import { site, whatsappLink } from '@/lib/site';
import {
  MapPin,
  Maximize2,
  X,
  ShieldCheck,
  Sparkles,
  FileText,
  Truck,
  Eye,
  PhoneCall,
  MessageCircle,
  Building2,
  CheckCircle2,
  Layers,
} from 'lucide-react';

type FilterKey = 'all' | 'factories' | 'shops' | 'compounds' | 'homes' | 'offices' | 'pharmacies';

export default function InstallationsPageContent() {
  const { t, isAm } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<FilterKey>('all');
  const [activeProject, setActiveProject] = useState<Installation | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveProject(null);
      }
    };
    if (activeProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProject]);

  const heroMessage = isAm
    ? 'ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ በመላው ኢትዮጵያ የሰራችኋቸውን ስራዎች አየሁ፤ ተመሳሳይ ስራ ማሰራት እፈልጋለሁ።'
    : 'Hello Ethio Smart Security, I saw your installation projects across Ethiopia. I want something similar.';

  const filterTabs: { key: FilterKey; labelEn: string; labelAm: string }[] = [
    { key: 'all', labelEn: 'All Projects', labelAm: 'ሁሉም ስራዎች' },
    { key: 'factories', labelEn: 'Factories & Industrial', labelAm: 'ፋብሪካዎችና መጋዘኖች' },
    { key: 'shops', labelEn: 'Commercial & Retail', labelAm: 'የንግድ ማዕከላትና ሱቆች' },
    { key: 'compounds', labelEn: 'Resorts & Compounds', labelAm: 'ሪዞርቶችና ግቢዎች' },
    { key: 'homes', labelEn: 'Homes & Villas', labelAm: 'መኖሪያ ቤቶችና ቪላዎች' },
    { key: 'offices', labelEn: 'Offices & Logistics', labelAm: 'ቢሮዎችና ሎጅስቲክስ' },
    { key: 'pharmacies', labelEn: 'Pharmacies & Clinics', labelAm: 'ፋርማሲዎች' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? installations
      : installations.filter((i) => i.category === activeCategory);

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'factories':
        return isAm ? 'ፋብሪካ / መጋዘን' : 'Factory / Industrial';
      case 'shops':
        return isAm ? 'ንግድ ማዕከል / ሞል' : 'Commercial / Retail';
      case 'compounds':
        return isAm ? 'ሪዞርት / ግቢ' : 'Resort / Compound';
      case 'homes':
        return isAm ? 'ቪላ / መኖሪያ' : 'Smart Villa / Residence';
      case 'offices':
        return isAm ? 'ቢሮ / ሎጅስቲክስ' : 'Office / Wholesale';
      case 'pharmacies':
        return isAm ? 'ፋርማሲ / ክሊኒክ' : 'Pharmacy / Healthcare';
      default:
        return category;
    }
  };

  return (
    <>
      {/* 1. Page Hero */}
      <section className="page-hero">
        <div className="wrap">
          <h1>
            {isAm
              ? 'በመላው ኢትዮጵያ የተከናወኑ እውነተኛ የገጠማ ስራዎች'
              : 'Turnkey CCTV & Security Installations Across Ethiopia'}
          </h1>
          <p className="lead">
            {isAm
              ? 'ካሜራ ብቻ አንሸጥም፤ እራሳችን በአዲስ አበባ፣ ባህር ዳር፣ ሀዋሳ፣ አዳማ፣ ደብረ ዘይት፣ ጅማ፣ መቐለ እና በሁሉም ክልሎች በከፍተኛ ምህንድስና እንገጥማለን።'
              : 'Real turnkey installations engineered and deployed by our teams across Ethiopia — from large industrial parks and commercial malls to private compounds and luxury villas.'}
          </p>
          <CtaRow
            location="installations_hero"
            message={heroMessage}
            waLabel={t.actions.askSimilarWork}
          />
        </div>
      </section>

      {/* 2. Nationwide Coverage Strip */}
      <NationwideCoverageStrip />

      {/* 3. Main Installations Showcase: Compact, High-Density Responsive Grid */}
      <section className="section inst-showcase" id="projects-gallery">
        <div className="wrap">
          <div className="sec-head">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                color: 'var(--green)',
                fontWeight: 800,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              <Sparkles size={16} />{' '}
              {isAm ? 'የተከናወኑ እውነተኛ ስራዎች ማዕከለ-ስዕላት' : 'Real Engineering Project Portfolio'}
            </div>
            <h2>
              {isAm
                ? 'የተከናወኑ የሲሲቲቪ እና የስማርት ደህንነት ስራዎች'
                : 'Turnkey Surveillance & Security Portfolio'}
            </h2>
            <p>
              {isAm
                ? 'በሁሉም ፕሮጀክቶች ላይ 100% በኮንዱይት ቱቦ የተደበቀ ንጹህ ገመድ ዝርጋታ፣ ኦርጅናል የደህንነት ሃርድዌር እና የጽሁፍ ዋስትና እናረጋግጣለን።'
                : 'Every project is engineered with 100% concealed heavy-duty PVC conduits, certified weatherproof junction mounts, and verified 24/7 mobile live monitoring.'}
            </p>
          </div>

          {/* Engineering Quality Metrics Strip */}
          <div className="inst-metrics-bar">
            <div className="inst-metric-item">
              <div className="inst-metric-icon">
                <ShieldCheck size={20} />
              </div>
              <div className="inst-metric-text">
                <strong>{isAm ? '100% ንጹህ የኮንዱይት ዝርጋታ' : 'Concealed Heavy PVC'}</strong>
                <span>{isAm ? 'ምንም አይነት የተንጠለጠለ ገመድ የለም' : 'Zero exposed dangling cables'}</span>
              </div>
            </div>
            <div className="inst-metric-item">
              <div className="inst-metric-icon">
                <Sparkles size={20} />
              </div>
              <div className="inst-metric-text">
                <strong>{isAm ? 'ColorVu እና 4K ጥራት' : 'ColorVu & 4K Clarity'}</strong>
                <span>{isAm ? 'በጨለማ የቀን ዓይነት ቀለም እይታ' : 'Full color in total darkness'}</span>
              </div>
            </div>
            <div className="inst-metric-item">
              <div className="inst-metric-icon">
                <FileText size={20} />
              </div>
              <div className="inst-metric-text">
                <strong>{isAm ? 'ህጋዊ ደረሰኝና የጽሁፍ ዋስትና' : 'VAT / TIN & Warranty'}</strong>
                <span>{isAm ? 'ከ1–2 ዓመት ምትክ ዋስትና ጋር' : '1–2 year replacement guarantee'}</span>
              </div>
            </div>
            <div className="inst-metric-item">
              <div className="inst-metric-icon">
                <Truck size={20} />
              </div>
              <div className="inst-metric-text">
                <strong>{isAm ? 'አገር አቀፍ ተደራሽነት' : 'Nationwide Engineering'}</strong>
                <span>{isAm ? 'አዲስ አበባ እና 6 የክልል ማዕከላት' : 'Addis Ababa + 6 regional hubs'}</span>
              </div>
            </div>
          </div>

          {/* Interactive Category Filter Pills */}
          <div
            className="inst-filters-wrap"
            role="tablist"
            aria-label="Filter installations by category"
          >
            {filterTabs.map((tab) => {
              const count =
                tab.key === 'all'
                  ? installations.length
                  : installations.filter((i) => i.category === tab.key).length;
              const isActive = activeCategory === tab.key;

              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`inst-filter-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveCategory(tab.key)}
                >
                  <span>{isAm ? tab.labelAm : tab.labelEn}</span>
                  <span className="inst-filter-count">
                    {count > 0 ? count : isAm ? 'በጥያቄ' : 'Request'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* The Compact Project Grid */}
          {filteredItems.length > 0 ? (
            <div className="inst-grid">
              {filteredItems.map((item) => {
                const title = isAm && item.titleAm ? item.titleAm : item.title;
                const location = isAm && item.locationAm ? item.locationAm : item.location;
                const tags = isAm && item.tagsAm ? item.tagsAm : item.tags || [];
                const detail = isAm && item.detailAm ? item.detailAm : item.detail;
                const waMessage = isAm
                  ? `ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ በ${location} የሰራችሁትን "${title}" ስራ አየሁ፤ ተመሳሳይ ስራ ማሰራት እፈልጋለሁ።`
                  : `Hello Ethio Smart Security, I saw your "${title}" project in ${location}. I would like to inquire about a similar installation.`;

                return (
                  <article className="inst-card" key={item.image}>
                    {/* Media Area */}
                    <div
                      className="inst-card-media"
                      onClick={() => setActiveProject(item)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setActiveProject(item);
                        }
                      }}
                      aria-label={`View photo of ${title}`}
                    >
                      <ShimmerImage
                        src={item.image}
                        alt={item.alt}
                        width={item.width || 1200}
                        height={item.height || 900}
                        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      />
                      <span className="inst-badge-cat">
                        <Layers size={13} /> {getCategoryLabel(item.category)}
                      </span>
                      <span className="inst-badge-loc">
                        <MapPin size={13} color="var(--orange)" /> {location.split(',')[0]}
                      </span>
                      <span className="inst-card-zoom-hint">
                        <Maximize2 size={13} /> {isAm ? 'ሙሉ ፎቶ' : 'Inspect'}
                      </span>
                    </div>

                    {/* Content Body */}
                    <div className="inst-card-body">
                      <h3 className="inst-card-title">{title}</h3>
                      <div className="inst-card-loc">
                        <MapPin size={14} color="var(--green)" style={{ flex: 'none' }} />
                        <span>{location}</span>
                      </div>

                      {/* Spec Tags */}
                      {tags.length > 0 && (
                        <div className="inst-card-tags">
                          {tags.map((tag, idx) => (
                            <span className="inst-chip" key={idx}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Action Footer */}
                      <div className="inst-card-foot">
                        <a
                          href={whatsappLink(waMessage)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inst-btn-ask"
                          title="Ask about similar installation on WhatsApp"
                        >
                          <MessageCircle size={15} />
                          <span>{isAm ? 'ተመሳሳይ ስራ ይጠይቁ' : 'Ask Similar Setup'}</span>
                        </a>
                        <button
                          type="button"
                          className="inst-btn-view"
                          onClick={() => setActiveProject(item)}
                          aria-label={`View full details of ${title}`}
                        >
                          <Eye size={15} />
                          <span>{isAm ? 'ዝርዝር' : 'Details'}</span>
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            /* Custom Category Request Card (e.g. Pharmacies or custom filtered categories) */
            <div className="inst-empty-card">
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: '#f0fdf4',
                  color: 'var(--green)',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <Building2 size={26} />
              </div>
              <h3 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--ink)' }}>
                {isAm
                  ? 'ለፋርማሲዎች፣ ክሊኒኮች እና የጤና ተቋማት የተዘጋጁ ስራዎች'
                  : 'Specialized Pharmacy & Healthcare Surveillance'}
              </h3>
              <p>
                {isAm
                  ? 'የመድሃኒት መደብሮችንና ክሊኒኮችን ካውንተሮች፣ ስቶሮች እና መግቢያ በሮች በድብቅ ዶም ካሜራዎች፣ በ4G ሲም ካርድና በባትሪ ባክአፕ እናደራጃለን። የተሰሩ ተመሳሳይ ስራዎችን ፎቶና ቪዲዮ ለመመልከት ያነጋግሩን።'
                  : 'We design discreet indoor dome setups with 24/7 battery backup and 4G SIM connectivity for pharmacies, clinics, and stockrooms. Contact us to receive portfolio photos and custom proforma specs.'}
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 6 }}>
                <a
                  href={whatsappLink(
                    isAm
                      ? 'ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ እባክዎ ለፋርማሲ/ክሊኒክ የተገጠሙ የሲሲቲቪ ስራዎችን ምሳሌ ላኩልኝ።'
                      : 'Hello Ethio Smart Security, please send me examples of your pharmacy and clinic CCTV installations.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-solid"
                  style={{ background: 'var(--wa)', color: '#fff' }}
                >
                  <MessageCircle size={18} />
                  {isAm ? 'የፋርማሲ ስራዎች ምሳሌ ይጠይቁ' : 'Request Healthcare Portfolio'}
                </a>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setActiveCategory('all')}
                >
                  {isAm ? 'ሁሉንም ስራዎች ይመልከቱ' : 'View All Projects'}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. Full-Screen Photo & Engineering Scope Lightbox Modal */}
      {activeProject && (
        <div
          className="inst-modal-overlay"
          onClick={() => setActiveProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div className="inst-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="inst-modal-close"
              onClick={() => setActiveProject(null)}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            {/* Modal Image Area */}
            <div className="inst-modal-img-wrap">
              <ShimmerImage
                src={activeProject.image}
                alt={activeProject.alt}
                width={activeProject.width || 1200}
                height={activeProject.height || 900}
                priority
              />
            </div>

            {/* Modal Content */}
            <div className="inst-modal-body">
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8, flexWrap: 'wrap' }}>
                <span
                  style={{
                    background: 'var(--ink)',
                    color: '#fff',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    padding: '3px 10px',
                    borderRadius: 999,
                  }}
                >
                  {getCategoryLabel(activeProject.category)}
                </span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                    color: 'var(--muted)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                  }}
                >
                  <MapPin size={14} color="var(--orange)" />
                  {isAm && activeProject.locationAm
                    ? activeProject.locationAm
                    : activeProject.location}
                </span>
              </div>

              <h2
                id="modal-project-title"
                style={{ fontSize: '1.4rem', color: 'var(--ink)', margin: '0 0 10px', lineHeight: 1.25 }}
              >
                {isAm && activeProject.titleAm ? activeProject.titleAm : activeProject.title}
              </h2>

              <p style={{ color: 'var(--muted)', fontSize: '0.98rem', lineHeight: 1.6, margin: '0 0 16px' }}>
                {isAm && activeProject.detailAm ? activeProject.detailAm : activeProject.detail}
              </p>

              {/* Hardware & Engineering Badges */}
              <div
                style={{
                  background: '#f8fafc',
                  border: '1px solid var(--line)',
                  borderRadius: 12,
                  padding: '14px 16px',
                  marginBottom: 20,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: 10,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <CheckCircle2 size={16} color="var(--green)" />
                  <span style={{ fontSize: '0.86rem', color: 'var(--ink)', fontWeight: 600 }}>
                    {isAm ? '100% የPVC ኮንዱይት ከለላ' : '100% Concealed PVC Conduits'}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <CheckCircle2 size={16} color="var(--green)" />
                  <span style={{ fontSize: '0.86rem', color: 'var(--ink)', fontWeight: 600 }}>
                    {isAm ? 'IP66/IP67 ዝናብ መቋቋሚያ' : 'IP66/IP67 Sealed Junctions'}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <CheckCircle2 size={16} color="var(--green)" />
                  <span style={{ fontSize: '0.86rem', color: 'var(--ink)', fontWeight: 600 }}>
                    {isAm ? 'በስልክ የቀጥታ ክትትል' : 'Encrypted Mobile Live View'}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <CheckCircle2 size={16} color="var(--green)" />
                  <span style={{ fontSize: '0.86rem', color: 'var(--ink)', fontWeight: 600 }}>
                    {isAm ? 'የ1–2 ዓመት የጽሁፍ ዋስትና' : '1–2 Year Written Warranty'}
                  </span>
                </div>
              </div>

              {/* Modal Action Buttons */}
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a
                  href={whatsappLink(
                    isAm
                      ? `ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ በ${activeProject.locationAm || activeProject.location} የሰራችሁትን "${activeProject.titleAm || activeProject.title}" ስራ አየሁ፤ ለኔ ቦታ ተመሳሳይ ስራ ማሰራት እፈልጋለሁ።`
                      : `Hello Ethio Smart Security, I saw your "${activeProject.title}" project in ${activeProject.location}. I would like to get an estimate for a similar turnkey installation.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-solid"
                  style={{ background: 'var(--wa)', color: '#fff', flex: 1, minWidth: 220, justifyContent: 'center' }}
                >
                  <MessageCircle size={18} />
                  {isAm ? 'ለኔ ቦታ ተመሳሳይ ስራ ይጠይቁ' : 'Inquire for Similar Site (WhatsApp)'}
                </a>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="btn btn-outline"
                  style={{ justifyContent: 'center' }}
                >
                  <PhoneCall size={18} />
                  {site.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. Before / After Comparison */}
      <BeforeAfterComparison />

      {/* 6. Contact / Help Block */}
      <section className="section alt">
        <div className="wrap">
          <HelpBlock location="installations_help" />
        </div>
      </section>
    </>
  );
}
