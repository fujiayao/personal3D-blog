import { motion } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '@/data/skills';
import type { Skill } from '@/data/skills';

const levelConfig: Record<Skill['level'], { size: string; opacity: string; hover: string }> = {
  core: { size: 'text-3xl md:text-5xl', opacity: 'opacity-100', hover: 'hover:text-accent' },
  proficient: { size: 'text-2xl md:text-4xl', opacity: 'opacity-80', hover: 'hover:text-accent' },
  familiar: { size: 'text-xl md:text-3xl', opacity: 'opacity-60', hover: 'hover:text-accent' },
  exploring: { size: 'text-lg md:text-2xl', opacity: 'opacity-50', hover: 'hover:text-accent' },
};

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="section-padding relative overflow-hidden border-t border-border-subtle">
      <div className="container-px" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            06 / WHAT I USE
          </span>
          <h2 className="text-giant font-black uppercase text-text-primary">WHAT I USE</h2>
        </motion.div>

        <div className="flex flex-wrap items-center gap-x-4 md:gap-x-6 gap-y-4 md:gap-y-6">
          {skills.map((skill, i) => {
            const config = levelConfig[skill.level];
            return (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.15 }}
                className={`${config.size} ${config.opacity} ${config.hover} font-bold tracking-tight cursor-none transition-colors duration-300 will-change-transform`}
                data-cursor="hover"
              >
                {skill.name}
              </motion.span>
            );
          })}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap gap-4 md:gap-8 mt-12 text-xs font-light text-text-tertiary"
        >
          <span><span className="text-accent">●</span> Core</span>
          <span><span className="text-text-primary">●</span> Proficient</span>
          <span><span className="text-text-secondary">●</span> Familiar</span>
          <span><span className="text-text-tertiary">●</span> Exploring</span>
        </motion.div>
      </div>
    </section>
  );
}
