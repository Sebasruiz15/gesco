// archivo: frontend/src/pages/ServiciosISPPage.jsx
import CatalogoServicios from '../components/sections/CatalogoServicios.jsx'
import PortafolioWeb from '../components/sections/PortafolioWeb.jsx'
import PortafolioMarketing from '../components/sections/PortafolioMarketing.jsx'
import './ServiciosISPPage.css'

const CATEGORIAS = [
  { href: '#recursos', label: 'Consultoría Regulatoria' },
  { href: '#desarrollo-web', label: 'Desarrollo de Páginas Web' },
  { href: '#marketing-digital', label: 'Marketing Digital' },
]

export default function ServiciosISPPage() {
  return (
    <>
      <section className="portafolio-nav">
        <div className="container">
          <p className="eyebrow">Nuestro portafolio</p>
          <h1>Tres frentes, un mismo criterio: el que exige la norma</h1>
          <div className="portafolio-nav__pills">
            {CATEGORIAS.map((cat) => (
              <a key={cat.href} href={cat.href} className="portafolio-nav__pill">
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div id="recursos">
        <CatalogoServicios />
      </div>
      <PortafolioWeb />
      <PortafolioMarketing />
    </>
  )
}