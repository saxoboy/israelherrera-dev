'use client';

import { motion } from 'motion/react';

interface Stat {
  label: string;
  value: string;
  color: string;
}

interface StatsGridProps {
  stats: Stat[];
}

export default function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className='grid grid-cols-2 gap-3 w-full max-w-sm mx-auto'>
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
          className='card-base p-4'
        >
          <p className='font-mono text-[10px] tracking-widest text-muted uppercase mb-1'>
            [{stat.label}]
          </p>
          <p className={`font-mono text-xl font-bold ${stat.color}`}>
            {stat.value}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
