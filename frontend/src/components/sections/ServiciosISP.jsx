// archivo: frontend/src/components/sections/ServiciosISP.jsx
import ServicioCard from '../ui/ServicioCard.jsx'
import './Servicios.css'

const ITEMS = [
  "Consultorías en operación de ISP's (Proveedores de Servicios de Telecomunicaciones)",
  'Consultorías y presentación de obligaciones ante el MinTIC y la CRC',
  'Estandarización de procesos operativos para la prestación de servicios de telecomunicaciones',
  'Desarrollo de Manuales Técnicos, de Funciones, de Higiene y Seguridad Industrial, entre otros',
  'Reporte de obligaciones ante otras entidades de inspección, vigilancia y control',
  'Gestión y respuesta de PQR conforme al Régimen de Protección al Usuario vigilado por la SIC',
]

export default function ServiciosISP() {
  return (
    <section className="servicios" id="servicios-isp">
      <div className="servicios__inner container">
        <p className="eyebrow">Operación de ISP's</p>
        <h2>Acompañamiento técnico y regulatorio para proveedores de telecomunicaciones</h2>
        <div className="servicios__grid">
          <ServicioCard titulo="Operación de ISP's" items={ITEMS} />
        </div>
      </div>
    </section>
  )
}