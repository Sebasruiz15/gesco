// archivo: frontend/src/pages/TipsRegulatorios.jsx
import { motion } from 'framer-motion'
import SignalArc from '../components/ui/SignalArc.jsx'
import { ENTES_REGULATORIOS } from '../data/entesRegulatorios.js'
import './TipsRegulatorios.css'

export default function TipsRegulatorios() {
  return (
    <section className="tips-regulatorios">
      <div className="container">
        <p className="eyebrow">Actualidad regulatoria</p>
        <h2>Tips de GESCO para evitar sanciones ante cada ente regulatorio</h2>
        <p className="tips-regulatorios__lead">
          Consejos prácticos basados en la normativa vigente, pensados para operadores que no
          quieren enterarse de una obligación cuando ya es demasiado tarde.
        </p>

        <div className="tips-regulatorios__grid">
          {ENTES_REGULATORIOS.map((ente, i) => (
            <motion.article
              key={ente.slug}
              className="ente-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            >
              <div className="ente-card__header">
                <SignalArc size={34} variant="static" />
                <div>
                  <h3>{ente.nombre}</h3>
                  <p className="ente-card__resumen">{ente.resumen}</p>
                </div>
              </div>

              <ul className="ente-card__tips">
                {ente.tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>

              <a href={ente.href} target="_blank" rel="noopener noreferrer" className="ente-card__link">
                Ver fuente oficial →
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}