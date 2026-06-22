# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

ConfiaLine — a single-page marketing/landing site for an ethics-hotline / corporate-compliance SaaS aimed at Latin American companies (whistleblower channel, "Ley Karin" / anti-corruption compliance). All user-facing copy is **Spanish** (`<html lang="es">`); keep it that way and match the existing formal B2B tone.

Static Astro site — no backend, no client framework, no database. Output is a fully static build.

## Commands

```sh
npm install        # install deps (Node >= 22.12.0 required)
npm run dev        # dev server at localhost:4321
npm run build      # static build to ./dist/
npm run preview    # serve the production build locally
npm run astro check   # type-check .astro files (tsconfig extends astro/strict)
```

There is no test suite, linter, or formatter configured. `astro check` is the only verification step.

## Architecture

- **`src/pages/index.astro`** is the only route and the single source of truth for page composition. It imports each section component and renders them inside `Layout` in a fixed top-to-bottom order. To reorder, add, or remove a section, edit this file — section order lives nowhere else.
- **`src/layouts/Layout.astro`** is the global shell: `<head>` SEO/Open Graph/Twitter meta (props `title`, `description`), font + global CSS import, and a small inline `<script>` that drives scroll-reveal animations via an `IntersectionObserver`.
- **`src/components/*.astro`** are self-contained, mostly static section components (Hero, PainPoints, ProductDashboard, HumanExperts, ValueProp, Features, Security, FAQ, Navbar, Footer, etc.). They take no props and hold their own markup + copy. Components needing interactivity (Navbar mobile menu, FAQ accordion) inline their own vanilla `<script>` — there is no shared JS module or framework.
- **`public/`** holds images referenced by absolute path (e.g. `/compliance_officer.png`); `src/assets/` holds SVGs.

### Scroll-reveal convention

Animations are CSS-class driven, not JS-configured. Add `reveal` to any element you want to fade/slide in on scroll; stagger siblings with `reveal-delay-100`/`-200`/`-300`/`-400`. The observer in `Layout.astro` adds `.active` when the element enters the viewport (and unobserves it). The animation CSS lives in `src/styles/global.css`. New animated elements need only the classes — no JS changes.

### Styling

Tailwind v4 via the `@tailwindcss/vite` plugin (configured in `astro.config.mjs`) — there is **no `tailwind.config.js`**. The design system is defined in `src/styles/global.css` inside an `@theme` block, which generates the custom utility palette used throughout:

- Colors: `dust-grey`, `floral-white`, `almond-cream`, `almond-cream-hover`, `bg-base`, `bg-card`, `bg-card-alt`, `border-accent` — use these tokens (e.g. `bg-floral-white`, `border-dust-grey/40`) rather than introducing new raw hex values.
- Fonts: `font-serif` (Fraunces, used for headings via the base layer + `.font-serif-title`) and `font-sans` (Plus Jakarta Sans, body default), loaded from Google Fonts in `global.css`.

To extend the palette or typography, edit the `@theme` block in `global.css`.

### Section anchors

Navbar/Footer links and CTAs point at in-page anchors (`#dolores`, `#valores`, `#caracteristicas`, `#seguridad`, `#faq`, `#demo`, `#canal-demo`). When renaming or adding a section `id`, update the corresponding links in `Navbar.astro` (both desktop and mobile menus) and `Footer.astro`.
