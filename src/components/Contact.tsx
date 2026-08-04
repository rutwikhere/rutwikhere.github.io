import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-accent opacity-10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-7xl font-bold font-grotesk mb-4 md:mb-6">Let's build<br/>something <span className="text-gradient">epic.</span></h2>
          <p className="text-base md:text-xl text-white/60 mb-8 md:mb-12 max-w-2xl mx-auto font-light px-2">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <a href="mailto:rutwikwakale004@gmail.com" className="inline-block relative group max-w-full">
            <div className="absolute -inset-2 bg-gradient-to-r from-accent to-secondary rounded-full blur-lg opacity-50 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative px-5 py-4 md:px-10 md:py-5 bg-black rounded-full border border-white/20 text-white font-semibold text-sm md:text-lg flex items-center gap-2 md:gap-3 whitespace-nowrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              rutwikwakale004@gmail.com
            </div>
          </a>
          
          <div className="mt-10 md:mt-16 flex justify-center gap-4 md:gap-6">
            <a href="https://github.com/rutwikhere" target="_blank" rel="noreferrer" className="w-14 h-14 glass-card rounded-full flex items-center justify-center hover:scale-110 hover:border-white/50 transition-all duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://linkedin.com/in/rutwikhere" target="_blank" rel="noreferrer" className="w-14 h-14 glass-card rounded-full flex items-center justify-center hover:scale-110 hover:border-white/50 transition-all duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://twitter.com/rutwik004" target="_blank" rel="noreferrer" className="w-14 h-14 glass-card rounded-full flex items-center justify-center hover:scale-110 hover:border-white/50 transition-all duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
