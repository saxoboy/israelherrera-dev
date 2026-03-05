'use client';

import { motion } from 'motion/react';
import type { Experience } from '@/data/en/experience';

interface TimelineItemProps {
  item: Experience;
  index: number;
  isLast: boolean;
}

export default function TimelineItem({
  item,
  index,
  isLast,
}: TimelineItemProps) {
  return (
    <div className='flex gap-6 relative'>
      {/* Timeline line + dot */}
      <div className='flex flex-col items-center shrink-0'>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className={`h-3 w-3 rounded-full border-2 mt-1 shrink-0 ${
            item.current
              ? 'bg-lime border-lime'
              : 'bg-transparent border-border-hover'
          }`}
        />
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            style={{ transformOrigin: 'top' }}
            className='w-px flex-1 bg-border mt-1'
          />
        )}
      </div>

      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className='card-base p-5 mb-6 flex-1'
      >
        {/* Header */}
        <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3'>
          <div>
            <h3 className='font-mono text-base md:text-sm font-bold text-lime'>
              {item.role}
            </h3>
            <p className='font-mono text-base md:text-sm text-text'>
              {item.company}
            </p>
            {item.client && (
              <p className='font-mono text-base md:text-sm text-muted mt-0.5'>
                ↳ {item.client}
              </p>
            )}
          </div>
          <div className='flex flex-col items-start sm:items-end gap-1 shrink-0'>
            <span className='font-mono text-base md:text-sm text-muted border border-border px-2 py-0.5 rounded'>
              {item.period}
            </span>
            <span className='font-mono text-xs text-lime/60'>
              {item.duration}
            </span>
            <span className='font-mono text-base md:text-sm text-muted'>
              {item.location}
            </span>
          </div>
        </div>

        {/* Description */}
        <ul className='flex flex-col gap-2 mb-3'>
          {item.description.map((desc, i) => (
            <li
              key={i}
              className='flex gap-2 text-base md:text-sm text-muted leading-relaxed'
            >
              <span className='text-lime shrink-0 mt-0.5'>▸</span>
              {desc}
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className='flex flex-wrap gap-1.5'>
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className='font-mono text-xs md:text-[11px] border border-lime/20 text-lime/70 px-2 py-0.5 rounded'
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
