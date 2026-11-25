const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function RocketIcon({ className = 'h-6 w-6' }) {
  return (
    <svg {...base} className={className}>
      <path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.8a2 2 0 0 0-3-.2Z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 21 3c0 3.6-1.5 7.6-4.2 10a22 22 0 0 1-3.8 2Z" />
      <path d="M9 12H4s.6-3.3 2-4.5C7.3 6.3 11 6 11 6" />
      <path d="M12 15v5s3.3-.6 4.5-2C17.7 16.7 18 13 18 13" />
    </svg>
  )
}

export function PlayIcon({ className = 'h-6 w-6' }) {
  return (
    <svg {...base} className={className} fill="currentColor" stroke="none">
      <path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5Z" />
    </svg>
  )
}

export function CubeIcon({ className = 'h-6 w-6' }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 2.5 3 7v10l9 4.5 9-4.5V7l-9-4.5Z" />
      <path d="M3 7l9 4.5L21 7" />
      <path d="M12 11.5V22" />
    </svg>
  )
}

export function QuestionIcon({ className = 'h-6 w-6' }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M9.5 9a2.5 2.5 0 1 1 3.4 2.3c-.6.25-.9.7-.9 1.2v.5" />
      <path d="M12 16.5h.01" />
    </svg>
  )
}

export function ArrowRightIcon({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

export function MenuIcon({ className = 'h-6 w-6' }) {
  return (
    <svg {...base} className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CloseIcon({ className = 'h-6 w-6' }) {
  return (
    <svg {...base} className={className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export function PauseIcon({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} className={className} fill="currentColor" stroke="none">
      <rect x="6" y="5" width="4" height="14" rx="1" />
      <rect x="14" y="5" width="4" height="14" rx="1" />
    </svg>
  )
}

export function PlaySmallIcon({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} className={className} fill="currentColor" stroke="none">
      <path d="M7 5.5v13a1 1 0 0 0 1.5.86l10-6.5a1 1 0 0 0 0-1.72l-10-6.5A1 1 0 0 0 7 5.5Z" />
    </svg>
  )
}

export function OrbitIcon({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="3" />
      <ellipse cx="12" cy="12" rx="9.5" ry="4.5" transform="rotate(-28 12 12)" />
    </svg>
  )
}

export function MusicIcon({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} className={className}>
      <path d="M9 18V5l11-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="17" cy="16" r="3" />
    </svg>
  )
}

export function VolumeIcon({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} className={className}>
      <path d="M4 9v6h4l5 4V5L8 9H4Z" />
      <path d="M16.5 8.5a5 5 0 0 1 0 7" />
    </svg>
  )
}

export function SparklesIcon({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Z" />
      <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" />
    </svg>
  )
}

export function GlobeIcon({ className = 'h-6 w-6' }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M3 12h18" />
      <path d="M12 2.5c2.5 2.6 3.8 6 3.8 9.5s-1.3 6.9-3.8 9.5c-2.5-2.6-3.8-6-3.8-9.5S9.5 5.1 12 2.5Z" />
    </svg>
  )
}

export function BookIcon({ className = 'h-6 w-6' }) {
  return (
    <svg {...base} className={className}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15.5H6.5A2.5 2.5 0 0 0 4 21V5.5Z" />
      <path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20" />
    </svg>
  )
}

export function CheckIcon({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <path d="m4 12.5 5 5L20 6.5" />
    </svg>
  )
}

export function SatelliteIcon({ className = 'h-6 w-6' }) {
  return (
    <svg {...base} className={className}>
      <path d="m7 10 4 4" />
      <path d="m10 3 4 4-3 3-4-4 3-3Z" />
      <path d="m14 7 3-3 4 4-3 3-4-4Z" />
      <path d="M9 14l-3 3a2.1 2.1 0 0 0 3 3l3-3" />
      <path d="M4 20h.01" />
    </svg>
  )
}

export function SunIcon({ className = 'h-6 w-6' }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
    </svg>
  )
}

export function ChessQueenIcon({ className = 'h-6 w-6' }) {
  return (
    <svg {...base} className={className}>
      <path d="M8 3l4 4 4-4-1.5 8.5h-5L8 3Z" />
      <path d="M6 21h12M7 21l1.5-6h7L17 21" />
      <circle cx="6" cy="10" r="1" />
      <circle cx="18" cy="10" r="1" />
    </svg>
  )
}
