import { useContactModal } from '../../context/ContactModalContext.jsx'
import './ContactCTA.css'

export default function ContactCTA() {
  const { openModal } = useContactModal()

  return (
    <section className="eq-cta-band" id="cita">
      <div className="eq-container eq-cta-band__inner">
        <span className="eq-eyebrow">Acceso a la colección</span>
        <h2 className="eq-section-title">Solicite una cita privada</h2>
        <p>Las visitas a la sala de exposición se realizan bajo cita. Le confirmamos disponibilidad en menos de 24 horas.</p>
        <button type="button" className="eq-cta-band__button" onClick={() => openModal(null)}>
          Solicitar información
        </button>
      </div>
    </section>
  )
}