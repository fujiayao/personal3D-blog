import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { projects } from '@/data/projects';
import type { Project } from '@/data/projects';

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section id="projects" ref={containerRef} className="relative">
      <div className="container-px pt-24 md:pt-32 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            05 / PROJECTS
          </span>
          <h2 className="text-giant font-black uppercase text-text-primary">PROJECTS</h2>
          <p className="text-text-secondary text-lg font-light mt-3 max-w-xl">
            代表性项目 — 从政府数字化到电商，从浏览器到 AI。
          </p>
        </motion.div>
      </div>

      <div className="container-px">
        <div className="relative" style={{ height: `${projects.length * 90}vh` }}>
          {projects.map((project, i) => (
            <StackCard
              key={project.id}
              project={project}
              index={i}
              total={projects.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StackCard({
  project,
  index,
  total,
  scrollYProgress,
}: {
  project: Project;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = index / total;
  const cardScale = useTransform(
    scrollYProgress,
    [start, Math.min(start + 0.1, 1)],
    [1, 0.92]
  );
  const cardOpacity = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.05), start + 0.05],
    [0, 1]
  );

  return (
    <motion.div
      style={{
        scale: cardScale,
        opacity: cardOpacity,
        top: `${10 + index * 4}vh`,
      }}
      className="sticky h-[80vh] flex items-center"
    >
      <ProjectCard project={project} />
    </motion.div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="w-full border border-border-card rounded-3xl overflow-hidden glass p-6 md:p-12 lg:p-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <div className="flex items-start justify-between mb-6">
            <span className="text-8xl md:text-[10rem] font-black text-stroke leading-none">
              {project.index}
            </span>
            <span className="text-text-tertiary text-sm font-light tracking-wider mt-2">
              PROJECT
            </span>
          </div>
          <h3 className="text-2xl md:text-4xl font-black text-text-primary mb-2">
            {project.title}
          </h3>
          <p className="text-text-secondary text-base md:text-lg font-light mb-6">
            {project.subtitle}
          </p>
          <p className="text-text-tertiary text-sm md:text-base font-light leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-light text-accent border border-accent-dim rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.highlights.map((h) => (
              <span
                key={h}
                className="px-2.5 py-1 text-xs font-light text-text-tertiary border border-border-subtle rounded"
              >
                {h}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6 lg:pl-8 lg:border-l lg:border-border-subtle">
          {project.challenges ? (
            <>
              <span className="text-text-tertiary text-sm font-medium tracking-[0.2em] uppercase">
                TECHNICAL CHALLENGES
              </span>
              {project.challenges.map((challenge, ci) => (
                <motion.div
                  key={ci}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: ci * 0.1 }}
                  className="space-y-2"
                >
                  <h4 className="text-lg md:text-xl font-bold text-accent">
                    {challenge.title}
                  </h4>
                  <p className="text-sm md:text-base font-light text-text-secondary leading-relaxed">
                    {challenge.solution}
                  </p>
                </motion.div>
              ))}
            </>
          ) : (
            <div className="flex flex-col gap-4">
              <span className="text-text-tertiary text-sm font-medium tracking-[0.2em] uppercase">
                HIGHLIGHTS
              </span>
              {project.highlights.map((h, hi) => (
                <motion.div
                  key={hi}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: hi * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-base md:text-lg font-light text-text-secondary">
                    {h}
                  </span>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
