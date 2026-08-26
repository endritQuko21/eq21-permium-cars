import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useContactModal } from '../../context/ContactModalContext.jsx'
import './Header.css'

export default function Header() {
  const { openModal } = useContactModal()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <>
      <header className={`eq-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="eq-container eq-header__inner">
          <nav className="eq-header__side eq-header__side--left">
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'is-active' : '')}>Home</NavLink>
            <NavLink to="/stock" className={({ isActive }) => (isActive ? 'is-active' : '')}>Stock</NavLink>
          </nav>

          <Link to="/" className="eq-header__logo">
            <span className="eq-header__logo-main">EQ21</span>
            <span className="eq-header__logo-sub">Premium Cars</span>
          </Link>

          <div className="eq-header__side eq-header__side--right">
            <a href="/#experiencia">Servicios</a>
            <button type="button" className="eq-header__cta" onClick={() => openModal(null)}>
              Cita Privada
            </button>
          </div>

          <button type="button" className="eq-header__burger" onClick={() => setMenuOpen(true)} aria-label="Abrir menú">
            <span /><span />
          </button>
        </div>
      </header>

      <div className={`eq-menu ${menuOpen ? 'is-open' : ''}`}>
        <div className="eq-menu__top">
          <span className="eq-header__logo-main">EQ21</span>
          <button type="button" onClick={() => setMenuOpen(false)} aria-label="Cerrar menú">×</button>
        </div>

        <nav className="eq-menu__nav">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/stock" onClick={() => setMenuOpen(false)}>Stock</Link>
          <a href="/#experiencia" onClick={() => setMenuOpen(false)}>Servicios</a>
          <a href="/#cita" onClick={() => setMenuOpen(false)}>Contacto</a>
        </nav>

        <button
          type="button"
          className="eq-menu__cta"
          onClick={() => { setMenuOpen(false); openModal(null) }}
        >
          Solicitar cita privada
        </button>
      </div>
    </>
  )
}