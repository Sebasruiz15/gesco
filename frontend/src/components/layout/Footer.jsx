// archivo: frontend/src/components/layout/Footer.jsx
import SignalArc from '../ui/SignalArc.jsx'
import './Footer.css'

const REDES = [
  {
    nombre: 'Facebook',
    href: 'https://facebook.com/gescoconsultorias', // TODO: reemplaza con el link real
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-7.5h2.5l.5-3H13.5V8.5c0-.9.3-1.5 1.6-1.5H16.5V4.3C16.2 4.2 15.2 4 14 4c-2.4 0-4 1.5-4 4.2V10.5H7.5v3H10V21h3.5z" />
      </svg>
    ),
  },
  {
    nombre: 'Instagram',
    href: 'https://instagram.com/gescoconsultorias', // TODO: reemplaza con el link real
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    nombre: 'WhatsApp',
    href: 'https://wa.me/573005053320',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 3.5a8.4 8.4 0 0 0-7.2 12.7L3.5 20.5l4.5-1.2A8.4 8.4 0 1 0 12 3.5Zm0 1.6a6.8 6.8 0 0 1 5.8 10.3l-.2.4.7 2.5-2.6-.7-.4.2A6.8 6.8 0 1 1 12 5.1Zm-2.7 3.4c-.2 0-.5.1-.6.3-.2.2-.7.7-.7 1.7s.7 2 .8 2.1c.1.1 1.4 2.3 3.6 3.1 1.8.7 2.1.6 2.5.5.4 0 1.2-.5 1.4-1 .2-.5.2-.9.1-1-.1-.1-.2-.2-.5-.3-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.6.9-.8 1-.1.2-.3.2-.6.1-.3-.2-1.1-.4-2-1.3-.8-.7-1.3-1.6-1.4-1.8-.1-.3 0-.4.1-.6l.4-.5c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5-.1-.1-.6-1.5-.9-2-.2-.5-.4-.4-.6-.4Z" />
      </svg>
    ),
  },


  {
  nombre: 'LinkedIn',
  href: 'https://linkedin.com/company/gesco-consultorias', // TODO: reemplaza con el link real
  icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5H3.56V20.5H6.94V8.5ZM5.25 3.5C4.1 3.5 3.25 4.35 3.25 5.44C3.25 6.5 4.08 7.38 5.22 7.38H5.25C6.42 7.38 7.25 6.5 7.25 5.44C7.23 4.35 6.42 3.5 5.25 3.5ZM20.5 13.6C20.5 10.35 18.78 8.85 16.48 8.85C14.63 8.85 13.8 9.87 13.34 10.58V9.1H9.96C10.01 10.14 9.96 20.5 9.96 20.5H13.34V13.9C13.34 13.55 13.37 13.19 13.47 12.94C13.75 12.24 14.4 11.51 15.48 11.51C16.9 11.51 17.13 12.79 17.13 14.15V20.5H20.5V13.6Z" />
    </svg>
  ),
},
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__main container">
        <div className="footer__col footer__brand">
          <div className="footer__logo-mark">
            <SignalArc size={30} variant="static" />
            <span>GESCO</span>
          </div>
          <p className="footer__tagline">
            Consultoría especializada en operación y contabilidad para ISP's en Colombia.
          </p>
        </div>

        <div className="footer__col footer__contact">
          <h4>Contacto</h4>
          <p>Marta Luz Vélez Tamayo — Consultora</p>
          <a href="tel:+573005053320">300 505 3320</a>
          <a href="mailto:operaciones@gescocol.com">operaciones@gescocol.com</a>
        </div>

        <div className="footer__col footer__social">
          <h4>Síguenos</h4>
          <div className="footer__social-icons">
            {REDES.map((red) => (
              <a
                key={red.nombre}
                href={red.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={red.nombre}
                className="footer__social-icon"
              >
                {red.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      
<div className="footer__bottom">
  <div className="footer__bottom-inner container">
    <p className="footer__copy">
      © {year} GESCO Consultorías. Todos los derechos reservados.
    </p>
    <a 
      href="https://cv-sebastian-mu.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="footer__credit"
    >
      Desarrollado por <span>JS.Dev</span>
    </a>
  </div>
</div>
    </footer>
  )
}