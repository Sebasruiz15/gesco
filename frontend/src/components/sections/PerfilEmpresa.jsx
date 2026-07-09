// archivo: frontend/src/components/sections/PerfilEmpresa.jsx
import { motion } from 'framer-motion'
import SignalArc from '../ui/SignalArc.jsx'
import './PerfilEmpresa.css'

export default function PerfilEmpresa() {
  return (
    <section className="perfil" id="perfil">
      <div className="perfil__inner container">
        <motion.div
          className="perfil__signal"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <SignalArc size={90} variant="pulse" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="eyebrow">Quiénes somos</p>
          <h2>Una firma que transmite confianza, no solo consultoría.</h2>
          <p className="perfil__texto">
            Somos una firma especializada y comprometida con nuestros clientes; brindamos un
            portafolio integral con productos y servicios honestos y confiables. Nuestro equipo
            tiene amplia experiencia desarrollando estrategias para los niveles de gestión
            comercial, técnica y financiera, con un enfoque de mejoramiento continuo y auditorías
            internas que optimizan procesos, recursos y calidad del servicio.
          </p>
        </motion.div>
      </div>
    </section>
  )
}