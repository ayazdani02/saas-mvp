# Ambiente de IA — ConfiaLine (saas-mvp)

Este directorio versiona el "cerebro" de Claude Code para que el ambiente de trabajo
con IA viaje con el repositorio. Al clonar el proyecto en cualquier equipo (incluido
Windows), tendrás las mismas instrucciones, permisos y configuración base.

## Qué viaja con el repo (versionado en git)

| Archivo | Para qué sirve |
|---|---|
| `../CLAUDE.md` | Fuente de verdad del proyecto: stack, comandos, arquitectura, convenciones de estilo y tono. Claude Code lo lee automáticamente al iniciar. **Es el conocimiento portátil principal.** |
| `.claude/settings.json` | Permisos de proyecto (allowlist de comandos seguros) para minimizar prompts. Compartido por el equipo. |
| `.claude/README.md` | Este documento. |

## Qué NO viaja (es local de cada máquina)

- `.claude/settings.local.json` — overrides personales (modelo, permisos extra).
- El estado global en `~/.claude/` (sesiones, memoria, caches, historial). Es específico
  de cada equipo y está indexado por rutas absolutas, por lo que no es portátil.

## Retomar el trabajo en un equipo nuevo (p. ej. Windows)

1. **Instalar Node** `>= 22.12.0` (ver `engines` en `package.json`).
2. **Clonar e instalar dependencias:**
   ```sh
   git clone <url-del-repo>
   cd saas-mvp
   npm install
   ```
3. **Instalar Claude Code** y abrir el proyecto en esa carpeta. Leerá `CLAUDE.md` y
   `.claude/settings.json` automáticamente.
4. **Verificar el build:**
   ```sh
   npm run dev      # http://localhost:4321
   npm run build    # build estático a ./dist/
   npm run astro check
   ```
