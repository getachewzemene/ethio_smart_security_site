import { site } from './site';

export type Solution = {
  slug: string;
  icon: string;
  title: string;
  short: string;
  cta: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  intro: string;
  problem: string;
  goodFor: string[];
  features: string[];
  notes: string[];
  useCases: string[];
  waMessage: string;
};

export const solutions: Solution[] = [
  {
    slug: 'outdoor-cctv',
    icon: 'shield',
    title: 'Outdoor CCTV',
    short: 'For compounds, entrances, parking areas and shop fronts.',
    cta: 'Get a recommendation',
    seoTitle: 'Outdoor CCTV Camera Installation in Addis Ababa',
    seoDescription:
      'Weatherproof outdoor CCTV cameras for compounds, gates, parking and shop fronts in Addis Ababa. Night vision, phone viewing and professional installation.',
    keywords: ['outdoor CCTV Addis Ababa', 'security camera Addis Ababa', 'CCTV camera Addis Ababa', 'CCTV installation Ethiopia'],
    intro:
      'Outdoor cameras watch the places a thief has to cross first: the gate, the compound wall, the parking area and the shop front.',
    problem:
      'A camera in the wrong place, or without good night vision, records nothing useful. We choose the camera and the mounting position for your actual compound, not from a catalogue.',
    goodFor: ['Gates and entrances', 'Compounds and walls', 'Parking areas', 'Shop fronts and loading areas'],
    features: ['Weatherproof for rain and dust', 'Night vision', 'Clear 5MP-class video options', 'Watch live from your phone on supported systems'],
    notes: ['Standard wired systems need mains power and (for phone viewing) internet. If either is unreliable, ask us about the 4G, battery or solar options.'],
    useCases: ['home', 'shop', 'factory'],
    waMessage: 'Hello Ethio Smart Security, I want outdoor CCTV cameras. Can you recommend the right system?',
  },
  {
    slug: 'indoor-cctv',
    icon: 'camera',
    title: 'Indoor CCTV',
    short: 'For homes, offices, shops and pharmacies.',
    cta: 'Get a recommendation',
    seoTitle: 'Indoor CCTV Cameras for Homes, Offices & Shops in Addis Ababa',
    seoDescription:
      'Indoor CCTV for homes, offices, shops and pharmacies in Addis Ababa. Discreet cameras, clear video and remote viewing on your phone.',
    keywords: ['indoor CCTV Addis Ababa', 'CCTV for home Addis Ababa', 'CCTV for shops Addis Ababa', 'security cameras Ethiopia'],
    intro: 'Indoor cameras cover the counter, the cash area, the stockroom, the corridor and the living areas of a home.',
    problem:
      'Most losses inside a business happen at the counter, the till or the stockroom. Indoor cameras placed correctly give you evidence and let you check what is happening without being there.',
    goodFor: ['Shop counters and cash areas', 'Pharmacy counters and stockrooms', 'Office entrances and corridors', 'Living areas and nursery rooms'],
    features: ['Compact, discreet design', 'Clear video in low light', 'Watch from your phone on supported systems', 'Some models include two-way audio'],
    notes: ['Tell us the size of the room and what you want to see. That decides the right lens and number of cameras.'],
    useCases: ['home', 'shop', 'pharmacy', 'office'],
    waMessage: 'Hello Ethio Smart Security, I want indoor CCTV cameras. Can you recommend the right system?',
  },
  {
    slug: '4g-sim-cctv',
    icon: 'signal',
    title: '4G / SIM CCTV',
    short: 'For locations without reliable Wi-Fi.',
    cta: 'Ask about 4G cameras',
    seoTitle: '4G SIM CCTV Camera in Ethiopia – No Wi-Fi Needed',
    seoDescription:
      '4G SIM CCTV cameras for Addis Ababa and Ethiopia. Watch live from your phone with no Wi-Fi, ideal for shops, construction sites, farms and remote properties.',
    keywords: ['4G CCTV camera Ethiopia', '4G SIM CCTV Addis Ababa', 'CCTV without WiFi Ethiopia'],
    intro: 'A 4G camera uses a mobile SIM card to send video to your phone, so you do not need Wi-Fi or a router at the location.',
    problem:
      'Many shops, sites and compounds have no Wi-Fi, or the internet keeps dropping. A SIM camera keeps working on its own mobile connection.',
    goodFor: ['Shops and pharmacies with unreliable internet', 'Construction sites', 'Farms and remote compounds', 'Empty properties and warehouses'],
    features: ['Works with a mobile data SIM', 'Live view and playback on your phone', 'Motion alerts on supported models', 'Can be paired with battery or solar'],
    notes: ['You provide an active data SIM. Video quality and data use depend on the network signal at the location, so we check this with you first.'],
    useCases: ['shop', 'pharmacy', 'factory'],
    waMessage: 'Hello Ethio Smart Security, I need a 4G SIM CCTV camera because I have no reliable Wi-Fi. Please advise.',
  },
  {
    slug: 'battery-backup-cctv',
    icon: 'battery',
    title: 'Battery Backup CCTV',
    short: 'For monitoring during power interruptions.',
    cta: 'Ask about battery backup',
    seoTitle: 'Battery Backup CCTV in Addis Ababa – Works During Power Cuts',
    seoDescription:
      'CCTV with battery backup for Addis Ababa homes, shops and pharmacies. Keep recording and viewing when the power goes out.',
    keywords: ['CCTV battery backup Ethiopia', 'CCTV power cut Addis Ababa', 'CCTV with UPS Addis Ababa'],
    intro: 'Power cuts are exactly when a property is most exposed. Battery backup keeps your cameras running when the mains goes off.',
    problem:
      'A standard CCTV system stops when the power stops. Cameras with a built-in battery, or a system with a UPS, keep watching through the outage.',
    goodFor: ['Pharmacies and shops that open late', 'Homes with frequent outages', 'Offices with server or cash rooms'],
    features: ['Keeps cameras running during outages', 'Options: built-in battery cameras or UPS for full systems', 'Can combine with 4G for power plus internet cuts'],
    notes: ['Backup time depends on the camera model, battery size and whether a UPS is used. We tell you the expected runtime before you buy.'],
    useCases: ['pharmacy', 'shop', 'home'],
    waMessage: 'Hello Ethio Smart Security, I want CCTV that keeps working during power cuts. Please recommend.',
  },
  {
    slug: 'solar-cctv',
    icon: 'sun',
    title: 'Solar CCTV',
    short: 'For outdoor places where running power cables is difficult.',
    cta: 'Call for current price',
    seoTitle: 'Solar CCTV Camera in Ethiopia – Outdoor, Wire-Free',
    seoDescription:
      'Solar-powered outdoor CCTV cameras in Ethiopia. No power cable needed, night vision, human detection and remote viewing from your phone. Installed in Addis Ababa.',
    keywords: ['solar CCTV Ethiopia', 'solar security camera Addis Ababa', 'outdoor CCTV no electricity'],
    intro: 'A solar camera charges itself from the sun, so it can watch places where there is no power point.',
    problem:
      'Running cable to a far gate, a yard or a plot costs time and money. Solar cameras remove the cable and keep recording through the night.',
    goodFor: ['Compounds and far gates', 'Plots and construction sites', 'Farms and storage yards', 'Properties where cabling is difficult'],
    features: ['Solar powered, for outdoor use', 'Night vision', 'Human detection on supported models', 'Remote viewing from your phone'],
    notes: ['Needs a position with good daylight. Usually combined with a 4G SIM where there is no Wi-Fi.'],
    useCases: ['factory', 'home', 'shop'],
    waMessage: 'Hello Ethio Smart Security, I am interested in a solar CCTV camera. What is the current price?',
  },
  {
    slug: 'ptz-360-cctv',
    icon: 'move',
    title: 'PTZ / 360° Cameras',
    short: 'For wider areas and remote control.',
    cta: 'Get a recommendation',
    seoTitle: 'PTZ & 360° CCTV Cameras in Addis Ababa',
    seoDescription:
      'PTZ and 360° CCTV cameras in Addis Ababa. Pan, tilt and zoom from your phone to cover yards, parking areas, shops and large spaces.',
    keywords: ['PTZ camera Addis Ababa', '360 CCTV camera Ethiopia', 'rotating security camera Ethiopia'],
    intro: 'A PTZ camera can pan, tilt and zoom. You steer it from your phone to follow movement or check a particular spot.',
    problem:
      'One fixed camera sees one view. A PTZ camera covers a wide area and lets you zoom into detail, which suits yards, parking areas and large shops.',
    goodFor: ['Large compounds and yards', 'Parking areas', 'Big shops and showrooms', 'Warehouses and workshops'],
    features: ['Pan, tilt and zoom from your phone', 'Auto-tracking on supported models', 'Night vision', 'Siren and warning light on selected models'],
    notes: ['A PTZ camera does not replace fixed cameras on key points like gates. We often combine both.'],
    useCases: ['factory', 'shop', 'office'],
    waMessage: 'Hello Ethio Smart Security, I want a PTZ / 360° camera. Please recommend.',
  },
  {
    slug: 'complete-cctv-systems',
    icon: 'server',
    title: 'Complete CCTV Systems',
    short: 'For businesses that need several cameras and professional installation.',
    cta: 'Talk to us',
    seoTitle: 'Complete CCTV Systems & Installation in Addis Ababa',
    seoDescription:
      'Complete multi-camera CCTV systems for businesses in Addis Ababa: planning, cabling, installation, recorder setup and phone viewing.',
    keywords: ['CCTV installation Addis Ababa', 'CCTV installation Ethiopia', 'security systems Addis Ababa', 'CCTV system for business Ethiopia'],
    intro: 'For businesses with several areas to cover, we plan the whole system: cameras, recorder, cabling, power backup and phone access.',
    problem:
      'Cheap mixed equipment and bad cable work are the main reasons CCTV systems fail. A planned system is installed once and keeps working.',
    goodFor: ['Offices and corporate sites', 'Factories and warehouses', 'Restaurants, cafés and hotels', 'Large homes and property owners'],
    features: ['Site visit and camera placement plan', 'Proper cabling and recorder setup', 'Storage sized for your recording needs', 'Phone viewing set up for you and your team', 'After-sales support'],
    notes: ['The price depends on the number of cameras, camera type, cabling distance and installation complexity. We quote after understanding the site.'],
    useCases: ['office', 'factory', 'shop'],
    waMessage: 'Hello Ethio Smart Security, I need a complete CCTV system for my business. Can we talk?',
  },
];

