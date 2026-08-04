import { motion } from 'framer-motion';

const achievements = [
  'Startup Kritun Funded by New gen IEDC IIIT Allahabad',
  'Google Student Ambassador',
  'GDG Member',
  'Google Cloud Study Jams'
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-32 px-6 bg-surface relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold font-grotesk mb-12"
            >
              Impact & <br/> <span className="text-white/30">Recognition.</span>
            </motion.h2>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 glass-card p-4 rounded-2xl group hover:border-accent/50 transition-colors"
                >
                  <div className="min-w-[40px] h-10 rounded-full bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15l-2 5l9-9l-9-9l2 5l-10 4z"/></svg>
                  </div>
                  <span className="text-lg font-medium text-white/90">
                    {achievement.includes('https://') ? (
                       <a href={achievement.split('http')[1] ? 'http' + achievement.split('http')[1] : '#'} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                         {achievement.split('http')[0]}
                       </a>
                    ) : (
                      achievement === 'Startup Kritun Funded by New gen IEDC IIIT Allahabad' ? (
                        <>Startup Kritun Funded by <a href="https://newgeniedc.iiita.ac.in/" target="_blank" rel="noreferrer" className="text-accent hover:underline">New gen IEDC IIIT Allahabad</a></>
                      ) : (
                        achievement
                      )
                    )}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-card p-12 rounded-[3rem] text-center bg-gradient-to-br from-white/5 to-transparent border-white/10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-accent/5 blur-[100px] z-0" />
              <div className="relative z-10">
                <svg className="w-16 h-16 mx-auto mb-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
                <h3 className="text-2xl font-bold font-grotesk mb-4 text-white">Startup</h3>
                <p className="text-white/70 leading-relaxed font-light">
                  Kritun, a social gaming platform developed by our team, recently secured funding and recognition from the New Gen IEDC at IIIT Allahabad, validating our commitment to building scalable, high-impact products.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
