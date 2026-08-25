import { useEffect, useState } from 'react'
import { cars } from '../../data/cars.js'
import { useContactModal } from '../../context/ContactModalContext.jsx'
import './ContactModal.css'

export default function ContactModal() {
  const { isOpen, car, closeModal, selectCar, clearCar } = useContactModal()
  const [form, setForm] = useState({ nombre: '', apellidos: '', telefono: '', email: '', mensaje: '' })
  const [sent, setSent] = useState(false)
  const [pickerOpen, setPickerOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    setSent(false)
    setPickerOpen(false)
    setForm((prev) => ({
      ...prev,
      mensaje: car
        ? `Me interesa el ${car.brand} ${car.model} (${car.ref}). Quisiera más información.`
        : '',
    }))
  }, [isOpen, car])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeModal() }
    if (isOpen) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, closeModal])

  if (!isOpen) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = car ? `Consulta — ${car.brand} ${car.model} (${car.ref})` : 'Consulta EQ21 Premium Cars'
    const body = `Nombre: ${form.nombre} ${form.apellidos}%0D%0ATeléfono: ${form.telefono}%0D%0AEmail: ${form.email}%0D%0A%0D%0A${encodeURIComponent(form.mensaje)}`
    window.location.href = `mailto:contacto@eq21premiumcars.com?subject=${encodeURIComponent(subject)}&body=${body}`
    setSent(true)
  }

  return (
    <div className="eq-modal" role="dialog" aria-modal="true" onClick={closeModal}>
      <div className="eq-modal__panel" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="eq-modal__close" onClick={closeModal} aria-label="Cerrar">×</button>

        <span className="eq-eyebrow">Acceso a la colección</span>
        <h2>Solicite información</h2>
        <p className="eq-modal__lead">Respondemos en menos de 24 horas.</p>

        <div className="eq-modal__car">
          {car ? (
            <div className="eq-modal__car-chip">
              <div className="eq-modal__car-chip-media" style={{ backgroundImage: `url(${car.image})` }} />
              <div className="eq-modal__car-chip-info">
                <span>{car.ref}</span>
                <strong>{car.brand} {car.model}</strong>
                <span className="eq-modal__car-chip-price">{car.price}</span>
              </div>
              <div className="eq-modal__car-chip-actions">
                <button type="button" onClick={() => setPickerOpen((v) => !v)}>Cambiar</button>
                <button type="button" onClick={clearCar} className="eq-modal__car-chip-remove" aria-label="Quitar coche">×</button>
              </div>
            </div>
          ) : (
            <button type="button" className="eq-modal__car-add" onClick={() => setPickerOpen((v) => !v)}>
              + Referenciar un vehículo de la colección
            </button>
          )}

          {pickerOpen && (
            <ul className="eq-modal__car-picker">
              {cars.map((c) => (
                <li key={c.id}>
                  <button type="button" onClick={() => { selectCar(c); setPickerOpen(false) }}>
                    <span>{c.ref}</span>{c.brand} {c.model}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <form className="eq-modal__form" onSubmit={handleSubmit}>
          <div className="eq-modal__row">
            <label>
              Nombre
              <input type="text" name="nombre" value={form.nombre} onChange={handleChange} required />
            </label>
            <label>
              Apellidos
              <input type="text" name="apellidos" value={form.apellidos} onChange={handleChange} required />
            </label>
          </div>

          <div className="eq-modal__row">
            <label>
              Teléfono
              <input type="tel" name="telefono" value={form.telefono} onChange={handleChange} required />
            </label>
            <label>
              Email
              <input type="email" name="email" value={form.email} onChange={handleChange} required />
            </label>
          </div>

          <label>
            Mensaje
            <textarea name="mensaje" rows="4" value={form.mensaje} onChange={handleChange} required />
          </label>

          <button type="submit" className="eq-modal__submit">Enviar solicitud</button>

          {sent && <p className="eq-modal__sent">Gracias. Se abrirá tu cliente de correo para confirmar el envío.</p>}
        </form>
      </div>
    </div>
  )
}