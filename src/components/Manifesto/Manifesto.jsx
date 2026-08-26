import './Manifesto.css'

export default function Manifesto() {
  return (
    <section className="eq-section eq-manifesto">
      <div className="eq-container eq-manifesto__grid">
        <div className="eq-manifesto__main">
          <span className="eq-eyebrow">La casa</span>
          <blockquote className="eq-manifesto__quote">
            «No vendemos coches. Custodiamos vehículos hasta que encuentran a su siguiente propietario.»
          </blockquote>
          <p className="eq-manifesto__text">
            Existen más compradores capaces que vehículos dignos de la colección. Por eso elegimos
            deliberadamente vender pocos, conocer a cada cliente por su nombre y no publicar nunca
            todo lo que tenemos disponible.
          </p>
          <span className="eq-manifesto__signature">EQ21 — Girona</span>
        </div>

        <aside className="eq-manifesto__plaque">
          <span className="eq-manifesto__plaque-mark">EQ21</span>
          <span className="eq-manifesto__plaque-text">Casa fundadora · Girona</span>
        </aside>
      </div>
    </section>
  )
}