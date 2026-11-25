import { Link } from 'react-router-dom'
import SolarSystemHero from '../components/SolarSystemHero'
import StarField from '../components/StarField'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import FeatureCard from '../components/FeatureCard'
import PlanetCard from '../components/PlanetCard'
import PlanetSizeChart from '../components/PlanetSizeChart'
import StatCounter from '../components/StatCounter'
import VideoPreview from '../components/VideoPreview'
import QuizTeaser from '../components/QuizTeaser'
import { PLANETS, PLANETS_ONLY } from '../data/planets'
import { QUIZ } from '../data/quiz'
import {
  BookIcon,
  CubeIcon,
  GlobeIcon,
  PlayIcon,
  QuestionIcon,
  RocketIcon,
  SatelliteIcon,
  SunIcon,
} from '../components/Icons'

const FEATURES = [
  {
    icon: <CubeIcon className="h-7 w-7" />,
    title: 'Jelajah 3D',
    description:
      'Putar, perbesar, dan pilih setiap planet. Amati orbit, rotasi, dan satelit dalam simulasi tiga dimensi yang interaktif.',
    to: '/jelajah',
    cta: 'Buka simulasi 3D',
    accent: 'from-brand-500 to-brand-700',
  },
  {
    icon: <PlayIcon className="h-6 w-6" />,
    title: 'Video Edukasi',
    description:
      'Saksikan penjelasan visual tentang tata surya dari National Geographic dengan bahasa yang mudah dipahami.',
    to: '/video',
    cta: 'Tonton video',
    accent: 'from-solar-500 to-solar-600',
  },
  {
    icon: <QuestionIcon className="h-7 w-7" />,
    title: 'Kuis Interaktif',
    description:
      `Uji pemahamanmu lewat ${QUIZ.length} soal pilihan ganda. Dapatkan skor dan pelajari jawaban yang benar.`,
    to: '/kuis',
    cta: 'Mulai kuis',
    accent: 'from-brand-400 to-solar-500',
  },
]

const STATS = [
  { icon: <GlobeIcon className="h-6 w-6" />, value: PLANETS_ONLY.length, label: 'Planet di tata surya' },
  { icon: <SatelliteIcon className="h-6 w-6" />, value: 170, suffix: '+', label: 'Satelit alami' },
  { icon: <SunIcon className="h-6 w-6" />, value: 4.6, decimals: 1, suffix: ' miliar', label: 'Usia tata surya (tahun)' },
  { icon: <BookIcon className="h-6 w-6" />, value: QUIZ.length, label: 'Soal kuis interaktif' },
]

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <StarField count={120} />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-2 lg:pt-20">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-400">
              Media Pembelajaran Interaktif
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
              Jelajah <span className="text-gradient">Tata Surya</span> dalam 3D
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Kenali Matahari, planet, dan satelit lewat pengalaman belajar yang menggabungkan teks, audio, video,
              animasi, dan objek tiga dimensi.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/jelajah" className="btn-primary">
                <RocketIcon className="h-5 w-5" />
                Mulai Jelajah
              </Link>
              <Link to="/video" className="btn-ghost">
                <PlayIcon className="h-4 w-4" />
                Tonton Video
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-2 text-sm text-muted">
              <span>
                <strong className="text-lg font-extrabold text-ink">{PLANETS.length}</strong> objek langit
              </span>
              <span>
                <strong className="text-lg font-extrabold text-ink">{PLANETS_ONLY.length}</strong> planet
              </span>
              <span>
                <strong className="text-lg font-extrabold text-ink">{QUIZ.length}</strong> soal kuis
              </span>
            </div>
          </div>

          <div className="relative">
            <SolarSystemHero />
          </div>
        </div>
      </section>

      <section className="section-pad relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Fitur"
              title="Belajar tata surya dengan cara yang menyenangkan"
              description="Tiga modul utama yang saling melengkapi untuk memahami tata surya dari berbagai sudut pandang."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {FEATURES.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 100} className="h-full">
                <FeatureCard {...feature} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Anggota Tata Surya"
              title="Kenali penghuni tata surya"
              description="Dari Matahari yang menjadi pusat hingga Neptunus yang paling jauh — klik kartu untuk menjelajahinya dalam 3D."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PLANETS.map((planet, i) => (
              <Reveal key={planet.id} delay={(i % 3) * 80} className="h-full">
                <PlanetCard planet={planet} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Perbandingan"
              title="Seberapa besar planet-planet itu?"
              description="Matahari jauh lebih besar dari semua planet. Lihat perbandingan visual ukuran planet di tata surya."
            />
          </Reveal>
          <div className="mt-10">
            <Reveal>
              <PlanetSizeChart />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative pb-10">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <StatCounter {...stat} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad relative">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6">
          <Reveal>
            <VideoPreview />
          </Reveal>
          <Reveal delay={100}>
            <QuizTeaser />
          </Reveal>
        </div>
      </section>
    </>
  )
}
