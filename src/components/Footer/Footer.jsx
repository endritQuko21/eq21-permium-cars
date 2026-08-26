import { Link } from 'react-router-dom'
import { useContactModal } from '../../context/ContactModalContext.jsx'
import './Footer.css'

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

export default function Footer() {
  const { openModal } = useContactModal()

  return (
    <footer className="eq-footer">
      <div className="eq-container eq-footer__top">
        <div className="eq-footer__brand">
          <span className="eq-footer__logo">EQ21</span>
          <span className="eq-footer__logo-sub">Premium Cars</span>
          <p>Vehículos seleccionados, procedencia verificada y entrega discreta desde Girona.</p>
          <div className="eq-footer__social">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.4">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="https://wa.me/34600000000" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M4 20l1.3-3.9A8 8 0 1 1 8 19l-4 1Z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.4">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <circle cx="7" cy="7" r="0.6" fill="currentColor" stroke="none" />
                <line x1="7" y1="10" x2="7" y2="17" />
                <path d="M11 17v-4.5a2.5 2.5 0 0 1 5 0V17" />
                <line x1="11" y1="10" x2="11" y2="17" />
              </svg>
            </a>
          </div>
        </div>

        <div className="eq-footer__col">
          <span className="eq-footer__col-title">Colección</span>
          <Link to="/">Home</Link>
          <Link to="/stock">Stock completo</Link>
          <Link to="/stock">New Arrivals</Link>
        </div>

        <div className="eq-footer__col">
          <span className="eq-footer__col-title">EQ21</span>
          <a href="/#experiencia">Nuestro proceso</a>
          <a href="/#cita">Garantías</a>
          <button type="button" onClick={() => openModal(null)}>Cita privada</button>
        </div>

        <div className="eq-footer__col eq-footer__contact">
          <span className="eq-footer__col-title">Contacto</span>
          <span>Girona, España</span>
          <a href="tel:+34600000000">+34 600 000 000</a>
          <a href="mailto:contacto@eq21premiumcars.com">contacto@eq21premiumcars.com</a>
          <span className="eq-footer__hours">Visitas bajo cita · L–V 10:00–19:00</span>
        </div>
      </div>

      {/*<button type="button" className="eq-footer__wordmark" onClick={scrollTop} aria-label="Volver arriba">
        EQ21
      </button>*/}

      <div className="eq-container eq-footer__legal">
        <span>© {new Date().getFullYear()} EQ21 Premium Cars. Todos los derechos reservados.</span>
        <div className="eq-footer__legal-links">
          <a href="#">Aviso legal</a>
          <a href="#">Privacidad</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  )
}