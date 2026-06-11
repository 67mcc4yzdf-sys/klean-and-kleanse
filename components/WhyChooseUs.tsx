import { Check, Heart } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const reasons = ["Reliable arrival windows", "Custom cleaning plans", "Friendly trained team", "Safe products available", "Clear communication", "Satisfaction-focused service"];
export default function WhyChooseUs() {
  return <section className="section"><div className="shell grid items-center gap-12 lg:grid-cols-2">
    <Reveal><div className="rounded-[2rem] bg-ink p-8 text-white sm:p-12">
      <span className="eyebrow !bg-white/10 !text-sky-100"><Heart size={14} />Why FreshNest</span>
      <h2 className="font-[var(--font-display)] text-3xl font-extrabold leading-tight tracking-[-.035em] sm:text-4xl">More than a clean surface. A calmer place to land.</h2>
      <p className="mt-6 text-lg leading-8 text-slate-300">We help you come back to a space that feels fresh, calm, and ready to enjoy.</p>
      <div className="mt-8 h-1 w-20 rounded-full bg-[var(--secondary)]" />
    </div></Reveal>
    <div><SectionTitle align="left" eyebrow="Thoughtful service" title="Cleaning that works around real life" description="Straightforward communication, flexible plans, and careful work from the first quote to the final walkthrough." />
      <div className="mt-8 grid gap-4 sm:grid-cols-2">{reasons.map((reason, i) => <Reveal key={reason} delay={i * .05} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"><span className="grid size-8 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-700"><Check size={16} strokeWidth={3} /></span><span className="font-bold text-slate-700">{reason}</span></Reveal>)}</div>
    </div>
  </div></section>;
}
