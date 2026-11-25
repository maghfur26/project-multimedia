import { PLANETS_ONLY } from '../data/planets'
import PlanetSphere from './PlanetSphere'

export default function PlanetSizeChart() {
  const planets = [...PLANETS_ONLY].sort((a, b) => b.diameterKm - a.diameterKm)
  const max = Math.max(...planets.map((p) => p.diameterKm))

  return (
    <div className="glass rounded-3xl p-6 sm:p-10">
      <div className="flex flex-wrap items-end justify-center gap-x-6 gap-y-8">
        {planets.map((p) => {
          const size = Math.round(26 + (p.diameterKm / max) * 104)
          return (
            <div key={p.id} className="group flex flex-col items-center gap-2.5">
              <div className="transition-transform duration-300 group-hover:-translate-y-1">
                <PlanetSphere color={p.color} size={size} />
              </div>
              <span className="text-xs font-bold text-ink">{p.name}</span>
              <span className="-mt-1.5 text-[10px] text-muted">{p.facts.Diameter}</span>
            </div>
          )
        })}
      </div>
      <p className="mt-8 text-center text-xs text-muted/70">
        Perbandingan ukuran planet (skala visual, bukan skala sebenarnya).
      </p>
    </div>
  )
}
