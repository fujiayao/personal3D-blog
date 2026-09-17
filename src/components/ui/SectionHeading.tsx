import { motion } from 'framer-motion';
import CharacterReveal from './CharacterReveal';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  index?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  index,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {index && (
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-2"
        >
          {index} / {title}
        </motion.span>
      )}
      <CharacterReveal
        text={title}
        as="h2"
        className="text-giant font-black uppercase text-text-primary"
      />
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-text-secondary text-lg md:text-xl font-light max-w-2xl mt-2"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
