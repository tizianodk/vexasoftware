import { useScrollReveal } from '../hooks/useScrollReveal'

/**
 * Envuelve contenido y lo revela con fade + slide al entrar en viewport.
 * delay en ms, para escalonar listas de tarjetas.
 */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const { ref, visible } = useScrollReveal()

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
