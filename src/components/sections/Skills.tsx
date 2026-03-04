'use client';

import { motion } from 'motion/react';
import type { Skill } from '@/data/en/skills';

interface SkillsProps {
  lang: 'en' | 'es';
  mastered: Skill[];
  learning: Skill[];
}

function SkillBadge({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className='card-base px-3 py-2 flex items-center gap-2 hover:border-lime/40 transition-all'
    >
      <span className='text-lime text-sm'>▸</span>
      <span className='font-mono text-base md:text-sm text-text'>
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills({ lang, mastered, learning }: SkillsProps) {
  const isEs = lang === 'es';

  return (
    <section id='skills' className='py-20 px-6'>
      <div className='mx-auto max-w-5xl'>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='mb-12 text-center'
        >
          <p className='font-mono text-sm tracking-widest text-lime uppercase mb-3'>
            [{isEs ? 'HABILIDADES' : 'SKILLS'}]
          </p>
          <h2 className='text-3xl md:text-4xl font-bold text-gradient-lime'>
            {isEs ? 'Tecnologías' : 'Technologies'}
          </h2>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          {/* Mastered */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className='font-mono text-sm text-lime mb-4 uppercase tracking-widest'
            >
              {isEs ? '// Lo que manejo' : '// What I work with'}
            </motion.p>
            <div className='flex flex-wrap gap-2'>
              {mastered.map((skill, i) => (
                <SkillBadge key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>

          {/* Learning */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className='font-mono text-sm text-lime mb-4 uppercase tracking-widest'
            >
              {isEs ? '// Estoy aprendiendo' : '// Currently learning'}
            </motion.p>
            <div className='flex flex-wrap gap-2'>
              {learning.map((skill, i) => (
                <SkillBadge key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
