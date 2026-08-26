// archivo: frontend/src/pages/Feria.jsx
import { motion } from 'framer-motion'
import { useFeriaForm } from '../hooks/useFeriaForm.js'
import Countdown from '../components/ui/Countdown.jsx'
import ParticleNetwork from '../components/ui/ParticleNetwork.jsx'
import SignalArc from '../components/ui/SignalArc.jsx'
import './Feria.css'

const BENEFICIOS = [
  'Sesión personalizada de 45 minutos con un consultor',
  'Revisión de alivios por umbral y municipios rurales',
  'Estado de su exoneración FUTIC (garantía, CMIC, riesgo societario)',
  'Alerta temprana de licencias de contenido, si tiene TV',
  'Informe semáforo entregado en máximo 48 horas',
]

export default function Feria() {
  const { valores, errores, estado, mensajeServidor, disponibles, handleChange, handleSubmit } = useFeriaForm()

  const agotado = disponibles === 0
  const cargando = disponibles === null

  return (
    <section className="feria">
      <ParticleNetwork
        particleColor="rgba(244, 228, 9, 0.5)"
        lineColor="rgba(244, 228, 9, 0.1)"
        density={0.00009}
        maxSpeed={0.15}
        connectionDistance={120}
      />

      <div className="container feria__content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="feria__badge">
            <SignalArc size={22} variant="pulse" />
            Promoción exclusiva de feria — 26, 27 y 28 de agosto
          </div>

          <h1 className="feria__titulo">
            Diagnóstico Express <span>Bajo costo</span>
          </h1>
          <p className="feria__lead">
            Su situación regulatoria real, en 45 minutos, bajo costo. Solo durante la feria y
            mientras haya cupos disponibles.
          </p>

          <Countdown />

          <div className="feria__cupos">
            {cargando ? (
              <span>Cargando disponibilidad…</span>
            ) : agotado ? (
              <span className="feria__cupos-agotado">Cupos agotados</span>
            ) : (
              <span>
                <strong>{disponibles}</strong> de 20 cupos disponibles
              </span>
            )}
          </div>

          <ul className="feria__beneficios">
            {BENEFICIOS.map((beneficio) => (
              <li key={beneficio}>{beneficio}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="feria__form-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {agotado ? (
            <div className="feria__form feria__form--agotado">
              <h3>Los cupos se agotaron</h3>
              <p>
                Gracias por el interés — escríbanos por WhatsApp y le avisamos si se libera un
                cupo, o le contamos sobre nuestros demás diagnósticos.
              </p>
              <a 
                href="https://wa.me/573145178003?text=Hola,%20quiero%20saber%20si%20hay%20cupo%20disponible%20para%20el%20Diagn%C3%B3stico%20Express."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Escribir por WhatsApp
              </a>
            </div>
          ) : (
            <form className="feria__form" onSubmit={handleSubmit} noValidate>
              <h3>Reserva tu cupo</h3>

              <label htmlFor="nombre">Nombre</label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                value={valores.nombre}
                onChange={handleChange}
                aria-invalid={Boolean(errores.nombre)}
              />
              {errores.nombre && <span className="feria__error">{errores.nombre}</span>}

              <label htmlFor="telefono">Teléfono</label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                placeholder="3001234567"
                value={valores.telefono}
                onChange={handleChange}
                aria-invalid={Boolean(errores.telefono)}
              />
              {errores.telefono && <span className="feria__error">{errores.telefono}</span>}

              <label htmlFor="correo">Correo</label>
              <input
                id="correo"
                name="correo"
                type="email"
                value={valores.correo}
                onChange={handleChange}
                aria-invalid={Boolean(errores.correo)}
              />
              {errores.correo && <span className="feria__error">{errores.correo}</span>}

              <label htmlFor="municipio">Municipio donde opera</label>
              <input
                id="municipio"
                name="municipio"
                type="text"
                value={valores.municipio}
                onChange={handleChange}
                aria-invalid={Boolean(errores.municipio)}
              />
              {errores.municipio && <span className="feria__error">{errores.municipio}</span>}

              <label htmlFor="tipoServicio">¿Qué tipo de servicio prestas?</label>
              <textarea
                id="tipoServicio"
                name="tipoServicio"
                rows={3}
                placeholder="Ej: Internet residencial en zona rural, televisión por cable, ambos..."
                value={valores.tipoServicio}
                onChange={handleChange}
                aria-invalid={Boolean(errores.tipoServicio)}
              />
              {errores.tipoServicio && <span className="feria__error">{errores.tipoServicio}</span>}

              <button type="submit" className="btn btn-primary" disabled={estado === 'enviando'}>
                {estado === 'enviando' ? 'Reservando…' : 'Reservar mi cupo'}
              </button>

              {estado === 'exito' && (
                <p className="feria__feedback feria__feedback--exito" role="status">
                  ¡Cupo reservado! Le contactaremos para coordinar el horario.
                </p>
              )}
              {estado === 'error' && (
                <p className="feria__feedback feria__feedback--error" role="alert">
                  {mensajeServidor}
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}