'use client';

import { SolutionList, EnterpriseSolutionsGrid, HelpBlock } from '@/components/Sections';
import CtaRow from '@/components/CtaRow';
import { useLanguage } from '@/lib/i18n';

export default function SolutionsPageContent() {
  const { t, isAm } = useLanguage();

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1>{isAm ? 'የተሟሉ የደህንነት እና የሲሲቲቪ መፍትሔዎች' : 'Integrated Security & CCTV Solutions'}</h1>
          <p className="lead">
            {isAm
              ? 'ከሲሲቲቪ ካሜራዎች ጀምሮ እስከ የጣት አሻራ (Access Control)፣ ስማርት ኢንተርኮም፣ የእሳት አደጋ ማስጠንቀቂያ እና ሰርቨር ሩም ድረስ የተሟሉ የደህንነት መፍትሔዎች።'
              : 'Complete physical security engineering: high-definition CCTV, biometric access control, smart intercoms, fire detection, and centralized server rooms in Addis Ababa.'}
          </p>
          <div className="corp-badge-row" style={{ marginBottom: 16 }}>
            <span className="corp-badge">CCTV Surveillance</span>
            <span className="corp-badge">Access Control</span>
            <span className="corp-badge">Smart Intercoms</span>
            <span className="corp-badge">Fire & Smoke Alarm</span>
            <span className="corp-badge">Server Room Video Walls</span>
          </div>
          <CtaRow location="solutions_hero" />
        </div>
      </section>

      {/* Enterprise Security Systems Grid */}
      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <h2>{isAm ? 'የተቀናጁ የኮርፖሬት ደህንነት ሲስተሞች' : 'Integrated Enterprise Security Systems'}</h2>
            <p>
              {isAm
                ? 'ከተራ ካሜራዎች ባሻገር፡ የጣት አሻራ እና ፊት መለያ፣ ስማርት ቪዲዮ ኢንተርኮም፣ የእሳት አደጋ እና የሰርቨር ሩም ቪዲዮ ወል ሲስተሞች።'
                : 'Beyond standalone cameras: complete biometric access control, smart video intercoms, certified fire alarms, and central server room monitoring.'}
            </p>
          </div>
          <EnterpriseSolutionsGrid />
        </div>
      </section>

      {/* Complete Solutions List */}
      <section className="section alt">
        <div className="wrap">
          <div className="sec-head">
            <h2>{isAm ? 'ሁሉንም የደህንነት መፍትሔዎች ይመልከቱ' : 'Explore All Security Solutions'}</h2>
            <p>
              {isAm
                ? 'እንደ ፍላጎትዎና እንደ ችግርዎ አይነት የተዘጋጁ የካሜራ እና የደህንነት አማራጮች።'
                : 'Targeted camera and infrastructure options categorized by scenario.'}
            </p>
          </div>
          <SolutionList />
        </div>
      </section>

      <section className="section">
        <div className="wrap"><HelpBlock location="solutions_help" /></div>
      </section>
    </>
  );
}
