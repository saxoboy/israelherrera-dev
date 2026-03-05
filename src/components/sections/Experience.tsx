'use client';

import { motion } from 'motion/react';
import TimelineItem from '@/components/ui/TimelineItem';
import type { Experience as ExperienceType } from '@/data/en/experience';

interface ExperienceProps {
  lang: 'en' | 'es';
  data: ExperienceType[];
}

export default function Experience({ lang, data }: ExperienceProps) {
  const isEs = lang === 'es';

  return (
    <section id='experience' className='py-24 px-6'>
      <div className='mx-auto max-w-6xl w-full'>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='mb-12'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-gradient-lime'>
            {isEs ? 'Experiencia' : 'Experience'}
          </h2>
          <p className='text-muted mt-3 text-base md:text-sm'>
            {isEs
              ? 'Trayectoria como desarrollador web'
              : 'My journey as a web developer'}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className='max-w-4xl'>
          {data.map((item, i) => (
            <TimelineItem
              key={item.company + item.period}
              item={item}
              index={i}
              isLast={i === data.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
