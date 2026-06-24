/**
 * Centralised SEO / brand constants — the single source of truth for the
 * site-wide metadata consumed by `Layout.astro` and the structured data.
 *
 * The production ORIGIN (domain) is NOT here: it lives in `astro.config.mjs`
 * (`site`) and is read at runtime via `Astro.site`, so there is only one place
 * to change when the custom domain is purchased.
 */

export const SITE_NAME = 'ConfiaLine';

export const SITE_TITLE =
  'ConfiaLine | Canal de Denuncias Éticas y Compliance Corporativo';

export const SITE_DESCRIPTION =
  'Plataforma de denuncias éticas 100% independiente, segura y anónima para colaboradores y proveedores. Cumple con la Ley Karin y normativas de compliance de LATAM.';

/** BCP-47 language tag — Chile as primary market, Spanish for all of LATAM. */
export const SITE_LANG = 'es-CL';

/** Open Graph locale (underscore form). */
export const SITE_LOCALE = 'es_CL';

/** Default social share image (1200×630), served from /public. */
export const OG_IMAGE = '/og-image.png';

export const OG_IMAGE_ALT =
  'ConfiaLine — Canal de denuncias éticas y compliance corporativo para Latinoamérica';

export const KEYWORDS =
  'canal de denuncias, canal ético, compliance corporativo, Ley Karin, denuncias anónimas, compliance LATAM, ética empresarial, canal de denuncias Chile, delitos económicos, cumplimiento normativo, whistleblower, prevención de acoso laboral';
