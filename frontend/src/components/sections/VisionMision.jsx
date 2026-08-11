// archivo: frontend/src/components/sections/VisionMision.jsx
import { motion } from 'framer-motion'
import './VisionMision.css'

export default function VisionMision() {
  return (
    <section className="vision-mision">
      <div className="container vision-mision__grid">
        <motion.article
          className="vm-card"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <span className="vm-card__badge">2030</span>
          <h3>Visión</h3>
          <p>
            Ser una firma de referencia en consultoría para el sector de las telecomunicaciones en
            Colombia, reconocida por convertir el cumplimiento regulatorio y la operación
            empresarial en procesos simples, automatizados y rentables — para toda empresa que
            conecta al país, sin importar su tamaño.
          </p>
        </motion.article>

        <motion.article
          className="vm-card vm-card--signal"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="vm-card__badge">Hoy</span>
          <h3>Misión</h3>
          <p>
            Acompañar a los prestadores de servicios de telecomunicaciones a operar con
            tranquilidad, combinando consultoría especializada, inteligencia artificial y criterio
            experto — para que cada operador se dedique a lo que sabe hacer: conectar a su
            comunidad.
          </p>
        </motion.article>
      </div>
    </section>
  )
}