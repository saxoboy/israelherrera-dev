'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import ProjectCard from '@/components/ui/ProjectCard';
import type { Project } from '@/data/en/projects';

interface ProjectsPageProps {
  lang: 'en' | 'es';
  data: Project[];
}

export default function ProjectsPage({ lang, data }: ProjectsPageProps) {
  const isEs = lang === 'es';
  const [filter, setFilter] = useState<string>('all');

  // Collect all unique technologies
  const allTechs = [
    'all',
    ...Array.from(new Set(data.flatMap((p) => p.technologies))),
  ];

  const filtered =
    filter === 'all'
      ? data
      : data.filter((p) => p.technologies.includes(filter));

  return (
    <section className='min-h-screen pt-28 pb-20 px-6'>
      <div className='mx-auto max-w-6xl'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mb-12 text-center'
        >
          <p className='font-mono text-sm tracking-widest text-lime uppercase mb-3'>
            [{isEs ? 'TODOS_LOS_PROYECTOS' : 'ALL_PROJECTS'}]
          </p>
          <h1 className='text-4xl md:text-5xl font-bold text-gradient-lime'>
            {isEs ? 'Proyectos' : 'Projects'}
          </h1>
          <p className='text-muted mt-3 text-base md:text-sm'>
            {isEs
              ? 'Soluciones reales de producción'
              : 'Real production solutions'}
          </p>
        </motion.div>

        {/* Filter tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='flex flex-wrap gap-2 justify-center mb-10'
        >
          {allTechs.slice(0, 15).map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`font-mono text-base md:text-sm px-3 py-1.5 rounded-md border transition-all duration-200 ${
                filter === tech
                  ? 'bg-lime text-black border-lime font-bold'
                  : 'border-border text-muted hover:border-lime/40 hover:text-text'
              }`}
            >
              {tech === 'all' ? (isEs ? 'Todos' : 'All') : tech}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <ProjectCard project={project} lang={lang} />
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className='text-center font-mono text-base md:text-sm text-muted mt-12'>
            {isEs
              ? 'No hay proyectos con esa tecnología.'
              : 'No projects found with that technology.'}
          </p>
        )}
      </div>
    </section>
  );
}
