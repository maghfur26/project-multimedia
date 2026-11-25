import { Link } from 'react-router-dom'
import { QUIZ } from '../data/quiz'
import { ArrowRightIcon, QuestionIcon } from './Icons'

export default function QuizTeaser() {
  const sample = QUIZ[0]

  return (
    <Link
      to="/kuis"
      className="glass group grid overflow-hidden rounded-3xl transition-all duration-300 hover:border-white/20 md:grid-cols-2"
    >
      <div className="order-2 flex flex-col justify-center gap-4 border-t border-white/10 p-8 sm:p-10 md:order-1 md:border-r md:border-t-0">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-solar-400">
          Uji Pemahaman
        </span>
        <h3 className="text-2xl font-bold text-ink sm:text-3xl">Seberapa kenal kamu dengan tata surya?</h3>
        <p className="max-w-md text-sm leading-relaxed text-muted sm:text-base">
          Kerjakan {QUIZ.length} soal pilihan ganda dan lihat skormu. Tanpa batas waktu — belajar sambil bermain!
        </p>
        <span className="btn-primary w-fit">
          <QuestionIcon className="h-4 w-4" />
          Mulai Kuis
        </span>
      </div>

      <div className="order-1 flex flex-col justify-center gap-4 p-8 sm:p-10 md:order-2">
        <span className="text-xs font-bold uppercase tracking-wider text-muted">Contoh soal</span>
        <p className="font-display text-lg font-bold leading-snug text-ink">{sample.q}</p>
        <div className="flex flex-col gap-2">
          {sample.o.map((option, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-space-900/50 px-4 py-3 text-sm text-muted transition-colors group-hover:border-brand-400/30"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-ink">
                {String.fromCharCode(65 + i)}
              </span>
              {option}
            </div>
          ))}
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-400">
          Lihat semua soal
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
