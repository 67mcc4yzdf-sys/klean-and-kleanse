import { Quote, Star } from "lucide-react";
import { business } from "@/lib/business";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

export default function ReviewsSection() {
  return <section className="section bg-ink text-white" id="reviews"><div className="shell">
    <SectionTitle eyebrow="Client feedback" title="Trusted in homes and workplaces" description="Editable preview reviews show how real customer feedback will look on your finished site." />
    <div className="mt-12 grid gap-5 lg:grid-cols-3">{business.reviews.map((review, i) => <Reveal key={review.name} delay={i * .08} className="rounded-[1.75rem] border border-white/10 bg-white/[.06] p-7">
      <div className="flex items-center justify-between"><div className="flex text-amber-400">{[1,2,3,4,5].map(n => <Star key={n} size={16} fill="currentColor" />)}</div><Quote className="text-white/20" /></div>
      <blockquote className="mt-6 text-lg font-medium leading-8 text-slate-100">“{review.quote}”</blockquote>
      <p className="mt-6 font-extrabold">{review.name}</p><p className="text-sm text-slate-400">{review.area}</p>
    </Reveal>)}</div>
    <p className="mt-6 text-center text-xs text-slate-500">Template reviews are placeholders and should be replaced with verified client feedback.</p>
  </div></section>;
}
