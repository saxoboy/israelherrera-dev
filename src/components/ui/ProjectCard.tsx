'use client';

import { motion } from 'motion/react';
import { RiGithubLine, RiExternalLinkLine, RiCodeLine } from 'react-icons/ri';
import Image from 'next/image';
import type { Project } from '@/data/en/projects';

interface ProjectCardProps {
  project: Project;
  lang: 'en' | 'es';
}

export default function ProjectCard({ project, lang }: ProjectCardProps) {
  const isEs = lang === 'es';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className='card-base overflow-hidden group flex flex-col'
    >
      {/* Browser chrome mockup */}
      <div className='bg-[rgba(255,255,255,0.03)] border-b border-border px-4 py-3 flex items-center gap-2'>
        <span className='h-2.5 w-2.5 rounded-full bg-red-500/60' />
        <span className='h-2.5 w-2.5 rounded-full bg-yellow-400/60' />
        <span className='h-2.5 w-2.5 rounded-full bg-green-500/60' />
        <div className='ml-2 flex-1 bg-[rgba(255,255,255,0.05)] rounded px-3 py-1'>
          <span className='font-mono text-xs text-muted truncate block'>
            {project.demoUrl ?? `github.com/saxoboy/${project.id}`}
          </span>
        </div>
      </div>

      {/* Project image */}
      <div className='relative h-44 bg-[rgba(190,242,100,0.03)] overflow-hidden'>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className='object-cover transition-transform duration-500 group-hover:scale-105'
          />
        ) : (
          <div className='w-full h-full flex items-center justify-center'>
            <RiCodeLine size={40} className='text-lime/20' />
          </div>
        )}
      </div>

      {/* Content */}
      <div className='p-5 flex flex-col flex-1 gap-3'>
        <h3 className='font-mono text-base md:text-sm font-bold text-text leading-snug'>
          {project.name}
        </h3>

        <p className='text-base md:text-sm text-muted leading-relaxed flex-1'>
          {project.description}
        </p>

        {/* Tech tags */}
        <div className='flex flex-wrap gap-1.5'>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className='font-mono text-xs border border-lime/20 text-lime/80 px-2 py-0.5 rounded'
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        {(project.githubUrl || project.demoUrl) && (
          <div className='flex gap-4 pt-1'>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-1.5 font-mono text-base md:text-sm text-muted hover:text-lime transition-colors'
              >
                <RiGithubLine size={15} />
                {isEs ? 'Código' : 'Code'}
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-1.5 font-mono text-base md:text-sm text-muted hover:text-lime transition-colors'
              >
                <RiExternalLinkLine size={15} />
                Demo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
