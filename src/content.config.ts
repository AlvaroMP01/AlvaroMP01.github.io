import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One entry per project *per locale*. `slug` is shared across locales so the ES
// and EN versions of a project map to the same logical project, while `locale`
// distinguishes them. Markdown lives in src/content/projects/ — either flat
// (`tourment.es.md` / `tourment.en.md`) or nested (`es/tourment.md`).
const projects = defineCollection({
  // Two locale files share the same `slug` (e.g. `tourment.es.md` /
  // `tourment.en.md`). The default generateId strips locale-ish suffixes,
  // so both files collapse to id "tourment" and one entry silently
  // overwrites the other. Use the full relative path (sans extension) as
  // the id instead so every locale file stays a distinct collection entry.
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/projects',
    generateId: ({ entry }) => entry.replace(/\.md$/, '')
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Shared identifier across locales; URL-safe (kebab-case) since it drives routing.
      slug: z
        .string()
        .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'slug must be kebab-case'),
      locale: z.enum(['es', 'en']),
      // Per-project accent color (hex) — the main lever for project identity.
      accentColor: z
        .string()
        .regex(/^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, 'accentColor must be a hex color (e.g. #E5394B)'),
      tagline: z.string(),
      role: z.string(),
      year: z.number().int().gte(2000),
      stack: z.array(z.string()).min(1),
      demoUrl: z.string().url().optional(),
      repoUrl: z.string().url().optional(),
      docsUrl: z.string().url().optional(),
      // Content images live in src/assets/ so Astro optimizes them; never in public/.
      cover: image(),
      screenshots: z.array(image()).optional(),
      featured: z.boolean().default(false),
      order: z.number().int().default(0),
    }),
});

export const collections = { projects };
