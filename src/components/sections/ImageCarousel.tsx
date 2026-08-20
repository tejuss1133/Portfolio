import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  title: string;
}

export function ImageCarousel({ images, title }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-full overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} - slide ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/1a1a1a/444444?text=Image+Not+Found';
          }}
        />
      </AnimatePresence>

      <button 
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft size={20} />
      </button>
      
      <button 
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-4 bg-[#00D1FF]' : 'w-1.5 bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}
