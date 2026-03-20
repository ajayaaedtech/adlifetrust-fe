// components/activities/MentalHealthGallery.js
"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Camera, X, Maximize2 } from "lucide-react";

const galleryImages = [
  { id: 1, src: "/mentalhealth/run.webp", alt: "Participants running for mental health awareness" },
  { id: 2, src: "/mentalhealth/group-photo-event.jpg", alt: "Community group photo at Hyderabad event" },
  { id: 3, src: "/mentalhealth/volunteers.jpg", alt: "Volunteers supporting the Mind Over Miles initiative" },
  
  // ... copy-paste your other 13+ images here, ensuring unique IDs or src
];

const IMAGES_PER_PAGE = 6;

export default function MentalHealthGallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImg, setSelectedImg] = useState(null); // For Lightbox

  const totalPages = Math.ceil(galleryImages.length / IMAGES_PER_PAGE);
  
  // Safe Pagination Logic
  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const selectedImages = galleryImages.slice(startIndex, startIndex + IMAGES_PER_PAGE);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  return (
    <section className="py-24 bg-slate-900 px-4 md:px-6 text-white rounded-[3rem] md:rounded-[5rem] mx-2 md:mx-6 my-12 overflow-hidden shadow-2xl relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-orange-500 mb-4 font-bold tracking-[0.3em] text-[10px] uppercase">
              <Camera size={18} />
              <span>Hyderabad Edition 2025</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 leading-none">
              Captured <span className="text-orange-500 italic">Energy.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-lg">
              Every stride was a story. Browse through the highlights of our mental health movement.
            </p>
          </div>

          {/* Corrected Pagination Controls */}
          <div className="flex items-center gap-4 bg-white/5 p-2 rounded-full border border-white/10 backdrop-blur-md">
            <button 
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="h-12 w-12 rounded-full flex items-center justify-center bg-slate-800 hover:bg-white hover:text-slate-900 transition-all disabled:opacity-10 shadow-lg"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex flex-col items-center min-w-[80px]">
              <span className="text-[10px] text-slate-500 font-bold uppercase">Page</span>
              <span className="text-sm font-black text-orange-500 leading-none">{currentPage} / {totalPages}</span>
            </div>
            <button 
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-all disabled:opacity-10 shadow-lg text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentPage} // Triggers animation on page change
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="contents" // Grid parent behaves normally
            >
              {selectedImages.map((image, index) => (
                <motion.div
                  key={image.id || image.src}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedImg(image)}
                  className={`relative h-[400px] md:h-[480px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden group bg-slate-800 cursor-pointer border border-white/5
                    ${index === 1 ? 'lg:translate-y-12' : ''} 
                  `}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                    <Maximize2 className="absolute top-8 right-8 text-white/40 group-hover:text-orange-500 transition-colors" />
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest mb-2 underline decoration-2 underline-offset-4">View Photo</p>
                      <p className="text-white text-xl font-bold leading-tight">{image.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Dots */}
        <div className="mt-24 flex justify-center gap-3">
           {Array.from({ length: totalPages }).map((_, i) => (
             <button 
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`h-1 rounded-full transition-all duration-500 ${currentPage === i + 1 ? 'w-16 bg-orange-500' : 'w-4 bg-slate-800'}`} 
             />
           ))}
        </div>
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-10 right-10 text-white hover:text-orange-500 transition-colors">
              <X size={40} />
            </button>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-5xl h-[70vh] md:h-[80vh] rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImg.src} 
                alt={selectedImg.alt} 
                fill 
                className="object-contain" 
                sizes="100vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-center font-medium text-lg">{selectedImg.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}