export type UseCase = {
  slug: string;
  icon: string;
  title: string;
  line: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  headline: string;
  body: string;
  watch: string[];
  recommended: string[];
  waMessage: string;
};

export const useCases: UseCase[] = [
  {
    slug: 'home',
    icon: 'home',
    title: 'Home',
    line: 'Protect your family and property even when you are away.',
    seoTitle: 'CCTV for Home in Addis Ababa',
    seoDescription:
      'Home CCTV installation in Addis Ababa. Cameras for gates, compounds and G+2 homes, with night vision and live viewing on your phone.',
    keywords: ['CCTV for home Addis Ababa', 'home security camera Addis Ababa', 'CCTV installation Addis Ababa'],
    headline: 'CCTV for your home in Addis Ababa',
    body: 'Most home break-ins start at the gate or the compound wall. We cover the entrance, the compound and the main doors so you can check your home from your phone, day or night.',
    watch: ['Main gate and compound wall', 'Front and back doors', 'Parking and garage', 'Stairs and living areas'],
    recommended: ['outdoor-cctv', 'indoor-cctv', 'battery-backup-cctv', 'solar-cctv'],
    waMessage: 'Hello Ethio Smart Security, I want CCTV for my home. Please recommend a system.',
  },
  {
    slug: 'shop',
    icon: 'store',
    title: 'Shop',
    line: 'Monitor employees, customers and your business remotely.',
    seoTitle: 'CCTV for Shops in Addis Ababa',
    seoDescription:
      'CCTV installation for shops in Addis Ababa. Watch the counter, stock and entrance from your phone. 4G and battery options for unreliable internet and power.',
    keywords: ['CCTV for shops Addis Ababa', 'shop security camera Ethiopia', 'CCTV for business Addis Ababa'],
    headline: 'CCTV for your shop in Addis Ababa',
    body: 'A shop owner cannot be everywhere. Cameras on the counter, the shelves and the entrance let you see sales, staff and customers from your phone, and give you evidence when something goes missing.',
    watch: ['Counter and cash area', 'Shelves and stock', 'Entrance and shop front', 'Back store or stockroom'],
    recommended: ['indoor-cctv', '4g-sim-cctv', 'battery-backup-cctv', 'complete-cctv-systems'],
    waMessage: 'Hello Ethio Smart Security, I want CCTV for my shop. Please recommend a system.',
  },
  {
    slug: 'pharmacy',
    icon: 'pill',
    title: 'Pharmacy',
    line: 'Keep monitoring even during power or internet problems, with 4G and battery solutions.',
    seoTitle: 'CCTV for Pharmacies in Addis Ababa',
    seoDescription:
      'CCTV for pharmacies in Addis Ababa. Cover the counter, shelves and stockroom, with 4G and battery backup so monitoring continues during power or internet problems.',
    keywords: ['CCTV for pharmacy Addis Ababa', 'pharmacy security camera Ethiopia', 'CCTV installation Addis Ababa'],
    headline: 'CCTV for your pharmacy in Addis Ababa',
    body: 'Pharmacies hold valuable stock and cash, and many open late. We cover the counter, shelves and stockroom, and use 4G and battery solutions so your cameras keep working when the power or the internet does not.',
    watch: ['Pharmacy counter and till', 'Shelves and medicine stock', 'Stockroom and back door', 'Entrance'],
    recommended: ['4g-sim-cctv', 'battery-backup-cctv', 'indoor-cctv', 'complete-cctv-systems'],
    waMessage: 'Hello Ethio Smart Security, I want CCTV for my pharmacy. Please recommend a system.',
  },
  {
    slug: 'office',
    icon: 'building',
    title: 'Office',
    line: 'Monitor entrances, workspaces and important areas.',
    seoTitle: 'CCTV for Offices in Addis Ababa',
    seoDescription:
      'Office CCTV installation in Addis Ababa. Cover entrances, reception, corridors and key rooms with a professionally planned system.',
    keywords: ['CCTV for office Addis Ababa', 'office security system Addis Ababa', 'security systems Addis Ababa'],
    headline: 'CCTV for your office in Addis Ababa',
    body: 'Offices need clean, planned installation: cameras at the entrance, reception, corridors and sensitive rooms, with tidy cabling and a recorder that stores what matters.',
    watch: ['Entrance and reception', 'Corridors and stairs', 'Cash, server and records rooms', 'Parking'],
    recommended: ['complete-cctv-systems', 'indoor-cctv', 'outdoor-cctv', 'ptz-360-cctv'],
    waMessage: 'Hello Ethio Smart Security, I want CCTV for my office. Please recommend a system.',
  },
  {
    slug: 'factory',
    icon: 'factory',
    title: 'Factory',
    line: 'Monitor larger premises and critical areas.',
    seoTitle: 'CCTV for Factories & Warehouses in Addis Ababa',
    seoDescription:
      'CCTV for factories, warehouses and large compounds in Addis Ababa. Wide-area PTZ, outdoor and solar options with professional installation.',
    keywords: ['CCTV for factory Ethiopia', 'warehouse security camera Addis Ababa', 'CCTV installation Ethiopia'],
    headline: 'CCTV for your factory or warehouse',
    body: 'Large premises need a plan: fixed cameras on gates and loading areas, PTZ cameras for wide yards, and solar or 4G where cabling is hard. We survey the site first.',
    watch: ['Gates and loading areas', 'Production and storage floors', 'Perimeter and yard', 'Parking'],
    recommended: ['complete-cctv-systems', 'ptz-360-cctv', 'outdoor-cctv', 'solar-cctv'],
    waMessage: 'Hello Ethio Smart Security, I want CCTV for my factory / warehouse. Please recommend.',
  },
];

