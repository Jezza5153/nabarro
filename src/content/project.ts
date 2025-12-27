// content/project.ts

const content = {
  en: {
    meta: {
      brand: "Swimcoaching",
      pageTitle: "Adult Swimming Lessons in English | Zeeland",
      description:
        "1:1 and small-group swimming lessons for adults in Zeeland. English-speaking coach focused on confidence, water safety, and technique.",
    },
    header: {
      menu_label: "Menu",
      subtitle: "Adult swim coaching. Supportive, patient, and progress-focused.",
      cta_hint: "Try-out €20 • 45 min • Pre-registration required",
      home_label: "Home",
    },
    hero: {
      kicker: "Adult swimming lessons in English",
      title: "Finally free and confident in the water.",
      subtitle: "Personal coaching for adults. Supportive, patient, and pressure-free.",
      cta_main: "Sign up",
      cta_secondary: "About the lessons",
    },
    homeFacts: {
      languages: "Languages possible: English, French, Spanish",
      location: "Location: Zeeland (exact pool location shared after registration)",
      format: "Small groups • At your own pace • 45 min per class",
    },
    firstLesson: {
      title: "Try-out lesson, €20 (45 min)",
      note: "Pre-registration is required.",
    },
    about: {
      kicker: "About the instructor",
      title: "Meet Nathalie",
      story: `My name is Nathalie, and I work with adults who want to feel safe and confident in the water.

Many swimmers come to me feeling nervous, ashamed, or frustrated because they think they should have learned years ago, or they carry a childhood water experience that still sits in their body. With patience and time, they learn to trust the water, control their breathing, and move with more ease, step by step, with the right level of challenge.

My motivation has become a mission.

I truly believe there is no such thing as “too late,” only your own timing.

I offer 1:1 and small-group swimming lessons for adults: complete beginners, people with fear of water, those returning to swimming after years, and swimmers who want to improve technique or learn a new stroke.

My approach is supportive, personal, and pressure-free. We move step by step, always at your pace. No shouting, no forcing, no judgment, just patience, clarity, and trust.

Humor as a tool, patience as a method, and trust as the foundation.

Swimming is not about performance. It’s about feeling safe, relaxed, and free in the water. And yes, even adults can learn to enjoy it.`,
      ask_title: "Ask a question",
      ask_subtitle: "Not sure if this is right for you? Feel free to send a message.",
    },
    contact: {
      kicker: "Contact",
      title: "Get in touch",
      subtitle:
        "Have a question or want to sign up? Send a message. No pressure to book anything.",
      form_name: "Full name",
      form_name_placeholder: "Your name",
      form_email: "Email",
      form_email_placeholder: "your@email.com",
      form_message: "Your message",
      form_message_placeholder: "Tell us briefly what you need help with...",
      form_button_sending: "Sending...",
      form_button: "Send message",
      success_title: "Message received!",
      success_message: "Thank you! We’ll be in touch shortly.",
    },
    info: {
      kicker: "Practical info",
      title: "Practical Information",
      subtitle: "Pricing, location, and scheduling, clearly.",
      trust_45: "45 minutes per lesson",
      trust_safe: "Supportive, discreet, judgment-free",
      trust_location: "Zeeland (exact location after registration)",
      pricing_title: "Pricing",
      pricing_desc: "Simple and upfront.",
      pricing_note:
        "Prices are per person. Pool access and VAT may vary by facility. Confirmed when scheduling.",
      pricing_cta: "Book a try-out",
      pricing_smallprint: "The try-out is a gentle introduction. Pre-registration is required.",
      table_service: "Service",
      table_price: "Price",
      location_title: "Location",
      location_desc: "Zeeland, discreet and comfortable.",
      location_body:
        "Lessons take place in a quiet swimming facility in Zeeland. Exact details are shared after registration to protect privacy and keep the setting comfortable.",
      location_cta: "Ask about the nearest option",
      scheduling_title: "Scheduling",
      scheduling_desc: "Weekdays, flexible slots.",
      scheduling_body:
        "Lessons are typically available on weekdays, with options in the morning or evening. Send your preferred days and times and we’ll confirm what’s possible.",
      scheduling_cta: "Check availability",
      price_tryout: "Try-out lesson (45 min, one time)",
      price_private: "1:1 lesson (45 min)",
      price_group: "Small group class (45 min)",
    },
    for_you: {
      kicker: "A Place For You",
      title: "Is this the right place for you?",
      subtitle:
        "These lessons are designed for adults of all backgrounds who want to find comfort and safety in the water. See if any of this sounds familiar.",
      who_title: "These lessons are for...",
      who_list: [
        "Complete beginners who have never had a swimming lesson.",
        "Adults who feel anxious or afraid in the water.",
        "Expats, students, or newcomers to the Netherlands.",
        "Anyone who wants to learn in a discreet, non-judgmental setting.",
        "Swimmers looking to improve their breathing and technique.",
      ],
      reassurance_title: "You might be thinking...",
      reassurances: [
        {
          title: "You don't need any experience.",
          description:
            "Our lessons start from the very beginning. We assume nothing and teach everything.",
        },
        {
          title: "It's okay to be nervous.",
          description:
            "Many adults feel the same way. Our first goal is to help you feel safe and comfortable.",
        },
        {
          title: "Language is not a barrier.",
          description:
            "The lessons are in simple English. The focus is on clear, steady instruction.",
        },
        {
          title: "There is no 'right' timeline.",
          description:
            "You will progress at your own pace. There is no pressure to perform.",
        },
      ],
      cta_title: "Your journey starts with a simple conversation.",
      cta_subtitle:
        "If you have any questions, or just want to see if this is for you, please reach out. There's no commitment whatsoever.",
      cta_button: "Ask a question",
    },
    nav: {
      home: "Home",
      lessons: "Lessons",
      for_you: "For you",
      info: "Practical info",
      about: "About me",
      apply: "Sign up",
    },
  },
} as const;

export type Locale = keyof typeof content;
export type Content = (typeof content)[Locale];

export const project = {
  // i18n dictionary (source of truth for copy)
  i18n: content,

  // canonical contact (use this everywhere)
  contact: {
    name: "Nathalie Nabarro",
    role: "Zweminstructeur (NRZ)",
    phone: "06-81106113",
    email: "nabarrocoaching@gmail.com",
  },

  // universal meta (not translated; safe for structured data later)
  meta: {
    brand: "Swimcoaching",
    languagesOffered: ["English", "French", "Spanish"],
    primaryRegion: "Zeeland",
    locations: ["Zeeland", "Middelburg", "Vlissingen", "Walcheren"],
  },
};
