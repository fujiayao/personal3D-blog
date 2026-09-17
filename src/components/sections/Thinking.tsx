import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { philosophies, posts } from '@/data/posts';

export default function Thinking() {
  return (
    <section className="section-padding relative overflow-hidden border-t border-border-subtle">
      <div className="container-px">
        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 md:mb-32"
        >
          <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            12 / THINKING
          </span>
          <div className="space-y-3 md:space-y-4">
            {philosophies.map((p, i) => (
              <motion.h2
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className={`font-black leading-tight ${
                  i === 0
                    ? 'text-4xl md:text-7xl text-text-primary'
                    : i === 1
                    ? 'text-4xl md:text-6xl text-text-secondary'
                    : 'text-3xl md:text-5xl text-accent'
                }`}
              >
                {p.text}
              </motion.h2>
            ))}
          </div>
        </motion.div>

        {/* Notes / Blog */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            13 / NOTES
          </span>
          <h2 className="text-giant font-black uppercase text-text-primary">NOTES</h2>
          <p className="text-text-secondary text-lg font-light mt-3 max-w-xl">
            记录 AI、Vibe Coding、架构与思考。
          </p>
        </motion.div>

        {/* Editorial style blog list */}
        <div className="space-y-0">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative grid grid-cols-12 items-center gap-4 py-6 md:py-8 border-t border-border-subtle last:border-b cursor-none hover:bg-bg-secondary/30 transition-colors duration-500"
              data-cursor="hover"
            >
              {/* Index */}
              <span className="col-span-2 md:col-span-1 text-text-tertiary text-sm md:text-base font-light group-hover:text-accent transition-colors duration-300">
                {post.index}
              </span>

              {/* Title */}
              <div className="col-span-10 md:col-span-7">
                <h3 className="text-base md:text-2xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-xs md:text-sm font-light text-text-tertiary mt-1 max-w-md">
                  {post.excerpt}
                </p>
              </div>

              {/* Category */}
              <span className="hidden md:block col-span-2 text-text-secondary text-sm font-light tracking-wider">
                {post.category}
              </span>

              {/* Date + Reading time */}
              <div className="col-span-12 md:col-span-1 flex md:flex-col items-center md:items-end gap-2 md:gap-1 text-text-tertiary text-xs font-light">
                <span>{post.date}</span>
                <span>{post.readingTime}</span>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex col-span-1 justify-end">
                <ArrowUpRight
                  size={20}
                  className="text-text-tertiary group-hover:text-accent group-hover:rotate-45 transition-all duration-300"
                />
              </div>

              {/* Coming soon badge */}
              {post.status === 'coming-soon' && (
                <span className="absolute top-2 right-2 text-[10px] font-light text-text-tertiary px-2 py-0.5 border border-border-subtle rounded-full">
                  SOON
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
