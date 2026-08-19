// archivo: frontend/src/components/ui/NivelCard.jsx
import { motion } from 'framer-motion'
import WhatsAppButton from './WhatsAppButton.jsx'
import './NivelCard.css'

export default function NivelCard({ nivel, destacado = false, delay = 0 }) {
  return (
    <motion.article
      className={`nivel-card ${destacado ? 'nivel-card--destacado' : ''}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
    >
      {destacado && <span className="nivel-card__badge">Más completo</span>}
      <h3>{nivel.nombre}</h3>
      <p className="nivel-card__resumen">{nivel.resumen}</p>

      <ul className="nivel-card__bullets">
        {nivel.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>

      <WhatsAppButton mensaje={nivel.mensajeWhatsApp} texto="Preguntar por este nivel" />
    </motion.article>
  )
}