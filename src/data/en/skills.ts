export interface Skill {
  name: string;
  category: string;
}

export const skillsMastered: Skill[] = [
  // Frontend
  { name: 'React.js', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'Vite.js', category: 'Frontend' },
  { name: 'Gatsby.js', category: 'Frontend' },
  { name: 'Redux', category: 'Frontend' },
  { name: 'Apollo Client', category: 'Frontend' },
  { name: 'Micro Frontends', category: 'Frontend' },
  // UI
  { name: 'Tailwind CSS', category: 'UI' },
  { name: 'Material UI', category: 'UI' },
  { name: 'Shadcn/ui', category: 'UI' },
  { name: 'Styled Components', category: 'UI' },
  { name: 'Sass/SCSS', category: 'UI' },
  // Backend
  { name: 'Node.js', category: 'Backend' },
  { name: 'NestJS', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'GraphQL', category: 'Backend' },
  { name: 'REST APIs', category: 'Backend' },
  { name: 'PHP', category: 'Backend' },
  // Testing
  { name: 'Jest', category: 'Testing' },
  { name: 'React Testing Library', category: 'Testing' },
  // Databases
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MySQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  // DevOps
  { name: 'Git / GitHub', category: 'DevOps' },
  { name: 'Azure DevOps', category: 'DevOps' },
  { name: 'CI/CD Pipelines', category: 'DevOps' },
  // CMS
  { name: 'WordPress', category: 'CMS' },
  { name: 'Strapi', category: 'CMS' },
  { name: 'Contentful', category: 'CMS' },
];

export const skillsLearning: Skill[] = [
  { name: 'AWS', category: 'DevOps' },
  { name: 'GCP', category: 'DevOps' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Monorepos (Nx)', category: 'Architecture' },
];
