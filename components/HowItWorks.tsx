import { CalendarCheck, ClipboardCheck, Smile } from "lucide-react";
import { business } from "@/lib/business";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const icons = [ClipboardCheck, CalendarCheck, Smile];
export default function HowItWorks() {
  return <section className="section"><div className="shell"><SectionTitle eyebrow="Three easy steps" title="From busy to beautifully clean" description="A straightforward process designed to make booking feel effortless." />
    <div className="relative mt-14 grid border-y border-slate-200 md:grid-cols-3">
      {business.process.map((step, i) => { const Icon = icons[i] ?? Smile; return <Reveal key={step.title} delay={i * .1} className="relative border-b border-slate-200 p-7 text-left md:border-b-0 md:border-r md:last:border-r-0">
        <span className="font-[var(--font-display)] text-5xl font-extrabold text-slate-200">0{i + 1}</span>
        <span className={`mt-5 grid size-12 place-items-center ${i === 1 ? "bg-emerald-50 text-emerald-700" : "bg-sky-50 text-[var(--primary)]"}`}><Icon size={24} /></span>
        <span className="mt-5 block text-xs font-extrabold uppercase tracking-[.15em] text-[var(--secondary)]">Step {i + 1}</span>
        <h3 className="mt-2 font-[var(--font-display)] text-xl font-extrabold">{step.title}</h3><p className="mt-3 leading-7 text-slate-600">{step.text}</p>
      </Reveal>})}
    </div>
  </div></section>;
}
