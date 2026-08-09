/**
 * ONE source of truth for the site's indexable routes.
 *
 * /sitemap-pages.xml is generated from this list; the platform's /sitemap.xml
 * (a sitemap index) references it automatically once it detects the route.
 * Every `page.tsx` under `app/` that should be indexed MUST appear here.
 *
 * Blog POSTS are platform-owned data and live in the platform's
 * /sitemap-content.xml — only the /blog index belongs here.
 */
export interface SiteRoute {
  path: string;
  priority: number;
  changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
}

export function getSiteRoutes(): SiteRoute[] {
  return [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/how-it-works', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/for-preschools', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/for-educators', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/content-library', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/why-ar', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.6, changeFrequency: 'weekly' },
  ];
}
