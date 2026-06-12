import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import HowItWorks from "@/components/HowItWorks";
import ReviewsSection from "@/components/ReviewsSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import FAQSection from "@/components/FAQSection";
import QuoteForm from "@/components/QuoteForm";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  return <><Hero /><TrustBar /><ServicesSection /><WhyChooseUs /><BeforeAfterSection /><HowItWorks /><ReviewsSection /><ServiceAreasSection /><FAQSection />
    <section className="section"><div className="shell grid items-start gap-12 lg:grid-cols-[.7fr_1fr]"><SectionTitle align="left" eyebrow="Free estimate" title="Request Your Free Cleaning Quote" description="Tell us a little about your space. We’ll follow up with clear next steps and a cleaning plan built around your needs." /><QuoteForm /></div></section>
  </>;
}
