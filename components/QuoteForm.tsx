"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { business } from "@/lib/business";

export default function QuoteForm() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSent(true); }
  if (sent) return <div className="card grid min-h-[420px] place-items-center p-8 text-center"><div><CheckCircle2 className="mx-auto text-[var(--secondary)]" size={52} /><h3 className="mt-5 font-[var(--font-display)] text-2xl font-extrabold">Thanks for reaching out!</h3><p className="mx-auto mt-3 max-w-md leading-7 text-slate-600">Thanks! This preview form is ready to connect to your preferred email or CRM.</p><button onClick={() => setSent(false)} className="button-secondary mt-6">Send another request</button></div></div>;
  return <form onSubmit={submit} className="card p-6 sm:p-8" id="quote">
    <div className="grid gap-5 sm:grid-cols-2">
      <label className="text-sm font-bold">Name<input required name="name" autoComplete="name" placeholder="Your name" className="field" /></label>
      <label className="text-sm font-bold">Phone<input required name="phone" type="tel" autoComplete="tel" placeholder="(555) 555-0123" className="field" /></label>
      <label className="text-sm font-bold">Email<input required name="email" type="email" autoComplete="email" placeholder="you@example.com" className="field" /></label>
      <label className="text-sm font-bold">Zip / postal code<input required name="postalCode" autoComplete="postal-code" placeholder="Your postal code" className="field" /></label>
      <label className="text-sm font-bold">Type of cleaning<select required name="service" className="field"><option value="">Select a service</option>{business.services.map(s => <option key={s.title}>{s.title}</option>)}</select></label>
      <label className="text-sm font-bold">Property size<input name="size" placeholder="e.g. 2 bed, 2 bath" className="field" /></label>
      <label className="text-sm font-bold sm:col-span-2">Preferred date<input name="date" type="date" className="field" /></label>
      <label className="text-sm font-bold sm:col-span-2">Message<textarea name="message" rows={4} placeholder="Tell us what you would like cleaned and anything we should know." className="field resize-y" /></label>
    </div>
    <button type="submit" className="button-primary mt-6 w-full sm:w-auto">Get My Free Quote <Send size={17} /></button>
    <p className="mt-4 text-xs leading-5 text-slate-500">No obligation. We’ll use your details only to respond to this quote request.</p>
  </form>;
}
