import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { profile } from '@/data/profile';
import Avatar3D from '@/components/ui/Avatar3D';

const cycleWords = profile.transitioning;

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [currentWord, setCurrentWord] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const avatarY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const avatarScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const statsOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 20, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 20, stiffness: 150 });

  const avatarRotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const avatarRotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const avatarTranslateX = useTransform(springX, [-0.5, 0.5], [-15, 15]);
  const avatarTranslateY = useTransform(springY, [-0.5, 0.5], [-10, 10]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % cycleWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col overflow-hidden grid-bg pt-20 md:pt-24"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent-glow blur-[120px]" />
      </div>

      {/* Main content - horizontal on desktop, stacked on mobile */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-16 container-px py-8">
        {/* Avatar */}
        <div className="relative z-10 flex-shrink-0">
          <div
            className="relative overflow-hidden w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
          >
            <Avatar3D />
          </div>
          {/* Glow behind avatar */}
          <div className="absolute inset-0 -z-10 bg-accent-glow blur-3xl rounded-full pointer-events-none" />
        </div>

        {/* Text content */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-black text-text-primary leading-[0.95] mb-3"
          >
            Hi, I'm 程序尧.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col md:flex-row items-center lg:items-start gap-1 md:gap-3 mb-4"
          >
            {profile.heroSub.map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.15 }}
                className="text-lg md:text-2xl font-light text-text-secondary"
              >
                {line}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-sm md:text-base font-light text-text-tertiary max-w-md mb-6"
          >
            Building software, exploring AI, and documenting the journey.
          </motion.p>

          {/* Currently exploring */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex items-center gap-3 text-sm md:text-base mb-6"
          >
            <span className="text-text-tertiary font-light">Currently exploring:</span>
            <div className="relative h-7 overflow-hidden">
              <AnimatePresence mode="wait">
                <AnimatePresenceWord word={cycleWords[currentWord]} />
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Quick stats inline */}
          <motion.div
            style={{ opacity: statsOpacity }}
            className="flex flex-wrap items-center gap-x-6 gap-y-3 justify-center lg:justify-start"
          >
            <StatBlock value="08" suffix="+" label="YEARS" sublabel="OF BUILDING SOFTWARE" />
            <div className="hidden md:block w-px h-10 bg-border-card" />
            <div className="flex flex-col gap-0.5 text-center lg:text-left">
              <span className="text-xs font-medium tracking-[0.2em] text-text-secondary">JAVA</span>
              <span className="text-xs font-medium tracking-[0.2em] text-text-secondary">SPRING CLOUD</span>
              <span className="text-xs font-medium tracking-[0.2em] text-accent">AI · VIBE CODING</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom area: intro + scroll indicator */}
      <motion.div
        style={{ opacity: statsOpacity }}
        className="relative z-10 flex flex-col items-center gap-3 pb-6"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-text-tertiary text-xs md:text-sm font-light tracking-wider text-center px-4"
        >
          {profile.intro}
        </motion.span>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-text-tertiary text-xs tracking-[0.2em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-accent to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

function StatBlock({ value, suffix, label, sublabel }: { value: string; suffix: string; label: string; sublabel: string }) {
  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
      <div className="flex items-baseline">
        <span className="text-3xl md:text-5xl font-black text-text-primary leading-none">{value}</span>
        <span className="text-xl md:text-3xl font-black text-accent">{suffix}</span>
      </div>
      <span className="text-xs font-medium tracking-[0.2em] text-text-secondary mt-1">{label}</span>
      <span className="text-[10px] md:text-xs font-light tracking-[0.15em] text-text-tertiary mt-0.5">{sublabel}</span>
    </div>
  );
}

function AnimatePresenceWord({ word }: { word: string }) {
  return (
    <motion.span
      key={word}
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -30, opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="text-accent font-medium"
    >
      {word}
    </motion.span>
  );
}
