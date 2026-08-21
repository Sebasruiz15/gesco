// archivo: frontend/src/services/api.js
import emailjs from '@emailjs/browser'
import { SERVICIOS_PROYECTO, NIVELES_CONTINUIDAD } from '../data/servicios.js'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

// El <select> del formulario guarda un slug (ej. "diagnostico-integral"),
// pero en el correo queremos el nombre legible del servicio. Armamos un
// diccionario slug -> nombre a partir de los mismos datos del catálogo,
// para no tener que mantenerlo duplicado a mano en dos lugares.
const NOMBRES_SERVICIOS = Object.fromEntries(
  [...SERVICIOS_PROYECTO, ...NIVELES_CONTINUIDAD].map((s) => [s.slug, s.nombre])
)
NOMBRES_SERVICIOS.otro = 'Otro / No especificado'

/**
 * Envía los datos del formulario de contacto vía EmailJS, directamente
 * desde el navegador (sin pasar por nuestro backend de Node).
 */
export async function enviarContacto(datos) {
  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
     {
      nombre: datos.nombre,
      correo: datos.correo,
      telefono: datos.telefono,
      telefono_whatsapp: `https://wa.me/57${datos.telefono.replace(/\D/g, '')}`,
      tipo_consulta: NOMBRES_SERVICIOS[datos.tipoConsulta] || datos.tipoConsulta,
      mensaje: datos.mensaje,
    },
      { publicKey: PUBLIC_KEY }
    )
  } catch (error) {
    console.error('Error al enviar con EmailJS:', error)
    throw new Error('No se pudo enviar el mensaje. Intenta de nuevo o escríbenos por WhatsApp.')
  }
}