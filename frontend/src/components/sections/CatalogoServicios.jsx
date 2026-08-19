// archivo: frontend/src/components/sections/CatalogoServicios.jsx
import { motion } from 'framer-motion'
import ServicioProyectoCard from '../ui/ServicioProyectoCard.jsx'
import NivelCard from '../ui/NivelCard.jsx'
import ParticleNetwork from '../ui/ParticleNetwork.jsx'
import { SERVICIOS_PROYECTO, NIVELES_CONTINUIDAD } from '../../data/servicios.js'
import './CatalogoServicios.css'

export default function CatalogoServicios() {
  return (
    <>
      <section className="catalogo">
        <div className="container">
          <p className="eyebrow">Cómo trabajamos con usted</p>
          <h2>
            Diagnósticos puntuales, para el problema que tiene hoy
            <span className="section-underline" />
          </h2>
          <p className="catalogo__lead">
            Cada diagnóstico tiene alcance cerrado y entregable claro — sin sorpresas ni trabajo
            abierto. Escríbanos por WhatsApp para conocer el alcance exacto para su PRST.
          </p>

          <div className="catalogo__grid">
            {SERVICIOS_PROYECTO.map((servicio, i) => (
              <ServicioProyectoCard key={servicio.slug} servicio={servicio} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <section className="catalogo catalogo--niveles">
        <ParticleNetwork
          particleColor="rgba(244, 228, 9, 0.5)"
          lineColor="rgba(244, 228, 9, 0.1)"
          density={0.00008}
          maxSpeed={0.15}
          connectionDistance={130}
        />

        <div className="container catalogo__niveles-content">
          <p className="eyebrow eyebrow--light">Acompañamiento continuo</p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            style={{ color: '#fff' }}
          >
            Tres niveles para no volver a improvisar
            <span className="section-underline" />
          </motion.h2>
          <p className="catalogo__lead catalogo__lead--light">
            Contrato de acompañamiento permanente: usted opera, nosotros vigilamos que su PRST
            siga en regla mes a mes.
          </p>

          <div className="catalogo__niveles-grid">
            <NivelCard nivel={NIVELES_CONTINUIDAD[0]} delay={0} />
            <NivelCard nivel={NIVELES_CONTINUIDAD[1]} destacado delay={0.1} />
            <NivelCard nivel={NIVELES_CONTINUIDAD[2]} delay={0.2} />
          </div>
        </div>
      </section>
    </>
  )
}