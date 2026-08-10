// archivo: frontend/src/components/sections/Recursos.jsx
import ResourceCard from '../ui/ResourceCard.jsx'
import './Recursos.css'

const RECURSOS = [
  {
    etiqueta: 'RUTIC',
    titulo: '¿Ya está tu ISP en el RUTIC?',
    resumen:
      'Todo Proveedor de Redes y Servicios de Telecomunicaciones (PRST) debe inscribirse en el Registro Único de TIC para cumplir con la habilitación general de la Ley 1341 de 2009 antes de operar.',
    href: 'https://www.mintic.gov.co/portal/inicio/Tramites-y-servicios/Registros/6398:Registro-Unico-de-TIC-Industria-de-Comunicaciones',
  },
  {
    etiqueta: 'RRIP',
    titulo: 'Guía rápida del Régimen de Reporte de Información Periódica',
    resumen:
      'El RRIP agrupa 45 formatos (32 TIC y 13 postales) organizados en mercados, calidad, acceso e interconexión y usuarios. Te contamos cuáles aplican según el tipo de ISP.',
    href: 'https://colombiatic.mintic.gov.co',
  },
  {
    etiqueta: 'Novedad 2026',
    titulo: 'Nuevas obligaciones de mapas de cobertura',
    resumen:
      'Desde octubre de 2026 cambian las reglas del Formato T.1.1 y del reporte de mapas de cobertura. Los proveedores FTTH deberán publicar un botón visible en su portal enlazado a esos mapas.',
    href: 'https://normograma.crcom.gov.co',
  },
  {
    etiqueta: 'Contribución CRC',
    titulo: '¿Cómo se calcula tu contribución a la CRC en 2026?',
    resumen:
      'La tarifa de contribución para 2026 quedó en 0,1416% de los ingresos brutos del año 2025. Te explicamos cómo estimar el valor y evitar sorpresas.',
    href: 'https://normograma.mintic.gov.co',
  },
]

export default function Recursos() {
  return (
    <section className="recursos" id="recursos">
      <div className="container">
        <p className="eyebrow">Actualidad regulatoria</p>
        <h2>Recursos para mantener su ISP al día con el MinTIC y la CRC</h2>
        <p className="recursos__lead">
          Resúmenes claros de la normativa que más impacta a los PRST en Colombia, con enlace directo a la fuente oficial.
        </p>

        <div className="recursos__grid">
          {RECURSOS.map((recurso, i) => (
            <ResourceCard key={recurso.titulo} {...recurso} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}