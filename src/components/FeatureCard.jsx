import { Link } from 'react-router-dom'
import { ArrowRightIcon } from './Icons'

export default function FeatureCard({ icon, title, description, to, cta, accent = 'from-brand-500 to-brand-700' }) {
  return (
    <Link
      to={to}
      className="glass group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.07]"
    >
      <span
        className={`pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${accent} opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-40`}
      />
      <span
        className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg`}
      >
        {icon}
      </span>
      <div className="flex flex-1 flex-col gap-2">
        <h3 className="text-xl font-bold text-ink">{title}</h3>
        <p className="text-sm leading-relaxed text-muted">{description}</p>
      </div>
      <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-400">
        {cta}
        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  )
}