export const featured = [
  {
    slug: 'solar-cctv',
    icon: 'sun',
    title: 'Solar Outdoor CCTV',
    points: ['Solar powered', 'Outdoor use', 'Remote viewing', 'Night vision', 'Human detection'],
    cta: 'Call for Current Price',
    waMessage: 'Hello Ethio Smart Security, I am interested in the Solar Outdoor CCTV. What is the current price?',
  },
  {
    slug: '4g-sim-cctv',
    icon: 'signal',
    title: '4G SIM + Battery CCTV',
    points: ['SIM card support', 'Battery backup', 'Remote viewing', 'Suitable for shops and remote locations'],
    cta: 'Ask About This Camera',
    waMessage: 'Hello Ethio Smart Security, I want to ask about the 4G SIM + Battery CCTV camera.',
  },
  {
    slug: 'outdoor-cctv',
    icon: 'shield',
    title: '5MP Outdoor CCTV',
    points: ['5MP resolution', 'Night vision', 'Outdoor protection', 'Remote monitoring'],
    cta: 'Get a Recommendation',
    waMessage: 'Hello Ethio Smart Security, I am interested in the 5MP outdoor CCTV. Please recommend a setup.',
  },
];

export const demos = [
  { key: 'day-night', title: 'Day vs night vision', text: 'See how the same view looks in daylight and in the dark.' },
  { key: 'human-detection', title: 'Human detection', text: 'The camera detects a person and alerts your phone.' },
  { key: 'phone-view', title: 'Remote phone viewing', text: 'Open your phone and see your property live.' },
  { key: 'ptz', title: 'PTZ movement', text: 'Pan, tilt and zoom from your phone.' },
  { key: 'siren', title: 'Siren and warning light', text: 'Deter intruders with sound and light.' },
  { key: '4g', title: '4G / SIM operation', text: 'A working camera with no Wi-Fi at all.' },
  { key: 'battery', title: 'Battery backup', text: 'Keeps recording when the power goes out.' },
  { key: 'solar', title: 'Solar operation', text: 'An outdoor camera with no power cable.' },
];

