import Reveal from './Reveal'
import Icon from './Icon'
import { advantages } from '../data/content'

export default function WhyUs() {
  return (
    <section className="section-pad relative">
      <Reveal className="max-w-2xl">
        <span className="eyebrow">Por qué elegirnos</span>
        <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl leading-tight">
          Ventajas que se notan <span className="gradient-text">desde el primer día</span>.
        </h2>
      </Reveal>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
        {advantages.map((a, i) => (
          <Reveal key={a.title} delay={(i % 3) * 90} className="flex gap-4">
            <div className="shrink-0 w-11 h-11 rounded-xl glass flex items-center justify-center text-cyan">
              <Icon name={a.icon} className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-semibold">{a.title}</h3>
              <p className="mt-1.5 text-sm text-ink-muted leading-relaxed">{a.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
