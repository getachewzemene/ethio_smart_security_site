export type Language = 'en' | 'am';

export interface SolutionTranslation {
  title: string;
  short: string;
  cta: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  problem: string;
  goodFor: string[];
  features: string[];
  notes: string[];
  waMessage: string;
}

export interface UseCaseTranslation {
  title: string;
  line: string;
  seoTitle: string;
  seoDescription: string;
  headline: string;
  body: string;
  watch: string[];
  waMessage: string;
}

export interface ServiceTranslation {
  title: string;
  text: string;
  detail: string;
  waMessage: string;
}

export interface DemoTranslation {
  title: string;
  text: string;
}

export interface FaqTranslation {
  q: string;
  a: string;
}

export const translations = {
  en: {
    site: {
      name: 'Ethio Smart Security & CCTV',
      shortName: 'Ethio Smart Security',
      phoneDisplay: '0945-282035',
      address: 'Megenagna, near Lem Hotel / Fenasi Building, Addis Ababa, Ethiopia',
      hours: 'Call or WhatsApp any time; we reply as soon as we can.',
      warrantyText:
        'Yes. Our cameras and systems come with warranty. The period depends on the camera model and is confirmed with you in writing on the quotation before installation.',
      socialProof:
        'Our CCTV demonstrations are watched by 46K+ followers on TikTok and 7K+ on Facebook.',
      skipToContent: 'Skip to content',
      copyright: 'Ethio Smart Security & CCTV. Addis Ababa, Ethiopia.',
    },
    nav: {
      home: 'Home',
      solutions: 'Solutions',
      services: 'Services',
      installations: 'Installations',
      proforma: 'Request Proforma',
      about: 'About',
      contact: 'Contact',
    },
    actions: {
      callNow: 'Call Now',
      call: 'Call',
      whatsappUs: 'WhatsApp Us',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      talkToUs: 'Talk to Us Now',
      requestProforma: 'Request Official Proforma',
      downloadProfile: 'Company Profile (PDF)',
      bookAssessment: 'Book Free On-Site Survey',
      getRecommendation: 'Get a recommendation',
      learnMore: 'Learn more',
      seeRightSetup: 'See the right setup',
      askExamples: 'Ask for examples',
      sendWhatsApp: 'Send on WhatsApp',
      exploreSolutions: 'Explore security solutions',
      seeAllServices: 'See all services',
      viewInstallProjects: 'View Installation Projects',
      openInMaps: 'Open in Google Maps',
      askAboutCamera: 'Ask About This Camera',
      askSimilarWork: 'Ask about similar work',
      watchOnTikTok: 'Watch more on TikTok',
      watchOnFacebook: 'Watch more on Facebook',
      seeFacebookPage: 'See our Facebook page',
      switchLang: 'Switch to Amharic',
    },
    hero: {
      title: 'Professional CCTV & security solutions in Addis Ababa',
      lead: 'Protect your home, shop, office or business with professional CCTV installation and remote monitoring.',
      phoneSub: 'Call or WhatsApp',
      linkText: 'Explore security solutions',
    },
    feedMock: {
      camName: 'CAM 02 · Main gate',
      rec: 'REC',
      personDet: 'Person 96%',
      nightVision: 'Night vision',
      livePhone: 'Live on your phone',
    },
    trust: [
      'Professional installation',
      'Remote phone monitoring',
      'Warranty',
      'After-sales support',
      'Addis Ababa service',
    ],
    sections: {
      protectTitle: 'What are you protecting?',
      protectSub: 'Choose your situation and see the setup we recommend for it.',
      solutionsTitle: 'Security solutions for your problem',
      solutionsSub:
        'Not a catalogue of models. Pick the problem you have, and we recommend the camera that solves it.',
      servicesTitle: 'Our services',
      servicesSub:
        'Everything from deciding what you need to installing it and helping you afterwards.',
      installationsTitle: 'Real installations',
      installationsSub:
        'We install the systems we sell. Here is the kind of work our team does across Addis Ababa.',
      demosTitle: 'See our latest CCTV demonstrations',
      demosSub:
        'Seen one of our videos on TikTok or Facebook? Here is how each feature works.',
      whyTitle: 'Why Ethio Smart Security?',
      howTitle: 'How it works',
      howSub: 'Five simple steps. No forms, no accounts.',
      popularTitle: 'Popular choices',
      popularSub: "Our most requested cameras. Prices change, so ask us for today's price.",
      reviewsTitle: 'Customer reviews',
      reviewsNote:
        'Ask for real references. We can show you installations like yours and put you in touch with customers on request. You can also see customer feedback on our Facebook page.',
      faqTitle: 'Questions we get asked',
      finalTitle: 'Need CCTV for your home or business?',
      finalLead:
        'Talk to Ethio Smart Security today. Get the right security solution for your property.',
      helpTitle: 'Not sure which camera you need?',
      helpSub: 'Tell us what you want to protect. We’ll recommend the right solution.',
      otherSolutions: 'Other CCTV solutions',
      usuallyCover: 'What we usually cover',
      recommendedSolutions: 'Recommended solutions',
      problemSolves: 'The problem it solves',
      goodFor: 'Good for',
      goodToKnow: 'Good to know:',
      whatYouGet: 'What you get',
      forYourProperty: 'For your type of property',
      visitUs: 'Visit or find us',
      preferToType: 'Prefer to type?',
      preferToTypeSub:
        'Pick what applies and send the message on WhatsApp. It opens in the app, ready to send.',
      composerPlacePrompt: 'What do you want to protect?',
      composerNeedPrompt: 'Anything that applies?',
      composerNotePrompt: 'Anything else? (optional)',
      composerPlaceholder: 'For example: 4 cameras for a 2-floor house in Bole',
      howWeWork: 'How we work',
    },
    whyItems: [
      { title: 'Professional installation', desc: 'Proper camera positioning, configuration and setup.' },
      { title: 'Remote monitoring', desc: 'Check your property from your phone.' },
      { title: 'Right camera for the situation', desc: 'We recommend based on your actual location and security need.' },
      { title: 'Warranty and support', desc: 'Contact us after installation if you need help.' },
      { title: 'Local service', desc: 'Addis Ababa-based team.' },
    ],
    steps: [
      { title: 'Contact us', desc: 'Call or WhatsApp us.' },
      { title: 'Tell us what you need', desc: 'Home, shop, office, pharmacy, factory, etc.' },
      { title: 'Get a recommendation', desc: 'We recommend the appropriate cameras or system.' },
      { title: 'Installation', desc: 'Our team installs and configures the system.' },
      { title: 'Monitor from your phone', desc: 'You can monitor your property remotely.' },
    ],
    composerPlaces: ['Home', 'Shop', 'Pharmacy', 'Office', 'Factory', 'Other'],
    composerNeeds: ['No Wi-Fi', 'Power cuts', 'No power cable', 'Wide area', 'Not sure'],
    solutions: {
      'outdoor-cctv': {
        title: 'Outdoor CCTV',
        short: 'For compounds, entrances, parking areas and shop fronts.',
        cta: 'Get a recommendation',
        seoTitle: 'Outdoor CCTV Camera Installation in Addis Ababa',
        seoDescription:
          'Weatherproof outdoor CCTV cameras for compounds, gates, parking and shop fronts in Addis Ababa. Night vision, phone viewing and professional installation.',
        intro:
          'Outdoor cameras watch the places a thief has to cross first: the gate, the compound wall, the parking area and the shop front.',
        problem:
          'A camera in the wrong place, or without good night vision, records nothing useful. We choose the camera and the mounting position for your actual compound, not from a catalogue.',
        goodFor: ['Gates and entrances', 'Compounds and walls', 'Parking areas', 'Shop fronts and loading areas'],
        features: ['Weatherproof for rain and dust', 'Night vision', 'Clear 5MP-class video options', 'Watch live from your phone on supported systems'],
        notes: ['Standard wired systems need mains power and (for phone viewing) internet. If either is unreliable, ask us about the 4G, battery or solar options.'],
        waMessage: 'Hello Ethio Smart Security, I want outdoor CCTV cameras. Can you recommend the right system?',
      },
      'indoor-cctv': {
        title: 'Indoor CCTV',
        short: 'For homes, offices, shops and pharmacies.',
        cta: 'Get a recommendation',
        seoTitle: 'Indoor CCTV Cameras for Homes, Offices & Shops in Addis Ababa',
        seoDescription:
          'Indoor CCTV for homes, offices, shops and pharmacies in Addis Ababa. Discreet cameras, clear video and remote viewing on your phone.',
        intro: 'Indoor cameras cover the counter, the cash area, the stockroom, the corridor and the living areas of a home.',
        problem:
          'Most losses inside a business happen at the counter, the till or the stockroom. Indoor cameras placed correctly give you evidence and let you check what is happening without being there.',
        goodFor: ['Shop counters and cash areas', 'Pharmacy counters and stockrooms', 'Office entrances and corridors', 'Living areas and nursery rooms'],
        features: ['Compact, discreet design', 'Clear video in low light', 'Watch from your phone on supported systems', 'Some models include two-way audio'],
        notes: ['Tell us the size of the room and what you want to see. That decides the right lens and number of cameras.'],
        waMessage: 'Hello Ethio Smart Security, I want indoor CCTV cameras. Can you recommend the right system?',
      },
      '4g-sim-cctv': {
        title: '4G / SIM CCTV',
        short: 'For locations without reliable Wi-Fi.',
        cta: 'Ask about 4G cameras',
        seoTitle: '4G SIM CCTV Camera in Ethiopia – No Wi-Fi Needed',
        seoDescription:
          '4G SIM CCTV cameras for Addis Ababa and Ethiopia. Watch live from your phone with no Wi-Fi, ideal for shops, construction sites, farms and remote properties.',
        intro: 'A 4G camera uses a mobile SIM card to send video to your phone, so you do not need Wi-Fi or a router at the location.',
        problem:
          'Many shops, sites and compounds have no Wi-Fi, or the internet keeps dropping. A SIM camera keeps working on its own mobile connection.',
        goodFor: ['Shops and pharmacies with unreliable internet', 'Construction sites', 'Farms and remote compounds', 'Empty properties and warehouses'],
        features: ['Works with a mobile data SIM', 'Live view and playback on your phone', 'Motion alerts on supported models', 'Can be paired with battery or solar'],
        notes: ['You provide an active data SIM. Video quality and data use depend on the network signal at the location, so we check this with you first.'],
        waMessage: 'Hello Ethio Smart Security, I need a 4G SIM CCTV camera because I have no reliable Wi-Fi. Please advise.',
      },
      'battery-backup-cctv': {
        title: 'Battery Backup CCTV',
        short: 'For monitoring during power interruptions.',
        cta: 'Ask about battery backup',
        seoTitle: 'Battery Backup CCTV in Addis Ababa – Works During Power Cuts',
        seoDescription:
          'CCTV with battery backup for Addis Ababa homes, shops and pharmacies. Keep recording and viewing when the power goes out.',
        intro: 'Power cuts are exactly when a property is most exposed. Battery backup keeps your cameras running when the mains goes off.',
        problem:
          'A standard CCTV system stops when the power stops. Cameras with a built-in battery, or a system with a UPS, keep watching through the outage.',
        goodFor: ['Pharmacies and shops that open late', 'Homes with frequent outages', 'Offices with server or cash rooms'],
        features: ['Keeps cameras running during outages', 'Options: built-in battery cameras or UPS for full systems', 'Can combine with 4G for power plus internet cuts'],
        notes: ['Backup time depends on the camera model, battery size and whether a UPS is used. We tell you the expected runtime before you buy.'],
        waMessage: 'Hello Ethio Smart Security, I want CCTV that keeps working during power cuts. Please recommend.',
      },
      'solar-cctv': {
        title: 'Solar CCTV',
        short: 'For outdoor places where running power cables is difficult.',
        cta: 'Call for current price',
        seoTitle: 'Solar CCTV Camera in Ethiopia – Outdoor, Wire-Free',
        seoDescription:
          'Solar-powered outdoor CCTV cameras in Ethiopia. No power cable needed, night vision, human detection and remote viewing from your phone. Installed in Addis Ababa.',
        intro: 'A solar camera charges itself from the sun, so it can watch places where there is no power point.',
        problem:
          'Running cable to a far gate, a yard or a plot costs time and money. Solar cameras remove the cable and keep recording through the night.',
        goodFor: ['Compounds and far gates', 'Plots and construction sites', 'Farms and storage yards', 'Properties where cabling is difficult'],
        features: ['Solar powered, for outdoor use', 'Night vision', 'Human detection on supported models', 'Remote viewing from your phone'],
        notes: ['Needs a position with good daylight. Usually combined with a 4G SIM where there is no Wi-Fi.'],
        waMessage: 'Hello Ethio Smart Security, I am interested in a solar CCTV camera. What is the current price?',
      },
      'ptz-360-cctv': {
        title: 'PTZ / 360° Cameras',
        short: 'For wider areas and remote control.',
        cta: 'Get a recommendation',
        seoTitle: 'PTZ & 360° CCTV Cameras in Addis Ababa',
        seoDescription:
          'PTZ and 360° CCTV cameras in Addis Ababa. Pan, tilt and zoom from your phone to cover yards, parking areas, shops and large spaces.',
        intro: 'A PTZ camera can pan, tilt and zoom. You steer it from your phone to follow movement or check a particular spot.',
        problem:
          'One fixed camera sees one view. A PTZ camera covers a wide area and lets you zoom into detail, which suits yards, parking areas and large shops.',
        goodFor: ['Large compounds and yards', 'Parking areas', 'Big shops and showrooms', 'Warehouses and workshops'],
        features: ['Pan, tilt and zoom from your phone', 'Auto-tracking on supported models', 'Night vision', 'Siren and warning light on selected models'],
        notes: ['A PTZ camera does not replace fixed cameras on key points like gates. We often combine both.'],
        waMessage: 'Hello Ethio Smart Security, I want a PTZ / 360° camera. Please recommend.',
      },
      'complete-cctv-systems': {
        title: 'Complete CCTV Systems',
        short: 'For businesses that need several cameras and professional installation.',
        cta: 'Talk to us',
        seoTitle: 'Complete CCTV Systems & Installation in Addis Ababa',
        seoDescription:
          'Complete multi-camera CCTV systems for businesses in Addis Ababa: planning, cabling, installation, recorder setup and phone viewing.',
        intro: 'For businesses with several areas to cover, we plan the whole system: cameras, recorder, cabling, power backup and phone access.',
        problem:
          'Cheap mixed equipment and bad cable work are the main reasons CCTV systems fail. A planned system is installed once and keeps working.',
        goodFor: ['Offices and corporate sites', 'Factories and warehouses', 'Restaurants, cafés and hotels', 'Large homes and property owners'],
        features: ['Site visit and camera placement plan', 'Proper cabling and recorder setup', 'Storage sized for your recording needs', 'Phone viewing set up for you and your team', 'After-sales support'],
        notes: ['The price depends on the number of cameras, camera type, cabling distance and installation complexity. We quote after understanding the site.'],
        waMessage: 'Hello Ethio Smart Security, I need a complete CCTV system for my business. Can we talk?',
      },
      'access-control-time-attendance': {
        title: 'Access Control & Time Attendance',
        short: 'Biometric fingerprint, RFID and facial recognition for offices and staff tracking.',
        cta: 'Request Access Control Quote',
        seoTitle: 'Biometric Access Control & Time Attendance in Addis Ababa, Ethiopia',
        seoDescription:
          'Fingerprint, RFID card, and facial recognition access control systems for offices, commercial buildings, and factories in Addis Ababa. Automated employee time attendance.',
        intro:
          'Control who enters your premises, secure sensitive rooms, and automatically track employee attendance with modern biometric and RFID access terminals.',
        problem:
          'Manual sign-in books and physical keys are easily copied, lost, or forged. Access control gives you digital access logs, restricts unauthorized visitors, and automates monthly HR attendance reports.',
        goodFor: [
          'Corporate offices and headquarters',
          'Server rooms and cash handling offices',
          'Commercial building turnstiles and gates',
          'Factories and industrial warehouses',
          'Clinics, pharmacies, and labs',
        ],
        features: [
          'High-speed facial recognition and fingerprint sensor',
          'RFID smart card and PIN code entry options',
          'Electric magnetic locks and drop-bolt hardware',
          'Exportable monthly employee attendance reports (Excel/PDF)',
          'Battery backup power for continuous door locking during outages',
          'Emergency break-glass override for fire safety compliance',
        ],
        notes: [
          'Can be installed on glass doors, wooden doors, steel doors, and security turnstiles. We recommend an on-site survey to measure door frames and power lines.',
        ],
        waMessage:
          'Hello Ethio Smart Security, I want an Access Control & Time Attendance system for our office/facility. Please advise.',
      },
      'smart-intercom-gate-automation': {
        title: 'Smart Video Intercoms & Gate Motors',
        short: 'Villa and compound video doorbells with remote mobile gate opening and visitor screening.',
        cta: 'Ask About Smart Intercoms',
        seoTitle: 'Smart Video Intercom & Automatic Gate Motors in Addis Ababa',
        seoDescription:
          'Smart video doorbells, villa video intercoms, security guard house terminals, and remote motorized gate opening in Addis Ababa. Screen visitors from anywhere on your phone.',
        intro:
          'Screen visitors before opening your gate, talk with guests in HD audio/video, and open main doors or motorized gates directly from your smartphone or indoor touch monitor.',
        problem:
          'Having to walk to the gate in the dark or during rain to see who is knocking exposes your compound to risk. A video intercom lets you verify visitor identity safely from inside or while away.',
        goodFor: [
          'Residential villas and G+2 homes in Addis Ababa',
          'Gated compounds and diplomatic residences',
          'Commercial building main receptions',
          'Apartment buildings and shared compounds',
        ],
        features: [
          'HD video doorbell camera with night vision',
          'Touchscreen indoor station monitor (7-inch or 10-inch)',
          'Remote mobile app gate unlocking from anywhere in the world',
          'Integration with motorized slide/swing gates and magnetic strikes',
          'Guard booth to residence intercom communication',
          'Snapshot recording of all missed doorbell rings',
        ],
        notes: [
          'We install wired IP intercoms (most stable for new builds) and wireless/Wi-Fi options for finished villas where running new conduit is difficult.',
        ],
        waMessage:
          'Hello Ethio Smart Security, I am interested in a Smart Video Intercom & Gate Opener system. Please provide details.',
      },
      'fire-alarm-smoke-detection': {
        title: 'Fire Alarm & Smoke Detection',
        short: 'Photoelectric smoke sensors, heat detectors, and alarm sirens with emergency alerts.',
        cta: 'Book Fire Safety Survey',
        seoTitle: 'Fire Alarm & Smoke Detection Systems in Addis Ababa, Ethiopia',
        seoDescription:
          'Certified smoke detectors, heat sensors, manual call points, and fire alarm control panels in Addis Ababa for buildings, warehouses, and factories. Early fire warning.',
        intro:
          'Early detection saves lives and protects inventory. Our fire detection systems detect smoke and extreme heat spikes within seconds, triggering loud sirens and sending instant alerts.',
        problem:
          'Electrical shorts and overheated equipment can start small smoldering fires at night when nobody is present. By the time flames are visible outside, extensive damage is done.',
        goodFor: [
          'Factories, chemical storage, and industrial warehouses',
          'Commercial plazas, supermarkets, and shopping malls',
          'Pharmacies, server rooms, and battery banks',
          'Hotels, guest houses, and residential compounds',
        ],
        features: [
          'Optical photoelectric smoke detection for early smoldering fire warning',
          'Fixed temperature and rate-of-rise thermal heat sensors',
          'Central fire alarm control panel with zoned building map',
          'Loud strobe siren sounders to evacuate premises immediately',
          'Manual emergency call break-glass units at stairwells and exits',
          'Optional integration with CCTV cameras and mobile phone dialer',
        ],
        notes: [
          'Meets commercial building safety standards in Ethiopia. Includes regular inspection protocols and annual sensor maintenance.',
        ],
        waMessage:
          'Hello Ethio Smart Security, I need a Fire Alarm & Smoke Detection system for our building/facility. Please quote.',
      },
      'server-room-nvr-video-wall': {
        title: 'Server Room & NVR Video Walls',
        short: 'Rack-mounted NVRs, structured CAT6 cabling, server cabinets, and guard room video walls.',
        cta: 'Request Video Wall Design',
        seoTitle: 'Server Room CCTV, Structured Cabling & Video Walls in Addis Ababa',
        seoDescription:
          'Rack-mount NVRs, server cabinets, structured CAT6 cabling, and multi-display security command video walls in Addis Ababa for commercial enterprises and industrial plants.',
        intro:
          'For enterprise facilities requiring 16 to 128+ cameras, we engineer central command rooms with server rack NVR installations, organized patch panels, and continuous multi-screen video walls.',
        problem:
          'Informal installations leave a mess of unlabelled loose cables, hot overheating desktop recorders, and unstable power feeds. Enterprise facilities require server cabinets, structured CAT6 cabling, and organized guard room monitoring.',
        goodFor: [
          'Corporate headquarters and multi-storey plazas',
          'Industrial manufacturing plants and industrial parks (Dukem, Bole Lemi)',
          'Logistics hubs and distribution centers',
          'Commercial banks, hotels, and universities',
        ],
        features: [
          '19-inch rack-mounted enterprise NVRs with hot-swappable HDD bays',
          'Structured CAT6/CAT6A cabling with numbered patch panel termination',
          'Dedicated security guard room HDMI/VGA multi-display video wall',
          'Centralized online UPS power backup with surge suppression',
          'Clean cable management, trunking, and ventilated equipment cabinets',
          'Role-based access permissions for security staff vs senior executives',
        ],
        notes: [
          'We conduct detailed site blueprint reviews and cable distance calculations to ensure gigabit bandwidth and clean airflow inside server racks.',
        ],
        waMessage:
          'Hello Ethio Smart Security, we require an enterprise Server Room NVR & Video Wall system. Please schedule a technical consultation.',
      },
    } as Record<string, SolutionTranslation>,
    useCases: {
      home: {
        title: 'Home',
        line: 'Protect your family and property even when you are away.',
        seoTitle: 'CCTV for Home in Addis Ababa',
        seoDescription:
          'Home CCTV installation in Addis Ababa. Cameras for gates, compounds and G+2 homes, with night vision and live viewing on your phone.',
        headline: 'CCTV for your home in Addis Ababa',
        body: 'Most home break-ins start at the gate or the compound wall. We cover the entrance, the compound and the main doors so you can check your home from your phone, day or night.',
        watch: ['Main gate and compound wall', 'Front and back doors', 'Parking and garage', 'Stairs and living areas'],
        waMessage: 'Hello Ethio Smart Security, I want CCTV for my home. Please recommend a system.',
      },
      shop: {
        title: 'Shop',
        line: 'Monitor employees, customers and your business remotely.',
        seoTitle: 'CCTV for Shops in Addis Ababa',
        seoDescription:
          'CCTV installation for shops in Addis Ababa. Watch the counter, stock and entrance from your phone. 4G and battery options for unreliable internet and power.',
        headline: 'CCTV for your shop in Addis Ababa',
        body: 'A shop owner cannot be everywhere. Cameras on the counter, the shelves and the entrance let you see sales, staff and customers from your phone, and give you evidence when something goes missing.',
        watch: ['Counter and cash area', 'Shelves and stock', 'Entrance and shop front', 'Back store or stockroom'],
        waMessage: 'Hello Ethio Smart Security, I want CCTV for my shop. Please recommend a system.',
      },
      pharmacy: {
        title: 'Pharmacy',
        line: 'Keep monitoring even during power or internet problems, with 4G and battery solutions.',
        seoTitle: 'CCTV for Pharmacies in Addis Ababa',
        seoDescription:
          'CCTV for pharmacies in Addis Ababa. Cover the counter, shelves and stockroom, with 4G and battery backup so monitoring continues during power or internet problems.',
        headline: 'CCTV for your pharmacy in Addis Ababa',
        body: 'Pharmacies hold valuable stock and cash, and many open late. We cover the counter, shelves and stockroom, and use 4G and battery solutions so your cameras keep working when the power or the internet does not.',
        watch: ['Pharmacy counter and till', 'Shelves and medicine stock', 'Stockroom and back door', 'Entrance'],
        waMessage: 'Hello Ethio Smart Security, I want CCTV for my pharmacy. Please recommend a system.',
      },
      office: {
        title: 'Office',
        line: 'Monitor entrances, workspaces and important areas.',
        seoTitle: 'CCTV for Offices in Addis Ababa',
        seoDescription:
          'Office CCTV installation in Addis Ababa. Cover entrances, reception, corridors and key rooms with a professionally planned system.',
        headline: 'CCTV for your office in Addis Ababa',
        body: 'Offices need clean, planned installation: cameras at the entrance, reception, corridors and sensitive rooms, with tidy cabling and a recorder that stores what matters.',
        watch: ['Entrance and reception', 'Corridors and stairs', 'Cash, server and records rooms', 'Parking'],
        waMessage: 'Hello Ethio Smart Security, I want CCTV for my office. Please recommend a system.',
      },
      factory: {
        title: 'Factory',
        line: 'Monitor larger premises and critical areas.',
        seoTitle: 'CCTV for Factories & Warehouses in Addis Ababa',
        seoDescription:
          'CCTV for factories, warehouses and large compounds in Addis Ababa. Wide-area PTZ, outdoor and solar options with professional installation.',
        headline: 'CCTV for your factory or warehouse',
        body: 'Large premises need a plan: fixed cameras on gates and loading areas, PTZ cameras for wide yards, and solar or 4G where cabling is hard. We survey the site first.',
        watch: ['Gates and loading areas', 'Production and storage floors', 'Perimeter and yard', 'Parking'],
        waMessage: 'Hello Ethio Smart Security, I want CCTV for my factory / warehouse. Please recommend.',
      },
    } as Record<string, UseCaseTranslation>,
    services: {
      installation: {
        title: 'CCTV Installation',
        text: 'Professional camera placement, wiring, mounting and configuration.',
        detail:
          'Our team positions each camera for the view you need, runs and finishes the cabling, mounts the equipment and configures the recorder and cameras so the system works when we leave.',
        waMessage: 'Hello Ethio Smart Security, I want to book a CCTV installation.',
      },
      design: {
        title: 'CCTV System Design',
        text: 'Help choosing camera locations and the appropriate equipment.',
        detail:
          'We look at your property, decide where cameras should go, and choose equipment that suits the place, the power and internet situation and your budget.',
        waMessage: 'Hello Ethio Smart Security, I need help designing a CCTV system for my property.',
      },
      'remote-viewing': {
        title: 'Remote Viewing Setup',
        text: 'We configure your phone and the app so you can monitor from anywhere.',
        detail:
          "We install and set up the viewing app on your phone (and your team's phones if needed) and show you how to watch live video and playback. Remote viewing needs a supported system and an internet or 4G connection.",
        waMessage: 'Hello Ethio Smart Security, I need help setting up remote viewing on my phone.',
      },
      upgrade: {
        title: 'CCTV Upgrade',
        text: 'Improve an existing system with better cameras, storage, remote viewing or more coverage.',
        detail:
          'Already have CCTV? Tell us what is wrong or missing. We can add cameras, improve image quality, increase storage or add phone viewing, and tell you honestly what is worth keeping.',
        waMessage: 'Hello Ethio Smart Security, I want to upgrade my existing CCTV system.',
      },
      support: {
        title: 'Maintenance & Support',
        text: 'Troubleshooting and ongoing support.',
        detail:
          'If a camera goes offline, the image is poor or you cannot view from your phone, contact us and we will help find and fix the problem.',
        waMessage: 'Hello Ethio Smart Security, I have a problem with my CCTV and need support.',
      },
      consultation: {
        title: 'Security Consultation',
        text: 'Work out what you actually need before you buy.',
        detail:
          'Not sure what to buy? Talk to us first. We ask about your property and your risks, then explain what you need and what you can skip, before you spend money.',
        waMessage: 'Hello Ethio Smart Security, I would like a security consultation before I buy CCTV.',
      },
    } as Record<string, ServiceTranslation>,
    demos: {
      'day-night': { title: 'Day vs night vision', text: 'See how the same view looks in daylight and in the dark.' },
      'human-detection': { title: 'Human detection', text: 'The camera detects a person and alerts your phone.' },
      'phone-view': { title: 'Remote phone viewing', text: 'Open your phone and see your property live.' },
      ptz: { title: 'PTZ movement', text: 'Pan, tilt and zoom from your phone.' },
      siren: { title: 'Siren and warning light', text: 'Deter intruders with sound and light.' },
      '4g': { title: '4G / SIM operation', text: 'A working camera with no Wi-Fi at all.' },
      battery: { title: 'Battery backup', text: 'Keeps recording when the power goes out.' },
      solar: { title: 'Solar operation', text: 'An outdoor camera with no power cable.' },
    } as Record<string, DemoTranslation>,
    faqs: [
      {
        q: 'How much does CCTV installation cost?',
        a: 'It depends on the type of camera, the number of cameras, how difficult the installation is and what you need (for example 4G, battery or solar). Call or WhatsApp us, tell us what you want to protect, and we will give you a clear price.',
      },
      {
        q: 'Can I watch my camera from my phone?',
        a: 'Yes, on supported systems. We set up the phone app for you and show you how to use it. A wired system needs internet at the location; a 4G camera uses a SIM card instead.',
      },
      {
        q: 'Will CCTV work when the power goes out?',
        a: 'A standard system stops when power stops. For power cuts we use cameras with a built-in battery, a UPS for full systems, or solar cameras. Tell us how often the power goes and we will recommend the right option.',
      },
      {
        q: 'What if I do not have Wi-Fi?',
        a: '4G / SIM cameras work with a mobile data SIM card and do not need Wi-Fi. They are a good fit for shops, sites and remote locations. The signal strength at your location matters, so we check it with you.',
      },
      {
        q: 'Do you install the cameras?',
        a: 'Yes. Our team installs and configures the cameras in Addis Ababa. If you are outside Addis Ababa, call us to ask about your area.',
      },
      {
        q: 'Can you install cameras in shops and pharmacies?',
        a: 'Yes. We install in shops, pharmacies, offices, restaurants, factories and homes, and use 4G and battery solutions where internet or power is a problem.',
      },
      {
        q: 'Do you provide warranty?',
        a: 'Yes. Our cameras and systems come with warranty. The period depends on the camera model and is confirmed with you in writing on the quotation before installation.',
      },
      {
        q: 'Can I see the camera at night?',
        a: 'Yes. Our cameras have night vision, so you can still see people and movement in the dark. How far you can see depends on the camera model and the location, and we will explain this when we recommend a camera.',
      },
    ] as FaqTranslation[],
    installCategories: {
      homes: { title: 'Homes and G+2 villas', text: 'Gates, compounds, doors and parking.' },
      shops: { title: 'Shops', text: 'Counters, shelves and entrances.' },
      pharmacies: { title: 'Pharmacies', text: 'Counters and stockrooms, with 4G and battery backup.' },
      offices: { title: 'Offices', text: 'Entrances, reception and corridors.' },
      factories: { title: 'Factories', text: 'Yards, loading areas and large premises.' },
      compounds: { title: 'Outdoor compounds and parking', text: 'Wide-area outdoor coverage.' },
    } as Record<string, { title: string; text: string }>,
    featured: {
      'solar-cctv': {
        title: 'Solar Outdoor CCTV',
        points: ['Solar powered', 'Outdoor use', 'Remote viewing', 'Night vision', 'Human detection'],
        cta: 'Call for Current Price',
        waMessage: 'Hello Ethio Smart Security, I am interested in the Solar Outdoor CCTV. What is the current price?',
      },
      '4g-sim-cctv': {
        title: '4G SIM + Battery CCTV',
        points: ['SIM card support', 'Battery backup', 'Remote viewing', 'Suitable for shops and remote locations'],
        cta: 'Ask About This Camera',
        waMessage: 'Hello Ethio Smart Security, I want to ask about the 4G SIM + Battery CCTV camera.',
      },
      'outdoor-cctv': {
        title: '5MP Outdoor CCTV',
        points: ['5MP resolution', 'Night vision', 'Outdoor protection', 'Remote monitoring'],
        cta: 'Get a Recommendation',
        waMessage: 'Hello Ethio Smart Security, I am interested in the 5MP outdoor CCTV. Please recommend a setup.',
      },
    },
    about: {
      title: 'About Ethio Smart Security & CCTV',
      lead: 'A local Addis Ababa team that recommends the right CCTV for your situation, installs it properly and supports you afterwards.',
      story1:
        'We started by showing how CCTV really works: night vision, phone viewing, solar and 4G cameras, in short videos on TikTok and Facebook. Many customers contact us after watching those demonstrations, so we try to give the same honest answer on the phone: what camera fits your place, what it costs, and what it can and cannot do.',
      story2:
        'We are based in Megenagna, Addis Ababa, near Lem Hotel / Fenasi Building, and install for homes, shops, pharmacies, offices, restaurants, factories and property owners.',
    },
    contact: {
      title: 'Talk to us',
      lead: 'The fastest way is a call or a WhatsApp message. Tell us what you want to protect and we will recommend the right solution.',
    },
  },

  am: {
    site: {
      name: 'ኢትዮ ስማርት ሴኩሪቲ እና ሲሲቲቪ',
      shortName: 'ኢትዮ ስማርት ሴኩሪቲ',
      phoneDisplay: '0945-282035',
      address: 'መገናኛ፡ ሌም ሆቴል / ፌናሲ ህንፃ አጠገብ፡ አዲስ አበባ፡ ኢትዮጵያ',
      hours: 'በማንኛውም ሰዓት ይደውሉ ወይም በዋትስአፕ ያናግሩን፤ ፈጥነን ምላሽ እንሰጣለን።',
      warrantyText:
        'አዎ። ሁሉም ካሜራዎቻችን እና የሲሲቲቪ ሲስተሞቻችን አስተማማኝ ዋስትና (ጋራንቲ) አላቸው። የዋስትናው ጊዜ እንደ ካሜራው አይነት የሚወሰን ሲሆን ከመገጠሙ በፊት በዋጋ ዝርዝር (Quotation) ላይ በጽሁፍ ተረጋግጦ ይሰጥዎታል።',
      socialProof:
        'የሲሲቲቪ ካሜራ ማሳያ ቪዲዮዎቻችን በቲክቶክ ከ46ሺህ በላይ እንዲሁም በፌስቡክ ከ7ሺህ በላይ ተከታዮች ይመለከቷቸዋል።',
      skipToContent: 'ወደ ዋናው ይዘት ይለፉ',
      copyright: 'ኢትዮ ስማርት ሴኩሪቲ እና ሲሲቲቪ። አዲስ አበባ፡ ኢትዮጵያ።',
    },
    nav: {
      home: 'መነሻ',
      solutions: 'መፍትሔዎች',
      services: 'አገልግሎቶች',
      installations: 'የተከናወኑ ስራዎች',
      proforma: 'ፕሮፎርማ ጠይቁ',
      about: 'ስለ እኛ',
      contact: 'ያግኙን',
    },
    actions: {
      callNow: 'አሁኑኑ ይደውሉ',
      call: 'ይደውሉ',
      whatsappUs: 'በዋትስአፕ ያናግሩን',
      whatsapp: 'ዋትስአፕ',
      telegram: 'ቴሌግራም',
      talkToUs: 'አሁኑኑ ያነጋግሩን',
      requestProforma: 'ህጋዊ ፕሮፎርማ ይጠይቁ',
      downloadProfile: 'የድርጅት መገለጫ (PDF)',
      bookAssessment: 'የቦታው ቅኝት ያስይዙ',
      getRecommendation: 'ተስማሚውን መፍትሔ ይጠይቁ',
      learnMore: 'ተጨማሪ ያንብቡ',
      seeRightSetup: 'ተስማሚውን አቀማመጥ ይመልከቱ',
      askExamples: 'የስራ ምሳሌዎችን ይጠይቁ',
      sendWhatsApp: 'በዋትስአፕ ይላኩ',
      exploreSolutions: 'የደህንነት መፍትሔዎችን ይመልከቱ',
      seeAllServices: 'ሁሉንም አገልግሎቶች ይመልከቱ',
      viewInstallProjects: 'የተከናወኑ ስራዎችን ይመልከቱ',
      openInMaps: 'በGoogle ካርታ ይመልከቱ',
      askAboutCamera: 'ስለዚህ ካሜራ ይጠይቁ',
      askSimilarWork: 'ስለ ተመሳሳይ ስራዎች ይጠይቁ',
      watchOnTikTok: 'በቲክቶክ ተጨማሪ ይመልከቱ',
      watchOnFacebook: 'በፌስቡክ ተጨማሪ ይመልከቱ',
      seeFacebookPage: 'የፌስቡክ ገጻችንን ይመልከቱ',
      switchLang: 'ወደ English ይቀይሩ',
    },
    hero: {
      title: 'በአዲስ አበባ አስተማማኝ የሲሲቲቪ ካሜራ እና የደህንነት መፍትሔዎች',
      lead: 'መኖሪያ ቤትዎን፣ ሱቅዎን፣ ቢሮዎን ወይም ድርጅትዎን ጥራት ባለው የሲሲቲቪ ገጠማ እና በስልክዎ በቀጥታ በመከታተል ይጠብቁ።',
      phoneSub: 'ይደውሉ ወይም ዋትስአፕ ያድርጉ',
      linkText: 'የደህንነት መፍትሔዎችን ይመልከቱ',
    },
    feedMock: {
      camName: 'ካሜራ 02 · ዋና በር',
      rec: 'እየቀረጸ ነው',
      personDet: 'ሰው 96%',
      nightVision: 'የሌሊት እይታ',
      livePhone: 'በስልክዎ በቀጥታ',
    },
    trust: [
      'ባለሙያ የካሜራ ገጠማ',
      'በስልክዎ በቀጥታ መከታተያ',
      'አስተማማኝ ዋስትና',
      'የገጠማ በኋላ ድጋፍ',
      'በአዲስ አበባ ፈጣን አገልግሎት',
    ],
    sections: {
      protectTitle: 'ምን ዓይነት ቦታ ነው መጠበቅ የሚፈልጉት?',
      protectSub: 'የእርስዎን ሁኔታ ይምረጡ እና እኛ የምንመክረውን ትክክለኛ የካሜራ አቀማመጥ ይመልከቱ።',
      solutionsTitle: 'ለችግርዎ ትክክለኛ የደህንነት መፍትሔዎች',
      solutionsSub: 'የካታሎግ ዝርዝር ብቻ አይደለም። የገጠመዎትን ችግር ይንገሩን፡ መፍትሔ የሚሆነውን ካሜራ እንመክራለን።',
      servicesTitle: 'አገልግሎቶቻችን',
      servicesSub: 'የሚፈልጉትን ካሜራ ከመምረጥ ጀምሮ እስከ መግጠም እና የድህረ-ሽያጭ ድጋፍ ድረስ።',
      installationsTitle: 'የተከናወኑ እውነተኛ የገጠማ ስራዎች',
      installationsSub: 'የምንሸጣቸውን ሲስተሞች እኛው ራሳችን እንገጥማቸዋለን። በአዲስ አበባ ዙሪያ የሰራናቸው አንዳንድ ስራዎች እነሆ።',
      demosTitle: 'አዳዲስ የሲሲቲቪ ካሜራ ማሳያ ቪዲዮዎቻችንን ይመልከቱ',
      demosSub: 'በቲክቶክ ወይም በፌስቡክ ቪዲዮዎቻችንን አይተዋል? እያንዳንዱ አገልግሎት እንዴት እንደሚሰራ ይመልከቱ።',
      whyTitle: 'ለምን ኢትዮ ስማርት ሴኩሪቲን ይመርጣሉ?',
      howTitle: 'አሰራራችን እንዴት ነው?',
      howSub: '5 ቀላል ደረጃዎች። ምንም አይነት ቅጽ መሙላት ወይም አካውንት መክፈት አያስፈልግም።',
      popularTitle: 'በብዛት የሚመረጡ ካሜራዎች',
      popularSub: 'ደንበኞቻችን በብዛት የሚመርጧቸው ካሜራዎች። ዋጋ ስለሚለዋወጥ የዛሬውን ዋጋ ይጠይቁን።',
      reviewsTitle: 'የደንበኞች አስተያየት',
      reviewsNote:
        'እውነተኛ የስራ ማጣቀሻዎችን ይጠይቁን። እንደ እርስዎ ዓይነት የተገጠሙ ስራዎችን ልናሳይዎት እና ደንበኞቻችንን እንድታነጋግሩ ልናደርግ እንችላለን። እንዲሁም በፌስቡክ ገጻችን ላይ የደንበኞችን አስተያየት ማየት ይችላሉ።',
      faqTitle: 'ተደጋግመው የሚጠየቁ ጥያቄዎች',
      finalTitle: 'ለመኖሪያ ቤትዎ ወይም ለንግድዎ ሲሲቲቪ ካሜራ ይፈልጋሉ?',
      finalLead: 'ዛሬውኑ ኢትዮ ስማርት ሴኩሪቲን ያነጋግሩ። ለንብረትዎ አስተማማኝ የደህንነት መፍትሔ ያግኙ።',
      helpTitle: 'የትኛው ካሜራ እንደሚስማማዎት እርግጠኛ አይደሉም?',
      helpSub: 'መጠበቅ የሚፈልጉትን ይንገሩን። ትክክለኛውን መፍትሔ እንመክራለን።',
      otherSolutions: 'ሌሎች የሲሲቲቪ መፍትሔዎች',
      usuallyCover: 'በዋናነት የምንሸፍናቸው ቦታዎች',
      recommendedSolutions: 'የሚመከሩ መፍትሔዎች',
      problemSolves: 'የሚፈታው ችግር',
      goodFor: 'ተስማሚ ለሆኑ ቦታዎች',
      goodToKnow: 'ማወቅ የሚገባዎት ነገር:',
      whatYouGet: 'የሚያገኟቸው ጥቅሞች',
      forYourProperty: 'ለእርስዎ ዓይነት ንብረት',
      visitUs: 'በአካል ይጎብኙን ወይም ያግኙን',
      preferToType: 'በጽሁፍ መላክ ይመርጣሉ?',
      preferToTypeSub: 'የሚፈልጉትን ይምረጡና መልዕክቱን በዋትስአፕ ይላኩ። በቀጥታ አፕሊኬሽኑ ላይ ተዘጋጅቶ ይከፈታል።',
      composerPlacePrompt: 'ምን ዓይነት ቦታ ነው መጠበቅ የሚፈልጉት?',
      composerNeedPrompt: 'ከሚከተሉት የሚመለከትዎት አለ?',
      composerNotePrompt: 'ተጨማሪ ማስታወሻ ካለዎት (አስገዳጅ አይደለም)',
      composerPlaceholder: 'ለምሳሌ፡ ቦሌ ለሚገኝ ባለ ሁለት ፎቅ ቤት 4 ካሜራዎች',
      howWeWork: 'አሰራራችን እንዴት ነው?',
    },
    whyItems: [
      { title: 'ሙያዊ የካሜራ ገጠማ', desc: 'ትክክለኛ አቀማመጥ፣ ጥራት ያለው ገመድ ዝርጋታ እና ሙሉ ዝግጅት።' },
      { title: 'በስልክዎ መከታተል', desc: 'ንብረትዎን ከየትኛውም ቦታ ሆነው በስልክዎ በቀጥታ ይመልከቱ።' },
      { title: 'ለቦታዎ ተስማሚ ካሜራ', desc: 'እንደ እውነተኛው ቦታዎ እና የደህንነት ፍላጎትዎ መርጠን እንመክራለን።' },
      { title: 'ዋስትና እና ድጋፍ', desc: 'ከገጠማ በኋላ ማንኛውም እገዛ ቢያስፈልግዎ ሁልጊዜ ከጎንዎ ነን።' },
      { title: 'የአዲስ አበባ ቡድን', desc: 'እዚሁ አዲስ አበባ የሚገኝ ቀልጣፋ የባለሙያዎች ቡድን።' },
    ],
    steps: [
      { title: 'ያግኙን', desc: 'ይደውሉልን ወይም በዋትስአፕ ያናግሩን።' },
      { title: 'ፍላጎትዎን ይንገሩን', desc: 'መኖሪያ ቤት፣ ሱቅ፣ ቢሮ፣ ፋርማሲ፣ ፋብሪካ ወዘተ።' },
      { title: 'ተስማሚ መፍትሔ እንሰጥዎታለን', desc: 'ተስማሚውን የካሜራ አይነት እና ዝግጅት እንመክራለን።' },
      { title: 'ገጠማ', desc: 'ባለሙያዎቻችን መጥተው ሲስተሙን ገጥመው ያስተካክላሉ።' },
      { title: 'በስልክዎ ይከታተሉ', desc: 'ከየትኛውም ቦታ ሆነው ንብረትዎን በስልክዎ መከታተል ይጀምሩ።' },
    ],
    composerPlaces: ['መኖሪያ ቤት', 'ሱቅ', 'ፋርማሲ', 'ቢሮ', 'ፋብሪካ', 'ሌላ'],
    composerNeeds: ['ዋይፋይ የለም', 'የመብራት መቆራረጥ', 'የኤሌክትሪክ ገመድ የለም', 'ሰፊ ቦታ/ግቢ', 'እርግጠኛ አይደለሁም'],
    solutions: {
      'outdoor-cctv': {
        title: 'የውጭ ግቢ ሲሲቲቪ',
        short: 'ለግቢ፣ ለዋና መግቢያ በር፣ ለመኪና ማቆሚያ እና ለሱቅ ፊት ለፊት።',
        cta: 'ተስማሚውን መፍትሔ ይጠይቁ',
        seoTitle: 'በአዲስ አበባ አስተማማኝ የውጭ ግቢ ሲሲቲቪ ካሜራ ገጠማ',
        seoDescription:
          'ዝናብና አቧራ የሚቋቋሙ፣ የሌሊት እይታ ያላቸው፣ በስልክ የሚታዩ የውጭ ግቢ ሲሲቲቪ ካሜራዎች በአዲስ አበባ።',
        intro:
          'የውጭ ካሜራዎች ማንኛውም ሰው መጀመሪያ የሚያልፍባቸውን ቦታዎች ይሸፍናሉ፡ ዋናውን በር፣ የግቢውን አጥር፣ የመኪና ማቆሚያ እና የፊት ለፊት መግቢያ።',
        problem:
          'ትክክለኛ ባልሆነ ቦታ የተገጠመ ወይም የሌሊት እይታ የሌለው ካሜራ ምንም አይነት ጠቃሚ መረጃ አይሰጥም። እኛ ለግቢዎ ተስማሚውን የካሜራ አይነት እና ትክክለኛውን አቀማመጥ እንመርጣለን።',
        goodFor: ['ዋና በሮች እና መግቢያዎች', 'የግቢ አጥሮችና ዙሪያዎች', 'የመኪና ማቆሚያዎች', 'የሱቅ ፊት ለፊትና ዕቃ ማውረጃዎች'],
        features: ['ዝናብና አቧራ የሚቋቋም (Weatherproof)', 'ጥራት ያለው የሌሊት እይታ (Night Vision)', 'የጠራ ባለ 5MP ጥራት ያላቸው አማራጮች', 'በስልክዎ በቀጥታ የመከታተል ድጋፍ'],
        notes: ['መደበኛ ባለ ገመድ ካሜራዎች ቋሚ መብራት እና (ለስልክ እይታ) ኢንተርኔት ይፈልጋሉ። ሁለቱም ካልተሟሉ ስለ 4G፣ ባትሪ ወይም የሶላር አማራጮች ይጠይቁን።'],
        waMessage: 'ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ የውጭ ግቢ ሲሲቲቪ ካሜራ እፈልጋለሁ። ተስማሚውን ሲስተም ልትመክሩኝ ትችላላችሁ?',
      },
      'indoor-cctv': {
        title: 'የቤት እና ህንፃ ውስጥ ሲሲቲቪ',
        short: 'ለመኖሪያ ቤቶች፣ ለቢሮዎች፣ ለሱቆች እና ለፋርማሲዎች።',
        cta: 'ተስማሚውን መፍትሔ ይጠይቁ',
        seoTitle: 'የቤት እና የህንፃ ውስጥ ሲሲቲቪ ካሜራዎች በአዲስ አበባ',
        seoDescription:
          'ለቤት፣ ለቢሮ፣ ለሱቅ እና ለፋርማሲ የሚሆኑ ውብና ዘመናዊ የውስጥ ሲሲቲቪ ካሜራዎች። በስልክዎ በቀጥታ ይመልከቱ።',
        intro: 'የውስጥ ካሜራዎች ካውንተርን፣ የገንዘብ መመዝገቢያ ቦታን፣ ስቶርን፣ ኮሪደርን እና የቤት ውስጥ ሳሎንን ይሸፍናሉ።',
        problem:
          'በድርጅት ውስጥ የሚከሰቱ አብዛኛዎቹ ጉድለቶች በካውንተር፣ በካዝና ወይም በስቶር ውስጥ የሚፈጠሩ ናቸው። በትክክል የተቀመጡ የውስጥ ካሜራዎች በቦታው ሳይገኙ ሁኔታዎችን ለመከታተል እና ማስረጃ ለመያዝ ያስችሉዎታል።',
        goodFor: ['የሱቅ ካውንተሮች እና ካዝና', 'የፋርማሲ ካውንተር እና መድኃኒት ስቶር', 'የቢሮ መግቢያዎች እና ኮሪደሮች', 'የመኖሪያ ቤት ሳሎን እና ህጻናት ክፍሎች'],
        features: ['ውብ እና ቦታ የማይይዝ ዲዛይን', 'በዝቅተኛ ብርሃን ውስጥም የጠራ ምስል', 'በስልክዎ በቀጥታ የመከታተያ ድጋፍ', 'ድምፅ የሚያስተላልፉ (Two-way audio) ሞዴሎች'],
        notes: ['የክፍሉን ስፋት እና ማየት የሚፈልጉትን ሁኔታ ይንገሩን። ይህም ትክክለኛውን የሌንስ አይነት እና የካሜራ ብዛት ለመወሰን ይረዳል።'],
        waMessage: 'ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ የቤት/የቢሮ ውስጥ ሲሲቲቪ ካሜራ እፈልጋለሁ። ተስማሚውን ሲስተም ልትመክሩኝ ትችላላችሁ?',
      },
      '4g-sim-cctv': {
        title: 'በ4G ሲም ካርድ የሚሰራ ሲሲቲቪ',
        short: 'አስተማማኝ ዋይፋይ ለሌለባቸው ቦታዎች።',
        cta: 'ስለ 4G ካሜራ ይጠይቁ',
        seoTitle: 'በ4G ሲም ካርድ የሚሰራ ሲሲቲቪ በኢትዮጵያ – ዋይፋይ አይፈልግም',
        seoDescription:
          'ያለ ዋይፋይ በሞባይል ሲም ካርድ ብቻ የሚሰሩ የሲሲቲቪ ካሜራዎች በአዲስ አበባ። በስልክዎ በቀጥታ ይመልከቱ።',
        intro: 'የ4G ካሜራ የሞባይል ሲም ካርድ በመጠቀም ቪዲዮውን ወደ ስልክዎ ስለሚልክ በቦታው ላይ ዋይፋይ ወይም ራውተር አያስፈልግዎትም።',
        problem:
          'በርካታ ሱቆች፣ ግንባታዎች እና ግቢዎች ዋይፋይ የላቸውም ወይም ኢንተርኔቱ ይቋረጣል። በሲም ካርድ የሚሰራ ካሜራ በሞባይል ዳታ ራሱን ችሎ ይሰራል፤ ዋይፋይ አይፈልግም።',
        goodFor: ['አስተማማኝ ኢንተርኔት ለሌላቸው ሱቆችና ፋርማሲዎች', 'የግንባታ ቦታዎች (Construction sites)', 'እርሻዎች እና ሩቅ ግቢዎች', 'መጋዘኖች እና ክፍት ይዞታዎች'],
        features: ['በሞባይል ዳታ ሲም ካርድ ይሰራል', 'በስልክዎ የቀጥታ እይታ እና የተቀረጸውን ማጫወት', 'የእንቅስቃሴ ማስጠንቀቂያ ወደ ስልክ ይልካል', 'ከባትሪ ወይም ከሶላር ጋር ሊጣመር ይችላል'],
        notes: ['የሚሰራ የሞባይል ዳታ ሲም ያዘጋጃሉ። የቪዲዮው ጥራት እንደ አካባቢው የኔትወርክ ጥንካሬ ስለሚወሰን አስቀድመን እንፈትሻለን።'],
        waMessage: 'ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ አስተማማኝ ዋይፋይ ስለሌለኝ በ4G ሲም ካርድ የሚሰራ ሲሲቲቪ ካሜራ እፈልጋለሁ።',
      },
      'battery-backup-cctv': {
        title: 'ባለ ባትሪ (የመብራት መቆራረጥን የሚቋቋም) ሲሲቲቪ',
        short: 'መብራት በሚጠፋበት ጊዜም ክትትል እንዳይቋረጥ።',
        cta: 'ስለ ባትሪ ካሜራዎች ይጠይቁ',
        seoTitle: 'የመብራት መቆራረጥን የሚቋቋም ባለ ባትሪ ሲሲቲቪ በአዲስ አበባ',
        seoDescription:
          'መብራት ቢጠፋም ሳይቋረጡ የሚሰሩ ባለ ባትሪ የሲሲቲቪ ካሜራዎች ለመኖሪያ ቤቶች፣ ለሱቆች እና ለፋርማሲዎች።',
        intro: 'አብዛኛውን ጊዜ ያልተጠበቁ ችግሮች የሚከሰቱት መብራት በሚጠፋበት ወቅት ነው። ባለ ባትሪ ካሜራዎች መብራት ሲቋረጥም ስራቸውን ይቀጥላሉ።',
        problem:
          'ተራ የሲሲቲቪ ካሜራ መብራት ሲጠፋ ስራ ያቆማል። ውስጣዊ ባትሪ ያላቸው ካሜራዎች ወይም በUPS የተደገፉ ሲስተሞች መብራት ቢጠፋም ሳይቋረጡ መቅረፃቸውን ይቀጥላሉ።',
        goodFor: ['እስከ ምሽት ክፍት ለሆኑ ፋርማሲዎችና ሱቆች', 'ተደጋጋሚ የመብራት መቆራረጥ ላለባቸው ቤቶች', 'የሰርቨር እና የካዝና ክፍሎች ላሉባቸው ቢሮዎች'],
        features: ['መብራት በሚጠፋበት ወቅት ስራቸውን ይቀጥላሉ', 'አማራጮች፡ ውስጣዊ ባትሪ ያላቸው ካሜራዎች ወይም ለሙሉ ሲስተም UPS', 'የመብራት እና ኢንተርኔት መቆራረጥን ለመቋቋም ከ4G ጋር ማጣመር ይቻላል'],
        notes: ['የባትሪው ቆይታ እንደ ካሜራው አይነት፣ የባትሪው አቅም እና UPS አጠቃቀም ይወሰናል። ከመግዛትዎ በፊት የሚቆይበትን ሰዓት በግልጽ እንነግርዎታለን።'],
        waMessage: 'ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ መብራት ሲጠፋ ሳይቋረጥ የሚሰራ የሲሲቲቪ ካሜራ እፈልጋለሁ። ምን ትመክሩኛላችሁ?',
      },
      'solar-cctv': {
        title: 'በፀሐይ ኃይል (ሶላር) የሚሰራ ሲሲቲቪ',
        short: 'የኤሌክትሪክ ገመድ ለመዘርጋት አስቸጋሪ ለሆኑ የውጭ ቦታዎች።',
        cta: 'የዛሬውን ዋጋ ይጠይቁ',
        seoTitle: 'በፀሐይ ኃይል (ሶላር) የሚሰራ የውጭ ሲሲቲቪ ካሜራ በኢትዮጵያ',
        seoDescription:
          'ምንም የኤሌክትሪክ ገመድ ሳይፈልግ በሶላር የሚሰራ፣ የሌሊት እይታ ያለው፣ በስልክ የሚታይ የሲሲቲቪ ካሜራ በአዲስ አበባ።',
        intro: 'የሶላር ካሜራ ከፀሐይ ብርሃን ራሱን ቻርጅ ስለሚያደርግ የኤሌክትሪክ መስመር በሌለበት ቦታ ሁሉ በነጻነት መስራት ይችላል።',
        problem:
          'ወደ ሩቅ በር፣ ክፍት ሜዳ ወይም የግንባታ ቦታ ገመድ መዘርጋት ጊዜና ወጪ ይጠይቃል። የሶላር ካሜራዎች ምንም የኤሌክትሪክ ገመድ ሳይፈልጉ ራሳቸውን ቻርጅ እያደረጉ ሌሊትም ጭምር ይቀርጻሉ።',
        goodFor: ['ሰፋፊ ግቢዎች እና የሩቅ በሮች', 'የግንባታ ቦታዎች እና ክፍት መሬቶች', 'እርሻዎች እና የዕቃ ማከማቻ ሜዳዎች', 'የኤሌክትሪክ ገመድ ዝርጋታ አስቸጋሪ በሆነባቸው ቦታዎች'],
        features: ['በፀሐይ ብርሃን ራሱን ቻርጅ የሚያደርግ', 'ጥራት ያለው የሌሊት እይታ', 'የሰው እንቅስቃሴ መለያ (Human detection)', 'ከየትኛውም ቦታ በስልክ በቀጥታ የመከታተል ድጋፍ'],
        notes: ['ጥሩ የቀን የፀሐይ ብርሃን የሚያገኝ ቦታ ይፈልጋል። ዋይፋይ በሌለበት ቦታ አብዛኛውን ጊዜ ከ4G ሲም ካርድ ጋር ተጣምሮ ይገጠማል።'],
        waMessage: 'ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ በፀሐይ ኃይል (ሶላር) የሚሰራ የሲሲቲቪ ካሜራ እፈልጋለሁ። የዛሬው ዋጋ ስንት ነው?',
      },
      'ptz-360-cctv': {
        title: 'ተንቀሳቃሽ PTZ / 360° ካሜራዎች',
        short: 'ሰፋፊ ቦታዎችን ለመሸፈን እና በስልክ ለማሽከርከር።',
        cta: 'ተስማሚውን መፍትሔ ይጠይቁ',
        seoTitle: 'ተንቀሳቃሽ PTZ እና 360° ሲሲቲቪ ካሜራዎች በአዲስ አበባ',
        seoDescription:
          'በስልክዎ ወደ ግራ፣ ቀኝ፣ ላይና ታች የሚሽከረከሩ እና አቅርበው የሚያሳዩ PTZ ካሜራዎች በአዲስ አበባ።',
        intro: 'የPTZ ካሜራ ወደ ጎንና ወደ ላይ/ታች መሽከርከር እንዲሁም ማቅረብ (Zoom) ይችላል። በስልክዎ እያዘዋወሩ እንቅስቃሴዎችን መከታተል ይችላሉ።',
        problem:
          'አንድ ቋሚ ካሜራ የሚያየው ወደ አንድ አቅጣጫ ብቻ ነው። የPTZ ካሜራ ሰፊ ቦታን በስልክዎ እያዘዋወሩ እንዲያዩ እና አቅርበው (Zoom) እንዲመለከቱ ያስችልዎታል።',
        goodFor: ['ሰፋፊ ግቢዎች እና ሜዳዎች', 'የተሽከርካሪ ማቆሚያዎች', 'ትላልቅ ሱቆች እና ሾውሩሞች', 'መጋዘኖች እና ወርክሾፖች'],
        features: ['በስልክዎ ማሽከርከር እና ማቅረብ (Pan, tilt & zoom)', 'እንቅስቃሴን ተከትሎ የመዞር (Auto-tracking) ችሎታ', 'ጥራት ያለው የሌሊት እይታ', 'የማስጠንቀቂያ ሳይረን እና መብራት የተገጠመላቸው ሞዴሎች'],
        notes: ['የPTZ ካሜራ እንደ ዋና በር ባሉ ቁልፍ ቦታዎች ላይ የሚገጠሙ ቋሚ ካሜራዎችን ሙሉ በሙሉ አይተካም። ብዙ ጊዜ ሁለቱንም አጣምረን እንገጥማለን።'],
        waMessage: 'ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ በስልክ የሚሽከረከር PTZ / 360° ካሜራ እፈልጋለሁ። ምን ትመክሩኛላችሁ?',
      },
      'complete-cctv-systems': {
        title: 'የተሟላ የሲሲቲቪ ሲስተም ገጠማ',
        short: 'በርካታ ካሜራዎችን እና ሙያዊ የገመድ ዝርጋታ ለሚፈልጉ ድርጅቶች።',
        cta: 'አሁኑኑ ያነጋግሩን',
        seoTitle: 'የተሟላ የሲሲቲቪ ካሜራ ሲስተም ገጠማ በአዲስ አበባ',
        seoDescription:
          'ለድርጅቶች፣ ቢሮዎችና ህንፃዎች የተሟላ የሲሲቲቪ ሲስተም እቅድ፣ የገመድ ዝርጋታ፣ መቅረጫ (NVR/DVR) እና የስልክ እይታ ገጠማ።',
        intro: 'በርካታ ቦታዎችን መሸፈን ለሚፈልጉ ድርጅቶች ሙሉውን ሲስተም እናዘጋጃለን፡ ካሜራዎች፣ መቅረጫ፣ የገመድ ዝርጋታ፣ የባትሪ ድጋፍ እና የስልክ እይታ።',
        problem:
          'ጥራት የሌላቸው የተቀላቀሉ እቃዎች እና የተበላሸ የገመድ ስራ የሲሲቲቪ ሲስተም ቶሎ እንዲበላሽ ያደርጋሉ። በባለሙያ የታቀደ ሲስተም አንዴ በትክክል ተገጥሞ ለረጅም ጊዜ ያገለግላል።',
        goodFor: ['ቢሮዎች እና የድርጅት ህንፃዎች', 'ፋብሪካዎች እና መጋዘኖች', 'ሬስቶራንቶች፣ ካፌዎች እና ሆቴሎች', 'ትላልቅ መኖሪያ ቤቶች እና የህንፃ ባለቤቶች'],
        features: ['የቦታ ምልከታ እና የካሜራ አቀማመጥ እቅድ', 'ጥራት ያለው የገመድ ዝርጋታ እና የመቅረጫ ዝግጅት', 'እንደ ፍላጎትዎ መጠን የተመጠነ የቪዲዮ ማከማቻ (Storage)', 'ለእርስዎ እና ለቡድንዎ በስልክ መከታተያ ማስተካከል', 'አስተማማኝ የድህረ-ገጠማ ድጋፍ'],
        notes: ['ዋጋው እንደ ካሜራው ብዛት፣ የካሜራ አይነት፣ የገመድ ርቀት እና የገጠማው ውስብስብነት ይወሰናል። ቦታውን ከተረዳን በኋላ ግልጽ ዋጋ እንሰጣለን።'],
        waMessage: 'ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ ለድርጅቴ የተሟላ የሲሲቲቪ ሲስተም ገጠማ እፈልጋለሁ። ልናወራ እንችላለን?',
      },
      'access-control-time-attendance': {
        title: 'የጣት አሻራ እና የፊት መለያ (Access Control)',
        short: 'የሰራተኞች መግቢያና መውጫ መቆጣጠሪያ፣ የሰዓት መመዝገቢያ እና የቢሮ በሮች ደህንነት።',
        cta: 'ተስማሚ ዋጋ ይጠይቁ',
        seoTitle: 'የጣት አሻራ እና የፊት መለያ ሲስተሞች በአዲስ አበባ',
        seoDescription:
          'የጣት አሻራ፣ የካርድ እና የፊት መለያ የበር መቆጣጠሪያ እና የሰራተኞች የሰዓት መመዝገቢያ ሲስተሞች በአዲስ አበባ።',
        intro:
          'ወደ ድርጅትዎ፣ ቢሮዎ ወይም ሰርቨር ክፍልዎ ማን እንደሚገባ ይቆጣጠሩ፤ የሰራተኞችን የስራ መግቢያና መውጫ ሰዓት በዲጂታል መንገድ ይመዝግቡ።',
        problem:
          'በወረቀት ላይ ሰራተኞችን መመዝገብ እና ተራ ቁልፍ መጠቀም ለስርቆት እና ለመረጃ መዛባት ያጋልጣል። ዘመናዊ የአክሰስ ኮንትሮል ሲስተም ህጋዊ ሰራተኞች ብቻ እንዲገቡ ያደርጋል፤ የወርሃዊ ሪፖርት በኮምፒውተር ይሰጣል።',
        goodFor: [
          'የድርጅት ቢሮዎች እና ዋና መሥሪያ ቤቶች',
          'የሰርቨር ክፍሎች እና የካዝና ክፍሎች',
          'የፋብሪካ እና የመጋዘን መግቢያ በሮች',
          'ክሊኒኮች፣ ፋርማሲዎች እና ላቦራቶሪዎች',
        ],
        features: [
          'ፈጣን የፊት መለያ እና የጣት አሻራ አንባቢ',
          'የካርድ (RFID) እና የሚስጥር ቁጥር (PIN) አማራጭ',
          'ጠንካራ ማግኔቲክ የመቆለፊያ ሲስተም',
          'የወርሃዊ ሰራተኞች መገኘት ሪፖርት (Excel/PDF)',
          'መብራት ሲጠፋ በባትሪ የሚሰራ',
          'ለእሳት አደጋ ጊዜ የአደጋ ጊዜ መክፈቻ ቁልፍ',
        ],
        notes: ['በመስታወት፣ በእንጨትና በብረት በሮች ላይ በቀላሉ ይገጠማል። የቦታው ቅኝት በማድረግ የበር ፍሬሞችን እንለካለን።'],
        waMessage:
          'ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ የጣት አሻራ እና የፊት መለያ (Access Control) ሲስተም ለቢሯችን እፈልጋለሁ። እባክዎ ተስማሚ ሲስተም ይምከሩኝ።',
      },
      'smart-intercom-gate-automation': {
        title: 'ስማርት ቪዲዮ ኢንተርኮም እና የበር መቆጣጠሪያ',
        short: 'የቪላ እና የግቢ ቪዲዮ ደውል፣ በስልክ በር መክፈቻ እና የእንግዳ ማጣሪያ።',
        cta: 'ስለ ኢንተርኮም ይጠይቁ',
        seoTitle: 'ስማርት ቪዲዮ ኢንተርኮም እና አውቶማቲክ የበር መክፈቻ በአዲስ አበባ',
        seoDescription:
          'ስማርት የቪዲዮ ደውል፣ ለቪላ ቤቶች የሚሆን የቤት ውስጥ ሞኒተር እና በስልክ በር መክፈቻ ሲስተም በአዲስ አበባ።',
        intro:
          'በሩን ከመክፈትዎ በፊት ማን እንደመጣ በቪዲዮ ይመልከቱ፣ በድምጽ ያነጋግሩ፤ ከየትኛውም ቦታ ሆነው በስልክዎ የዋናውን በር ቆልፍ ይክፈቱ።',
        problem:
          'በጨለማ ወይም በዝናብ ወቅት ወደ ውጭ በር መሄድ ለደህንነት አስጊ ነው። ቪዲዮ ኢንተርኮም ከቤትዎ ሳይወጡ ወይም ከቢሮ ሆነው በስልክዎ እንግዳውን አይተው በር እንዲከፍቱ ያስችልዎታል።',
        goodFor: [
          'ለመኖሪያ ቪላዎች እና G+2 ቤቶች',
          'የዲፕሎማቲክ እና የግል ግቢዎች',
          'የንግድ ህንፃ እንግዳ መቀበያዎች',
          'የአፓርታማ ህንፃዎች',
        ],
        features: [
          'ጥራት ያለው የሌሊት እይታ ካሜራ ያለው ደውል',
          'ባለ 7 ወይም 10 ኢንች የቤት ውስጥ ንክኪ ሞኒተር',
          'ከየትኛውም ቦታ በስልክ በር የመክፈት ችሎታ',
          'ከኤሌክትሪክ በር ሞተር እና ከማግኔት ቆልፍ ጋር የሚጣመር',
          'ከጥበቃ ክፍል ወደ ቤት ውስጥ የመደወል ድጋፍ',
          'ያልተመለሱ ጥሪዎችን ፎቶ አንስቶ የማስቀረት አቅም',
        ],
        notes: ['ለአዳዲስ ህንፃዎች በገመድ (IP) የሚሰራ፤ ለተጠናቀቁ ቤቶች ደግሞ ያለ ገመድ (Wi-Fi) አማራጭ አለን።'],
        waMessage:
          'ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ ስማርት ቪዲዮ ኢንተርኮም እና የበር መክፈቻ እፈልጋለሁ። እባክዎ መረጃ ይስጡኝ።',
      },
      'fire-alarm-smoke-detection': {
        title: 'የእሳት እና የጢስ አደጋ ማስጠንቀቂያ (Fire Alarm)',
        short: 'የጢስ መለያ ሴንሰሮች፣ የሙቀት መለያዎች እና የማስጠንቀቂያ ሳይረን ከስልክ ማስጠንቀቂያ ጋር።',
        cta: 'የእሳት አደጋ ጥናት ያስይዙ',
        seoTitle: 'የእሳት እና የጢስ አደጋ መከላከያ ሲስተም በአዲስ አበባ',
        seoDescription:
          'የጢስ እና የሙቀት መለያ ሴንሰሮች፣ የቁጥጥር ፓነል እና የማስጠንቀቂያ ሳይረን ለፋብሪካዎችና ህንፃዎች በአዲስ አበባ።',
        intro:
          'አደጋን ቀድሞ ማወቅ ህይወትንና ንብረትን ያድናል። የጢስ እና የሙቀት ሴንሰሮቻችን እሳት ከመቀጣጠሉ በፊት በሰከንዶች ውስጥ በመለየት ከፍተኛ ሳይረን ያሰማሉ፤ በስልክም ያሳውቃሉ።',
        problem:
          'የኤሌክትሪክ ሾርት እና የሙቀት መብዛት ሌሊት ሰው በሌለበት ሰዓት እሳት ሊያነሱ ይችላሉ። እሳቱ ከውጭ እስኪታይ ድረስ ከፍተኛ ጉዳት ይደርሳል። ቀድሞ የሚያስጠነቅቅ ሲስተም ወሳኝ ነው።',
        goodFor: [
          'ፋብሪካዎች እና የዕቃ መጋዘኖች',
          'የንግድ ማዕከላት እና ሱፐርማርኬቶች',
          'የሰርቨር ክፍሎች እና የባትሪ ባንኮች',
          'ሆቴሎች እና መኖሪያ ግቢዎች',
        ],
        features: [
          'ቀድሞ ጢስን የሚለይ የፎቶኤሌክትሪክ ሴንሰር',
          'ድንገተኛ የሙቀት መጨመርን የሚለይ ሴንሰር',
          'የቦታውን ካርታ የሚያሳይ ማዕከላዊ የቁጥጥር ፓነል',
          'ሰዎችን በፍጥነት የሚያስጠነቅቅ ከፍተኛ የሳይረን ድምጽ',
          'የእጅ የአደጋ ጊዜ ማስጠንቀቂያ መጫኛ (Break-glass)',
          'ከሲሲቲቪ እና ከስልክ ደዋይ ጋር የማገናኘት አማራጭ',
        ],
        notes: ['በኢትዮጵያ ለንግድ ህንፃዎች የሚፈለጉትን የደህንነት መስፈርቶች ያሟላል።'],
        waMessage:
          'ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ የእሳት እና የጢስ አደጋ ማስጠንቀቂያ ሲስተም ለድርጅታችን እፈልጋለሁ። ዋጋ ስንት ነው?',
      },
      'server-room-nvr-video-wall': {
        title: 'ሰርቨር ሩም እና ሴንትራል NVR ቪዲዮ ወል',
        short: 'በራክ ላይ የሚገጠሙ NVRዎች፣ የCAT6 ኔትወርክ ዝርጋታ፣ የሰርቨር ካቢኔቶች እና የጥበቃ ክፍል ቪዲዮ ወል።',
        cta: 'የቪዲዮ ወል እቅድ ይጠይቁ',
        seoTitle: 'የሰርቨር ሩም ሲሲቲቪ ራክ፣ ኔትወርክ እና ቪዲዮ ወል በአዲስ አበባ',
        seoDescription:
          'ለድርጅቶች እና ለኢንዱስትሪዎች የተሟላ የሰርቨር ሩም NVR፣ የተስተካከለ CAT6 ኔትወርክ እና የጥበቃ ክፍል ማሳያ ቪዲዮ ወል ገጠማ።',
        intro:
          'ከ16 እስከ 128+ ካሜራዎች ላሏቸው ትላልቅ ድርጅቶችና ፋብሪካዎች፣ በሰርቨር ራክ ውስጥ የሚቀመጡ NVRዎችን፣ የተስተካከለ ኔትወርክን እና የጥበቃ ክፍል ማሳያ ቪዲዮ ወልን በምህንድስና ደረጃ እንገጥማለን።',
        problem:
          'የተዘበራረቁ ገመዶች፣ የሚግሉ ተራ ዴስክቶፕ መቅረጫዎች እና ያልተረጋጋ የኤሌክትሪክ ኃይል ሲስተሙ ቶሎ እንዲበላሽ ያደርጋሉ። ትላልቅ ተቋማት የተደራጀ የሰርቨር ካቢኔት እና የተለየ የጥበቃ ክፍል እይታ ይፈልጋሉ።',
        goodFor: [
          'የድርጅት ዋና መሥሪያ ቤቶች እና የንግድ ህንፃዎች',
          'ፋብሪካዎች እና የኢንዱስትሪ ፓርኮች (ዱከም፣ ቦሌ ሌሚ)',
          'የሎጂስቲክስ እና የጭነት ማዕከላት',
          'ባንኮች፣ ሆቴሎች እና ዩኒቨርሲቲዎች',
        ],
        features: [
          'በራክ ላይ የሚገጠሙ ባለከፍተኛ አቅም NVRዎች',
          'በቁጥር የተለዩ የCAT6 ኔትወርክ ፓች ፓነል ዝርጋታዎች',
          'ለጥበቃ ክፍል የሚሆን ባለብዙ-ስክሪን HDMI/VGA ቪዲዮ ወል',
          'ማዕከላዊ የኦንላይን UPS ባትሪ ባክአፕ',
          'ንጹህ የኬብል ማኔጅመንት እና አየር የሚያዘዋውር ካቢኔት',
          'ለጥበቃ ሰራተኞች እና ለአስተዳዳሪዎች የተለያየ የይለፍ ቃል ፈቃድ',
        ],
        notes: ['ቦታውን እና የህንፃውን ፕላን በማየት የኔትወርክ ባንድዊድዝ እና የኬብል ርዝመት ስሌት እንሰራለን።'],
        waMessage:
          'ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ የሰርቨር ሩም NVR እና የቪዲዮ ወል ሲስተም ለድርጅታችን እንፈልጋለን። የቴክኒክ ባለሙያ ያነጋግረን።',
      },
    } as Record<string, SolutionTranslation>,
    useCases: {
      home: {
        title: 'መኖሪያ ቤት',
        line: 'ከቤት ርቀው በሚሆኑበት ጊዜም ቤተሰብዎን እና ንብረትዎን ይጠብቁ።',
        seoTitle: 'ለአዲስ አበባ መኖሪያ ቤቶች ተስማሚ የሲሲቲቪ ካሜራዎች',
        seoDescription:
          'የመኖሪያ ቤት ሲሲቲቪ ካሜራ ገጠማ በአዲስ አበባ። ለበር፣ ለግቢ እና ለቪላ ቤቶች፣ የሌሊት እይታ እና በስልክ የመከታተል ድጋፍ።',
        headline: 'ለአዲስ አበባ መኖሪያ ቤቶች ተስማሚ የሲሲቲቪ ካሜራዎች',
        body: 'አብዛኛው የቤት ስርቆት የሚጀምረው በዋናው በር ወይም በግቢው አጥር በኩል ነው። ዋናውን በር፣ ግቢውን እና መግቢያ በሮችን በመሸፈን ቀንና ሌሊት ቤትዎን በስልክዎ መከታተል እንዲችሉ እናደርጋለን።',
        watch: ['ዋና በር እና የግቢ አጥር', 'የፊት እና የኋላ በሮች', 'የመኪና ማቆሚያ እና ጋራጅ', 'ደረጃዎች እና ሳሎን'],
        waMessage: 'ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ ለመኖሪያ ቤቴ የሲሲቲቪ ካሜራ እፈልጋለሁ። እባክዎ ተስማሚ ሲስተም ይምከሩኝ።',
      },
      shop: {
        title: 'ሱቅ እና መደብር',
        line: 'ሰራተኞችን፣ ደንበኞችን እና ንግድዎን ከየትኛውም ቦታ ሆነው ይከታተሉ።',
        seoTitle: 'በአዲስ አበባ ለሚገኙ ሱቆች የሲሲቲቪ ካሜራ ገጠማ',
        seoDescription:
          'ለሱቆች የሚሆን ሲሲቲቪ በአዲስ አበባ። ካውንተርን፣ እቃዎችን እና በሮችን በስልክዎ ይከታተሉ። ለኢንተርኔት እና መብራት ችግር የ4G እና ባትሪ አማራጮች።',
        headline: 'በአዲስ አበባ ለሚገኙ ሱቆች የሲሲቲቪ ካሜራ ገጠማ',
        body: 'የሱቅ ባለቤት ሁልጊዜ በቦታው ላይገኝ ይችላል። በካውንተር፣ በመደርደሪያዎች እና በበር ላይ የሚገጠሙ ካሜራዎች ሽያጭን፣ ሰራተኞችን እና ደንበኞችን በስልክዎ እንዲከታተሉ እንዲሁም ጉድለት ሲከሰት በቂ ማስረጃ እንዲያገኙ ይረዱዎታል።',
        watch: ['ካውንተር እና የገንዘብ መመዝገቢያ ቦታ', 'የዕቃ መደርደሪያዎች እና ስቶክ', 'የመግቢያ በር እና የሱቅ ፊት', 'የዕቃ ማከማቻ ስቶር'],
        waMessage: 'ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ ለሱቄ የሲሲቲቪ ካሜራ እፈልጋለሁ። እባክዎ ተስማሚ ሲስተም ይምከሩኝ።',
      },
      pharmacy: {
        title: 'ፋርማሲ',
        line: 'በ4G እና ባትሪ አማራጭ የመብራት ወይም የኢንተርኔት መቆራረጥ በሚኖርበት ጊዜም ክትትልዎ አይቋረጥም።',
        seoTitle: 'ለአዲስ አበባ ፋርማሲዎች የታመነ የሲሲቲቪ ገጠማ',
        seoDescription:
          'ለፋርማሲ የሚሆን የሲሲቲቪ ገጠማ በአዲስ አበባ። ካውንተር፣ መደርደሪያ እና ስቶርን ይሸፍኑ፤ በ4G እና ባትሪ መብራት ቢጠፋም ስራው ይቀጥላል።',
        headline: 'ለአዲስ አበባ ፋርማሲዎች የታመነ የሲሲቲቪ ገጠማ',
        body: 'ፋርማሲዎች ውድ መድኃኒቶችንና ጥሬ ገንዘብ የሚይዙ ሲሆን አብዛኛዎቹም እስከ ምሽት ክፍት ናቸው። ካውንተሩን፣ መደርደሪያዎችን እና ስቶሩን በመሸፈን፣ መብራት ወይም ኢንተርኔት ቢቋረጥም በ4G እና በባትሪ የሚሰሩ ካሜራዎችን እናቀርባለን።',
        watch: ['የመድኃኒት መስጫ ካውንተር እና ካዝና', 'የመድኃኒት መደርደሪያዎች', 'የመድኃኒት ስቶር እና የኋላ በር', 'ዋና መግቢያ'],
        waMessage: 'ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ ለፋርማሲዬ የሲሲቲቪ ካሜራ እፈልጋለሁ። እባክዎ ተስማሚ ሲስተም ይምከሩኝ።',
      },
      office: {
        title: 'ቢሮ',
        line: 'መግቢያ በሮችን፣ የስራ ክፍሎችን እና አስፈላጊ ቦታዎችን ይቆጣጠሩ።',
        seoTitle: 'በአዲስ አበባ ለሚገኙ ቢሮዎች የተሟላ የሲሲቲቪ ሲስተም',
        seoDescription:
          'የቢሮ ሲሲቲቪ ገጠማ በአዲስ አበባ። መግቢያን፣ እንግዳ መቀበያን እና ኮሪደሮችን በታቀደ ሙያዊ ሲስተም ይሸፍኑ።',
        headline: 'በአዲስ አበባ ለሚገኙ ቢሮዎች የተሟላ የሲሲቲቪ ሲስተም',
        body: 'ቢሮዎች ንጹህና የታሰበበት የገጠማ ስራ ይፈልጋሉ፡ በመግቢያ፣ በእንግዳ መቀበያ፣ ኮሪደር እና ወሳኝ ክፍሎች ላይ ያማረ የገመድ ዝርጋታ እና አስተማማኝ መቅረጫ ያለው ዝግጅት እናደርጋለን።',
        watch: ['መግቢያ በር እና እንግዳ መቀበያ', 'ኮሪደሮች እና ደረጃዎች', 'የፋይናንስ፣ ሰርቨር እና ሰነድ ክፍሎች', 'የመኪና ማቆሚያ'],
        waMessage: 'ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ ለቢሮዬ የሲሲቲቪ ካሜራ እፈልጋለሁ። እባክዎ ተስማሚ ሲስተም ይምከሩኝ።',
      },
      factory: {
        title: 'ፋብሪካ እና መጋዘን',
        line: 'ሰፋፊ ግቢዎችን፣ መጋዘኖችን እና ወሳኝ ቦታዎችን ይቆጣጠሩ።',
        seoTitle: 'ለፋብሪካዎችና መጋዘኖች የሲሲቲቪ ካሜራ ገጠማ በአዲስ አበባ',
        seoDescription:
          'ለፋብሪካዎች፣ መጋዘኖች እና ሰፋፊ ግቢዎች የሲሲቲቪ ገጠማ። ተንቀሳቃሽ PTZ፣ የውጭ እና የሶላር አማራጮች ከባለሙያ ገጠማ ጋር።',
        headline: 'ለፋብሪካዎች፣ መጋዘኖች እና ሰፋፊ ድርጅቶች',
        body: 'ሰፋፊ ድርጅቶች የታሰበበት እቅድ ይፈልጋሉ፡ በዋና በሮች እና ዕቃ መጫኛ ቦታዎች ላይ ቋሚ ካሜራዎች፣ ለሰፊው ግቢ ተንቀሳቃሽ PTZ ካሜራዎች፣ ገመድ ለማይደርስበት ቦታ የሶላር ወይም 4G ካሜራዎችን ቦታውን አይተን እንገጥማለን።',
        watch: ['ዋና በሮች እና ዕቃ መጫኛ/ማውረጃ ቦታዎች', 'የምርት ማምረቻ እና ማከማቻ ክፍሎች', 'የግቢ ዙሪያ አጥር እና ሜዳ', 'የተሽከርካሪ ማቆሚያ'],
        waMessage: 'ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ ለፋብሪካዬ/መጋዘኔ የሲሲቲቪ ካሜራ እፈልጋለሁ። እባክዎ ተስማሚ ሲስተም ይምከሩኝ።',
      },
    } as Record<string, UseCaseTranslation>,
    services: {
      installation: {
        title: 'የሲሲቲቪ ካሜራ ገጠማ',
        text: 'ትክክለኛ የካሜራ አቀማመጥ፣ የገመድ ዝርጋታ፣ መግጠም እና ማስተካከል።',
        detail:
          'ባለሙያዎቻችን እያንዳንዱን ካሜራ ለሚፈልጉት እይታ ተስማሚ በሆነ ቦታ ያስቀምጣሉ፣ ገመዶችን በጥራት ይዘረጋሉ፣ መቅረጫውን እና ካሜራዎቹን ዝግጁ አድርገው አስረክበው ይሄዳሉ።',
        waMessage: 'ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ የሲሲቲቪ ካሜራ ገጠማ ማስያዝ እፈልጋለሁ።',
      },
      design: {
        title: 'የሲሲቲቪ ሲስተም ዲዛይን እና እቅድ',
        text: 'ለቦታዎ እና ለበጀትዎ ተስማሚ ካሜራዎችን እና አቀማመጥን መምረጥ።',
        detail:
          'ቦታዎን እንመለከታለን፣ ካሜራዎች የት መቀመጥ እንዳለባቸው እንወስናለን፣ እንዲሁም ለቦታው፣ ለመብራት እና ኢንተርኔት ሁኔታ እንዲሁም ለበጀትዎ የሚስማማውን መሳሪያ እንመርጣለን።',
        waMessage: 'ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ ለቦታዬ የሚሆን የሲሲቲቪ ሲስተም ለማቀድ ምክር እፈልጋለሁ።',
      },
      'remote-viewing': {
        title: 'በስልክ የመከታተያ አፕሊኬሽን ማስተካከል',
        text: 'ከየትኛውም ቦታ ሆነው በስልክዎ በቀጥታ እንዲመለከቱ እናስተካክላለን።',
        detail:
          'በእርስዎ ስልክ (እንዲሁም ካስፈለገ በቡድንዎ ስልኮች) ላይ የመከታተያ አፕሊኬሽኑን እንጭናለን፣ የቀጥታ ቪዲዮ እና የተቀረጸውን እንዴት ማየት እንደሚችሉ እናሳይዎታለን።',
        waMessage: 'ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ በስልኬ ላይ የሲሲቲቪ እይታ ለማስተካከል እገዛ እፈልጋለሁ።',
      },
      upgrade: {
        title: 'ነባር የሲሲቲቪ ሲስተምን ማሻሻል',
        text: 'የነበረዎትን ሲስተም በተሻሉ ካሜራዎች፣ ተጨማሪ ማከማቻ ወይም የስልክ እይታ ማሳደግ።',
        detail:
          'ከዚህ በፊት የተገጠመ ሲሲቲቪ አለዎት? የጎደለውን ወይም የተበላሸውን ይንገሩን። አዳዲስ ካሜራዎችን መጨመር፣ የምስል ጥራትን ማሻሻል ወይም የስልክ እይታ ማካተት እንችላለን።',
        waMessage: 'ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ ነባር የሲሲቲቪ ሲስተሜን ማሻሻል እፈልጋለሁ።',
      },
      support: {
        title: 'ጥገና እና ቴክኒካዊ ድጋፍ',
        text: 'ፈጣን የችግር መፍቻ እና የዘወትር ድጋፍ።',
        detail:
          'ካሜራ ቢቋረጥ፣ ምስሉ ቢደበዝዝ ወይም በስልክዎ ማየት ቢያስቸግርዎ ያግኙን፤ ወዲያውኑ ችግሩን አጣርተን መፍትሔ እንሰጣለን።',
        waMessage: 'ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ በሲሲቲቪዬ ላይ ችግር ስላጋጠመኝ ድጋፍ እፈልጋለሁ።',
      },
      consultation: {
        title: 'የደህንነት ነፃ ምክክር',
        text: 'ገንዘብ ከማውጣትዎ በፊት ለቦታዎ የሚያስፈልገውን በትክክል ይወቁ።',
        detail:
          'የትኛውን መግዛት እንዳለብዎ እርግጠኛ አይደሉም? መጀመሪያ እኛን ያማክሩ። ስለ ንብረትዎ እና ስለሚያሰጋዎት ነገር እንጠይቃለን፣ ከዚያም አስፈላጊ የሆነውን እና ማስቀረት የሚችሉትን እንነግርዎታለን።',
        waMessage: 'ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ ሲሲቲቪ ከመግዛቴ በፊት ነፃ የደህንነት ምክክር እፈልጋለሁ።',
      },
    } as Record<string, ServiceTranslation>,
    demos: {
      'day-night': { title: 'የቀን እና የሌሊት እይታ ልዩነት', text: 'በቀን ብርሃን እና በድቅድቅ ጨለማ ውስጥ ያለው እይታ ምን እንደሚመስል ይመልከቱ።' },
      'human-detection': { title: 'የሰው እንቅስቃሴ መለያ (Human detection)', text: 'ካሜራው ሰው ሲያገኝ ለይቶ ወደ ስልክዎ ፈጣን ማስጠንቀቂያ ይልካል።' },
      'phone-view': { title: 'በስልክ በቀጥታ የመከታተል አሰራር', text: 'ስልክዎን ከፍተው ንብረትዎን በቅጽበት በቀጥታ ይከታተሉ።' },
      ptz: { title: 'ካሜራውን በስልክ ማሽከርከር', text: 'በስልክዎ ወደ ግራ፣ ቀኝ፣ ላይና ታች እያዘዋወሩ ሰፊ ቦታን ይመልከቱ።' },
      siren: { title: 'የማስጠንቀቂያ ሳይረን እና መብራት', text: 'ያልተፈቀዱ ሰዎችን በድምፅ እና በብርሃን ያስጠነቅቁ።' },
      '4g': { title: 'ያለ ዋይፋይ በሲም ካርድ መስራት', text: 'ምንም አይነት ዋይፋይ በሌለበት ቦታ በሞባይል ዳታ ብቻ የሚሰራ ካሜራ።' },
      battery: { title: 'በመብራት መቆራረጥ ጊዜ መስራት', text: 'መብራት ቢቋረጥም ሳይቋረጥ መቅረፁን ይቀጥላል።' },
      solar: { title: 'ያለ ኤሌክትሪክ ገመድ በፀሐይ ብርሃን መስራት', text: 'ምንም አይነት የኤሌክትሪክ ገመድ የማይፈልግ የውጭ ካሜራ።' },
    } as Record<string, DemoTranslation>,
    faqs: [
      {
        q: 'የሲሲቲቪ ካሜራ ገጠማ ዋጋው ስንት ነው?',
        a: 'እንደ ካሜራው አይነት፣ እንደ ብዛቱ፣ እንደ ቦታው ሁኔታ እና እንደሚያስፈልገው ተጨማሪ ነገር (ለምሳሌ 4G፣ ባትሪ ወይም ሶላር) ይወሰናል። ይደውሉልን ወይም በዋትስአፕ ያናግሩን፤ መጠበቅ የሚፈልጉትን ንብረት ሲነግሩን ግልጽ የሆነ ዋጋ እንሰጥዎታለን።',
      },
      {
        q: 'ካሜራዬን በስልኬ በቀጥታ መመልከት እችላለሁ?',
        a: 'አዎ፣ በስልክ እይታ በሚደግፉ ሲስተሞች ላይ ይችላሉ። የስልክ አፕሊኬሽኑን ራሳችን ገጥመን እንዴት እንደሚጠቀሙ እናሳይዎታለን። በገመድ ለተዘረጉ ካሜራዎች በቦታው ኢንተርኔት ያስፈልጋል፤ የ4G ካሜራዎች ግን የራሳቸውን ሲም ካርድ ይጠቀማሉ።',
      },
      {
        q: 'መብራት ሲጠፋ ካሜራው ይሰራል?',
        a: 'ተራ የሲሲቲቪ ሲስተም መብራት ሲጠፋ ስራ ያቆማል። የመብራት መቆራረጥን ለመቋቋም ውስጣዊ ባትሪ ያላቸው ካሜራዎችን፣ ለተሟሉ ሲስተሞች UPS፣ ወይም የሶላር ካሜራዎችን እንጠቀማለን። የመብራት ሁኔታዎን ሲነግሩን ትክክለኛውን እንመክራለን።',
      },
      {
        q: 'ዋይፋይ (Wi-Fi) ከሌለኝስ?',
        a: 'በ4G / ሲም ካርድ የሚሰሩ ካሜራዎች የሞባይል ዳታ ሲም ተጠቅመው የሚሰሩ በመሆናቸው ዋይፋይ አያስፈልጋቸውም። ለሱቆች፣ ለግንባታ ቦታዎች እና ሩቅ ለሆኑ ቦታዎች ፍቱን ናቸው። በቦታው ያለው የኔትወርክ ጥንካሬ አስፈላጊ በመሆኑ አስቀድመን እንፈትሻለን።',
      },
      {
        q: 'ካሜራዎቹን ራሳችሁ ትገጥማላችሁ?',
        a: 'አዎ። ባለሙያ ቡድናችን አዲስ አበባ ውስጥ ያሉትን ካሜራዎች በሙሉ ራሱ ገጥሞ ዝግጁ ያደርጋል። ከአዲስ አበባ ውጭ ከሆኑ ስለ አካባቢዎ ሁኔታ በስልክ ያናግሩን።',
      },
      {
        q: 'በሱቆች እና በፋርማሲዎች ውስጥ ካሜራ ትገጥማላችሁ?',
        a: 'አዎ። በሱቆች፣ በፋርማሲዎች፣ በቢሮዎች፣ በሬስቶራንቶች፣ በፋብሪካዎች እና በመኖሪያ ቤቶች ውስጥ እንገጥማለን፤ የኢንተርኔት ወይም የመብራት ችግር ባለባቸው ቦታዎች ደግሞ የ4G እና የባትሪ መፍትሔዎችን እንጠቀማለን።',
      },
      {
        q: 'ዋስትና (ጋራንቲ) ትሰጣላችሁ?',
        a: 'አዎ። ሁሉም ካሜራዎቻችን እና የሲሲቲቪ ሲስተሞቻችን አስተማማኝ ዋስትና (ጋራንቲ) አላቸው። የዋስትናው ጊዜ እንደ ካሜራው አይነት የሚወሰን ሲሆን ከመገጠሙ በፊት በዋጋ ዝርዝር (Quotation) ላይ በጽሁፍ ተረጋግጦ ይሰጥዎታል።',
      },
      {
        q: 'ካሜራው በጨለማ (በሌሊት) ያሳያል?',
        a: 'አዎ። ሁሉም ካሜራዎቻችን የሌሊት እይታ (Night Vision) ስላላቸው በጨለማ ውስጥም ሰዎችንና እንቅስቃሴዎችን በግልጽ ያሳያሉ። እስከምን ያህል ርቀት ማየት እንደሚችሉ እንደ ካሜራው አይነት የሚወሰን ሲሆን ካሜራውን ስንመክርዎት በዝርዝር እናስረዳዎታለን።',
      },
    ] as FaqTranslation[],
    installCategories: {
      homes: { title: 'መኖሪያ ቤቶች እና ቪላዎች', text: 'ዋና በሮች፣ የግቢ አጥር፣ መግቢያዎች እና የመኪና ማቆሚያ።' },
      shops: { title: 'ሱቆች እና መደብሮች', text: 'ካውንተሮች፣ መደርደሪያዎች እና መግቢያ በሮች።' },
      pharmacies: { title: 'ፋርማሲዎች', text: 'ካውንተሮች እና ስቶሮች፣ በ4G እና ባትሪ አማራጭ።' },
      offices: { title: 'ቢሮዎች', text: 'መግቢያ በር፣ እንግዳ መቀበያ እና ኮሪደሮች።' },
      factories: { title: 'ፋብሪካዎች እና መጋዘኖች', text: 'ሰፋፊ ግቢዎች፣ ዕቃ መጫኛ ቦታዎች እና ትላልቅ ህንፃዎች።' },
      compounds: { title: 'የውጭ ግቢዎች እና የመኪና ማቆሚያ', text: 'ሰፊ የውጭ ቦታዎች ሙሉ ሽፋን።' },
    } as Record<string, { title: string; text: string }>,
    featured: {
      'solar-cctv': {
        title: 'በፀሐይ ኃይል የሚሰራ የውጭ ካሜራ',
        points: ['በሶላር የሚሰራ', 'ለውጭ ግቢ ተስማሚ', 'በስልክ የሚታይ', 'የሌሊት እይታ', 'የሰው እንቅስቃሴ መለያ'],
        cta: 'የዛሬውን ዋጋ ይጠይቁ',
        waMessage: 'ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ በፀሐይ ኃይል በሚሰራው የውጭ ካሜራ ላይ ፍላጎት አለኝ። የዛሬው ዋጋ ስንት ነው?',
      },
      '4g-sim-cctv': {
        title: 'የ4G ሲም + ባትሪ ሲሲቲቪ ካሜራ',
        points: ['የሲም ካርድ ድጋፍ', 'ውስጣዊ ባትሪ', 'በስልክ የሚታይ', 'ለሱቆችና ዋይፋይ ለሌላቸው ቦታዎች'],
        cta: 'ስለዚህ ካሜራ ይጠይቁ',
        waMessage: 'ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ ስለ 4G ሲም + ባትሪ ሲሲቲቪ ካሜራ መጠየቅ እፈልጋለሁ።',
      },
      'outdoor-cctv': {
        title: 'ባለ 5 ሜጋፒክሰል የውጭ ሲሲቲቪ ካሜራ',
        points: ['5MP ከፍተኛ ጥራት', 'የሌሊት እይታ', 'አስተማማኝ ጥበቃ', 'በስልክ የሚታይ'],
        cta: 'ተስማሚውን ዝግጅት ይጠይቁ',
        waMessage: 'ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ በ5MP የውጭ ሲሲቲቪ ካሜራ ላይ ፍላጎት አለኝ። ተስማሚውን አቀማመጥ ምከሩኝ።',
      },
    },
    about: {
      title: 'ስለ ኢትዮ ስማርት ሴኩሪቲ እና ሲሲቲቪ',
      lead: 'ለቦታዎ ተስማሚውን የሲሲቲቪ ካሜራ የሚመክር፣ በጥራት የሚገጥም እና ከገጠማ በኋላም አስተማማኝ ድጋፍ የሚሰጥ የአዲስ አበባ ቡድን።',
      story1:
        'የሲሲቲቪ ካሜራ በትክክል እንዴት እንደሚሰራ (የሌሊት እይታ፣ በስልክ መከታተል፣ የሶላር እና የ4G ካሜራዎች) በቲክቶክ እና በፌስቡክ አጫጭር ቪዲዮዎችን በማሳየት ጀመርን። በርካታ ደንበኞች እነዚያን ቪዲዮዎች ከተመለከቱ በኋላ ስለሚያገኙን፣ በስልክም ቢሆን ተመሳሳይ እውነተኛ መረጃ እንሰጣለን፡ ለቦታዎ የሚስማማው የትኛው እንደሆነ፣ ዋጋው ምን ያህል እንደሆነ እና ምን ሰርቶ ምን እንደማይሰራ በግልጽ እንነግራለን።',
      story2:
        'መገኛችን አዲስ አበባ መገናኛ፣ ሌም ሆቴል / ፌናሲ ህንፃ አጠገብ ሲሆን ለመኖሪያ ቤቶች፣ ለሱቆች፣ ለፋርማሲዎች፣ ለቢሮዎች፣ ለሬስቶራንቶች፣ ለፋብሪካዎች እና ለህንፃ ባለቤቶች አገልግሎት እንሰጣለን።',
    },
    contact: {
      title: 'ያነጋግሩን',
      lead: 'ፈጣኑ መንገድ መደወል ወይም በዋትስአፕ መልዕክት መላክ ነው። መጠበቅ የሚፈልጉትን ይንገሩን እና ትክክለኛውን መፍትሔ እንመክራለን።',
    },
  },
};
