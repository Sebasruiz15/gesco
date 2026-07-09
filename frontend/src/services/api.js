const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

/**
 * Envía los datos del formulario de contacto al backend.
 * Centralizamos aquí el fetch para que los componentes no sepan nada
 * de URLs, headers ni formato de la respuesta — solo llaman a esta función.
 */
export async function enviarContacto(datos) {
  const response = await fetch(`${API_URL}/api/contacto`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
  })

  const payload = await response.json().catch(() => null)

  if (!response.ok) {
    const mensaje = payload?.message || 'No se pudo enviar el mensaje. Intenta de nuevo.'
    throw new Error(mensaje)
  }

  return payload
}
