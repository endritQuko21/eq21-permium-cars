import { cars } from '../../data/cars.js'
import CarMiniCard from '../CarMiniCard/CarMiniCard.jsx'
import './NewArrivals.css'

export default function NewArrivals() {
  const arrivals = cars.filter((car) => car.isNew).slice(0, 3)

  return (
    <section className="eq-section eq-arrivals">
      <div className="eq-container">
        <div className="eq-arrivals__header">
          <span className="eq-eyebrow">Recién incorporados</span>
          <h2 className="eq-section-title">New Arrivals</h2>
        </div>

        <div className="eq-arrivals__grid">
          {arrivals.map((car) => (
            <CarMiniCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  )
}