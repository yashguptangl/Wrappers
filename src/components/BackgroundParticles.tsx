import React, { useMemo } from 'react';

export const BackgroundParticles: React.FC = () => {
  // Generate random twinkling stars and floating hearts
  const stars = useMemo(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      left: `${(i * 17) % 96 + 2}%`,
      top: `${(i * 23) % 94 + 3}%`,
      size: (i % 3) * 2 + 3,
      delay: `${(i % 5) * 0.7}s`,
      duration: `${3 + (i % 4)}s`,
    }));
  }, []);

  const floatingHearts = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: `${(i * 13) % 92 + 4}%`,
      size: 14 + (i % 3) * 6,
      delay: `${(i * 1.5) % 8}s`,
      duration: `${14 + (i % 6) * 3}s`,
      emoji: ['💖', '✨', '🌸', '💕', '🌷'][i % 5],
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Soft ambient lighting orbs */}
      <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-pink-300/25 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }} />
      <div className="absolute top-2/3 right-1/6 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '9s' }} />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />

      {/* Twinkling stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-amber-200 shadow-[0_0_8px_#fde047]"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `pulse ${star.duration} infinite ease-in-out ${star.delay}`,
            opacity: 0.7,
          }}
        />
      ))}

      {/* Floating ambient elements */}
      {floatingHearts.map((item) => (
        <div
          key={item.id}
          className="absolute select-none opacity-40 hover:opacity-80 transition-opacity"
          style={{
            left: item.left,
            bottom: '-40px',
            fontSize: `${item.size}px`,
            animation: `floatUp ${item.duration} linear infinite ${item.delay}`,
          }}
        >
          {item.emoji}
        </div>
      ))}

      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-110vh) rotate(360deg) scale(1.1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
