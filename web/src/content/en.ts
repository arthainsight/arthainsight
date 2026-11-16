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
    crossroads: "crossroads",
    consultation: "consultation",
    philosophy: "philosophy",
    obstacles: "obstacles",
    about: "about",
    closing: "closing",
    contact: "contact",
    main: "main",
  },

  nav: [
    { key: "home", label: "Home" },
    { key: "philosophy", label: "Philosophy" },
    { key: "consultation", label: "Consultation" },
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
    tagline: "Your own direction, your own nature, your own path.",
    siteHeading: "Site",
    followHeading: "Follow",
    contactHeading: "Contact",
    privacy: "Privacy policy",
    privacyUrl: "../privacy.html",
  },

  hero: {
    title: "Are you living your own life – or a life you have learned to believe is yours?",
    lead:
      "You have your own nature, your own values and your own potential. But fears, beliefs and other people’s expectations can steer you in a direction that does not feel like yours.",
    support: "Artha Insight helps you pause, see more deeply and find your own direction.",
    primaryCta: "Explore the consultation",
    secondaryCta: "Explore the philosophy",
  },

  crossroads: {
    eyebrow: "When life is at a crossroads",
    title: "Sometimes you know that your current direction is no longer right. But you do not yet know what your own direction is.",
    intro: "Perhaps you recognise some of these:",
    points: [
      "Your current work does not feel like your own.",
      "Life looks good from the outside, but meaning is missing on the inside.",
      "You want change, but you fear its consequences.",
      "You do not know which wants are your own and which are other people’s expectations.",
      "You long for clarity before the next big decision.",
    ],
    situations:
      "A crossroads looks different for everyone. It might be a question of changing career or profession, work that conflicts with your values, a major life change, or doubts about your relationship or your relationships in general. Sometimes you only know that the current situation cannot continue, even though you do not yet know what to do.",
    closing:
      "Perhaps you do not need to find a new answer right away. Perhaps you first need to see more clearly where you have been living from until now.",
  },

  consultation: {
    eyebrow: "Consultation",
    name: "Toward Your Own Dharma",
    subtitle: "A 90-minute personal consultation",
    intro:
      "When you are at a crossroads in life, it can be hard to tell what you truly want from what you have learned to want.",
    body:
      "In the consultation we explore together your life situation, your values, your natural character, your potential and the inner factors that shape your choices.",
    topicsTitle: "We cover",
    topics: [
      "Your current life situation and your crossroads.",
      "Your values and your true desires.",
      "Your identity, beliefs and fears.",
      "Your natural potential and your own direction.",
      "The next concrete step.",
    ],
    noAnswersNeeded: "You do not need to arrive with ready answers.",
    summary:
      "After the consultation you receive a personal written summary of the key insights and the next steps.",
    cta: "Book your consultation",
    note: "The consultation is not therapy and does not replace medical care.",
    detailLabels: {
      duration: "Duration",
      price: "Price",
      summary: "Included",
    },
    summaryDetail: "Personal written summary",
    placeholderDuration: "[Duration]",
    placeholderPrice: "[Add price]",
  },

  philosophy: {
    eyebrow: "Philosophy",
    title: "Life is not only about surviving. It is about realising your own nature and potential.",
    intro:
      "The philosophical foundation of Artha Insight is the four puruṣārthas, the four aims of life in Indian thought.",
    quote: "“One’s own dharma is better than the dharma of another.”",
    quoteSource: "Bhagavad Gītā 3.35",
    dharmaNote: "Dharma does not mean the easiest path. It means your own path.",
    items: [
      {
        key: "dharma",
        numeral: "I",
        name: "Dharma",
        line: "Recognise your own nature.",
        text: "Recognising your true nature and the direction of your life. Not what is expected of you, but what is already in you.",
      },
      {
        key: "artha",
        numeral: "II",
        name: "Artha",
        line: "Realise your potential.",
        text: "Realising your potential and building the conditions for it: the work, resources and daily life that carry your own direction.",
      },
      {
        key: "kama",
        numeral: "III",
        name: "Kāma",
        line: "Live the fullness of life and your natural bliss.",
        text: "Natural joy and the fullness of life. What moves you from within, not only out of duty.",
      },
      {
        key: "moksha",
        numeral: "IV",
        name: "Mokṣa",
        line: "Free yourself from what limits your being.",
        text: "Liberation from inner constraints and karmic bonds.",
      },
    ],
    freedom:
      "A person does not have to escape life in order to find liberation. They can live out their own nature, their potential and their life fully.",
    stance:
      "Artha Insight does not tell you what your dharma is. It is yours. Artha Insight helps you find your own answers and examine whether you live according to your own nature or whether your life is steered by fears, beliefs, other people’s expectations and an adopted identity.",
  },

  obstacles: {
    eyebrow: "What keeps you from living your own life?",
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
    title: "The story behind Artha Insight",
    placeholderTitle: "Your own story goes here",
    placeholderHint:
      "This is an editable text slot. Write in your own words what your philosophy is, what you have lived through and why you want to help people find their direction. Add the text in src/config/site.ts (founder.paragraphs) and the photo in the public/ folder.",
    imagePlaceholder: "Photo placeholder",
  },

  closing: {
    title: "Your own dharma is not necessarily the easiest path. But it is your path.",
    text: "If you feel you are at a crossroads in life, perhaps now is the right moment to pause and explore what is truly your own.",
    cta: "Take a step toward your own direction",
  },

  contact: {
    eyebrow: "Contact",
    title: "Tell us what is on your mind right now.",
    text: "You can ask about the consultation, briefly describe your situation or arrange a time. You do not need to have ready answers.",
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
    bookingLead: "Or book a time directly:",
    opened: "Your email app should open. If it does not, write to {email}.",
    mailSubject: "Contact: Artha Insight",
    mailName: "Name",
    mailEmail: "Email",
  },
};
