import Link from "next/link";
import { Clock, Mail, Phone, Sparkles } from "lucide-react";
import { business } from "@/lib/business";

export default function Footer() {
  return <footer className="bg-ink pb-24 pt-16 text-slate-300 md:pb-8"><div className="shell">
    <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
      <div><Link href="/" className="flex items-center gap-2 font-[var(--font-display)] text-xl font-extrabold text-white"><span className="grid size-10 place-items-center rounded-2xl bg-[var(--primary)]"><Sparkles size={18} /></span>{business.logoText}.</Link><p className="mt-5 max-w-xs leading-7 text-slate-400">{business.tagline}</p><div className="mt-5 flex gap-4">{business.socialLinks.map(s => <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="text-sm font-bold text-white hover:text-sky-300">{s.label}</a>)}</div></div>
      <div><h3 className="font-bold text-white">Consultations</h3><ul className="mt-5 space-y-4 text-sm">{business.phoneHref && <li><a href={`tel:${business.phoneHref}`} className="flex items-center gap-3 hover:text-white"><Phone size={16} />{business.phone}</a></li>}{business.email && <li><a href={`mailto:${business.email}`} className="flex items-center gap-3 break-all hover:text-white"><Mail size={16} />{business.email}</a></li>}<li><Link href="/contact#quote" className="font-bold text-white hover:text-amber-200">Request a cleaning quote</Link></li><li className="flex items-start gap-3"><Clock size={16} className="mt-0.5 shrink-0" /><span>{business.businessHours.map(h => <span key={h} className="block">{h}</span>)}</span></li></ul></div>
      <div><h3 className="font-bold text-white">Services</h3><ul className="mt-5 space-y-3 text-sm">{business.services.slice(0, 5).map(s => <li key={s.title}><Link href="/services" className="hover:text-white">{s.title}</Link></li>)}</ul></div>
      <div><h3 className="font-bold text-white">Trust & flexibility</h3><ul className="mt-5 space-y-3 text-sm">{business.trustBadges.map(item => <li key={item}>{item}</li>)}</ul></div>
    </div>
    <div className="flex flex-col gap-3 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} {business.businessName}. All rights reserved.</p><div className="flex flex-wrap gap-4"><Link href="/privacy" className="hover:text-white">Privacy Policy</Link><Link href="/terms" className="hover:text-white">Terms</Link><span>{business.country}</span></div></div>
  </div></footer>;
}
