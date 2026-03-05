'use client';

import { motion } from 'motion/react';
import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiVite,
  SiGatsby,
  SiRedux,
  SiApollographql,
  SiReactquery,
  SiVuedotjs,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiGraphql,
  SiStrapi,
  SiTailwindcss,
  SiMui,
  SiStyledcomponents,
  SiBootstrap,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiGithub,
  SiJest,
  SiTestinglibrary,
  SiStorybook,
  SiFigma,
  SiDocker,
  SiShadcnui,
  SiSolidity,
  SiSanity,
  SiContentful,
  SiSupabase,
  SiPostman,
  SiGooglecloud,
  SiNx,
} from 'react-icons/si';
import { VscAzureDevops } from 'react-icons/vsc';
import { FaAws } from 'react-icons/fa';
import type { SkillCategory } from '@/data/en/skills';

const iconMap: Record<string, React.ElementType> = {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiVite,
  SiGatsby,
  SiRedux,
  SiApollographql,
  SiReactquery,
  SiVuedotjs,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiGraphql,
  SiStrapi,
  SiTailwindcss,
  SiShadcnui,
  SiMui,
  SiStyledcomponents,
  SiBootstrap,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiGithub,
  SiJest,
  SiTestinglibrary,
  SiStorybook,
  SiFigma,
  SiAzuredevops: VscAzureDevops,
  SiDocker,
  SiAmazonwebservices: FaAws,
  SiSolidity,
  SiSanity,
  SiContentful,
  SiSupabase,
  SiPostman,
  SiGooglecloud,
  SiNx,
};

interface SkillsProps {
  lang: 'en' | 'es';
  categories: SkillCategory[];
  title?: string;
  subtitle?: string;
  learningLabel?: string;
}

export default function Skills({
  categories,
  title = 'Skills',
  subtitle,
  learningLabel = 'learning',
}: SkillsProps) {
  return (
    <section id='skills' className='py-24 px-6'>
      <div className='mx-auto max-w-6xl w-full'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-gradient-lime'>
            {title}
          </h2>
          {subtitle && (
            <p className='text-muted mt-3 text-base md:text-sm'>{subtitle}</p>
          )}
        </motion.div>

        <div className='flex flex-col gap-10'>
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.07 }}
              className='flex flex-col lg:flex-row lg:gap-8'
            >
              {/* Category label */}
              <div className='w-full lg:w-1/4 mb-4 lg:mb-0 lg:pt-2'>
                <h3 className='font-mono text-lg text-text font-semibold'>
                  {category.label}
                </h3>
              </div>

              {/* Skills grid */}
              <ul className='w-full lg:w-3/4 flex flex-wrap gap-3'>
                {category.skills.map((skill, skillIndex) => {
                  const Icon = iconMap[skill.icon];
                  return (
                    <motion.li
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: catIndex * 0.07 + skillIndex * 0.04,
                      }}
                      whileHover={{ scale: 1.05 }}
                      className='card-base flex flex-col items-center justify-center gap-2 p-4 min-w-22 cursor-default hover:border-lime/40 transition-colors'
                    >
                      {Icon && <Icon className='text-lime' size={28} />}
                      <span className='font-mono text-xs text-muted text-center leading-tight'>
                        {skill.name}
                      </span>
                      {skill.learning && (
                        <span className='font-mono text-[10px] text-lime/50'>
                          {learningLabel}
                        </span>
                      )}
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
