import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface CharacterRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
}

export default function CharacterReveal({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.03,
  as: Tag = 'div',
}: CharacterRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.4'],
  });

  const blurAmount = useTransform(scrollYProgress, [0, 1], ['8px', '0px']);
  const filter = useTransform(blurAmount, (b) => `blur(${b})`);

  const chars = text.split('');

  return (
    <motion.div
      ref={ref}
      style={{ filter }}
      className={`overflow-hidden ${className}`}
    >
      <Tag className="flex flex-wrap">
        {chars.map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{
              duration: 0.5,
              delay: delay + i * staggerDelay,
              ease: [0.33, 1, 0.68, 1],
            }}
            className="inline-block will-change-transform"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}
