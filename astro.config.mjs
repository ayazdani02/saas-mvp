// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * Single source of truth for the canonical production origin.
 * Used by Astro for canonical URLs, the sitemap and JSON-LD.
 *
 * Priority:
 *   1. PUBLIC_SITE_URL              → set this once you buy a custom domain.
 *   2. VERCEL_PROJECT_PRODUCTION_URL → injected automatically by Vercel on prod builds.
 *   3. local placeholder            → only used for `npm run dev` / local builds.
 */
const SITE =
  process.env.PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://confialine.vercel.app');

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [
    sitemap({
      // Keep the 404 helper out of the sitemap.
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});