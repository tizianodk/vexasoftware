import Reveal from './Reveal'
import Icon from './Icon'
import { services } from '../data/content'

export default function Services() {
  return (
    <section id="servicios" className="section-pad relative">
      <Reveal className="max-w-2xl">
        <span className="eyebrow">Servicios</span>
        <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl leading-tight">
          Todo lo que tu producto necesita, <span className="gradient-text">en un solo equipo</span>.
        </h2>
      </Reveal>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <Reveal key={s.code} delay={(i % 3) * 90}>
            <article className="glass-panel group h-full p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-bright/40 hover:shadow-glow">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue/20 to-blue/20 border border-border flex items-center justify-center text-blue-bright group-hover:text-cyan transition-colors">
                  <Icon name={s.icon} className="w-5 h-5" />
                </div>
                <span className="font-mono text-[11px] text-ink-dim">{s.code}</span>
              </div>
              <h3 className="mt-5 font-display font-semibold text-lg">{s.title}</h3>
              <p className="mt-2.5 text-sm text-ink-muted leading-relaxed">{s.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
