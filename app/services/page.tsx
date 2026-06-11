import type { Metadata } from "next";
import { Check } from "lucide-react";
import { business } from "@/lib/business";
import PageHero from "@/components/PageHero";
import { ServiceIcon } from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = { title: `Cleaning Services in ${business.city} | ${business.businessName}`, description: business.tagline };
export default function ServicesPage() {
  return <><PageHero eyebrow="Home & commercial care" title={`Cleaning Services in ${business.city}`} description="Choose a focused service or ask us to shape a plan around your property, priorities, and schedule." />
    <section className="section pt-8"><div className="shell grid gap-6 lg:grid-cols-2">{business.services.map(service => <article key={service.title} className="card p-7 sm:p-9"><span className="grid size-14 place-items-center rounded-2xl bg-sky-50 text-[var(--primary)]"><ServiceIcon name={service.icon} /></span><h2 className="mt-6 font-[var(--font-display)] text-2xl font-extrabold">{service.title}</h2><p className="mt-3 leading-7 text-slate-600">{service.description}</p><h3 className="mt-6 text-sm font-extrabold uppercase tracking-wider text-slate-500">Typical inclusions</h3><ul className="mt-4 grid gap-3 sm:grid-cols-2">{service.included.map(item => <li key={item} className="flex gap-2 text-sm font-semibold text-slate-700"><Check size={17} className="shrink-0 text-[var(--secondary)]" />{item}</li>)}</ul><a href="/contact#quote" className="button-primary mt-7">Get a quote</a></article>)}</div></section><FAQSection /><CTASection /></>;
}
