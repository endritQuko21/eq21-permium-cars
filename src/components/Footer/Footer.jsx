import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="eq-footer">
      <div className="eq-container eq-footer__inner">
        <div className="eq-footer__brand">
          <span className="eq-footer__logo">EQ21</span>
          <p>Vehículos seleccionados, procedencia verificada, entrega discreta.</p>
        </div>

        <nav className="eq-footer__nav">
          <Link to="/">Colección</Link>
          <Link to="/stock">Stock</Link>
          <a href="/#experiencia">Servicios</a>
          <a href="/#cita">Cita privada</a>
        </nav>

        <div className="eq-footer__contact">
          <span>Girona, España</span>
          <a href="mailto:contacto@eq21premiumcars.com">contacto@eq21premiumcars.com</a>
        </div>
      </div>

      <div className="eq-container eq-footer__legal">
        <span>© {new Date().getFullYear()} EQ21 Premium Cars. Todos los derechos reservados.</span>
      </div>
    </footer>
  )
}