import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import FAQSection from "@/components/FAQSection";
import QuoteForm from "@/components/QuoteForm";
import SectionTitle from "@/components/SectionTitle";
import CleaningPlans from "@/components/CleaningPlans";
import CompassionateCleaning from "@/components/CompassionateCleaning";

export default function Home() {
  return <><Hero /><TrustBar /><ServicesSection /><CleaningPlans /><CompassionateCleaning /><WhyChooseUs /><HowItWorks /><FAQSection />
    <section className="section bg-[#faf7f0]"><div className="shell grid items-start gap-12 lg:grid-cols-[.7fr_1fr]"><SectionTitle align="left" eyebrow="Free consultation" title="Request a Free Cleaning Quote" description="Tell us about your property, cleaning needs and preferred schedule. We’ll follow up with a suitable plan and clear next steps." /><QuoteForm /></div></section>
  </>;
}
