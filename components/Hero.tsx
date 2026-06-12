"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Check, Phone, Sparkles, Star } from "lucide-react";
import { business } from "@/lib/business";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50 lg:min-h-[680px]">
      <div className="absolute inset-y-0 left-auto right-0 hidden w-[58%] lg:block">
        <Image src={business.images.hero} alt="Professional cleaner caring for a bright, modern home" fill priority sizes="(max-width: 1024px) 100vw, 58vw" className="image-fade-left object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/20 via-transparent to-transparent" />
      </div>
      <div className="shell relative z-10 flex items-start py-16 sm:py-20 lg:min-h-[680px] lg:items-center lg:py-24">
        <div className="max-w-2xl">
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="eyebrow"><Sparkles size={14} />{business.hero.eyebrow}</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08, duration: .6 }} className="font-[var(--font-display)] text-4xl font-extrabold leading-[1.06] tracking-[-.05em] text-ink sm:text-5xl lg:text-6xl">
            {business.hero.titlePrefix} <span className="text-[var(--primary)]">{business.hero.titleLocation}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .16 }} className="mt-6 max-w-xl text-xl font-semibold leading-8 text-slate-700">{business.hero.lead}</motion.p>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }} className="mt-4 max-w-xl leading-7 text-slate-600">{business.hero.supportingText}</motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .28 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact#quote" className="button-primary">Get a Free Quote <span aria-hidden>→</span></Link>
            <a href={`tel:${business.phoneHref}`} className="button-secondary"><Phone size={18} />Call Now</a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4 }} className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
            {["Locally owned", "Flexible scheduling", "Satisfaction-focused"].map((item) => <span key={item} className="flex items-center gap-2 text-sm font-bold text-slate-600"><span className="grid size-5 place-items-center rounded-full bg-emerald-100 text-emerald-700 shadow-sm"><Check size={12} strokeWidth={3} /></span>{item}</span>)}
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }} className="mt-8 flex items-center gap-4 border-t border-slate-300 pt-5">
            <div className="flex text-amber-400">{[1,2,3,4,5].map(n => <Star key={n} size={15} fill="currentColor" />)}</div>
            <p className="text-sm font-bold text-slate-700">{business.hero.reassurance}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2, duration: .5 }} className="relative -mx-5 mt-10 aspect-[4/3] sm:-mx-8 lg:hidden">
            <Image src={business.images.hero} alt="Professional cleaner caring for a bright, modern home" fill priority sizes="100vw" className="object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
