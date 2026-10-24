import { birthdayConfig } from '../data/birthdayConfig';

class AudioManager {
  private audio: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private onStateChangeCallback: ((playing: boolean) => void) | null = null;
  private synthCtx: AudioContext | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.initAudio();
    }
  }

  private initAudio() {
    if (this.audio) return;
    this.audio = new Audio(birthdayConfig.music.src);
    this.audio.loop = true;
    this.audio.preload = 'auto';

    this.audio.addEventListener('play', () => {
      this.isPlaying = true;
      if (this.onStateChangeCallback) this.onStateChangeCallback(true);
    });

    this.audio.addEventListener('pause', () => {
      this.isPlaying = false;
      if (this.onStateChangeCallback) this.onStateChangeCallback(false);
    });

    this.audio.addEventListener('ended', () => {
      // Loop backup
      if (this.audio) {
        this.audio.currentTime = 0;
        this.audio.play().catch(() => {});
      }
    });

    // Fallback if audio file fails to load
    this.audio.addEventListener('error', () => {
      console.warn('Real audio file failed to load, falling back to soft Web Audio synth.');
    });
  }

  public onStateChange(cb: (playing: boolean) => void) {
    this.onStateChangeCallback = cb;
  }

  public playMagicSparkle() {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!this.synthCtx) this.synthCtx = new AudioCtx();
      if (this.synthCtx.state === 'suspended') this.synthCtx.resume();
      
      const now = this.synthCtx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      notes.forEach((freq, idx) => {
        if (!this.synthCtx) return;
        const osc = this.synthCtx.createOscillator();
        const gain = this.synthCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.001, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.2, now + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 0.5);
        osc.connect(gain);
        gain.connect(this.synthCtx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.5);
      });
    } catch {
      // ignore
    }
  }

  public playCelebrationChime() {
    this.playMagicSparkle();
  }

  public startMelodyLoop() {
    this.initAudio();
    if (!this.audio) return;

    this.audio.play().then(() => {
      this.isPlaying = true;
      if (this.onStateChangeCallback) this.onStateChangeCallback(true);
    }).catch((err) => {
      console.log('Autoplay deferred until user touch/click: ', err);
    });
  }

  public stopMelodyLoop() {
    if (this.audio) {
      this.audio.pause();
    }
    this.isPlaying = false;
    if (this.onStateChangeCallback) this.onStateChangeCallback(false);
  }

  public toggle() {
    this.initAudio();
    if (!this.audio) return false;

    if (this.audio.paused) {
      this.startMelodyLoop();
      return true;
    } else {
      this.stopMelodyLoop();
      return false;
    }
  }

  public getIsPlaying() {
    return this.isPlaying;
  }
}

export const soundManager = new AudioManager();
