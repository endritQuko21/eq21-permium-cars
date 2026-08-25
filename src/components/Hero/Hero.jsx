import { Link } from 'react-router-dom'
import { cars } from '../../data/cars.js'
import { useContactModal } from '../../context/ContactModalContext.jsx'
import './Hero.css'

const stats = [
  { value: '24', label: 'Años de trayectoria' },
  { value: '180+', label: 'Vehículos entregados' },
  { value: '100%', label: 'Unidades verificadas' },
]

export default function Hero() {
  const featured = cars.find((c) => c.featured) ?? cars[0]

  return (
    <section className="eq-hero">
      <div className="eq-container eq-hero__grid">
        <div className="eq-hero__intro">
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
        </div>

        <Link to="/stock" className="eq-hero__featured" style={{ backgroundImage: `url(${featured.image})` }}>
          <span className="eq-hero__featured-ref">{featured.ref}</span>
          <div className="eq-hero__featured-body">
            <span className="eq-eyebrow">Pieza destacada</span>
            <h3>{featured.brand} <em>{featured.model}</em></h3>
            <div className="eq-hero__featured-footer">
              <span>{featured.price}</span>
              <span className="eq-hero__featured-link">Ver ficha →</span>
            </div>
          </div>
        </Link>
      </div>

      <div className="eq-container eq-hero__stats">
        {stats.map((stat) => (
          <div className="eq-hero__stat" key={stat.label}>
            <span className="eq-hero__stat-value">{stat.value}</span>
            <span className="eq-hero__stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="eq-hero__scroll"><span /></div>
    </section>
  )
}