import { useContactModal } from '../../context/ContactModalContext.jsx'
import './ContactCTA.css'

export default function ContactCTA() {
  const { openModal } = useContactModal()

  return (
    <section className="eq-cta-band" id="cita">
      <div className="eq-container eq-cta-band__inner">
        <span className="eq-eyebrow">Encargos a medida</span>
        <h2 className="eq-section-title">¿Busca un modelo concreto?</h2>
        <p>
          Si no encuentra la unidad que necesita en la colección actual, nuestro equipo la localiza
          a través de la red de contactos EQ21, dentro y fuera de España.
        </p>
        <button type="button" className="eq-cta-band__button" onClick={() => openModal(null)}>
          Iniciar búsqueda a medida
        </button>
      </div>
    </section>
  )
}