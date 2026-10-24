import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, RotateCcw, Heart } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';
import { triggerGrandCelebration } from '../utils/confetti';
import { soundManager } from '../utils/soundManager';

interface GrandFinaleProps {
  onReplay: () => void;
}

export const GrandFinale: React.FC<GrandFinaleProps> = ({ onReplay }) => {
  const handleFinalConfetti = () => {
    soundManager.playCelebrationChime();
    triggerGrandCelebration();
  };

  return (
    <footer className="relative py-24 px-4 text-center overflow-hidden border-t border-pink-200/50">
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-pink-100/70 via-purple-50/50 to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 space-y-6">
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-5xl sm:text-6xl mx-auto inline-block filter drop-shadow-md"
        >
          💖👑✨
        </motion.div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-extrabold text-slate-800 leading-tight">
          {birthdayConfig.closingSection.heading}
        </h2>

        <div className="space-y-2 max-w-xl mx-auto">
          <p className="text-xl sm:text-2xl font-serif italic text-pink-700 font-medium">
            "{birthdayConfig.closingSection.quote}"
          </p>
          <p className="text-slate-600 text-sm sm:text-base font-light">
            {birthdayConfig.closingSection.subQuote}
          </p>
        </div>

        {/* Buttons */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleFinalConfetti}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white font-medium text-base shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 cursor-pointer transition-all border border-white/30"
          >
            <Sparkles className="w-5 h-5" />
            <span>Grand Confetti Celebration! 🎊</span>
          </button>

          <button
            onClick={onReplay}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full glass-card hover:bg-white text-slate-700 hover:text-pink-600 font-medium text-sm border border-pink-200 shadow-md cursor-pointer transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Replay From Beginning 🎁</span>
          </button>
        </div>

        {/* Footer credits */}
        <div className="pt-16 text-slate-400 text-xs flex items-center justify-center gap-1.5 font-sans">
          <span>Crafted with endless love & warm wishes for</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          <span className="font-semibold text-slate-600">Sister's Special Day</span>
        </div>
      </div>
    </footer>
  );
};
