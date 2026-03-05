export interface Experience {
  company: string;
  role: string;
  period: string;
  duration: string;
  location: string;
  client?: string;
  description: string[];
  technologies: string[];
  current?: boolean;
}

export const experience: Experience[] = [
  {
    company: 'Construex',
    role: 'Desarrollador React Frontend',
    period: 'Nov 2023 — Ene 2026',
    duration: '2 años 2 meses',
    location: 'Quito, Ecuador',
    current: true,
    description: [
      'Desarrollé y mantuve una plataforma web de alto rendimiento para la industria de la construcción en Latinoamérica, sirviendo a empresas, productos y servicios en toda la región.',
      'Creé componentes de UI reutilizables y accesibles utilizando React, TypeScript, Shadcn/ui y Tailwind CSS, mejorando la velocidad de desarrollo y la consistencia del diseño.',
      'Implementé SSR y SSG con Next.js para optimizar el SEO y el rendimiento de carga de páginas.',
      'Integré APIs REST y hooks personalizados para gestionar estados complejos de la aplicación.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Shadcn/ui',
      'REST APIs',
    ],
  },
  {
    company: 'Clever IT Group',
    role: 'Desarrollador React Full Stack',
    period: 'Sep 2022 — Mar 2023',
    duration: '6 meses',
    location: 'Santiago, Chile',
    client: 'Universidad San Sebastián — Atando Cabos',
    description: [
      'Desarrollé dos aplicaciones web paralelas: una plataforma para clientes y un sistema de Backoffice para colaboradores y empleados.',
      'Diseñé y consumí APIs de GraphQL con Apollo Client y Server, permitiendo una obtención de datos eficiente y flexible en ambas aplicaciones.',
      'Construí servicios de backend escalables utilizando NestJS y Node.js, asegurando una separación limpia de responsabilidades.',
      'Gestioné la entrega de proyectos a través de Azure DevOps, participando en pipelines de CI/CD y planificación de sprints.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Next.js',
      'NestJS',
      'GraphQL',
      'Apollo Client',
      'Tailwind CSS',
      'Azure DevOps',
    ],
  },
  {
    company: 'SuperDigital by Grupo Santander',
    role: 'React Frontend Developer',
    period: 'Abr 2021 — Ago 2022',
    duration: '1 año 4 meses',
    location: 'Buenos Aires, Argentina',
    client: 'Santander Group',
    description: [
      'Desarrollé una aplicación web de onboarding de clientes para uno de los grupos financieros más grandes de Latinoamérica, escalando en Argentina, México y Brasil.',
      'Arquitecté e implementé una arquitectura de Micro Frontends utilizando React y TypeScript, permitiendo el despliegue independiente entre múltiples equipos.',
      'Gestioné el estado global con Redux, garantizando un flujo de datos predecible en un entorno fintech complejo y multimercado.',
      'Redacté pruebas unitarias e integrales usando Jest y React Testing Library, manteniendo alta cobertura de código.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Redux',
      'Micro Frontends',
      'Jest',
      'Material UI',
      'Styled Components',
      'Azure DevOps',
    ],
  },
  {
    company: 'Avalith',
    role: 'React Frontend Developer',
    period: 'Dic 2020 — Abr 2021',
    duration: '4 meses',
    location: 'Mar del Plata, Argentina',
    description: [
      'Desarrollé el sitio web corporativo de Avalith, una consultora tecnológica, utilizando React, Gatsby.js y Tailwind CSS, con enfoque en rendimiento y optimización SEO.',
      'Implementé Generación de Sitios Estáticos (SSG) con Gatsby.js para lograr tiempos de carga rápidos y mejor indexación.',
      'Gestioné el estado con Context API y React Hooks personalizados, manteniendo el código limpio.',
    ],
    technologies: ['React', 'Gatsby.js', 'Tailwind CSS', 'Context API', 'SSG'],
  },
  {
    company: 'Freelancer',
    role: 'Desarrollador Full Stack',
    period: 'Nov 2018 — Dic 2020',
    duration: '2 años 1 mes',
    location: 'Remoto',
    client: 'Shaddai Solutions LLC (USA)',
    description: [
      'Diseñé y desarrollé una aplicación CRM para un cliente en EE. UU., gestionando el desarrollo de extremo a extremo.',
      'Construí interfaces dinámicas basadas en datos utilizando React, Next.js y Material UI, consumiendo APIs GraphQL a través de Apollo Client.',
      'Entregué múltiples aplicaciones web para diversos clientes en diferentes industrias.',
    ],
    technologies: [
      'React',
      'Next.js',
      'Node.js',
      'GraphQL',
      'Apollo Client',
      'Material UI',
    ],
  },
  {
    company: 'Desarrollador Web — Varias Empresas',
    role: 'Desarrollador Web',
    period: 'Abr 2009 — Sep 2018',
    duration: '9 años 5 meses',
    location: 'Cuenca, Ecuador',
    description: [
      'Construí y mantuve más de 20 sitios y aplicaciones web para clientes locales en los sectores de turismo, hotelería y servicios en Ecuador.',
      'Desarrollé temas y plugins personalizados de WordPress utilizando PHP, JavaScript, HTML5 y CSS3.',
      'Gestioné bases de datos MySQL, incluyendo diseño de esquemas y optimización de consultas.',
    ],
    technologies: ['PHP', 'JavaScript', 'WordPress', 'MySQL', 'HTML5', 'CSS3'],
  },
];
