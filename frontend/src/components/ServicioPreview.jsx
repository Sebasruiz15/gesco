// archivo: frontend/src/components/ServicioPreview.jsx

function ConsultoriaPreview() {
  const obligaciones = ['Reporte MinTIC', 'Formatos CRC', 'Contribución FUTIC', 'Estados NIIF'];

  return (
    <div className="preview-doc">
      <div className="preview-doc__header">
        <span>Obligaciones</span>
        <span className="preview-doc__badge">Al día</span>
      </div>
      <ul className="preview-doc__lista">
        {obligaciones.map((item, i) => (
          <li key={item} className="preview-doc__item" style={{ '--i': i }}>
            <span className="preview-doc__check" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function WebPreview() {
  return (
    <div className="preview-web">
      <div className="preview-web__barra">
        <i /><i /><i />
        <span>tuempresa.com</span>
      </div>
      <div className="preview-web__cuerpo">
        <div className="preview-web__hero">
          <b /><b /><em />
        </div>
        <div className="preview-web__cards">
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ '--i': i }} />
          ))}
        </div>
      </div>
      <span className="preview-web__cursor" />
    </div>
  );
}

function MarketingPreview() {
  const alturas = [30, 42, 38, 58, 72, 92];

  return (
    <div className="preview-mkt">
      <div className="preview-mkt__header">
        <span>Alcance</span>
        <span className="preview-mkt__pill">Crecimiento orgánico</span>
      </div>
      <div className="preview-mkt__grafica">
        {alturas.map((altura, i) => (
          <span
            key={i}
            className="preview-mkt__barra"
            style={{ '--h': `${altura}%`, '--i': i }}
          />
        ))}
      </div>
    </div>
  );
}

const PREVIEWS = {
  consultoria: ConsultoriaPreview,
  'paginas-web': WebPreview,
  marketing: MarketingPreview,
};

export default function ServicioPreview({ slug, activo = false }) {
  const Preview = PREVIEWS[slug];
  if (!Preview) return null;

  return (
    <div className={`preview ${activo ? 'preview--activo' : ''}`} aria-hidden="true">
      <Preview />
    </div>
  );
}