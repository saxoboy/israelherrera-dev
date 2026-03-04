'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { RiArrowRightLine } from 'react-icons/ri';
import ProjectCard from '@/components/ui/ProjectCard';
import type { Project } from '@/data/en/projects';

interface ProjectsProps {
  lang: 'en' | 'es';
  data: Project[];
}

export default function Projects({ lang, data }: ProjectsProps) {
  const isEs = lang === 'es';
  const featured = data.filter((p) => p.featured).slice(0, 3);

  return (
    <section id='projects' className='py-20 px-6'>
      <div className='mx-auto max-w-6xl'>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4'
        >
          <div>
            <p className='font-mono text-sm tracking-widest text-lime uppercase mb-3'>
              [{isEs ? 'PROYECTOS_DESTACADOS' : 'FEATURED_PROJECTS'}]
            </p>
            <h2 className='text-3xl md:text-4xl font-bold text-gradient-lime'>
              {isEs ? 'Proyectos' : 'Projects'}
            </h2>
          </div>
          <Link
            href={isEs ? '/es/projects' : '/projects'}
            className='flex items-center gap-2 font-mono text-base md:text-sm text-muted hover:text-lime transition-colors group shrink-0'
          >
            {isEs ? 'Ver todos' : 'View all'}
            <RiArrowRightLine className='group-hover:translate-x-1 transition-transform' />
          </Link>
        </motion.div>

        {/* Projects grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProjectCard project={project} lang={lang} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
