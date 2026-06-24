import type { APIRoute } from 'astro';

/**
 * Dynamic robots.txt — references the sitemap using the same `site` origin
 * configured in astro.config.mjs, so it stays correct across Vercel previews
 * and the eventual custom domain without manual edits.
 */
export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site).href;

  const body = `User-agent: *
Allow: /

Sitemap: ${sitemapURL}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
