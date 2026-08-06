// archivo: frontend/src/components/layout/Navbar.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

const LINKS = [
  { href: "#perfil", label: "Nosotros" },
  { href: "#servicios-isp", label: "Servicios ISP" },
  { href: "#procesos-contables", label: "Procesos Contables" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="navbar__inner container">
        <a href="#top" className="navbar__brand">
          <motion.img
            src="/logo.png"
            alt="GESCO Consultorías"
            className="navbar__logo"
            whileHover={{ scale: 1.06, rotate: -1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />
        </a>

        <nav className={`navbar__links ${open ? "is-open" : ""}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="navbar__toggle"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </motion.header>
  );
}