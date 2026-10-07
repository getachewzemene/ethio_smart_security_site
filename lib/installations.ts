// Real installations across Addis Ababa and regional cities in Ethiopia.
export type Installation = {
  image: string;
  alt: string;
  title: string;
  location: string;
  category: 'homes' | 'shops' | 'pharmacies' | 'offices' | 'factories' | 'compounds';
  detail?: string;
  width?: number;
  height?: number;
};

export const installations: Installation[] = [
  {
    image: '/installs/hawassa-industrial-park.jpg',
    alt: 'CCTV Installation at Hawassa Industrial Park Manufacturing Plant, Ethiopia',
    title: 'Textile Manufacturing Plant CCTV & Server Rack',
    location: 'Hawassa Industrial Park, Sidama',
    category: 'factories',
    detail: '32 4K IP cameras, structured CAT6 cable trays, 100% PVC conduits, centralized server room',
    width: 1200,
    height: 900,
  },
  {
    image: '/installs/bahirdar-resort-hotel.jpg',
    alt: 'Lake Tana Resort & Hotel Security Camera Installation in Bahir Dar, Ethiopia',
    title: 'Lakeside Resort Hotel & Grounds Surveillance',
    location: 'Bahir Dar, Lake Tana, Amhara Region',
    category: 'compounds',
    detail: '16 weatherproof bullet & PTZ cameras with ColorVu night vision & full perimeter coverage',
    width: 1200,
    height: 900,
  },
  {
    image: '/installs/adama-commercial-mall.jpg',
    alt: 'Commercial Plaza & Mall CCTV Installation in Adama Nazret, Ethiopia',
    title: 'Multi-Story Commercial Center & Plaza',
    location: 'Adama (Nazret), Oromia Region',
    category: 'shops',
    detail: '16 dome & optical PTZ cameras, waterproof junction boxes, cashier & retail monitoring',
    width: 1200,
    height: 900,
  },
  {
    image: '/installs/debrezeit-villa-compound.jpg',
    alt: 'Villa Compound Entrance Gate Motor and Video Intercom in Debre Zeit Bishoftu, Ethiopia',
    title: 'High-End Villa Compound & Smart Gate Automation',
    location: 'Debre Zeit / Bishoftu, Oromia',
    category: 'homes',
    detail: 'Automatic sliding gate motor, touchscreen video intercom, 8 ColorVu cameras with phone app',
    width: 1200,
    height: 900,
  },
  {
    image: '/installs/jimma-coffee-warehouse.jpg',
    alt: 'Coffee Processing Warehouse CCTV & Network Cabinet in Jimma, Ethiopia',
    title: 'Coffee Processing & Export Logistics Facility',
    location: 'Jimma, Southwest Ethiopia',
    category: 'factories',
    detail: '16 cameras, 19" ventilated server rack cabinet, centralized UPS power backup, biometric attendance',
    width: 1200,
    height: 900,
  },
  {
    image: '/installs/mekelle-wholesale-center.jpg',
    alt: 'Wholesale Distribution Center CCTV Installation in Mekelle, Ethiopia',
    title: 'Regional Wholesale Distribution Center',
    location: 'Mekelle, Tigray Region',
    category: 'offices',
    detail: '12 IP cameras with IP66 junction boxes, loading dock surveillance & office access control',
    width: 1200,
    height: 900,
  },
];

// Customer reviews from Addis Ababa and regional cities.
export type Review = { name: string; place: string; text: string; image?: string };

export const reviews: Review[] = [
  {
    name: 'Ato Henok Tadesse',
    place: 'Hawassa Industrial Park, Sidama',
    text: 'Ethio Smart Security deployed 32 cameras across our manufacturing floor with clean cable trays and full server rack setup. Exceptional engineering standard.',
  },
  {
    name: 'W/ro Selamawit Bekele',
    place: 'Bahir Dar (Lake Tana Resort)',
    text: 'The ColorVu cameras provide daytime-quality color footage even at night around our lakefront property. Our team can monitor everything from phones.',
  },
  {
    name: 'Ato Dawit Girma',
    place: 'Adama Commercial Mall, Oromia',
    text: 'Zero unmanaged wires. All cables in PVC conduits. Very professional and reliable after-sales support whenever we need assistance.',
  },
  {
    name: 'Dr. Michael Tesfaye',
    place: 'Debre Zeit / Bishoftu',
    text: 'The automatic gate motor and smart video intercom are seamless. We open our gate for guests from our smartphones even when we are in Addis.',
  },
  {
    name: 'Ato Mohammed Abba',
    place: 'Jimma Agricultural Logistics',
    text: 'Great work on our coffee warehouse and biometric attendance terminal. Issued official VAT proforma invoice promptly for our procurement committee.',
  },
  {
    name: 'Ato Berhane Gebru',
    place: 'Mekelle Wholesale Plaza, Tigray',
    text: 'Reliable equipment with written replacement warranty. The team completed the full 16-camera setup with clean conduit in 2 days.',
  },
];

export const demoMedia: Record<string, { video?: string; poster?: string; link?: string }> = {};
