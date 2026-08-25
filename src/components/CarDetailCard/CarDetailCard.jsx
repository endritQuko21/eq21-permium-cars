import { useState } from 'react'
import './CarDetailCard.css'

export default function CarDetailCard({ car }) {
  const [open, setOpen] = useState(false)

  return (
    <article className={`eq-detail-card ${open ? 'is-open' : ''}`}>
      <div className="eq-detail-card__media" style={{ backgroundImage: `url(${car.image})` }}>
        <span className="eq-detail-card__ref">{car.ref}</span>
        {car.isNew && <span className="eq-detail-card__badge">Nueva incorporación</span>}
      </div>

      <div className="eq-detail-card__body">
        <span className="eq-eyebrow">{car.category}</span>
        <h3>{car.brand} <em>{car.model}</em></h3>
        <span className="eq-detail-card__year">{car.year}</span>

        <button className="eq-detail-card__toggle" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
          {open ? 'Cerrar expediente' : 'Abrir expediente'}
        </button>

        {open && (
          <dl className="eq-detail-card__specs">
            <div><dt>Motor</dt><dd>{car.engine}</dd></div>
            <div><dt>Potencia</dt><dd>{car.power}</dd></div>
            <div><dt>Transmisión</dt><dd>{car.transmission}</dd></div>
            <div><dt>Kilometraje</dt><dd>{car.mileage}</dd></div>
          </dl>
        )}

        <div className="eq-detail-card__footer">
          <span>Precio bajo consulta</span>
          <a href="/#cita">Solicitar informe →</a>
        </div>
      </div>
    </article>
  )
}