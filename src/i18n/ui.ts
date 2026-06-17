// UI strings keyed by locale. Native Astro i18n routing: ES at "/", EN at "/en/".
// Keep nav hrefs root-relative and locale-aware — never hardcode the domain here.

export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

export const ui = {
  es: {
    brand: {
      name: 'Álvaro Morcillo',
      fullName: 'Álvaro Morcillo Pérez',
      mark: 'A'
    },
    nav: {
      projects: { label: 'Proyectos', href: '/#proyectos' },
      about: { label: 'Sobre mí', href: '/#sobre-mi' },
      process: { label: 'Proceso', href: '/#proceso' },
      contact: { label: 'Contacto', href: '/#contacto' }
    },
    availability: 'Disponible',
    themeToggleAria: 'Cambiar tema',
    langToggle: {
      label: 'EN',
      aria: 'Cambiar a inglés'
    },
    mobileNavAria: 'Menú',
    footer: {
      role: 'Desarrollador Fullstack · España',
      rights: 'Todos los derechos reservados.'
    }
  },
  en: {
    brand: {
      name: 'Álvaro Morcillo',
      fullName: 'Álvaro Morcillo Pérez',
      mark: 'A'
    },
    nav: {
      projects: { label: 'Projects', href: '/en/#projects' },
      about: { label: 'About', href: '/en/#about' },
      process: { label: 'Process', href: '/en/#process' },
      contact: { label: 'Contact', href: '/en/#contact' }
    },
    availability: 'Available',
    themeToggleAria: 'Toggle theme',
    langToggle: {
      label: 'ES',
      aria: 'Switch to Spanish'
    },
    mobileNavAria: 'Menu',
    footer: {
      role: 'Fullstack Developer · Spain',
      rights: 'All rights reserved.'
    }
  }
} as const;

export function t<L extends Locale>(locale: L): (typeof ui)[L] {
  return ui[locale];
}
