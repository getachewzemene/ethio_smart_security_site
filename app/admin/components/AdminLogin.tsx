'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Lock, User, Eye, EyeOff, ShieldAlert, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

type AdminLoginProps = {
  onLoginSuccess: (token: string, user: { username: string; role: string; name: string }) => void;
};

export default function AdminLogin({ onLoginSuccess }: AdminLoginProps) {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'login', username, password }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        setError(data.message || 'Invalid username or password');
        setLoading(false);
        return;
      }

      onLoginSuccess(data.token, data.user);
    } catch (err) {
      setError('Connection error. Please check your network and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleFillDemo = () => {
    setUsername('admin');
    setError('');
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-card">
        <div className="admin-login-header">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
            <Image
              src="/logo.png"
              alt="Ethio Smart Security"
              width={56}
              height={56}
              priority
              style={{ borderRadius: '50%', boxShadow: '0 4px 14px rgba(0,0,0,0.4)' }}
            />
          </div>
          <span className="admin-login-badge">
            <ShieldCheck size={14} /> Security Administration
          </span>
          <h1 className="admin-login-title">Executive Command Portal</h1>
          <p className="admin-login-sub">
            Ethio Smart Security · Nationwide Analytics &amp; Lead Management
          </p>
        </div>

        {error && (
          <div
            style={{
              background: 'rgba(239, 68, 68, 0.15)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#f87171',
              padding: '10px 14px',
              borderRadius: 10,
              fontSize: '0.86rem',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 18,
            }}
          >
            <ShieldAlert size={18} style={{ flex: 'none' }} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="admin-user">
              Administrator Username
            </label>
            <div className="admin-input-wrap">
              <User size={18} />
              <input
                id="admin-user"
                type="text"
                className="admin-input"
                placeholder="admin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="username"
              />
            </div>
          </div>

          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="admin-pass">
              Access Key / Password
            </label>
            <div className="admin-input-wrap">
              <Lock size={18} />
              <input
                id="admin-pass"
                type={showPassword ? 'text' : 'password'}
                className="admin-input"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                className="admin-input-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button type="submit" className="admin-login-btn" disabled={loading}>
            {loading ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <span>Access Management Console</span>
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        <div className="admin-login-demo-helper">
          <div>
            <strong style={{ color: '#e2e8f0', display: 'block' }}>Initial Access Key:</strong>
            <span>User: <code>admin</code> · Configured via <code>ADMIN_PASSWORD</code> env</span>
          </div>
          <button type="button" className="admin-login-demo-fill" onClick={handleFillDemo}>
            Quick Fill
          </button>
        </div>

        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <a
            href="/"
            style={{ color: '#64748b', fontSize: '0.82rem', textDecoration: 'none' }}
          >
            ← Return to Public Website
          </a>
        </div>
      </div>
    </div>
  );
}
