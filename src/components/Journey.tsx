import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2024 - Present',
    title: 'Co-founder & Lead Developer',
    company: 'Kritun',
    description: 'Scaled social gaming platform to 1K+ downloads. Built Flutter app with Firebase/Supabase backend.',
  },
  {
    year: '2025 - Present',
    title: 'Executive',
    company: 'ECell IIIT Allahabad',
    description: 'Driving entrepreneurship initiatives and organizing events within the college ecosystem.',
  },
  {
    year: '2025 - Present',
    title: 'Design Wing Member',
    company: 'Google Developer Groups (GDG) IIITA',
    description: 'Collaborating on UI/UX for workshops and events, fostering a design-first engineering culture.',
  },
  {
    year: 'May 2026 - Sept 2026',
    title: 'Google Student Ambassador',
    company: 'Google',
    description: 'Organized technical initiatives, created developer content, and promoted Google tech on campus.',
  },
  {
    year: '2024 - 2028',
    title: 'B.Tech IT (Business Informatics)',
    company: 'IIIT Allahabad',
    description: 'Pursuing undergraduate degree focusing on Software Engineering, Data Structures, and Business Tech.',
  },
  {
    year: '2025',
    title: 'Participant',
    company: 'Google Cloud Study Jams',
    description: 'Got hands-on experience working with real cloud labs on Google Cloud. Explored Core cloud concepts, AI & Machine Learning basics, Big Data fundamentals, and Security in cloud environments.',
  }
];

const Journey = () => {
  return (
    <section id="journey" className="py-32 px-6 relative bg-surface">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent blur-[150px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-secondary blur-[150px]" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-grotesk mb-4">My Journey</h2>
          <p className="text-white/60">The path that shaped my experience.</p>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0">
          {timeline.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-12 relative md:w-1/2 md:even:ml-auto md:even:pl-12 md:odd:pr-12 group pl-8 md:pl-0"
            >
              {/* Timeline dot */}
              <div className="absolute top-0 left-[-33px] md:left-auto md:right-[-6px] md:even:left-[-6px] w-3 h-3 rounded-full bg-white/20 border-2 border-[#101010] group-hover:bg-accent group-hover:shadow-[0_0_15px_#5EEAD4] transition-all duration-300 z-10" />
              
              <div className="glass-card p-6 md:p-8 hover:bg-white/[0.08] transition-colors duration-300">
                <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-2 block">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold font-grotesk text-white mb-1">{item.title}</h3>
                <h4 className="text-white/80 font-medium mb-4">{item.company}</h4>
                <p className="text-white/60 font-light text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
