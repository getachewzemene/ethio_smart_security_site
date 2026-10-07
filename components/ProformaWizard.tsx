'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Building2,
  Factory,
  Home,
  Store,
  Hotel,
  HardHat,
  Camera,
  ShieldCheck,
  Server,
  Zap,
  BatteryCharging,
  Sun,
  FileText,
  ClipboardCheck,
  Wrench,
  CheckCircle2,
  Phone,
  Printer,
  ChevronRight,
  ChevronLeft,
  Fingerprint,
  Bell,
  MapPin,
  Lock,
} from 'lucide-react';
import { site, whatsappLink } from '@/lib/site';
import { useLanguage } from '@/lib/i18n';

export default function ProformaWizard() {
  const { isAm } = useLanguage();
  const [step, setStep] = useState(1);

  // Form State
  const [propertyType, setPropertyType] = useState('commercial');
  const [cameraCount, setCameraCount] = useState('8');
  const [storageDays, setStorageDays] = useState('30');
  const [powerBackup, setPowerBackup] = useState('ups');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'color_night',
    'mobile_view',
  ]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [serviceType, setServiceType] = useState('turnkey');

  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Bole, Addis Ababa');
  const [tinNumber, setTinNumber] = useState('');
  const [notes, setNotes] = useState('');

  // Generation timestamp and reference code
  const [refCode] = useState(() => {
    const num = Math.floor(1000 + Math.random() * 9000);
    return `ESS-PRO-${new Date().getFullYear()}-${num}`;
  });

  const propertyOptions = [
    {
      id: 'commercial',
      icon: Building2,
      title: isAm ? 'የንግድ ሕንፃ / ቢሮ' : 'Commercial Building / Office',
      desc: isAm ? 'ለኮርፖሬት ቢሮዎች፣ የገበያ ማዕከላትና ድርጅቶች' : 'Offices, commercial plazas & headquarters',
    },
    {
      id: 'factory',
      icon: Factory,
      title: isAm ? 'ፋብሪካ / መጋዘን' : 'Factory / Warehouse',
      desc: isAm ? 'ለኢንዱስትሪ ፓርኮች፣ ማከማቻዎችና ሰፊ ግቢዎች' : 'Industrial zones, storage compounds & logistics',
    },
    {
      id: 'villa',
      icon: Home,
      title: isAm ? 'መኖሪያ ቪላ / ግቢ' : 'Residential Villa / Compound',
      desc: isAm ? 'ለግል መኖሪያ ቪላዎችና የጋራ መኖሪያ ግቢዎች' : 'Private villas, embassies & residential compounds',
    },
    {
      id: 'retail',
      icon: Store,
      title: isAm ? 'ፋርማሲ / ሱፐርማርኬት / ሱቅ' : 'Pharmacy / Retail / Supermarket',
      desc: isAm ? 'የካውንተር፣ የካሽ መመዝገቢያና የሸቀጦች ቁጥጥር' : 'Counters, tills, shelves & customer entrances',
    },
    {
      id: 'hospitality',
      icon: Hotel,
      title: isAm ? 'ሆቴል / ጤና ተቋም / ት/ቤት' : 'Hotel / Healthcare / School',
      desc: isAm ? 'ኮሪደሮች፣ የመግቢያ በሮችና የመኪና ማቆሚያ' : 'Guest corridors, lobbies, parking & reception',
    },
    {
      id: 'construction',
      icon: HardHat,
      title: isAm ? 'ሪል እስቴት / ሳይት' : 'Real Estate / Construction',
      desc: isAm ? 'የግንባታ እቃዎች፣ የመግቢያ በርና የቁሳቁስ ጥበቃ' : 'Construction material security & site monitoring',
    },
  ];

  const cameraOptions = [
    { id: '4', count: '4 Cameras', label: isAm ? '4 ካሜራዎች' : '4 Cameras', desc: isAm ? 'ለአነስተኛ ሱቆችና ቢሮዎች' : 'Small retail & basic homes' },
    { id: '8', count: '8 Cameras', label: isAm ? '8 ካሜራዎች' : '8 Cameras', desc: isAm ? 'ለመካከለኛ ቢሮዎችና ቪላዎች' : 'Medium offices & villas' },
    { id: '16', count: '16 Cameras', label: isAm ? '16 ካሜራዎች' : '16 Cameras', desc: isAm ? 'ሙሉ ሕንፃ፣ መጋዘን ወይም ፋብሪካ' : 'Multi-floor buildings & warehouses' },
    { id: '32+', count: '32+ Cameras', label: isAm ? '32+ ካሜራዎች (Enterprise)' : '32+ Cameras (Enterprise)', desc: isAm ? 'ለሰፊ ግቢዎችና ኢንዱስትሪዎች' : 'Large industrial & corporate compounds' },
    { id: 'assessment', count: 'Custom', label: isAm ? 'የቦታው ጥናት ያስፈልጋል' : 'Need On-Site Engineering Survey', desc: isAm ? 'ባለሙያ መጥቶ ቦታውን አይቶ እንዲወስን' : 'Engineer to survey blind spots on-site' },
  ];

  const storageOptions = [
    { id: '15', label: isAm ? '15 ቀናት' : '15 Days', desc: isAm ? 'መሰረታዊ ማከማቻ' : 'Basic archive cycle' },
    { id: '30', label: isAm ? '30 ቀናት (የተመከረ)' : '30 Days (Recommended)', desc: isAm ? 'ለአብዛኛዎቹ ድርጅቶች ደረጃውን የጠበቀ' : 'Standard for business compliance' },
    { id: '60', label: isAm ? '60 ቀናት (ከፍተኛ ደህንነት)' : '60 Days (High Security)', desc: isAm ? 'ለፋይናንስና ውድ ንብረት ተቋማት' : 'Recommended for finance & forex' },
    { id: '90+', label: isAm ? '90+ ቀናት (Enterprise)' : '90+ Days (Enterprise)', desc: isAm ? 'ለኢንዱስትሪና ረጅም ማህደር' : 'Long-term corporate auditing' },
  ];

  const powerOptions = [
    { id: 'mains', icon: Zap, label: isAm ? 'የመብራት ኃይል + ሰርጅ መከላከያ' : 'Grid Power + Surge Protection', desc: isAm ? 'ቀጥታ ከመብራት ኃይል የሚሰራ' : 'Direct electrical feed with surge arrester' },
    { id: 'ups', icon: BatteryCharging, label: isAm ? 'ሴንትራል UPS ባትሪ ባክአፕ' : 'Centralized UPS Battery Backup', desc: isAm ? 'መብራት ሲጠፋ ከ2 እስከ 4 ሰዓት ይሰራል' : 'Continuous recording during power outages' },
    { id: 'solar', icon: Sun, label: isAm ? 'የሶላር ኃይል ሲስተም (Solar CCTV)' : 'Solar System (Off-Grid CCTV)', desc: isAm ? 'ከመብራት ኃይል ነፃ የሆነ አስተማማኝ ሶላር' : '100% autonomous off-grid solar setup' },
  ];

  const serviceOptions = [
    {
      id: 'turnkey',
      icon: Wrench,
      title: isAm ? 'የእቃ አቅርቦት እና ሙያዊ ገጠማ' : 'Complete Supply & Turnkey Installation',
      desc: isAm ? 'ከነ እቃዎቹ እና ከነ ገመድ ዝርጋታው ሙሉ ስራ' : 'Hardware delivery, concealed piping, setup & commissioning',
    },
    {
      id: 'proforma_only',
      icon: FileText,
      title: isAm ? 'ህጋዊ የፕሮፎርማ ደረሰኝ (Proforma Invoice)' : 'Official Proforma Invoice (VAT / TIN)',
      desc: isAm ? 'ለድርጅት ግዢ ሂደት ወይም ለጨረታ ማቅረቢያ' : 'Formal itemized quotation for corporate procurement & board approval',
    },
    {
      id: 'survey',
      icon: ClipboardCheck,
      title: isAm ? 'የነጻ ቦታው ቅኝት እና ጥናት (On-Site Survey)' : 'Free On-Site Security Assessment',
      desc: isAm ? 'የቴክኒክ ባለሙያ መጥቶ ቦታውን እና የገመድ መስመሩን እንዲያጠና' : 'Senior technician inspects premises, blind spots & cable routes',
    },
  ];

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Build structured formal WhatsApp message
  const generateWhatsAppMessage = () => {
    const selectedProp = propertyOptions.find((p) => p.id === propertyType)?.title || propertyType;
    const selectedServ = serviceOptions.find((s) => s.id === serviceType)?.title || serviceType;
    const selectedCam = cameraOptions.find((c) => c.id === cameraCount)?.label || `${cameraCount} Cameras`;

    return `*OFFICIAL SECURITY QUOTATION / PROFORMA REQUEST*
Ref: ${refCode}
------------------------------------
🏢 Organization: ${companyName || 'Private Client'}
👤 Contact: ${contactPerson || 'Not specified'}
📞 Phone: ${phone || site.phoneDisplay}
📍 Location: ${location}
${tinNumber ? `🧾 TIN Number: ${tinNumber}\n` : ''}
📋 Requirements Summary:
• Property: ${selectedProp}
• Cameras: ${selectedCam}
• Storage Target: ${storageDays} Days
• Power Infrastructure: ${powerBackup.toUpperCase()}
• Service Mode: ${selectedServ}
${selectedAddons.length > 0 ? `• Integrated Add-ons: ${selectedAddons.join(', ')}\n` : ''}
${notes ? `📝 Special Notes: ${notes}\n` : ''}
------------------------------------
Please send the formal itemized quotation / schedule the on-site engineering assessment.`;
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="proforma-container" style={{ width: '100%', maxWidth: 960, margin: '0 auto' }}>
      {/* Stepper Navigation */}
      <nav aria-label="Quote request steps" className="stepper">
        {[
          { num: 1, label: isAm ? 'የቦታው ዓይነት' : 'Facility Type' },
          { num: 2, label: isAm ? 'የሲስተም መጠን' : 'System Scope' },
          { num: 3, label: isAm ? 'የአገልግሎት ዓይነት' : 'Procurement' },
          { num: 4, label: isAm ? 'የድርጅቱ ዝርዝር' : 'Proforma Slip' },
        ].map((s) => (
          <button
            key={s.num}
            type="button"
            className={`step-item ${step === s.num ? 'active' : ''} ${step > s.num ? 'completed' : ''}`}
            onClick={() => setStep(s.num)}
            aria-current={step === s.num ? 'step' : undefined}
          >
            <span className="step-bubble">{step > s.num ? '✓' : s.num}</span>
            <span className="step-text">{s.label}</span>
          </button>
        ))}
      </nav>

      {/* STEP 1: Facility Type */}
      {step === 1 && (
        <div className="wizard-step">
          <div className="sec-head" style={{ marginBottom: 20 }}>
            <h2>{isAm ? '1. የቦታውን ወይም የሕንፃውን ዓይነት ይምረጡ' : '1. Select Facility & Property Type'}</h2>
            <p>{isAm ? 'ጥበቃ የሚደረግለትን ቦታ ይምረጡ፤ ለእያንዳንዱ ዓይነት ተስማሚ የካሜራ እና የገመድ መስመር ዝግጅት አለን።' : 'Choose the environment to protect. We adapt camera lenses, housings, and wiring protocols accordingly.'}</p>
          </div>

          <div className="wizard-grid">
            {propertyOptions.map((opt) => {
              const IconComp = opt.icon;
              const isSelected = propertyType === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  className={`wizard-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => setPropertyType(opt.id)}
                >
                  <div className="wizard-card-top">
                    <div className="wizard-card-icon">
                      <IconComp size={20} />
                    </div>
                    <span className="wizard-check">✓</span>
                  </div>
                  <strong className="wizard-card-title">{opt.title}</strong>
                  <span className="wizard-card-desc">{opt.desc}</span>
                </button>
              );
            })}
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 24 }}>
            <button
              type="button"
              className="btn btn-solid btn-call"
              onClick={() => setStep(2)}
              style={{ minWidth: 160 }}
            >
              {isAm ? 'ቀጣይ (የሲስተም መጠን)' : 'Next (System Scope)'} <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: System Scope */}
      {step === 2 && (
        <div className="wizard-step">
          <div className="sec-head" style={{ marginBottom: 20 }}>
            <h2>{isAm ? '2. የካሜራ ብዛት እና የቴክኒክ መስፈርቶች' : '2. Security Scope & Camera Estimation'}</h2>
            <p>{isAm ? 'የሚገመቱትን የካሜራ ብዛት፣ የቪዲዮ ማከማቻ ጊዜ እና የኃይል አቅርቦት ይምረጡ።' : 'Specify camera volume, recording duration, and power resilience for your premises.'}</p>
          </div>

          <h3 style={{ fontSize: '1.05rem', marginBottom: 12 }}>{isAm ? 'የካሜራዎች ብዛት' : 'Estimated Camera Count'}</h3>
          <div className="wizard-grid" style={{ marginBottom: 28 }}>
            {cameraOptions.map((cam) => {
              const isSelected = cameraCount === cam.id;
              return (
                <button
                  key={cam.id}
                  type="button"
                  className={`wizard-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => setCameraCount(cam.id)}
                >
                  <div className="wizard-card-top">
                    <span className="wizard-card-title" style={{ fontSize: '1.1rem' }}>{cam.label}</span>
                    <span className="wizard-check">✓</span>
                  </div>
                  <span className="wizard-card-desc">{cam.desc}</span>
                </button>
              );
            })}
          </div>

          <h3 style={{ fontSize: '1.05rem', marginBottom: 12 }}>{isAm ? 'የቪዲዮ ማከማቻ ጊዜ (Storage Retention)' : 'Video Storage Retention Target'}</h3>
          <div className="wizard-grid" style={{ marginBottom: 28 }}>
            {storageOptions.map((st) => {
              const isSelected = storageDays === st.id;
              return (
                <button
                  key={st.id}
                  type="button"
                  className={`wizard-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => setStorageDays(st.id)}
                >
                  <div className="wizard-card-top">
                    <span className="wizard-card-title">{st.label}</span>
                    <span className="wizard-check">✓</span>
                  </div>
                  <span className="wizard-card-desc">{st.desc}</span>
                </button>
              );
            })}
          </div>

          <h3 style={{ fontSize: '1.05rem', marginBottom: 12 }}>{isAm ? 'የኤሌክትሪክ ኃይል እና ባትሪ ድጋፍ' : 'Power Backup & Resilience'}</h3>
          <div className="wizard-grid" style={{ marginBottom: 28 }}>
            {powerOptions.map((pwr) => {
              const IconComp = pwr.icon;
              const isSelected = powerBackup === pwr.id;
              return (
                <button
                  key={pwr.id}
                  type="button"
                  className={`wizard-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => setPowerBackup(pwr.id)}
                >
                  <div className="wizard-card-top">
                    <div className="wizard-card-icon">
                      <IconComp size={18} />
                    </div>
                    <span className="wizard-check">✓</span>
                  </div>
                  <strong className="wizard-card-title">{pwr.label}</strong>
                  <span className="wizard-card-desc">{pwr.desc}</span>
                </button>
              );
            })}
          </div>

          <h3 style={{ fontSize: '1.05rem', marginBottom: 12 }}>{isAm ? 'ተጨማሪ የኮርፖሬት ደህንነት ሲስተሞች (አማራጭ)' : 'Integrated Enterprise Systems (Optional Add-ons)'}</h3>
          <div className="wizard-grid" style={{ marginBottom: 24 }}>
            {[
              { id: 'biometric', icon: Fingerprint, title: isAm ? 'የጣት አሻራ እና ፊት መለያ' : 'Access Control & Attendance', desc: isAm ? 'የሰራተኞች መግቢያና መውጫ መቆጣጠሪያ' : 'Biometric fingerprint & facial terminals' },
              { id: 'intercom', icon: Lock, title: isAm ? 'ስማርት ቪዲዮ ኢንተርኮም' : 'Video Intercom & Gate Barrier', desc: isAm ? 'ከስልክ በር መክፈቻና ማናገሪያ' : 'Remote door opening & visitor screening' },
              { id: 'smoke_alarm', icon: Bell, title: isAm ? 'የጢስ እና እሳት አደጋ ማሳወቂያ' : 'Smoke & Fire Alarm Integration', desc: isAm ? 'አደጋ ሲከሰት በቅጽበት የሚያስጠነቅቅ' : 'Early smoke detection sensors & sirens' },
            ].map((addon) => {
              const IconComp = addon.icon;
              const isSelected = selectedAddons.includes(addon.id);
              return (
                <button
                  key={addon.id}
                  type="button"
                  className={`wizard-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => toggleAddon(addon.id)}
                >
                  <div className="wizard-card-top">
                    <div className="wizard-card-icon">
                      <IconComp size={18} />
                    </div>
                    <span className="wizard-check">✓</span>
                  </div>
                  <strong className="wizard-card-title">{addon.title}</strong>
                  <span className="wizard-card-desc">{addon.desc}</span>
                </button>
              );
            })}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => setStep(1)}
            >
              <ChevronLeft size={18} /> {isAm ? 'ተመለስ' : 'Back'}
            </button>
            <button
              type="button"
              className="btn btn-solid btn-call"
              onClick={() => setStep(3)}
              style={{ minWidth: 160 }}
            >
              {isAm ? 'ቀጣይ (የአገልግሎት ዓይነት)' : 'Next (Procurement)'} <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Procurement & Service Mode */}
      {step === 3 && (
        <div className="wizard-step">
          <div className="sec-head" style={{ marginBottom: 20 }}>
            <h2>{isAm ? '3. የአገልግሎት እና የግዢ ዓይነት ይምረጡ' : '3. Select Procurement & Service Mode'}</h2>
            <p>{isAm ? 'የሚፈልጉትን አሰራር ይምረጡ፡ ሙሉ ገጠማ፣ ህጋዊ የፕሮፎርማ ደረሰኝ ወይም የባለሙያ የቦታው ቅኝት።' : 'Select how your organization prefers to proceed: turnkey deployment, VAT proforma, or site survey.'}</p>
          </div>

          <div className="wizard-grid" style={{ marginBottom: 28 }}>
            {serviceOptions.map((serv) => {
              const IconComp = serv.icon;
              const isSelected = serviceType === optIdOrSelf(serv.id);
              return (
                <button
                  key={serv.id}
                  type="button"
                  className={`wizard-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => setServiceType(serv.id)}
                >
                  <div className="wizard-card-top">
                    <div className="wizard-card-icon">
                      <IconComp size={20} />
                    </div>
                    <span className="wizard-check">✓</span>
                  </div>
                  <strong className="wizard-card-title">{serv.title}</strong>
                  <span className="wizard-card-desc">{serv.desc}</span>
                </button>
              );
            })}
          </div>

          <div className="assessment-callout">
            <div>
              <h3>{isAm ? 'የነጻ ቦታው ቅኝት እና ጥናት (On-Site Engineering Assessment)' : 'Free On-Site Security Assessment Included'}</h3>
              <p style={{ marginTop: 6 }}>
                {isAm
                  ? 'የኢትዮ ስማርት ሴኩሪቲ ሲኒየር ቴክኒሻን ወደ ቦታዎ መጥቶ የካሜራ መመልከቻ አቅጣጫዎችን፣ የገመድ ማለፊያ መስመሮችን እና የብርሃን ሁኔታን ያጠናል፤ በ24 ሰዓት ውስጥ የተሟላ የፕሮፎርማ ሰነድ ያቀርባል።'
                  : 'Our senior technicians visit your Addis Ababa premises to analyze blind spots, concealed conduit routes, and power feeds, delivering an accurate engineering layout within 24 hours.'}
              </p>
            </div>
            <div className="assessment-grid">
              <div className="assessment-item">
                <CheckCircle2 size={18} />
                <span>{isAm ? 'የእይታ ክልልና የዓይነ-ስውር ቦታዎች ጥናት' : 'Blind spot & angle optimization'}</span>
              </div>
              <div className="assessment-item">
                <CheckCircle2 size={18} />
                <span>{isAm ? 'የገመድና የኮንዱይት መስመር ፕላን' : 'Concealed PVC conduit routing'}</span>
              </div>
              <div className="assessment-item">
                <CheckCircle2 size={18} />
                <span>{isAm ? 'ህጋዊ የTIN እና VAT ፕሮፎርማ' : 'Official VAT & TIN documentation'}</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => setStep(2)}
            >
              <ChevronLeft size={18} /> {isAm ? 'ተመለስ' : 'Back'}
            </button>
            <button
              type="button"
              className="btn btn-solid btn-call"
              onClick={() => setStep(4)}
              style={{ minWidth: 160 }}
            >
              {isAm ? 'ቀጣይ (መረጃና ማጠቃለያ)' : 'Next (Generate Slip)'} <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: Organization Info & Proforma Slip */}
      {step === 4 && (
        <div className="wizard-step">
          <div className="sec-head" style={{ marginBottom: 20 }}>
            <h2>{isAm ? '4. የድርጅቱ መረጃ እና የፕሮፎርማ ማጠቃለያ' : '4. Organization Details & Quotation Summary'}</h2>
            <p>{isAm ? 'እባክዎ የተወካዩን ስልክና ስም ያስገቡ፤ ማጠቃለያውን በዋትስአፕ በቀጥታ መላክ ወይም ማተም ይችላሉ።' : 'Enter your contact points to finalize the request slip, print it, or dispatch it directly to our engineering desk.'}</p>
          </div>

          {/* Contact Input Form */}
          <div className="composer" style={{ marginBottom: 28 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
              <div>
                <label htmlFor="company-name" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: 6 }}>
                  {isAm ? 'የድርጅቱ / የሕንፃው ስም' : 'Organization / Company Name'}
                </label>
                <input
                  id="company-name"
                  type="text"
                  placeholder={isAm ? 'ምሳሌ፡ አባይ ትሬዲንግ ኃ/የተ/የግ/ማ' : 'e.g. Abay Logistics PLC or Private Villa'}
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '2px solid var(--line)', font: 'inherit' }}
                />
              </div>

              <div>
                <label htmlFor="contact-person" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: 6 }}>
                  {isAm ? 'የተወካይ / የባለቤቱ ስም' : 'Contact Person / Representative'}
                </label>
                <input
                  id="contact-person"
                  type="text"
                  placeholder={isAm ? 'ምሳሌ፡ አቶ ዳዊት ተስፋዬ' : 'e.g. Ato Dawit Tesfaye'}
                  value={contactPerson}
                  onChange={(e) => setContactPerson(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '2px solid var(--line)', font: 'inherit' }}
                />
              </div>

              <div>
                <label htmlFor="phone-number" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: 6 }}>
                  {isAm ? 'ስልክ ቁጥር *' : 'Phone Number *'}
                </label>
                <input
                  id="phone-number"
                  type="tel"
                  placeholder="0911-XXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '2px solid var(--line)', font: 'inherit' }}
                />
              </div>

              <div>
                <label htmlFor="site-location" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: 6 }}>
                  {isAm ? 'ቦታ / አድራሻ (ክፍለ ከተማ)' : 'Project Location / Sub-city'}
                </label>
                <input
                  id="site-location"
                  type="text"
                  placeholder={isAm ? 'ምሳሌ፡ ቦሌ፣ መገናኛ፣ ካዛንቺስ' : 'e.g. Bole, Kazanchis, Megenagna, Dukem'}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '2px solid var(--line)', font: 'inherit' }}
                />
              </div>

              <div>
                <label htmlFor="tin-number" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: 6 }}>
                  {isAm ? 'የTIN ቁጥር (አማራጭ - ለVAT ፕሮፎርማ)' : 'TIN Number (Optional - for VAT invoices)'}
                </label>
                <input
                  id="tin-number"
                  type="text"
                  placeholder="0012345678"
                  value={tinNumber}
                  onChange={(e) => setTinNumber(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '2px solid var(--line)', font: 'inherit' }}
                />
              </div>

              <div>
                <label htmlFor="special-notes" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: 6 }}>
                  {isAm ? 'ተጨማሪ ማስታወሻ ወይም ጥያቄ' : 'Additional Notes / Scope Details'}
                </label>
                <input
                  id="special-notes"
                  type="text"
                  placeholder={isAm ? 'ምሳሌ፡ 2 ዙሪያ መዞሪያ ካሜራ ያስፈልጋል' : 'e.g. 2 PTZ cameras needed for gate'}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '2px solid var(--line)', font: 'inherit' }}
                />
              </div>
            </div>
          </div>

          {/* Generated Official Proforma Summary Slip */}
          <div className="proforma-slip" id="proforma-document">
            <div className="slip-header">
              <div>
                <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--green)', fontWeight: 800 }}>
                  {isAm ? 'ኢትዮ ስማርት ሴኩሪቲ እና ሲሲቲቪ · ይፋዊ ፕሮፎርማ' : 'ETHIO SMART SECURITY & CCTV · OFFICIAL PROFORMA'}
                </span>
                <h3 style={{ fontSize: '1.4rem', marginTop: 4 }}>
                  {isAm ? 'የሲሲቲቪ እና ደህንነት መፍትሔ ዝርዝር ጥያቄ' : 'Security Engineering Quotation Request'}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--muted)', marginTop: 4 }}>
                  {site.address} · {site.phoneDisplay}
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ display: 'inline-block', background: 'var(--ink)', color: '#fff', padding: '4px 10px', borderRadius: 6, fontWeight: 700, fontSize: '0.84rem' }}>
                  {refCode}
                </span>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: 4 }}>
                  {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                </p>
              </div>
            </div>

            <div className="slip-meta-grid">
              <div className="slip-meta-item">
                <small>{isAm ? 'የተገልጋይ / ድርጅት ስም' : 'Client / Organization'}</small>
                <b>{companyName || (isAm ? 'የግል ደንበኛ' : 'Private Client')}</b>
              </div>
              <div className="slip-meta-item">
                <small>{isAm ? 'የተወካይ ስም' : 'Representative'}</small>
                <b>{contactPerson || (isAm ? 'ያልተገለጸ' : 'To be confirmed')}</b>
              </div>
              <div className="slip-meta-item">
                <small>{isAm ? 'አድራሻ / ቦታ' : 'Location'}</small>
                <b>{location}</b>
              </div>
              <div className="slip-meta-item">
                <small>{isAm ? 'የስራው ዓይነት' : 'Scope / Category'}</small>
                <b>{propertyOptions.find((p) => p.id === propertyType)?.title}</b>
              </div>
            </div>

            <table className="spec-table" aria-label="System Specifications Summary">
              <thead>
                <tr>
                  <th>{isAm ? 'የንጥል ዝርዝር (System Item)' : 'System Component / Specification'}</th>
                  <th style={{ textAlign: 'center' }}>{isAm ? 'የተመረጠ ዝርዝር' : 'Selected Scope'}</th>
                  <th>{isAm ? 'የዋስትና ሁኔታ' : 'Warranty / Standard'}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>{isAm ? 'የሲሲቲቪ ካሜራዎች መጠን' : 'CCTV Camera Allocation'}</strong>
                    <div style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
                      {isAm ? 'ባለከፍተኛ ጥራት የቀንና የሌሊት እይታ' : 'Day/Night HD Cameras with night vision'}
                    </div>
                  </td>
                  <td style={{ textAlign: 'center', fontWeight: 700 }}>
                    {cameraOptions.find((c) => c.id === cameraCount)?.label}
                  </td>
                  <td>{isAm ? '1 – 2 ዓመት ጋራንቲ' : '1 – 2 Years Warranty'}</td>
                </tr>
                <tr>
                  <td>
                    <strong>{isAm ? 'የቪዲዮ ማከማቻ ዲስክ' : 'Dedicated Surveillance Storage'}</strong>
                    <div style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
                      {isAm ? '24/7 የማያቋርጥ ቀረጻ (Purple HDD)' : '24/7 continuous surveillance grade storage'}
                    </div>
                  </td>
                  <td style={{ textAlign: 'center', fontWeight: 700 }}>
                    {storageDays} {isAm ? 'ቀናት' : 'Days'}
                  </td>
                  <td>{isAm ? 'ኦርጅናል ሃርድ ዲስክ' : 'Genuine Hardware'}</td>
                </tr>
                <tr>
                  <td>
                    <strong>{isAm ? 'የኤሌክትሪክ ኃይል ስርዓት' : 'Power Infrastructure'}</strong>
                    <div style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
                      {powerOptions.find((p) => p.id === powerBackup)?.label}
                    </div>
                  </td>
                  <td style={{ textAlign: 'center', fontWeight: 700 }}>
                    {powerBackup.toUpperCase()}
                  </td>
                  <td>{isAm ? 'የቮልቴጅ መከላከያ' : 'Surge Protected'}</td>
                </tr>
                <tr>
                  <td>
                    <strong>{isAm ? 'የተመረጠ የአገልግሎት ሁኔታ' : 'Service & Procurement Type'}</strong>
                    <div style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
                      {serviceOptions.find((s) => s.id === serviceType)?.title}
                    </div>
                  </td>
                  <td style={{ textAlign: 'center', fontWeight: 700 }}>
                    {serviceType === 'survey' ? (isAm ? 'ነጻ ቅኝት' : 'Free Assessment') : (isAm ? 'ይፋዊ ግዢ' : 'Official')}
                  </td>
                  <td>{isAm ? 'በቴክኒሻን የሚገጠም' : 'Certified Engineers'}</td>
                </tr>
                {selectedAddons.length > 0 && (
                  <tr>
                    <td>
                      <strong>{isAm ? 'ተጨማሪ የተቀናጁ ሲስተሞች' : 'Integrated Add-ons'}</strong>
                      <div style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
                        {selectedAddons.join(', ')}
                      </div>
                    </td>
                    <td style={{ textAlign: 'center', fontWeight: 700 }}>
                      {selectedAddons.length} {isAm ? 'ሲስተሞች' : 'Modules'}
                    </td>
                    <td>{isAm ? 'የተሟላ ውህደት' : 'Integrated'}</td>
                  </tr>
                )}
              </tbody>
            </table>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, paddingTop: 14, borderTop: '1px solid var(--line)' }}>
              <div>
                <small style={{ color: 'var(--muted)', display: 'block' }}>
                  {site.tinText}
                </small>
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={handlePrint}
                  style={{ minHeight: 44, padding: '0 16px', fontSize: '0.9rem' }}
                >
                  <Printer size={16} /> {isAm ? 'ሰነዱን አትም / Save' : 'Print / Save PDF'}
                </button>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <a
                href={whatsappLink(generateWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg btn-whatsapp btn-solid"
                style={{ flex: '1 1 240px' }}
              >
                {isAm ? 'ጥያቄውን በዋትስአፕ ላክ (ይፋዊ መልዕክት)' : 'Dispatch Official Proforma via WhatsApp'}
              </a>

              <a
                href={`tel:${site.phoneTel}`}
                className="btn btn-lg btn-call btn-solid"
                style={{ flex: '1 1 200px' }}
              >
                <Phone size={18} /> {isAm ? 'ወደ ኢንጂነሪንግ ክፍል ይደውሉ' : `Call Engineering: ${site.phoneDisplay}`}
              </a>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 10 }}>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setStep(3)}
              >
                <ChevronLeft size={18} /> {isAm ? 'ዝርዝር አስተካክል' : 'Modify Specifications'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function optIdOrSelf(id: string) {
  return id;
}
