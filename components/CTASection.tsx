import Link from "next/link";
import { Phone, Sparkles } from "lucide-react";
import { business } from "@/lib/business";

export default function CTASection() {
  return <section className="px-5 py-16 sm:px-8 sm:py-20"><div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-[var(--primary)] px-6 py-14 text-center text-white shadow-2xl shadow-sky-900/15 sm:px-12">
    <Sparkles className="mx-auto text-sky-200" />
    <h2 className="mt-5 font-[var(--font-display)] text-3xl font-extrabold tracking-[-.035em] sm:text-5xl">Ready for a cleaner home or office?</h2>
    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-sky-50">Request a free quote today and we’ll help you choose the right cleaning plan.</p>
    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/contact#quote" className="button-secondary !border-white !bg-white">Get a Free Quote</Link><a href={`tel:${business.phoneHref}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"><Phone size={17} />Call Now</a></div>
  </div></section>;
}
