// archivo: frontend/src/components/ui/CountUp.jsx
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * Anima un número subiendo desde 0 hasta "hasta" cuando el elemento
 * entra en el viewport. Usamos useInView de Framer Motion (detecta
 * visibilidad) combinado con un intervalo simple que actualiza el
 * estado — no hace falta nada más sofisticado para un contador.
 */
export default function CountUp({ hasta, duracion = 1500, sufijo = '' }) {
  const ref = useRef(null)
  const enVista = useInView(ref, { once: true, amount: 0.6 })
  const [valor, setValor] = useState(0)

  useEffect(() => {
    if (!enVista) return

    const inicio = performance.now()

    function tick(ahora) {
      const progreso = Math.min((ahora - inicio) / duracion, 1)
      setValor(Math.floor(progreso * hasta))
      if (progreso < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [enVista, hasta, duracion])

  return (
    <span ref={ref}>
      {valor}
      {sufijo}
    </span>
  )
}