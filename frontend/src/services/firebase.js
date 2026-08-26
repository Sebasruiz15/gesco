// archivo: frontend/src/services/firebase.js (agregar esta función al archivo existente)
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

/**
 * Guarda cada registro de la feria como un documento propio, para
 * tener una lista consultable de todos los inscritos — el correo de
 * EmailJS es solo una notificación inmediata, esta es la fuente de
 * verdad real de quién se registró.
 */
export async function guardarRegistroFeria(datos) {
  const ref = collection(db, 'registros_feria')
  await addDoc(ref, {
    nombre: datos.nombre,
    telefono: datos.telefono,
    correo: datos.correo,
    municipio: datos.municipio,
    tipoServicio: datos.tipoServicio,
    creadoEn: serverTimestamp(), // fecha/hora real del servidor, no del celular del usuario
  })
}