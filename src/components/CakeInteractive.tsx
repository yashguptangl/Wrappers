import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Wind } from 'lucide-react';
import { triggerBurstConfetti, triggerGrandCelebration } from '../utils/confetti';
import { soundManager } from '../utils/soundManager';

export const CakeInteractive: React.FC = () => {
  const [isBlown, setIsBlown] = useState(false);
  const [wishMade, setWishMade] = useState(false);

  const handleBlowCandles = () => {
    if (isBlown) return;

    soundManager.playCelebrationChime();
    setIsBlown(true);
    setWishMade(true);
    triggerBurstConfetti(0.5, 0.45);
    setTimeout(() => {
      triggerGrandCelebration();
    }, 400);
  };

  return (
    <div className="flex flex-col items-center select-none py-4 sm:py-6 w-full overflow-hidden">
      {/* 3D-styled SVG and layered CSS Cake - scaled cleanly on mobile */}
      <div className="relative w-64 sm:w-84 h-56 sm:h-72 flex items-center justify-center scale-[0.82] xs:scale-90 sm:scale-100 transition-transform">
        {/* Floating sparkles around cake */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-4 -right-2 text-2xl"
        >
          ✨
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.3, 1], y: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-12 -left-4 text-2xl"
        >
          💖
        </motion.div>

        {/* The Candle and Flame */}
        <div className="absolute top-6 flex flex-col items-center z-20">
          <AnimatePresence>
            {!isBlown ? (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: [1, 1.15, 0.95, 1], rotate: [-2, 2, -2] }}
                exit={{ opacity: 0, y: -20, scale: 0.2 }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                className="relative cursor-pointer"
                onClick={handleBlowCandles}
                title="Click to blow out the candle!"
              >
                {/* Flame Outer Glow */}
                <div className="w-6 h-9 rounded-full bg-gradient-to-t from-orange-500 via-amber-400 to-yellow-200 blur-[2px] shadow-[0_0_20px_#f59e0b] animate-pulse" />
                {/* Flame Inner Core */}
                <div className="absolute bottom-1 left-1.5 w-3 h-5 rounded-full bg-white/90" />
                <span className="absolute -top-6 -left-3 text-xs opacity-0 hover:opacity-100 transition-opacity bg-white/80 px-1 rounded shadow">
                  Blow!
                </span>
              </motion.div>
            ) : (
              /* Smoke effect when extinguished */
              <motion.div
                initial={{ opacity: 0.8, y: 0, scale: 0.5 }}
                animate={{ opacity: 0, y: -45, scale: 2 }}
                transition={{ duration: 1.8 }}
                className="text-slate-400 font-serif text-lg select-none"
              >
                💨
              </motion.div>
            )}
          </AnimatePresence>

          {/* Candle stick */}
          <div className="w-3.5 h-14 bg-gradient-to-r from-pink-300 via-white to-pink-300 rounded-t-sm shadow-inner border border-pink-200 relative">
            <div className="w-full h-1 bg-pink-400/50 absolute top-3" />
            <div className="w-full h-1 bg-pink-400/50 absolute top-7" />
            <div className="w-full h-1 bg-pink-400/50 absolute top-11" />
          </div>
        </div>

        {/* Cake Tier 1 (Top) */}
        <div className="absolute top-20 w-44 h-16 bg-gradient-to-b from-rose-100 via-pink-100 to-pink-200 rounded-t-2xl rounded-b-lg shadow-md border-t-2 border-white flex items-center justify-around px-2 z-10">
          {/* Frosting drips */}
          <div className="absolute -bottom-2 inset-x-2 flex justify-between">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="w-5 h-4 bg-white/90 rounded-b-full shadow-sm" />
            ))}
          </div>
          {/* Berry / Pearl Toppings */}
          <div className="flex gap-4 -mt-10">
            {['🍓', '🍒', '🍓', '🍒'].map((berry, i) => (
              <span key={i} className="text-sm filter drop-shadow">{berry}</span>
            ))}
          </div>
        </div>

        {/* Cake Tier 2 (Middle) */}
        <div className="absolute top-32 w-56 h-18 bg-gradient-to-b from-pink-200 via-pink-300 to-rose-300 rounded-lg shadow-lg border-t-2 border-white/60 flex items-center justify-center z-8">
          <div className="text-white/80 font-script text-2xl tracking-wider select-none drop-shadow">
            Sweetest Sister
          </div>
          {/* Frosting swirls */}
          <div className="absolute -bottom-2 inset-x-3 flex justify-between">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="w-4 h-3.5 bg-rose-100 rounded-b-full shadow-sm" />
            ))}
          </div>
        </div>

        {/* Cake Tier 3 (Base) */}
        <div className="absolute top-44 w-68 h-20 bg-gradient-to-b from-purple-200 via-pink-200 to-pink-300 rounded-t-lg rounded-b-xl shadow-xl border-t border-white/40 flex items-center justify-around px-4 z-5">
          <div className="flex gap-3 text-xs text-rose-400 font-bold opacity-75">
            ✨ 💖 🌸 💖 ✨
          </div>
        </div>

        {/* Cake Stand / Golden Plate */}
        <div className="absolute top-60 w-76 sm:w-80 h-5 bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 rounded-full shadow-2xl border-b-2 border-amber-400/40 z-2" />
        <div className="absolute top-64 w-40 h-4 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300 rounded-b-md shadow-md z-1" />
      </div>

      {/* Action / Wish Reveal Section */}
      <div className="mt-8 text-center max-w-md mx-auto">
        {!wishMade ? (
          <motion.button
            onClick={handleBlowCandles}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 via-rose-400 to-pink-500 text-white font-medium shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 cursor-pointer transition-all border border-white/40 group"
          >
            <Wind className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Blow Candle & Make a Wish ✨</span>
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="glass-card p-4 rounded-2xl border border-pink-200 shadow-xl"
          >
            <div className="flex items-center justify-center gap-2 text-pink-600 font-semibold text-lg mb-1">
              <Sparkles className="w-5 h-5 text-amber-500 fill-amber-400" />
              <span>Wish Sent to the Stars! 🌟</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              May every wish and prayer you carry in your heart today blossom into reality. You are destined for pure joy and endless blessings! 🌸
            </p>
            <button
              onClick={() => {
                setIsBlown(false);
                setWishMade(false);
              }}
              className="mt-3 text-xs text-pink-500 hover:text-pink-700 underline font-medium cursor-pointer"
            >
              Relight the candle 🕯️
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};
