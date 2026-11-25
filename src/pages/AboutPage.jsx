import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import StarField from '../components/StarField'
import {
  BookIcon,
  CheckIcon,
  CubeIcon,
  GlobeIcon,
  QuestionIcon,
  RocketIcon,
} from '../components/Icons'

const FEATURES = [
  'Simulasi tata surya 3D interaktif dengan orbit dan rotasi.',
  'Panel informasi lengkap untuk setiap planet.',
  'Narasi audio (text-to-speech) berbahasa Indonesia.',
  'Video edukasi dan kuis pilihan ganda dengan penilaian.',
]

const TECH = ['React', 'Vite', 'Tailwind CSS', 'Three.js', 'React Router']

const SOURCES = [
  { label: 'Three.js', href: 'https://threejs.org/' },
  { label: 'NASA Solar System Exploration', href: 'https://science.nasa.gov/solar-system/' },
  { label: 'National Geographic — Solar System 101', href: 'https://www.youtube.com/watch?v=libKVRa01L8' },
]

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden">
      <StarField count={70} />
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-16 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Tentang"
            title="Tentang aplikasi ini"
            description="Media pembelajaran interaktif tata surya berbasis web yang menggabungkan teks, audio, video, animasi, dan objek 3D."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="glass flex h-full flex-col gap-4 rounded-3xl p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg">
                <GlobeIcon className="h-6 w-6" />
              </span>
              <h3 className="text-xl font-bold text-ink">Tujuan</h3>
              <p className="text-sm leading-relaxed text-muted">
                Aplikasi ini dibuat untuk membantu siswa mengenal tata surya dengan cara yang lebih menarik. Materi
                disajikan melalui objek tiga dimensi, video, narasi audio, dan kuis sehingga pembelajaran tidak
                monoton.
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Dibuat untuk tugas Project Akhir Sistem Multimedia — Universitas Bina Sarana Informatika (UBSI).
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="glass flex h-full flex-col gap-4 rounded-3xl p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-solar-500 to-solar-600 text-white shadow-lg">
                <RocketIcon className="h-6 w-6" />
              </span>
              <h3 className="text-xl font-bold text-ink">Anggota Kelompok</h3>
              <div className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-space-900/50 p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-muted">Nama</span>
                <span className="text-lg font-bold text-ink">Maghfur Hasani</span>
                <span className="mt-2 text-xs font-bold uppercase tracking-wider text-muted">NIM</span>
                <span className="font-display text-lg font-bold text-brand-400">17230490</span>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                Program Studi Sistem Informasi, Universitas Bina Sarana Informatika.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="glass flex h-full flex-col gap-4 rounded-3xl p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-solar-500 text-white shadow-lg">
                <CubeIcon className="h-6 w-6" />
              </span>
              <h3 className="text-xl font-bold text-ink">Fitur Utama</h3>
              <ul className="flex flex-col gap-3">
                {FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-400">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="glass flex h-full flex-col gap-4 rounded-3xl p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-solar-500 text-white shadow-lg">
                <QuestionIcon className="h-6 w-6" />
              </span>
              <h3 className="text-xl font-bold text-ink">Teknologi</h3>
              <div className="flex flex-wrap gap-2">
                {TECH.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-ink"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted">
                Antarmuka dibangun dengan React dan Tailwind CSS, sedangkan simulasi tata surya menggunakan Three.js
                dengan kontrol orbit.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="glass flex flex-col gap-4 rounded-3xl p-7">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-space-600 to-brand-600 text-white shadow-lg">
              <BookIcon className="h-6 w-6" />
            </span>
            <h3 className="text-xl font-bold text-ink">Sumber Referensi</h3>
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
              <li className="text-muted">Vaughan, T. (2011). Multimedia: Making it work.</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
