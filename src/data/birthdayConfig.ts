export interface BirthdayConfig {
  sisterName: string;
  nickname: string;
  heroGreeting: string;
  heroSubtitle: string;
  letter: {
    title: string;
    paragraphs: string[];
    signature: string;
  };
  photos: {
    id: string;
    url: string;
    title: string;
    caption: string;
    tag: string;
  }[];
  specialReasons: {
    id: string;
    icon: string;
    title: string;
    highlight: string;
    description: string;
  }[];
  giftSection: {
    heading: string;
    buttonText: string;
    revealedTitle: string;
    revealedMessage: string;
  };
  closingSection: {
    heading: string;
    quote: string;
    subQuote: string;
  };
  music: {
    title: string;
    artist: string;
    src: string;
  };
}

export const birthdayConfig: BirthdayConfig = {
  sisterName: "Sister",
  nickname: "Meri Pyari Sister",
  heroGreeting: "Happy Birthday, My Sister! 🎂",
  heroSubtitle: "To the world's most wonderful sister, best friend, and endless inspiration ✨",
  
  letter: {
    title: "To My Forever Best Friend 💌",
    paragraphs: [
      "Happy Birthday to the most special sister in my life! ❤️",
      "You are more than just my sister — you are a beautiful part of my world, a source of happiness, and someone who makes life brighter just by being in it.",
      "Aur haan, ek zaroori birthday resolution: thoda kam lada karo! Apni mummy aur bhai se fight nahi karte... hamesha aise hi pyari aur cute ban ke raha karo! 😜🫶🏻",
      "I wish you endless happiness, good health, success, beautiful memories, and all the love your heart can hold. May every dream you have slowly turn into reality, and may you always have a reason to smile.",
      "No matter how much we grow up or how life changes, you will always have a special place in my heart.",
      "Keep smiling, keep shining, and always remember how precious you are."
    ],
    signature: "Happy Birthday, Meri Pyari Sister! 🫶🏻💖"
  },

  photos: [
    {
      id: "photo-1",
      url: "/photos/sister-1.jpg",
      title: "Radiant & Graceful",
      caption: "That charming smile that effortlessly lights up any room and brings joy to all of us.",
      tag: "Pure Elegance ✨"
    },
    {
      id: "photo-2",
      url: "/photos/sister-2.jpg",
      title: "Royalty & Poise",
      caption: "Carrying traditional beauty with so much elegance, dignity, and warmth.",
      tag: "Traditional Charm 🌸"
    },
    {
      id: "photo-3",
      url: "/photos/sister-3.jpg",
      title: "Celebration & Joy",
      caption: "A queen in every sense — shining bright and creating beautiful moments everywhere you go.",
      tag: "Queen Moments 👑"
    },
    {
      id: "photo-4",
      url: "/photos/sister-cake.jpg",
      title: "Sweet Sweet Memories",
      caption: "Another sweet year of celebrations, laughter, endless treats, and shared love.",
      tag: "Sweet Celebrations 🎂"
    },
    {
      id: "photo-5",
      url: "/photos/sister-memory.jpg",
      title: "Unconditional Bond",
      caption: "The bond and memories of family that will forever remain close to the heart.",
      tag: "Forever Family 🫶🏻"
    },
    {
      id: "photo-6",
      url: "/photos/family-portrait.jpg",
      title: "Our Pillars of Love",
      caption: "Surrounded by the ones who love you beyond measure. A family blessed because of you.",
      tag: "Family Love ❤️"
    }
  ],

  specialReasons: [
    {
      id: "reason-1",
      icon: "Smile",
      title: "Your Beautiful Smile 😊",
      highlight: "Infectious & Bright",
      description: "No matter how tough a day is, seeing your cheerful smile brings comfort and happiness to everyone around you."
    },
    {
      id: "reason-2",
      icon: "Heart",
      title: "Your Kind Heart 💖",
      highlight: "Pure & Empathetic",
      description: "You care so deeply and love so genuinely. Your caring nature makes you truly one-in-a-million."
    },
    {
      id: "reason-3",
      icon: "Sparkles",
      title: "Your Crazy & Cute Nature 🦋",
      highlight: "Fun & Unmatched",
      description: "From funny drama to silly nok-jhok (par haan, mummy aur bhai se thoda kam lada karo!), life is never dull when you are around!"
    },
    {
      id: "reason-4",
      icon: "Sun",
      title: "The Happiness You Bring ✨",
      highlight: "Warmth & Sunshine",
      description: "Your positive energy is like sunshine on a cloudy day. You uplift the spirits of the whole family."
    },
    {
      id: "reason-5",
      icon: "Camera",
      title: "The Memories We Share 🫶🏻",
      highlight: "Priceless Treasures",
      description: "From childhood mischief to growing up together, every memory with you is a treasure I cherish forever."
    },
    {
      id: "reason-6",
      icon: "Flower2",
      title: "The Amazing Person You're Becoming 🌸",
      highlight: "Graceful & Inspiring",
      description: "Watching you grow into such a strong, confident, and wonderful woman fills my heart with immense pride."
    }
  ],

  giftSection: {
    heading: "One Last Surprise... 🎁",
    buttonText: "Unwrap Your Gift 💝",
    revealedTitle: "A Gift from the Bottom of My Heart 💖",
    revealedMessage: "Your biggest gift is knowing that you are loved more than words can ever explain. May this year bring you everything that makes your heart happy. You deserve the absolute best! 💖"
  },

  closingSection: {
    heading: "Once Again, Happy Birthday, Meri Pyari Sister! 💗",
    quote: "Keep smiling. Keep dreaming. Keep shining.",
    subQuote: "The world is more beautiful with you in it. 🌍✨"
  },

  music: {
    title: "Birthday Acoustic Bliss",
    artist: "Celebration Melodies",
    src: "/audio/birthday-tune.mp3"
  }
};
