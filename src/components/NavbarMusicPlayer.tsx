import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { soundManager } from '../utils/soundManager';
import { birthdayConfig } from '../data/birthdayConfig';

export const NavbarMusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    soundManager.onStateChange((playing) => {
      setIsPlaying(playing);
    });
  }, []);

  const handleToggle = () => {
    const newState = soundManager.toggle();
    setIsPlaying(newState);
  };

  return (
    <div className="fixed top-3 right-3 sm:top-4 sm:right-4 z-40">
      <button
        onClick={handleToggle}
        aria-label="Toggle background music"
        className="glass-pill flex items-center gap-2 sm:gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full cursor-pointer hover:bg-white/95 transition-all duration-300 shadow-md border border-pink-200/80 group"
      >
        <div className={`p-1.5 rounded-full ${isPlaying ? 'bg-pink-500 text-white animate-spin' : 'bg-pink-100 text-pink-600'}`} style={{ animationDuration: '6s' }}>
          <Music className="w-3.5 h-3.5" />
        </div>

        <div className="hidden sm:flex flex-col text-left pr-1">
          <span className="text-[10px] tracking-widest uppercase font-semibold text-pink-700 leading-none">
            {isPlaying ? 'Playing Birthday Melody' : 'Play Birthday Tune'}
          </span>
          <span className="text-xs text-slate-600 font-medium truncate max-w-[110px]">
            {birthdayConfig.music.title}
          </span>
        </div>

        {/* Visualizer bars */}
        <div className="flex items-center gap-0.5 h-3.5">
          {[1, 2, 3].map((bar) => (
            <span
              key={bar}
              className={`w-0.5 rounded-full bg-pink-500 transition-all ${
                isPlaying ? 'animate-pulse' : 'h-1.5 opacity-40'
              }`}
              style={{
                height: isPlaying ? `${(bar * 4 + 4)}px` : '4px',
                animationDuration: `${0.4 + bar * 0.2}s`,
              }}
            />
          ))}
        </div>

        <div className="text-slate-500 group-hover:text-pink-600 transition-colors pl-0.5">
          {isPlaying ? <Volume2 className="w-4 h-4 text-pink-600" /> : <VolumeX className="w-4 h-4" />}
        </div>
      </button>
    </div>
  );
};
