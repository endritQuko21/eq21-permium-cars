import { Link } from 'react-router-dom'
import './CarMiniCard.css'

export default function CarMiniCard({ car }) {
  return (
    <article className="eq-mini-card">
      <div className="eq-mini-card__media" style={{ backgroundImage: `url(${car.image})` }}>
        <span className="eq-mini-card__ref">{car.ref}</span>
      </div>
      <div className="eq-mini-card__body">
        <span className="eq-eyebrow">{car.year} · {car.category}</span>
        <h3>{car.brand} <em>{car.model}</em></h3>
        <Link to="/stock" className="eq-mini-card__link">Ver en colección →</Link>
      </div>
    </article>
  )
}