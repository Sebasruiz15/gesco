// archivo: frontend/src/components/ui/ParticleNetwork.jsx
import { useEffect, useRef } from 'react'
import './ParticleNetwork.css'

/**
 * Fondo animado de puntos conectados por líneas, tipo "red de datos".
 * Usa Canvas en vez de SVG/DOM porque vamos a redibujar decenas de
 * elementos en cada frame (60 veces por segundo) — el Canvas es mucho
 * más eficiente para esto que animar cientos de nodos DOM con React.
 */
export default function ParticleNetwork({
  particleColor = '#1f4e85',
  lineColor = 'rgba(31, 78, 133, 0.15)',
  density = 0.00012,
  maxSpeed = 0.3,
  connectionDistance = 110,
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let particles = []
    let width, height

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect()
      width = canvas.width = rect.width
      height = canvas.height = rect.height
      const cantidad = Math.max(12, Math.floor(width * height * density))
      particles = Array.from({ length: cantidad }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * maxSpeed,
        vy: (Math.random() - 0.5) * maxSpeed,
      }))
    }

    function step() {
      ctx.clearRect(0, 0, width, height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2)
        ctx.fillStyle = particleColor
        ctx.fill()
      })

      // Conectar cada par de puntos que estén lo suficientemente cerca
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < connectionDistance) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = lineColor
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(step)
    }

    resize()
    step()
    window.addEventListener('resize', resize)

    // Limpieza: crítico para no dejar el loop de animación corriendo
    // en segundo plano si el componente se desmonta (por ejemplo, al
    // navegar a otra ruta con React Router).
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resize)
    }
  }, [particleColor, lineColor, density, maxSpeed, connectionDistance])

  return <canvas ref={canvasRef} className="particle-network" aria-hidden="true" />
}