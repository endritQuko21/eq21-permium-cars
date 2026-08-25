import './PrivateAppointment.css'

export default function PrivateAppointment() {
  return (
    <section className="eq-appointment" id="cita">
      <div className="eq-container eq-appointment__inner">
        <span className="eq-eyebrow">Acceso a la colección</span>
        <h2 className="eq-section-title">Solicite una cita privada</h2>
        <p>
          Las visitas a la sala de exposición se realizan bajo cita. Escríbanos y le
          confirmaremos disponibilidad en menos de 24 horas.
        </p>
        <a href="mailto:contacto@eq21premiumcars.com" className="eq-appointment__cta">
          contacto@eq21premiumcars.com
        </a>
      </div>
    </section>
  )
}