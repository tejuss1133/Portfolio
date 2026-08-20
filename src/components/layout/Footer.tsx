import { personalInfo } from '../../data/portfolio';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="grid md:grid-cols-2 gap-8 items-end">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-[#00D1FF] mb-6 font-bold">Contact / Hire</div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight italic mb-6">Let's build<br/>something great.</h2>
            <p className="text-sm text-white/50 max-w-md leading-relaxed">
              Available for AI engineer roles. Passionate about building intelligent systems and eager to grow alongside a forward-thinking team in the industry.
            </p>
          </div>
          <div className="flex md:justify-end">
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="px-8 py-4 bg-white text-black font-bold text-xs tracking-widest uppercase transition-colors hover:bg-neutral-200"
            >
              Email: {personalInfo.email}
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-[9px] font-mono uppercase tracking-widest text-white/30 gap-4 text-center md:text-left">
          <div>Index: 001-AI-ENGINEER</div>
          <div>London Metropolitan University Graduate</div>
          <div>&copy; {new Date().getFullYear()} {personalInfo.name}</div>
          <div className="flex items-center gap-6 text-[#00D1FF] opacity-70">
            <a href="#" className="hover:opacity-100 transition-opacity">LN</a>
            <a href="#" className="hover:opacity-100 transition-opacity">GH</a>
            <a href="#" className="hover:opacity-100 transition-opacity">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
