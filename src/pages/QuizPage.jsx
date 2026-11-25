import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import StarField from '../components/StarField'
import { QUIZ } from '../data/quiz'
import { CheckIcon, QuestionIcon, RocketIcon } from '../components/Icons'

function getFeedback(percent) {
  if (percent === 100) return 'Sempurna! Kamu ahli tata surya.'
  if (percent >= 80) return 'Hebat! Pemahamanmu sudah sangat baik.'
  if (percent >= 60) return 'Bagus! Sedikit lagi menjadi ahli tata surya.'
  if (percent >= 40) return 'Lumayan! Yuk pelajari lagi planet-planetnya.'
  return 'Jangan menyerah, coba jelajahi tata surya dulu lalu ulangi kuisnya.'
}

export default function QuizPage() {
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [picked, setPicked] = useState(null)
  const [done, setDone] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const question = QUIZ[index]
  const progress = done ? 100 : Math.round((index / QUIZ.length) * 100)

  function choose(optionIndex) {
    if (picked !== null || done) return
    setPicked(optionIndex)
    if (optionIndex === question.a) setScore((s) => s + 1)

    timerRef.current = setTimeout(() => {
      if (index + 1 >= QUIZ.length) {
        setDone(true)
      } else {
        setIndex((i) => i + 1)
      }
      setPicked(null)
    }, 950)
  }

  function restart() {
    if (timerRef.current) clearTimeout(timerRef.current)
    setIndex(0)
    setScore(0)
    setPicked(null)
    setDone(false)
  }

  function optionClass(optionIndex) {
    if (picked === null) {
      return 'border-white/10 bg-space-900/60 text-muted hover:border-brand-400/60 hover:bg-white/[0.07] hover:text-ink'
    }
    if (optionIndex === question.a) return 'border-emerald-400/70 bg-emerald-500/20 text-ink'
    if (optionIndex === picked) return 'border-rose-400/70 bg-rose-500/20 text-ink'
    return 'border-white/10 bg-space-900/40 text-muted opacity-60'
  }

  return (
    <section className="relative overflow-hidden">
      <StarField count={70} />
      <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-16 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Kuis"
            title="Seberapa kenal kamu dengan tata surya?"
            description={`Kerjakan ${QUIZ.length} soal pilihan ganda dan lihat skormu. Tanpa batas waktu — belajar sambil bermain!`}
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="glass rounded-3xl p-6 sm:p-8">
            {done ? (
              <div className="flex flex-col items-center gap-4 py-6 text-center">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/25 to-solar-500/25 text-solar-400 ring-1 ring-white/10">
                  <CheckIcon className="h-8 w-8" />
                </span>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-400">Kuis selesai</p>
                <h3 className="font-display text-5xl font-extrabold text-ink">
                  {score}
                  <span className="text-2xl text-muted"> / {QUIZ.length}</span>
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-muted">{getFeedback(Math.round((score / QUIZ.length) * 100))}</p>
                <div className="mt-2 flex flex-wrap justify-center gap-3">
                  <button type="button" onClick={restart} className="btn-primary">
                    <QuestionIcon className="h-4 w-4" />
                    Ulangi Kuis
                  </button>
                  <Link to="/jelajah" className="btn-ghost">
                    <RocketIcon className="h-4 w-4" />
                    Jelajah 3D
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between text-xs font-bold text-muted">
                  <span>
                    Soal {index + 1} / {QUIZ.length}
                  </span>
                  <span>
                    Skor: <span className="text-solar-400">{score}</span>
                  </span>
                </div>

                <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-500 to-solar-500 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <h3 className="font-display text-xl font-bold leading-snug text-ink sm:text-2xl">{question.q}</h3>

                <div className="flex flex-col gap-2.5">
                  {question.o.map((option, i) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => choose(i)}
                      disabled={picked !== null}
                      className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors ${optionClass(i)}`}
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold">
                        {String.fromCharCode(65 + i)}
                      </span>
                      {option}
                    </button>
                  ))}
                </div>

                <p className="text-center text-xs text-muted/70">
                  Pilih satu jawaban. Jawaban benar akan disorot hijau.
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
