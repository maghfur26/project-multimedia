import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'

export default function StatCounter({ icon, value, decimals = 0, suffix = '', label }) {
  const { ref, inView } = useInView()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf
    const start = performance.now()
    const duration = 1500
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(value * eased)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  const formatted = Number(display.toFixed(decimals)).toLocaleString('id-ID', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <div ref={ref} className="glass flex flex-col items-center gap-2 rounded-2xl px-4 py-7 text-center">
      <span className="mb-1 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/25 to-solar-500/25 text-brand-400 ring-1 ring-white/10">
        {icon}
      </span>
      <div className="font-display text-4xl font-extrabold text-ink sm:text-[2.6rem]">
        {formatted}
        <span className="text-solar-400">{suffix}</span>
      </div>
      <div className="text-sm font-semibold text-muted">{label}</div>
    </div>
  )
}
