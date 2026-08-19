import './WhatsAppButton.css'

const NUMERO_WHATSAPP = '573145178003'

export default function WhatsAppButton({ mensaje, texto = 'Consultar por WhatsApp' }) {
  const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 3.5a8.4 8.4 0 0 0-7.2 12.7L3.5 20.5l4.5-1.2A8.4 8.4 0 1 0 12 3.5Zm0 1.6a6.8 6.8 0 0 1 5.8 10.3l-.2.4.7 2.5-2.6-.7-.4.2A6.8 6.8 0 1 1 12 5.1Zm-2.7 3.4c-.2 0-.5.1-.6.3-.2.2-.7.7-.7 1.7s.7 2 .8 2.1c.1.1 1.4 2.3 3.6 3.1 1.8.7 2.1.6 2.5.5.4 0 1.2-.5 1.4-1 .2-.5.2-.9.1-1-.1-.1-.2-.2-.5-.3-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.6.9-.8 1-.1.2-.3.2-.6.1-.3-.2-1.1-.4-2-1.3-.8-.7-1.3-1.6-1.4-1.8-.1-.3 0-.4.1-.6l.4-.5c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5-.1-.1-.6-1.5-.9-2-.2-.5-.4-.4-.6-.4Z" />
      </svg>
      {texto}
    </a>
  )
}