import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#050505]"
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-4xl font-bold tracking-tighter text-white font-grotesk"
        >
          RW.
        </motion.div>
        <motion.div
          className="h-[2px] bg-gradient-to-r from-accent to-secondary mt-6 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.2 }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute -bottom-10 text-xs text-white/50 tracking-[0.3em] uppercase"
        >
          Initializing Experience
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
