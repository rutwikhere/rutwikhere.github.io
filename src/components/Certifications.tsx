import { motion } from 'framer-motion';

const Certifications = () => {
  return (
    <section id="certifications" className="py-32 px-6 bg-[#050505]">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-grotesk mb-4">Certifications</h2>
          <p className="text-white/60">Verified expertise and continuous learning.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-10 rounded-[2.5rem] relative overflow-hidden group cursor-pointer inline-block w-full md:w-3/4 mx-auto hover:border-accent/30 transition-colors"
          style={{ transformStyle: 'preserve-3d' }}
          whileHover={{ rotateX: 2, rotateY: -2 }}
        >
          {/* Animated Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent rounded-full blur-[100px] opacity-20 group-hover:opacity-50 transition-opacity duration-500" />
          
          <div className="relative z-10">
            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-xl">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-black" fill="currentColor">
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.757,3.951-5.445,3.951c-3.131,0-5.69-2.559-5.69-5.69s2.559-5.69,5.69-5.69c1.464,0,2.784,0.548,3.792,1.442l2.671-2.671c-1.745-1.571-4.01-2.531-6.463-2.531C7.625,2.88,4,6.505,4,11.021S7.625,19.162,12.146,19.162c4.103,0,7.382-3.131,7.382-7.382c0-0.535-0.05-1.054-0.14-1.541H12.545z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold font-grotesk mb-2">Google Play Academy</h3>
            <p className="text-accent text-lg font-medium mb-4">Store Listing Certificate</p>
            <p className="text-white/50 text-sm mb-6">Issued Feb 2026 · Expires Feb 2029</p>
            <a 
              href="https://www.credential.net/cd94c83e-da69-4837-a980-b60e0c049169#acc.LpbSnOHg" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all text-sm font-medium"
            >
              View Credential
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
