type Props = { eyebrow?: string; title: string; description?: string; align?: "left" | "center" };

export default function SectionTitle({ eyebrow, title, description, align = "center" }: Props) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="font-[var(--font-display)] text-3xl font-extrabold leading-tight tracking-[-.035em] text-ink sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{description}</p>}
    </div>
  );
}
