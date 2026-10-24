import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BackgroundParticles } from './components/BackgroundParticles';
import { OpeningScreen } from './components/OpeningScreen';
import { NavbarMusicPlayer } from './components/NavbarMusicPlayer';
import { HeroSection } from './components/HeroSection';
import { LetterSection } from './components/LetterSection';
import { PhotoGallery } from './components/PhotoGallery';
import { SpecialReasons } from './components/SpecialReasons';
import { GiftBoxSection } from './components/GiftBoxSection';
import { GrandFinale } from './components/GrandFinale';

import { soundManager } from './utils/soundManager';

export function App() {
  const [hasOpenedSurprise, setHasOpenedSurprise] = useState(false);

  // Auto-play music as soon as user opens surprise or interacts
  const handleOpenSurprise = () => {
    setHasOpenedSurprise(true);
    soundManager.startMelodyLoop();
  };

  const handleReplay = () => {
    setHasOpenedSurprise(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen text-slate-800 font-sans selection:bg-pink-300 selection:text-pink-900">
      {/* Background ambient starfield & floating hearts */}
      <BackgroundParticles />

      {/* Opening Surprise Gate */}
      <AnimatePresence>
        {!hasOpenedSurprise && (
          <OpeningScreen onOpen={handleOpenSurprise} />
        )}
      </AnimatePresence>

      {/* Floating Audio Player */}
      <NavbarMusicPlayer />

      {/* Main Experience Body */}
      <main className="relative z-10 w-full">
        <HeroSection />
        <LetterSection />
        <PhotoGallery />
        <SpecialReasons />
        <GiftBoxSection />
        <GrandFinale onReplay={handleReplay} />
      </main>
    </div>
  );
}

export default App;
