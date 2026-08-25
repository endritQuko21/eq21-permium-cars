import './Guarantee.css'

const items = [
  { label: 'Garantía', value: '12 meses en todas las unidades' },
  { label: 'Inspección', value: 'Informe de 150 puntos' },
  { label: 'Procedencia', value: 'Historial documentado y verificado' },
]

export default function Guarantee() {
  return (
    <section className="eq-section eq-guarantee">
      <div className="eq-container eq-guarantee__grid">
        {items.map((item) => (
          <div className="eq-guarantee__item" key={item.label}>
            <span className="eq-eyebrow">{item.label}</span>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}