import { NextRequest, NextResponse } from 'next/server';
import {
  createSession,
  validateSession,
  destroySession,
} from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const action = body.action || 'login';

    if (action === 'login') {
      const { username, password } = body;

      const validUser = username && username.trim().toLowerCase() === 'admin';
      const configuredPassword = process.env.ADMIN_PASSWORD || 'admin';
      const isMatch = password && password === configuredPassword;

      if (!validUser || !isMatch) {
        return NextResponse.json(
          { success: false, message: 'Invalid username or password. Please try again.' },
          { status: 401 }
        );
      }

      // Create session
      const token = createSession(username);
      const response = NextResponse.json({
        success: true,
        token,
        user: { username: 'admin', role: 'Super Admin', name: 'Ethio Smart Security Admin' },
      });

      // Set cookie (HTTP-only)
      response.cookies.set({
        name: 'ess_admin_token',
        value: token,
        httpOnly: true,
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        sameSite: 'lax',
      });

      return response;
    }

    if (action === 'logout') {
      const token = req.cookies.get('ess_admin_token')?.value || body.token;
      destroySession(token);
      const response = NextResponse.json({ success: true, message: 'Logged out successfully' });
      response.cookies.delete('ess_admin_token');
      return response;
    }

    if (action === 'change_password') {
      const token = req.cookies.get('ess_admin_token')?.value || req.headers.get('authorization')?.replace('Bearer ', '');
      if (!validateSession(token)) {
        return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
      }

      // Recommend setting ADMIN_PASSWORD in environment
      return NextResponse.json({
        success: true,
        message: 'Password management: set ADMIN_PASSWORD in your environment variables (.env.local)',
      });
    }

    return NextResponse.json({ success: false, message: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('Auth API error:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const token = req.cookies.get('ess_admin_token')?.value || req.headers.get('authorization')?.replace('Bearer ', '');
  const isValid = validateSession(token);

  if (!isValid) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  return NextResponse.json({
    authenticated: true,
    user: { username: 'admin', role: 'Super Admin', name: 'Ethio Smart Security Admin' },
  });
}
