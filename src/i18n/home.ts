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
        'Desarrollador fullstack afincado en Granada, abierto a remoto. Titulado en FP Superior de Desarrollo de Aplicaciones Web (DAW) y certificado en Desarrollo con IA aplicada a producción.',
        'En mis prácticas en DoctorSEO integré modelos generativos de IA (imagen y texto) en proyectos web reales —de la configuración al despliegue— además de paneles de administración y landing pages con React, Node.js y Python. Busco mi primer rol como desarrollador, y disfruto la parte de decidir: qué stack, qué arquitectura, qué se simplifica.'
      ],
      credentials: [
        {
          title: 'Certificación en IA',
          detail: 'Desarrollo con IA: de 0 a producción · BIG School',
          highlight: true
        },
        {
          title: 'FP Superior DAW',
          detail: 'Desarrollo de Aplicaciones Web — titulado',
          highlight: false
        },
        {
          title: 'Inglés B2',
          detail: 'First Certificate · Cambridge',
          highlight: false
        },
        {
          title: 'Soft Skills Pro',
          detail: 'Evaluación · Kodo People',
          highlight: false
        }
      ],
      skills: [
        { group: 'Frontend', count: '07', items: ['React', 'Next.js', 'TypeScript', 'Astro', 'Tailwind', 'HTML5', 'CSS'] },
        { group: 'Backend', count: '05', items: ['Python', 'Flask', 'Node.js', 'REST APIs', 'Auth'] },
        { group: 'Datos', count: '05', items: ['MySQL', 'PostgreSQL', 'Supabase', 'SQL', 'SQLAlchemy'] },
        { group: 'Tooling · IA', count: '06', items: ['Git', 'GitHub Actions', 'Docker', 'Linux / Bash', 'LLM APIs', 'Prompt design'] }
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
      docs: {
        heading: 'Documentos',
        cv: 'Descargar CV',
        cvSub: 'PDF',
        cert: 'Certificación en IA',
        certSub: 'Ver · PDF',
        soft: 'Evaluación de soft skills',
        softSub: 'Kodo People · PDF'
      },
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
        'Fullstack developer based in Granada, open to remote. Graduate of the higher vocational degree in Web Application Development (DAW) and certified in AI applied to production.',
        "During my placement at DoctorSEO I integrated generative AI models (image and text) into real client web projects —from setup to production— plus admin panels and landing pages built with React, Node.js and Python. I'm looking for my first developer role, and I enjoy the deciding part: which stack, which architecture, what to simplify."
      ],
      credentials: [
        {
          title: 'AI Certification',
          detail: 'AI from zero to production · BIG School',
          highlight: true
        },
        {
          title: 'Higher VET — DAW',
          detail: 'Web Application Development — graduate',
          highlight: false
        },
        {
          title: 'English B2',
          detail: 'First Certificate · Cambridge',
          highlight: false
        },
        {
          title: 'Soft Skills Pro',
          detail: 'Assessment · Kodo People',
          highlight: false
        }
      ],
      skills: [
        { group: 'Frontend', count: '07', items: ['React', 'Next.js', 'TypeScript', 'Astro', 'Tailwind', 'HTML5', 'CSS'] },
        { group: 'Backend', count: '05', items: ['Python', 'Flask', 'Node.js', 'REST APIs', 'Auth'] },
        { group: 'Data', count: '05', items: ['MySQL', 'PostgreSQL', 'Supabase', 'SQL', 'SQLAlchemy'] },
        { group: 'Tooling · AI', count: '06', items: ['Git', 'GitHub Actions', 'Docker', 'Linux / Bash', 'LLM APIs', 'Prompt design'] }
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
      docs: {
        heading: 'Documents',
        cv: 'Download CV',
        cvSub: 'PDF',
        cert: 'AI Certification',
        certSub: 'View · PDF',
        soft: 'Soft-skills assessment',
        softSub: 'Kodo People · PDF'
      },
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
