import { SITE, siteUrl } from '@/lib/seo';
import { siteConfig } from '@/config/site';

/**
 * schema.org knowledge graph — ONE interlinked @graph per page (addendum §3b).
 *
 * The platform edge also injects a baseline (idempotent by @type — it skips
 * any @type already present in the HTML), so anything emitted here wins.
 */

type SchemaNode = Record<string, unknown>;

const ORIGIN = siteUrl('/').replace(/\/+$/, '');

function organizationNode(): SchemaNode {
  return {
    '@type': 'EducationalOrganization',
    '@id': `${ORIGIN}/#organization`,
    name: siteConfig.name,
    url: `${ORIGIN}/`,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2235 Melanie Court',
      addressLocality: 'Burlington',
      addressRegion: 'Ontario',
      postalCode: 'L7P 2W8',
      addressCountry: 'CA',
    },
    sameAs: [siteConfig.social.twitter, siteConfig.social.linkedin],
    knowsAbout: [
      'augmented reality education',
      'early childhood education',
      'preschool learning',
      'interactive AR books',
      'educational technology',
    ],
  };
}

function webSiteNode(): SchemaNode {
  return {
    '@type': 'WebSite',
    '@id': `${ORIGIN}/#website`,
    url: `${ORIGIN}/`,
    name: SITE.name,
    publisher: { '@id': `${ORIGIN}/#organization` },
  };
}

export interface PageGraphOptions {
  /** e.g. '/about'. Omit for the home page. */
  path?: string;
  title?: string;
  description?: string;
  /** Breadcrumb trail, home is prepended automatically. */
  breadcrumb?: { name: string; path: string }[];
  article?: {
    headline: string;
    datePublished?: string;
    dateModified?: string;
    image?: string;
    authorName?: string;
  };
}

export function buildGraph(opts: PageGraphOptions = {}): SchemaNode {
  const nodes: SchemaNode[] = [organizationNode(), webSiteNode()];

  if (opts.path) {
    const pageUrl = siteUrl(opts.path);
    const webPage: SchemaNode = {
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: opts.title || SITE.name,
      ...(opts.description ? { description: opts.description } : {}),
      isPartOf: { '@id': `${ORIGIN}/#website` },
      about: { '@id': `${ORIGIN}/#organization` },
    };

    if (opts.breadcrumb && opts.breadcrumb.length > 0) {
      const crumbs = [{ name: 'Home', path: '/' }, ...opts.breadcrumb];
      nodes.push({
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: crumbs.map((c, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: c.name,
          item: siteUrl(c.path),
        })),
      });
      webPage.breadcrumb = { '@id': `${pageUrl}#breadcrumb` };
    }

    nodes.push(webPage);

    if (opts.article) {
      nodes.push({
        '@type': 'BlogPosting',
        '@id': `${pageUrl}#article`,
        mainEntityOfPage: { '@id': `${pageUrl}#webpage` },
        headline: opts.article.headline,
        ...(opts.article.datePublished ? { datePublished: opts.article.datePublished } : {}),
        ...(opts.article.dateModified ? { dateModified: opts.article.dateModified } : {}),
        ...(opts.article.image ? { image: opts.article.image } : {}),
        publisher: { '@id': `${ORIGIN}/#organization` },
        ...(opts.article.authorName
          ? { author: { '@type': 'Person', name: opts.article.authorName } }
          : {}),
      });
    }
  }

  return { '@context': 'https://schema.org', '@graph': nodes };
}

/** Serialize a graph safely for a <script type="application/ld+json"> tag. */
export function graphJson(opts: PageGraphOptions = {}): string {
  return JSON.stringify(buildGraph(opts)).replace(/</g, '\\u003c').replace(/>/g, '\\u003e');
}
