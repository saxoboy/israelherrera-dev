export interface Skill {
  name: string;
  icon: string;
  learning?: boolean;
}

export interface SkillCategory {
  label: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Languages',
    skills: [
      { name: 'JavaScript', icon: 'SiJavascript' },
      { name: 'TypeScript', icon: 'SiTypescript' },
      { name: 'PHP', icon: 'SiPhp' },
      { name: 'Solidity', icon: 'SiSolidity' },
    ],
  },
  {
    label: 'Frontend',
    skills: [
      { name: 'React.js', icon: 'SiReact' },
      { name: 'Next.js', icon: 'SiNextdotjs' },
      { name: 'Vite.js', icon: 'SiVite' },
      { name: 'Gatsby.js', icon: 'SiGatsby' },
      { name: 'Redux', icon: 'SiRedux' },
      { name: 'Apollo Client', icon: 'SiApollographql' },
      { name: 'React Query', icon: 'SiReactquery' },
      { name: 'Vue.js', icon: 'SiVuedotjs', learning: true },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'SiNodedotjs' },
      { name: 'NestJS', icon: 'SiNestjs' },
      { name: 'Express.js', icon: 'SiExpress' },
      { name: 'GraphQL', icon: 'SiGraphql' },
      { name: 'Strapi', icon: 'SiStrapi' },
      { name: 'Sanity', icon: 'SiSanity' },
      { name: 'Contentful', icon: 'SiContentful' },
    ],
  },
  {
    label: 'CSS / UI',
    skills: [
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
      { name: 'Shadcn/ui', icon: 'SiShadcnui' },
      { name: 'Material UI', icon: 'SiMui' },
      { name: 'Styled Components', icon: 'SiStyledcomponents' },
      { name: 'Bootstrap', icon: 'SiBootstrap' },
    ],
  },
  {
    label: 'Database',
    skills: [
      { name: 'PostgreSQL', icon: 'SiPostgresql' },
      { name: 'MySQL', icon: 'SiMysql' },
      { name: 'MongoDB', icon: 'SiMongodb' },
      { name: 'Firebase', icon: 'SiFirebase' },
      { name: 'Supabase', icon: 'SiSupabase' },
    ],
  },
  {
    label: 'Tools & DevOps',
    skills: [
      { name: 'Git / GitHub', icon: 'SiGithub' },
      { name: 'Jest', icon: 'SiJest' },
      { name: 'Testing Library', icon: 'SiTestinglibrary' },
      { name: 'Storybook', icon: 'SiStorybook' },
      { name: 'Figma', icon: 'SiFigma' },
      { name: 'Azure DevOps', icon: 'SiAzuredevops' },
      { name: 'Nx', icon: 'SiNx' },
      { name: 'Docker', icon: 'SiDocker', learning: true },
      { name: 'Postman', icon: 'SiPostman' },
    ],
  },
  {
    label: 'Cloud',
    skills: [
      { name: 'AWS', icon: 'SiAmazonwebservices' },
      { name: 'GCP', icon: 'SiGooglecloud', learning: true },
    ],
  },
];
