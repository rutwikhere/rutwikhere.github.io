import { motion } from 'framer-motion';
import { Home, User, Briefcase, Code, Award, Mail } from 'lucide-react';

const FloatingNav = () => {
  const links = [
    { icon: <Home size={18} />, href: '#home', label: 'Home' },
    { icon: <User size={18} />, href: '#about', label: 'About' },
    { icon: <Code size={18} />, href: '#skills', label: 'Skills' },
    { icon: <Briefcase size={18} />, href: '#projects', label: 'Projects' },
    { icon: <Award size={18} />, href: '#achievements', label: 'Achievements' },
    { icon: <Mail size={18} />, href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.8, duration: 0.8, type: 'spring' }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9000]"
    >
      <div className="flex items-center gap-2 px-4 py-3 glass-card rounded-full">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="p-3 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all group relative"
          >
            {link.icon}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default FloatingNav;
