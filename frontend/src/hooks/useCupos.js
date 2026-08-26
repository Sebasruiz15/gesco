// archivo: frontend/src/hooks/useCupos.js
import { useEffect, useState } from 'react'
import { doc, onSnapshot, runTransaction } from 'firebase/firestore'
import { db } from '../services/firebase.js'

const CUPOS_REF_PATH = ['feria', 'cupos']

export function useCupos() {
  const [disponibles, setDisponibles] = useState(null) // null = cargando
  const [error, setError] = useState(null)

  // onSnapshot escucha cambios en tiempo real — si otra persona se
  // registra desde su celular, tu pantalla actualiza el número sola,
  // sin que tengas que recargar la página.
  useEffect(() => {
    const ref = doc(db, ...CUPOS_REF_PATH)
    const unsubscribe = onSnapshot(
      ref,
      (snap) => setDisponibles(snap.data()?.disponibles ?? 0),
      (err) => setError(err.message)
    )
    return () => unsubscribe()
  }, [])

  /**
   * Resta un cupo de forma segura usando una transacción: lee el valor
   * actual y lo actualiza en una sola operación atómica. Esto evita
   * que dos personas registrándose al mismo milisegundo "ganen" el
   * mismo último cupo — Firestore garantiza que las transacciones no
   * se pisen entre sí.
   */
  async function reservarCupo() {
    const ref = doc(db, ...CUPOS_REF_PATH)
    return runTransaction(db, async (transaction) => {
      const snap = await transaction.get(ref)
      const actual = snap.data()?.disponibles ?? 0
      if (actual <= 0) {
        throw new Error('Los cupos del Diagnóstico Express ya se agotaron.')
      }
      transaction.update(ref, { disponibles: actual - 1 })
      return actual - 1
    })
  }

  return { disponibles, error, reservarCupo }
}