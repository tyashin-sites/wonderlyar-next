import { NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { regionForCountry } from '@/config/regions';

/**
 * GET /api/geo — visitor country from Cloudflare edge data, mapped to the
 * nearest regional sales team. Zero external calls; safe to hit on page load.
 */
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  let country: string | null = null;

  try {
    const { cf } = getCloudflareContext();
    country = ((cf as { country?: string } | undefined)?.country ?? null) as string | null;
  } catch {
    // Not on Workers (local dev) — fall through to the header.
  }
  if (!country) {
    country = request.headers.get('cf-ipcountry');
  }
  country = country && country !== 'XX' && country !== 'T1' ? country.toUpperCase() : null;

  return NextResponse.json(
    { country, region: regionForCountry(country) },
    { headers: { 'cache-control': 'private, no-store' } }
  );
}
