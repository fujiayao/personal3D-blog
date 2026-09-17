import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section className="section-padding relative overflow-hidden border-t border-border-subtle">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            04 / EXPERIENCE
          </span>
          <h2 className="text-giant font-black uppercase text-text-primary">EXPERIENCE</h2>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative p-6 md:p-10 border border-border-subtle rounded-2xl hover:border-border-card transition-colors duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl md:text-3xl font-bold text-text-primary">
                    {exp.company}
                  </h3>
                  <p className="text-text-secondary text-base md:text-lg font-light mt-1">
                    {exp.role}
                  </p>
                </div>
                <span className="text-accent text-sm md:text-base font-medium tracking-wider whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs md:text-sm font-light text-text-tertiary border border-border-subtle rounded-md group-hover:text-text-secondary transition-colors duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Index number */}
              <span className="absolute top-4 right-4 text-6xl md:text-8xl font-black text-stroke leading-none opacity-30">
                {String(i + 1).padStart(2, '0')}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
