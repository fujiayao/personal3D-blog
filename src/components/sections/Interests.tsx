import { motion } from 'framer-motion';
import {
  Brain, Code2, Package, Palette, Cpu, Box,
  Camera, MapPin, Music, Film, BookOpen,
} from 'lucide-react';
import { interests } from '@/data/interests';

const iconMap: Record<string, React.ComponentType<{ size?: number | string; className?: string }>> = {
  Brain, Code2, Package, Palette, Cpu, Box,
  Camera, MapPin, Music, Film, BookOpen,
};

export default function Interests() {
  return (
    <section className="section-padding relative overflow-hidden border-t border-border-subtle">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            09 / INTERESTS
          </span>
          <h2 className="text-giant font-black uppercase text-text-primary">INTERESTS</h2>
          <p className="text-text-secondary text-lg font-light mt-3 max-w-xl">
            一个正在成长的人，还有许多在探索中。
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {interests.map((interest, i) => {
            const Icon = iconMap[interest.icon];
            const isActive = interest.status === 'active';

            return (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.08, y: -8 }}
                className={`relative flex flex-col items-center justify-center gap-3 p-6 md:p-8 rounded-2xl border transition-colors duration-500 cursor-none ${
                  isActive
                    ? 'border-accent-dim bg-bg-secondary/40 hover:border-accent'
                    : 'border-border-subtle bg-bg-secondary/20'
                }`}
                data-cursor="hover"
                style={{
                  width: `${120 + Math.random() * 80}px`,
                  height: `${120 + Math.random() * 80}px`,
                }}
              >
                {Icon && (
                  <Icon
                    size={isActive ? 32 : 24}
                    className={isActive ? 'text-accent' : 'text-text-tertiary'}
                  />
                )}
                <span className={`text-sm md:text-base font-bold tracking-tight text-center ${
                  isActive ? 'text-text-primary' : 'text-text-tertiary'
                }`}>
                  {interest.name}
                </span>
                {!isActive && (
                  <span className="text-[10px] font-light text-text-tertiary absolute bottom-3">
                    {interest.description}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
