import { Check, Heart } from "lucide-react";
import { business } from "@/lib/business";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

export default function WhyChooseUs() {
  return <section className="section"><div className="shell grid items-center gap-12 lg:grid-cols-2">
    <Reveal><div className="relative border-y border-slate-700 bg-ink p-8 text-white sm:p-12">
      <div className="absolute left-0 top-0 h-full w-1 bg-[var(--secondary)]" />
      <span className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.15em] text-sky-200"><Heart size={14} />{business.whyChooseUs.eyebrow}</span>
      <h2 className="font-[var(--font-display)] text-3xl font-extrabold leading-tight tracking-[-.035em] sm:text-4xl">{business.whyChooseUs.title}</h2>
      <p className="mt-6 text-lg leading-8 text-slate-300">{business.whyChooseUs.description}</p>
      <p className="mt-6 border-l-2 border-[var(--secondary)] pl-4 text-sm font-bold leading-6 text-white">{business.whyChooseUs.differentiator}</p>
      <div className="mt-9 flex items-center gap-4 border-t border-white/10 pt-6">
        <span className="grid size-11 place-items-center rounded-full bg-[var(--secondary)] text-lg font-extrabold text-ink">F</span>
        <div><p className="font-bold">{business.whyChooseUs.signatureTitle}</p><p className="text-sm text-slate-400">{business.whyChooseUs.signatureText}</p></div>
      </div>
    </div></Reveal>
    <div><SectionTitle align="left" eyebrow="Thoughtful service" title="Cleaning that works around real life" description="Straightforward communication, flexible plans, and careful work from the first quote to the final walkthrough." />
      <div className="mt-8 grid border-t border-slate-200 sm:grid-cols-2">{business.whyChooseUs.reasons.map((reason, i) => <Reveal key={reason} delay={i * .05} className="flex items-center gap-3 border-b border-slate-200 py-4 sm:odd:pr-5 sm:even:border-l sm:even:pl-5"><Check size={18} className="shrink-0 text-emerald-700" strokeWidth={3} /><span className="font-bold text-slate-700">{reason}</span></Reveal>)}</div>
      <div className="mt-8 border-l-2 border-[var(--primary)] bg-sky-50 p-5"><p className="font-extrabold">{business.servicePromise.title}</p><p className="mt-2 text-sm leading-6 text-slate-600">{business.servicePromise.text}</p></div>
    </div>
  </div></section>;
}
