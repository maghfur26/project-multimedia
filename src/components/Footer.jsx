import { Link } from 'react-router-dom'
import { NAV_LINKS } from '../data/nav'

const SOURCES = [
  { label: 'Three.js', href: 'https://threejs.org/' },
  { label: 'NASA Solar System', href: 'https://science.nasa.gov/solar-system/' },
  { label: 'National Geographic', href: 'https://www.youtube.com/watch?v=libKVRa01L8' },
]

export default function Footer() {
  return (
    <footer className="relative mt-8 border-t border-white/10 bg-space-950/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.6fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-solar-500 shadow-[0_0_20px_-2px_rgba(249,115,22,0.7)]">
              <span className="h-3.5 w-3.5 rounded-full bg-space-950/70" />
            </span>
            <span className="font-display text-lg font-bold text-ink">
              Jelajah <span className="text-gradient">Tata Surya</span>
            </span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Media pembelajaran interaktif tata surya berbasis web yang menggabungkan teks, audio, video, animasi, dan
            objek 3D.
          </p>
          <p className="text-xs text-muted/70">
            Dibuat untuk tugas Project Akhir Sistem Multimedia — Universitas Bina Sarana Informatika (UBSI).
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-ink">Navigasi</h3>
          <ul className="flex flex-col gap-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-muted transition-colors hover:text-brand-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-ink">Sumber</h3>
          <ul className="flex flex-col gap-2 text-sm">
            {SOURCES.map((source) => (
              <li key={source.label}>
                <a
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-brand-400"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-muted/80 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>© {new Date().getFullYear()} Jelajah Tata Surya. Maghfur Hasani — 17230490.</span>
          <span>Dibangun dengan React, Vite, Tailwind CSS & Three.js.</span>
        </div>
      </div>
    </footer>
  )
}
