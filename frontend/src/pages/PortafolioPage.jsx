// archivo: frontend/src/pages/PortafolioPage.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ServicioCard from "../components/ServicioCard.jsx";
import { SERVICIOS } from "../data/portafolio.js";
import "../styles/Portafolio.css";
import { crearLinkWhatsApp } from '../config/whatsapp.js';

export default function PortafolioPage() {
  return (
    <div className="portafolio">
      <section className="portafolio__hero">
        <div className="portafolio__arcos" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <span className="pf-eyebrow">Nuestro portafolio</span>
          <h1 className="portafolio__titulo">
            {/* Un solo aliado para que tu PRST <mark>cumpla, se vea y crezca</mark> */}
          </h1>
          <p className="portafolio__subtitulo">
            Tres líneas de servicio con el mismo criterio: hacer las cosas bien
            desde el principio. Elige por dónde empezar.
          </p>
        </motion.div>
      </section>

      <section className="portafolio__grid">
        {SERVICIOS.map((servicio, indice) => (
          <ServicioCard
            key={servicio.slug}
            servicio={servicio}
            indice={indice}
          />
        ))}
      </section>

      <section className="portafolio__cierre">
        <div className="portafolio__cierre-caja">
          <div>
            <h2>¿No sabes por dónde empezar?</h2>
            <p>Cuéntanos tu situación y te decimos cuál es el primer paso.</p>
          </div>
          <a
            href={crearLinkWhatsApp(
              "Hola GESCO, quiero saber por dónde empezar con mi PRST.",
            )}
            className="pf-boton"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hablemos <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
