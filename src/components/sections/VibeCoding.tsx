import { motion } from 'framer-motion';
import { vibeCodingTools } from '@/data/current';

export default function VibeCoding() {
  return (
    <section className="section-padding relative overflow-hidden border-t border-border-subtle">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-accent-glow via-transparent to-transparent opacity-50" />
      </div>

      <div className="container-px relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            07 / AI LAB
          </span>
          <h2 className="text-giant font-black uppercase text-text-primary">VIBE CODING</h2>
          <p className="text-xl md:text-2xl font-light text-text-secondary mt-4 italic">
            I'm no longer coding alone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 mb-12 md:mb-20">
          {[
            { label: 'AI', desc: '大模型与 AI 应用' },
            { label: 'CODING', desc: 'AI 辅助软件开发' },
            { label: 'PRODUCT', desc: '从想法到产品' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center text-center gap-3 p-6 md:p-8 border border-border-subtle rounded-2xl hover:border-accent-dim transition-colors duration-500 group"
            >
              <h3 className="text-4xl md:text-6xl font-black text-text-primary group-hover:text-accent transition-colors duration-300">
                {item.label}
              </h3>
              <p className="text-sm md:text-base font-light text-text-secondary">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tools grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-text-tertiary text-sm font-light tracking-[0.2em] uppercase mb-6">
            TOOLS I'M EXPLORING
          </p>
          <div className="flex flex-wrap gap-3">
            {vibeCodingTools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ scale: 1.08 }}
                className="px-4 py-2 text-sm md:text-base font-medium text-text-primary border border-border-card rounded-lg bg-bg-secondary/50 hover:border-accent hover:text-accent transition-colors duration-300 cursor-none"
                data-cursor="hover"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
