import nodemailer from 'nodemailer'
import { env } from '../config/env.js'

// Reutilizamos un único transporter en vez de crear uno por cada correo:
// abrir la conexión SMTP tiene costo, y Nodemailer ya maneja el pool
// de conexiones internamente si se lo dejamos como singleton del módulo.
let transporter = null

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: env.gmail.usuario(),
        // IMPORTANTE: esto NO es la contraseña normal de la cuenta de Gmail.
        // Es una "contraseña de aplicación" de 16 dígitos que se genera en
        // https://myaccount.google.com/apppasswords (requiere verificación
        // en 2 pasos activada en la cuenta).
        pass: env.gmail.passApp()
      }
    })
  }
  return transporter
}

export async function enviarCorreoContacto({ nombre, correo, mensaje }) {
  const mailOptions = {
    from: `"Sitio web GESCO" <${env.gmail.usuario()}>`,
    to: env.correoDestino,
    replyTo: correo,
    subject: `Nuevo contacto desde el sitio web: ${nombre}`,
    text: `Nombre: ${nombre}\nCorreo: ${correo}\n\nMensaje:\n${mensaje}`,
    html: `
      <h2>Nuevo mensaje desde gescocol.com</h2>
      <p><strong>Nombre:</strong> ${escaparHtml(nombre)}</p>
      <p><strong>Correo:</strong> ${escaparHtml(correo)}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${escaparHtml(mensaje).replace(/\n/g, '<br />')}</p>
    `
  }

  await getTransporter().sendMail(mailOptions)
}

// Escape mínimo para no inyectar HTML crudo del usuario dentro del correo.
function escaparHtml(texto) {
  return texto
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}
