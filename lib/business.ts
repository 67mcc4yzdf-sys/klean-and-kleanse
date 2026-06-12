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
    titleLocation: string;
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
    signatureTitle: string;
    signatureText: string;
    reasons: string[];
  };
  process: { title: string; text: string }[];
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
};

export const business = {
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
    titleLocation: "Toronto",
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
    title: "More than a clean surface. A calmer place to land.",
    description: "We help you come back to a space that feels fresh, calm, and ready to enjoy.",
    signatureTitle: "Friendly, thoughtful service",
    signatureText: "Built around your home and routine",
    reasons: ["Reliable arrival windows", "Custom cleaning plans", "Friendly trained team", "Safe products available", "Clear communication", "Satisfaction-focused service"],
  },
  process: [
    { title: "Request your free quote", text: "Tell us about your space and what you need." },
    { title: "Choose your cleaning plan", text: "We’ll help you select the right service and schedule." },
    { title: "Enjoy a cleaner space", text: "Come back to a home or workplace that feels refreshed." },
  ],
  serviceAreas: ["Downtown Toronto", "North York", "Etobicoke", "Scarborough", "East York", "York", "The Beaches", "High Park"],
  services: [
    { title: "House Cleaning", description: "Routine care that keeps your home fresh, comfortable, and ready for the week.", icon: "home", bestFor: "Busy households and recurring upkeep", planningNote: "Weekly, biweekly, or a schedule that works for your home.", included: ["Kitchen and bathroom clean", "Dusting and surfaces", "Floors vacuumed and mopped", "Beds made on request"] },
    { title: "Deep Cleaning", description: "A detailed top-to-bottom reset for spaces that need extra attention.", icon: "sparkles", bestFor: "Seasonal resets and first-time visits", planningNote: "Extra time for buildup, edges, fixtures, and overlooked areas.", included: ["Detailed kitchen clean", "Baseboards and buildup", "Fixtures and high-touch areas", "Thorough floor care"] },
    { title: "Move-In / Move-Out Cleaning", description: "A comprehensive clean that helps make moving day simpler.", icon: "truck", bestFor: "Renters, owners, and property managers", planningNote: "A detailed empty-home clean before the keys change hands.", included: ["Inside empty cabinets", "Appliance exteriors", "Bathrooms sanitized", "Floors and baseboards"] },
    { title: "Office Cleaning", description: "Dependable workplace cleaning around your team and operating hours.", icon: "building", bestFor: "Small offices, studios, and shared spaces", planningNote: "Quiet, reliable cleaning around your operating hours.", included: ["Workstations and common areas", "Kitchen and washrooms", "Waste removal", "Flexible schedules"] },
    { title: "Airbnb / Rental Cleaning", description: "Responsive turnovers that help every guest arrive to a welcoming space.", icon: "key", bestFor: "Hosts who need dependable turnovers", planningNote: "A consistent reset between guests, with finishing touches checked.", included: ["Full turnover clean", "Linen change on request", "Supply check", "Photo-ready finishing"] },
    { title: "Post-Construction Cleaning", description: "Careful dust and debris removal after renovations or new construction.", icon: "hardHat", bestFor: "Renovations and newly finished spaces", planningNote: "Fine dust and residue removed before you settle back in.", included: ["Fine dust removal", "Fixtures and surfaces", "Interior glass", "Final floor clean"] },
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
} satisfies BusinessConfig;

export type Business = typeof business;
