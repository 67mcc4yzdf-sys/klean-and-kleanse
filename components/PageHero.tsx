import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="overflow-hidden bg-gradient-to-b from-sky-50 to-white py-20 sm:py-24"><div className="shell text-center"><span className="eyebrow">{eyebrow}</span><h1 className="mx-auto max-w-4xl font-[var(--font-display)] text-4xl font-extrabold leading-tight tracking-[-.045em] sm:text-5xl lg:text-6xl">{title}</h1><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">{description}</p><Link href="/contact#quote" className="button-primary mt-8">Request a Free Quote <ArrowRight size={17} /></Link></div></section>;
}
