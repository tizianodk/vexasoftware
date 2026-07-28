import Reveal from './Reveal'
import { products } from '../data/content'

export default function Products() {
  return (
    <section id="productos" className="section-pad relative">
      <Reveal className="max-w-2xl">
        <span className="eyebrow">Productos</span>
        <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl leading-tight">
          Sistemas que ya están <span className="gradient-text">en producción</span>.
        </h2>
      </Reveal>

      <div className="mt-14 grid md:grid-cols-2 gap-6">
        {products.map((p, i) => (
          <Reveal key={p.name} delay={i * 100}>
            <article className="glass-panel h-full p-8 relative overflow-hidden group hover:border-violet-bright/40 transition-colors duration-300">
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-violet/10 blur-3xl group-hover:bg-blue/15 transition-colors duration-500" />
              <span className="relative eyebrow text-violet-bright">{p.tag}</span>
              <h3 className="relative mt-3 font-display font-semibold text-xl">{p.name}</h3>
              <p className="relative mt-3 text-sm text-ink-muted leading-relaxed">{p.description}</p>
              <div className="relative mt-6 flex gap-6 border-t border-border pt-5">
                {p.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-display font-semibold text-blue-bright">{m.value}</div>
                    <div className="text-xs text-ink-dim mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
