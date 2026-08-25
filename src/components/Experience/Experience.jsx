import './Experience.css'

const steps = [
  { n: 'I', title: 'Selección', text: 'Filtramos cada oportunidad de compra antes de que llegue a formar parte del stock.' },
  { n: 'II', title: 'Verificación', text: 'Historial, kilometraje y estado mecánico contrastados por peritos independientes.' },
  { n: 'III', title: 'Adquisición discreta', text: 'Financiación privada y gestión documental sin exposición pública de la operación.' },
  { n: 'IV', title: 'Entrega', text: 'Entrega personalizada en el punto que elija el cliente, dentro o fuera de España.' },
]

export default function Experience() {
  return (
    <section className="eq-section eq-experience" id="experiencia">
      <div className="eq-container">
        <span className="eq-eyebrow">Cómo trabajamos</span>
        <h2 className="eq-section-title">La experiencia EQ21</h2>

        <div className="eq-experience__grid">
          {steps.map((step) => (
            <div className="eq-experience__step" key={step.n}>
              <span className="eq-experience__number">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}