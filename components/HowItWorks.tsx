import { CalendarCheck, ClipboardCheck, Smile } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const steps = [
  { title: "Request your free quote", text: "Tell us about your space and what you need.", icon: ClipboardCheck },
  { title: "Choose your cleaning plan", text: "We’ll help you select the right service and schedule.", icon: CalendarCheck },
  { title: "Enjoy a cleaner space", text: "Come back to a home or workplace that feels refreshed.", icon: Smile }
];
export default function HowItWorks() {
  return <section className="section"><div className="shell"><SectionTitle eyebrow="Three easy steps" title="From busy to beautifully clean" description="A straightforward process designed to make booking feel effortless." />
    <div className="relative mt-14 grid gap-6 md:grid-cols-3"><div className="absolute left-[16%] right-[16%] top-10 hidden h-px bg-gradient-to-r from-sky-200 via-emerald-300 to-sky-200 md:block" />
      {steps.map((step, i) => <Reveal key={step.title} delay={i * .1} className="relative rounded-[1.75rem] border border-slate-100 bg-white p-7 text-center shadow-sm">
        <span className="relative z-10 mx-auto grid size-20 place-items-center rounded-full border-8 border-white bg-sky-50 text-[var(--primary)] shadow-sm"><step.icon size={28} /></span>
        <span className="mt-5 block text-xs font-extrabold uppercase tracking-[.15em] text-[var(--secondary)]">Step {i + 1}</span>
        <h3 className="mt-2 font-[var(--font-display)] text-xl font-extrabold">{step.title}</h3><p className="mt-3 leading-7 text-slate-600">{step.text}</p>
      </Reveal>)}
    </div>
  </div></section>;
}
