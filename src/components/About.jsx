import Reveal from './Reveal'
import Counter from './Counter'
import { stats } from '../data/content'

export default function About() {
  return (
    <section id="sobre-nosotros" className="section-pad relative">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
        <Reveal>
          <span className="eyebrow">Sobre nosotros</span>
          <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl leading-tight">
            Software real, para <span className="gradient-text">operaciones reales</span>.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-ink-muted text-lg leading-relaxed">
            VEXA SOFTWARE desarrolla soluciones tecnológicas de alta calidad para empresas, clubes,
            organizaciones y emprendedores. Trabajamos de cerca con cada cliente para entender su
            operación antes de escribir una sola línea de código, y construimos sistemas que se
            adaptan a la forma en que ya trabajás — no al revés.
          </p>
          <p className="mt-5 text-ink-muted text-lg leading-relaxed">
            Desde plataformas de gestión deportiva hasta sistemas empresariales de cobranza y
            administración, cada proyecto combina tecnología moderna, diseño cuidado y soporte
            permanente después del lanzamiento.
          </p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <Counter key={s.label} {...s} delay={i * 80} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
