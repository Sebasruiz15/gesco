// archivo: frontend/src/hooks/useContactForm.js
import { useState } from 'react'
import { enviarContacto } from '../services/api.js'

const ESTADO_INICIAL = { nombre: '', correo: '', tipoConsulta: 'operacion-isp', mensaje: '' }
// 'idle' | 'enviando' | 'exito' | 'error'

export function useContactForm() {
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
    if (!/^\S+@\S+\.\S+$/.test(valores.correo)) nuevosErrores.correo = 'Ingresa un correo válido.'
    if (valores.mensaje.trim().length < 10) nuevosErrores.mensaje = 'Danos un poco más de contexto (mín. 10 caracteres).'
    setErrores(nuevosErrores)
    return Object.keys(nuevosErrores).length === 0
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!validar()) return
    setEstado('enviando')
    setMensajeServidor('')
    try {
      await enviarContacto(valores)
      setEstado('exito')
      setValores(ESTADO_INICIAL)
    } catch (error) {
      setEstado('error')
      setMensajeServidor(error.message)
    }
  }

  return { valores, errores, estado, mensajeServidor, handleChange, handleSubmit }
}