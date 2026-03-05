'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  RiGithubLine,
  RiExternalLinkLine,
  RiCodeLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiZoomInLine,
} from 'react-icons/ri';
import Image from 'next/image';
import type { Project } from '@/data/en/projects';
import Lightbox from '@/components/ui/Lightbox';

interface ProjectCardProps {
  project: Project;
  lang: 'en' | 'es';
}

export default function ProjectCard({ project, lang }: ProjectCardProps) {
  const isEs = lang === 'es';
  const images = project.images ?? [];
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setDirection(-1);
    setCurrent((c) => (c - 1 + images.length) % images.length);
  };

  const next = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setDirection(1);
    setCurrent((c) => (c + 1) % images.length);
  };

  const hasImages = images.length > 0;
  const hasMultiple = images.length > 1;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -4 }}
        className='card-base overflow-hidden group flex flex-col'
      >
        {/* Browser chrome */}
        <div className='bg-[rgba(255,255,255,0.03)] border-b border-border px-4 py-3 flex items-center gap-2'>
          <span className='h-2.5 w-2.5 rounded-full bg-red-500/60' />
          <span className='h-2.5 w-2.5 rounded-full bg-yellow-400/60' />
          <span className='h-2.5 w-2.5 rounded-full bg-green-500/60' />
          <div className='ml-2 flex-1 bg-[rgba(255,255,255,0.05)] rounded px-3 py-1'>
            <span className='font-mono text-xs text-muted truncate block'>
              {project.demoUrl
                ? `${project.demoUrl.replace(/^https?:\/\//, '')}`
                : `github.com/saxoboy/${project.id}`}
            </span>
          </div>
        </div>

        {/* Image / carousel */}
        <div className='relative h-56 bg-[rgba(190,242,100,0.03)] overflow-hidden'>
          {hasImages ? (
            <>
              {/* Clickable area to open lightbox */}
              <button
                onClick={() => setLightboxOpen(true)}
                className='absolute inset-0 z-10 group/zoom flex items-center justify-center cursor-zoom-in'
                aria-label='View full image'
              >
                <span className='opacity-0 group-hover/zoom:opacity-100 transition-opacity bg-black/50 rounded-full p-2'>
                  <RiZoomInLine size={20} className='text-white' />
                </span>
              </button>

              <AnimatePresence
                initial={false}
                custom={direction}
                mode='popLayout'
              >
                <motion.div
                  key={current}
                  custom={direction}
                  variants={{
                    enter: (d: number) => ({
                      x: d > 0 ? '100%' : '-100%',
                      opacity: 0,
                    }),
                    center: { x: 0, opacity: 1 },
                    exit: (d: number) => ({
                      x: d > 0 ? '-100%' : '100%',
                      opacity: 0,
                    }),
                  }}
                  initial='enter'
                  animate='center'
                  exit='exit'
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className='absolute inset-0'
                >
                  <Image
                    src={images[current]}
                    alt={`${project.name} ${current + 1}`}
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, 400px'
                  />
                </motion.div>
              </AnimatePresence>

              {/* Arrows */}
              {hasMultiple && (
                <>
                  <button
                    onClick={prev}
                    className='absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white rounded-full p-0.5 transition-colors'
                    aria-label='Previous image'
                  >
                    <RiArrowLeftSLine size={18} />
                  </button>
                  <button
                    onClick={next}
                    className='absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white rounded-full p-0.5 transition-colors'
                    aria-label='Next image'
                  >
                    <RiArrowRightSLine size={18} />
                  </button>

                  {/* Dots */}
                  <div className='absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20'>
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation();
                          setDirection(i > current ? 1 : -1);
                          setCurrent(i);
                        }}
                        className={`h-1.5 rounded-full transition-all ${i === current ? 'w-4 bg-lime' : 'w-1.5 bg-white/40'}`}
                        aria-label={`Image ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
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

      {/* Lightbox */}
      {lightboxOpen && hasImages && (
        <Lightbox
          images={images}
          current={current}
          alt={project.name}
          onClose={() => setLightboxOpen(false)}
          onPrev={() =>
            setCurrent((c) => (c - 1 + images.length) % images.length)
          }
          onNext={() => setCurrent((c) => (c + 1) % images.length)}
        />
      )}
    </>
  );
}
