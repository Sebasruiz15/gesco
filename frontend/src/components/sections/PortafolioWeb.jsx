// archivo: frontend/src/components/sections/PortafolioWeb.jsx
import ServicioProyectoCard from '../ui/ServicioProyectoCard.jsx'
import { PORTAFOLIO_WEB } from '../../data/portafolioWeb.js'
import './PortafolioWeb.css'

export default function PortafolioWeb() {
  return (
    <section className="portafolio-web" id="desarrollo-web">
      <div className="container">
        <p className="eyebrow">Desarrollo de páginas web</p>
        <h2>
          Portales web construidos desde la matriz de obligaciones
          <span className="section-underline" />
        </h2>
        <p className="portafolio-web__lead">
          No un sitio comercial genérico: un portal donde cada página existe porque una norma
          exige publicarla. Elija el perfil según los servicios que presta.
        </p>

        <div className="portafolio-web__grid">
          {PORTAFOLIO_WEB.map((item, i) => (
            <ServicioProyectoCard key={item.slug} servicio={item} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}