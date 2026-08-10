// archivo: frontend/src/components/sections/Testimonios.jsx
import { motion } from 'framer-motion'
import Avatar from '../ui/Avatar.jsx'
import './Testimonios.css'

// TODO: nombres y empresas inventados temporalmente — reemplazar cuando
// tengamos testimonios reales de clientes.
const TESTIMONIOS = [
  {
    nombre: 'Carlos Restrepo',
    cargo: 'Gerente General, NetLink Antioquia',
    texto:
      'GESCO nos ayudó a ponernos al día con el RUTIC y el RRIP en tiempo récord. Antes perdíamos días enteros armando los reportes; ahora es un proceso claro y ordenado.',
  },
  {
    nombre: 'Diana Morales',
    cargo: 'Directora Administrativa, ConectaMás ISP',
    texto:
      'La estandarización de nuestros procesos contables bajo NIIF cambió por completo cómo tomamos decisiones financieras. Consultoría honesta, como dicen ellos mismos.',
  },
  {
    nombre: 'Andrés Gómez',
    cargo: 'Fundador, Redes del Valle',
    texto:
      'Como ISP pequeño, no teníamos claridad sobre nuestras obligaciones ante el MinTIC. GESCO nos guió paso a paso sin tecnicismos innecesarios.',
  },
]

export default function Testimonios() {
  return (
    <section className="testimonios">
      <div className="container">
        <p className="eyebrow">Lo que dicen nuestros clientes</p>
        <h2>ISP's que ya operan en la frecuencia correcta</h2>

        <div className="testimonios__grid">
          {TESTIMONIOS.map((testimonio, i) => (
            <motion.article
              key={testimonio.nombre}
              className="testimonio-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="testimonio-card__texto">"{testimonio.texto}"</p>
              <div className="testimonio-card__autor">
                <Avatar nombre={testimonio.nombre} />
                <div>
                  <p className="testimonio-card__nombre">{testimonio.nombre}</p>
                  <p className="testimonio-card__cargo">{testimonio.cargo}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}