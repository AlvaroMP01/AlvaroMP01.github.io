---
title: "Manabooks"
slug: "manabooks"
locale: "en"
accentColor: "#E08CB8"
tagline: "Personal reading-tracker app: log what you read, filter by status and discover new books with Google Books."
role: "Fullstack development · personal"
year: 2026
stack: ["Next.js", "TypeScript", "Supabase", "Playwright", "GitHub Actions", "Tailwind"]
demoUrl: "https://manabooks.vercel.app"
repoUrl: "https://github.com/AlvaroMP01/Manabooks"
cover: "../../assets/projects/manabooks/home.jpg"
screenshots:
  - "../../assets/projects/manabooks/library.jpg"
  - "../../assets/projects/manabooks/book-details.jpg"
  - "../../assets/projects/manabooks/search.jpg"
  - "../../assets/projects/manabooks/progress.jpg"
  - "../../assets/projects/manabooks/profile.jpg"
featured: true
order: 2
---

## Context

Manabooks is a personal reading-tracker app: log what you're reading, filter
by status (reading, pending, finished) and discover new books through Google
Books. The visual identity is deliberately "girlypop" — pastel, rounded and
expressive, with a lot of personality of its own.

## Technical decisions

- **Next.js 16 with React Server Components.** Most of the app renders on
  the server; the client only ships JavaScript where interaction truly needs
  it, which means less JS and faster loads.
- **Supabase as the whole backend** (Postgres + Auth + Storage): a managed
  service instead of running an own server. Sensitive keys (Supabase,
  Google Books) live server-only and are never exposed with the public
  `NEXT_PUBLIC` prefix.
- **Google Books API** powers search and book metadata, always called from
  the server so the API key never reaches the client.
- **A custom Tailwind v4 design system**: a token palette
  (`--color-mb-*`: pink, cream, purple, mint…) defined with `@theme`, plus
  expressive display fonts (Pacifico, Quicksand) to carry the visual
  identity.
- **Quality built into the workflow.** Unit tests with Vitest and end-to-end
  tests with Playwright, orchestrated by a GitHub Actions pipeline that
  **blocks merges if any test fails**. Authentication uses Google OAuth on top
  of Supabase.

## Process & learnings

Moving most of the rendering to the server kept the client bundle small
without giving up interactivity where it mattered. Integrating an external
API cleanly meant keeping both the keys and the fetching on the server side
from the start, instead of bolting it on as an afterthought.
