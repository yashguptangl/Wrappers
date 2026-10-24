import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Sparkles, Heart } from 'lucide-react';
import { triggerBurstConfetti } from '../utils/confetti';
import { soundManager } from '../utils/soundManager';

interface OpeningScreenProps {
  onOpen: () => void;
}

export const OpeningScreen: React.FC<OpeningScreenProps> = ({ onOpen }) => {
  const handleOpen = () => {
    soundManager.playMagicSparkle();
    // Auto-start continuous looping background birthday melody upon user opening surprise
    setTimeout(() => {
      soundManager.startMelodyLoop();
    }, 400);
    triggerBurstConfetti(0.5, 0.5);
    onOpen();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-purple-50 to-rose-100 px-4 text-center select-none overflow-hidden"
    >
      {/* Decorative ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-pink-300/40 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-300/30 blur-3xl animate-pulse" />
      
      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [-4, 4, -4] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="text-6xl mb-6 filter drop-shadow-md"
      >
        💌✨
      </motion.div>

      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-xl mx-auto space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-pink-200/80 shadow-sm text-pink-600 text-sm font-medium tracking-wide">
          <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '4s' }} />
          <span>A Secret Delivery For You</span>
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-slate-800 tracking-tight leading-tight">
          Hey, My Beautiful <span className="animate-shimmer">Sister!</span> 💗
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-600 font-light max-w-md mx-auto leading-relaxed">
          Someone very special deserves a very special surprise...
        </p>

        <div className="pt-6 sm:pt-8 w-full flex justify-center px-2">
          <motion.button
            onClick={handleOpen}
            whileHover={{ scale: 1.04, boxShadow: "0 20px 30px -10px rgba(236, 72, 153, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center gap-2 sm:gap-2.5 px-5 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white font-medium text-sm xs:text-base sm:text-lg shadow-xl shadow-pink-500/30 transition-all duration-300 cursor-pointer overflow-hidden border border-white/30 whitespace-nowrap max-w-full"
          >
            {/* Shimmer overlay */}
            <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <Gift className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-transform duration-300 group-hover:rotate-12" />
            <span className="truncate">Open Your Birthday Surprise 🎁</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Subtle foot note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 text-xs text-slate-500 font-handwriting text-lg"
      >
        Turn on sound for the best experience 🎵✨
      </motion.p>
    </motion.div>
  );
};
