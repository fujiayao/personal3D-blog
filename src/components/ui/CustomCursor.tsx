import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const outerSpring = { damping: 30, stiffness: 150, mass: 0.8 };
  const outerX = useSpring(mouseX, outerSpring);
  const outerY = useSpring(mouseY, outerSpring);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [data-cursor="hover"]');
      setIsHovering(!!interactive);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  return (
    <div className="hidden md:block">
      <motion.div
        style={{ x, y }}
        className="fixed top-0 left-0 z-[10000] pointer-events-none"
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-2 h-2 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
      <motion.div
        style={{ x: outerX, y: outerY }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{
          opacity: isVisible ? (isHovering ? 0.4 : 0.2) : 0,
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-8 h-8 border border-accent rounded-full -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
    </div>
  );
}
