export default function PlanetSphere({ color, size = 64, className = '' }) {
  return (
    <span
      className={`relative inline-block shrink-0 rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 32% 28%, rgba(255,255,255,0.85) 0%, ${color} 42%, rgba(0,0,0,0.35) 100%)`,
        boxShadow: `0 0 26px -4px ${color}aa, inset -6px -8px 18px rgba(0,0,0,0.45)`,
      }}
    />
  )
}
