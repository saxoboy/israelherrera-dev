export interface Project {
  id: string;
  name: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

// TODO: add real projects with screenshots
export const projects: Project[] = [
  {
    id: 'construex',
    name: 'Construex Platform',
    description:
      'High-performance web platform for the construction industry in Latin America, serving companies, products, and services across the region.',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Shadcn/ui',
      'REST APIs',
    ],
    demoUrl: 'https://construex.com',
    featured: true,
  },
  {
    id: 'atando-cabos',
    name: 'Atando Cabos — San Sebastian University',
    description:
      'Two parallel web applications: a customer-facing platform and a Backoffice system for collaborators and employees.',
    technologies: [
      'React',
      'TypeScript',
      'Next.js',
      'NestJS',
      'GraphQL',
      'Apollo Client',
    ],
    featured: true,
  },
  {
    id: 'superdigital',
    name: 'SuperDigital — Santander Group',
    description:
      "Client onboarding web application for one of Latin America's largest financial groups, scaling across Argentina, Mexico, and Brazil with Micro Frontend architecture.",
    technologies: [
      'React',
      'TypeScript',
      'Redux',
      'Micro Frontends',
      'Material UI',
      'Jest',
    ],
    featured: true,
  },
  {
    id: 'avalith',
    name: 'Avalith Corporate Website',
    description:
      'Corporate website for a technology consultancy firm, built with Gatsby.js focusing on performance and SEO optimization.',
    technologies: ['React', 'Gatsby.js', 'Tailwind CSS', 'SSG'],
    featured: false,
  },
  {
    id: 'shaddai-crm',
    name: 'CRM Application — Shaddai Solutions',
    description:
      'Full-stack CRM web application for a US-based client, handling end-to-end development from architecture to deployment.',
    technologies: [
      'React',
      'Next.js',
      'Node.js',
      'GraphQL',
      'Apollo Client',
      'Material UI',
    ],
    featured: false,
  },
];
