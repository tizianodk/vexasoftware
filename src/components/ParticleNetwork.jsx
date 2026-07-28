import { useEffect, useRef } from 'react'

/**
 * Fondo animado de nodos conectados, evocando una red / circuito de software.
 * Se pausa si el usuario prefiere motion reducido y se adapta al tamaño del contenedor.
 */
export default function ParticleNetwork({ className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width, height, nodes, animationId
    const NODE_COUNT_DENSITY = 18000 // px² por nodo
    const LINK_DISTANCE = 130

    function resize() {
      const parent = canvas.parentElement
      width = canvas.width = parent.clientWidth
      height = canvas.height = parent.clientHeight
      const count = Math.min(90, Math.max(30, Math.floor((width * height) / NODE_COUNT_DENSITY)))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }))
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(91, 140, 255, ${0.14 * (1 - dist / LINK_DISTANCE)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        ctx.fillStyle = 'rgba(167, 139, 250, 0.55)'
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)

    if (!prefersReducedMotion) {
      draw()
    } else {
      // dibuja un frame estático
      draw()
      cancelAnimationFrame(animationId)
    }

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className={`pointer-events-none ${className}`} aria-hidden="true" />
}
