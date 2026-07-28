import ParticleNetwork from './ParticleNetwork'
import DeployTerminal from './DeployTerminal'
import Icon from './Icon'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 bg-aurora" />
      <ParticleNetwork className="absolute inset-0 w-full h-full opacity-70" />
      <div className="absolute inset-0 bg-grid-fade" />

      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <span className="eyebrow inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse-slow" />
            Software — Tucumán, Argentina
          </span>

          <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight">
            Transformamos <span className="gradient-text">ideas</span> en soluciones digitales.
          </h1>

          <p className="mt-6 text-ink-muted text-lg max-w-xl leading-relaxed">
            Diseñamos y desarrollamos software a medida, aplicaciones móviles y sistemas de gestión
            para empresas, clubes, organizaciones y emprendedores que necesitan tecnología real, no plantillas.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a href="#contacto" className="btn-primary">
              Solicitar presupuesto
              <Icon name="arrowRight" className="w-4 h-4" />
            </a>
            <a href="#servicios" className="btn-secondary">
              Ver nuestros servicios
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end animate-float">
          <DeployTerminal />
        </div>
      </div>
    </section>
  )
}
