import type { Metadata } from 'next';
import { displayFont, bodyFont } from '@/lib/fonts';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { getBlogHasPosts } from '@/lib/blog';
import { SITE, siteUrl } from '@/lib/seo';
import { siteConfig } from '@/config/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl('/')),
  title: {
    default: `${SITE.name} - ${siteConfig.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    locale: SITE.locale,
    url: siteUrl('/'),
    title: `${SITE.name} - Learning That Comes Alive`,
    images: [{ url: SITE.defaultOgImage }],
  },
  twitter: { card: 'summary_large_image' },
  ...(process.env.ROBOTS_NOINDEX === 'true'
    ? {
        robots: {
          index: false,
          follow: false,
          googleBot: { index: false, follow: false },
        },
      }
    : {}),
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const hasBlog = await getBlogHasPosts();

  return (
    // PERF: literal background hex on <html>/<body> so the viewport paints in
    // the site's cream (hsl(30 50% 98%) ≈ #FCFAF7) before the CSS bundle loads.
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable}`}
      style={{ backgroundColor: '#FCFAF7' }}
    >
      <head>
        {/* Platform-served brand kit overrides — layered AFTER globals.css */}
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/brand-kit.css" />
      </head>
      <body
        className="font-body bg-background text-foreground antialiased"
        style={{ backgroundColor: '#FCFAF7' }}
      >
        <JsonLd />
        <div className="flex min-h-screen flex-col">
          <Header hasBlog={hasBlog} />
          <main className="flex-1 overflow-x-clip pt-20">{children}</main>
          <Footer hasBlog={hasBlog} />
        </div>
      </body>
    </html>
  );
}
