import { useEffect, useState } from 'react';
import { ReactLenis } from 'lenis/react';
import { AnimatePresence } from 'framer-motion';

import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import FloatingNav from './components/FloatingNav';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate luxury loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!isLoading && (
        <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
          <main className="relative w-full bg-[#050505] text-white selection:bg-[#5EEAD4]/30">
            <FloatingNav />
            <Hero />
            <About />
            <Journey />
            <Skills />
            <Projects />
            <Achievements />
            <Certifications />
            <Contact />
            <Footer />
          </main>
        </ReactLenis>
      )}
    </>
  );
}

export default App;
