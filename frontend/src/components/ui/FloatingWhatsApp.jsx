// archivo: frontend/src/components/ui/FloatingWhatsApp.jsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './FloatingWhatsApp.css'

const NUMERO_WHATSAPP = '573145178003'
const MENSAJE_GENERAL = 'Hola, quiero conocer los servicios de GESCO.'

export default function FloatingWhatsApp() {
  const [mostrarAnuncio, setMostrarAnuncio] = useState(false)
  const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(MENSAJE_GENERAL)}`

  // El anuncio aparece 2 segundos después de que carga la página —
  // le da tiempo al visitante de ver el contenido antes de interrumpirlo.
  useEffect(() => {
    const timer = setTimeout(() => setMostrarAnuncio(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="floating-whatsapp-wrapper">
      <AnimatePresence>
        {mostrarAnuncio && (
          <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-whatsapp__bubble"
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <button
              type="button"
              className="floating-whatsapp__close"
              aria-label="Cerrar anuncio"
              onClick={(e) => {
                e.preventDefault() // evita que el clic también abra WhatsApp
                e.stopPropagation()
                setMostrarAnuncio(false)
              }}
            >
              ×
            </button>
            🚀 ¿Tienes un reto operativo? <br />
                ¡Encontramos la solución!
          </motion.a>
        )}
      </AnimatePresence>

      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Escríbanos por WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: 'spring', stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="floating-whatsapp__pulse" aria-hidden="true" />
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 3.5a8.4 8.4 0 0 0-7.2 12.7L3.5 20.5l4.5-1.2A8.4 8.4 0 1 0 12 3.5Zm0 1.6a6.8 6.8 0 0 1 5.8 10.3l-.2.4.7 2.5-2.6-.7-.4.2A6.8 6.8 0 1 1 12 5.1Zm-2.7 3.4c-.2 0-.5.1-.6.3-.2.2-.7.7-.7 1.7s.7 2 .8 2.1c.1.1 1.4 2.3 3.6 3.1 1.8.7 2.1.6 2.5.5.4 0 1.2-.5 1.4-1 .2-.5.2-.9.1-1-.1-.1-.2-.2-.5-.3-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.6.9-.8 1-.1.2-.3.2-.6.1-.3-.2-1.1-.4-2-1.3-.8-.7-1.3-1.6-1.4-1.8-.1-.3 0-.4.1-.6l.4-.5c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5-.1-.1-.6-1.5-.9-2-.2-.5-.4-.4-.6-.4Z" />
        </svg>
      </motion.a>
    </div>
  )
}