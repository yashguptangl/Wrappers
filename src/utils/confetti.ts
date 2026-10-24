import confetti from 'canvas-confetti';

export const triggerBurstConfetti = (originX = 0.5, originY = 0.6) => {
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { x: originX, y: originY },
    colors: ['#ff69b4', '#ffb6c1', '#ffd700', '#c084fc', '#f43f5e', '#ffffff'],
    disableForReducedMotion: true,
  });
};

export const triggerGrandCelebration = () => {
  const duration = 3.5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

  const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

  const interval: ReturnType<typeof setInterval> = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    // Left & right bursts
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      colors: ['#ff1493', '#ff69b4', '#ffb6c1', '#ffd700', '#a855f7'],
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      colors: ['#ff1493', '#ff69b4', '#ffb6c1', '#ffd700', '#a855f7'],
    });
  }, 250);
};

export const triggerHeartShower = () => {
  const count = 30;
  const defaults = {
    origin: { y: 0.7 },
    shapes: ['star'] as confetti.Shape[],
    colors: ['#f43f5e', '#ec4899', '#f472b6', '#fb7185'],
  };

  confetti({
    ...defaults,
    particleCount: count,
    spread: 90,
  });
};
