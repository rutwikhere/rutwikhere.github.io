import { motion } from 'framer-motion';
import { 
  FaPython, FaJava, FaReact, FaNodeJs, FaGitAlt, FaFigma 
} from 'react-icons/fa';
import { 
  SiDart, SiJavascript, SiFlutter, SiFirebase, SiSupabase, SiTailwindcss, SiC 
} from 'react-icons/si';
import { TbBrandThreejs } from 'react-icons/tb';

const skills = [
  { name: 'Python', icon: <FaPython className="text-[#3776AB]" /> },
  { name: 'Dart', icon: <SiDart className="text-[#0175C2]" /> },
  { name: 'C', icon: <SiC className="text-[#A8B9CC]" /> },
  { name: 'Java', icon: <FaJava className="text-[#007396]" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
  { name: 'Flutter', icon: <SiFlutter className="text-[#02569B]" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28]" /> },
  { name: 'Supabase', icon: <SiSupabase className="text-[#3ECF8E]" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
  { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
  { name: 'Figma', icon: <FaFigma className="text-[#F24E1E]" /> },
  { name: 'Three.js', icon: <TbBrandThreejs className="text-white" /> }
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-[#050505] overflow-hidden relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-grotesk mb-4">Technical Arsenal</h2>
          <p className="text-white/60">Tools and technologies I use to build experiences.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => {
            const randomDelay = Math.random() * 2;
            const randomDuration = 3 + Math.random() * 2;
            const randomY = 10 + Math.random() * 10;
            
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative group"
              >
                <motion.div
                  animate={{ y: [0, -randomY, 0] }}
                  transition={{ repeat: Infinity, duration: randomDuration, delay: randomDelay, ease: "easeInOut" }}
                  className="px-6 py-4 glass-card cursor-pointer hover:bg-white/10 transition-colors flex items-center justify-center gap-3 glow-border"
                >
                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-lg font-medium text-white/90 group-hover:text-white transition-all duration-300">
                    {skill.name}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
