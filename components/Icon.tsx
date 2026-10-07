import {
  Home, Store, Pill, Building2, Factory, Sun, Camera, Signal, BatteryCharging, Move, Server, ShieldCheck,
  Eye, Wrench, Headset, MapPin, Smartphone, Check, ArrowRight, PlayCircle, Zap, Moon, ScanFace, Siren, Radio,
  Fingerprint, Flame, Bell, Monitor, Lock,
} from 'lucide-react';

const map = {
  home: Home, store: Store, pill: Pill, building: Building2, factory: Factory, sun: Sun, camera: Camera,
  signal: Signal, battery: BatteryCharging, move: Move, server: Server, shield: ShieldCheck, eye: Eye,
  wrench: Wrench, headset: Headset, pin: MapPin, phone: Smartphone, check: Check, arrow: ArrowRight,
  play: PlayCircle, zap: Zap, moon: Moon, face: ScanFace, siren: Siren, radio: Radio,
  fingerprint: Fingerprint, flame: Flame, bell: Bell, monitor: Monitor, lock: Lock,
} as const;

export type IconName = keyof typeof map;

export default function Icon({ name, size = 24, className }: { name: string; size?: number; className?: string }) {
  const C = map[name as IconName] || Camera;
  return <C size={size} className={className} aria-hidden strokeWidth={1.9} />;
}
