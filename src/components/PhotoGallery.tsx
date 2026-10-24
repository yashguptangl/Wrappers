import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Heart, Camera } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';

export const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof birthdayConfig.photos[0] | null>(null);

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto relative">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100/80 border border-purple-200 text-purple-700 text-xs font-medium uppercase tracking-wider mb-2">
          <Camera className="w-3.5 h-3.5" />
          <span>Timeless Memories</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-800">
          Beautiful Moments & Memories 📸
        </h2>
        <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-lg mx-auto">
          Every photo carries a special memory, a gentle smile, and a story worth keeping forever.
        </p>
      </div>

      {/* Responsive Masonry / Polaroid Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {birthdayConfig.photos.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            onClick={() => setSelectedPhoto(item)}
            className="group glass-card rounded-2xl p-3 pb-5 flex flex-col cursor-pointer border border-white/90 hover:border-pink-300 transition-all duration-300 shadow-lg hover:shadow-2xl relative"
          >
            {/* Tag chip */}
            <div className="absolute top-5 left-5 z-10 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[11px] font-medium tracking-wide">
              {item.tag}
            </div>

            {/* Image container */}
            <div className="relative aspect-[4/3] sm:aspect-[3/4] w-full rounded-xl overflow-hidden bg-rose-50 shadow-inner">
              <img
                src={item.url}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 text-slate-800 text-xs font-medium shadow-md">
                  <ZoomIn className="w-3.5 h-3.5 text-pink-600" />
                  <span>Click to expand</span>
                </span>
              </div>
            </div>

            {/* Caption & Title */}
            <div className="pt-4 px-2 flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-serif font-bold text-lg text-slate-800 group-hover:text-pink-600 transition-colors">
                  {item.title}
                </h3>
                <Heart className="w-4 h-4 text-pink-400 group-hover:text-rose-500 group-hover:fill-rose-500 transition-colors" />
              </div>
              <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                {item.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors cursor-pointer z-50"
              aria-label="Close photo preview"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-2xl w-full bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col text-white"
            >
              <div className="max-h-[70vh] flex items-center justify-center bg-black/40 overflow-hidden">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              <div className="p-5 sm:p-6 bg-slate-900/90 backdrop-blur-md">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl sm:text-2xl font-serif font-bold text-pink-300">
                    {selectedPhoto.title}
                  </h4>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-pink-500/30 text-pink-200 border border-pink-400/30">
                    {selectedPhoto.tag}
                  </span>
                </div>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {selectedPhoto.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
