import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { futurePath, futureGoals, futureIntro, futureTagline } from '@/data/future';

export default function Future() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);

  return (
    <section
      id="future"
      ref={ref}
      className="section-padding relative overflow-hidden border-t border-border-subtle"
    >
      {/* Background cinematic gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent-glow blur-[150px] opacity-30" />
      </div>

      <div className="container-px relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            11 / FUTURE
          </span>
          <h2 className="text-giant font-black uppercase text-text-primary">
            WHERE I'M GOING
          </h2>
        </motion.div>

        {/* Cinematic big typography */}
        <motion.div
          style={{ scale, opacity }}
          className="flex flex-col items-center justify-center py-12 md:py-20"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-4 md:mb-6">
            {futurePath.slice(0, 2).map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className={`text-huge font-black ${
                  word === 'FROM' || word === 'TO'
                    ? 'text-text-tertiary text-giant'
                    : 'text-text-primary'
                }`}
              >
                {word}
              </motion.span>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-4 md:mb-6">
            {futurePath.slice(2, 4).map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
                className={`text-huge font-black ${
                  word === 'TO'
                    ? 'text-text-tertiary text-giant'
                    : 'text-text-primary'
                }`}
              >
                {word}
              </motion.span>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            {futurePath.slice(4).map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 + i * 0.15 }}
                className={`text-huge font-black ${
                  word === 'TO'
                    ? 'text-text-tertiary text-giant'
                    : 'text-accent'
                }`}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-3xl font-light text-text-secondary text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          {futureIntro}
        </motion.p>

        {/* Goals */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
          {futureGoals.map((goal, i) => (
            <motion.div
              key={goal.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="px-6 py-3 md:px-8 md:py-4 border border-border-card rounded-full hover:border-accent-dim transition-colors duration-500"
            >
              <span className="text-sm md:text-lg font-medium text-text-primary">
                {goal.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center text-2xl md:text-4xl font-bold text-accent"
        >
          {futureTagline}
        </motion.p>
      </div>
    </section>
  );
}
