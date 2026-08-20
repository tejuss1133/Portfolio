import { motion } from 'motion/react';
import { personalInfo, skills } from '../../data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 border border-white/20 p-8 flex flex-col justify-between bg-white/5 h-full"
          >
            <div className="text-xs uppercase tracking-widest text-[#00D1FF] mb-8">Background</div>
            <div>
              <h2 className="text-4xl font-bold uppercase mb-4 tracking-tight">About Me</h2>
              <p className="text-sm text-white/50 leading-relaxed mb-8">
                {personalInfo.bio}
              </p>
              <div className="pt-6 border-t border-white/10">
                <p className="text-xl leading-snug font-medium">BSc in IT<br/>London Metropolitan University</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 grid sm:grid-cols-2 gap-4 h-full"
          >
            <div className="border border-white/20 p-6 bg-gradient-to-br from-transparent to-white/5">
              <div className="text-[10px] uppercase tracking-widest text-white/40 mb-6">01 // AI Engineering</div>
              <div className="flex flex-col gap-3">
                {skills.ai.map((skill) => (
                  <div key={skill} className="flex justify-between items-center text-xs uppercase tracking-wider">
                    <span>{skill}</span>
                    <span className="text-[#00D1FF] opacity-50">+</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border border-white/20 p-6">
              <div className="text-[10px] uppercase tracking-widest text-white/40 mb-6">02 // Development</div>
              <div className="flex flex-col gap-3">
                {skills.development.map((skill) => (
                  <div key={skill} className="flex justify-between items-center text-xs uppercase tracking-wider">
                    <span>{skill}</span>
                    <span className="text-white/40">+</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-white/20 p-6 sm:col-span-2 bg-[#00D1FF] text-black">
              <div className="text-[10px] uppercase tracking-widest opacity-60 mb-6 font-bold">03 // Design</div>
              <div className="flex flex-wrap gap-4">
                {skills.design.map((skill) => (
                  <span key={skill} className="px-4 py-2 border border-black/20 text-[10px] font-bold uppercase tracking-widest">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
