import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProjectsPage from '@/components/sections/ProjectsPage';
import { projects } from '@/data/es/projects';

export const metadata: Metadata = {
  title: 'Proyectos | Israel Herrera',
  description:
    'Todos los proyectos de Israel Herrera — Desarrollador Full Stack.',
  alternates: {
    canonical: 'https://israelherrera.dev/es/projects',
    languages: { en: 'https://israelherrera.dev/projects' },
  },
};

export default function ProjectsRouteEs() {
  return (
    <>
      <Navbar lang='es' />
      <main>
        <ProjectsPage lang='es' data={projects} />
      </main>
      <Footer lang='es' />
    </>
  );
}
