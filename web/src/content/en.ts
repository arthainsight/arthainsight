/**
 * English texts. Same structure as fi.ts: edit the wording here, leave the components alone.
 * The Finnish texts are in fi.ts.
 *
 * The site has two pages: the home page (the service) and the Philosophy page (the philosophical depth).
 */
import type { Content } from "./fi";

export const en: Content = {
  lang: "en",

  ids: {
    home: "home",
    questions: "questions",
    coaching: "dharma-coaching",
    pricing: "price-and-booking",
    basis: "philosophical-foundation",
    about: "about",
    contact: "contact",
    closing: "closing",
    main: "main",
  },

  nav: [
    { key: "home", label: "Home" },
    { key: "coaching", label: "Dharma Coaching" },
    { key: "philosophy", label: "Philosophy" },
    { key: "about", label: "About" },
    { key: "contact", label: "Contact" },
  ],

  switchLang: { label: "FI", title: "Suomeksi", hreflang: "fi" },

  a11y: {
    skip: "Skip to content",
    logoAlt: "Artha Insight",
    homeLink: "Artha Insight, home page",
    mainNav: "Main menu",
    mobileNav: "Mobile menu",
    footerNav: "Footer menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    newTab: "(opens in a new tab)",
    toc: "On this page",
  },

  footer: {
    tagline: "From conditioning to freedom.",
    siteHeading: "Site",
    followHeading: "Follow",
    contactHeading: "Contact",
    privacy: "Privacy policy",
  },

  hero: {
    eyebrow: "Artha Insight · From conditioning to freedom",
    title: "Who are you beneath everything you believe yourself to be?",
    lead:
      "Explore your conditioned identity, dismantle limiting beliefs and discover your own individual nature, potential and direction in life.",
    support: "Discover your true nature. Unlock your potential. Live freely.",
    meta: "Dharma Coaching · 90 min · pilot price €125 (incl. 25.5% VAT)",
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
      "The aim is not to build a better personality or a more positive self-image but to investigate what identity actually is.",
  },

  coaching: {
    eyebrow: "Dharma Coaching",
    name: "Dharma Coaching",
    subtitle: "A 90-minute personal session",
    leadQuestion: "Who are you without all your beliefs?",
    paragraphs: [
      "Over the course of our lives we have taken on countless ideas about who we are and what we should be like. Some of them limit our lives without our noticing: they shape how we see ourselves, how we behave and what choices we make.",
      "Dharma Coaching is a personal coaching session in which we focus on one question or challenge that matters to you. We investigate the beliefs, fears and identifications behind it and question them together. The aim is to deepen your understanding of yourself and to find new perspectives on how you could live more in line with your own nature.",
    ],
    examplesTitle: "What the session can explore",
    examplesIntro: "Examples of questions you can bring:",
    examples: [
      "Why do I not dare to make a change in my life?",
      "Am I living my own life or other people’s expectations?",
      "Why can I not recognise my own direction or potential?",
      "How do my beliefs affect my choices?",
    ],
    philosophyLink: "Read more about the philosophical foundation",
    stagesTitle: "The five stages of the session",
    minutesUnit: "min",
    stages: [
      {
        name: "Initial exploration",
        minutes: 10,
        text: "We clarify your situation, your challenges and the question you want to explore.",
      },
      {
        name: "Identity inquiry",
        minutes: 20,
        text: "We explore your self-image, assumptions and beliefs, and how they shape your emotions, decisions and behaviour.",
      },
      {
        name: "Deconstructing limiting beliefs",
        minutes: 30,
        text: "We investigate one central limiting belief and question its validity, its origins, its implications and the identification attached to it.",
      },
      {
        name: "Exploring your nature, Dharma and potential",
        minutes: 20,
        text: "We explore your inherent qualities, tendencies, interests and strengths. What kind of activity feels like your own? What potential would you like to express? What could be your way of taking part in the world and fulfilling your own purpose?",
      },
      {
        name: "Integration",
        minutes: 10,
        text: "We bring the insights together and identify practical questions or steps for further self-inquiry.",
      },
    ],
    suitableTitle: "Who this is for",
    suitable: [
      "You want to explore one question or challenge that matters to you, for example about work, choices or your own identity.",
      "You are ready to question your own assumptions, even when it feels uncomfortable.",
      "You are looking for questions and new perspectives rather than a ready answer. You do not need any knowledge of Vedanta or Sanskrit.",
    ],
    notSuitableTitle: "Who this is not for",
    notSuitable: [
      "You need psychotherapy, treatment or crisis support. Dharma Coaching does not replace them.",
      "You expect a quick fix, healing or lasting change from a single session.",
      "You want to polish your self-image or learn positive thinking.",
    ],
    pricingTitle: "Price and booking",
    includesTitle: "What the price includes",
    includes: [
      "A 90-minute personal session on Google Meet.",
      "Work on one question that matters to you.",
      "Questions and perspectives that you can keep exploring on your own.",
    ],
    bookingTitle: "How to book",
    bookingSteps: [
      "Choose a free time that suits you in the Google Calendar booking page.",
      "You receive a confirmation of your booking.",
      "You receive a payment link after your booking has been confirmed.",
      "You receive a Google Meet link, through which we meet at the agreed time.",
    ],
    bookingNote: "Payment is not taken when you book.",
    standalone:
      "A single session is a complete and meaningful experience in itself. It does not reveal your whole Dharma, permanently remove limiting beliefs, heal trauma or produce lasting freedom, but it gives you questions and perspectives that you can keep exploring on your own.",
    note: "Dharma Coaching is guidance and self-inquiry. It is not psychotherapy, treatment or crisis support.",
    cta: "Book a 90-minute session",
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

  basis: {
    eyebrow: "Philosophical foundation",
    title: "What is Dharma Coaching based on?",
    text: "Dharma Coaching draws on Advaita Vedanta, Yoga philosophy and Bhagavan Shanmukha’s interpretation of the four Puruṣārthas. Vedanta and Yoga philosophy help explore identity and conditioning. The Puruṣārthas give a structure for how one’s own nature, potential, joy and freedom can be expressed in life.",
    panelsIntro: "In Bhagavan Shanmukha’s interpretation, the four Puruṣārthas are:",
    link: "Read the deeper philosophy section",
  },

  purusharthaItems: [
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

  about: {
    eyebrow: "About",
    title: "Behind Dharma Coaching",
    paragraphs: [
      "I have long been interested in the human mind, consciousness and potential, and in the question of who or what a human being fundamentally is.",
      "Vedanta and Yoga philosophy have offered me interesting and intellectually coherent ways of exploring these questions. They also contain starting points, however, that I cannot fully identify with myself.",
      "Both offer their own description of reality, of the human being and of suffering. But what happens when a person understands intellectually that they are Atman or Brahman? Does that resolve their suffering? Not necessarily. Unless the understanding becomes lived and experienced reality, it can remain just one more idea among others.",
      "At worst, non-dual thinking can also be used to deny reality and human experience. The idea that nothing is ultimately real, or that everything is merely illusion, can even turn into a nihilistic way of relating to life. Philosophical understanding does not automatically mean that a person has been freed from their fears, conditioning or suffering.",
      "The Puruṣa of Yoga philosophy offers a different perspective on human nature and consciousness. It is also an interesting description of what in a person is unchanging. Still, I notice that I love this life and the possibilities it offers. I do not want to see human existence only as detachment from the world or as liberation from it.",
      "That is why Bhagavan Shanmukha’s interpretation of the four Puruṣārthas feels especially close to me. In his way of describing Dharma, Artha, Kāma and Mokṣa there is something that connects recognising one’s own nature, realising one’s potential, innate joy and freedom. Life does not appear only as something to be freed from, but also as an opportunity to express one’s own nature fully.",
      "The human mind and potential have also always interested me. Earlier I approached them perhaps more from the perspective of self-improvement. Today I see the matter a little differently.",
      "Our ideas about ourselves are built largely through life experiences, our surroundings, beliefs and various forms of conditioning. We learn to think certain things about ourselves and often begin to live accordingly. These ideas can, without our noticing, limit how we see our possibilities, what choices we make and how much we dare to express our own nature.",
      "I am interested in exploring and dismantling these structures. I believe that freeing oneself from unnecessary limitations can do good both for the individual and for those around them. When a person understands themselves better and no longer lives so strongly guided by their fears, beliefs and external expectations, they have more possibilities to realise their own potential and to live a life that is meaningful to them.",
      "Dharma Coaching has been built around precisely these questions.",
    ],
    philosophyLink: "Read about the philosophical foundation",
  },

  contact: {
    eyebrow: "Contact",
    title: "Ask a question or arrange a session.",
    text: "You can ask whether Dharma Coaching suits you, or arrange a time. You do not need to have a ready question.",
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

  closing: {
    title: "Are you becoming who you truly are – or trying to become who you believe you should be?",
    text: "Book a 90-minute Dharma Coaching session and explore one question that matters to you, calmly and without hurry.",
    cta: "Book a 90-minute session",
  },

  philosophyPage: {
    hero: {
      eyebrow: "Philosophy",
      title: "The philosophical foundation of Dharma Coaching",
      lead: "Where Dharma Coaching comes from, what the concepts mean and how they are applied.",
    },
    tocTitle: "On this page",
    ids: {
      levels: "three-levels",
      vedanta: "vedanta",
      yoga: "yoga-philosophy",
      purusharthas: "purusarthas",
      svabhava: "svabhava-and-svadharma",
      identity: "identity-atman-dharma",
      nature: "your-nature",
      steps: "six-stages",
    },
    toc: [
      { key: "vedanta", label: "Vedanta and Advaita Vedanta" },
      { key: "yoga", label: "Yoga philosophy and conditioning" },
      { key: "purusharthas", label: "The four Puruṣārthas" },
      { key: "svabhava", label: "Svabhāva and Svadharma" },
      { key: "identity", label: "Identity, Atman and Dharma" },
      { key: "nature", label: "Discovering your nature" },
      { key: "steps", label: "Six philosophical stages" },
    ],
    levels: {
      title: "Three different levels",
      intro: "This page keeps three different things apart:",
      items: [
        {
          label: "Classical concepts",
          text: "The Indian philosophical traditions’ own ideas. The traditions interpret them in different ways.",
        },
        {
          label: "Bhagavan Shanmukha’s interpretation",
          text: "His framework for the four Puruṣārthas.",
        },
        {
          label: "Dharma Coaching’s application",
          text: "Guidance in self-inquiry that applies this interpretation to everyday life.",
        },
      ],
    },
    vedanta: {
      title: "Vedanta and Advaita Vedanta",
      paragraphs: [
        "Vedanta is a tradition of Indian philosophy, and Advaita Vedanta is its non-dual school. It explores the nature of the true Self, Atman, and distinguishes it from what a person usually identifies with: the body, thoughts, roles and self-image.",
        "Self-inquiry does not ask what kind of person I should be, but what this “I” is that I take myself to be. This is the perspective of Advaita Vedanta: other schools of Vedanta describe the relation between the Self and reality differently.",
      ],
    },
    yoga: {
      title: "Yoga philosophy and conditioning",
      paragraphs: [
        "Patañjali’s Yoga Sūtras describe how the structures that sustain suffering arise. Avidyā is ignorance of one’s true nature, and asmitā is identification with the sense of “I”: “I am this.” Together with attachment, aversion and fear of loss, they form the kleśas, the factors that sustain suffering.",
      ],
      examplesTitle: "How does conditioning show up in everyday life?",
      examples: [
        { title: "An adopted identity", text: "The roles and the story about yourself feel like your own, even though they were learned." },
        { title: "Unconscious beliefs", text: "Assumptions about what is possible steer your choices without your noticing." },
        { title: "Fear and the need for security", text: "The familiar feels safe, even when it no longer holds you up." },
        { title: "Other people’s expectations", text: "Other people’s expectations blend with your own desire." },
        { title: "Limiting ideas about your possibilities", text: "Your idea of what you can do is often learned, not true." },
        { title: "Identifying with thoughts and stories", text: "The thought “I am like this” feels like a fact, even though it is a story." },
        {
          title: "Your nature and potential going unexpressed",
          text: "A conditioned self-image can stop you from recognising your own abilities, tendencies and interests. You may leave undone things that are natural to you, because you have learned to believe they are not possible or acceptable.",
        },
      ],
    },
    purusharthas: {
      title: "The four Puruṣārthas",
      classical: {
        label: "The classical view",
        text: "In classical Indian thought the Puruṣārthas are the four aims of human life: Dharma, Artha, Kāma and Mokṣa. The traditions interpret them in different ways. Dharma is often understood as duty and right order, Artha as livelihood and material means, Kāma as pleasure and the fulfilment of desire, and Mokṣa as liberation. The word Puruṣārtha means a human aim and is not the same thing as the Puruṣa of Yoga philosophy.",
      },
      shanmukha: {
        label: "Bhagavan Shanmukha’s interpretation",
        text: "In his interpretation, Dharma is realising one’s whole true nature and finding one’s purpose within the picture of the whole cosmos. The four Puruṣārthas are described like this:",
      },
      application: {
        label: "Dharma Coaching’s application",
        text: "After conditioning has been dismantled, Dharma Coaching uses this interpretation as a framework of four questions: what is my nature and purpose, what potential belongs to it and what does expressing it require, where do innate joy and fulfilment come from, and what limits my freedom.",
      },
    },
    svabhava: {
      title: "Svabhāva and Svadharma",
      text: "Svabhāva means an individual’s own nature, and svadharma one’s own Dharma: the task and purpose that follow from expressing that nature. In the Indian tradition svadharma often means a person’s own duty or task. Here the concepts are explanatory, not direct quotations from Bhagavan Shanmukha.",
    },
    identity: {
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
    },
    nature: {
      title: "Discovering your nature does not mean following every desire.",
      text: "Recognising your nature does not mean following every desire or avoiding discomfort. It means understanding your own individual nature, abilities, tendencies and purpose, and living responsibly in accordance with them as part of a larger whole.",
    },
    steps: {
      title: "Six philosophical stages of Dharma Coaching",
      intro: "Dharma Coaching’s own progression, from conditioning toward freedom.",
      items: [
        { title: "Deconstruct conditioned identity", text: "Identify and question limiting beliefs, fears, identifications and learned assumptions." },
        { title: "Discover your individual true nature", text: "Understand your own qualities, tendencies and natural characteristics." },
        { title: "Understand your Dharma", text: "Recognise your own nature, purpose and responsibility as part of the larger whole." },
        { title: "Discover your Artha", text: "Recognise and express the potential inherent in your nature." },
        { title: "Express Kāma", text: "Experience and express innate bliss, joy and fulfilment." },
        { title: "Understand Mokṣa", text: "Freedom from a limited and conditioned idea of yourself and of existence." },
      ],
    },
    closing: {
      freedom: "Freedom does not require escaping life. The aim is to live everyday life more freely and to express your own potential more fully.",
      stance: "Dharma Coaching does not tell you who you are. The guidance offers questions and perspectives, and you find the answers yourself.",
      cta: "Book a 90-minute session",
      back: "Back to the home page",
    },
  },
};
