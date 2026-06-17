// Home page copy, keyed by locale. Extracted faithfully from the design
// mockup (portfolioDesign/home.html — data-es/data-en attributes are the
// source of truth for wording). Components import from here; no copy is
// hardcoded in the components themselves.

export const home = {
  es: {
    hero: {
      eyebrow: 'Desarrollador Junior Fullstack',
      headingLine1: 'Construyo producto de',
      headingAccent: 'extremo a extremo.',
      subheading:
        'Frontend, backend y datos con el mismo criterio. Tomo decisiones técnicas que se notan — y monto sitios que vuelan.',
      ctaPrimary: 'Ver proyectos',
      stackLabel: 'Stack',
      metrics: [
        { value: '100', unit: '/100', label: 'Lighthouse' },
        { value: '0.4', unit: 's', label: 'Carga' },
        { value: '0', unit: 'kb', label: 'JS runtime' }
      ]
    },
    stack: ['TypeScript', 'React', 'Python · Flask', 'MySQL', 'Astro', 'IA'],
    projects: {
      heading: 'Proyectos seleccionados',
      kicker: '01 — Trabajo',
      viewCase: 'Ver caso',
      demo: 'Demo',
      repo: 'Repo',
      docs: 'Docs'
    },
    about: {
      heading: 'Sobre mí',
      kicker: '02 — Perfil',
      bio: [
        'Soy Álvaro, desarrollador fullstack con 1–2 años construyendo aplicaciones web completas. Titulado en FP de Desarrollo de Aplicaciones Web (DAW) y certificado en IA.',
        'Me muevo cómodo entre el frontend y el backend, y disfruto la parte de decidir: qué stack, qué arquitectura, qué se simplifica. Abierto a varios roles — frontend, backend o fullstack — sin perder foco.'
      ],
      credentials: [
        {
          title: 'Certificación en IA',
          detail: 'Integración de modelos en producto real',
          highlight: true
        },
        {
          title: 'FP DAW',
          detail: 'Desarrollo de Aplicaciones Web — titulado',
          highlight: false
        }
      ],
      skills: [
        { group: 'Frontend', count: '06', items: ['React', 'TypeScript', 'Astro', 'Tailwind', 'HTML5', 'CSS'] },
        { group: 'Backend', count: '05', items: ['Python', 'Flask', 'Node.js', 'REST APIs', 'Auth'] },
        { group: 'Datos', count: '03', items: ['MySQL', 'SQL', 'SQLAlchemy'] },
        { group: 'Tooling · IA', count: '05', items: ['Git', 'GitHub Actions', 'Docker', 'LLM APIs', 'Prompt design'] }
      ]
    },
    process: {
      heading: 'Cómo trabajo',
      kicker: '03 — Proceso',
      steps: [
        { n: '01', title: 'Entender', body: 'Defino el problema, el alcance y a quién sirve antes de escribir código.' },
        { n: '02', title: 'Decidir', body: 'Elijo stack y arquitectura por motivos concretos, no por moda. Lo simple gana.' },
        { n: '03', title: 'Construir', body: 'Itero rápido con entregas pequeñas, código limpio y rendimiento desde el día uno.' },
        { n: '04', title: 'Entregar', body: 'Despliego, documento y dejo el proyecto listo para crecer y mantenerse.' }
      ]
    },
    contact: {
      heading: 'Hablemos de tu próximo proyecto.',
      kicker: '04 — Contacto',
      lead: 'Disponible para empleo y para encargos freelance. Respondo en menos de 24 h.',
      emailLabel: 'Email',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      formSending: 'Enviando…',
      formSuccess: '¡Mensaje enviado! Te respondo en menos de 24 h.',
      formError: 'No se pudo enviar. Escríbeme directamente por email.',
      formName: 'Nombre',
      formNamePh: 'Tu nombre',
      formEmailPh: 'tu@email.com',
      formMessage: 'Mensaje',
      formMessagePh: 'Cuéntame qué necesitas…',
      formSubmit: 'Enviar mensaje'
    }
  },
  en: {
    hero: {
      eyebrow: 'Junior Fullstack Developer',
      headingLine1: 'I build product from',
      headingAccent: 'end to end.',
      subheading:
        'Frontend, backend and data with the same judgement. I make technical decisions you can feel — and ship sites that fly.',
      ctaPrimary: 'View projects',
      stackLabel: 'Stack',
      metrics: [
        { value: '100', unit: '/100', label: 'Lighthouse' },
        { value: '0.4', unit: 's', label: 'Load' },
        { value: '0', unit: 'kb', label: 'JS runtime' }
      ]
    },
    stack: ['TypeScript', 'React', 'Python · Flask', 'MySQL', 'Astro', 'AI'],
    projects: {
      heading: 'Selected projects',
      kicker: '01 — Work',
      viewCase: 'View case',
      demo: 'Demo',
      repo: 'Repo',
      docs: 'Docs'
    },
    about: {
      heading: 'About me',
      kicker: '02 — Profile',
      bio: [
        "I'm Álvaro, a fullstack developer with 1–2 years building complete web apps. Graduate in Web Application Development (DAW) and AI-certified.",
        "I'm comfortable across frontend and backend, and I enjoy the deciding part: which stack, which architecture, what to simplify. Open to several roles — frontend, backend or fullstack — without losing focus."
      ],
      credentials: [
        {
          title: 'AI Certification',
          detail: 'Integrating models into real product',
          highlight: true
        },
        {
          title: 'FP DAW',
          detail: 'Web Application Development — graduate',
          highlight: false
        }
      ],
      skills: [
        { group: 'Frontend', count: '06', items: ['React', 'TypeScript', 'Astro', 'Tailwind', 'HTML5', 'CSS'] },
        { group: 'Backend', count: '05', items: ['Python', 'Flask', 'Node.js', 'REST APIs', 'Auth'] },
        { group: 'Data', count: '03', items: ['MySQL', 'SQL', 'SQLAlchemy'] },
        { group: 'Tooling · AI', count: '05', items: ['Git', 'GitHub Actions', 'Docker', 'LLM APIs', 'Prompt design'] }
      ]
    },
    process: {
      heading: 'How I work',
      kicker: '03 — Process',
      steps: [
        { n: '01', title: 'Understand', body: 'I define the problem, scope and who it serves before writing code.' },
        { n: '02', title: 'Decide', body: 'I choose stack and architecture for concrete reasons, not hype. Simple wins.' },
        { n: '03', title: 'Build', body: 'I iterate fast with small deliveries, clean code and performance from day one.' },
        { n: '04', title: 'Ship', body: 'I deploy, document and leave the project ready to grow and be maintained.' }
      ]
    },
    contact: {
      heading: "Let's talk about your next project.",
      kicker: '04 — Contact',
      lead: 'Available for employment and freelance work. I reply within 24 h.',
      emailLabel: 'Email',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      formSending: 'Sending…',
      formSuccess: "Message sent! I'll reply within 24 h.",
      formError: 'Could not send. Email me directly instead.',
      formName: 'Name',
      formNamePh: 'Your name',
      formEmailPh: 'you@email.com',
      formMessage: 'Message',
      formMessagePh: 'Tell me what you need…',
      formSubmit: 'Send message'
    }
  }
} as const;

export type HomeCopy = typeof home;
