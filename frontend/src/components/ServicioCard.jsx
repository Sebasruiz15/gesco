// archivo: frontend/src/components/ServicioCard.jsx
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ServicioPreview from './ServicioPreview.jsx';

export default function ServicioCard({ servicio, indice = 0 }) {
  const cardRef = useRef(null);
  const { slug, numero, etiqueta, tema, titulo, resumen, destacados } = servicio;

  const moverLuz = (evento) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--x', `${evento.clientX - rect.left}px`);
    card.style.setProperty('--y', `${evento.clientY - rect.top}px`);
  };

  return (
    <motion.div
      className="servicio-card-wrap"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: indice * 0.12, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <Link
        ref={cardRef}
        to={`/portafolio/${slug}`}
        className={`servicio-card servicio-card--${tema}`}
        onMouseMove={moverLuz}
      >
        <span className="servicio-card__luz" aria-hidden="true" />

        <div className="servicio-card__top">
          <span className="servicio-card__numero">{numero}</span>
          <span className="pf-eyebrow">{etiqueta}</span>
        </div>

        <ServicioPreview slug={slug} />

        <h3 className="servicio-card__titulo">{titulo}</h3>
        <p className="servicio-card__resumen">{resumen}</p>

        <ul className="servicio-card__destacados">
          {destacados.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <span className="servicio-card__cta">
          Ver portafolio
          <span className="servicio-card__flecha" aria-hidden="true">→</span>
        </span>
      </Link>
    </motion.div>
  );
}