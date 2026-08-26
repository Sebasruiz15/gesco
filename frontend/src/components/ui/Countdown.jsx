// archivo: frontend/src/components/ui/Countdown.jsx
import { useEffect, useState } from 'react'
import './Countdown.css'

// Fin de la promoción: 28 de agosto de 2026, 23:59:59 (hora de Colombia)
const FECHA_LIMITE = new Date('2026-08-28T23:59:59-05:00')

function calcularTiempoRestante() {
  const diferencia = FECHA_LIMITE.getTime() - Date.now()
  if (diferencia <= 0) return null

  return {
    // Math.ceil (redondear hacia arriba) en vez de floor: mientras
    // quede cualquier fracción del día, sigue contando como un día
    // completo — así "3 días" se mantiene visible durante toda la
    // ventana de la feria, en vez de bajar a "2" a mitad del primer día.
    dias: Math.ceil(diferencia / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diferencia / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diferencia / (1000 * 60)) % 60),
    segundos: Math.floor((diferencia / 1000) % 60),
  }
}

export default function Countdown() {
  const [tiempo, setTiempo] = useState(calcularTiempoRestante())

  useEffect(() => {
    const intervalo = setInterval(() => setTiempo(calcularTiempoRestante()), 1000)
    return () => clearInterval(intervalo)
  }, [])

  if (!tiempo) {
    return <div className="countdown countdown--finalizado">La promoción ha finalizado</div>
  }

  const UNIDADES = [
    { valor: tiempo.dias, etiqueta: 'Días' },
    { valor: tiempo.horas, etiqueta: 'Horas' },
    { valor: tiempo.minutos, etiqueta: 'Min' },
    { valor: tiempo.segundos, etiqueta: 'Seg' },
  ]

  return (
    <div className="countdown-wrapper">
      <p className="countdown__titulo">La promoción termina en</p>
      <div className="countdown">
        {UNIDADES.map((u) => (
          <div key={u.etiqueta} className="countdown__bloque">
            <span className="countdown__valor">{String(u.valor).padStart(2, '0')}</span>
            <span className="countdown__etiqueta">{u.etiqueta}</span>
          </div>
        ))}
      </div>
    </div>
  )
}