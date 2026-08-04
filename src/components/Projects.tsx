import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { SiGithub, SiGoogleplay } from 'react-icons/si';

const imageModules = import.meta.glob('../assets/**/*.{jpeg,webp,jpg,png}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;

const getImagesForProject = (folderName: string) => {
  return Object.keys(imageModules)
    .filter((path) => path.includes(`/assets/${folderName}/`))
    .sort()
    .map((path) => imageModules[path]);
};

const projects = [
  {
    title: 'Kritun',
    type: 'Real-time Social Gaming App',
    shortDescription: 'A mobile social gaming platform focused on helping players and teams connect.',
    details: [
      'Scaled to 1,000+ downloads with 70.64% audience growth and 66.67% returning users.',
      'Built skill matchmaking, teams, real-time challenges, voice messages, group chats, feeds, stories.',
      'Engineered secure Google/Email auth, E2E encrypted chats, scalable Firestore models with 24h cleanup.',
      'Managed full lifecycle: UI/UX, debugging, and Play Store deployment.',
      'Startup Kritun Funded by New Gen IEDC IIIT Allahabad (newgeniedc.iiita.ac.in)'
    ],
    tech: ['Flutter', 'Firebase'],
    images: getImagesForProject('KRITUN'),
    link: 'https://kritun.in',
    github: 'https://github.com/rutwikhere/Kritun',
    playstore: 'https://play.google.com/store/apps/details?id=com.techbrats.kritun&pcampaignid=web_share'
  },
  {
    title: 'ROPA',
    type: 'AI-Powered Agriculture Platform',
    shortDescription: 'An intelligent agriculture platform that helps farmers discover opportunities to improve their livelihood.',
    details: [
      'Brings schemes, subsidies, loans, training programs, and agriculture news in one place.',
      'AI Opportunity Assistant for multi-language conversations and scheme eligibility checks.',
      'Personalized recommendations based on farmer profiles and location.',
      'Multi-language Support (English, Hindi, Marathi) built with Flutter and Firebase.',
      'Secure Authentication and Firebase Cloud Messaging for smart alerts.'
    ],
    tech: ['Flutter', 'React', 'Firebase', 'Supabase', 'AI'],
    images: getImagesForProject('ROPA'),
    link: '#',
    github: 'https://github.com/rutwikhere/Ropa'
  },
  {
    title: 'Auracity',
    type: 'AI Smart City Platform',
    shortDescription: 'A real-time civic issue reporting platform with geo-tagging and AI-based classification.',
    details: [
      'Built a real-time civic issue reporting platform with geo-tagging and image-based complaints using Google Maps.',
      'Integrated Meta LLaMA via Groq for automatic AI issue classification and prioritization.',
      'Developed AI-based verification system to validate issue resolution via before/after images.',
      'Implemented Firebase backend with secure data management and real-time synchronization.',
      'Designed real-time updates and role-based access control (RBAC) for Citizens, Admins, and Workers.'
    ],
    tech: ['Flutter', 'Firebase', 'LLM', 'Google Maps'],
    images: [],
    link: '#',
    github: 'https://github.com/rutwikhere/auracity'
  },
  {
    title: 'MarkMe',
    type: 'IIITA Attendance App',
    shortDescription: 'A Flutter-based attendance management application designed for classrooms.',
    details: [
      'Role-based access: Professors create classes, TAs take attendance, Students view records.',
      'Track statistics with visual graphs of attendance trends.',
      'People section to manage TAs and students, with email invites.',
      'Tech Stack: Flutter, Firebase (Auth, Database, Cloud Functions), Dart.',
      'Demo credentials: rahul.sharma@iiita.ac.in / priya.mishra@iiita.ac.in (Password: password123)'
    ],
    tech: ['Flutter', 'Firebase', 'Dart'],
    images: getImagesForProject('Mark me'),
    link: '#',
    github: 'https://github.com/rutwikhere/IIITA-Attendance'
  }
];

const PhoneCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return <div className="text-white/20 font-grotesk text-xl font-bold text-center">No Preview</div>;
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative group/phone flex items-center justify-center w-full h-full">
      <div className="relative aspect-[9/19.5] h-full max-h-full rounded-[1.8rem] border-[4px] lg:border-[6px] border-[#252525] bg-black overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)] mx-auto">
        <img
          src={images[currentIndex]}
          alt={`Screenshot ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-0 lg:left-2 top-1/2 -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 bg-black/60 hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center transition-all opacity-0 group-hover/phone:opacity-100 z-20"
          >
            <FiChevronLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 lg:right-2 top-1/2 -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 bg-black/60 hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center transition-all opacity-0 group-hover/phone:opacity-100 z-20"
          >
            <FiChevronRight size={18} />
          </button>
          {/* Dot indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
            {images.map((_, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentIndex ? 'bg-white' : 'bg-white/30'}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// ── Mobile Card — no 3D flip, details expand inline ──────────────────────────
const MobileProjectCard = ({ project }: { project: any }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="mb-8 glass-card rounded-[2rem] overflow-hidden">
      {/* Image */}
      {project.images.length > 0 && (
        <div className="w-full h-[320px] flex items-center justify-center bg-[#0a0a0a] px-8 py-4">
          <PhoneCarousel images={project.images} />
        </div>
      )}

      {/* Info */}
      <div className="p-6">
        <span className="text-accent text-xs font-semibold tracking-wider uppercase mb-1.5 block">{project.type}</span>
        <h3 className="text-2xl font-bold font-grotesk mb-2">{project.title}</h3>
        <p className="text-white/60 text-sm leading-relaxed mb-4">{project.shortDescription}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t: string) => (
            <span key={t} className="text-xs text-gradient font-medium bg-white/5 px-2 py-0.5 rounded-full border border-white/5">#{t}</span>
          ))}
        </div>

        {/* Expandable details */}
        <AnimatePresence>
          {showDetails && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-2.5 mb-4 overflow-hidden"
            >
              {project.details.map((d: string, i: number) => (
                <li key={i} className="flex gap-3 items-start text-white/70 text-sm">
                  <span className="text-accent mt-0.5 shrink-0">✦</span>
                  <span className="leading-relaxed">{d}</span>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Action row */}
        <div className="flex items-center gap-2 pt-4 border-t border-white/10">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-1.5 px-4 py-2 bg-white text-black text-xs font-semibold rounded-full hover:scale-105 transition-transform"
          >
            {showDetails ? <><FiX size={12} /> Less</> : <>Details <FiArrowRight size={12} /></>}
          </button>
          {project.github !== '#' && (
            <a href={project.github} target="_blank" rel="noreferrer" className="p-2 border border-white/20 text-white rounded-full hover:bg-white/10 transition-colors">
              <SiGithub size={16} />
            </a>
          )}
          {project.playstore && (
            <a href={project.playstore} target="_blank" rel="noreferrer" className="p-2 border border-white/20 text-white rounded-full hover:bg-white/10 transition-colors">
              <SiGoogleplay size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// ── Desktop Card — sticky scroll + 3D flip ────────────────────────────────────
const DesktopProjectCard = ({ project }: { project: any }) => {
  const ref = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start center'] });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="sticky top-12 mb-24 h-[600px] perspective-1000 z-10"
    >
      <motion.div
        className="w-full h-full relative preserve-3d cursor-pointer"
        style={{ transition: 'transform 0.7s' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* FRONT */}
        <div className="absolute inset-0 backface-hidden flex flex-row gap-8 glass-card p-10 rounded-[3rem] overflow-hidden group hover:border-white/20 transition-colors">
          <div className="w-1/2 flex flex-col justify-between z-10 relative">
            <div>
              <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-2 block">{project.type}</span>
              <h3 className="text-5xl font-bold font-grotesk mb-4">{project.title}</h3>
              <p className="text-white/70 text-lg mb-6 font-light leading-relaxed">{project.shortDescription}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t: string) => (
                  <span key={t} className="text-sm text-gradient font-medium bg-white/5 px-3 py-1 rounded-full border border-white/5">#{t}</span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 pt-8 border-t border-white/10">
              <button className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform" onClick={(e) => { e.stopPropagation(); setIsFlipped(true); }}>
                Details <FiArrowRight />
              </button>
              {project.github !== '#' && <a href={project.github} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} className="p-3 border border-white/20 text-white rounded-full hover:bg-white/10 transition-colors"><SiGithub size={20} /></a>}
              {project.playstore && <a href={project.playstore} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} className="p-3 border border-white/20 text-white rounded-full hover:bg-white/10 transition-colors"><SiGoogleplay size={20} /></a>}
            </div>
          </div>
          <div className="w-1/2 h-full rounded-[2rem] overflow-hidden flex items-center justify-center">
            <PhoneCarousel images={project.images} />
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 backface-hidden flex flex-col glass-card p-10 rounded-[3rem] overflow-hidden" style={{ transform: 'rotateY(180deg)' }}>
          <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
            <h3 className="text-3xl font-bold font-grotesk">{project.title}</h3>
            <button className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-sm font-medium" onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }}>
              Back
            </button>
          </div>
          <div className="overflow-y-auto pr-4 flex-1 custom-scrollbar">
            <ul className="space-y-4">
              {project.details.map((detail: string, i: number) => (
                <li key={i} className="flex gap-4 items-start text-white/80">
                  <span className="text-accent mt-1 shrink-0">✦</span>
                  <span className="leading-relaxed font-light text-[1.05rem]">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-5 md:px-6 bg-[#0a0a0a] relative">
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-7xl font-bold font-grotesk mb-4">Selected<br /><span className="text-white/30">Works.</span></h2>
          <p className="text-base md:text-xl text-white/60 font-light">A showcase of products I've built, focusing on scalable architecture and real-world impact.</p>
        </motion.div>

        {/* Mobile layout */}
        <div className="block lg:hidden">
          {projects.map((project) => (
            <MobileProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:block relative">
          {projects.map((project) => (
            <DesktopProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
