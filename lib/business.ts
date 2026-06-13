/**
 * CLIENT CUSTOMIZATION
 *
 * This is the primary file to edit for each cleaning business. Contact details,
 * brand colors, page copy, services, reviews, FAQs, areas, hours, and images all
 * live here. Replace placeholder reviews and generated images before launch.
 *
 * Only include claims such as "insured", "bonded", or "background checked"
 * when the business has confirmed they are accurate.
 */

export type ServiceIconName = "home" | "sparkles" | "truck" | "building" | "key" | "hardHat";

export type Service = {
  title: string;
  description: string;
  icon: ServiceIconName;
  bestFor: string;
  planningNote: string;
  pricingNote: string;
  recurringAvailable: boolean;
  included: string[];
};

export type BusinessConfig = {
  businessName: string;
  logoText: string;
  tagline: string;
  city: string;
  country: string;
  phone: string;
  phoneHref: string;
  email: string;
  primaryColor: string;
  secondaryColor: string;
  seoDescription: string;
  hero: {
    eyebrow: string;
    titlePrefix: string;
    lead: string;
    supportingText: string;
    reassurance: string;
  };
  about: {
    heroTitle: string;
    heroDescription: string;
    storyTitle: string;
    story: string;
    mission: string;
    ownerHeading: string;
    ownerText: string;
  };
  servicesPage: {
    heroTitle: string;
    heroDescription: string;
    guidanceTitle: string;
    guidanceText: string;
  };
  whyChooseUs: {
    eyebrow: string;
    title: string;
    description: string;
    differentiator: string;
    signatureTitle: string;
    signatureText: string;
    reasons: string[];
  };
  servicePromise: {
    title: string;
    text: string;
  };
  pricing: {
    heading: string;
    explanation: string;
    recurringNote: string;
  };
  addOns: string[];
  process: { title: string; text: string }[];
  reviewProof: {
    rating?: string;
    reviewCount?: string;
    platform?: string;
    fallbackLabel: string;
    detail: string;
    href: string;
  };
  quoteForm: {
    endpoint?: string;
  };
  serviceAreas: string[];
  services: Service[];
  trustBadges: string[];
  reviews: { quote: string; name: string; area: string; service: string }[];
  faqs: { question: string; answer: string }[];
  businessHours: string[];
  images: {
    hero: string;
    team: string;
    before: string;
    after: string;
  };
  socialLinks: { label: string; href: string }[];
  legal: {
    privacyContact: string;
    lastUpdated: string;
  };
};

function validateBusinessConfig<T extends BusinessConfig>(config: T): T {
  const requiredStrings = [
    ["businessName", config.businessName],
    ["logoText", config.logoText],
    ["city", config.city],
    ["country", config.country],
    ["phone", config.phone],
    ["phoneHref", config.phoneHref],
    ["email", config.email],
    ["seoDescription", config.seoDescription],
  ] as const;

  for (const [field, value] of requiredStrings) {
    if (!value.trim()) throw new Error(`Business configuration field "${field}" cannot be empty.`);
  }

  if (!/^\+[\d]{8,15}$/.test(config.phoneHref)) {
    throw new Error('Business configuration "phoneHref" must use international format, for example +14165550184.');
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email)) {
    throw new Error('Business configuration "email" is invalid.');
  }

  for (const [field, value] of [["primaryColor", config.primaryColor], ["secondaryColor", config.secondaryColor]] as const) {
    if (!/^#[0-9a-f]{6}$/i.test(value)) throw new Error(`Business configuration "${field}" must be a six-digit hex color.`);
  }

  if (!config.services.length) throw new Error("At least one service is required.");
  if (config.services.length < 4) throw new Error("At least four services are required for the featured homepage grid.");
  if (new Set(config.services.map((service) => service.title)).size !== config.services.length) {
    throw new Error("Service titles must be unique so quote links can select the correct service.");
  }
  if (!config.addOns.length) throw new Error("At least one optional add-on is required.");

  for (const [field, path] of Object.entries(config.images)) {
    if (!path.startsWith("/")) throw new Error(`Image path "${field}" must begin with "/".`);
  }

  const proofValues = [config.reviewProof.rating, config.reviewProof.reviewCount, config.reviewProof.platform];
  if (proofValues.some(Boolean) && !proofValues.every(Boolean)) {
    throw new Error("Review rating, count, and platform must either all be supplied or all be omitted.");
  }

  if (config.quoteForm.endpoint && !/^https:\/\//i.test(config.quoteForm.endpoint)) {
    throw new Error("Quote form endpoint must use HTTPS.");
  }

  return config;
}

