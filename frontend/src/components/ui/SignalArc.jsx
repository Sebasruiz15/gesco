import './SignalArc.css'

export default function SignalArc({
  size = 120,
  color = 'var(--color-signal)',
  variant = 'static',
  className = ''
}) {
  const arcs = [
    { r: 20, opacity: 1 },
    { r: 34, opacity: 0.75 },
    { r: 48, opacity: 0.45 }
  ]

  return (
    <svg
      className={`signal-arc signal-arc--${variant} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 65 120"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="24" cy="96" r="6" fill={color} />
      {arcs.map((arc, i) => (
        <path
          key={arc.r}
          d={describeArc(24, 96, arc.r, -95, -35)}
          stroke={color}
          strokeWidth="7"
          strokeLinecap="round"
          opacity={arc.opacity}
          style={{ animationDelay: `${i * 0.25}s` }}
        />
      ))}
    </svg>
  )
}

// Helper geométrico: calcula el "d" de un arco de círculo entre dos ángulos.
function describeArc(cx, cy, r, startAngle, endAngle) {
  const polarToCartesian = (angleDeg) => {
    const angleRad = ((angleDeg - 90) * Math.PI) / 180
    return {
      x: cx + r * Math.cos(angleRad),
      y: cy + r * Math.sin(angleRad)
    }
  }
  const start = polarToCartesian(endAngle)
  const end = polarToCartesian(startAngle)
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1'
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`
}
