import { motion } from 'motion/react';
import { ExternalLink, Play } from 'lucide-react';
import { projects } from '../../data/portfolio';
import { ImageCarousel } from './ImageCarousel';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="text-[10px] uppercase tracking-[0.4em] text-[#00D1FF] mb-4 font-bold">
            Selected Works
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight italic">Portfolio</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col h-full border border-white/10 relative overflow-hidden bg-transparent"
            >
              {/* Media Section */}
              <div className="relative aspect-[4/3] bg-[#1a1a1a] overflow-hidden border-b border-white/10 flex items-center justify-center p-8">
                {project.video ? (
                  <div className="relative w-full h-full flex items-center justify-center bg-black border border-white/5 overflow-hidden group">
                    <video 
                      src={project.video}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                    />
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur px-2 py-1 text-[8px] uppercase tracking-widest text-[#00D1FF] border border-white/10 pointer-events-none">
                      Video Demo
                    </div>
                  </div>
                ) : project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/1a1a1a/444444?text=Image+Not+Found';
                    }}
                  />
                ) : project.images ? (
                   <ImageCarousel images={project.images} title={project.title} />
                ) : null}
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow bg-white/5 backdrop-blur-sm">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-4">
                  {project.category}
                </div>
                <h3 className="text-3xl font-bold uppercase tracking-tight mb-4">{project.title}</h3>
                <p className="text-sm text-white/60 mb-8 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 border border-white/20 text-[9px] uppercase tracking-wider text-white/80 bg-transparent">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00D1FF] hover:text-white transition-colors"
                    >
                      Visit Website <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
              <div className='absolute top-4 right-4 text-[10px] font-mono opacity-30 uppercase'>PROJ // {index + 1}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
