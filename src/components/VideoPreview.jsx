import { Link } from 'react-router-dom'
import { PlayIcon } from './Icons'

export default function VideoPreview() {
  return (
    <Link
      to="/video"
      className="glass group grid overflow-hidden rounded-3xl transition-all duration-300 hover:border-white/20 md:grid-cols-2"
    >
      <div className="flex flex-col justify-center gap-4 p-8 sm:p-10">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-400">
          Video Edukasi
        </span>
        <h3 className="text-2xl font-bold text-ink sm:text-3xl">Belajar lewat tontonan yang seru</h3>
        <p className="max-w-md text-sm leading-relaxed text-muted sm:text-base">
          Saksikan penjelasan visual tentang tata surya dari National Geographic. Cocok untuk memahami konsep besar
          dengan cara yang mudah dan menyenangkan.
        </p>
        <span className="btn-primary w-fit">
          <PlayIcon className="h-4 w-4" />
          Tonton Sekarang
        </span>
      </div>

      <div className="relative min-h-[240px] overflow-hidden border-t border-white/10 bg-gradient-to-br from-brand-700/40 via-space-900 to-solar-600/30 md:border-l md:border-t-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.35),transparent_60%)]" />
        <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md ring-1 ring-white/30 transition-transform duration-300 group-hover:scale-110">
            <PlayIcon className="ml-1 h-8 w-8" />
          </span>
        </div>
        <span className="absolute bottom-4 left-4 rounded-lg bg-space-950/70 px-3 py-1 text-xs font-semibold text-ink/90 backdrop-blur">
          National Geographic — Solar System 101
        </span>
      </div>
    </Link>
  )
}
