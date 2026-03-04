import type { Project } from '../en/projects';

export const projects: Project[] = [
  {
    id: 'construex',
    name: 'Plataforma Construex',
    description:
      'Plataforma web de alto rendimiento para la industria de la construcción en Latinoamérica, sirviendo a empresas, productos y servicios en toda la región.',
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
    name: 'Atando Cabos — Universidad San Sebastián',
    description:
      'Dos aplicaciones web paralelas: una plataforma para clientes y un sistema de Backoffice para colaboradores y empleados.',
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
    name: 'SuperDigital — Grupo Santander',
    description:
      'Aplicación web de onboarding de clientes para uno de los grupos financieros más grandes de Latinoamérica, con arquitectura de Micro Frontends.',
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
    name: 'Sitio Corporativo Avalith',
    description:
      'Sitio web corporativo para una consultora tecnológica, construido con Gatsby.js con foco en rendimiento y optimización SEO.',
    technologies: ['React', 'Gatsby.js', 'Tailwind CSS', 'SSG'],
    featured: false,
  },
  {
    id: 'shaddai-crm',
    name: 'Aplicación CRM — Shaddai Solutions',
    description:
      'Aplicación CRM full-stack para un cliente en EE. UU., gestionando el desarrollo de extremo a extremo desde la arquitectura hasta el despliegue.',
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
