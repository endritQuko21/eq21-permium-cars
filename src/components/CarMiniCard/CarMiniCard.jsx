import { useContactModal } from '../../context/ContactModalContext.jsx'
import { formatPrice } from '../../utils/format.js'
import './CarMiniCard.css'

export default function CarMiniCard({ car }) {
  const { openModal } = useContactModal()

  return (
    <article className="eq-mini-card">
      <div className="eq-mini-card__media" style={{ backgroundImage: `url(${car.image})` }}>
        <span className="eq-mini-card__ref">{car.ref}</span>
      </div>
      <div className="eq-mini-card__body">
        <span className="eq-eyebrow">{car.year} · {car.category}</span>
        <h3>{car.brand} <em>{car.model}</em></h3>
        <div className="eq-mini-card__footer">
          <span className="eq-mini-card__price">{formatPrice(car.price)}</span>
          <button type="button" className="eq-mini-card__link" onClick={() => openModal(car)}>
            Consultar →
          </button>
        </div>
      </div>
    </article>
  )
}