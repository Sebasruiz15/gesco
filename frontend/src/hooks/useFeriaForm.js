// archivo: frontend/src/hooks/useFeriaForm.js
import { useState } from 'react'
import { useCupos } from './useCupos.js'
import { enviarRegistroFeria } from '../services/api.js'
import { guardarRegistroFeria } from '../services/firebase.js'

const ESTADO_INICIAL = { nombre: '', telefono: '', correo: '', municipio: '' ,tipoServicio: ''}

export function useFeriaForm() {
  const { disponibles, total, reservarCupo } = useCupos()
  const [valores, setValores] = useState(ESTADO_INICIAL)
  const [errores, setErrores] = useState({})
  const [estado, setEstado] = useState('idle')
  const [mensajeServidor, setMensajeServidor] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setValores((prev) => ({ ...prev, [name]: value }))
  }

  const validar = () => {
    const nuevosErrores = {}
    if (!valores.nombre.trim()) nuevosErrores.nombre = 'Cuéntanos tu nombre.'
    if (!/^\d{7,10}$/.test(valores.telefono.trim())) {
      nuevosErrores.telefono = 'Ingresa un número válido (solo dígitos).'
    }
    if (!/^\S+@\S+\.\S+$/.test(valores.correo)) nuevosErrores.correo = 'Ingresa un correo válido.'
    if (!valores.municipio.trim()) nuevosErrores.municipio = 'Cuéntanos en qué municipio operas.'
    if (!valores.tipoServicio.trim()) nuevosErrores.tipoServicio = 'Cuéntanos qué tipo de servicio prestas.'
    setErrores(nuevosErrores)
    return Object.keys(nuevosErrores).length === 0
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!validar()) return

    setEstado('enviando')
    setMensajeServidor('')

    try {
      // 1. Reserva el cupo — si ya no hay, esto lanza el error y
      //    nunca llegamos a guardar ni a notificar nada.
      await reservarCupo()

      // 2. Guarda el registro completo en Firestore — esta es la
      //    fuente de verdad, la lista real de inscritos.
      await guardarRegistroFeria(valores)

      // 3. Notifica por correo. Si esto falla (por ejemplo, EmailJS
      //    tiene un problema momentáneo), el registro YA quedó a
      //    salvo en Firestore — por eso no lanzamos error aquí, solo
      //    lo registramos en consola para revisarlo después.
      try {
        await enviarRegistroFeria(valores)
      } catch (errorCorreo) {
        console.error('El registro se guardó, pero falló el correo de notificación:', errorCorreo)
      }

      setEstado('exito')
      setValores(ESTADO_INICIAL)
    } catch (error) {
      setEstado('error')
      setMensajeServidor(error.message)
    }
  }

  return { valores, errores, estado, mensajeServidor, disponibles, total, handleChange, handleSubmit }
}