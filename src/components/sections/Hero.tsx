import { motion } from 'motion/react';
import { ArrowDown, Mail } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-end"
        >
          <div className="text-[10px] uppercase tracking-[0.4em] text-[#00D1FF] mb-6 font-bold">
            {personalInfo.role}
          </div>
          <h1 className="text-6xl md:text-[100px] leading-[0.85] font-black tracking-tighter uppercase italic mb-8">
            Hi, I'm <br/><span className="text-[#00D1FF]">{personalInfo.name.split(' ')[0]}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/50 mb-10 max-w-2xl leading-relaxed font-medium">
            {personalInfo.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#portfolio"
            className="px-8 py-4 bg-[#00D1FF] text-black font-bold text-xs tracking-widest uppercase transition-colors flex items-center gap-2 hover:bg-[#00b8e6]"
          >
            View My Work <ArrowDown size={16} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="px-8 py-4 border border-white/20 font-bold text-xs tracking-widest uppercase text-white hover:bg-white/5 transition-colors flex items-center gap-2"
          >
            {personalInfo.email} <Mail size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
