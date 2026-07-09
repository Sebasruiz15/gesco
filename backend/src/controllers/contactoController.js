import { enviarCorreoContacto } from '../services/emailService.js'

export async function postContacto(req, res, next) {
  try {
    await enviarCorreoContacto(req.body)
    res.status(200).json({ message: 'Mensaje enviado correctamente.' })
  } catch (error) {
    // Delegamos al errorHandler central en vez de responder aquí mismo;
    // así el controller solo se preocupa de la lógica, no del formato del error.
    next({ status: 502, message: 'No se pudo enviar el correo. Intenta más tarde.', cause: error })
  }
}
