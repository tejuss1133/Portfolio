import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="text-xs tracking-[0.4em] font-bold uppercase">
          TS // AI & Software Engineer
        </a>
        <div className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-widest text-white/60">
          <a href="#home" className="hover:text-[#00D1FF] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#00D1FF] transition-colors">About</a>
          <a href="#portfolio" className="hover:text-[#00D1FF] transition-colors">Work</a>
        </div>
        <a 
          href="mailto:tejashwistha7@gmail.com" 
          className="px-5 py-2.5 border border-white/20 text-white text-[10px] uppercase tracking-widest hover:bg-white/5 transition-colors"
        >
          Contact Me
        </a>
      </div>
    </motion.nav>
  );
}
