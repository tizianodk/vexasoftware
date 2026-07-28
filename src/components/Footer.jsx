import Icon from './Icon'

const socials = [
  { name: 'WhatsApp', icon: 'whatsapp', href: 'https://wa.me/5493814794887' },
  { name: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/share/1VD1KoDmbe/?mibextid=wwXIfr' },
  { name: 'Instagram', icon: 'instagram', href: 'https://instagram.com/vexa.software1' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-border px-6 md:px-10 lg:px-16 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#inicio" className="flex items-center">
          <img src="/logo.png" alt="VEXA SOFTWARE" style={{ width: '100px', height: '100px' }} />
        </a>

        <div className="flex gap-3">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="rounded-full glass flex items-center justify-center text-ink-muted hover:text-white transition-colors"
              style={{ width: '40px', height: '40px' }}
            >
              <Icon name={s.icon} className="w-8 h-4" />
            </a>
          ))}
        </div>

        <p className="text-xs text-ink-dim">© 2026 VEXA SOFTWARE. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
