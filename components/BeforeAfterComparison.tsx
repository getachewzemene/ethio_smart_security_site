'use client';

import React from 'react';
import Link from 'next/link';
import {
  XCircle,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Wrench,
  ArrowRight,
  Zap,
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export default function BeforeAfterComparison() {
  const { isAm } = useLanguage();

  const comparisonData = {
    bad: {
      badge: isAm ? 'ያልተደራጀ የተለመደ አሰራር' : 'Informal Market Standard',
      title: isAm ? 'የተለመደው ተራ የገበያ ገጠማ' : 'Typical Informal Work',
      points: [
        {
          title: isAm ? 'የተንጠለጠሉ የተዘበራረቁ ገመዶች' : 'Exposed & Dangling Cables',
          desc: isAm
            ? 'ገመዶች በግድግዳ ላይ ያለምንም ከለላ ይንጠለጠላሉ፤ ለፀሐይ፣ ለዝናብ፣ ለአይጥና ለመቆረጥ የተጋለጡ ናቸው።'
            : 'Raw cables stapled loosely to walls, exposed to UV sun, heavy rain, rodents, and accidental tearing.',
        },
        {
          title: isAm ? 'በፕላስተር የተጠመጠሙ ማያያዣዎች' : 'Unsealed Electrical Tape Splices',
          desc: isAm
            ? 'የካሜራ ማገናኛዎች በተራ ፕላስተር ይጠመጠማሉ፤ በክረምት ዝናብ ውሃ ገብቶባቸው ካሜራውን ያበላሻሉ።'
            : 'Unsealed joints wrapped in basic plastic tape without waterproof boxes, leading to corroded connectors.',
        },
        {
          title: isAm ? 'ያገለገሉ ተራ ዴስክቶፕ ሃርድ ዲስኮች' : 'Used Desktop Hard Drives',
          desc: isAm
            ? 'ለኮምፒውተር የተሰሩ ተራ ሃርድ ዲስኮች ይገጠማሉ፤ 24/7 ቀረጻ ስለማይችሉ በጥቂት ወራት ውስጥ ይቃጠላሉ።'
            : 'Cheap recycled desktop drives that overheat and fail within months, losing critical footage when needed.',
        },
        {
          title: isAm ? 'የሚግልና ጥበቃ የሌለው መቅረጫ (NVR)' : 'Unprotected & Overheating Recorders',
          desc: isAm
            ? 'መቅረጫው አቧራ ባለበት ክፍት ቦታ ላይ ይቀመጣል፤ የመብራት መዋዠቅ ሲከሰት በቀላሉ ይቃጠላል።'
            : 'Recorders dumped on dusty open tables without surge suppressors, causing motherboard burnout during power spikes.',
        },
        {
          title: isAm ? 'ዋስትና እና ድጋፍ የሌለው' : 'No Written Warranty or After-Sales',
          desc: isAm
            ? 'እቃው ከተሸጠ በኋላ ስልካቸውን የማያነሱ እና ምንም ዓይነት ህጋዊ የጽሁፍ ዋስትና የማይሰጡ ሻጮች።'
            : 'Informal sellers who vanish after installation, providing no VAT receipts, trade licenses, or replacement support.',
        },
      ],
    },
    good: {
      badge: isAm ? 'የኢትዮ ስማርት ሴኩሪቲ ምህንድስና' : 'Ethio Smart Security Standard',
      title: isAm ? 'የእኛ ሙያዊ እና ደረጃውን የጠበቀ ገጠማ' : 'Our Engineering Standard',
      points: [
        {
          title: isAm ? '100% በኮንዱይት ቱቦ የተደበቀ ዝርጋታ' : '100% Concealed PVC Conduits',
          desc: isAm
            ? 'ሁሉም ገመዶች በጠንካራ የPVC ቱቦዎችና ትረንኪንግ ውስጥ ያልፋሉ፤ ውብ፣ የተጠበቀና አስተማማኝ ነው።'
            : 'Every cable is fully routed through heavy-duty exterior PVC pipes and clean architectural trunking.',
        },
        {
          title: isAm ? 'IP66/IP67 የውሃና አቧራ መከላከያ ሳጥኖች' : 'Weatherproof Sealed Junction Boxes',
          desc: isAm
            ? 'ሁሉም የካሜራ ማገናኛዎች በሲሊኮን በታሸጉ የውሃ መከላከያ ሳጥኖች ውስጥ ይጠበቃሉ፤ ዝናብ አይበግራቸውም።'
            : 'Every camera mount features silicone-sealed waterproof junction boxes, withstanding Addis Ababa rainstorms.',
        },
        {
          title: isAm ? 'ኦርጅናል 24/7 ሰርቪላንስ ሃርድ ዲስክ' : 'Genuine 24/7 Surveillance Drives',
          desc: isAm
            ? 'ለቀጣይነት ቀረጻ የተሰሩ Western Digital Purple / Seagate SkyHawk አዳዲስ ኦርጅናል ዲስኮች ብቻ።'
            : 'Brand new Western Digital Purple drives specifically engineered for continuous 24/7 high-write video surveillance.',
        },
        {
          title: isAm ? 'የኤሌክትሪክ ሰርጅ መከላከያ እና ካቢኔት' : 'Surge Protection & Ventilated Racks',
          desc: isAm
            ? 'መቅረጫዎች በካቢኔት ውስጥ ይቀመጣሉ፤ የመብራት መዋዠቅ መከላከያ (Surge Arrester) እና የUPS ባትሪ አላቸው።'
            : 'Equipment housed in secure ventilated cabinets with electrical surge arresters and centralized UPS power backup.',
        },
        {
          title: isAm ? 'የ1 – 2 ዓመት የጽሁፍ ዋስትና እና ድጋፍ' : '1 – 2 Years Written Warranty & Support',
          desc: isAm
            ? 'ህጋዊ የTIN/VAT ደረሰኝ፣ የተሟላ የዋስትና ሰነድ እና በ24 ሰዓት ውስጥ ምላሽ የሚሰጥ የቴክኒክ ቡድን።'
            : 'Formal company registration, VAT/TIN invoices, written replacement contracts, and responsive 24/7 technical assistance.',
        },
      ],
    },
  };

  return (
    <section className="section" id="workmanship-comparison">
      <div className="wrap">
        <div className="sec-head">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--green)', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            <ShieldCheck size={16} /> {isAm ? 'የስራ ጥራት እና ምህንድስና' : 'Workmanship & Quality Standards'}
          </div>
          <h2>{isAm ? 'የገጠማ ጥራት ልዩነት፡ የተለመደው ገበያ እና የኢትዮ ስማርት ሴኩሪቲ' : 'Why Workmanship Matters: Informal Work vs. Our Standard'}</h2>
          <p>
            {isAm
              ? 'የሲሲቲቪ ካሜራ ውጤታማነቱ የሚወሰነው ከጀርባው ባለው የገመድ ዝርጋታ፣ የውሃ መከላከያ እና የሃርድዌር ጥራት ነው። ልዩነቱን ይመልከቱ።'
              : 'A security system is only as reliable as its cable protection, weatherproofing, and power safety. See the critical difference in engineering standards.'}
          </p>
        </div>

        <div className="comp-wrapper">
          {/* Informal / Bad Standard */}
          <div className="comp-card bad">
            <div className="comp-header">
              <span className="comp-badge bad">
                <AlertTriangle size={14} /> {comparisonData.bad.badge}
              </span>
            </div>
            <h3 className="comp-title" style={{ color: '#991b1b' }}>{comparisonData.bad.title}</h3>
            <div className="comp-list">
              {comparisonData.bad.points.map((pt, idx) => (
                <div key={idx} className="comp-item bad">
                  <XCircle size={18} />
                  <div>
                    <strong style={{ display: 'block', color: '#991b1b', fontSize: '0.94rem' }}>{pt.title}</strong>
                    <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>{pt.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ethio Smart Security / Good Standard */}
          <div className="comp-card good">
            <div className="comp-header">
              <span className="comp-badge good">
                <ShieldCheck size={14} /> {comparisonData.good.badge}
              </span>
            </div>
            <h3 className="comp-title" style={{ color: '#065f46' }}>{comparisonData.good.title}</h3>
            <div className="comp-list">
              {comparisonData.good.points.map((pt, idx) => (
                <div key={idx} className="comp-item good">
                  <CheckCircle2 size={18} />
                  <div>
                    <strong style={{ display: 'block', color: '#065f46', fontSize: '0.94rem' }}>{pt.title}</strong>
                    <span style={{ fontSize: '0.85rem', color: '#374151' }}>{pt.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: '1px solid #b7ecd3', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/proforma" className="btn btn-sm btn-solid" style={{ background: 'var(--green)', color: '#fff', fontSize: '0.9rem', minHeight: 42 }}>
                {isAm ? 'ሙያዊ ፕሮፎርማ ይጠይቁ' : 'Request Professional Proforma'} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
