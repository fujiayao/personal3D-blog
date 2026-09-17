import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { useRef } from 'react';

interface MarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
  itemClassName?: string;
  reverse?: boolean;
}

export default function Marquee({
  items,
  direction = 'right',
  className = '',
  itemClassName = '',
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], ['-30%', '30%']);
  const xRight = useTransform(scrollYProgress, [0, 1], ['30%', '-30%']);
  const x = direction === 'right' ? xRight : xLeft;

  const duplicated = [...items, ...items, ...items, ...items];

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <motion.div style={{ x }} className="flex whitespace-nowrap">
        {duplicated.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={`mx-6 md:mx-10 text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight ${itemClassName}`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
