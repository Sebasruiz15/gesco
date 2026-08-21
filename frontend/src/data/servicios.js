// archivo: frontend/src/data/servicios.js
export const SERVICIOS_PROYECTO = [
  {
    slug: 'express',
    etapa: 'Primer paso · sin costo',
    nombre: 'Diagnóstico Express',
    gancho: 'Su situación real, en 30 minutos',
    resumen:
      'Una sesión corta donde revisamos tres frentes clave de su operación — alivios que podría estar desaprovechando, el estado de su exoneración FUTIC y, si tiene TV, una alerta temprana sobre licencias de contenido. Sale con un informe claro de qué está bien, qué urge, y qué sigue.',
    bullets: [
      'Sesión de 30 minutos, con cita previa',
      'Informe semáforo entregado en 48 horas',
      'Sin compromiso ni letra pequeña',
    ],
    mensajeWhatsApp: 'Hola, quiero agendar el Diagnóstico Express de GESCO.',
  },
{
    slug: 'diagnostico-integral',
    etapa: 'El mapa completo',
    nombre: 'Diagnóstico Regulatorio Integral',
    gancho: 'Deje de adivinar qué le aplica',
    resumen:
      'Tras la simplificación normativa reciente, muchos PRST cumplen de más en unas obligaciones y de menos en otras, con matrices pensadas para operadores mucho más grandes. Hacemos el inventario completo de lo que realmente le aplica a usted, con un plan priorizado y un calendario de vencimientos a 12 meses.',
    bullets: [
      'Diagnóstico en los cuatro frentes de su operación',
      'Plan de regularización priorizado por urgencia',
      'Calendario de vencimientos a un año, listo para usar',
    ],
    mensajeWhatsApp: 'Hola, quiero información sobre el Diagnóstico Regulatorio Integral de GESCO.',
  },


  {
    slug: 'alivios-diferenciales',
    etapa: 'Ahorro inmediato',
    nombre: 'Diagnóstico de Alivios Diferenciales',
    gancho: 'La plata que ya le corresponde',
    resumen:
      'Muchos PRST pagan contribuciones de las que están exentos o dejan pasar beneficios del régimen diferencial simplemente porque nadie los revisó a fondo. Verificamos siete frentes concretos y le entregamos exactamente qué activar, con qué norma lo respalda.',
    bullets: [
      'Revisión municipio por municipio de sus alivios aplicables',
      'Matriz clara: qué le aplica, qué beneficio estima y cómo activarlo',
      'Con frecuencia, el primer alivio activado ya justifica el diagnóstico',
    ],
    mensajeWhatsApp: 'Hola, quiero información sobre el Diagnóstico de Alivios Diferenciales de GESCO.',
  },
  {
    slug: 'licenciamiento-contenidos',
    etapa: 'Para operadores con TV',
    nombre: 'Auditoría de Licenciamiento de Contenidos',
    gancho: 'La contingencia más cara del negocio, bajo control',
    resumen:
      'Retransmitir señales sin la licencia correcta puede generar responsabilidad económica retroactiva y acumulativa — precedentes recientes lo confirman. Revisamos su parrilla completa, el estado real de sus licencias, y le entregamos una ruta clara para regularizar antes de que sea un problema.',
    bullets: [
      'Inventario completo de señales y estado de licencias',
      'Cuantificación del riesgo por escenarios',
      'Ruta de regularización priorizada, con respaldo jurídico',
    ],
    mensajeWhatsApp: 'Hola, quiero información sobre la Auditoría de Licenciamiento de Contenidos de GESCO.',
  },
  
  {
    slug: 'excepcion-futic',
    etapa: 'Decisión financiera',
    nombre: 'Estructuración de la Excepción FUTIC',
    gancho: '¿Le conviene seguir exonerado?',
    resumen:
      'La exoneración de la contraprestación no siempre sale más barata que pagarla — y si está mal gestionada, se puede perder con efecto retroactivo. Construimos un modelo comparativo con sus datos reales para que la decisión de mantenerse, salir o entrar sea suya, con números en la mano.',
    bullets: [
      'Modelo comparativo con sus cifras reales',
      'Verificación del estado actual de su exoneración',
      'Recomendación clara: mantenerse, salir o entrar',
    ],
    mensajeWhatsApp: 'Hola, quiero información sobre la Estructuración de la Excepción FUTIC de GESCO.',
  },
]

export const NIVELES_CONTINUIDAD = [
  {
    slug: 'esencial',
    nombre: 'Esencial',
    resumen: 'La base para no perder de vista sus obligaciones.',
    bullets: [
      'Matriz viva de sus obligaciones, siempre actualizada',
      'Calendario regulatorio con alertas anticipadas',
      'Radicación de sus reportes periódicos ante CRC',
      'Informe trimestral de estado de cumplimiento',
    ],
    mensajeWhatsApp: 'Hola, quiero información sobre el nivel Esencial de acompañamiento continuo de GESCO.',
  },
  {
    slug: 'preventivo',
    nombre: 'Preventivo',
    resumen: 'Todo lo Esencial, más una capa de prevención activa.',
    bullets: [
      'Todo lo del nivel Esencial',
      'Auditoría preventiva anual (simulacro de visita incluido)',
      'Operación de reportes de exoneración, si aplica',
      'Revisión anual de su contrato de usuarios y proceso de PQR',
    ],
    mensajeWhatsApp: 'Hola, quiero información sobre el nivel Preventivo de acompañamiento continuo de GESCO.',
  },
  {
    slug: 'aliado',
    nombre: 'Aliado',
    resumen: 'Acompañamiento completo, con respuesta prioritaria.',
    bullets: [
      'Todo lo del nivel Preventivo',
      'Acompañamiento en requerimientos y actuaciones de los entes',
      'Presencia en visitas y auditorías cuando las haya',
      'Mesa de consulta prioritaria y bolsa mensual de consultoría',
    ],
    mensajeWhatsApp: 'Hola, quiero información sobre el nivel Aliado de acompañamiento continuo de GESCO.',
  },
]