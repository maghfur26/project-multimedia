import { Link } from 'react-router-dom'
import PlanetSphere from './PlanetSphere'
import { ArrowRightIcon } from './Icons'

export default function PlanetCard({ planet }) {
  return (
    <Link
      to={`/jelajah?planet=${planet.id}`}
      className="glass group flex h-full flex-col gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-400/50 hover:bg-white/[0.08] hover:shadow-[0_18px_40px_-12px_rgba(99,102,241,0.55)]"
    >
      <div className="flex items-center justify-between">
        <PlanetSphere color={planet.color} size={56} className="transition-transform duration-500 group-hover:scale-110" />
        <span className="rounded-full border border-white/10 bg-space-900/60 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-muted">
          {planet.distance === 0 ? 'Bintang' : 'Planet'}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-1.5">
        <h3 className="text-xl font-bold text-ink">{planet.name}</h3>
        <p className="text-sm leading-relaxed text-muted">{planet.short}</p>
      </div>
      <div className="flex items-center justify-between border-t border-white/10 pt-3 text-xs text-muted">
        <span>
          ⌀ <span className="font-bold text-ink/90">{planet.facts.Diameter}</span>
        </span>
        <span className="inline-flex items-center gap-1 font-bold text-brand-400 transition-transform group-hover:translate-x-1">
          Jelajahi <ArrowRightIcon className="h-4 w-4" />
        </span>
      </div>
    </Link>
  )
}
