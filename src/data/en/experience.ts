export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  client?: string;
  description: string[];
  technologies: string[];
  current?: boolean;
}

export const experience: Experience[] = [
  {
    company: 'Construex',
    role: 'React Frontend Developer',
    period: 'Nov 2023 — Jan 2026',
    location: 'Quito, Ecuador',
    current: true,
    description: [
      'Developed and maintained a high-performance web platform for the construction industry in Latin America, serving companies, products, and services across the region.',
      'Built reusable, accessible UI components using React, TypeScript, Shadcn/ui, and Tailwind CSS, improving development speed and design consistency.',
      'Implemented SSR and SSG with Next.js to optimize SEO and page load performance.',
      'Integrated REST APIs and custom hooks to manage complex application state efficiently.',
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
    role: 'React Full Stack Developer',
    period: 'Sep 2022 — Mar 2023',
    location: 'Santiago, Chile',
    client: 'San Sebastian University — Atando Cabos',
    description: [
      'Developed two parallel web applications: a customer-facing platform and a Backoffice system for collaborators and employees.',
      'Designed and consumed GraphQL APIs with Apollo Client and Server, enabling efficient, flexible data fetching across both applications.',
      'Built scalable backend services using NestJS and Node.js, ensuring clean separation of concerns between client and server layers.',
      'Managed project delivery through Azure DevOps, participating in CI/CD pipelines, sprint planning, and code reviews.',
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
    company: 'SuperDigital by Santander Group',
    role: 'React Frontend Developer',
    period: 'Apr 2021 — Aug 2022',
    location: 'Buenos Aires, Argentina',
    client: 'Santander Group',
    description: [
      "Developed a client onboarding web application for one of Latin America's largest financial groups, scaling across Argentina, Mexico, and Brazil.",
      'Architected and implemented a Micro Frontend architecture using React and TypeScript, enabling independent deployment and scalability across multiple teams.',
      'Managed global application state with Redux, ensuring predictable data flow in a complex, multi-market fintech environment.',
      'Wrote unit and integration tests using Jest and React Testing Library, maintaining high code coverage and reducing production bugs.',
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
    period: 'Dec 2020 — Apr 2021',
    location: 'Mar del Plata, Argentina',
    description: [
      'Developed the corporate website for Avalith, a technology consultancy firm, using React, Gatsby.js, and Tailwind CSS, focusing on performance and SEO optimization.',
      'Implemented Static Site Generation (SSG) with Gatsby.js to achieve fast load times and improved search engine indexing.',
      'Managed application state with Context API and custom React Hooks, keeping the codebase clean and maintainable.',
    ],
    technologies: ['React', 'Gatsby.js', 'Tailwind CSS', 'Context API', 'SSG'],
  },
  {
    company: 'Freelancer',
    role: 'Full Stack Developer',
    period: 'Nov 2018 — Dec 2020',
    location: 'Remote',
    client: 'Shaddai Solutions LLC (USA)',
    description: [
      'Designed and developed a CRM web application for a US-based client, handling end-to-end development from architecture to deployment.',
      'Built dynamic, data-driven interfaces using React, Next.js, and Material UI, consuming GraphQL APIs via Apollo Client.',
      'Delivered multiple web applications for various clients across different industries, managing projects autonomously.',
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
    company: 'Web Developer — Various Companies',
    role: 'Web Developer',
    period: 'Apr 2009 — Sep 2018',
    location: 'Cuenca, Ecuador',
    description: [
      'Built and maintained 20+ websites and web applications for local clients across tourism, hospitality, and services sectors.',
      'Developed custom WordPress themes and plugins using PHP, JavaScript, HTML5, and CSS3.',
      'Managed MySQL databases including schema design, query optimization, and data migrations.',
    ],
    technologies: ['PHP', 'JavaScript', 'WordPress', 'MySQL', 'HTML5', 'CSS3'],
  },
];
