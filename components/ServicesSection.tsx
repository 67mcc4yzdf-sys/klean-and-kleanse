import Link from "next/link";
import { Building2, HardHat, Home, KeyRound, Sparkles, Truck, ArrowRight } from "lucide-react";
import { business, type Service } from "@/lib/business";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const iconMap = { home: Home, sparkles: Sparkles, truck: Truck, building: Building2, key: KeyRound, hardHat: HardHat };
export function ServiceIcon({ name }: { name: Service["icon"] }) { const Icon = iconMap[name]; return <Icon size={25} />; }

export default function ServicesSection() {
  return <section className="section border-b border-slate-200 bg-white" id="services"><div className="shell">
    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <SectionTitle align="left" eyebrow="Cleaning services" title="Care for every kind of space and situation" description="From compassionate household support to commercial, B&B, tenancy, builder and event cleaning." />
      <Link href="/services" className="button-secondary shrink-0">Compare all services <ArrowRight size={16} /></Link>
    </div>
    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{business.services.map((service, i) =>
      <Reveal key={service.title} delay={(i % 6) * .04} className="group rounded-2xl border border-slate-200 bg-[#fffdf8] p-7 transition hover:-translate-y-1 hover:border-[var(--secondary)] hover:shadow-lg">
        <span className="mb-8 block h-1 w-12 bg-[var(--secondary)] transition-all duration-300 group-hover:w-20" />
        <ServiceIcon name={service.icon} />
        <h3 className="mt-5 font-[var(--font-display)] text-xl font-extrabold">{service.title}</h3>
        <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
        <p className="mt-4 text-sm font-bold text-slate-700">{service.bestFor}</p>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
          <Link href={`/contact?service=${encodeURIComponent(service.title)}#quote`} className="inline-flex items-center gap-2 text-sm font-extrabold text-[var(--primary)]">Ask about this service <ArrowRight size={16} className="transition group-hover:translate-x-1" /></Link>
          <Link href="/services" className="text-sm font-bold text-slate-500 transition hover:text-ink">View details</Link>
        </div>
      </Reveal>)}
    </div>
  </div></section>;
}
