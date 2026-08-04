import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroScene from './HeroScene';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
        {!isMobile ? (
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
            <Suspense fallback={null}>
              <HeroScene />
            </Suspense>
          </Canvas>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center opacity-50">
            <div className="w-64 h-64 rounded-full bg-accent/20 blur-[100px] animate-pulse" />
            <div className="absolute w-48 h-48 rounded-full bg-secondary/20 blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        )}
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 container mx-auto px-6 pointer-events-none flex flex-col justify-center h-full">
        <div className="max-w-4xl mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-accent tracking-widest uppercase mb-4 text-sm font-medium">Developer</p>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-bold font-grotesk leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Rutwik Wakale
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/70 max-w-2xl mb-10 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Building products that solve real problems.
            <br className="hidden md:block" />
            <span className="text-white/40 text-lg mt-2 inline-block">B.Tech IT(BI) @ IIIT Allahabad</span>
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 pointer-events-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <a href="#projects" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-4 glass-card text-white font-semibold hover:bg-white/10 transition-colors duration-300 glow-border">
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
