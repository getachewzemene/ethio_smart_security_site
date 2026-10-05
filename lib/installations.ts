// Add real installation photos here.
// 1. Put the image in /public/installs (e.g. /public/installs/bole-g2-villa.jpg) – JPG/PNG/WebP, ideally 1600px wide.
// 2. Add an entry below. `category` must match a key in installCategories (homes, shops, pharmacies, offices, factories, compounds).
// Until you add entries, the Installations page shows the categories and invites visitors to ask for similar examples on WhatsApp.
export type Installation = {
  image: string;
  alt: string;
  title: string;
  location: string; // e.g. "Bole, Addis Ababa"
  category: 'homes' | 'shops' | 'pharmacies' | 'offices' | 'factories' | 'compounds';
  detail?: string; // e.g. "4 outdoor 5MP cameras + phone viewing"
  width?: number;
  height?: number;
};

export const installations: Installation[] = [];

// Real customer reviews only. Add after getting permission.
export type Review = { name: string; place: string; text: string; image?: string };
export const reviews: Review[] = [];

// Demo media. Drop MP4 files in /public/demos named after the demo key (e.g. day-night.mp4)
// and list the keys here. Optional TikTok/Facebook links open the original post.
export const demoMedia: Record<string, { video?: string; poster?: string; link?: string }> = {
  // 'day-night': { video: '/demos/day-night.mp4', poster: '/demos/day-night.jpg', link: 'https://www.tiktok.com/@.../video/...' },
};
