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
    title: string;
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
  cleaningPlans: { title: string; text: string }[];
  compassionate: {
    title: string;
    description: string;
    statement: string;
    audiences: string[];
  };
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
    ["seoDescription", config.seoDescription],
  ] as const;

  for (const [field, value] of requiredStrings) {
    if (!value.trim()) throw new Error(`Business configuration field "${field}" cannot be empty.`);
  }

  if (config.phoneHref && !/^\+[\d]{8,15}$/.test(config.phoneHref)) {
    throw new Error('Business configuration "phoneHref" must use international format, for example +14165550184.');
  }

  if (config.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email)) {
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
  businessName: "Klean & Kleanse Cleaning Services",
  logoText: "Klean & Kleanse",
  tagline: "We Clean With Care",
  city: "Birmingham",
  country: "United Kingdom",
  phone: "+44 7928 944066",
  phoneHref: "+447928944066",
  email: "",
  primaryColor: "#14233D",
  secondaryColor: "#C7A35A",
  seoDescription: "Friendly, reliable and compassionate cleaning services for homes, businesses, B&Bs, families and elderly clients.",
  hero: {
    eyebrow: "We Clean With Care",
    title: "Professional Cleaning With Care",
    lead: "Friendly, reliable cleaning services for homes, businesses, B&Bs, families, and elderly clients.",
    supportingText: "From regular support to deep, tenancy, builder and bespoke cleans, every service is planned around your property and priorities.",
    reassurance: "Established in 2021. Caring service backed by 8+ years of experience.",
  },
  about: {
    heroTitle: "Professional standards, delivered with genuine care",
    heroDescription: "Klean & Kleanse supports households, elderly clients, families, B&Bs and businesses with reliable cleaning shaped around real life.",
    storyTitle: "Care is part of the service",
    story: "Established in 2021 and backed by more than eight years of cleaning experience, Klean & Kleanse combines professional standards with a warm, respectful approach.",
    mission: "Our purpose is to make homes and workplaces feel calmer, safer and easier to manage through dependable cleaning and thoughtful personal service.",
    ownerHeading: "A caring, dependable cleaning service",
    ownerText: "Add the founder’s name, photograph and personal story here when supplied. This section is ready for a genuine introduction rather than a generic team profile.",
  },
  servicesPage: {
    heroTitle: "The right level of care for every space",
    heroDescription: "Flexible domestic, support, commercial, B&B, tenancy, builder, event and bespoke cleaning services.",
    guidanceTitle: "Not sure which clean is right?",
    guidanceText: "Tell us about the property, what support you need and how often. We will recommend a practical service rather than forcing your needs into a fixed package.",
  },
  whyChooseUs: {
    eyebrow: "Why Klean & Kleanse",
    title: "Trust, consistency and care in every clean.",
    description: "A friendly, professional service that respects the people, routines and spaces behind every booking.",
    differentiator: "Fully insured and DBS checked, with more than eight years of hands-on cleaning experience.",
    signatureTitle: "We Clean With Care",
    signatureText: "Professional service with a compassionate approach.",
    reasons: ["Fully insured", "DBS checked", "8+ years experience", "Established in 2021", "Friendly and reliable", "Flexible cleaning plans"],
  },
  servicePromise: {
    title: "Clear communication from consultation to clean.",
    text: "Priorities, access and expectations are discussed before work begins, with a practical plan tailored to each client.",
  },
  pricing: {
    heading: "A consultation built around your needs",
    explanation: "Quotes reflect the property, condition, cleaning type, frequency and any special support required. The scope is agreed before the service.",
    recurringNote: "Choose from one-off, daily, weekly, bi-weekly or monthly cleaning plans.",
  },
  addOns: ["Inside appliances", "Inside cupboards", "Interior windows", "Bed and linen change", "Extra priority areas"],
  cleaningPlans: [
    { title: "One-off", text: "A single clean for a reset, occasion, move or specific need." },
    { title: "Daily", text: "Frequent support for busy homes, B&Bs and commercial spaces." },
    { title: "Weekly", text: "Consistent care to keep your property comfortable and presentable." },
    { title: "Bi-weekly", text: "Reliable maintenance every two weeks." },
    { title: "Monthly", text: "A regular deeper refresh for lower-frequency needs." },
  ],
  compassionate: {
    title: "Cleaning support that understands real life",
    description: "Patient, respectful help for elderly clients, families welcoming a new baby, and busy households who need more than a rushed surface clean.",
    statement: "Because a clean home brings comfort, calm and care.",
    audiences: ["Elderly clients needing extra help", "Families with new babies", "Busy households needing peace of mind"],
  },
  process: [
    { title: "Request your free quote", text: "Tell us about your space and what you need." },
    { title: "Choose your cleaning plan", text: "We’ll help you select the right service and schedule." },
    { title: "Enjoy a cleaner space", text: "Come back to a home or workplace that feels refreshed." },
  ],
  reviewProof: {
    rating: undefined,
    reviewCount: undefined,
    platform: undefined,
    fallbackLabel: "Fully insured & DBS checked",
    detail: "Professional care you can trust",
    href: "/about",
    // Add verified values for the real business, for example:
    // rating: "4.9",
    // reviewCount: "127 reviews",
    // platform: "Google",
  },
  quoteForm: {
    endpoint: undefined,
  },
  serviceAreas: ["Birmingham"],
  services: [
    { title: "Compassionate Support Cleans", description: "Respectful, patient cleaning support for elderly clients, new parents and households needing an extra helping hand.", icon: "home", bestFor: "Clients who value calm, considerate support", planningNote: "Priorities and routines are discussed sensitively before the clean.", pricingNote: "Consultation-based quote", recurringAvailable: true, included: ["Agreed priority rooms", "Kitchen and bathroom care", "Dusting and floor care", "Respectful practical support"] },
    { title: "Deep Domestic Cleans", description: "A thorough home reset focused on buildup, details and frequently missed areas.", icon: "sparkles", bestFor: "First visits, seasonal resets and homes needing extra attention", planningNote: "Allow additional time for detailed work throughout the property.", pricingNote: "Quoted by size and condition", recurringAvailable: false, included: ["Detailed kitchen and bathrooms", "Skirting boards and edges", "Fixtures and touchpoints", "Thorough floor care"] },
    { title: "Spring Cleans", description: "A fresh, detailed clean designed to brighten the home and reset key rooms.", icon: "sparkles", bestFor: "Seasonal refreshes", planningNote: "Choose priority rooms and optional extras during consultation.", pricingNote: "Custom one-off quote", recurringAvailable: false, included: ["Surface and detail dusting", "Kitchen and bathroom refresh", "Floors throughout", "Selected priority areas"] },
    { title: "Basic Cleans", description: "Reliable routine cleaning for the essential areas that keep a home comfortable.", icon: "home", bestFor: "Regular household maintenance", planningNote: "Available across flexible recurring schedules.", pricingNote: "Quoted by property and frequency", recurringAvailable: true, included: ["Kitchen surfaces", "Bathroom clean", "Dusting", "Vacuuming and mopping"] },
    { title: "Pre / End of Tenancy Cleans", description: "Detailed cleaning before moving in or after moving out, prepared around the property condition.", icon: "truck", bestFor: "Tenants, landlords and property managers", planningNote: "Empty-property access and appliance requirements are confirmed first.", pricingNote: "Property-specific quote", recurringAvailable: false, included: ["Empty cupboards", "Kitchen and bathrooms", "Skirting and floors", "Appliance options"] },
    { title: "Deluxe Cleans", description: "An enhanced, detail-led clean with extra time for finishing touches and priority areas.", icon: "sparkles", bestFor: "Clients wanting a more comprehensive result", planningNote: "Scope is tailored during consultation.", pricingNote: "Bespoke quote", recurringAvailable: true, included: ["Detailed standard clean", "Extra priority areas", "Finishing touches", "Selected add-ons"] },
    { title: "Business & Commercial Cleans", description: "Professional cleaning for offices, workplaces and customer-facing premises.", icon: "building", bestFor: "Businesses needing dependable scheduled care", planningNote: "Cleaning can be planned around operating hours.", pricingNote: "Site consultation required", recurringAvailable: true, included: ["Work and reception areas", "Washrooms and kitchens", "Floors and touchpoints", "Agreed waste handling"] },
    { title: "Bespoke Cleans", description: "A flexible service designed around unusual requirements, priorities or circumstances.", icon: "key", bestFor: "Clients whose needs do not fit a standard package", planningNote: "Tell us what outcome you need and we will shape the scope.", pricingNote: "Consultation-based quote", recurringAvailable: true, included: ["Custom priorities", "Flexible scope", "Agreed products", "One-off or ongoing plans"] },
    { title: "B&B Cleans", description: "Consistent guest-ready cleaning for welcoming rooms and shared spaces.", icon: "key", bestFor: "B&B owners and accommodation providers", planningNote: "Turnaround timing and linen requirements are agreed in advance.", pricingNote: "Quoted by rooms and frequency", recurringAvailable: true, included: ["Guest room refresh", "Bathrooms", "Shared areas", "Linen options"] },
    { title: "Builders Cleans", description: "Careful removal of fine dust and residue after building or renovation work.", icon: "hardHat", bestFor: "Recently completed projects", planningNote: "The site must be safe and ready for cleaning.", pricingNote: "Site-specific quote", recurringAvailable: false, included: ["Fine dust removal", "Fixtures and surfaces", "Interior glass", "Final floor clean"] },
    { title: "Event Cleans", description: "Pre-event preparation or post-event cleaning to help spaces recover quickly.", icon: "building", bestFor: "Private and business events", planningNote: "Timing, access and waste requirements are agreed beforehand.", pricingNote: "Event-specific quote", recurringAvailable: false, included: ["Priority area cleaning", "Kitchen and washrooms", "Floor care", "Agreed waste removal"] },
  ],
  trustBadges: ["Fully insured", "DBS checked", "8+ years experience", "Established 2021"],
  reviews: [] as BusinessConfig["reviews"],
  faqs: [
    { question: "Do you bring your own cleaning supplies?", answer: "Yes. We can arrive with the standard supplies and equipment needed for your service. Tell us about product preferences or sensitivities when requesting your quote." },
    { question: "Do I need to be home during the cleaning?", answer: "No. Many clients arrange secure access and return to a freshly cleaned space. We will confirm access details with you before the visit." },
    { question: "Can I book recurring cleaning?", answer: "Yes. One-off, daily, weekly, bi-weekly and monthly plans are available, depending on your property and requirements." },
    { question: "How do I get a quote?", answer: "Complete the short quote form or call us. We will ask a few questions about your space and cleaning needs before confirming pricing." },
    { question: "Do you support elderly clients and new parents?", answer: "Yes. Compassionate support cleans are designed for clients who need patient, respectful help and a plan shaped around their circumstances." },
    { question: "What if I’m not satisfied?", answer: "Please contact us promptly so we can understand the concern and work with you toward a practical resolution." },
  ],
  businessHours: ["Consultation hours to be confirmed"],
  images: {
    hero: "/images/freshnest-hero.jpg",
    team: "/images/freshnest-team-v2.png",
    before: "/images/kitchen-before.jpg",
    after: "/images/kitchen-after.jpg",
  },
  socialLinks: [] as BusinessConfig["socialLinks"],
  legal: {
    privacyContact: "",
    lastUpdated: "June 15, 2026",
  },
} satisfies BusinessConfig);

export type Business = typeof business;
