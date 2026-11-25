import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import StarField from '../components/StarField'
import { PlayIcon, CheckIcon } from '../components/Icons'

const POINTS = [
  'Mengenal urutan dan ciri khas delapan planet.',
  'Memahami peran Matahari sebagai pusat tata surya.',
  'Melihat skala dan keunikan setiap anggota tata surya.',
]

export default function VideoPage() {
  return (
    <section className="relative overflow-hidden">
      <StarField count={70} />
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-16 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Video Edukasi"
            title="Belajar lewat tontonan yang seru"
            description="Saksikan penjelasan visual tentang tata surya dari National Geographic. Cocok untuk memahami konsep besar dengan cara yang mudah."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="glass overflow-hidden rounded-3xl p-2 sm:p-3">
            <div className="aspect-video overflow-hidden rounded-2xl bg-black">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/libKVRa01L8?rel=0"
                title="Solar System 101 — National Geographic"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid gap-5 md:grid-cols-[1.4fr_1fr]">
            <div className="glass flex flex-col gap-4 rounded-2xl p-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-brand-400">
                <PlayIcon className="h-3.5 w-3.5" />
                National Geographic
              </span>
              <h3 className="text-xl font-bold text-ink">Solar System 101</h3>
              <p className="text-sm leading-relaxed text-muted">
                Video pengantar yang menjelaskan asal-usul tata surya, karakteristik Matahari, planet-planet, serta
                benda langit lain seperti asteroid dan komet.
              </p>
              <p className="text-xs text-muted/80">
                Jika video tidak tampil, buka{' '}
                <a
                  href="https://www.youtube.com/watch?v=libKVRa01L8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-brand-400 underline decoration-brand-400/40 underline-offset-2 hover:text-brand-300"
                >
                  tautan ini
                </a>
                .
              </p>
            </div>

            <div className="glass flex flex-col gap-3 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-ink">Yang akan kamu pelajari</h3>
              <ul className="flex flex-col gap-3">
                {POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-400">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
