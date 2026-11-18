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
      "Explore your conditioned identity, dismantle limiting beliefs and discover your own individual nature, potential and direction in life.",
    support: "Discover your true nature. Unlock your potential. Live freely.",
    meta: "Dharma Coaching · 90 minutes · pilot price €125 (incl. VAT)",
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
        name: "Exploring your nature, Dharma and potential",
        minutes: 20,
        text: "We explore your inherent qualities, tendencies, interests and strengths. What kind of activity feels like your own? What potential would you like to express? What could be your way of taking part in the world and fulfilling your own purpose?",
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
      "A single session is a complete and meaningful experience in itself. It does not reveal your whole Dharma, permanently remove limiting beliefs, heal trauma or produce lasting freedom, but it gives you questions and perspectives that you can keep exploring on your own.",
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
    priceLine: "Price: {price} (incl. 25.5% VAT) · {duration}",
    detailLabels: {
      duration: "Duration",
      price: "Price",
      format: "Format",
    },
    formatValue: "One-to-one session online (Google Meet)",
    priceNote: "Pilot price, incl. 25.5% VAT",
    placeholderDuration: "[Duration]",
    placeholderPrice: "[Add price]",
  },

  philosophy: {
    eyebrow: "Philosophical foundation",
    title: "What is Dharma Coaching based on?",
    intro:
      "Dharma Coaching is an approach to personal coaching and self-inquiry. It begins by dismantling conditioned identity and moves toward expressing your nature, purpose and potential, and toward freedom. It rests on three sources, none of which you need to know beforehand.",
    sources: [
      {
        key: "vedanta",
        title: "Vedanta and Advaita",
        text: "Advaita Vedanta explores the nature of the true Self, Atman. It distinguishes Atman from what a person usually identifies with: the body, thoughts, roles and self-image. Self-inquiry does not ask what kind of person I should be, but what this “I” is that I take myself to be.",
      },
      {
        key: "yoga",
        title: "Yoga philosophy",
        text: "Yoga philosophy explores conditioning, identification and the structures that sustain suffering. Patañjali’s Yoga Sūtras describe avidyā as ignorance of one’s true nature and asmitā as identification with the sense of “I”: “I am this.” Together with attachment, aversion and fear of loss, they are the kleśas of Yoga philosophy.",
      },
      {
        key: "purusharthas",
        title: "The four Puruṣārthas",
        text: "Bhagavan Shanmukha’s interpretation of the four Puruṣārthas gives a framework for individual nature, potential, bliss and freedom: Dharma, Artha, Kāma and Mokṣa.",
      },
    ],
    progression: {
      title: "How Dharma Coaching unfolds",
      intro:
        "The work begins by dismantling conditioned identity. From there it moves toward understanding and expressing your own nature, and toward freedom.",
      steps: [
        {
          title: "Deconstruct conditioned identity",
          text: "Identify and question limiting beliefs, fears, identifications and learned assumptions.",
        },
        {
          title: "Discover your individual true nature",
          text: "Understand your own qualities, tendencies and natural characteristics.",
        },
        {
          title: "Understand your Dharma",
          text: "Recognise your own nature, purpose and responsibility as part of the larger whole.",
        },
        {
          title: "Discover your Artha",
          text: "Recognise and express the potential inherent in your nature.",
        },
        {
          title: "Express Kāma",
          text: "Experience and express innate bliss, joy and fulfilment.",
        },
        {
          title: "Understand Mokṣa",
          text: "Freedom from a limited and conditioned idea of yourself and of existence.",
        },
      ],
      note:
        "Svabhāva means an individual’s own nature, and svadharma one’s own Dharma: the task and purpose that follow from expressing that nature. They are used here as explanatory concepts, not as direct quotations from Bhagavan Shanmukha.",
    },
    distinction: {
      title: "Identity, Atman and Dharma",
      leftTitle: "Psychological identity",
      leftText:
        "Self-image, roles, beliefs, history and the stories of who I am. It is built over a lifetime, and it can be examined, questioned and changed.",
      rightTitle: "Atman, the true Self (the perspective of Advaita Vedanta)",
      rightText:
        "According to Advaita Vedanta, Atman is not a personality, a feeling or a self-image, and it cannot be improved or built. It is that which knows every experience and remains the same while ideas about oneself change.",
      relationTitle: "Atman and Dharma are not the same thing",
      relationText:
        "Atman belongs to the deeper philosophical question of the true Self, which Advaita Vedanta explores. Dharma concerns how an individual’s own nature, purpose and potential are expressed in life as part of a larger whole. The concepts are related, but Dharma Coaching does not equate them.",
      closing:
        "That is why Dharma Coaching does not build a better personality or a more positive self-image. It begins by examining identity and moves toward expressing your own nature in everyday life.",
    },
    purusharthasTitle: "The four Puruṣārthas",
    purusharthasIntro: "In Bhagavan Shanmukha’s interpretation, the four aims of life are:",
    items: [
      {
        key: "dharma",
        numeral: "I",
        name: "Dharma",
        title: "Your True Nature, Purpose & Duty",
        line: "An individual’s true nature and the task and purpose that follow from it.",
        paragraphs: [
          "Dharma means recognising your own nature and expressing it fully. It relates to the qualities, tendencies and possibilities a person has, and to their unique purpose as part of a larger whole.",
          "It is not only an external duty, but a way of living and acting that follows one’s own nature.",
        ],
      },
      {
        key: "artha",
        numeral: "II",
        name: "Artha",
        title: "Your Potential & Resources",
        line: "The potential within one’s nature and the resources needed to express it.",
        paragraphs: [
          "Artha covers a person’s abilities, skills, opportunities and practical conditions, through which they can live out their own nature in their life.",
        ],
      },
      {
        key: "kama",
        numeral: "III",
        name: "Kāma",
        title: "Your Innate Bliss",
        line: "Innate joy, bliss and fulfilment.",
        paragraphs: [
          "In Bhagavan Shanmukha’s interpretation, Kāma does not mean only sensual pleasure or the satisfaction of desires, but a person’s innate right to bliss. It is connected to the full expression of one’s nature and potential.",
        ],
      },
      {
        key: "moksha",
        numeral: "IV",
        name: "Mokṣa",
        title: "Freedom",
        line: "Freedom from a limited and conditioned idea of oneself and of existence.",
        paragraphs: [
          "In Bhagavan Shanmukha’s view, Dharma, Artha and Kāma are essentially connected to the realisation of Mokṣa.",
        ],
      },
    ],
    natureTitle: "Discovering your nature does not mean following every desire.",
    natureText:
      "Recognising your nature does not mean following every desire or avoiding discomfort. It means understanding your own individual nature, abilities, tendencies and purpose, and living responsibly in accordance with them as part of a larger whole.",
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
      {
        title: "Your nature and potential going unexpressed",
        text: "A conditioned self-image does not only affect how you see yourself. It can also stop you from recognising your own abilities, tendencies, interests and possibilities. You may leave undone things that are natural to you, because you have learned to believe they are not possible or acceptable.",
      },
    ],
    closing:
      "When you begin to examine your own ideas, a new perspective on your life can open up. What you took to be your limit may turn out to be a learned way of looking.",
  },

  about: {
    eyebrow: "About",
    title: "Behind Dharma Coaching",
    paragraphs: [
      "I have long been interested in the human mind, consciousness and potential, and in the question of who or what a human being fundamentally is.",
      "Vedanta and Yoga philosophy have offered me interesting and intellectually coherent ways of exploring these questions. They also contain starting points, however, that I cannot fully identify with myself.",
      "Both offer their own description of reality, of the human being and of suffering. But what happens when a person understands intellectually that they are Atman or Brahman? Does that resolve their suffering? Not necessarily. Unless the understanding becomes lived and experienced reality, it can remain just one more idea among others.",
      "At worst, non-dual thinking can also be used to deny reality and human experience. The idea that nothing is ultimately real, or that everything is merely illusion, can even turn into a nihilistic way of relating to life. Philosophical understanding does not automatically mean that a person has been freed from their fears, conditioning or suffering.",
      "The Puruṣa of Yoga philosophy offers a different perspective on human nature and consciousness. It is also an interesting description of what in a person is unchanging. Still, I notice that I love this life and the possibilities it offers. I do not want to see human existence only as detachment from the world or as liberation from it.",
      "That is why Bhagavan Shanmukha’s interpretation of the four Puruṣārthas feels especially close to me.",
      "In his way of describing Dharma, Artha, Kāma and Mokṣa there is something that connects recognising one’s own nature, realising one’s potential, innate joy and freedom. Life does not appear only as something to be freed from, but also as an opportunity to express one’s own nature fully.",
      "Here, Dharma means a person’s individual nature and the task and purpose that follow from it. Artha relates to realising the potential contained in this nature. Kāma describes innate bliss and fulfilment, and Mokṣa freedom.",
      "The human mind and potential have also always interested me. Earlier I approached them perhaps more from the perspective of self-improvement. Today I see the matter a little differently.",
      "Our ideas about ourselves are built largely through life experiences, our surroundings, beliefs and various forms of conditioning. We learn to think certain things about ourselves and often begin to live accordingly. These ideas can, without our noticing, limit how we see our possibilities, what choices we make and how much we dare to express our own nature.",
      "I am interested in exploring and dismantling these structures. I believe that freeing oneself from unnecessary limitations can do good both for the individual and for those around them. When a person understands themselves better and no longer lives so strongly guided by their fears, beliefs and external expectations, they have more possibilities to realise their own potential and to live a life that is meaningful to them.",
      "Dharma Coaching has been built around precisely these questions.",
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
