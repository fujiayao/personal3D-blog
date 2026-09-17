import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { marqueeRow1, marqueeRow2 } from '@/data/skills';

export default function MarqueeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const xRight = useTransform(scrollYProgress, [0, 1], ['-50%', '0%']);

  const dup1 = [...marqueeRow1, ...marqueeRow1];
  const dup2 = [...marqueeRow2, ...marqueeRow2];

  return (
    <section
      ref={ref}
      className="relative py-12 md:py-20 overflow-hidden border-y border-border-subtle"
    >
      <div className="flex flex-col gap-4 md:gap-8">
        <motion.div style={{ x: xRight }} className="flex whitespace-nowrap">
          {dup1.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="mx-8 md:mx-12 text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-text-primary"
            >
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div style={{ x: xLeft }} className="flex whitespace-nowrap">
          {dup2.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="mx-8 md:mx-12 text-4xl md:text-6xl lg:text-7xl font-light uppercase tracking-tight text-stroke"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
