// archivo: frontend/src/components/sections/Contacto.jsx
import { motion } from 'framer-motion'
import { useContactForm } from '../../hooks/useContactForm.js'
import { IconUser, IconMail, IconPhone, IconTag, IconMessage } from '../ui/FormIcons.jsx'
import { IconWhatsApp, IconGmail } from '../ui/BrandIcons.jsx'
import Avatar from '../ui/Avatar.jsx'
import './Contacto.css'

export default function Contacto() {
  const { valores, errores, estado, mensajeServidor, handleChange, handleSubmit } = useContactForm()

  return (
    <section id="contacto" className="section contacto">
      <div className="container contacto__grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow eyebrow--light">Hablemos</span>
          <h2>Cuéntenos qué necesita su PRST</h2>
          <p className="contacto__lead">
            Escríbanos y le respondemos directamente sin formularios eternos ni intermediarios.
          </p>
            <div className="contacto__badge">
              <span className="contacto__badge-dot" />
              Respuesta en menos de 24 horas hábiles
            </div>

            {/* <div className="contacto__card">
              <Avatar nombre="Marta Luz Vélez Tamayo" />
              <div>
                <p className="contacto__card-nombre">Marta Luz Vélez Tamayo</p>
                <p className="contacto__card-cargo">Consultora</p>
              </div>
            </div> */}

            <div className="contacto__links">
              <a href="https://wa.me/573145178003" target="_blank" rel="noopener noreferrer" className="contacto__link-pill">
                <IconWhatsApp size={30} />
                3145178003
              </a>
              <a href="mailto:operaciones@gescocol.com" className="contacto__link-pill">
                <IconGmail size={30} />
                operaciones@gescocol.com
              </a>
            </div>
        </motion.div>

        <motion.div
          className="contacto__form-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="contacto__form-glow" aria-hidden="true" />

          <form className="contacto__form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="nombre" className="contacto__label">
              <IconUser /> Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={valores.nombre}
              onChange={handleChange}
              aria-invalid={Boolean(errores.nombre)}
            />
            {errores.nombre && <span className="contacto__error">{errores.nombre}</span>}

            <label htmlFor="correo" className="contacto__label">
              <IconMail /> Correo
            </label>
            <input
              id="correo"
              name="correo"
              type="email"
              value={valores.correo}
              onChange={handleChange}
              aria-invalid={Boolean(errores.correo)}
            />
            {errores.correo && <span className="contacto__error">{errores.correo}</span>}

            <label htmlFor="telefono" className="contacto__label">
              <IconPhone /> Teléfono
            </label>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              placeholder="3001234567"
              value={valores.telefono}
              onChange={handleChange}
              aria-invalid={Boolean(errores.telefono)}
            />
            {errores.telefono && <span className="contacto__error">{errores.telefono}</span>}

            <label htmlFor="tipoConsulta" className="contacto__label">
              <IconTag /> Tipo de consulta
            </label>
            <select
              id="tipoConsulta"
              name="tipoConsulta"
              value={valores.tipoConsulta}
              onChange={handleChange}
            >
              <optgroup label="Diagnósticos puntuales">
                <option value="express">Diagnóstico Express</option>
                <option value="alivios-diferenciales">Diagnóstico de Alivios Diferenciales</option>
                <option value="licenciamiento-contenidos">Auditoría de Licenciamiento de Contenidos</option>
                <option value="diagnostico-integral">Diagnóstico Regulatorio Integral</option>
                <option value="excepcion-futic">Estructuración de la Excepción FUTIC</option>
              </optgroup>
              <optgroup label="Acompañamiento continuo">
                <option value="esencial">Nivel Esencial</option>
                <option value="preventivo">Nivel Preventivo</option>
                <option value="aliado">Nivel Aliado</option>
              </optgroup>
              <option value="otro">Otro / No estoy seguro</option>
            </select>

            <label htmlFor="mensaje" className="contacto__label">
              <IconMessage /> Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              value={valores.mensaje}
              onChange={handleChange}
              aria-invalid={Boolean(errores.mensaje)}
            />
            {errores.mensaje && <span className="contacto__error">{errores.mensaje}</span>}

            <button type="submit" className="btn btn-primary" disabled={estado === 'enviando'}>
              {estado === 'enviando' ? 'Enviando…' : 'Enviar mensaje'}
            </button>

            {estado === 'exito' && (
              <p className="contacto__feedback contacto__feedback--exito" role="status">
                Mensaje enviado. Le responderemos muy pronto.
              </p>
            )}
            {estado === 'error' && (
              <p className="contacto__feedback contacto__feedback--error" role="alert">
                {mensajeServidor}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}