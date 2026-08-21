// archivo: frontend/src/components/sections/PerfilEmpresa.jsx
import { motion } from 'framer-motion'
import CountUp from '../ui/CountUp.jsx'
import './PerfilEmpresa.css'

const CIFRAS = [
  { texto: 'Nacional', etiqueta: 'Operamos en toda Colombia' },
  { texto: 'Decenas', etiqueta: 'De operadores de internet y TV confían en GESCO' },
  { valor: 5, etiqueta: 'Entes regulatorios dominados: MinTIC · CRC · ANE · SIC · RUTIC' },
  { valor: 100, sufijo: '%', etiqueta: 'Información verificada en fuente oficial' },
]

export default function PerfilEmpresa() {
  return (
    <section className="perfil" id="perfil">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Quiénes somos</p>
          <h2>Una firma con trayectoria comprobada en el sector TIC</h2>
          <p className="perfil__texto">
            GESCO nació como firma contable y administrativa, y hoy es una Empresa consultora
            especializada en telecomunicaciones con trayectoria comprobada: decenas de operadores
            confían en nosotros sus obligaciones regulatorias, contables y financieras.
          </p>
        </motion.div>

        <div className="perfil__cifras">
          {CIFRAS.map((cifra, i) => (
            <motion.div
              key={cifra.etiqueta}
              className="cifra-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="cifra-card__valor">
                {cifra.texto ?? <CountUp hasta={cifra.valor} sufijo={cifra.sufijo ?? ''} />}
              </p>
              <p className="cifra-card__etiqueta">{cifra.etiqueta}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}