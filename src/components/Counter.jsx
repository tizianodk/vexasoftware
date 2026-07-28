import { useCounter } from '../hooks/useCounter'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Counter({ value, suffix, label }) {
  const { ref, visible } = useScrollReveal()
  const count = useCounter(value, visible)

  return (
    <div ref={ref}>
      <div className="font-display font-bold text-3xl md:text-4xl gradient-text">
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-ink-dim">{label}</div>
    </div>
  )
}
