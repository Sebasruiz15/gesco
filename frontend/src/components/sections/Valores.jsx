// archivo: frontend/src/components/sections/Valores.jsx
import { motion } from 'framer-motion'
import SignalArc from '../ui/SignalArc.jsx'
import './Valores.css'

const VALORES = [
  {
    titulo: 'Rigor verificable',
    texto:
      'No afirmamos nada que no podamos sustentar en la fuente oficial. Cada cifra y cada norma que entregamos ha sido verificada.',
  },

  {
    titulo: 'Integralidad',
    texto:
      'Las necesidades de un PRST no llegan por separado, y las soluciones tampoco deberían. Buscamos ser un solo aliado para toda la operación: lo regulatorio, lo administrativo, lo contable y lo operativo se resuelven en un mismo lugar, con una visión completa del negocio.',
  },
  {
    titulo: 'Honestidad comercial',
    texto:
      'No prometemos resultados que no dependan de nosotros. Si un trámite no le conviene al cliente, se lo decimos aunque perdamos la venta.',
  },
  {
    titulo: 'Cercanía',
    texto:
      'Somos una empresa familiar y hablamos el idioma de nuestros clientes, sin tecnicismos innecesarios ni distinciones por tamaño.',
  },
  {
    titulo: 'Innovación con criterio',
    texto:
      'La tecnología prepara; el experto revisa, decide y responde. Usamos IA para que el trabajo repetitivo deje de costar tiempo y errores.',
  },
  {
    titulo: 'Calidad como hábito',
    texto:
      'Procesos documentados, control de versiones y mejora continua. La calidad es la forma en que se entrega cada informe, no un certificado.',
  },
  {
    titulo: 'Compromiso con el sector',
    texto:
      'Creemos en los operadores de telecomunicaciones como protagonistas de la conexión de Colombia, del municipio más pequeño a la ciudad más grande.',
  },
]

export default function Valores() {
  return (
    <section className="valores">
      <div className="container">
        <p className="eyebrow">Lo que nos define</p>
        <h2>Valores corporativos</h2>

        <div className="valores__grid">
          {VALORES.map((valor, i) => (
            <motion.article
              key={valor.titulo}
              className="valor-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            >
              <SignalArc size={30} variant="static" />
              <h3>{valor.titulo}</h3>
              <p>{valor.texto}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}