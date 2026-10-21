// archivo: frontend/src/config/whatsapp.js

const NUMERO_WHATSAPP = '573145178003';

export const crearLinkWhatsApp = (mensaje = '') => {
  const texto = encodeURIComponent(mensaje);
  return `https://wa.me/${NUMERO_WHATSAPP}${texto ? `?text=${texto}` : ''}`;
};