export const business = validateBusinessConfig({
  businessName: "FreshNest Cleaning",
  logoText: "FreshNest",
  tagline: "Reliable cleaning services for homes, offices, and move-outs.",
  city: "Toronto",
  country: "Canada",
  phone: "(416) 555-0184",
  phoneHref: "+14165550184",
  email: "hello@freshnestcleaning.com",
  primaryColor: "#2477A8",
  secondaryColor: "#62B894",
  seoDescription: "Reliable house, office, deep cleaning, and move-out cleaning services in Toronto. Request a free quote today.",
  hero: {
    eyebrow: "A fresher space starts here",
    titlePrefix: "Professional Cleaning Services in",
    lead: "Reliable house and office cleaning for busy homeowners, renters, and local businesses.",
    supportingText: "Get a free quote today and enjoy a cleaner space without spending your weekend cleaning.",
    reassurance: "Local service. Clear estimates. No complicated packages.",
  },
  about: {
    heroTitle: "A local cleaning company built around easier days",
    heroDescription: "FreshNest Cleaning helps busy people across Toronto spend less time cleaning and more time enjoying their space.",
    storyTitle: "Reliable help, delivered with a personal touch",
    story: "FreshNest began with a simple idea: finding dependable cleaning help should not feel complicated. We bring responsive service, thoughtful plans, and a calm, professional approach to homes and workplaces throughout Toronto.",
    mission: "Our mission is to create clean, comfortable spaces while making every step, from quote to recurring visit, easy to understand.",
    ownerHeading: "Your owner or team story goes here",
    ownerText: "Replace this template section with a real founder photo and a short, personal introduction that helps local customers understand who is behind the business.",
  },
  servicesPage: {
    heroTitle: "Tell us what needs cleaning. We’ll take it from there.",
    heroDescription: "Homes, condos, rentals, and workplaces across Toronto, cleaned with a plan that fits the way you actually use your space.",
    guidanceTitle: "Start with your space, not a package.",
    guidanceText: "A downtown condo does not need the same visit as a family home in North York or a busy neighbourhood office. Tell us what is bothering you, what you want maintained, and when you need help.",
  },
  whyChooseUs: {
    eyebrow: "Why FreshNest",
    title: "A cleaning plan built around your actual space.",
    description: "We confirm priorities before the visit, explain what is included, and keep communication straightforward from quote to follow-up.",
    differentiator: "One point of contact, a written scope, and cleaning priorities agreed before work begins.",
    signatureTitle: "Clear scope before cleaning",
    signatureText: "Fewer assumptions. Better visits.",
    reasons: ["Confirmed arrival window", "Room-by-room priorities", "Supplies discussed in advance", "Recurring plans available", "Clear communication", "Prompt concern follow-up"],
  },
  servicePromise: {
    title: "If something was missed, tell us promptly.",
    text: "We will review the concern with you and agree on a practical next step. Replace this wording with the business's confirmed re-clean or satisfaction policy before launch.",
  },
  pricing: {
    heading: "Straightforward quotes based on the work",
    explanation: "Pricing depends on the size and condition of the space, service type, access, and any selected extras. We confirm the scope and price before the visit.",
    recurringNote: "Recurring customers may receive more consistent scheduling and pricing after the first visit. Confirm the real business policy before publishing a discount.",
  },
  addOns: ["Inside oven", "Inside refrigerator", "Inside cabinets", "Interior windows", "Linen change"],
  process: [
    { title: "Request your free quote", text: "Tell us about your space and what you need." },
    { title: "Choose your cleaning plan", text: "We’ll help you select the right service and schedule." },
    { title: "Enjoy a cleaner space", text: "Come back to a home or workplace that feels refreshed." },
  ],
  reviewProof: {
    rating: undefined,
    reviewCount: undefined,
    platform: undefined,
    fallbackLabel: "5-star client feedback",
    detail: "Read customer stories",
    href: "#reviews",
    // Add verified values for the real business, for example:
    // rating: "4.9",
    // reviewCount: "127 reviews",
    // platform: "Google",
  },
  quoteForm: {
    endpoint: undefined,
  },
  serviceAreas: ["Downtown Toronto", "North York", "Etobicoke", "Scarborough", "East York", "York", "The Beaches", "High Park"],
  services: [
    { title: "House Cleaning", description: "Routine care that keeps your home fresh, comfortable, and ready for the week.", icon: "home", bestFor: "Busy households and recurring upkeep", planningNote: "Weekly, biweekly, or a schedule that works for your home.", pricingNote: "Custom quote after size and priorities are confirmed", recurringAvailable: true, included: ["Kitchen and bathroom clean", "Dusting and surfaces", "Floors vacuumed and mopped", "Beds made on request"] },
    { title: "Deep Cleaning", description: "A detailed top-to-bottom reset for spaces that need extra attention.", icon: "sparkles", bestFor: "Seasonal resets and first-time visits", planningNote: "Extra time for buildup, edges, fixtures, and overlooked areas.", pricingNote: "Custom quote based on condition and selected extras", recurringAvailable: false, included: ["Detailed kitchen clean", "Baseboards and buildup", "Fixtures and high-touch areas", "Thorough floor care"] },
    { title: "Move-In / Move-Out Cleaning", description: "A comprehensive clean that helps make moving day simpler.", icon: "truck", bestFor: "Renters, owners, and property managers", planningNote: "A detailed empty-home clean before the keys change hands.", pricingNote: "Custom quote based on size and whether the space is empty", recurringAvailable: false, included: ["Inside empty cabinets", "Appliance exteriors", "Bathrooms sanitized", "Floors and baseboards"] },
    { title: "Office Cleaning", description: "Dependable workplace cleaning around your team and operating hours.", icon: "building", bestFor: "Small offices, studios, and shared spaces", planningNote: "Quiet, reliable cleaning around your operating hours.", pricingNote: "Site-specific quote after frequency and scope are confirmed", recurringAvailable: true, included: ["Workstations and common areas", "Kitchen and washrooms", "Waste removal", "Flexible schedules"] },
    { title: "Airbnb / Rental Cleaning", description: "Responsive turnovers that help every guest arrive to a welcoming space.", icon: "key", bestFor: "Hosts who need dependable turnovers", planningNote: "A consistent reset between guests, with finishing touches checked.", pricingNote: "Custom quote based on turnover scope and linen needs", recurringAvailable: true, included: ["Full turnover clean", "Linen change on request", "Supply check", "Photo-ready finishing"] },
    { title: "Post-Construction Cleaning", description: "Careful dust and debris removal after renovations or new construction.", icon: "hardHat", bestFor: "Renovations and newly finished spaces", planningNote: "Fine dust and residue removed before you settle back in.", pricingNote: "Site-specific quote after the work area is reviewed", recurringAvailable: false, included: ["Fine dust removal", "Fixtures and surfaces", "Interior glass", "Final floor clean"] },
  ],
  trustBadges: ["Free estimates", "Locally owned", "Flexible scheduling", "Satisfaction-focused"],
  reviews: [
    { quote: "The team was professional, on time, and left our home feeling fresh.", name: "Sarah M.", area: "North York", service: "House cleaning" },
    { quote: "Easy booking, clear communication, and great attention to detail.", name: "Daniel R.", area: "Etobicoke", service: "Recurring cleaning" },
    { quote: "Our office looks cleaner every week. Very reliable service.", name: "Priya K.", area: "Downtown Toronto", service: "Office cleaning" },
  ],
  faqs: [
    { question: "Do you bring your own cleaning supplies?", answer: "Yes. We can arrive with the standard supplies and equipment needed for your service. Tell us about product preferences or sensitivities when requesting your quote." },
    { question: "Do I need to be home during the cleaning?", answer: "No. Many clients arrange secure access and return to a freshly cleaned space. We will confirm access details with you before the visit." },
    { question: "Can I book recurring cleaning?", answer: "Yes. Weekly, biweekly, and other recurring plans can be tailored to your space, priorities, and schedule." },
    { question: "How do I get a quote?", answer: "Complete the short quote form or call us. We will ask a few questions about your space and cleaning needs before confirming pricing." },
    { question: "What areas do you serve?", answer: "We serve Toronto and the nearby areas listed on this website. Send us your postal code and we will quickly confirm availability." },
    { question: "What if I’m not satisfied?", answer: "Please contact us promptly so we can understand the concern and work with you toward a practical resolution." },
  ],
  businessHours: ["Monday–Friday: 8:00 AM–6:00 PM", "Saturday: 9:00 AM–4:00 PM", "Sunday: Closed"],
  images: {
    hero: "/images/freshnest-hero.jpg",
    team: "/images/freshnest-team-v2.png",
    before: "/images/kitchen-before.jpg",
    after: "/images/kitchen-after.jpg",
  },
  socialLinks: [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" },
  ],
  legal: {
    privacyContact: "hello@freshnestcleaning.com",
    lastUpdated: "June 13, 2026",
  },
} satisfies BusinessConfig);

export type Business = typeof business;
