export interface Project {
  id: string;
  name: string;
  description: string;
  images?: string[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

// TODO: add real projects with screenshots
export const projects: Project[] = [
  {
    id: 'reputation-manager',
    name: 'Reputation Manager',
    description:
      'Multi-tenant SaaS platform for healthcare professionals in Ecuador. Automates patient feedback collection by sending SMS/WhatsApp messages 2 hours after an appointment, requesting a 1-5 rating, redirecting happy patients (4-5) to Google Reviews, and routing unhappy patients (1-3) to a private feedback form. Features a per-clinic dashboard, campaign management, CSV/Excel patient import, automated weekly reports, and a credit-based billing system with Stripe.',
    technologies: [
      'Next.js',
      'NestJS',
      'PostgreSQL',
      'Redis',
      'BullMQ',
      'Prisma',
      'Better Auth',
      'Twilio',
      'WhatsApp API',
      'Stripe',
      'Resend',
      'Tailwind CSS',
      'Shadcn/ui',
      'TanStack Query',
      'Nx Monorepo',
      'Docker',
      'Railway',
    ],
    images: [
      '/images/project/reputation-manager.png',
      '/images/project/reputation-manager-1.png',
      '/images/project/reputation-manager-2.png',
    ],
    featured: true,
    demoUrl: 'https://reputation-manager-six.vercel.app',
    githubUrl: 'https://github.com/saxoboy/reputation-manager',
  },
  {
    id: 'kanban-demo',
    name: 'Kanban Board Demo',
    description:
      'Modern and fully functional Kanban board application for task management. Features a three-column workflow (To Do, In Progress, Done) with inline editing, real-time search, localStorage persistence, and dark/light mode switching. Built with a clean component-based architecture and no external state libraries.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Shadcn/ui',
      'Radix UI',
      'Lucide React',
      'next-themes',
      'date-fns',
    ],
    images: ['/images/project/kanban-demo.png'],
    featured: false,
    demoUrl: 'https://kanban-demo-nu.vercel.app',
    githubUrl: 'https://github.com/saxoboy/kanban-demo',
  },
  {
    id: 'oikospiano',
    name: 'Oikos Escuela de Piano',
    description:
      'Sitio web oficial para una escuela exclusiva de piano en Cuenca, Ecuador. Incluye hero slideshow, galería, testimonios, programas, FAQ, integración con WhatsApp y Google Maps, SEO optimizado con Schema.org LocalBusiness y soporte para Google Analytics.',
    images: [
      '/images/project/oikospiano.png',
      '/images/project/oikospiano-1.png',
      '/images/project/oikospiano-2.png',
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Embla Carousel',
      'shadcn/ui',
      'Google Maps API',
      'Vercel Analytics',
    ],
    githubUrl: 'https://github.com/saxoboy/oikospiano',
    demoUrl: 'https://oikospiano.com',
    featured: true,
  },
  {
    id: 'heraldos-web',
    name: 'Heraldos de Cristo - Ministerio de Caballeros',
    description:
      'Sitio web institucional para el Ministerio de Caballeros Heraldos de Cristo. Incluye secciones de noticias, eventos con galerías, multimedia, documentos (reglamentos y formularios), tienda, directorio de la junta ejecutiva y presidentes por países, formulario de contacto con envío de emails, y panel de autenticación.',
    images: [
      '/images/project/heraldoscla.png',
      '/images/project/heraldoscla-1.png',
      '/images/project/heraldoscla-2.png',
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Radix UI',
      'Resend',
      'SendGrid',
      'React Hook Form',
      'Zod',
      'Embla Carousel',
      'next-video',
      'Vercel Analytics',
      'next-themes',
    ],
    demoUrl: 'https://heraldoscla.org',
    featured: true,
  },
  {
    id: 'agenda-citas',
    name: 'Appointment Schedule',
    description:
      'Appointment scheduling system that allows users to choose a date and time to book an appointment. Full CRUD with real-time updates.',
    technologies: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Firebase',
      'Zustand',
    ],
    images: ['/images/project/Appointment-Schedule.png'],
    githubUrl: 'https://github.com/saxoboy/odonto-system',
    demoUrl: 'https://odonto-system-psi.vercel.app',
    featured: false,
  },
  {
    id: 'weather-app',
    name: 'Weather App',
    description:
      'Single-page app that displays current weather information, 8-day and 5-day forecasts for 10 different cities. Uses the Open Weather API and SWR for data fetching.',
    technologies: [
      'React',
      'TypeScript',
      'Vite.js',
      'Tailwind CSS',
      'Open Weather API',
      'SWR',
    ],
    images: ['/images/project/weather-app.png'],
    githubUrl: 'https://github.com/saxoboy/weather-app-v2',
    demoUrl: 'https://weather-app-saxoboy.netlify.app',
    featured: false,
  },
  {
    id: 'cake-portfolio',
    name: 'Cake Portfolio — Backend API',
    description:
      'REST/GraphQL API backend for a cake portfolio app. Built with NestJS, PostgreSQL, GraphQL and TypeORM. Frontend coming soon.',
    technologies: [
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'GraphQL',
      'TypeORM',
      'Passport',
    ],
    githubUrl: 'https://github.com/saxoboy/postgres-cakes-porfolio-app-server',
    images: ['/images/project/backend-cake-portfolio.png'],
    featured: false,
  },
  {
    id: 'website-layout-demo',
    name: 'Website Layout Demo',
    description:
      'Landing page layout demo built with Gatsby, React and Tailwind CSS. Focused on clean design and performance.',
    technologies: ['React', 'Gatsby.js', 'Tailwind CSS'],
    images: ['/images/project/website-layout.png'],
    githubUrl: 'https://github.com/saxoboy/avalith-demo',
    demoUrl: 'https://thirsty-engelbart-abee30.netlify.app',
    featured: false,
  },
];
