import { ArrowRight, Quote, Star } from "lucide-react";
import Link from "next/link";
import { business } from "@/lib/business";
import Reveal from "./Reveal";

const avatarColors = ["bg-amber-100 text-amber-800", "bg-sky-100 text-sky-800", "bg-emerald-100 text-emerald-800"];

export default function ReviewsSection() {
  return <section className="section overflow-hidden bg-[#f7f5f0]" id="reviews"><div className="shell">
    <div className="grid items-end gap-8 lg:grid-cols-[.9fr_1.1fr]">
      <div>
        <span className="eyebrow">Client stories</span>
        <h2 className="max-w-xl font-[var(--font-display)] text-3xl font-extrabold leading-[1.12] tracking-[-.04em] text-ink sm:text-4xl lg:text-5xl">The best part is how your space feels afterward.</h2>
      </div>
      <div className="lg:pb-1">
        <p className="max-w-xl text-lg leading-8 text-slate-600">Good cleaning is personal. It is the relief of walking into a fresh home, the calm of a tidy office, and one less thing competing for your time.</p>
        <Link href="/contact#quote" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[var(--primary)] transition hover:gap-3">Plan your clean <ArrowRight size={16} /></Link>
      </div>
    </div>

    <div className="mt-12 grid border-y border-stone-300 lg:grid-cols-3">{business.reviews.map((review, i) => <Reveal key={review.name} delay={i * .07} className="group border-b border-stone-300 px-1 py-8 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
      <div className="flex items-start justify-between gap-4">
        <div className="flex text-amber-400">{[1,2,3,4,5].map(n => <Star key={n} size={16} fill="currentColor" />)}</div>
        <Quote className="text-[var(--primary)]/15 transition group-hover:text-[var(--primary)]/25" size={34} />
      </div>
      <blockquote className="mt-6 text-lg font-semibold leading-8 text-slate-700">“{review.quote}”</blockquote>
      <div className="mt-7 flex items-center gap-3 border-t border-stone-300 pt-5">
        <span className={`grid size-11 place-items-center rounded-full text-sm font-extrabold ${avatarColors[i % avatarColors.length]}`}>{review.name.charAt(0)}</span>
        <div><p className="font-extrabold text-ink">{review.name}</p><p className="text-sm text-slate-500">{review.service} · {review.area}</p></div>
      </div>
    </Reveal>)}</div>
    <p className="mt-12 text-center text-xs text-slate-500">Template reviews are placeholders and should be replaced with verified client feedback.</p>
  </div></section>;
}
