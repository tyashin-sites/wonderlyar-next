/**
 * Legal pages — admin-edited HTML served by the platform API.
 *
 * SERVER-ONLY (reads TYASHIN_API_KEY). Degrades gracefully: when the project
 * has no legal pages configured yet, all helpers return empty and the footer
 * simply omits the links (a missing link beats a ghost link).
 */

const API_URL = process.env.TYASHIN_API_URL || 'https://website-api.tyashin.com';
const PROJECT_ID = process.env.PROJECT_ID || '6a788b21adf117091b299967';

export interface LegalPageMeta {
  slug: string;
  title: string;
}

export interface LegalConfig {
  pages: LegalPageMeta[];
  copyrightText?: string;
}

export async function getLegalConfig(): Promise<LegalConfig> {
  const key = process.env.TYASHIN_API_KEY || '';
  if (!key) return { pages: [] };
  try {
    const res = await fetch(
      `${API_URL}/api/v1/public/legal?projectId=${PROJECT_ID}&apiKey=${encodeURIComponent(key)}`,
      { next: { revalidate: 300 } }
    );
    if (!res.ok) return { pages: [] };
    const data = (await res.json()) as {
      success?: boolean;
      data?: { pages?: LegalPageMeta[]; copyrightText?: string };
    };
    const pages = Array.isArray(data?.data?.pages) ? data.data.pages : [];
    return { pages, copyrightText: data?.data?.copyrightText };
  } catch {
    return { pages: [] };
  }
}

export async function getLegalPageHtml(
  slug: string
): Promise<{ title: string; html: string } | null> {
  const key = process.env.TYASHIN_API_KEY || '';
  if (!key) return null;
  try {
    const res = await fetch(
      `${API_URL}/api/v1/public/legal/${encodeURIComponent(slug)}?format=json`,
      { headers: { 'X-API-Key': key }, next: { revalidate: 300 } }
    );
    if (!res.ok) return null;
    const data = (await res.json()) as {
      success?: boolean;
      data?: { title?: string; html?: string; content?: string };
    };
    const html = data?.data?.html || data?.data?.content || '';
    if (!html) return null;
    return { title: data?.data?.title || slug, html };
  } catch {
    return null;
  }
}
