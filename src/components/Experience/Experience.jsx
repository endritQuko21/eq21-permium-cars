import './Experience.css'

const steps = [
  {
    n: 'I',
    title: 'Selección',
    text: 'Filtramos cada oportunidad de compra antes de que llegue a formar parte de la colección.',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.3">
        <circle cx="10.5" cy="10.5" r="6.5" />
        <line x1="15.5" y1="15.5" x2="21" y2="21" />
      </svg>
    ),
  },
  {
    n: 'II',
    title: 'Verificación',
    text: 'Historial, kilometraje y estado mecánico contrastados por peritos independientes.',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    n: 'III',
    title: 'Adquisición discreta',
    text: 'Financiación privada y gestión documental sin exposición pública de la operación.',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.3">
        <rect x="4" y="10" width="16" height="10" rx="1.5" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </svg>
    ),
  },
  {
    n: 'IV',
    title: 'Entrega',
    text: 'Entrega personalizada en el punto que elija el cliente, dentro o fuera de España.',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M3 16V7a1 1 0 0 1 1-1h9v10" />
        <path d="M13 10h4l4 4v2h-2" />
        <circle cx="7.5" cy="17.5" r="1.6" />
        <circle cx="17.5" cy="17.5" r="1.6" />
      </svg>
    ),
  },
]

export default function Experience() {
  return (
    <section className="eq-section eq-experience" id="experiencia">
      <div className="eq-container">
        <span className="eq-eyebrow">Cómo trabajamos</span>
        <h2 className="eq-section-title">La experiencia EQ21</h2>

        <div className="eq-experience__timeline">
          {steps.map((step) => (
            <div className="eq-experience__step" key={step.n}>
              <div className="eq-experience__node">
                <span className="eq-experience__icon">{step.icon}</span>
                <span className="eq-experience__number">{step.n}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}