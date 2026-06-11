import Link from "next/link";
import { Building2, HardHat, Home, KeyRound, Sparkles, Truck, ArrowRight } from "lucide-react";
import { business, type Service } from "@/lib/business";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const iconMap = { home: Home, sparkles: Sparkles, truck: Truck, building: Building2, key: KeyRound, hardHat: HardHat };
export function ServiceIcon({ name }: { name: Service["icon"] }) { const Icon = iconMap[name]; return <Icon size={25} />; }

export default function ServicesSection() {
  return <section className="section bg-mist" id="services"><div className="shell">
    <SectionTitle eyebrow="Cleaning made simple" title="The right clean for every kind of space" description={`Flexible cleaning services for homes, rentals, and workplaces across ${business.city}.`} />
    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{business.services.map((service, i) =>
      <Reveal key={service.title} delay={i * .06}><article className="group h-full rounded-[1.75rem] border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
        <span className="grid size-13 place-items-center rounded-2xl bg-sky-50 text-[var(--primary)]"><ServiceIcon name={service.icon} /></span>
        <h3 className="mt-6 font-[var(--font-display)] text-xl font-extrabold">{service.title}</h3>
        <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
        <Link href="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[var(--primary)]">Learn more <ArrowRight size={16} className="transition group-hover:translate-x-1" /></Link>
      </article></Reveal>)}
    </div>
  </div></section>;
}
