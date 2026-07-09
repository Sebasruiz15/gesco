// archivo: frontend/src/components/layout/Footer.jsx
import SignalArc from '../ui/SignalArc.jsx'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <a href="#top" className="navbar__brand">
            <img
              src="/logo.png"
              alt="GESCO Consultorías"
              className="navbar__logo"
            />
        </a>
        </div>

        <div className="footer__contact">
          <p className="footer__name">Marta Luz Vélez Tamayo — Consultora</p>
          <a href="tel:+573005053320">300 505 3320</a>
          <a href="mailto:operaciones@gescocol.com">operaciones@gescocol.com</a>
        </div>

        <p className="footer__copy">© {year} GESCO Consultorías. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}