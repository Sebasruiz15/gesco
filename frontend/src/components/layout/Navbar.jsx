// archivo: frontend/src/components/layout/Navbar.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ParticleNetwork from '../ui/ParticleNetwork.jsx'
import './Navbar.css'

const LINKS = [
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/servicios-isp', label: 'Servicios' },
  // { to: '/procesos-contables', label: 'Procesos Contables' },
  { to: '/tips-regulatorios', label: 'Tips Regulatorios' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <ParticleNetwork particleColor="#1f4e85" lineColor="rgba(31, 78, 133, 0.14)" />

      <div className="navbar__inner">
        <Link to="/" className="navbar__brand">
          <motion.img
            src="/logo.png"
            alt="GESCO Consultorías"
            className="navbar__logo"
            whileHover={{ scale: 1.06, rotate: -1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          />
        </Link>

        <nav className={`navbar__links ${open ? 'is-open' : ''}`}>
          {LINKS.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="navbar__toggle"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </motion.header>
  )
}