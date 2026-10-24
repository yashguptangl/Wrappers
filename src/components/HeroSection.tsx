import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { CakeInteractive } from './CakeInteractive';
import { birthdayConfig } from '../data/birthdayConfig';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-16 px-4 text-center overflow-hidden">
      {/* Decorative floating balloons */}
      <div className="absolute top-12 left-4 sm:left-12 opacity-80 pointer-events-none animate-float" style={{ animationDelay: '0s' }}>
        <div className="text-4xl sm:text-5xl filter drop-shadow-md">🎈</div>
      </div>
      <div className="absolute top-20 right-4 sm:right-16 opacity-80 pointer-events-none animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="text-4xl sm:text-5xl filter drop-shadow-md">🎈</div>
      </div>
      <div className="absolute bottom-20 left-8 sm:left-24 opacity-60 pointer-events-none animate-float" style={{ animationDelay: '2.5s' }}>
        <div className="text-3xl sm:text-4xl">🌸</div>
      </div>
      <div className="absolute bottom-16 right-8 sm:right-28 opacity-60 pointer-events-none animate-float" style={{ animationDelay: '3.5s' }}>
        <div className="text-3xl sm:text-4xl">✨</div>
      </div>

      <div className="max-w-3xl mx-auto space-y-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100/80 border border-pink-200 text-pink-700 text-xs sm:text-sm font-medium tracking-wide shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
          <span>A Very Special Day For A Very Special Soul</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold text-slate-800 tracking-tight leading-tight"
        >
          Happy Birthday, <br />
          <span className="font-script text-5xl sm:text-7xl md:text-8xl animate-shimmer block mt-1">
            {birthdayConfig.nickname} 🎂
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-slate-600 font-light max-w-xl mx-auto leading-relaxed pt-1"
        >
          {birthdayConfig.heroSubtitle}
        </motion.p>
      </div>

      {/* Interactive Birthday Cake Component */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-lg z-10"
      >
        <CakeInteractive />
      </motion.div>

      {/* Scroll down indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="pt-4 text-xs font-medium text-pink-600/80 flex flex-col items-center gap-1 cursor-pointer"
        onClick={() => {
          document.getElementById('letter-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span>Scroll to read your letter 💌</span>
        <span className="text-lg">↓</span>
      </motion.div>
    </section>
  );
};
