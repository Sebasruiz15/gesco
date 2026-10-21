// archivo: frontend/src/data/portafolio.js

export const SERVICIOS = [
  {
    slug: 'consultoria',
    numero: '01',
    etiqueta: 'Cumplir',
    tema: 'claro',
    titulo: 'Consultoría Regulatoria',
    resumen:
      'Operación, cumplimiento ante MinTIC y CRC, y contabilidad NIIF para que tu PRST esté siempre al día.',
    destacados: ['MinTIC y CRC', 'Contabilidad NIIF', 'Manuales y procesos'],
    descripcion:
      'Fortalecemos el área comercial, técnica y financiera de tu PRST con auditorías internas, procesos estandarizados y cumplimiento oportuno ante los entes de control.',
    secciones: [
      {
        titulo: 'Operación de PRST',
        items: [
          'Consultoría en operación de proveedores de telecomunicaciones',
          'Presentación de obligaciones ante MinTIC y CRC',
          'Estandarización de procesos operativos',
          'Manuales técnicos, de funciones y de higiene y seguridad industrial',
          'Reporte ante otras entidades de inspección, vigilancia y control',
        ],
      },
      {
        titulo: 'Procesos contables',
        items: [
          'Elaboración de presupuestos',
          'Contabilidad sistematizada',
          'Cumplimiento de obligaciones tributarias',
          'Estandarización de áreas con efectos contables',
          'Implementación de NIIF',
        ],
      },
    ],
    proceso: [
      { titulo: 'Diagnóstico', texto: 'Revisamos el estado real de tu operación y tus obligaciones.' },
      { titulo: 'Plan', texto: 'Priorizamos lo urgente y definimos fechas y responsables.' },
      { titulo: 'Ejecución', texto: 'Preparamos y presentamos los reportes ante cada entidad.' },
      { titulo: 'Seguimiento', texto: 'Te alertamos a tiempo y acompañamos cada cambio normativo.' },
    ],
  },
  {
    slug: 'paginas-web',
    numero: '02',
    etiqueta: 'Verse',
    tema: 'oscuro',
    titulo: 'Desarrollo de Páginas Web',
    resumen:
      'Sitios rápidos y profesionales que generan confianza y convierten visitantes en clientes.',
    destacados: ['Sitios corporativos', 'Landing pages', 'Hosting y SSL'],
    descripcion:
      'Diseñamos y desarrollamos sitios a la medida, optimizados para celular y pensados para que tus clientes te encuentren y te escriban.',
    secciones: [
      {
        titulo: 'Desarrollo',
        items: [
          'Sitios corporativos',
          'Landing pages para campañas',
          'Formularios de contacto y registro',
          'Integración con WhatsApp',
        ],
      },
      {
        titulo: 'Soporte',
        items: ['Dominio y hosting', 'Certificado SSL (HTTPS)', 'Mantenimiento y actualizaciones'],
      },
    ],
    proceso: [
      { titulo: 'Descubrimiento', texto: 'Entendemos tu negocio, tus clientes y lo que quieres lograr.' },
      { titulo: 'Diseño', texto: 'Te mostramos cómo se verá antes de escribir una línea de código.' },
      { titulo: 'Desarrollo', texto: 'Construimos un sitio rápido, seguro y adaptado a celular.' },
      { titulo: 'Lanzamiento', texto: 'Publicamos con dominio, HTTPS y te acompañamos después.' },
    ],
  },
  {
    slug: 'marketing',
    numero: '03',
    etiqueta: 'Crecer',
    tema: 'claro',
    titulo: 'Marketing Digital',
    resumen:
      'Estrategia y contenido para redes que construyen marca y atraen nuevos suscriptores.',
    destacados: ['Gestión de redes', 'Contenido', 'Estrategia orgánica'],
    descripcion:
      'Te ayudamos a tener presencia constante en redes con contenido que posiciona tu marca y genera oportunidades comerciales.',
    secciones: [
      {
        titulo: 'Redes sociales',
        items: ['Gestión de Facebook e Instagram', 'Calendario de contenido', 'Diseño de piezas gráficas'],
      },
      {
        titulo: 'Estrategia',
        items: ['Diagnóstico de marca', 'Estrategia orgánica', 'Reportes de resultados'],
      },
    ],
    proceso: [
      { titulo: 'Diagnóstico', texto: 'Analizamos tu marca, tu competencia y tu audiencia.' },
      { titulo: 'Estrategia', texto: 'Definimos mensajes, formatos y un calendario de publicación.' },
      { titulo: 'Contenido', texto: 'Producimos piezas que conectan con tus clientes.' },
      { titulo: 'Medición', texto: 'Revisamos resultados y ajustamos lo que no funciona.' },
    ],
  },
];

export const obtenerServicio = (slug) => SERVICIOS.find((servicio) => servicio.slug === slug);