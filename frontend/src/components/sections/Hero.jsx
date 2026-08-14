import { motion } from 'framer-motion'
import SignalArc from '../ui/SignalArc.jsx'
import './Hero.css'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__field" aria-hidden="true">

        <SignalArc size={520} variant="pulse" className="hero__arc" strokeWidth={2.5} dotRadius={2.5} />
      </div>

      <div className="container hero__content">
        <motion.span
          className="eyebrow eyebrow--light"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Consultoría especializada en ISP&apos;s
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Mantenemos su operación
          <br />
          en la frecuencia correcta.
        </motion.h1>

        <motion.p
          className="hero__lead"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Acompañamos a Proveedores de Servicios de Telecomunicaciones en su
          cumplimiento ante el MinTIC, la CRC y la SIC, la estandarización de
          procesos operativos y la ejecución contable bajo NIIF — con
          consultoría honesta y cercana.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#contacto" className="btn btn-primary">
            Agendar una consultoría
          </a>
          <a href="#servicios-isp" className="btn btn-outline">
            Ver servicios
          </a>
        </motion.div>
      </div>
    </section>
  )
}
