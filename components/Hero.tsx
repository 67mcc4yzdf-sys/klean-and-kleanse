"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Check, Phone, Sparkles, Star } from "lucide-react";
import { business } from "@/lib/business";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/80 to-white py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-40 top-10 size-96 rounded-full bg-sky-100/70 blur-3xl" />
      <div className="shell grid items-center gap-14 lg:grid-cols-[.95fr_1.05fr]">
        <div className="relative z-10">
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="eyebrow"><Sparkles size={14} />A fresher space starts here</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08, duration: .6 }} className="font-[var(--font-display)] text-4xl font-extrabold leading-[1.06] tracking-[-.05em] text-ink sm:text-5xl lg:text-6xl">
            Professional Cleaning Services in <span className="text-[var(--primary)]">{business.city}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .16 }} className="mt-6 max-w-xl text-xl font-medium leading-8 text-slate-700">Reliable house and office cleaning for busy homeowners, renters, and local businesses.</motion.p>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }} className="mt-4 max-w-xl leading-7 text-slate-600">Get a free quote today and enjoy a cleaner space without spending your weekend cleaning.</motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .28 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact#quote" className="button-primary">Get a Free Quote <span aria-hidden>→</span></Link>
            <a href={`tel:${business.phoneHref}`} className="button-secondary"><Phone size={18} />Call Now</a>
          </motion.div>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
            {["Locally owned", "Flexible scheduling", "Satisfaction-focused"].map((item) => <span key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-600"><span className="grid size-5 place-items-center rounded-full bg-emerald-100 text-emerald-700"><Check size={12} strokeWidth={3} /></span>{item}</span>)}
          </div>
        </div>
        <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .18, duration: .75 }} className="relative mx-auto w-full max-w-2xl">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2.25rem] bg-slate-100 shadow-2xl shadow-sky-950/15">
            <Image src={business.heroImage} alt="Professional cleaner caring for a bright, modern home" fill priority sizes="(max-width: 1024px) 100vw, 52vw" className="object-cover" />
          </div>
          <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute -left-3 top-8 rounded-2xl bg-white p-4 shadow-xl sm:-left-7">
            <div className="flex gap-1 text-amber-400">{[1,2,3,4,5].map(n => <Star key={n} size={15} fill="currentColor" />)}</div>
            <p className="mt-1 text-sm font-extrabold text-ink">5-star local care</p>
          </motion.div>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 4.7, ease: "easeInOut" }} className="absolute -bottom-5 right-4 flex items-center gap-3 rounded-2xl bg-ink px-5 py-4 text-white shadow-xl sm:right-8">
            <span className="grid size-9 place-items-center rounded-full bg-[var(--secondary)]"><Sparkles size={17} /></span><span className="text-sm font-extrabold">Free Estimates</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
