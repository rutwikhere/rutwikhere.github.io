import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { SiFlutter, SiReact, SiFirebase, SiSupabase } from 'react-icons/si';
import { FaRobot, FaServer, FaPaintBrush } from 'react-icons/fa';

import React from 'react';

const techLogos: Record<string, React.ReactNode> = {
  'Flutter': <SiFlutter className="text-[#02569B]" />,
  'React': <SiReact className="text-[#61DAFB]" />,
  'Firebase': <SiFirebase className="text-[#FFCA28]" />,
  'Supabase': <SiSupabase className="text-[#3ECF8E]" />,
  'AI': <FaRobot className="text-white" />,
  'Backend': <FaServer className="text-gray-400" />,
  'UI/UX': <FaPaintBrush className="text-pink-400" />
};

const Typewriter = () => {
  const codeLines = [
    "const developer = {",
    "  name: 'Rutwik Wakale',",
    "  skills: ['Flutter', 'React', 'Firebase'],",
    "  passion: 'Building scalable products',",
    "  coffee: true",
    "};",
    "",
    "developer.build(world);"
  ];
  
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  
  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    let isWaiting = false;
    
    const interval = setInterval(() => {
      if (isWaiting) return;

      if (currentLine >= codeLines.length) {
        isWaiting = true;
        setTimeout(() => {
          setDisplayedLines([]);
          currentLine = 0;
          currentChar = 0;
          isWaiting = false;
        }, 3000); // Wait 3 seconds before restarting
        return;
      }
      
      const updateLine = currentLine;
      const updateChar = currentChar;
      
      setDisplayedLines(prev => {
        const newLines = [...prev];
        if (newLines.length <= updateLine) {
          newLines.push('');
        }
        
        newLines[updateLine] = codeLines[updateLine].substring(0, updateChar + 1);
        return newLines;
      });
      
      currentChar++;
      if (currentChar >= codeLines[currentLine].length) {
        currentLine++;
        currentChar = 0;
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="font-mono text-sm sm:text-base text-accent p-6 bg-[#0a0a0a] rounded-[1.5rem] h-full shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] border border-white/5 flex flex-col justify-center">
      {displayedLines.map((line, i) => (
        <div key={i} className="min-h-[1.5rem] whitespace-pre">{line}</div>
      ))}
      <motion.div 
        animate={{ opacity: [1, 0, 1] }} 
        transition={{ repeat: Infinity, duration: 0.8 }} 
        className="w-2 h-5 bg-secondary mt-1 inline-block"
      />
    </div>
  );
};

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={containerRef} className="relative py-32 px-6 min-h-screen flex items-center bg-[#0a0a0a]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div style={{ y, opacity }} className="relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden glass-card p-2 relative group flex flex-col">
              <Typewriter />
              
              {/* Floating tech stack badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -right-6 top-20 glass-card px-4 py-2 z-20 flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-semibold">Flutter</span>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -left-6 bottom-32 glass-card px-4 py-2 z-20 flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-sm font-semibold">React</span>
              </motion.div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold font-grotesk"
            >
              Building <span className="text-gradient">Real-World</span><br /> Applications.
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-white/70 text-lg leading-relaxed font-light"
            >
              <p>
                I am <strong className="text-white font-medium">Rutwik Wakale</strong>, a product-focused developer pursuing my B.Tech in Information Technology (Business Informatics) at the <strong className="text-white font-medium">Indian Institute of Information Technology Allahabad</strong>.
              </p>
              <p>
                I specialize in building end-to-end products. I believe in learning by building, shipping frequently, and iterating based on real user feedback.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-3 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {['Flutter', 'React', 'Firebase', 'Supabase', 'AI', 'Backend', 'UI/UX'].map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium hover:bg-white/10 hover:border-white/30 transition-colors flex items-center gap-2">
                  {techLogos[skill]}
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
