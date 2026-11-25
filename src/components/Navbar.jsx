import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../data/nav'
import { MenuIcon, CloseIcon, SparklesIcon } from './Icons'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="glass-strong border-x-0 border-t-0">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-solar-500 shadow-[0_0_20px_-2px_rgba(249,115,22,0.7)]">
              <span className="h-3.5 w-3.5 rounded-full bg-space-950/70" />
            </span>
            <span className="font-display text-lg font-bold leading-none text-ink">
              Jelajah <span className="text-gradient">Tata Surya</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `rounded-xl px-3.5 py-2 text-sm font-bold transition-colors ${
                    isActive ? 'bg-white/10 text-white' : 'text-muted hover:bg-white/5 hover:text-ink'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/jelajah" className="btn-primary ml-2 px-4 py-2 text-sm">
              <SparklesIcon className="h-4 w-4" />
              Mulai
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-ink md:hidden"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 px-4 pb-4 pt-2 md:hidden">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-bold transition-colors ${
                      isActive ? 'bg-white/10 text-white' : 'text-muted hover:bg-white/5 hover:text-ink'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link to="/jelajah" className="btn-primary mt-2 w-full px-4 py-3 text-sm">
                <SparklesIcon className="h-4 w-4" />
                Mulai Jelajah
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
