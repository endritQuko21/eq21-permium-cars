import './Guarantee.css'

const items = [
  { title: 'Garantía mecánica', text: '12 meses incluidos en todas las unidades, sin coste adicional ni letra pequeña.' },
  { title: 'Periodo de prueba', text: '7 días o 500 km para formalizar la decisión con calma tras la entrega.' },
  { title: 'Asistencia postventa', text: 'Línea directa con nuestro taller de confianza durante el primer año.' },
]

export default function Guarantee() {
  return (
    <section className="eq-section eq-guarantee">
      <div className="eq-container">
        <span className="eq-eyebrow">Después de la entrega</span>
        <h2 className="eq-section-title">Compromiso EQ21</h2>

        <div className="eq-guarantee__grid">
          {items.map((item, i) => (
            <div className="eq-guarantee__card" key={item.title}>
              <span className="eq-guarantee__index">{String(i + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}