import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { createSolarSystem } from '../three/SolarSystem'
import { PLANETS } from '../data/planets'
import {
  MusicIcon,
  OrbitIcon,
  PauseIcon,
  PlaySmallIcon,
  SparklesIcon,
  VolumeIcon,
} from '../components/Icons'

const MUSIC_URL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'

function ToggleButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition-colors ${
        active ? 'bg-solar-500 text-space-950' : 'bg-white/10 text-ink hover:bg-white/20'
      }`}
    >
      {children}
    </button>
  )
}

function Slider({ icon, label, value, onChange, min, max, step, display }) {
  return (
    <label className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-1.5 text-xs font-bold text-ink">
      <span className="text-muted">{icon}</span>
      <span className="hidden sm:inline">{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="h-1.5 w-20 cursor-pointer accent-solar-500"
        aria-label={label}
      />
      <span className="w-9 text-right tabular-nums text-muted">{display}</span>
    </label>
  )
}

export default function ExplorePage() {
  const wrapRef = useRef(null)
  const canvasRef = useRef(null)
  const labelsRef = useRef(null)
  const apiRef = useRef(null)
  const audioRef = useRef(null)
  const [searchParams] = useSearchParams()

  const [selected, setSelected] = useState(null)
  const [paused, setPaused] = useState(false)
  const [speed, setSpeed] = useState(1)
  const [showOrbits, setShowOrbits] = useState(true)
  const [music, setMusic] = useState(false)
  const [volume, setVolume] = useState(0.4)

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    const labelsEl = labelsRef.current
    if (!canvas || !wrap || !labelsEl) return

    const api = createSolarSystem({
      canvas,
      wrap,
      labelsEl,
      planets: PLANETS,
      onSelect: (planet) => setSelected(planet),
    })
    apiRef.current = api

    const param = searchParams.get('planet')
    if (param) {
      const index = PLANETS.findIndex((p) => p.id === param)
      if (index >= 0) requestAnimationFrame(() => api.selectPlanet(index))
    }

    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel()
      }
      api.dispose()
      apiRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    apiRef.current?.setPaused(paused)
  }, [paused])

  useEffect(() => {
    apiRef.current?.setSpeed(speed)
  }, [speed])

  useEffect(() => {
    apiRef.current?.setShowOrbits(showOrbits)
  }, [showOrbits])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = volume
    if (music) {
      audio.play().catch(() => {})
    } else {
      audio.pause()
    }
  }, [music, volume])

  function handleSelect(index) {
    apiRef.current?.selectPlanet(index)
  }

  function narrate() {
    if (!selected || typeof window === 'undefined' || !('speechSynthesis' in window)) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(selected.narration)
    utterance.lang = 'id-ID'
    utterance.rate = 0.95
    window.speechSynthesis.speak(utterance)
  }

  return (
    <section className="relative h-[calc(100vh-4rem)] w-full overflow-hidden bg-space-950">
      <div ref={wrapRef} className="absolute inset-0">
        <canvas ref={canvasRef} className="block h-full w-full" />
      </div>

      <div ref={labelsRef} aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 overflow-hidden" />

      <div className="pointer-events-none absolute left-3 top-3 z-20 hidden rounded-xl border border-white/10 bg-space-950/60 px-3 py-2 text-xs text-muted backdrop-blur sm:block">
        Geser untuk memutar · Scroll untuk zoom · Klik planet untuk info
      </div>

      <div className="absolute inset-x-0 bottom-24 z-20 flex flex-wrap justify-center gap-1.5 px-3">
        {PLANETS.map((planet, i) => {
          const active = selected?.id === planet.id
          return (
            <button
              key={planet.id}
              type="button"
              onClick={() => handleSelect(i)}
              className={`rounded-lg border px-2.5 py-1.5 text-[11px] font-bold transition-colors sm:text-xs ${
                active
                  ? 'border-solar-400 bg-solar-500 text-space-950'
                  : 'border-white/10 bg-space-900/80 text-ink hover:border-brand-400/60 hover:bg-brand-600/40'
              }`}
            >
              {planet.name}
            </button>
          )
        })}
      </div>

      <div className="absolute inset-x-0 bottom-4 z-20 flex justify-center px-3">
        <div className="glass-strong flex flex-wrap items-center justify-center gap-2 rounded-2xl px-3 py-2">
          <ToggleButton active={paused} onClick={() => setPaused((v) => !v)}>
            {paused ? <PlaySmallIcon /> : <PauseIcon />}
            {paused ? 'Lanjut' : 'Jeda'}
          </ToggleButton>

          <Slider
            icon={<SparklesIcon className="h-4 w-4" />}
            label="Kecepatan"
            value={speed}
            onChange={setSpeed}
            min={0}
            max={3}
            step={0.1}
            display={`${speed.toFixed(1)}x`}
          />

          <ToggleButton active={showOrbits} onClick={() => setShowOrbits((v) => !v)}>
            <OrbitIcon />
            Orbit
          </ToggleButton>

          <ToggleButton active={music} onClick={() => setMusic((v) => !v)}>
            <MusicIcon />
            Musik
          </ToggleButton>

          <Slider
            icon={<VolumeIcon className="h-4 w-4" />}
            label="Volume"
            value={volume}
            onChange={setVolume}
            min={0}
            max={1}
            step={0.05}
            display={`${Math.round(volume * 100)}`}
          />
        </div>
      </div>

      <audio ref={audioRef} src={MUSIC_URL} loop preload="none" />

      {selected && (
        <aside className="glass-strong absolute right-3 top-3 z-30 max-h-[calc(100%-1.5rem)] w-[min(340px,calc(100%-1.5rem))] overflow-auto rounded-2xl p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-400">
                {selected.distance === 0 ? 'Bintang' : 'Planet'}
              </span>
              <h2 className="text-2xl font-bold text-ink">{selected.name}</h2>
            </div>
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="rounded-lg bg-white/10 px-2.5 py-1 text-xs font-bold text-ink transition-colors hover:bg-white/20"
            >
              Tutup
            </button>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-muted">{selected.desc}</p>

          <table className="mt-4 w-full border-collapse text-sm">
            <tbody>
              {Object.entries(selected.facts).map(([key, value]) => (
                <tr key={key} className="border-b border-white/10 last:border-0">
                  <td className="py-1.5 pr-3 align-top text-muted">{key}</td>
                  <td className="py-1.5 text-right font-semibold text-ink">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={narrate}
              className="inline-flex items-center gap-1.5 rounded-xl bg-brand-600 px-3.5 py-2 text-xs font-bold text-white transition-colors hover:bg-brand-500"
            >
              <VolumeIcon />
              Dengarkan
            </button>
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 px-3.5 py-2 text-xs font-bold text-ink transition-colors hover:bg-white/20"
            >
              Kembali
            </button>
          </div>
        </aside>
      )}
    </section>
  )
}
