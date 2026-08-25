import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`eq-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="eq-header__inner eq-container">
        <Link to="/" className="eq-header__logo">
          <span className="eq-header__logo-main">EQ21</span>
          <span className="eq-header__logo-sub">Premium Cars</span>
        </Link>

        <nav className="eq-header__nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'is-active' : '')}>Colección</NavLink>
          <NavLink to="/stock" className={({ isActive }) => (isActive ? 'is-active' : '')}>Stock</NavLink>
          <a href="/#experiencia">Servicios</a>
          <a href="/#cita">Contacto</a>
        </nav>

        <a href="/#cita" className="eq-header__cta">Cita Privada</a>
      </div>
    </header>
  )
}