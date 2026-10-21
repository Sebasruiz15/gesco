// archivo: frontend/src/components/sections/PortafolioMarketing.jsx
import { motion } from 'framer-motion'
import SignalArc from '../ui/SignalArc.jsx'
import './PortafolioMarketing.css'

export default function PortafolioMarketing() {
  return (
    <section className="portafolio-marketing" id="marketing-digital">
      <div className="container">
        <p className="eyebrow eyebrow--light">Marketing digital</p>
        <motion.div
          className="portafolio-marketing__card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <SignalArc size={40} variant="pulse" />
          <h3>Próximamente</h3>
          <p>
            Estamos estructurando nuestra línea de marketing digital enfocada en PRST — SEO
            regulatorio, presencia en redes y captación de usuarios. Muy pronto la verá aquí.
          </p>
        </motion.div>
      </div>
    </section>
  )
}