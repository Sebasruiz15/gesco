// archivo: frontend/src/components/sections/Recursos.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SignalArc from '../ui/SignalArc.jsx'
import ParticleNetwork from '../ui/ParticleNetwork.jsx'
import { ENTES_REGULATORIOS } from '../../data/entesRegulatorios.js'
import './Recursos.css'

export default function Recursos() {
  return (
    <section className="recursos">
      <ParticleNetwork
        particleColor="rgba(31, 78, 133, 0.45)"
        lineColor="rgba(31, 78, 133, 0.1)"
        density={0.00009}
        maxSpeed={0.2}
        connectionDistance={120}
      />

      <div className="container recursos__content">
        <motion.div
          className="recursos__badge"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          <span className="recursos__badge-dot" />
          {ENTES_REGULATORIOS.length} ENTES REGULATORIOS · MONITOREO ACTIVO
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Tips de GESCO para evitar sanciones ante cada ente regulatorio
          <span className="section-underline" />
        </motion.h2>

        <motion.p
          className="recursos__lead"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Consejos prácticos frente a RUTIC, MinTIC, CRC, SIC y ANE — resumidos aquí, explicados a
          fondo en nuestra guía completa.
        </motion.p>

        <div className="recursos__grid">
          {ENTES_REGULATORIOS.map((ente, i) => (
            <motion.article
              key={ente.slug}
              className="recursos__teaser"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="recursos__teaser-icon">
                <SignalArc size={30} variant="static" />
              </div>
              <h3>{ente.nombre}</h3>
              <p>{ente.resumen}</p>
              <span className="recursos__teaser-arrow">→</span>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/tips-regulatorios" className="recursos__cta">
            Ver todos los tips regulatorios
            <span className="recursos__cta-arrow">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}