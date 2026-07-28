import { useEffect, useState } from 'react'
import { deployLog } from '../data/content'

/**
 * Panel tipo terminal que "tipea" un log de build/deploy en loop.
 * Elemento firma del hero: encarna "construimos y entregamos software" en vivo.
 */
export default function DeployTerminal() {
  const [lines, setLines] = useState([])
  const [current, setCurrent] = useState('')

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setLines(deployLog)
      return
    }

    let lineIndex = 0
    let charIndex = 0
    let timeout

    function typeStep() {
      if (lineIndex >= deployLog.length) {
        timeout = setTimeout(() => {
          setLines([])
          setCurrent('')
          lineIndex = 0
          charIndex = 0
          typeStep()
        }, 2200)
        return
      }

      const line = deployLog[lineIndex]
      if (charIndex <= line.length) {
        setCurrent(line.slice(0, charIndex))
        charIndex++
        timeout = setTimeout(typeStep, 22)
      } else {
        setLines((prev) => [...prev, line])
        setCurrent('')
        lineIndex++
        charIndex = 0
        timeout = setTimeout(typeStep, 260)
      }
    }

    timeout = setTimeout(typeStep, 500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="glass-panel w-full max-w-md overflow-hidden font-mono text-[13px] leading-relaxed">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-2 text-ink-dim text-xs">vexa — deploy</span>
      </div>
      <div className="px-4 py-4 min-h-[168px]">
        {lines.map((line, i) => (
          <div key={i} className={line.startsWith('✓') ? 'text-cyan/90' : line.startsWith('→') ? 'text-blue-bright font-medium' : 'text-ink-muted'}>
            {line}
          </div>
        ))}
        {current && (
          <div className="text-ink-muted">
            {current}
            <span className="inline-block w-2 h-3.5 bg-blue-bright ml-0.5 animate-blink align-middle" />
          </div>
        )}
      </div>
    </div>
  )
}
