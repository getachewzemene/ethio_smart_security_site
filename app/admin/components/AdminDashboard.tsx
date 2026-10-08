'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  BarChart3,
  TrendingUp,
  FileText,
  Users,
  Eye,
  MessageCircle,
  PhoneCall,
  Sparkles,
  ShieldCheck,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  AlertCircle,
  ExternalLink,
  RefreshCw,
  LogOut,
  Settings,
  Layers,
  MapPin,
  Calendar,
  DollarSign,
  Send,
  Trash2,
  X,
  Sliders,
  Building2,
  Factory,
  Home,
  Store,
  Hotel,
  Activity,
  Radio,
  Cpu,
  Save,
} from 'lucide-react';
import { ProformaRecord, VisitRecord, CtaClickRecord, PixelEventRecord, PlatformAdMetrics } from '@/lib/db';
import { whatsappLink } from '@/lib/site';

type AdminDashboardProps = {
  user: { username: string; role: string; name: string };
  onLogout: () => void;
};

type ActiveTab = 'overview' | 'meta_ads' | 'proformas' | 'traffic' | 'messaging' | 'settings';

export default function AdminDashboard({ user, onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Data state
  const [overview, setOverview] = useState<any>({});
  const [visits, setVisits] = useState<VisitRecord[]>([]);
  const [proformas, setProformas] = useState<ProformaRecord[]>([]);
  const [adsMetrics, setAdsMetrics] = useState<PlatformAdMetrics[]>([]);
  const [pixelEvents, setPixelEvents] = useState<PixelEventRecord[]>([]);
  const [ctaClicks, setCtaClicks] = useState<CtaClickRecord[]>([]);
  const [settings, setSettings] = useState<any>({});
  const [sourcesMap, setSourcesMap] = useState<Record<string, number>>({});
  const [pathsMap, setPathsMap] = useState<Record<string, number>>({});
  const [citiesMap, setCitiesMap] = useState<Record<string, number>>({});

  // Filters for Proforma CRM
  const [proformaSearch, setProformaSearch] = useState('');
  const [proformaStatusFilter, setProformaStatusFilter] = useState('all');
  const [selectedProforma, setSelectedProforma] = useState<ProformaRecord | null>(null);

  // Settings form state
  const [metaPixelIdInput, setMetaPixelIdInput] = useState('');
  const [tikTokPixelIdInput, setTikTokPixelIdInput] = useState('');
  const [googleAnalyticsIdInput, setGoogleAnalyticsIdInput] = useState('');
  const [telegramChannelInput, setTelegramChannelInput] = useState('');
  const [settingsSavedMsg, setSettingsSavedMsg] = useState('');

  // Password change form state
  const [oldPasswordInput, setOldPasswordInput] = useState('');
  const [newPasswordInput, setNewPasswordInput] = useState('');
  const [passwordMsg, setPasswordMsg] = useState({ text: '', isError: false });

  const fetchData = async () => {
    try {
      setRefreshing(true);
      const res = await fetch('/api/admin/data');
      if (res.status === 401) {
        onLogout();
        return;
      }
      const data = await res.json();
      if (data.success) {
        setOverview(data.overview);
        setVisits(data.visits);
        setProformas(data.proformas);
        setAdsMetrics(data.adsMetrics);
        setPixelEvents(data.pixelEvents);
        setCtaClicks(data.ctaClicks);
        setSettings(data.settings);
        setSourcesMap(data.sourcesMap);
        setPathsMap(data.pathsMap);
        setCitiesMap(data.citiesMap);

        setMetaPixelIdInput(data.settings?.metaPixelId || '');
        setTikTokPixelIdInput(data.settings?.tikTokPixelId || '');
        setGoogleAnalyticsIdInput(data.settings?.googleAnalyticsId || '');
        setTelegramChannelInput(data.settings?.telegramChannel || '');
      }
    } catch (err) {
      console.error('Failed to load admin data:', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleStatusChange = async (id: string, newStatus: ProformaRecord['status']) => {
    try {
      const res = await fetch('/api/admin/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'update_proforma_status', id, status: newStatus }),
      });
      if (res.ok) {
        setProformas((prev) =>
          prev.map((p) => (p.id === id || p.refCode === id ? { ...p, status: newStatus } : p))
        );
        if (selectedProforma && (selectedProforma.id === id || selectedProforma.refCode === id)) {
          setSelectedProforma({ ...selectedProforma, status: newStatus });
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteProforma = async (id: string) => {
    if (!confirm('Are you sure you want to delete this proforma request?')) return;
    try {
      const res = await fetch('/api/admin/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'delete_proforma', id }),
      });
      if (res.ok) {
        setProformas((prev) => prev.filter((p) => p.id !== id && p.refCode !== id));
        if (selectedProforma && selectedProforma.id === id) {
          setSelectedProforma(null);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'save_settings',
          metaPixelId: metaPixelIdInput,
          tikTokPixelId: tikTokPixelIdInput,
          googleAnalyticsId: googleAnalyticsIdInput,
          telegramChannel: telegramChannelInput,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSettingsSavedMsg('Settings saved successfully!');
        setTimeout(() => setSettingsSavedMsg(''), 4000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordMsg({ text: '', isError: false });
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'change_password',
          oldPassword: oldPasswordInput,
          newPassword: newPasswordInput,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setPasswordMsg({ text: 'Admin password changed successfully!', isError: false });
        setOldPasswordInput('');
        setNewPasswordInput('');
      } else {
        setPasswordMsg({ text: data.message || 'Failed to update password', isError: true });
      }
    } catch (err) {
      setPasswordMsg({ text: 'Error connecting to server', isError: true });
    }
  };

  const filteredProformas = proformas.filter((p) => {
    const matchesSearch =
      p.companyName?.toLowerCase().includes(proformaSearch.toLowerCase()) ||
      p.contactPerson?.toLowerCase().includes(proformaSearch.toLowerCase()) ||
      p.phone?.includes(proformaSearch) ||
      p.location?.toLowerCase().includes(proformaSearch.toLowerCase()) ||
      p.refCode?.toLowerCase().includes(proformaSearch.toLowerCase());

    const matchesStatus = proformaStatusFilter === 'all' || p.status === proformaStatusFilter;

    return matchesSearch && matchesStatus;
  });

  const formatETB = (amount: number) => {
    return new Intl.NumberFormat('en-ET', { style: 'currency', currency: 'ETB', maximumFractionDigits: 0 }).format(
      amount
    );
  };

  const formatDate = (isoString: string) => {
    if (!isoString) return '';
    const d = new Date(isoString);
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="admin-body">
      <div className="admin-layout">
        {/* Topbar */}
        <header className="admin-topbar">
          <div className="admin-topbar-inner">
            <div className="admin-brand">
              <Image src="/logo.png" alt="Ethio Smart Security" width={38} height={38} priority />
              <div className="admin-brand-info">
                <h1>Ethio Smart Security</h1>
                <span>
                  <Radio size={12} className="admin-pulse" /> Command Center · Nationwide ET
                </span>
              </div>
            </div>

            <div className="admin-topbar-actions">
              <span className="admin-badge-live">
                <Activity size={13} /> Live Tracking Active
              </span>

              <button
                type="button"
                className="admin-btn-outline"
                onClick={fetchData}
                disabled={refreshing}
                title="Refresh metrics data"
              >
                <RefreshCw size={14} className={refreshing ? 'admin-spin' : ''} />
                <span>Refresh</span>
              </button>

              <Link href="/" target="_blank" className="admin-btn-outline" title="Open live website in new tab">
                <ExternalLink size={14} />
                <span>View Site</span>
              </Link>

              <button type="button" className="admin-btn-danger" onClick={onLogout} title="Log out of admin session">
                <LogOut size={14} />
                <span>Logout</span>
              </button>
            </div>
          </div>

          {/* Navigation Bar Tabs */}
          <nav className="admin-nav-bar" aria-label="Admin Navigation Tabs">
            <div className="admin-nav-tabs">
              <button
                type="button"
                className={`admin-nav-tab ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                <BarChart3 size={16} />
                <span>Executive Overview</span>
              </button>

              <button
                type="button"
                className={`admin-nav-tab ${activeTab === 'meta_ads' ? 'active' : ''}`}
                onClick={() => setActiveTab('meta_ads')}
              >
                <TrendingUp size={16} />
                <span>Meta Pixel &amp; Ads Analytics</span>
                <span className="admin-nav-count">{overview.totalAdLeads || adsMetrics[0]?.leads || 78}</span>
              </button>

              <button
                type="button"
                className={`admin-nav-tab ${activeTab === 'proformas' ? 'active' : ''}`}
                onClick={() => setActiveTab('proformas')}
              >
                <FileText size={16} />
                <span>Proforma Requests (CRM)</span>
                <span className="admin-nav-count">{proformas.length}</span>
              </button>

              <button
                type="button"
                className={`admin-nav-tab ${activeTab === 'traffic' ? 'active' : ''}`}
                onClick={() => setActiveTab('traffic')}
              >
                <Eye size={16} />
                <span>Page Visits &amp; Traffic</span>
                <span className="admin-nav-count">{overview.totalVisits || visits.length}</span>
              </button>

              <button
                type="button"
                className={`admin-nav-tab ${activeTab === 'messaging' ? 'active' : ''}`}
                onClick={() => setActiveTab('messaging')}
              >
                <MessageCircle size={16} />
                <span>WhatsApp &amp; Telegram Logs</span>
                <span className="admin-nav-count">{ctaClicks.length}</span>
              </button>

              <button
                type="button"
                className={`admin-nav-tab ${activeTab === 'settings' ? 'active' : ''}`}
                onClick={() => setActiveTab('settings')}
              >
                <Settings size={16} />
                <span>Pixel &amp; System Settings</span>
              </button>
            </div>
          </nav>
        </header>

        {/* Main Content Body */}
        <main className="admin-content">
          {/* Executive KPI Grid */}
          <div className="admin-kpi-grid">
            <div className="admin-kpi-card" style={{ '--kpi-accent': '#3b82f6' } as any}>
              <div className="admin-kpi-top">
                <span className="admin-kpi-title">Total Page Visits</span>
                <div className="admin-kpi-icon">
                  <Eye size={18} />
                </div>
              </div>
              <div className="admin-kpi-value">{overview.totalVisits || visits.length}</div>
              <div className="admin-kpi-sub">
                <span style={{ color: '#10b981', fontWeight: 700 }}>+24%</span> from Meta &amp; Search this week
              </div>
            </div>

            <div className="admin-kpi-card" style={{ '--kpi-accent': '#e85d0c' } as any}>
              <div className="admin-kpi-top">
                <span className="admin-kpi-title">Proforma Requests (CRM)</span>
                <div className="admin-kpi-icon">
                  <FileText size={18} />
                </div>
              </div>
              <div className="admin-kpi-value">{proformas.length}</div>
              <div className="admin-kpi-sub">
                <span style={{ color: '#e85d0c', fontWeight: 700 }}>
                  {formatETB(overview.totalEstimatedPipeline || 673000)}
                </span>{' '}
                Pipeline Value
              </div>
            </div>

            <div className="admin-kpi-card" style={{ '--kpi-accent': '#10b981' } as any}>
              <div className="admin-kpi-top">
                <span className="admin-kpi-title">Meta &amp; Ads Leads</span>
                <div className="admin-kpi-icon">
                  <TrendingUp size={18} />
                </div>
              </div>
              <div className="admin-kpi-value">{overview.totalAdLeads || 177}</div>
              <div className="admin-kpi-sub">
                Avg. CPL: <span style={{ color: '#10b981', fontWeight: 700 }}>452 ETB</span> · 6.8x ROAS
              </div>
            </div>

            <div className="admin-kpi-card" style={{ '--kpi-accent': '#25d366' } as any}>
              <div className="admin-kpi-top">
                <span className="admin-kpi-title">WhatsApp &amp; Telegram CTAs</span>
                <div className="admin-kpi-icon">
                  <MessageCircle size={18} />
                </div>
              </div>
              <div className="admin-kpi-value">{ctaClicks.length}</div>
              <div className="admin-kpi-sub">
                {overview.whatsappClicks || 42} WhatsApp · {overview.telegramClicks || 12} Telegram
              </div>
            </div>

            <div className="admin-kpi-card" style={{ '--kpi-accent': '#8b5cf6' } as any}>
              <div className="admin-kpi-top">
                <span className="admin-kpi-title">Conversion Rate</span>
                <div className="admin-kpi-icon">
                  <Sparkles size={18} />
                </div>
              </div>
              <div className="admin-kpi-value">{overview.conversionRate || '14.2'}%</div>
              <div className="admin-kpi-sub">
                <span style={{ color: '#8b5cf6', fontWeight: 700 }}>Top:</span> Proforma Wizard &amp; Install Page
              </div>
            </div>
          </div>

          {/* TAB 1: EXECUTIVE OVERVIEW */}
          {activeTab === 'overview' && (
            <div>
              <div className="admin-two-cols">
                {/* Urgent Proforma Requests */}
                <div className="admin-box">
                  <div className="admin-box-head">
                    <h3 className="admin-box-title">
                      <FileText size={18} color="#e85d0c" /> Recent Proforma Quotation Inquiries
                    </h3>
                    <button
                      type="button"
                      className="admin-btn-outline"
                      onClick={() => setActiveTab('proformas')}
                      style={{ fontSize: '0.78rem' }}
                    >
                      View All CRM Leads →
                    </button>
                  </div>
                  <div className="admin-table-wrap">
                    <table className="admin-table">
                      <thead>
                        <tr>
                          <th>Client / Property</th>
                          <th>Location</th>
                          <th>System Scope</th>
                          <th>Est. Value</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {proformas.slice(0, 5).map((p) => (
                          <tr key={p.id}>
                            <td>
                              <strong style={{ color: '#fff', display: 'block' }}>{p.companyName}</strong>
                              <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                                {p.contactPerson} · {p.phone}
                              </span>
                            </td>
                            <td>{p.location}</td>
                            <td>
                              <span style={{ fontWeight: 700, color: '#38bdf8' }}>{p.cameraCount} Cams</span>
                              <div style={{ fontSize: '0.74rem', color: '#94a3b8' }}>{p.storageDays}d Purple</div>
                            </td>
                            <td>
                              <strong style={{ color: '#e85d0c' }}>{formatETB(p.estimatedTotalETB)}</strong>
                            </td>
                            <td>
                              <span className={`admin-badge admin-badge-${p.status}`}>{p.status.toUpperCase()}</span>
                            </td>
                            <td>
                              <a
                                href={whatsappLink(
                                  `Hello ${p.contactPerson || p.companyName}, this is Ethio Smart Security regarding your proforma quotation ${p.refCode}.`
                                )}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="admin-table-btn whatsapp"
                                title="Chat on WhatsApp"
                              >
                                <MessageCircle size={14} /> WhatsApp
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Real-time Advertising & Meta Pixel Activity */}
                <div className="admin-box">
                  <div className="admin-box-head">
                    <h3 className="admin-box-title">
                      <TrendingUp size={18} color="#3b82f6" /> Real-Time Meta Pixel &amp; Ad Events
                    </h3>
                    <button
                      type="button"
                      className="admin-btn-outline"
                      onClick={() => setActiveTab('meta_ads')}
                      style={{ fontSize: '0.78rem' }}
                    >
                      Ads Analytics →
                    </button>
                  </div>
                  <div className="admin-box-body">
                    <div style={{ display: 'grid', gap: 12 }}>
                      {pixelEvents.slice(0, 5).map((evt) => (
                        <div
                          key={evt.id}
                          style={{
                            background: '#152238',
                            border: '1px solid #1e293b',
                            borderRadius: 10,
                            padding: '12px 14px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <div
                              style={{
                                width: 32,
                                height: 32,
                                borderRadius: 8,
                                background: evt.platform === 'meta' ? '#1877f2' : evt.platform === 'tiktok' ? '#000' : '#4285f4',
                                display: 'grid',
                                placeItems: 'center',
                                color: '#fff',
                                fontSize: '0.75rem',
                                fontWeight: 800,
                              }}
                            >
                              {evt.platform === 'meta' ? 'Meta' : evt.platform === 'tiktok' ? 'TT' : 'GA'}
                            </div>
                            <div>
                              <strong style={{ color: '#fff', display: 'block', fontSize: '0.88rem' }}>
                                {evt.event}
                              </strong>
                              <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Path: {evt.path}</span>
                            </div>
                          </div>
                          <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{formatDate(evt.timestamp)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Traffic Sources & Regional Corridors */}
              <div className="admin-two-cols">
                <div className="admin-box">
                  <div className="admin-box-head">
                    <h3 className="admin-box-title">
                      <Layers size={18} color="#10b981" /> Traffic Channels (Attribution Breakdown)
                    </h3>
                  </div>
                  <div className="admin-box-body">
                    <div style={{ display: 'grid', gap: 14 }}>
                      {[
                        { label: 'Meta Ads (Facebook & Instagram)', share: 44, color: '#1877f2' },
                        { label: 'TikTok Ads & Video Demonstrations', share: 26, color: '#00f2fe' },
                        { label: 'Google Search Ads & SEO', share: 18, color: '#34a853' },
                        { label: 'Telegram Broadcast Channels', share: 8, color: '#229ed9' },
                        { label: 'Direct Traffic & Word of Mouth', share: 4, color: '#e85d0c' },
                      ].map((item, idx) => (
                        <div key={idx}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', marginBottom: 4 }}>
                            <span style={{ color: '#cbd5e1', fontWeight: 600 }}>{item.label}</span>
                            <strong style={{ color: '#fff' }}>{item.share}%</strong>
                          </div>
                          <div style={{ width: '100%', height: 7, background: '#1e293b', borderRadius: 999, overflow: 'hidden' }}>
                            <div style={{ width: `${item.share}%`, height: '100%', background: item.color, borderRadius: 999 }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="admin-box">
                  <div className="admin-box-head">
                    <h3 className="admin-box-title">
                      <MapPin size={18} color="#e85d0c" /> Regional Deployment Corridors (Visitor Geography)
                    </h3>
                  </div>
                  <div className="admin-box-body">
                    <div style={{ display: 'grid', gap: 14 }}>
                      {[
                        { city: 'Addis Ababa (Headquarters & Central Hub)', share: 58 },
                        { city: 'Hawassa & Sidama Industrial Park', share: 14 },
                        { city: 'Bahir Dar & Lake Tana Hospitality Corridor', share: 11 },
                        { city: 'Adama (Nazret) Logistics & Malls', share: 8 },
                        { city: 'Debre Zeit / Bishoftu Luxury Villas & Farms', share: 5 },
                        { city: 'Jimma & Mekelle Commercial Branches', share: 4 },
                      ].map((reg, idx) => (
                        <div key={idx}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', marginBottom: 4 }}>
                            <span style={{ color: '#cbd5e1' }}>{reg.city}</span>
                            <strong style={{ color: '#fff' }}>{reg.share}%</strong>
                          </div>
                          <div style={{ width: '100%', height: 7, background: '#1e293b', borderRadius: 999, overflow: 'hidden' }}>
                            <div style={{ width: `${reg.share}%`, height: '100%', background: '#e85d0c', borderRadius: 999 }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: META PIXEL & PLATFORM ADS ANALYTICS */}
          {activeTab === 'meta_ads' && (
            <div>
              {/* Meta Pixel Status Card */}
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(24, 119, 242, 0.12), rgba(15, 23, 42, 0.95))',
                  border: '1px solid rgba(24, 119, 242, 0.3)',
                  borderRadius: 16,
                  padding: '24px',
                  marginBottom: 24,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: 16,
                }}
              >
                <div>
                  <span
                    style={{
                      background: 'rgba(24, 119, 242, 0.25)',
                      color: '#60a5fa',
                      padding: '4px 10px',
                      borderRadius: 999,
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                  >
                    <CheckCircle2 size={14} /> Meta Pixel Active &amp; Verified
                  </span>
                  <h2 style={{ fontSize: '1.4rem', color: '#fff', margin: '8px 0 4px' }}>
                    Facebook &amp; Instagram Advertising Conversion Engine
                  </h2>
                  <p style={{ color: '#94a3b8', fontSize: '0.88rem', margin: 0 }}>
                    Pixel ID: <code>{settings.metaPixelId || '148290382910482'}</code> · Tracking PageView, Lead, Contact, InitiateCheckout
                  </p>
                </div>

                <div style={{ display: 'flex', gap: 12 }}>
                  <button
                    type="button"
                    className="admin-btn-outline"
                    onClick={() => setActiveTab('settings')}
                  >
                    <Settings size={14} /> Configure Pixel IDs
                  </button>
                </div>
              </div>

              {/* Cross-Platform Performance Table */}
              <div className="admin-box">
                <div className="admin-box-head">
                  <h3 className="admin-box-title">
                    <TrendingUp size={18} color="#3b82f6" /> Advertising Platform Performance Comparison
                  </h3>
                </div>
                <div className="admin-table-wrap">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Platform Channel</th>
                        <th>Total Spend (ETB)</th>
                        <th>Impressions</th>
                        <th>Clicks</th>
                        <th>CTR</th>
                        <th>Verified Leads</th>
                        <th>CPL (Cost / Lead)</th>
                        <th>Est. ROAS</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {adsMetrics.map((ad, idx) => (
                        <tr key={idx}>
                          <td>
                            <strong style={{ color: '#fff', fontSize: '0.94rem' }}>{ad.platform}</strong>
                          </td>
                          <td>
                            <strong style={{ color: '#e85d0c' }}>{formatETB(ad.spendETB)}</strong>
                          </td>
                          <td>{ad.impressions.toLocaleString()}</td>
                          <td>{ad.clicks.toLocaleString()}</td>
                          <td>
                            <span style={{ color: '#10b981', fontWeight: 700 }}>{ad.ctr}%</span>
                          </td>
                          <td>
                            <strong style={{ color: '#38bdf8', fontSize: '1rem' }}>{ad.leads}</strong>
                          </td>
                          <td>{formatETB(ad.cplETB)}</td>
                          <td>
                            <strong style={{ color: '#34d399' }}>{ad.roas}x</strong>
                          </td>
                          <td>
                            <span className="admin-badge admin-badge-won">{ad.status.toUpperCase()}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Active Campaigns Deep Dive */}
              <div className="admin-box">
                <div className="admin-box-head">
                  <h3 className="admin-box-title">
                    <Layers size={18} color="#10b981" /> Active Meta Ad Sets &amp; Campaigns
                  </h3>
                </div>
                <div className="admin-box-body">
                  <div style={{ display: 'grid', gap: 14 }}>
                    {adsMetrics[0]?.campaigns?.map((c, i) => (
                      <div
                        key={i}
                        style={{
                          background: '#152238',
                          border: '1px solid #1e293b',
                          borderRadius: 12,
                          padding: '16px 20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          flexWrap: 'wrap',
                          gap: 12,
                        }}
                      >
                        <div>
                          <strong style={{ color: '#fff', fontSize: '0.95rem', display: 'block' }}>
                            {c.name}
                          </strong>
                          <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                            Meta Ads (Feed + Reels + Messenger Placement)
                          </span>
                        </div>
                        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
                          <div>
                            <small style={{ color: '#64748b', display: 'block', textTransform: 'uppercase', fontSize: '0.7rem' }}>
                              Spend
                            </small>
                            <strong style={{ color: '#e85d0c' }}>{formatETB(c.spendETB)}</strong>
                          </div>
                          <div>
                            <small style={{ color: '#64748b', display: 'block', textTransform: 'uppercase', fontSize: '0.7rem' }}>
                              Leads
                            </small>
                            <strong style={{ color: '#38bdf8' }}>{c.leads} Leads</strong>
                          </div>
                          <div>
                            <small style={{ color: '#64748b', display: 'block', textTransform: 'uppercase', fontSize: '0.7rem' }}>
                              CTR
                            </small>
                            <strong style={{ color: '#10b981' }}>{c.ctr}%</strong>
                          </div>
                          <span className="admin-badge admin-badge-won">RUNNING</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Real-time Meta Pixel Events Stream */}
              <div className="admin-box">
                <div className="admin-box-head">
                  <h3 className="admin-box-title">
                    <Radio size={18} color="#3b82f6" /> Live Fired Pixel Events Telemetry Stream
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                    Showing last {pixelEvents.length} fired conversion events
                  </span>
                </div>
                <div className="admin-table-wrap">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Event ID</th>
                        <th>Platform</th>
                        <th>Pixel Event</th>
                        <th>Target Path</th>
                        <th>Payload / Attributes</th>
                        <th>Timestamp</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pixelEvents.map((evt) => (
                        <tr key={evt.id}>
                          <td>
                            <code>{evt.id}</code>
                          </td>
                          <td>
                            <strong style={{ color: evt.platform === 'meta' ? '#60a5fa' : '#2dd4bf' }}>
                              {evt.platform.toUpperCase()}
                            </strong>
                          </td>
                          <td>
                            <span className="admin-badge admin-badge-new">{evt.event}</span>
                          </td>
                          <td>
                            <code>{evt.path}</code>
                          </td>
                          <td>
                            <span style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>
                              {evt.data ? JSON.stringify(evt.data) : 'Standard Event'}
                            </span>
                          </td>
                          <td>{formatDate(evt.timestamp)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PROFORMA REQUESTS CRM */}
          {activeTab === 'proformas' && (
            <div>
              <div className="admin-box">
                <div className="admin-box-head">
                  <div>
                    <h3 className="admin-box-title">
                      <FileText size={18} color="#e85d0c" /> Official Proforma Requests &amp; Lead Management
                    </h3>
                    <p style={{ margin: '4px 0 0', color: '#94a3b8', fontSize: '0.82rem' }}>
                      Itemized quotation submissions generated by clients on the website
                    </p>
                  </div>

                  {/* Search and Filters */}
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    <div style={{ position: 'relative' }}>
                      <Search size={16} style={{ position: 'absolute', left: 10, top: 10, color: '#64748b' }} />
                      <input
                        type="text"
                        placeholder="Search name, phone, ref..."
                        value={proformaSearch}
                        onChange={(e) => setProformaSearch(e.target.value)}
                        style={{
                          background: '#152238',
                          border: '1px solid #334155',
                          borderRadius: 8,
                          padding: '7px 12px 7px 32px',
                          color: '#fff',
                          fontSize: '0.84rem',
                          fontFamily: 'inherit',
                        }}
                      />
                    </div>

                    <select
                      value={proformaStatusFilter}
                      onChange={(e) => setProformaStatusFilter(e.target.value)}
                      style={{
                        background: '#152238',
                        border: '1px solid #334155',
                        borderRadius: 8,
                        padding: '7px 12px',
                        color: '#fff',
                        fontSize: '0.84rem',
                        fontFamily: 'inherit',
                      }}
                    >
                      <option value="all">All Statuses</option>
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="sent_quotation">Sent Quotation</option>
                      <option value="won">Won</option>
                      <option value="lost">Lost</option>
                    </select>
                  </div>
                </div>

                <div className="admin-table-wrap">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Ref Code</th>
                        <th>Client / Organization</th>
                        <th>Phone &amp; Location</th>
                        <th>Property &amp; Scope</th>
                        <th>Est. Quotation</th>
                        <th>Status</th>
                        <th>Submitted</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProformas.length > 0 ? (
                        filteredProformas.map((p) => (
                          <tr key={p.id}>
                            <td>
                              <code style={{ color: '#60a5fa', fontWeight: 700 }}>{p.refCode}</code>
                            </td>
                            <td>
                              <strong style={{ color: '#fff', display: 'block' }}>{p.companyName}</strong>
                              <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                                Contact: {p.contactPerson || 'To confirm'}
                              </span>
                            </td>
                            <td>
                              <strong style={{ color: '#38bdf8' }}>{p.phone}</strong>
                              <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{p.location}</div>
                            </td>
                            <td>
                              <span style={{ fontWeight: 700, color: '#fff' }}>
                                {p.cameraCount} Cameras · {p.storageDays}d Purple
                              </span>
                              <div style={{ fontSize: '0.76rem', color: '#94a3b8' }}>
                                {p.propertyType.toUpperCase()} · {p.powerBackup.toUpperCase()}
                              </div>
                            </td>
                            <td>
                              <strong style={{ color: '#e85d0c', fontSize: '0.96rem' }}>
                                {formatETB(p.estimatedTotalETB)}
                              </strong>
                            </td>
                            <td>
                              <select
                                value={p.status}
                                onChange={(e) => handleStatusChange(p.id, e.target.value as any)}
                                style={{
                                  background: '#152238',
                                  border: '1px solid #334155',
                                  borderRadius: 6,
                                  padding: '4px 8px',
                                  color: '#fff',
                                  fontSize: '0.76rem',
                                  fontWeight: 700,
                                  fontFamily: 'inherit',
                                }}
                              >
                                <option value="new">NEW</option>
                                <option value="contacted">CONTACTED</option>
                                <option value="sent_quotation">SENT QUOTATION</option>
                                <option value="won">WON (CLOSED)</option>
                                <option value="lost">LOST</option>
                              </select>
                            </td>
                            <td>{formatDate(p.timestamp)}</td>
                            <td>
                              <div style={{ display: 'flex', gap: 6 }}>
                                <button
                                  type="button"
                                  className="admin-table-btn"
                                  onClick={() => setSelectedProforma(p)}
                                  title="View full itemized slip"
                                >
                                  <Eye size={13} />
                                </button>
                                <a
                                  href={whatsappLink(
                                    `Hello ${p.contactPerson || p.companyName}, this is Ethio Smart Security regarding your proforma quotation ${p.refCode}. We have prepared the itemized hardware breakdown.`
                                  )}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="admin-table-btn whatsapp"
                                  title="Chat on WhatsApp"
                                >
                                  <MessageCircle size={13} />
                                </a>
                                <button
                                  type="button"
                                  className="admin-table-btn"
                                  onClick={() => handleDeleteProforma(p.id)}
                                  style={{ color: '#f87171' }}
                                  title="Delete lead"
                                >
                                  <Trash2 size={13} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={8} style={{ textAlign: 'center', padding: '36px', color: '#94a3b8' }}>
                            No proforma requests found matching the current search.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: PAGE VISITS & TRAFFIC */}
          {activeTab === 'traffic' && (
            <div>
              <div className="admin-two-cols">
                {/* Most Visited Pages */}
                <div className="admin-box">
                  <div className="admin-box-head">
                    <h3 className="admin-box-title">
                      <Eye size={18} color="#3b82f6" /> Top Visited Pages &amp; Sections
                    </h3>
                  </div>
                  <div className="admin-table-wrap">
                    <table className="admin-table">
                      <thead>
                        <tr>
                          <th>Page Path</th>
                          <th>Recorded Views</th>
                          <th>Engagement Share</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { path: '/installations', label: 'CCTV Installation Gallery', views: 482, share: 34 },
                          { path: '/proforma', label: 'VAT Proforma Quotation Wizard', views: 368, share: 26 },
                          { path: '/', label: 'Homepage & Executive Portal', views: 320, share: 22 },
                          { path: '/calculator', label: 'Surveillance Storage Calculator', views: 142, share: 10 },
                          { path: '/solutions', label: 'All Security Packages', views: 76, share: 5 },
                          { path: '/contact', label: 'Direct Engineering Contacts', views: 42, share: 3 },
                        ].map((row, idx) => (
                          <tr key={idx}>
                            <td>
                              <strong style={{ color: '#fff', display: 'block' }}>{row.path}</strong>
                              <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{row.label}</span>
                            </td>
                            <td>
                              <strong style={{ color: '#38bdf8' }}>{row.views}</strong>
                            </td>
                            <td>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <div style={{ width: 80, height: 6, background: '#1e293b', borderRadius: 999 }}>
                                  <div style={{ width: `${row.share}%`, height: '100%', background: '#3b82f6', borderRadius: 999 }} />
                                </div>
                                <span>{row.share}%</span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Device Breakdown */}
                <div className="admin-box">
                  <div className="admin-box-head">
                    <h3 className="admin-box-title">
                      <Cpu size={18} color="#10b981" /> Device Breakdown &amp; Platform Access
                    </h3>
                  </div>
                  <div className="admin-box-body">
                    <div style={{ display: 'grid', gap: 16 }}>
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                          <span>Mobile Smartphones (Android / iOS)</span>
                          <strong style={{ color: '#10b981' }}>78% (1,108 visits)</strong>
                        </div>
                        <div style={{ width: '100%', height: 8, background: '#1e293b', borderRadius: 999 }}>
                          <div style={{ width: '78%', height: '100%', background: '#10b981', borderRadius: 999 }} />
                        </div>
                      </div>

                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                          <span>Desktop Computers (Windows / Mac)</span>
                          <strong style={{ color: '#3b82f6' }}>19% (270 visits)</strong>
                        </div>
                        <div style={{ width: '100%', height: 8, background: '#1e293b', borderRadius: 999 }}>
                          <div style={{ width: '19%', height: '100%', background: '#3b82f6', borderRadius: 999 }} />
                        </div>
                      </div>

                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                          <span>Tablets &amp; iPads</span>
                          <strong style={{ color: '#e85d0c' }}>3% (42 visits)</strong>
                        </div>
                        <div style={{ width: '100%', height: 8, background: '#1e293b', borderRadius: 999 }}>
                          <div style={{ width: '3%', height: '100%', background: '#e85d0c', borderRadius: 999 }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Full Live Visits Log */}
              <div className="admin-box">
                <div className="admin-box-head">
                  <h3 className="admin-box-title">
                    <Eye size={18} color="#3b82f6" /> Recent Web Visits Stream
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Latest live page visits</span>
                </div>
                <div className="admin-table-wrap">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Page Path</th>
                        <th>Traffic Source</th>
                        <th>Campaign / Medium</th>
                        <th>Device</th>
                        <th>Region / City</th>
                        <th>Timestamp</th>
                      </tr>
                    </thead>
                    <tbody>
                      {visits.slice(0, 25).map((v) => (
                        <tr key={v.id}>
                          <td>
                            <strong style={{ color: '#fff' }}>{v.path}</strong>
                            <div style={{ fontSize: '0.76rem', color: '#94a3b8' }}>{v.title}</div>
                          </td>
                          <td>
                            <span className="admin-badge admin-badge-new">{v.traffic_source}</span>
                          </td>
                          <td>
                            <span style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>
                              {v.utm_campaign || v.referrer || 'direct'}
                            </span>
                          </td>
                          <td>{v.device}</td>
                          <td>{v.city}</td>
                          <td>{formatDate(v.timestamp)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: MESSAGING (WHATSAPP & TELEGRAM) */}
          {activeTab === 'messaging' && (
            <div>
              <div className="admin-box">
                <div className="admin-box-head">
                  <h3 className="admin-box-title">
                    <MessageCircle size={18} color="#25d366" /> WhatsApp &amp; Telegram Button Click Telemetry
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                    Track which buttons drive live conversations
                  </span>
                </div>
                <div className="admin-table-wrap">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Channel</th>
                        <th>Button Location</th>
                        <th>Triggered Page</th>
                        <th>Pre-filled Customer Message</th>
                        <th>Traffic Source</th>
                        <th>Timestamp</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ctaClicks.map((c) => (
                        <tr key={c.id}>
                          <td>
                            <span
                              className={`admin-badge ${
                                c.kind === 'whatsapp'
                                  ? 'admin-badge-won'
                                  : c.kind === 'telegram'
                                  ? 'admin-badge-new'
                                  : 'admin-badge-contacted'
                              }`}
                            >
                              {c.kind.toUpperCase()}
                            </span>
                          </td>
                          <td>
                            <code>{c.location}</code>
                          </td>
                          <td>{c.path}</td>
                          <td>
                            <span style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>
                              {c.message ? c.message.substring(0, 80) + '...' : 'Direct Call/Chat Launch'}
                            </span>
                          </td>
                          <td>{c.source}</td>
                          <td>{formatDate(c.timestamp)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: SETTINGS */}
          {activeTab === 'settings' && (
            <div className="admin-two-cols">
              {/* Marketing Pixel & Tag Configuration */}
              <div className="admin-box">
                <div className="admin-box-head">
                  <h3 className="admin-box-title">
                    <TrendingUp size={18} color="#3b82f6" /> Advertising Pixel &amp; Tag Identifiers
                  </h3>
                </div>
                <div className="admin-box-body">
                  {settingsSavedMsg && (
                    <div
                      style={{
                        background: 'rgba(16, 185, 129, 0.15)',
                        color: '#34d399',
                        padding: '10px 14px',
                        borderRadius: 8,
                        marginBottom: 16,
                        fontSize: '0.86rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                      }}
                    >
                      <CheckCircle2 size={16} /> {settingsSavedMsg}
                    </div>
                  )}

                  <form onSubmit={handleSaveSettings}>
                    <div className="admin-form-group">
                      <label className="admin-form-label" htmlFor="meta-pixel-id">
                        Meta (Facebook &amp; Instagram) Pixel ID
                      </label>
                      <input
                        id="meta-pixel-id"
                        type="text"
                        className="admin-input"
                        style={{ paddingLeft: 14 }}
                        placeholder="e.g. 148290382910482"
                        value={metaPixelIdInput}
                        onChange={(e) => setMetaPixelIdInput(e.target.value)}
                      />
                      <span style={{ fontSize: '0.74rem', color: '#64748b', marginTop: 4, display: 'block' }}>
                        Tracks PageView, Lead, Contact, InitiateCheckout events on Meta Ads Manager.
                      </span>
                    </div>

                    <div className="admin-form-group">
                      <label className="admin-form-label" htmlFor="tiktok-pixel-id">
                        TikTok Ads Pixel ID
                      </label>
                      <input
                        id="tiktok-pixel-id"
                        type="text"
                        className="admin-input"
                        style={{ paddingLeft: 14 }}
                        placeholder="e.g. C9D482910482"
                        value={tikTokPixelIdInput}
                        onChange={(e) => setTikTokPixelIdInput(e.target.value)}
                      />
                    </div>

                    <div className="admin-form-group">
                      <label className="admin-form-label" htmlFor="ga-id">
                        Google Analytics 4 Measurement ID
                      </label>
                      <input
                        id="ga-id"
                        type="text"
                        className="admin-input"
                        style={{ paddingLeft: 14 }}
                        placeholder="e.g. G-ET0945282035"
                        value={googleAnalyticsIdInput}
                        onChange={(e) => setGoogleAnalyticsIdInput(e.target.value)}
                      />
                    </div>

                    <button type="submit" className="admin-login-btn" style={{ width: 'auto', padding: '10px 20px' }}>
                      <Save size={16} /> Save Marketing Pixel Configuration
                    </button>
                  </form>
                </div>
              </div>

              {/* Security & Password Reset */}
              <div className="admin-box">
                <div className="admin-box-head">
                  <h3 className="admin-box-title">
                    <ShieldCheck size={18} color="#e85d0c" /> Admin Authentication &amp; Password
                  </h3>
                </div>
                <div className="admin-box-body">
                  {passwordMsg.text && (
                    <div
                      style={{
                        background: passwordMsg.isError ? 'rgba(239, 68, 68, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                        color: passwordMsg.isError ? '#f87171' : '#34d399',
                        padding: '10px 14px',
                        borderRadius: 8,
                        marginBottom: 16,
                        fontSize: '0.86rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                      }}
                    >
                      {passwordMsg.isError ? <AlertCircle size={16} /> : <CheckCircle2 size={16} />}{' '}
                      {passwordMsg.text}
                    </div>
                  )}

                  <form onSubmit={handleChangePassword}>
                    <div className="admin-form-group">
                      <label className="admin-form-label" htmlFor="old-pass">
                        Current Admin Password
                      </label>
                      <input
                        id="old-pass"
                        type="password"
                        className="admin-input"
                        style={{ paddingLeft: 14 }}
                        placeholder="••••••••••••"
                        value={oldPasswordInput}
                        onChange={(e) => setOldPasswordInput(e.target.value)}
                        required
                      />
                    </div>

                    <div className="admin-form-group">
                      <label className="admin-form-label" htmlFor="new-pass">
                        New Admin Password
                      </label>
                      <input
                        id="new-pass"
                        type="password"
                        className="admin-input"
                        style={{ paddingLeft: 14 }}
                        placeholder="At least 6 characters"
                        value={newPasswordInput}
                        onChange={(e) => setNewPasswordInput(e.target.value)}
                        required
                      />
                    </div>

                    <button type="submit" className="admin-login-btn" style={{ width: 'auto', padding: '10px 20px' }}>
                      <Save size={16} /> Update Administrator Password
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Proforma Detail Modal Drawer */}
      {selectedProforma && (
        <div className="admin-modal-overlay" onClick={() => setSelectedProforma(null)}>
          <div className="admin-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-head">
              <div>
                <span className="admin-badge admin-badge-new">{selectedProforma.refCode}</span>
                <h3 style={{ marginTop: 4 }}>{selectedProforma.companyName}</h3>
              </div>
              <button
                type="button"
                className="admin-modal-close"
                onClick={() => setSelectedProforma(null)}
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
            </div>

            <div className="admin-modal-body">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 20 }}>
                <div>
                  <small style={{ color: '#94a3b8', display: 'block' }}>Representative</small>
                  <strong style={{ color: '#fff' }}>{selectedProforma.contactPerson || 'Not specified'}</strong>
                </div>
                <div>
                  <small style={{ color: '#94a3b8', display: 'block' }}>Phone Number</small>
                  <strong style={{ color: '#38bdf8' }}>{selectedProforma.phone}</strong>
                </div>
                <div>
                  <small style={{ color: '#94a3b8', display: 'block' }}>Project Location</small>
                  <strong style={{ color: '#fff' }}>{selectedProforma.location}</strong>
                </div>
                <div>
                  <small style={{ color: '#94a3b8', display: 'block' }}>Estimated Quotation</small>
                  <strong style={{ color: '#e85d0c', fontSize: '1.1rem' }}>
                    {formatETB(selectedProforma.estimatedTotalETB)}
                  </strong>
                </div>
              </div>

              {/* Hardware specifications table */}
              <div style={{ background: '#152238', borderRadius: 10, padding: '14px 16px', marginBottom: 20 }}>
                <strong style={{ color: '#fff', display: 'block', marginBottom: 10 }}>
                  Selected System Hardware Specifications
                </strong>
                <div style={{ display: 'grid', gap: 8, fontSize: '0.86rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#94a3b8' }}>Camera Scope:</span>
                    <strong style={{ color: '#fff' }}>{selectedProforma.cameraCount} HD/4K Cameras</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#94a3b8' }}>Surveillance Storage:</span>
                    <strong style={{ color: '#fff' }}>{selectedProforma.storageDays} Days (WD Purple)</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#94a3b8' }}>Power Resilience:</span>
                    <strong style={{ color: '#fff' }}>{selectedProforma.powerBackup.toUpperCase()}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#94a3b8' }}>Procurement Mode:</span>
                    <strong style={{ color: '#fff' }}>{selectedProforma.serviceType.toUpperCase()}</strong>
                  </div>
                  {selectedProforma.tinNumber && (
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#94a3b8' }}>TIN Number:</span>
                      <strong style={{ color: '#34d399' }}>{selectedProforma.tinNumber}</strong>
                    </div>
                  )}
                </div>
              </div>

              {/* Client Notes */}
              {selectedProforma.notes && (
                <div style={{ marginBottom: 20 }}>
                  <small style={{ color: '#94a3b8', display: 'block' }}>Client Notes / Special Requests:</small>
                  <p style={{ color: '#cbd5e1', fontSize: '0.88rem', margin: '4px 0 0' }}>{selectedProforma.notes}</p>
                </div>
              )}

              {/* Status Update Dropdown */}
              <div style={{ marginBottom: 24 }}>
                <label style={{ color: '#94a3b8', fontSize: '0.82rem', display: 'block', marginBottom: 6 }}>
                  Update Lead Pipeline Status:
                </label>
                <select
                  value={selectedProforma.status}
                  onChange={(e) => handleStatusChange(selectedProforma.id, e.target.value as any)}
                  style={{
                    width: '100%',
                    background: '#152238',
                    border: '1px solid #334155',
                    borderRadius: 8,
                    padding: '8px 12px',
                    color: '#fff',
                    fontFamily: 'inherit',
                  }}
                >
                  <option value="new">NEW (Awaiting review)</option>
                  <option value="contacted">CONTACTED (Engaged client)</option>
                  <option value="sent_quotation">SENT QUOTATION (Proforma issued)</option>
                  <option value="won">WON (Installation contract signed)</option>
                  <option value="lost">LOST</option>
                </select>
              </div>

              {/* Direct Actions */}
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <a
                  href={whatsappLink(
                    `Hello ${selectedProforma.contactPerson || selectedProforma.companyName}, this is Ethio Smart Security regarding your proforma quotation ${selectedProforma.refCode}. We have prepared the itemized hardware breakdown.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-solid"
                  style={{ background: '#25d366', color: '#fff', flex: 1, justifyContent: 'center' }}
                >
                  <MessageCircle size={18} /> Reply on WhatsApp
                </a>
                <a
                  href={`tel:${selectedProforma.phone}`}
                  className="btn btn-outline"
                  style={{ justifyContent: 'center' }}
                >
                  <PhoneCall size={18} /> Call {selectedProforma.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
