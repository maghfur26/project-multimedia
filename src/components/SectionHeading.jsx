export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'
  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-400">
          {eyebrow}
        </span>
      )}
      <h2 className="max-w-3xl text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-[2.6rem]">{title}</h2>
      {description && <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{description}</p>}
    </div>
  )
}
