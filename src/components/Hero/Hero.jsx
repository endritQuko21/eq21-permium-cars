import { useState } from 'react'
import { Link } from 'react-router-dom'
import { cars } from '../../data/cars.js'
import { formatPrice } from '../../utils/format.js'
import { useContactModal } from '../../context/ContactModalContext.jsx'
import './Hero.css'

const showcase = cars.filter((c) => c.isNew).slice(0, 4)

const stats = [
  { value: '24', label: 'Años de trayectoria' },
  { value: '180+', label: 'Vehículos entregados' },
  { value: '100%', label: 'Unidades verificadas' },
]

export default function Hero() {
  const { openModal } = useContactModal()
  const [active, setActive] = useState(0)
  const car = showcase[active] ?? cars[0]

  return (
    <section className="eq-hero">
      {/*<div className="eq-hero__marquee" aria-hidden="true">
        <div className="eq-hero__marquee-track">
          {[...cars, ...cars].map((c, i) => (
            <span key={`${c.id}-${i}`}>{c.ref} — {c.brand} {c.model}</span>
          ))}
        </div>
      </div>*/}

      <div className="eq-container eq-hero__grid">
        <div className="eq-hero__intro">
          <span className="eq-hero__ghost-number">01</span>
          <span className="eq-eyebrow">Girona · Venta privada de automóviles</span>
          <h1 className="eq-hero__title">
            Una colección reducida,
            <em> elegida con criterio.</em>
          </h1>
          <p className="eq-hero__subtitle">
            En EQ21 no exponemos stock, presentamos vehículos. Cada unidad pasa por un proceso
            de selección y verificación antes de formar parte de la colección.
          </p>
          <div className="eq-hero__actions">
            <Link to="/stock" className="eq-hero__cta-primary">Ver colección</Link>
            <button type="button" className="eq-hero__cta-secondary" onClick={() => openModal(null)}>
              Solicitar cita privada
            </button>
          </div>

          <div className="eq-hero__stats">
            {stats.map((stat) => (
              <div className="eq-hero__stat" key={stat.label}>
                <span className="eq-hero__stat-value">{stat.value}</span>
                <span className="eq-hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="eq-hero__showcase">
          <Link
            to="/stock"
            key={car.id}
            className="eq-hero__showcase-main"
            style={{ backgroundImage: `url(${car.image})` }}
          >
            <span className="eq-hero__showcase-ref">{car.ref}</span>
            <div className="eq-hero__showcase-body">
              <span className="eq-eyebrow">Pieza destacada</span>
              <h3>{car.brand} <em>{car.model}</em></h3>
              <div className="eq-hero__showcase-footer">
                <span>{formatPrice(car.price)}</span>
                <span className="eq-hero__showcase-link">Ver ficha →</span>
              </div>
            </div>
          </Link>

          <div className="eq-hero__rail">
            {showcase.map((c, i) => (
              <button
                key={c.id}
                type="button"
                className={`eq-hero__rail-thumb ${i === active ? 'is-active' : ''}`}
                style={{ backgroundImage: `url(${c.image})` }}
                onClick={() => setActive(i)}
                aria-label={`${c.brand} ${c.model}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="eq-hero__scroll"><span /></div>
    </section>
  )
}