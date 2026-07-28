import Reveal from './Reveal'
import { testimonials } from '../data/content'

export default function Testimonials() {
  return (
    <section className="section-pad relative">
      <Reveal className="max-w-2xl">
        <span className="eyebrow">Testimonios</span>
        <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl leading-tight">
          Lo que dicen quienes <span className="gradient-text">ya trabajaron con nosotros</span>.
        </h2>
      </Reveal>

      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <Reveal key={t.author} delay={i * 100}>
            <figure className="glass-panel h-full p-8 flex flex-col">
              <span className="font-display text-4xl text-blue-bright/40 leading-none">&ldquo;</span>
              <blockquote className="mt-2 text-ink-muted text-[15px] leading-relaxed flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
                <div className="font-display font-semibold text-sm">{t.author}</div>
                <div className="text-xs text-ink-dim mt-0.5">{t.org}</div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
