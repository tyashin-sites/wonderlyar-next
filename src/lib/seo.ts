import type { Metadata } from 'next';

// The site's canonical identity. `domain` is the ONLY thing that changes when
// the customer later wires a custom domain (update NEXT_PUBLIC_SITE_DOMAIN).
export const SITE = {
  name: 'WonderlyAR',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'wonderlyar.com',
  defaultOgImage: '/hero-image.jpg',
  locale: 'en_US',
  twitter: '',
};

// The canonical host is the bare apex domain — it MUST match the platform's
// resolveCanonicalHost() (first custom domain: wonderlyar.com).
export function siteUrl(path = '/'): string {
  const base = `https://${SITE.domain}`;
  const p = path === '/' ? '' : `/${path.replace(/^\/+/, '')}`;
  return `${base}${p}`;
}

// Build a complete, absolute-URL Metadata object for one page.
export function pageMetadata(opts: {
  title?: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
}): Metadata {
  const url = siteUrl(opts.path);
  const image = opts.image || SITE.defaultOgImage;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      type: opts.type || 'website',
      url,
      siteName: SITE.name,
      title: opts.title || SITE.name,
      description: opts.description,
      locale: SITE.locale,
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title: opts.title || SITE.name,
      description: opts.description,
      images: [image],
      ...(SITE.twitter ? { site: SITE.twitter, creator: SITE.twitter } : {}),
    },
  };
}
