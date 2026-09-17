import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { journey } from '@/data/journey';

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="journey" className="section-padding relative overflow-hidden">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            03 / MY JOURNEY
          </span>
          <h2 className="text-giant font-black uppercase text-text-primary">MY JOURNEY</h2>
          <p className="text-text-secondary text-lg font-light mt-3 max-w-xl">
            从学习到创造，一条不断延伸的路。
          </p>
        </motion.div>

        <div ref={ref} className="relative pl-8 md:pl-16">
          {/* Timeline track */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-border-subtle" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-0 md:left-4 top-0 w-px bg-accent"
          />

          <div className="space-y-12 md:space-y-20">
            {journey.map((item, i) => (
              <motion.div
                key={`${item.year}-${i}`}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-15%' }}
                transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                {/* Node */}
                <div className="absolute -left-8 md:-left-16 top-1 w-3 h-3 rounded-full border-2 border-accent bg-bg-primary group-hover:bg-accent transition-colors duration-300" />
                <div className="absolute -left-8 md:-left-16 top-0.5 w-6 h-6 rounded-full bg-accent-glow blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex flex-col gap-2 md:gap-3 md:pl-8">
                  <span className="text-4xl md:text-6xl font-black text-text-primary leading-none">
                    {item.year}
                  </span>
                  <h3 className="text-lg md:text-2xl font-bold text-text-primary">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-sm md:text-base font-light text-text-secondary max-w-2xl">
                      {item.description}
                    </p>
                  )}
                  {item.tags && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-light text-text-tertiary border border-border-subtle rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