export const faqs = [
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
    a: 'WARRANTY',
  },
  {
    q: 'Can I see the camera at night?',
    a: 'Yes. Our cameras have night vision, so you can still see people and movement in the dark. How far you can see depends on the camera model and the location, and we will explain this when we recommend a camera.',
  },
];

export const installCategories = [
  { key: 'homes', title: 'Homes and G+2 villas', text: 'Gates, compounds, doors and parking.' },
  { key: 'shops', title: 'Shops', text: 'Counters, shelves and entrances.' },
  { key: 'pharmacies', title: 'Pharmacies', text: 'Counters and stockrooms, with 4G and battery backup.' },
  { key: 'offices', title: 'Offices', text: 'Entrances, reception and corridors.' },
  { key: 'factories', title: 'Factories', text: 'Yards, loading areas and large premises.' },
  { key: 'compounds', title: 'Outdoor compounds and parking', text: 'Wide-area outdoor coverage.' },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}
export function getUseCase(slug: string) {
  return useCases.find((u) => u.slug === slug);
}
export function resolvedFaqs() {
  return faqs.map((f) => (f.a === 'WARRANTY' ? { ...f, a: site.warrantyText } : f));
}


export const services = [
  {
    slug: 'installation',
    icon: 'wrench',
    title: 'CCTV Installation',
    text: 'Professional camera placement, wiring, mounting and configuration.',
    detail: 'Our team positions each camera for the view you need, runs and finishes the cabling, mounts the equipment and configures the recorder and cameras so the system works when we leave.',
    waMessage: 'Hello Ethio Smart Security, I want to book a CCTV installation.',
  },
  {
    slug: 'design',
    icon: 'eye',
    title: 'CCTV System Design',
    text: 'Help choosing camera locations and the appropriate equipment.',
    detail: 'We look at your property, decide where cameras should go, and choose equipment that suits the place, the power and internet situation and your budget.',
    waMessage: 'Hello Ethio Smart Security, I need help designing a CCTV system for my property.',
  },
  {
    slug: 'remote-viewing',
    icon: 'phone',
    title: 'Remote Viewing Setup',
    text: 'We configure your phone and the app so you can monitor from anywhere.',
    detail: 'We install and set up the viewing app on your phone (and your team\'s phones if needed) and show you how to watch live video and playback. Remote viewing needs a supported system and an internet or 4G connection.',
    waMessage: 'Hello Ethio Smart Security, I need help setting up remote viewing on my phone.',
  },
  {
    slug: 'upgrade',
    icon: 'zap',
    title: 'CCTV Upgrade',
    text: 'Improve an existing system with better cameras, storage, remote viewing or more coverage.',
    detail: 'Already have CCTV? Tell us what is wrong or missing. We can add cameras, improve image quality, increase storage or add phone viewing, and tell you honestly what is worth keeping.',
    waMessage: 'Hello Ethio Smart Security, I want to upgrade my existing CCTV system.',
  },
  {
    slug: 'support',
    icon: 'headset',
    title: 'Maintenance & Support',
    text: 'Troubleshooting and ongoing support.',
    detail: 'If a camera goes offline, the image is poor or you cannot view from your phone, contact us and we will help find and fix the problem.',
    waMessage: 'Hello Ethio Smart Security, I have a problem with my CCTV and need support.',
  },
  {
    slug: 'consultation',
    icon: 'shield',
    title: 'Security Consultation',
    text: 'Work out what you actually need before you buy.',
    detail: 'Not sure what to buy? Talk to us first. We ask about your property and your risks, then explain what you need and what you can skip, before you spend money.',
    waMessage: 'Hello Ethio Smart Security, I would like a security consultation before I buy CCTV.',
  },
];
