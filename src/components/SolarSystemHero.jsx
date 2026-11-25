const ORBITS = [
  { color: '#b0a090', size: 34, duration: 16, reverse: false },
  { color: '#2e8bc0', size: 50, duration: 24, reverse: true },
  { color: '#c1440e', size: 66, duration: 34, reverse: false },
  { color: '#d8ca9d', size: 82, duration: 46, reverse: true },
  { color: '#e4d191', size: 98, duration: 60, reverse: false },
]

export default function SolarSystemHero() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px] animate-float-slow">
      <div className="absolute inset-6 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="absolute inset-1/4 rounded-full bg-solar-500/20 blur-3xl" />

      {ORBITS.map((orbit, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
          style={{ width: `${orbit.size}%`, height: `${orbit.size}%` }}
        >
          <div
            className="absolute inset-0 animate-spin"
            style={{
              animationDuration: `${orbit.duration}s`,
              animationDirection: orbit.reverse ? 'reverse' : 'normal',
            }}
          >
            <span
              className="absolute left-1/2 top-0 block -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: i === 3 ? 20 : 12 + i * 1.5,
                height: i === 3 ? 20 : 12 + i * 1.5,
                background: `radial-gradient(circle at 32% 28%, rgba(255,255,255,0.9), ${orbit.color} 60%, rgba(0,0,0,0.4))`,
                boxShadow: `0 0 18px -2px ${orbit.color}cc`,
              }}
            />
          </div>
        </div>
      ))}

      <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow rounded-full bg-gradient-to-br from-yellow-200 via-solar-400 to-solar-600" />
      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-solar-500/10 blur-xl" />
    </div>
  )
}
