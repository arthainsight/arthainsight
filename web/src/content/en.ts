/**
 * English texts. Same structure as fi.ts: edit the wording here, leave the components alone.
 * The Finnish texts are in fi.ts.
 */
import type { Content } from "./fi";

export const en: Content = {
  lang: "en",
  /** Path to the site root as seen from this page (images and files). */
  root: "../",

  ids: {
    home: "home",
    questions: "questions",
    coaching: "dharma-coaching",
    philosophy: "philosophy",
    obstacles: "conditioning",
    about: "about",
    closing: "closing",
    contact: "contact",
    main: "main",
  },

  nav: [
    { key: "home", label: "Home" },
    { key: "coaching", label: "Dharma Coaching" },
    { key: "philosophy", label: "Philosophy" },
    { key: "about", label: "About" },
    { key: "contact", label: "Contact" },
  ],

  switchLang: { label: "FI", title: "Suomeksi", href: "../", hreflang: "fi" },

  a11y: {
    skip: "Skip to content",
    logoAlt: "Artha Insight",
    homeLink: "Artha Insight, back to the top",
    mainNav: "Main menu",
    mobileNav: "Mobile menu",
    footerNav: "Footer menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    newTab: "(opens in a new tab)",
  },

  footer: {
    tagline: "From conditioning to freedom.",
    siteHeading: "Site",
    followHeading: "Follow",
    contactHeading: "Contact",
    privacy: "Privacy policy",
    privacyUrl: "../privacy.html",
  },

  hero: {
    eyebrow: "From conditioning to freedom",
    title: "Who are you beneath everything you believe yourself to be?",
    lead:
      "Explore your conditioned identity, question limiting beliefs and discover a deeper understanding of who you are.",
    support: "Discover your true nature. Unlock your potential. Live freely.",
    meta: "Dharma Coaching · 90 minutes · pilot price €125",
    primaryCta: "Book a 90-minute session",
    secondaryCta: "Explore Dharma Coaching",
  },

  questions: {
    eyebrow: "Questions to ask yourself",
    title: "What if you asked these first?",
    items: [
      "Who are you without your beliefs?",
      "Are you living your own life or someone else’s expectations?",
      "What if the identity you defend is something you have learned to believe?",
      "Are your thoughts telling you the truth?",
      "What would change if you stopped identifying with everything you think and feel?",
      "Are you becoming who you truly are, or trying to become who you believe you should be?",
    ],
    situations:
      "Many people turn to self-inquiry at a crossroads in life: the work does not feel like their own, life looks good from the outside but meaning is missing within, or they want change but fear its consequences. Behind this there is often a question that has not yet been asked: who am I when I am not all of these ideas?",
    closing:
      "The aim is not to build a better personality or a more positive self-image. The aim is to investigate what identity actually is, and what is beneath it.",
  },

  coaching: {
    eyebrow: "Dharma Coaching",
    name: "Dharma Coaching",
    subtitle: "A 90-minute personal session",
    leadQuestion: "Who are you without all your beliefs?",
    paragraphs: [
      "Over the course of our lives we have taken on countless ideas about who we are, what we should be like and what we can achieve.",
      "Some of these ideas can limit our lives without our noticing. They shape how we see ourselves, how we behave and what choices we make.",
      "Dharma Coaching is a personal coaching session in which we explore these ideas and their effect on your life.",
      "In the session we focus on one question or challenge that matters to you. We investigate the beliefs, fears and identifications behind it, and we question them together.",
      "The philosophical foundation of the work is Vedanta, Yoga philosophy and Bhagavan Shanmukha’s view of the four Puruṣārthas: Dharma, Artha, Kāma and Mokṣa.",
      "The aim is to deepen your understanding of yourself, to recognise ideas that limit your life and to find new perspectives on how you could live more in line with your own nature.",
    ],
    philosophyLink: "Read more about the philosophical foundation",
    stagesTitle: "The five stages of the session",
    minutesUnit: "min",
    stages: [
      {
        name: "Initial exploration",
        minutes: 10,
        text: "We clarify your current situation, your challenges and the question you want to explore.",
      },
      {
        name: "Identity inquiry",
        minutes: 20,
        text: "We explore your self-image, assumptions and beliefs, and how they shape your emotions, decisions and behaviour.",
      },
      {
        name: "Deconstructing limiting beliefs",
        minutes: 30,
        text: "We investigate one central limiting belief. We question its validity, its origins and its implications, and the identification attached to it.",
      },
      {
        name: "Exploring true nature and direction",
        minutes: 20,
        text: "We explore your values, tendencies and potential, and what feels meaningful and authentic in your life.",
      },
      {
        name: "Integration",
        minutes: 10,
        text: "We summarise the insights and identify practical questions or steps for further self-inquiry.",
      },
    ],
    suitableTitle: "Who this is for",
    suitable: [
      "You want to explore one question or challenge that matters to you, for example about work, choices or your own identity.",
      "You are ready to question your own assumptions, even when it feels uncomfortable.",
      "You are looking for questions and new perspectives rather than a ready answer.",
      "You do not need any prior knowledge of Vedanta or Sanskrit.",
    ],
    notSuitableTitle: "Who this is not for",
    notSuitable: [
      "You need psychotherapy, treatment or crisis support. Dharma Coaching does not replace them.",
      "You expect a quick fix, healing or lasting change from a single session.",
      "You want to polish your self-image or learn positive thinking.",
    ],
    standalone:
      "A single session is a complete and meaningful experience in itself. It does not remove fears, heal trauma or produce lasting freedom, but it gives you questions and perspectives that you can keep exploring on your own.",
    note: "Dharma Coaching is guidance and self-inquiry. It is not psychotherapy, treatment or medical help.",
    cta: "Book a 90-minute session",
    bookingTitle: "How to book",
    bookingSteps: [
      "Choose a free time that suits you in the Google Calendar booking page.",
      "You receive a confirmation of your booking.",
      "You receive a payment link after your booking has been confirmed.",
      "You receive a Google Meet link, through which we meet at the agreed time.",
    ],
    bookingNote: "Payment is not taken when you book. The payment link is sent separately once the booking has been received and confirmed.",
    priceLine: "Price: {price} · {duration}",
    detailLabels: {
      duration: "Duration",
      price: "Price",
      format: "Format",
    },
    formatValue: "One-to-one session online (Google Meet)",
    priceNote: "Pilot price",
    placeholderDuration: "[Duration]",
    placeholderPrice: "[Add price]",
  },

  philosophy: {
    eyebrow: "Philosophical foundation",
    title: "What is Dharma Coaching based on?",
    intro:
      "Dharma Coaching is an approach to personal coaching and self-inquiry. It rests on three sources, none of which you need to know beforehand.",
    sources: [
      {
        key: "vedanta",
        title: "Vedanta and Advaita",
        text: "In Vedanta, a person’s true nature, Atman, is distinguished from what they usually identify with: the body, thoughts, roles and self-image. Self-inquiry does not ask what kind of person I should be, but what this “I” is that I take myself to be.",
      },
      {
        key: "yoga",
        title: "Yoga philosophy",
        text: "Patañjali’s Yoga Sūtras describe how the structures that sustain suffering arise. Avidyā is ignorance of one’s true nature, and asmitā is identification with the sense of “I”: “I am this.” Together with attachment, aversion and fear of loss, they are the kleśas of Yoga philosophy.",
      },
      {
        key: "purusharthas",
        title: "The four Puruṣārthas",
        text: "In Bhagavan Shanmukha’s interpretation, the four aims of life are Dharma, Artha, Kāma and Mokṣa. They ask what your true nature is, how it can be expressed, where fulfilment comes from and what limits your freedom.",
      },
    ],
    distinction: {
      title: "Identity and the true Self",
      leftTitle: "Psychological identity",
      leftText:
        "Self-image, roles, beliefs, history and the stories of who I am. It is built over a lifetime, and it can be examined, questioned and changed.",
      rightTitle: "Atman, the true Self",
      rightText:
        "According to Vedanta, Atman is not a personality, a feeling or a self-image, and it cannot be improved or built. It is that which knows every experience and remains the same while ideas about oneself change.",
      closing:
        "That is why Dharma Coaching does not build a better personality or a more positive self-image. It investigates what identity is and how the nature beneath it can be expressed in everyday life.",
    },
    purusharthasTitle: "The four Puruṣārthas",
    purusharthasIntro: "In Bhagavan Shanmukha’s interpretation, the four aims of life are:",
    items: [
      {
        key: "dharma",
        numeral: "I",
        name: "Dharma",
        line: "Your true nature.",
        text: "What you are at your core, before learned ideas and conditioned identities cover it.",
      },
      {
        key: "artha",
        numeral: "II",
        name: "Artha",
        line: "Your potential and the resources to express it.",
        text: "The abilities, skills, work and everyday conditions through which your nature can be expressed.",
      },
      {
        key: "kama",
        numeral: "III",
        name: "Kāma",
        line: "Your innate bliss, joy and fulfilment.",
        text: "Inborn joy and fulfilment, not only the pleasure produced by achievements or circumstances.",
      },
      {
        key: "moksha",
        numeral: "IV",
        name: "Mokṣa",
        line: "Freedom.",
        text: "Freedom from conditioning and from whatever limits your being.",
      },
    ],
    freedom:
      "Freedom does not require escaping life. The aim is not to run from everyday life but to live it more freely and to express your own potential more fully.",
    stance:
      "Dharma Coaching does not tell you who you are. The inquiry takes place in your own experience: the guidance offers questions and perspectives, but you find the answers yourself.",
  },

  obstacles: {
    eyebrow: "How does conditioning show up in everyday life?",
    title: "You are not necessarily who you have learned to define yourself as.",
    items: [
      {
        title: "An adopted identity",
        text: "The roles, the title and the story you have learned to tell about yourself can feel like your own, even though they were learned.",
      },
      {
        title: "Unconscious beliefs",
        text: "Assumptions about what you are allowed to want and what is possible steer your choices, even when you do not notice them.",
      },
      {
        title: "Fear and the need for security",
        text: "The familiar feels safe, even when it no longer holds you up. Fear can dress itself up as good sense.",
      },
      {
        title: "Other people’s expectations",
        text: "The expectations of family, colleagues and surroundings easily blend with your own desire.",
      },
      {
        title: "Limiting ideas about your possibilities",
        text: "Your idea of what you can do or what you deserve is often learned, not true.",
      },
      {
        title: "Identifying with thoughts and stories about yourself",
        text: "The thought “I am like this” feels like a fact, even though it is a story you can examine.",
      },
    ],
    closing:
      "When you begin to examine your own ideas, a new perspective on your life can open up. What you took to be your limit may turn out to be a learned way of looking.",
  },

  about: {
    eyebrow: "About",
    title: "Behind Dharma Coaching",
    paragraphs: [
      "I have been lost and stuck myself. I tried to start a business that did not feel like mine at all. Luckily it never took off.",
      "Dharma Coaching draws on Vedanta, Yoga philosophy and Bhagavan Shanmukha’s interpretation of the four Puruṣārthas. The work combines self-inquiry, philosophical depth and practical application in everyday life.",
      "The approach is one of questioning. I do not offer ready answers about who you are or what your direction is. We explore the questions together, and you find the answers yourself.",
    ],
    notTitle: "What Dharma Coaching is not",
    not: [
      "Psychotherapy, treatment or crisis support.",
      "Handing you ready answers about who you are.",
      "Improving your personality or self-image.",
      "A promise of lasting change or freedom in a single session.",
    ],
    philosophyLink: "Read about the philosophical foundation",
  },

  closing: {
    title: "Are you becoming who you truly are – or trying to become who you believe you should be?",
    text: "Book a 90-minute Dharma Coaching session and explore one question that matters to you, calmly and without hurry.",
    cta: "Book a 90-minute session",
  },

  contact: {
    eyebrow: "Contact",
    title: "Ask a question or arrange a session.",
    text: "You can ask whether Dharma Coaching suits you, briefly describe a question you would like to explore, or arrange a time. You do not need to have a ready question.",
    labels: {
      name: "Name",
      email: "Your email address",
      message: "Message",
    },
    submit: "Open message in email",
    notice:
      "The form does not send your message to a server. The button opens your email app with a pre-filled message that you send yourself.",
    privacy: "Privacy",
    alt: "You can also write directly to",
    bookingLead: "Or book a time directly in Google Calendar:",
    opened: "Your email app should open. If it does not, write to {email}.",
    mailSubject: "Contact: Dharma Coaching",
    mailName: "Name",
    mailEmail: "Email",
  },
};
