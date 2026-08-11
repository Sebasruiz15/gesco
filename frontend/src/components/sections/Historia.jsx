// archivo: frontend/src/components/sections/Historia.jsx
import { motion } from 'framer-motion'
import ParticleNetwork from '../ui/ParticleNetwork.jsx'
import './Historia.css'

const HITOS = [
  {
    etapa: 'El origen',
    titulo: 'Rigor en los números',
    texto:
      'GESCO nació hace más de una década como una firma de servicios contables y administrativos, construida sobre un principio que sigue vigente: rigor en los números, claridad en la comunicación y cumplimiento en los plazos.',
  },
  {
    etapa: 'El punto de inflexión',
    titulo: 'Donde otros vieron un trámite, nosotros vimos una especialidad',
    texto:
      'Al atender la contabilidad de un proveedor de internet, identificamos una necesidad estructural del sector: los operadores enfrentaban un marco regulatorio exigente — MinTIC, CRC, ANE, SIC — sin acompañamiento especializado a su medida. Invertimos años en dominar ese marco norma por norma.',
  },
  {
    etapa: 'Hoy',
    titulo: 'Experiencia de años, eficiencia de la IA',
    texto:
      'Incorporamos inteligencia artificial a nuestra operación para entregar más rápido, con trazabilidad completa, sin sacrificar lo que ninguna tecnología reemplaza: el criterio experto que revisa, decide y firma.',
  },
]

export default function Historia() {
  return (
    <section className="historia">
      <div className="historia__bg" aria-hidden="true" />
      <ParticleNetwork
        particleColor="rgba(244, 228, 9, 0.5)"
        lineColor="rgba(244, 228, 9, 0.08)"
        density={0.00008}
        maxSpeed={0.15}
        connectionDistance={130}
      />

      <div className="container historia__content">
        <p className="eyebrow eyebrow--light">Nuestra historia</p>
        <h2>
          Más de diez años conectando criterio y confianza
          <motion.span
            className="section-underline"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </h2>

        <div className="historia__timeline">
          {HITOS.map((hito, i) => (
            <motion.div
              key={hito.etapa}
              className="historia__hito"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="historia__marcador">
                <span className="historia__punto" />
                {i < HITOS.length - 1 && <span className="historia__linea" />}
              </div>
              <div className="historia__contenido">
                <span className="historia__etapa">{hito.etapa}</span>
                <h3>{hito.titulo}</h3>
                <p>{hito.texto}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          className="historia__cita"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p>
            "El trabajo bien hecho trae al siguiente cliente. Esa ha sido nuestra mejor estrategia
            comercial durante más de diez años — y la razón por la que quienes llegan a GESCO, se
            quedan."
          </p>
          <footer>— Ing. Camilo Baena Vélez, Fundador</footer>
        </motion.blockquote>
      </div>
    </section>
  )
}