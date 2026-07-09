// archivo: frontend/src/components/sections/ProcesosContables.jsx
import ServicioCard from '../ui/ServicioCard.jsx'
import './Servicios.css'

const ITEMS = [
  'Elaboración de presupuestos',
  'Consultorías en ejecución de contabilidad en forma sistematizada',
  'Consultorías en cumplimiento de obligaciones tributarias',
  'Estandarización de áreas y procesos con efectos contables',
  'Implementación de NIIF (Normas Internacionales de Información Financiera)',
]

export default function ProcesosContables() {
  return (
    <section className="servicios servicios--alt" id="procesos-contables">
      <div className="servicios__inner container">
        <p className="eyebrow">Procesos contables</p>
        <h2>Orden financiero y cumplimiento normativo para ISP's</h2>
        <div className="servicios__grid">
          <ServicioCard titulo="Procesos Contables para ISP's" items={ITEMS} delay={0.1} />
        </div>
      </div>
    </section>
  )
}