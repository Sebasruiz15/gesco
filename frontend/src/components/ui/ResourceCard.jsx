// archivo: frontend/src/components/ui/ResourceCard.jsx
import { motion } from 'framer-motion'
import SignalArc from './SignalArc.jsx'
import './ResourceCard.css'

export default function ResourceCard({ etiqueta, titulo, resumen, href, delay = 0 }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="resource-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="resource-card__top">
        <SignalArc size={26} variant="static" />
        <span className="resource-card__etiqueta">{etiqueta}</span>
      </div>
      <h3>{titulo}</h3>
      <p>{resumen}</p>
      <span className="resource-card__link">Ver fuente oficial →</span>
    </motion.a>
  )
}