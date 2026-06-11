/**
 * CLIENT CUSTOMIZATION
 * Edit this file for each new cleaning company. All contact details, services,
 * reviews, service areas, brand colors, images, and social links live here.
 * Legal claims such as "insured" should only be added to trustBadges when true.
 */
export type Service = {
  title: string;
  description: string;
  icon: "home" | "sparkles" | "truck" | "building" | "key" | "hardHat";
  included: string[];
};

export const business = {
  businessName: "FreshNest Cleaning",
  tagline: "Reliable cleaning services for homes, offices, and move-outs.",
  city: "Toronto",
  country: "Canada",
  phone: "(416) 555-0184",
  phoneHref: "+14165550184",
  email: "hello@freshnestcleaning.com",
  logoText: "FreshNest",
  primaryColor: "#2477A8",
  secondaryColor: "#62B894",
  serviceAreas: ["Downtown Toronto", "North York", "Etobicoke", "Scarborough", "East York", "York", "The Beaches", "High Park"],
  services: [
    { title: "House Cleaning", description: "Routine care that keeps your home fresh, comfortable, and ready for the week.", icon: "home", included: ["Kitchen and bathroom clean", "Dusting and surfaces", "Floors vacuumed and mopped", "Beds made on request"] },
    { title: "Deep Cleaning", description: "A detailed top-to-bottom reset for spaces that need extra attention.", icon: "sparkles", included: ["Detailed kitchen clean", "Baseboards and buildup", "Fixtures and high-touch areas", "Thorough floor care"] },
    { title: "Move-In / Move-Out Cleaning", description: "A comprehensive clean that helps make moving day simpler.", icon: "truck", included: ["Inside empty cabinets", "Appliance exteriors", "Bathrooms sanitized", "Floors and baseboards"] },
    { title: "Office Cleaning", description: "Dependable workplace cleaning around your team and operating hours.", icon: "building", included: ["Workstations and common areas", "Kitchen and washrooms", "Waste removal", "Flexible schedules"] },
    { title: "Airbnb / Rental Cleaning", description: "Responsive turnovers that help every guest arrive to a welcoming space.", icon: "key", included: ["Full turnover clean", "Linen change on request", "Supply check", "Photo-ready finishing"] },
    { title: "Post-Construction Cleaning", description: "Careful dust and debris removal after renovations or new construction.", icon: "hardHat", included: ["Fine dust removal", "Fixtures and surfaces", "Interior glass", "Final floor clean"] }
  ] satisfies Service[],
  trustBadges: ["Free estimates", "Locally owned", "Flexible scheduling", "Satisfaction-focused"],
  reviews: [
    { quote: "The team was professional, on time, and left our home feeling fresh.", name: "Sarah M.", area: "North York" },
    { quote: "Easy booking, clear communication, and great attention to detail.", name: "Daniel R.", area: "Etobicoke" },
    { quote: "Our office looks cleaner every week. Very reliable service.", name: "Priya K.", area: "Downtown Toronto" }
  ],
  faqs: [
    { question: "Do you bring your own cleaning supplies?", answer: "Yes. We can arrive with the standard supplies and equipment needed for your service. Tell us about product preferences or sensitivities when requesting your quote." },
    { question: "Do I need to be home during the cleaning?", answer: "No. Many clients arrange secure access and return to a freshly cleaned space. We will confirm access details with you before the visit." },
    { question: "Can I book recurring cleaning?", answer: "Yes. Weekly, biweekly, and other recurring plans can be tailored to your space, priorities, and schedule." },
    { question: "How do I get a quote?", answer: "Complete the short quote form or call us. We will ask a few questions about your space and cleaning needs before confirming pricing." },
    { question: "What areas do you serve?", answer: "We serve Toronto and the nearby areas listed on this website. Send us your postal code and we will quickly confirm availability." },
    { question: "What if I’m not satisfied?", answer: "Please contact us promptly so we can understand the concern and work with you toward a practical resolution." }
  ],
  businessHours: ["Monday–Friday: 8:00 AM–6:00 PM", "Saturday: 9:00 AM–4:00 PM", "Sunday: Closed"],
  heroImage: "/images/freshnest-hero.jpg",
  galleryImages: ["/images/kitchen-before.jpg", "/images/kitchen-after.jpg"],
  socialLinks: [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" }
  ]
} as const;

export type Business = typeof business;
