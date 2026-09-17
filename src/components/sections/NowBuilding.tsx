import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { currentProjects } from '@/data/current';

export default function NowBuilding() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['-50%', '50%']);

  return (
    <section id="now" ref={ref} className="section-padding relative overflow-hidden border-t border-border-subtle">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            08 / NOW
          </span>
          <h2 className="text-giant font-black uppercase text-text-primary">
            WHAT I'M BUILDING NOW
          </h2>
        </motion.div>

        <div className="space-y-3 md:space-y-4">
          {currentProjects.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative p-6 md:p-8 border border-border-subtle rounded-xl hover:border-border-card transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                {/* Index */}
                <span className="text-4xl md:text-6xl font-black text-stroke leading-none">
                  {item.index}
                </span>

                {/* Title + Description */}
                <div className="flex-1">
                  <h3 className="text-lg md:text-2xl font-bold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base font-light text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Status + Progress */}
                <div className="flex md:flex-col items-center md:items-end gap-4 md:gap-2">
                  <span className="text-xs font-medium tracking-[0.15em] uppercase text-accent">
                    {item.status}
                  </span>
                  <div className="w-24 md:w-32 h-1 bg-border-subtle rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full bg-accent rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
