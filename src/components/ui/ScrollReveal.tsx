import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeInUp, fadeIn, fadeInLeft, fadeInRight, scaleIn, blurIn, staggerContainer } from '@/animations/variants';

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale' | 'blur';

const variantMap: Record<Direction, Variants> = {
  up: fadeInUp,
  down: fadeIn,
  left: fadeInLeft,
  right: fadeInRight,
  scale: scaleIn,
  blur: blurIn,
};

interface ScrollRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  stagger?: boolean;
  staggerDelay?: number;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  className = '',
  once = true,
  stagger = false,
  staggerDelay = 0.08,
}: ScrollRevealProps) {
  const variants = stagger ? staggerContainer : variantMap[direction];

  if (stagger) {
    return (
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: '-10%' }}
        transition={{ staggerChildren: staggerDelay, delayChildren: delay }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-10%' }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
