import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <section className="eq-hero">
      <div className="eq-container eq-hero__inner">
        <span className="eq-eyebrow">Girona · Venta privada de automóviles</span>
        <h1 className="eq-hero__title">Una colección reducida,<br /> elegida con criterio.</h1>
        <p className="eq-hero__subtitle">
          En EQ21 no exponemos stock, presentamos vehículos. Cada unidad pasa por un proceso
          de selección y verificación antes de formar parte de la colección.
        </p>
        <div className="eq-hero__actions">
          <Link to="/stock" className="eq-hero__cta-primary">Ver colección</Link>
          <a href="/#cita" className="eq-hero__cta-secondary">Solicitar cita privada</a>
        </div>
      </div>
      <div className="eq-hero__scroll"><span /></div>
    </section>
  )
}