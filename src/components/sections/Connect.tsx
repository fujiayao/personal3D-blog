import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import MagneticButton from '@/components/ui/MagneticButton';

export default function Connect() {
  return (
    <section className="section-padding relative overflow-hidden border-t border-border-subtle">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            14 / CONNECT
          </span>
          <h2 className="text-giant font-black uppercase text-text-primary">
            LET'S CONNECT
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6 md:gap-8">
          {profile.contact.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <MagneticButton
                href={item.href}
                strength={0.2}
                className="group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl md:text-5xl font-light text-text-primary group-hover:text-accent transition-colors duration-300">
                    {item.label}
                  </span>
                  <span className="text-text-tertiary text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    →
                  </span>
                </div>
              </MagneticButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
