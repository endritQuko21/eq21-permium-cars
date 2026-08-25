import './Manifesto.css'

export default function Manifesto() {
  return (
    <section className="eq-section eq-manifesto">
      <div className="eq-container eq-manifesto__inner">
        <span className="eq-eyebrow">La casa</span>
        <blockquote className="eq-manifesto__quote">
          «No vendemos coches. Custodiamos vehículos hasta que encuentran a su siguiente propietario.»
        </blockquote>
        <p className="eq-manifesto__text">
          EQ21 nace en Girona con un criterio simple: menos unidades, más rigor. Cada vehículo que
          entra en la colección es inspeccionado, documentado y, cuando es necesario, restaurado por
          talleres de confianza antes de estar disponible.
        </p>
      </div>
    </section>
  )
}