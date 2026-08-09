import { NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';

/**
 * Newsletter subscribe proxy — keeps the project API key server-side.
 * Forwards to the platform's public newsletter endpoint.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { email?: unknown; name?: unknown };
  try {
    body = (await request.json()) as { email?: unknown; name?: unknown };
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON body' }, { status: 400 });
  }

  const email = typeof body.email === 'string' ? body.email.trim().slice(0, 200) : '';
  const name = typeof body.name === 'string' ? body.name.trim().slice(0, 100) : undefined;

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: 'A valid email is required' }, { status: 400 });
  }

  let apiKey: string | undefined;
  let apiUrl = 'https://website-api.tyashin.com';
  try {
    const { env } = getCloudflareContext();
    apiKey = ((env as Record<string, unknown>).TYASHIN_API_KEY as string) || process.env.TYASHIN_API_KEY;
    apiUrl = ((env as Record<string, unknown>).TYASHIN_API_URL as string) || process.env.TYASHIN_API_URL || apiUrl;
  } catch {
    apiKey = process.env.TYASHIN_API_KEY;
    apiUrl = process.env.TYASHIN_API_URL || apiUrl;
  }

  if (!apiKey) {
    console.log('NEWSLETTER: no TYASHIN_API_KEY available — subscription dropped for', email);
    return NextResponse.json(
      { ok: false, error: 'Newsletter is not available right now. Please try again later.' },
      { status: 503 }
    );
  }

  try {
    const res = await fetch(`${apiUrl}/api/v1/newsletter/public/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-API-Key': apiKey },
      body: JSON.stringify({ email, ...(name ? { name } : {}) }),
    });
    const data = (await res.json()) as {
      success?: boolean;
      data?: { requiresConfirmation?: boolean };
      error?: { message?: string };
    };
    if (!res.ok || !data.success) {
      return NextResponse.json(
        { ok: false, error: data?.error?.message || 'Subscription failed' },
        { status: res.ok ? 400 : res.status }
      );
    }
    return NextResponse.json({
      ok: true,
      requiresConfirmation: data?.data?.requiresConfirmation ?? false,
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Subscription failed. Please try again later.' },
      { status: 502 }
    );
  }
}
