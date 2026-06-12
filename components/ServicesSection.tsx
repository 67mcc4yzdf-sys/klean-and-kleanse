import Link from "next/link";
import { Building2, HardHat, Home, KeyRound, Sparkles, Truck, ArrowRight } from "lucide-react";
import { business, type Service } from "@/lib/business";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const iconMap = { home: Home, sparkles: Sparkles, truck: Truck, building: Building2, key: KeyRound, hardHat: HardHat };
export function ServiceIcon({ name }: { name: Service["icon"] }) { const Icon = iconMap[name]; return <Icon size={25} />; }

export default function ServicesSection() {
  return <section className="section border-b border-slate-200 bg-white" id="services"><div className="shell">
    <SectionTitle align="left" eyebrow="Cleaning made simple" title="The right clean for every kind of space" description={`Flexible cleaning services for homes, rentals, and workplaces across ${business.city}.`} />
    <div className="mt-12 grid border-y border-slate-200 md:grid-cols-2 lg:grid-cols-3">{business.services.map((service, i) =>
      <Reveal key={service.title} delay={i * .05} className="group border-b border-slate-200 p-7 md:border-r lg:[&:nth-child(3n)]:border-r-0">
        <span className="mb-8 block h-1 w-12 bg-[var(--secondary)] transition-all duration-300 group-hover:w-20" />
        <ServiceIcon name={service.icon} />
        <h3 className="mt-5 font-[var(--font-display)] text-xl font-extrabold">{service.title}</h3>
        <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
        <Link href="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[var(--primary)]">Learn more <ArrowRight size={16} className="transition group-hover:translate-x-1" /></Link>
      </Reveal>)}
    </div>
  </div></section>;
}
