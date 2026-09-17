import { motion } from 'framer-motion';
import CustomCursor from '@/components/ui/CustomCursor';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import MarqueeSection from '@/components/sections/Marquee';
import About from '@/components/sections/About';
import Journey from '@/components/sections/Journey';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import VibeCoding from '@/components/sections/VibeCoding';
import NowBuilding from '@/components/sections/NowBuilding';
import Interests from '@/components/sections/Interests';
import Life from '@/components/sections/Life';
import Future from '@/components/sections/Future';
import Thinking from '@/components/sections/Thinking';
import Connect from '@/components/sections/Connect';

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <MarqueeSection />
        <About />
        <Journey />
        <Experience />
        <Projects />
        <Skills />
        <VibeCoding />
        <NowBuilding />
        <Interests />
        <Life />
        <Future />
        <Thinking />
        <Connect />
      </main>

      <Footer />

      <div className="noise-overlay" />
    </motion.div>
  );
}
