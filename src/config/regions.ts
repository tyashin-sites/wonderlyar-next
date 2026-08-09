/**
 * Regional sales teams — authorized resellers/distributors of WonderlyAR
 * (owned by Aapastech Private Limited; regional companies operate under
 * license). Marketing labels only — legal entity names live in contracts.
 *
 * One email for all regions (hello@) — routed internally. Each region's
 * primary CTA is a chat deep-link; EU has no local number, so its chat
 * routes to the HQ (India) line.
 */
import { siteConfig } from '@/config/site';

export type RegionKey = 'canada' | 'eu' | 'india';

export interface Region {
  key: RegionKey;
  label: string;
  coverage: string;
  /** wa.me number, digits only. */
  chatNumber: string;
  email: string;
  phone?: string;
  phoneHref?: string;
  addressLines?: string[];
}

const HQ_CHAT = '919667747082';

export const REGIONS: Record<RegionKey, Region> = {
  canada: {
    key: 'canada',
    label: 'WonderlyAR Canada',
    coverage: 'Serving schools across North & South America',
    chatNumber: '14378000190',
    email: siteConfig.contact.email,
    phone: '+1 437 8000 190',
    phoneHref: 'tel:+14378000190',
  },
  eu: {
    key: 'eu',
    label: 'WonderlyAR Europe',
    coverage: 'Serving schools across Europe, the UK, Middle East & Africa',
    chatNumber: HQ_CHAT,
    email: siteConfig.contact.email,
  },
  india: {
    key: 'india',
    label: 'WonderlyAR India',
    coverage: 'Serving schools across India, Asia-Pacific & worldwide',
    chatNumber: HQ_CHAT,
    email: siteConfig.contact.email,
    phone: '+91 96677 47082',
    phoneHref: 'tel:+919667747082',
  },
};

/** Default when geo detection fails or the country is unknown: HQ. */
export const DEFAULT_REGION: RegionKey = 'india';

const AMERICAS = new Set([
  'US', 'CA', 'MX', 'BR', 'AR', 'CL', 'CO', 'PE', 'VE', 'EC', 'BO', 'PY', 'UY',
  'GT', 'CR', 'PA', 'DO', 'HN', 'SV', 'NI', 'CU', 'JM', 'TT', 'BS', 'BB', 'GY',
  'SR', 'BZ', 'HT', 'PR',
]);

const EU_UK_MEA = new Set([
  // Europe + UK
  'GB', 'IE', 'FR', 'DE', 'NL', 'BE', 'LU', 'ES', 'PT', 'IT', 'CH', 'AT', 'DK',
  'SE', 'NO', 'FI', 'IS', 'PL', 'CZ', 'SK', 'HU', 'RO', 'BG', 'GR', 'HR', 'SI',
  'EE', 'LV', 'LT', 'MT', 'CY', 'UA', 'RS', 'BA', 'MK', 'AL', 'ME', 'MD', 'TR',
  // Middle East
  'AE', 'SA', 'QA', 'KW', 'BH', 'OM', 'IL', 'JO', 'LB', 'EG', 'IQ',
  // Africa
  'ZA', 'NG', 'KE', 'GH', 'MA', 'TN', 'DZ', 'ET', 'TZ', 'UG', 'RW', 'SN', 'CI',
  'CM', 'ZM', 'ZW', 'BW', 'NA', 'MU',
]);

export function regionForCountry(country: string | null | undefined): RegionKey {
  if (!country) return DEFAULT_REGION;
  const c = country.toUpperCase();
  if (AMERICAS.has(c)) return 'canada';
  if (EU_UK_MEA.has(c)) return 'eu';
  return 'india';
}

export function chatUrl(region: Region): string {
  const text = encodeURIComponent(
    "Hi! I'd like to learn more about WonderlyAR for my school."
  );
  return `https://wa.me/${region.chatNumber}?text=${text}`;
}
