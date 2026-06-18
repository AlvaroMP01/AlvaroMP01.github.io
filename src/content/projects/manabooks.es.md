---
title: "Manabooks"
slug: "manabooks"
locale: "es"
accentColor: "#E08CB8"
tagline: "App personal de seguimiento de lectura: registra lo que lees, filtra por estado y descubre libros nuevos con Google Books."
role: "Desarrollo fullstack · personal"
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

## Contexto

Manabooks es una app personal de seguimiento de lectura: registra lo que vas
leyendo, filtra por estado (leyendo, pendiente, terminado) y descubre libros
nuevos a través de Google Books. La identidad visual es deliberadamente
"girlypop": pastel, redondeada y expresiva, con mucha personalidad propia.

## Decisiones técnicas

- **Next.js 16 con React Server Components.** La mayor parte de la app se
  renderiza en el servidor; el cliente solo recibe JavaScript donde la
  interacción realmente lo necesita, lo que se traduce en menos JS y cargas
  más rápidas.
- **Supabase como backend completo** (Postgres + Auth + Storage): un
  servicio gestionado en lugar de mantener un servidor propio. Las claves
  sensibles (la de Supabase, la de Google Books) viven solo en el servidor y
  nunca se exponen con el prefijo público `NEXT_PUBLIC`.
- **Google Books API** para la búsqueda y los metadatos de cada libro,
  invocada siempre desde el servidor para que la clave de la API no llegue
  al cliente.
- **Sistema de diseño propio en Tailwind v4**: una paleta de tokens
  (`--color-mb-*`: rosa, crema, morado, menta…) definida con `@theme`, más
  tipografías display expresivas (Pacifico, Quicksand) para reforzar la
  identidad visual.
- **Calidad como parte del flujo.** Tests unitarios con Vitest y end-to-end con
  Playwright, orquestados por un pipeline de GitHub Actions que **bloquea los
  merges si algún test falla**. La autenticación va con Google OAuth sobre
  Supabase.

## Proceso y aprendizajes

Mover la mayor parte del renderizado al servidor mantuvo el bundle de
cliente pequeño sin sacrificar interactividad donde importaba. Integrar una
API externa de forma limpia significó mantener tanto las claves como las
llamadas del lado del servidor desde el principio, en vez de añadirlo como
parche después.
