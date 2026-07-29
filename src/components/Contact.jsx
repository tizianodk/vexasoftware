import { useState } from 'react'
import Reveal from './Reveal'
import Icon from './Icon'
import WhatsAppGlyph from './WhatsAppGlyph'
import { whatsappNumber, whatsappMessage } from '../data/content'

const socials = [
  {
    name: 'WhatsApp',
    icon: 'whatsapp',
    href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`,
  },
  {
    name: 'Facebook',
    icon: 'facebook',
    href: 'https://www.facebook.com/share/1VD1KoDmbe/?mibextid=wwXIfr',
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    href: 'https://instagram.com/vexa.software1',
  },

]

const initialForm = {
  nombre: '',
  correo: '',
  telefono: '',
  mensaje: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [enviando, setEnviando] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target

    setForm((formAnterior) => ({
      ...formAnterior,
      [name]: value,
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    if (!form.nombre || !form.correo || !form.mensaje) {
      setStatus('error')
      return
    }

    setEnviando(true)
    setStatus('idle')

    const formData = new FormData()

    formData.append(
      'access_key',
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    )

    formData.append('name', form.nombre)
    formData.append('email', form.correo)
    formData.append('phone', form.telefono)
    formData.append('message', form.mensaje)

    formData.append(
      'subject',
      `Nueva consulta de ${form.nombre} desde vexaSoftware`
    )

    formData.append('from_name', 'Página web vexaSoftware')

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: formData,
        }
      )

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'No se pudo enviar el mensaje')
      }

      setStatus('sent')
      setForm(initialForm)
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
      setStatus('send-error')
    } finally {
      setEnviando(false)
    }
  }

  return (
    <section id="contacto" className="section-pad relative">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <Reveal>
          <span className="eyebrow">Contacto</span>

          <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl leading-tight">
            Hablemos de tu{' '}
            <span className="gradient-text">próximo sistema</span>.
          </h2>

          <p className="mt-5 text-ink-muted leading-relaxed max-w-md">
            Contanos qué necesitás y te respondemos con una propuesta concreta.
            También podés escribirnos directamente por estos canales:
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-11 h-11 rounded-full glass-panel flex items-center justify-center text-ink-muted hover:text-white hover:border-blue-bright/50 hover:-translate-y-1 transition-all duration-300"
              >
                {social.icon === 'whatsapp' ? (
                  <WhatsAppGlyph className="w-[18px] h-[18px]" />
                ) : (
                  <Icon
                    name={social.icon}
                    className="w-[18px] h-[18px]"
                  />
                )}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            className="glass-panel p-8 space-y-5"
          >
            <div>
              <label
                htmlFor="nombre"
                className="text-xs text-ink-muted font-medium"
              >
                Nombre
              </label>

              <input
                id="nombre"
                name="nombre"
                type="text"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
                className="mt-2 w-full bg-white/[0.03] border border-border rounded-xl px-4 py-3 text-sm placeholder:text-ink-dim focus:border-blue-bright/50 outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="correo"
                className="text-xs text-ink-muted font-medium"
              >
                Correo
              </label>

              <input
                id="correo"
                name="correo"
                type="email"
                value={form.correo}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
                className="mt-2 w-full bg-white/[0.03] border border-border rounded-xl px-4 py-3 text-sm placeholder:text-ink-dim focus:border-blue-bright/50 outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="telefono"
                className="text-xs text-ink-muted font-medium"
              >
                Teléfono
              </label>

              <input
                id="telefono"
                name="telefono"
                type="tel"
                value={form.telefono}
                onChange={handleChange}
                placeholder="+54 9 381 123 4567"
                className="mt-2 w-full bg-white/[0.03] border border-border rounded-xl px-4 py-3 text-sm placeholder:text-ink-dim focus:border-blue-bright/50 outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="mensaje"
                className="text-xs text-ink-muted font-medium"
              >
                Mensaje
              </label>

              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                value={form.mensaje}
                onChange={handleChange}
                placeholder="Contanos sobre tu proyecto"
                required
                className="mt-2 w-full bg-white/[0.03] border border-border rounded-xl px-4 py-3 text-sm placeholder:text-ink-dim focus:border-blue-bright/50 outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={enviando}
              className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {enviando ? 'Enviando...' : 'Enviar mensaje'}
            </button>

            {status === 'sent' && (
              <p className="text-sm text-cyan flex items-center gap-2">
                <Icon name="check" className="w-4 h-4" />
                Mensaje enviado. Te respondemos a la brevedad.
              </p>
            )}

            {status === 'error' && (
              <p className="text-sm text-red-400">
                Completá nombre, correo y mensaje antes de enviar.
              </p>
            )}

            {status === 'send-error' && (
              <p className="text-sm text-red-400">
                No se pudo enviar el mensaje. Intentá nuevamente.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}