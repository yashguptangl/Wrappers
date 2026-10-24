import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smile, Heart, Sparkles, Sun, Camera, Flower2 } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';
import { soundManager } from '../utils/soundManager';

const iconMap: Record<string, React.ReactNode> = {
  Smile: <Smile className="w-6 h-6 text-amber-500" />,
  Heart: <Heart className="w-6 h-6 text-rose-500 fill-rose-100" />,
  Sparkles: <Sparkles className="w-6 h-6 text-purple-500" />,
  Sun: <Sun className="w-6 h-6 text-yellow-500" />,
  Camera: <Camera className="w-6 h-6 text-blue-500" />,
  Flower2: <Flower2 className="w-6 h-6 text-pink-500" />,
};

export const SpecialReasons: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    soundManager.playCelebrationChime();
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto relative">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100/80 border border-pink-200 text-pink-700 text-xs font-medium uppercase tracking-wider mb-2">
          <span>A Few Sweet Truths</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-800">
          Why You're So Special 💕
        </h2>
        <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-md mx-auto">
          Tap on each card to reveal why you hold such an irreplaceable place in my heart!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {birthdayConfig.specialReasons.map((item, index) => {
          const isFlipped = !!flippedCards[item.id];

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => toggleFlip(item.id)}
              className="cursor-pointer h-60 perspective-1000 select-none group"
            >
              <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: 'spring', damping: 15 }}
                className="w-full h-full relative preserve-3d"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front of card */}
                <div
                  className="absolute inset-0 backface-hidden glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-white/80 shadow-md group-hover:shadow-xl transition-all"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {iconMap[item.icon] || <Sparkles className="w-6 h-6 text-pink-500" />}
                  </div>
                  <h3 className="font-serif font-bold text-xl text-slate-800 mb-2">
                    {item.title}
                  </h3>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-pink-100 text-pink-600 font-medium">
                    {item.highlight}
                  </span>
                  <span className="mt-4 text-[11px] text-slate-400 group-hover:text-pink-500 font-medium transition-colors">
                    Click to flip 🔄
                  </span>
                </div>

                {/* Back of card */}
                <div
                  className="absolute inset-0 backface-hidden rounded-2xl p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 text-white shadow-xl rotate-y-180"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <h4 className="font-serif font-bold text-lg text-pink-100 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-sm font-light leading-relaxed text-pink-50">
                    "{item.description}"
                  </p>
                  <span className="mt-4 text-[11px] text-pink-200/80">
                    Tap to turn back ↺
                  </span>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
