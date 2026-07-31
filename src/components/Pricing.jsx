import Reveal from './Reveal'
import Icon from './Icon'
import { whatsappNumber } from '../data/content'

const plans = [
    {
        name: 'Plan Inicial',
        subtitle: 'Ideal para emprendedores y profesionales',
        price: 'Desde USD 180',
        description:
            'Una página profesional para presentar tu negocio y comenzar a recibir consultas.',
        features: [
            'Landing page profesional',
            'Hasta 5 secciones',
            'Diseño adaptable a celulares',
            'Botón directo a WhatsApp',
            'Formulario de contacto',
            'Enlaces a redes sociales',
            'Google Maps',
            'SEO básico',
            'Publicación del sitio',
            '15 días de soporte',
        ],
        featured: false,
    },
    {
        name: 'Plan Profesional',
        subtitle: 'La opción más elegida para empresas',
        price: 'Desde USD 350',
        description:
            'Un sitio completo pensado para captar clientes y fortalecer tu presencia digital.',
        features: [
            'Todo lo incluido en el Plan Inicial',
            'Hasta 8 secciones o páginas',
            'Galería de imágenes',
            'Formularios personalizados',
            'Animaciones modernas',
            'Integración con Google Analytics',
            'Optimización de velocidad',
            'SEO avanzado',
            'Blog o sección de novedades',
            '30 días de soporte',
        ],
        featured: true,
    },
    {
        name: 'Plan Premium',
        subtitle: 'Para proyectos con funciones avanzadas',
        price: 'Desde USD 650',
        description:
            'Una solución personalizada con herramientas adaptadas a la operación de tu negocio.',
        features: [
            'Todo lo incluido en el Plan Profesional',
            'Diseño completamente personalizado',
            'Panel de administración',
            'Base de datos',
            'Registro e inicio de sesión',
            'Sistema de turnos o reservas',
            'Integración con APIs',
            'Pasarela de pagos opcional',
            'Dominio y hosting por un año',
            '90 días de soporte',
        ],
        featured: false,
    },
]

function createWhatsAppLink(planName) {
    const message = `Hola, quiero solicitar información sobre el ${planName} de páginas web.`
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

export default function Pricing() {
    return (
        <section id="planes" className="section-pad relative overflow-hidden">
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(circle at 50% 45%, rgba(47,107,255,0.12), transparent 45%)',
                }}
            />

            <div className="relative">
                <Reveal className="max-w-3xl mx-auto text-center">
                    <span className="eyebrow">Planes de páginas web</span>

                    <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
                        Elegí el plan ideal para{' '}
                        <span className="gradient-text">impulsar tu negocio</span>
                    </h2>

                    <p className="mt-5 text-ink-muted leading-relaxed">
                        Todos los proyectos se pueden adaptar según tus necesidades.
                        También podés agregar o quitar funcionalidades.
                    </p>
                </Reveal>

                <div className="mt-16 grid gap-7 lg:grid-cols-3 items-stretch">
                    {plans.map((plan, index) => (
                        <Reveal
                            key={plan.name}
                            delay={index * 100}
                            className="h-full"
                        >
                            <article
                                className={`relative h-full flex flex-col rounded-3xl border p-7 md:p-8 transition-all duration-300 hover:-translate-y-2 ${plan.featured
                                        ? 'bg-gradient-to-b from-blue/15 to-white/[0.03] border-blue-bright/60 shadow-glow lg:scale-[1.04]'
                                        : 'glass-panel border-border hover:border-blue-bright/40'
                                    }`}
                            >
                                {plan.featured && (
                                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-blue-bright to-blue px-5 py-2 font-display text-xs font-semibold uppercase tracking-wider text-white shadow-glow">
                                        Más elegido
                                    </span>
                                )}

                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="font-display text-2xl font-bold text-white">
                                            {plan.name}
                                        </h3>

                                        <p className="mt-2 text-sm text-ink-muted">
                                            {plan.subtitle}
                                        </p>
                                    </div>

                                    <div
                                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${plan.featured
                                                ? 'border-blue-bright/40 bg-blue/20 text-cyan'
                                                : 'border-border bg-white/[0.04] text-blue-bright'
                                            }`}
                                    >
                                        <Icon
                                            name={plan.featured ? 'zap' : 'code'}
                                            className="h-6 w-6"
                                        />
                                    </div>
                                </div>

                                <div className="mt-7 border-y border-border py-6">
                                    <span className="font-display text-3xl font-bold text-white">
                                        {plan.price}
                                    </span>

                                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                                        {plan.description}
                                    </p>
                                </div>

                                <ul className="mt-7 flex-1 space-y-4">
                                    {plan.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-start gap-3 text-sm text-ink-muted"
                                        >
                                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue/15 text-blue-bright">
                                                <Icon name="check" className="h-3.5 w-3.5" />
                                            </span>

                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={createWhatsAppLink(plan.name)}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`mt-9 w-full ${plan.featured ? 'btn-primary' : 'btn-secondary'
                                        }`}
                                >
                                    Consultar este plan
                                    <Icon name="arrowRight" className="h-4 w-4" />
                                </a>
                            </article>
                        </Reveal>
                    ))}
                </div>

                <Reveal className="mt-12">
                    <div className="glass-panel mx-auto max-w-4xl p-6 md:p-8 text-center">
                        <h3 className="font-display text-xl font-semibold text-white">
                            ¿Necesitás algo diferente?
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                            Los valores son orientativos. El presupuesto final puede variar
                            según el diseño, la cantidad de secciones, las integraciones y las
                            funcionalidades solicitadas.
                        </p>

                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                                'Hola, quiero solicitar un presupuesto personalizado para una página web.'
                            )}`}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-secondary mt-6"
                        >
                            Solicitar presupuesto personalizado
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}