import Reveal from './Reveal'
import { process } from '../data/content'

export default function Process() {
  return (
    <section id="proceso" className="section-pad relative">
      <Reveal className="max-w-2xl">
        <span className="eyebrow">Proceso de trabajo</span>
        <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl leading-tight">
          Un método claro, <span className="gradient-text">de punta a punta</span>.
        </h2>
      </Reveal>

      <div className="mt-16 relative">
        <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="grid lg:grid-cols-6 gap-10 lg:gap-4">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 90} className="relative">
              <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center font-mono text-sm text-blue-bright relative z-10">
                {p.step}
              </div>
              <h3 className="mt-4 font-display font-semibold">{p.title}</h3>
              <p className="mt-1.5 text-sm text-ink-muted leading-relaxed">{p.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
