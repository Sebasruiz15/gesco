// archivo: frontend/src/pages/PortafolioDetallePage.jsx
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ServicioPreview from "../components/ServicioPreview.jsx";
import ServicioCard from "../components/ServicioCard.jsx";
import { SERVICIOS, obtenerServicio } from "../data/portafolio.js";
import "../styles/Portafolio.css";
import { crearLinkWhatsApp } from "../config/whatsapp.js";

const aparecer = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

export default function PortafolioDetallePage() {
  const { slug } = useParams();
  const servicio = obtenerServicio(slug);

  if (!servicio) return <Navigate to="/portafolio" replace />;

  const otrosServicios = SERVICIOS.filter((s) => s.slug !== slug);

  return (
    <div className="detalle">
      <div className="detalle__contenedor">
        <Link to="/portafolio" className="detalle__volver">
          ← Volver al portafolio
        </Link>

        <motion.header
          key={slug}
          className="detalle__hero"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="pf-eyebrow pf-eyebrow--claro">
              {servicio.numero} · {servicio.etiqueta}
            </span>
            <h1 className="detalle__titulo">{servicio.titulo}</h1>
            <p className="detalle__descripcion">{servicio.descripcion}</p>
            <a
              href={crearLinkWhatsApp(
                `Hola GESCO, me interesa el servicio de ${servicio.titulo}.`,
              )}
              className="pf-boton"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quiero este servicio <span aria-hidden="true">→</span>
            </a>
          </div>
          <ServicioPreview slug={slug} activo />
        </motion.header>

        <span className="pf-eyebrow">Qué incluye</span>
        <h2 className="detalle__seccion-titulo">Todo lo que hacemos por ti</h2>
        <section className="detalle__incluye">
          {servicio.secciones.map((seccion, i) => (
            <motion.article
              key={seccion.titulo}
              className="detalle__bloque"
              {...aparecer}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3>{seccion.titulo}</h3>
              <ul className="detalle__lista">
                {seccion.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </section>

        <span className="pf-eyebrow">Cómo trabajamos</span>
        <h2 className="detalle__seccion-titulo">
          Un proceso claro, sin sorpresas
        </h2>
        <ol className="detalle__proceso">
          {servicio.proceso.map((paso, i) => (
            <motion.li
              key={paso.titulo}
              className="detalle__paso"
              {...aparecer}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3>{paso.titulo}</h3>
              <p>{paso.texto}</p>
            </motion.li>
          ))}
        </ol>

        <span className="pf-eyebrow">Sigue explorando</span>
        <h2 className="detalle__seccion-titulo">Otros servicios</h2>
        <div className="detalle__otros">
          {otrosServicios.map((s, i) => (
            <ServicioCard key={s.slug} servicio={s} indice={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
