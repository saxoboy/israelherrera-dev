import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProjectsPage from '@/components/sections/ProjectsPage';
import { projects } from '@/data/en/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'All projects by Israel Herrera — Full Stack Developer.',
};

export default function ProjectsRoute() {
  return (
    <>
      <Navbar lang='en' />
      <main>
        <ProjectsPage lang='en' data={projects} />
      </main>
      <Footer lang='en' />
    </>
  );
}
