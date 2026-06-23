---
description: Crea una nueva sección del landing siguiendo las convenciones del repo
argument-hint: <Nombre> [dónde insertarla]
---
Crea una nueva sección para el landing ConfiaLine siguiendo EXACTAMENTE las convenciones del repositorio (ver `CLAUDE.md`).

Sección solicitada: $ARGUMENTS

Pasos obligatorios:
1. Crea `src/components/<Nombre>.astro` — componente estático, sin props, con su propio markup + copy.
2. **Copy en español**, tono B2B formal que haga match con las secciones existentes (Hero, Features, Security…).
3. Usa solo los tokens de color/tipografía definidos en el bloque `@theme` de `src/styles/global.css` (`dust-grey`, `floral-white`, `almond-cream`, `bg-base`, `bg-card`, `border-accent`, `font-serif`, `font-sans`…). **No introduzcas hex crudos nuevos.**
4. Añade clases `reveal` (y `reveal-delay-100/-200/-300/-400` para escalonar hermanos) a los elementos que deban animarse al hacer scroll.
5. Importa y renderiza la sección en `src/pages/index.astro`, en la posición indicada (ese archivo es la única fuente del orden de secciones).
6. Si la sección lleva ancla (`id`), agrega el enlace correspondiente en `Navbar.astro` (menús desktop **y** mobile) y en `Footer.astro`.
7. Al terminar, corre `npm run check` y `npm run build` para verificar que no rompiste nada.
