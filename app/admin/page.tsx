'use client';

import React, { useState, useEffect } from 'react';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

export default function AdminPage() {
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    username: 'admin',
    role: 'Super Admin',
    name: 'Ethio Smart Security Admin',
  });

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch('/api/admin/auth');
        if (res.ok) {
          const data = await res.json();
          if (data.authenticated) {
            setAuthenticated(true);
            if (data.user) setCurrentUser(data.user);
          }
        }
      } catch (err) {
        // Not authenticated
      } finally {
        setCheckingAuth(false);
      }
    };

    checkSession();
  }, []);

  const handleLoginSuccess = (
    token: string,
    user: { username: string; role: string; name: string }
  ) => {
    setAuthenticated(true);
    setCurrentUser(user);
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'logout' }),
      });
    } catch {
      // ignore
    } finally {
      setAuthenticated(false);
    }
  };

  if (checkingAuth) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          background: '#080d19',
          color: '#94a3b8',
          fontSize: '0.94rem',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              width: 36,
              height: 36,
              border: '3px solid rgba(255,255,255,0.1)',
              borderTopColor: '#e85d0c',
              borderRadius: '50%',
              animation: 'adminSpin 0.8s linear infinite',
              margin: '0 auto 14px',
            }}
          />
          <span>Verifying security session...</span>
          <style>{`
            @keyframes adminSpin {
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </div>
    );
  }

  if (!authenticated) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return <AdminDashboard user={currentUser} onLogout={handleLogout} />;
}
