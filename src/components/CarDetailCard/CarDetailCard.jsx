import { useContactModal } from '../../context/ContactModalContext.jsx'
import './CarDetailCard.css'

export default function CarDetailCard({ car }) {
  const { openModal } = useContactModal()

  return (
    <article className="eq-detail-card">
      <div className="eq-detail-card__media" style={{ backgroundImage: `url(${car.image})` }}>
        <span className="eq-detail-card__ref">{car.ref}</span>
        {car.isNew && <span className="eq-detail-card__badge">Nueva incorporación</span>}
      </div>

      <div className="eq-detail-card__body">
        <span className="eq-eyebrow">{car.category}</span>
        <h3>{car.brand} <em>{car.model}</em></h3>
        <span className="eq-detail-card__year">{car.year}</span>

        <dl className="eq-detail-card__specs">
          <div><dt>Motor</dt><dd>{car.engine}</dd></div>
          <div><dt>Potencia</dt><dd>{car.power}</dd></div>
          <div><dt>Transmisión</dt><dd>{car.transmission}</dd></div>
          <div><dt>Kilometraje</dt><dd>{car.mileage}</dd></div>
        </dl>

        <div className="eq-detail-card__price-row">
          <span>Precio</span>
          <strong>{car.price}</strong>
        </div>

        <button type="button" className="eq-detail-card__cta" onClick={() => openModal(car)}>
          Solicitar información
        </button>
      </div>
    </article>
  )
}