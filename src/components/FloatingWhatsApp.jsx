import { useState } from 'react'
import WhatsAppGlyph from './WhatsAppGlyph'
import { whatsappNumber, whatsappMessage } from '../data/content'

/**
 * Botón flotante fijo, visible en todas las secciones/páginas.
 * Anima con un anillo de pulso sutil + respiración de escala para llamar
 * la atención sin resultar invasivo. Respeta prefers-reduced-motion vía Tailwind.
 */
export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false)

  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-[60] flex items-center gap-3">
      <span
        className={`hidden sm:inline-block glass-panel px-4 py-2 text-sm font-medium text-ink whitespace-nowrap transition-all duration-200 ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        Escribinos por WhatsApp
      </span>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp con VEXA SOFTWARE"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full motion-safe:animate-wa-breathe"
      >
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] motion-safe:animate-wa-ring"
          aria-hidden="true"
        />
        <span
          className="relative w-full h-full rounded-full flex items-center justify-center text-white shadow-[0_8px_30px_-6px_rgba(37,211,102,0.55)] transition-transform duration-300 hover:scale-105"
          style={{ backgroundImage: 'linear-gradient(135deg, #25D366, #128C7E)' }}
        >
          <WhatsAppGlyph className="w-6 h-6 sm:w-7 sm:h-7" />
        </span>
      </a>
    </div>
  )
}
