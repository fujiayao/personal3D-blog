import { motion } from 'framer-motion';
import { profile } from '@/data/profile';

export default function Footer() {
  return (
    <footer className="relative pt-24 md:pt-32 pb-8 border-t border-border-subtle overflow-hidden">
      <div className="container-px">
        {/* Mantras */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row justify-between gap-4 mb-12 md:mb-20"
        >
          {['KEEP BUILDING.', 'KEEP LEARNING.', 'KEEP EXPLORING.'].map((text, i) => (
            <motion.span
              key={text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-lg md:text-2xl font-light text-text-secondary"
            >
              {text}
            </motion.span>
          ))}
        </motion.div>

        {/* Giant name */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-[clamp(2rem,9vw,9rem)] font-black text-text-primary leading-none tracking-tighter">
            格子衫程序尧
          </h2>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border-subtle">
          <p className="text-text-tertiary text-xs md:text-sm font-light tracking-wider">
            © 2026 {profile.name}
          </p>
          <p className="text-text-tertiary text-xs md:text-sm font-light tracking-wider">
            Built with curiosity + AI
          </p>
        </div>
      </div>
    </footer>
  );
}
