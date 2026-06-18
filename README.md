# alvaromp01.github.io

Personal portfolio of **Álvaro Morcillo Pérez** — fullstack developer based in Granada, Spain. Static, bilingual and fast.

🔗 **Live:** <https://alvaromp01.github.io>

## Highlights

- **Static-first Astro** — ships **zero client-side JavaScript** by default and scores **100/100** Lighthouse performance on desktop.
- **Native i18n** — Spanish at `/`, English at `/en/`, with separate, indexable URLs (no client-side text swapping).
- **Light / dark theme** — driven by a `data-theme` attribute, persisted to `localStorage`, with no flash of the wrong theme on load.
- **Projects as content** — every project is a Markdown file validated by a Zod schema; a single `ProjectLayout` is the only project template, themed per project by an accent colour.
- **Self-hosted fonts** (IBM Plex Sans / Mono, Space Grotesk) — no external font requests.
- **Real contact form** via Web3Forms (no faked submissions), plus a downloadable CV and credentials.

## Tech stack

[Astro 6](https://astro.build) · TypeScript · [Tailwind CSS v4](https://tailwindcss.com) · GitHub Pages

## Project structure

```text
src/
  content.config.ts      # projects collection schema (Zod, locale-aware)
  content/projects/      # one Markdown file per project, per locale
  i18n/                  # UI strings + home copy (ES / EN)
  layouts/               # BaseLayout (shared chrome) + ProjectLayout (project mould)
  components/            # flat section components (Hero, FeaturedProjects, …)
  pages/                 # routes — ES at /, EN at /en/
  assets/                # images, optimised by Astro
  styles/global.css      # Tailwind v4 design tokens (light/dark, accent)
public/                  # favicon, CV and certificate PDFs
.github/workflows/       # build → deploy to GitHub Pages
```

## Local development

```sh
npm install
npm run dev      # dev server at localhost:4321
npm run build    # production build to ./dist (Zod validates all content here)
npm run preview  # preview the production build locally
```

## Adding a project

1. Drop the cover and screenshots in `src/assets/projects/<slug>/`.
2. Create `src/content/projects/<slug>.es.md` and `<slug>.en.md` with the frontmatter the schema expects (`title`, `slug`, `locale`, `accentColor`, `tagline`, `role`, `year`, `stack`, `cover`, …).
3. Run `npm run build` — Zod validates the frontmatter; a missing field fails the build here, not in production.

The project then shows up in the grid and gets its own page in both languages — no layout changes needed.

## Deployment

Every push to `main` triggers a GitHub Actions workflow that builds the site and deploys it to GitHub Pages. The domain lives in a single place (`site` in `astro.config.mjs`); everything absolute (canonical URL, `hreflang`) is derived from it.

---

Built with Astro — and a soft spot for smart technical decisions.
