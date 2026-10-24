import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart, Sparkles, Feather } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';
import { soundManager } from '../utils/soundManager';
import { triggerBurstConfetti } from '../utils/confetti';

export const LetterSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLetter = () => {
    if (!isOpen) {
      soundManager.playMagicSparkle();
      triggerBurstConfetti(0.5, 0.6);
    }
    setIsOpen(!isOpen);
  };

  return (
    <section id="letter-section" className="py-20 px-4 relative max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100/80 border border-rose-200 text-rose-700 text-xs font-medium uppercase tracking-wider mb-2">
          <Feather className="w-3.5 h-3.5" />
          <span>Written From The Heart</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-800">
          {birthdayConfig.letter.title}
        </h2>
        <p className="text-slate-600 mt-2 text-sm sm:text-base">
          A personal message dedicated to the sweetest person in the world
        </p>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="opened"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden border border-white/80 shadow-2xl"
            >
              {/* Decorative vintage postage stamp */}
              <div className="absolute top-6 right-6 hidden sm:flex flex-col items-center justify-center w-16 h-20 border-2 border-dashed border-rose-300 rounded bg-rose-50/60 rotate-6 shadow-sm">
                <Heart className="w-6 h-6 text-rose-500 fill-rose-400" />
                <span className="text-[9px] font-bold tracking-tighter text-rose-800 uppercase mt-1">Special</span>
                <span className="text-[8px] text-rose-600 font-mono">100% LOVE</span>
              </div>

              {/* Watermark flower */}
              <div className="absolute -bottom-10 -right-10 text-9xl text-pink-200/20 pointer-events-none select-none">
                🌸
              </div>

              {/* Letter content */}
              <div className="space-y-6 text-slate-700 font-serif leading-relaxed text-base sm:text-lg md:text-xl">
                {birthdayConfig.letter.paragraphs.map((p, idx) => (
                  <p key={idx} className="first-letter:text-3xl first-letter:font-bold first-letter:text-pink-600">
                    {p}
                  </p>
                ))}
              </div>

              {/* Signature */}
              <div className="mt-10 pt-6 border-t border-pink-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="font-handwriting text-3xl sm:text-4xl text-pink-700">
                  {birthdayConfig.letter.signature}
                </div>

                <button
                  onClick={toggleLetter}
                  className="inline-flex items-center gap-1.5 text-xs text-rose-500 hover:text-rose-700 underline font-medium cursor-pointer self-start sm:self-auto"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Fold back into envelope</span>
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="closed"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col items-center justify-center p-6 sm:p-12 glass-card rounded-3xl border-2 border-pink-200/90 shadow-2xl cursor-pointer hover:border-pink-300 transition-all group max-w-xl mx-auto"
              onClick={toggleLetter}
            >
              {/* Realistic Envelope Illustration */}
              <div className="relative w-64 sm:w-80 h-40 sm:h-48 bg-gradient-to-b from-rose-100 via-pink-50 to-pink-100 rounded-2xl shadow-lg border border-pink-200 flex items-center justify-center overflow-hidden mb-6 group-hover:shadow-pink-300/40 group-hover:shadow-2xl transition-all">
                {/* Envelope Flap Lines */}
                <div className="absolute top-0 inset-x-0 h-24 border-b border-pink-200/80 bg-gradient-to-b from-rose-200/40 to-transparent clip-path-triangle" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />
                
                {/* Postage Stamp */}
                <div className="absolute top-3 right-3 w-10 sm:w-12 h-12 sm:h-14 border border-dashed border-rose-400 bg-white/80 rounded flex flex-col items-center justify-center rotate-6 shadow-sm">
                  <span className="text-xs sm:text-sm">🌸</span>
                  <span className="text-[7px] sm:text-[8px] font-mono font-bold text-rose-700">SPECIAL</span>
                </div>

                {/* Wax Seal in Center */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-rose-600 via-red-500 to-rose-700 shadow-xl border-2 border-amber-300/60 flex items-center justify-center text-white"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-dashed border-amber-200/80 flex flex-col items-center justify-center">
                    <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-amber-100 fill-amber-100 filter drop-shadow" />
                    <span className="text-[7px] sm:text-[8px] font-bold text-amber-200 tracking-wider">SEALED</span>
                  </div>
                </motion.div>

                {/* Watermark label */}
                <div className="absolute bottom-3 text-center w-full text-[11px] sm:text-xs text-rose-500 font-handwriting">
                  Private & Confidential for Sister 💌
                </div>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-800 text-center">
                A Letter For My Sister 💌
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1.5 mb-5 text-center max-w-sm">
                A sealed letter waiting just for you. Tap to break the wax seal and reveal the words.
              </p>
              
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm sm:text-base font-medium shadow-lg shadow-pink-500/25 group-hover:scale-105 transition-all">
                <Sparkles className="w-4 h-4" />
                <span>Open & Read Letter ✨</span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
