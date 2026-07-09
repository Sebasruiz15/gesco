import { motion } from 'framer-motion'
import { useContactForm } from '../../hooks/useContactForm.js'
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
          <h2>Cuéntenos qué necesita su ISP</h2>
          <p className="contacto__lead">
            Escríbanos y le respondemos directamente — sin formularios
            eternos ni intermediarios.
          </p>

          <div className="contacto__info">
            <p>Marta Luz Vélez Tamayo — Consultora</p>
            <a href="tel:+573005053320">300 505 3320</a>
            <a href="mailto:operaciones@gescocol.com">operaciones@gescocol.com</a>
          </div>
        </motion.div>

        <motion.form
          className="contacto__form"
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            value={valores.nombre}
            onChange={handleChange}
            aria-invalid={Boolean(errores.nombre)}
          />
          {errores.nombre && <span className="contacto__error">{errores.nombre}</span>}

          <label htmlFor="correo">Correo</label>
          <input
            id="correo"
            name="correo"
            type="email"
            value={valores.correo}
            onChange={handleChange}
            aria-invalid={Boolean(errores.correo)}
          />
          {errores.correo && <span className="contacto__error">{errores.correo}</span>}

          <label htmlFor="mensaje">Mensaje</label>
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
        </motion.form>
      </div>
    </section>
  )
}
