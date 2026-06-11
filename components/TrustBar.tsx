import { CalendarClock, HeartHandshake, MapPin, ReceiptText } from "lucide-react";
import { business } from "@/lib/business";

const icons = [ReceiptText, MapPin, CalendarClock, HeartHandshake];
export default function TrustBar() {
  return <section className="border-y border-slate-100 bg-white"><div className="shell grid grid-cols-2 divide-x divide-y divide-slate-100 md:grid-cols-4 md:divide-y-0">
    {business.trustBadges.map((item, i) => { const Icon = icons[i]; return <div key={item} className="flex items-center justify-center gap-3 px-3 py-6 text-center text-sm font-bold text-slate-700 sm:text-base"><Icon className="shrink-0 text-[var(--primary)]" size={21} />{item}</div>; })}
  </div></section>;
}
