import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container-px">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: About text */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4 block"
            >
              01 / ABOUT ME
            </motion.span>

            <div className="space-y-6">
              {aboutParagraphs.map((paragraph, pIdx) => (
                <div key={pIdx} className="overflow-hidden">
                  <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ staggerChildren: 0.02, delayChildren: pIdx * 0.15 }}
                    className={`font-light text-text-primary ${
                      pIdx === 0
                        ? 'text-2xl md:text-3xl leading-relaxed'
                        : 'text-lg md:text-xl leading-relaxed text-text-secondary'
                    }`}
                  >
                    {paragraph.split('').map((char, i) => (
                      <motion.span
                        key={i}
                        variants={{
                          hidden: { opacity: 0, y: '100%' },
                          visible: {
                            opacity: 1,
                            y: '0%',
                            transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1] },
                          },
                        }}
                        className="inline-block"
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                    ))}
                  </motion.p>
                </div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap gap-3 pt-4"
              >
                {['AI', 'Agent', 'Vibe Coding', 'Product Building'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 border border-border-card rounded-full text-sm font-light text-text-secondary hover:text-accent hover:border-accent-dim transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="flex flex-col justify-center gap-8 lg:gap-12 lg:pl-8 lg:border-l lg:border-border-subtle">
            {profile.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex items-baseline gap-4"
              >
                <div className="flex items-baseline">
                  {stat.value === '∞' ? (
                    <span className="text-6xl md:text-8xl font-black text-text-primary leading-none">
                      ∞
                    </span>
                  ) : (
                    <AnimatedCounter
                      value={parseInt(stat.value)}
                      suffix={stat.suffix}
                      className="text-6xl md:text-8xl font-black text-text-primary leading-none"
                    />
                  )}
                </div>
                <span className="text-sm md:text-base font-medium tracking-[0.15em] text-text-secondary uppercase">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const aboutParagraphs = [
  '我是一名有 8 年 Java 后端开发经验的软件工程师，长期从事 Spring Cloud 分布式微服务开发。',
  '我做过政府数字化、智慧养老、数字化会员、商城、电商、浏览器、招商引资等不同类型的软件项目。',
  '目前正在从传统后端开发逐渐走向 AI + Agent + Vibe Coding + Product Building。我正在从一个写代码的人，逐渐变成一个能够使用 AI 创造产品的人。',
];
