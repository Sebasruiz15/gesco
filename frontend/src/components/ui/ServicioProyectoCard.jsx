// archivo: frontend/src/components/ui/ServicioProyectoCard.jsx
import { motion } from 'framer-motion'
import SignalArc from './SignalArc.jsx'
import WhatsAppButton from './WhatsAppButton.jsx'
import './ServicioProyectoCard.css'

export default function ServicioProyectoCard({ servicio, delay = 0 }) {
  return (
    <motion.article
      className="servicio-proyecto"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay }}
    >
      <span className="servicio-proyecto__etapa">{servicio.etapa}</span>

      <div className="servicio-proyecto__header">
        <SignalArc size={32} variant="static" />
        <div>
          <h3>{servicio.nombre}</h3>
          <p className="servicio-proyecto__gancho">{servicio.gancho}</p>
        </div>
      </div>

      <p className="servicio-proyecto__resumen">{servicio.resumen}</p>

      <ul className="servicio-proyecto__bullets">
        {servicio.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>

      <WhatsAppButton mensaje={servicio.mensajeWhatsApp} texto="Consultar disponibilidad" />
    </motion.article>
  )
}