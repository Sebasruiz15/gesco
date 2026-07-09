// archivo: frontend/src/components/ui/ServicioCard.jsx
import { motion } from 'framer-motion'
import SignalArc from './SignalArc.jsx'
import './ServicioCard.css'

export default function ServicioCard({ titulo, items, delay = 0 }) {
  return (
    <motion.article
      className="servicio-card"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
    >
      <SignalArc size={38} variant="static" className="servicio-card__icon" />
      <h3>{titulo}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </motion.article>
  )
}