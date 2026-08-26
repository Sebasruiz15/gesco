// archivo: frontend/src/pages/PanelFeria.jsx
import { useEffect, useState } from 'react'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from '../services/firebase.js'
import './PanelFeria.css'

function formatearFecha(timestamp) {
  if (!timestamp) return '—'
  return timestamp.toDate().toLocaleString('es-CO', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })
}

// Convierte el arreglo de registros a un archivo CSV descargable,
// sin depender de ninguna librería externa — es texto plano con
// comas, que Excel/Sheets abre directamente.
function descargarCSV(registros) {
  const encabezados = ['Nombre', 'Teléfono', 'Correo', 'Municipio', 'Tipo de servicio', 'Fecha']
  const filas = registros.map((r) => [
    r.nombre,
    r.telefono,
    r.correo,
    r.municipio,
    r.tipoServicio,
    formatearFecha(r.creadoEn),
  ])

  const contenido = [encabezados, ...filas]
    .map((fila) => fila.map((valor) => `"${(valor ?? '').toString().replace(/"/g, '""')}"`).join(','))
    .join('\n')

  const blob = new Blob([contenido], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const enlace = document.createElement('a')
  enlace.href = url
  enlace.download = `registros-feria-gesco-${new Date().toISOString().slice(0, 10)}.csv`
  enlace.click()
  URL.revokeObjectURL(url)
}

export default function PanelFeria() {
  const [registros, setRegistros] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const q = query(collection(db, 'registros_feria'), orderBy('creadoEn', 'desc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setRegistros(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      setCargando(false)
    })
    return () => unsubscribe()
  }, [])

  return (
    <section className="panel-feria">
      <div className="container">
        <div className="panel-feria__header">
          <div>
            <h1>Registros — Diagnóstico Express Feria</h1>
            <p className="panel-feria__contador">
              {cargando ? 'Cargando…' : `${registros.length} persona(s) registrada(s)`}
            </p>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => descargarCSV(registros)}
            disabled={registros.length === 0}
          >
            Descargar CSV
          </button>
        </div>

        <div className="panel-feria__tabla-wrapper">
          <table className="panel-feria__tabla">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Teléfono</th>
                <th>Correo</th>
                <th>Municipio</th>
                <th>Tipo de servicio</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {registros.map((r) => (
                <tr key={r.id}>
                  <td>{r.nombre}</td>
                  <td>
                    <a href={`https://wa.me/57${(r.telefono || '').replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
                      {r.telefono}
                    </a>
                  </td>
                  <td>{r.correo}</td>
                  <td>{r.municipio}</td>
                  <td>{r.tipoServicio}</td>
                  <td>{formatearFecha(r.creadoEn)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {!cargando && registros.length === 0 && (
            <p className="panel-feria__vacio">Todavía no hay registros.</p>
          )}
        </div>
      </div>
    </section>
  )
}