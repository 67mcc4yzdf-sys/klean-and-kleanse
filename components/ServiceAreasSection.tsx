import Link from "next/link";
import { MapPin } from "lucide-react";
import { business } from "@/lib/business";
import SectionTitle from "./SectionTitle";

export default function ServiceAreasSection() {
  return <section className="section"><div className="shell"><SectionTitle eyebrow="Local service" title={`Proudly serving ${business.city} and nearby areas`} description="Local cleaning with flexible scheduling across the city." />
    <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">{business.serviceAreas.map(area => <span key={area} className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 font-bold text-slate-700 shadow-sm"><MapPin size={16} className="text-[var(--secondary)]" />{area}</span>)}</div>
    <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-sky-50 p-6 text-center"><p className="font-semibold text-slate-700">Not sure if we serve your area? Send a quick message and we’ll confirm.</p><Link href="/contact" className="mt-4 inline-block text-sm font-extrabold text-[var(--primary)]">Check your area →</Link></div>
  </div></section>;
}
