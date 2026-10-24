import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Sparkles, Heart } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';
import { soundManager } from '../utils/soundManager';
import { triggerBurstConfetti, triggerGrandCelebration } from '../utils/confetti';

export const GiftBoxSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleUnwrap = () => {
    if (isOpen) return;
    soundManager.playCelebrationChime();
    soundManager.playMagicSparkle();
    setIsOpen(true);
    triggerBurstConfetti(0.5, 0.5);
    setTimeout(() => {
      triggerGrandCelebration();
    }, 500);
  };

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto relative text-center">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-200 text-amber-800 text-xs font-medium uppercase tracking-wider mb-2">
          <Gift className="w-3.5 h-3.5" />
          <span>Special Delivery</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-800">
          {birthdayConfig.giftSection.heading}
        </h2>
        <p className="text-slate-600 mt-2 text-sm sm:text-base">
          Prepared with endless love, wrapped with warm thoughts
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="closed-gift"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="flex flex-col items-center"
            >
                {/* Interactive 3D Gift Box Graphic */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  onClick={handleUnwrap}
                  className="relative cursor-pointer select-none group py-4 scale-90 sm:scale-100 transition-transform"
                >
                {/* Glow behind */}
                <div className="absolute inset-0 bg-pink-400/20 rounded-full blur-2xl group-hover:bg-pink-400/40 transition-colors" />

                {/* Gift Lid */}
                <motion.div
                  className="w-48 sm:w-56 h-14 bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400 rounded-t-xl shadow-lg border-b-2 border-rose-500/30 relative flex items-center justify-center z-20 group-hover:-translate-y-2 transition-transform duration-300"
                >
                  {/* Ribbon bow */}
                  <div className="absolute -top-7 text-4xl filter drop-shadow">
                    🎀
                  </div>
                  {/* Vertical Ribbon on Lid */}
                  <div className="w-8 h-full bg-gradient-to-b from-amber-200 to-amber-300 shadow-md" />
                </motion.div>

                {/* Gift Base */}
                <div className="w-44 sm:w-52 h-40 bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 rounded-b-2xl shadow-2xl relative flex justify-center z-10 overflow-hidden">
                  {/* Vertical Ribbon */}
                  <div className="w-8 h-full bg-gradient-to-b from-amber-200 via-yellow-100 to-amber-300 shadow-md" />
                  {/* Horizontal Ribbon */}
                  <div className="absolute top-1/2 -translate-y-1/2 w-full h-8 bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 shadow-md" />
                  
                  {/* Sparkle effects on box */}
                  <div className="absolute bottom-4 right-4 text-xs opacity-70">✨</div>
                  <div className="absolute top-4 left-4 text-xs opacity-70">💖</div>
                </div>
              </motion.div>

              <motion.button
                onClick={handleUnwrap}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white font-medium text-base shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 cursor-pointer transition-all border border-white/30"
              >
                <Gift className="w-5 h-5" />
                <span>{birthdayConfig.giftSection.buttonText}</span>
              </motion.button>
            </motion.div>
          ) : (
            /* Opened Gift Card */
            <motion.div
              key="opened-gift"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              className="glass-card rounded-3xl p-8 sm:p-12 max-w-2xl border-2 border-pink-300/80 shadow-2xl relative overflow-hidden"
            >
              {/* Background celebration icons */}
              <div className="absolute top-4 right-4 text-3xl">🎉</div>
              <div className="absolute top-4 left-4 text-3xl">💝</div>

              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-pink-400 to-rose-500 flex items-center justify-center text-white shadow-lg mb-6 animate-bounce">
                <Heart className="w-10 h-10 fill-white" />
              </div>

              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-slate-800 mb-4">
                {birthdayConfig.giftSection.revealedTitle}
              </h3>

              <p className="font-serif text-slate-700 text-base sm:text-lg md:text-xl leading-relaxed italic bg-pink-50/60 p-6 rounded-2xl border border-pink-100">
                "{birthdayConfig.giftSection.revealedMessage}"
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => triggerGrandCelebration()}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium shadow-md transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Shower More Confetti! 🎉</span>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs text-slate-500 hover:text-slate-700 underline cursor-pointer"
                >
                  Wrap back up 🎁
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
