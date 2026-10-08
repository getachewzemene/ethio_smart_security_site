// Real installations across Addis Ababa and regional cities in Ethiopia.
export type Installation = {
  image: string;
  alt: string;
  title: string;
  titleAm?: string;
  location: string;
  locationAm?: string;
  category: 'homes' | 'shops' | 'pharmacies' | 'offices' | 'factories' | 'compounds';
  detail?: string;
  detailAm?: string;
  tags?: string[];
  tagsAm?: string[];
  width?: number;
  height?: number;
};

export const installations: Installation[] = [
  {
    image: '/installs/hawassa-industrial-park.jpg',
    alt: 'CCTV Installation at Hawassa Industrial Park Manufacturing Plant, Ethiopia',
    title: 'Textile Manufacturing Plant CCTV & Server Rack',
    titleAm: 'የጨርቃጨርቅ ፋብሪካ ሲሲቲቪ እና ሰርቨር ሩም',
    location: 'Hawassa Industrial Park, Sidama',
    locationAm: 'ሀዋሳ ኢንዱስትሪ ፓርክ፣ ሲዳማ',
    category: 'factories',
    detail: '32 4K IP cameras, structured CAT6 cable trays, 100% PVC conduits, centralized server room',
    detailAm: '32 ባለ 4K አይፒ ካሜራዎች፣ የኬብል ትሬይ፣ 100% የPVC ቱቦዎች፣ ማዕከላዊ የሰርቨር ክፍል',
    tags: ['32 4K IP Cameras', 'CAT6 Trays', '100% PVC Conduits', 'Server Room'],
    tagsAm: ['32 ባለ 4K ካሜራዎች', 'የኬብል ትሬይ', '100% ኮንዱይት', 'የሰርቨር ክፍል'],
    width: 1200,
    height: 900,
  },
  {
    image: '/installs/bahirdar-resort-hotel.jpg',
    alt: 'Lake Tana Resort & Hotel Security Camera Installation in Bahir Dar, Ethiopia',
    title: 'Lakeside Resort Hotel & Grounds Surveillance',
    titleAm: 'የጣና ሐይቅ ዳርቻ ሪዞርትና ሆቴል የደህንነት ካሜራ',
    location: 'Bahir Dar, Lake Tana, Amhara Region',
    locationAm: 'ባህር ዳር (ጣና ሐይቅ)፣ አማራ ክልል',
    category: 'compounds',
    detail: '16 weatherproof bullet & PTZ cameras with ColorVu night vision & full perimeter coverage',
    detailAm: '16 ዝናብና ፀሐይ መቋቋም የሚችሉ ካሜራዎች በColorVu ሙሉ ቀለም የሌሊት እይታ',
    tags: ['16 Bullet & PTZ', 'ColorVu Night Vision', 'Weatherproof', 'Perimeter'],
    tagsAm: ['16 የውጭ ካሜራዎች', 'የColorVu ሌሊት እይታ', 'ዝናብ መቋቋም', 'የግቢ አጥር'],
    width: 1200,
    height: 900,
  },
  {
    image: '/installs/adama-commercial-mall.jpg',
    alt: 'Commercial Plaza & Mall CCTV Installation in Adama Nazret, Ethiopia',
    title: 'Multi-Story Commercial Center & Plaza',
    titleAm: 'ባለብዙ ፎቅ የንግድ ማዕከልና ሞል',
    location: 'Adama (Nazret), Oromia Region',
    locationAm: 'አዳማ (ናዝሬት)፣ ኦሮሚያ',
    category: 'shops',
    detail: '16 dome & optical PTZ cameras, waterproof junction boxes, cashier & retail monitoring',
    detailAm: '16 ዶም እና PTZ ካሜራዎች፣ ውሃ የማያስገቡ ጃንክሽን ቦክሶች፣ የካውንተር ክትትል',
    tags: ['16 Dome & PTZ', 'Cashier Monitoring', 'IP66 Junction Boxes', 'Retail'],
    tagsAm: ['16 ዶም እና PTZ', 'የካውንተር ክትትል', 'IP66 ጃንክሽን', 'የገበያ አዳራሽ'],
    width: 1200,
    height: 900,
  },
  {
    image: '/installs/debrezeit-villa-compound.jpg',
    alt: 'Villa Compound Entrance Gate Motor and Video Intercom in Debre Zeit Bishoftu, Ethiopia',
    title: 'High-End Villa Compound & Smart Gate Automation',
    titleAm: 'ቪላ ግቢ እና አውቶማቲክ ተንሸራታች የበር ሞተር',
    location: 'Debre Zeit / Bishoftu, Oromia',
    locationAm: 'ደብረ ዘይት / ቢሾፍቱ፣ ኦሮሚያ',
    category: 'homes',
    detail: 'Automatic sliding gate motor, touchscreen video intercom, 8 ColorVu cameras with phone app',
    detailAm: 'አውቶማቲክ በር ሞተር፣ በቪዲዮ የሚያሳይ ኢንተርኮም፣ 8 የColorVu ካሜራዎች በሞባይል መተግበሪያ',
    tags: ['Smart Gate Motor', 'Video Intercom', '8 ColorVu Cameras', 'Phone App'],
    tagsAm: ['የበር ሞተር', 'ቪዲዮ ኢንተርኮም', '8 ColorVu ካሜራዎች', 'በስልክ መቆጣጠሪያ'],
    width: 1200,
    height: 900,
  },
  {
    image: '/installs/jimma-coffee-warehouse.jpg',
    alt: 'Coffee Processing Warehouse CCTV & Network Cabinet in Jimma, Ethiopia',
    title: 'Coffee Processing & Export Logistics Facility',
    titleAm: 'የቡና ማቀነባበሪያና ኤክስፖርት መጋዘን',
    location: 'Jimma, Southwest Ethiopia',
    locationAm: 'ጅማ፣ ደቡብ ምዕራብ ኢትዮጵያ',
    category: 'factories',
    detail: '16 cameras, 19" ventilated server rack cabinet, centralized UPS power backup, biometric attendance',
    detailAm: '16 ካሜራዎች፣ 19" የሰርቨር ካቢኔ፣ ማዕከላዊ የUPS ኃይል ድጋፍ፣ የጣት አሻራ መቆጣጠሪያ',
    tags: ['16 IP Cameras', '19" Rack Cabinet', 'Centralized UPS', 'Biometrics'],
    tagsAm: ['16 ካሜራዎች', '19" ሰርቨር ካቢኔ', 'የUPS ኃይል ድጋፍ', 'የጣት አሻራ'],
    width: 1200,
    height: 900,
  },
  {
    image: '/installs/mekelle-wholesale-center.jpg',
    alt: 'Wholesale Distribution Center CCTV Installation in Mekelle, Ethiopia',
    title: 'Regional Wholesale Distribution Center',
    titleAm: 'የክልል የጅምላ ንግድ ማከፋፈያ ማዕከል',
    location: 'Mekelle, Tigray Region',
    locationAm: 'መቐለ፣ ትግራይ ክልል',
    category: 'offices',
    detail: '12 IP cameras with IP66 junction boxes, loading dock surveillance & office access control',
    detailAm: '12 አይፒ ካሜራዎች፣ IP66 ጃንክሽን ቦክሶች፣ የዕቃ መጫኛ ክትትልና የቢሮ መቆጣጠሪያ',
    tags: ['12 IP Cameras', 'IP66 Mounts', 'Loading Docks', 'Access Control'],
    tagsAm: ['12 አይፒ ካሜራዎች', 'የዕቃ መጫኛ ክትትል', 'የበር መቆጣጠሪያ', 'ማከፋፈያ'],
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
