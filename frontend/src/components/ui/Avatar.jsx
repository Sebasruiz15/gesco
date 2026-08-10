// archivo: frontend/src/components/ui/Avatar.jsx
import './Avatar.css'

const COLORES = ['#1f4e85', '#2c62a3', '#6b6300']

function obtenerIniciales(nombre) {
  return nombre
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((palabra) => palabra[0].toUpperCase())
    .join('')
}

// Genera un color consistente según el nombre, para que cada persona
// siempre tenga el mismo color de avatar sin necesidad de asignarlo a mano.
function obtenerColor(nombre) {
  const suma = nombre.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return COLORES[suma % COLORES.length]
}

export default function Avatar({ nombre, foto }) {
  if (foto) {
    return <img src={foto} alt={nombre} className="avatar avatar--foto" />
  }

  return (
    <div className="avatar avatar--iniciales" style={{ background: obtenerColor(nombre) }}>
      {obtenerIniciales(nombre)}
    </div>
  )
}