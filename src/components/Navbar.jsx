import { useEffect, useState } from 'react'
import Icon from './Icon'

const links = [
  { href: '#sobre-nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#planes', label: 'Planes' },
  { href: '#productos', label: 'Productos' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-border' : 'bg-transparent'
        }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-10 lg:px-16 py-4">
        <a href="#inicio" className="flex items-center">
          <img src="/logo.png" alt="VEXA SOFTWARE" style={{ height: '110px', width: '110px' }} />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-ink-muted hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="btn-primary !px-5 !py-2.5 !text-xs">
            Solicitar presupuesto
          </a>
        </div>

        <button
          className="md:hidden text-ink p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          <Icon name={open ? 'close' : 'menu'} className="w-6 h-6" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-border px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-ink-muted hover:text-white text-sm">
              {l.label}
            </a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)} className="btn-primary !text-xs justify-center">
            Solicitar presupuesto
          </a>
        </div>
      )}
    </header>
  )
}
