// archivo: frontend/src/data/entesRegulatorios.js
export const ENTES_REGULATORIOS = [
  {
    slug: 'rutic',
    nombre: 'RUTIC',
    resumen: 'Registro Único de TIC — su habilitación como PRST.',
    href: 'https://www.mintic.gov.co/portal/inicio/Tramites-y-servicios/Registros/6398:Registro-Unico-de-TIC-Industria-de-Comunicaciones',
    tips: [
      'Verifique que su PRST esté correctamente clasificado en el RUTIC (tipo de servicio, cobertura) antes de iniciar operación — un registro mal clasificado se detecta en la primera auditoría.',
      'Actualice el RUTIC cada vez que cambien datos societarios, representante legal o portafolio de servicios; la información desactualizada es causal de requerimiento.',
      'Conserve siempre a la mano su certificado de inscripción vigente — es el primer documento que exige cualquier visita de vigilancia y control.',
    ],
  },
  {
    slug: 'mintic',
    nombre: 'MinTIC',
    resumen: 'Vigilancia, control y cumplimiento operativo del sector.',
    href: 'https://www.mintic.gov.co/',
    tips: [
      'Formule y adopte el Plan de Gestión de Riesgo de Desastres exigido por la Circular 003 de 2018, incluso si es un PRST pequeño.',
      'Publique y mantenga actualizada en su portal web la información de planes, tarifas y canales de PQR conforme a las circulares vigentes.',
      'Responda con evidencia documentada cualquier requerimiento de la Dirección de Vigilancia y Control — el silencio o la demora agravan cualquier hallazgo.',
    ],
  },
  {
    slug: 'crc',
    nombre: 'CRC',
    resumen: 'Reportes periódicos, contribución anual y protección al usuario.',
    href: 'https://www.crcom.gov.co/',
    tips: [
      'Identifique con precisión cuáles de los 45 formatos del RRIP le aplican según su tipo de servicio — reportar de más o de menos genera inconsistencias.',
      'Calcule y provisione con anticipación la contribución CRC (0,1416% de ingresos brutos en 2026) para no enfrentar sanciones por pago tardío.',
      'Si es proveedor FTTH, publique antes de octubre de 2026 el botón visible hacia los mapas de cobertura en su portal.',
    ],
  },
  {
    slug: 'sic',
    nombre: 'SIC',
    resumen: 'PQR, protección al consumidor y datos personales.',
    href: 'https://sedeelectronica.sic.gov.co/',
    tips: [
      'Responda las PQR dentro de los 15 días hábiles: pasado ese plazo opera el silencio administrativo positivo a favor del usuario.',
      'Revise sus contratos y cláusulas de permanencia — condicionar la portabilidad o la cancelación es causal directa de sanción.',
      'Documente el tratamiento de datos personales de sus usuarios conforme al régimen de protección de datos que vigila la SIC.',
    ],
  },
  {
    slug: 'ane',
    nombre: 'ANE',
    resumen: 'Uso del espectro radioeléctrico y equipos técnicos.',
    href: 'https://www.ane.gov.co/',
    tips: [
      'Si opera enlaces inalámbricos o redes WISP, verifique que el pago por uso del espectro esté al día según las condiciones técnicas vigentes.',
      'Confirme que sus equipos de radiofrecuencia cumplan los parámetros técnicos homologados antes de ponerlos en operación.',
      'Si presta servicios críticos, revise su rol dentro del Sistema Nacional de Telecomunicaciones de Emergencia junto con el MinTIC.',
    ],
  },
]