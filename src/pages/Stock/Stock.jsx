import { useState } from 'react'
import { cars } from '../../data/cars.js'
import CarDetailCard from '../../components/CarDetailCard/CarDetailCard.jsx'
import './Stock.css'

const categories = ['Todos', ...new Set(cars.map((c) => c.category))]

export default function Stock() {
  const [filter, setFilter] = useState('Todos')
  const visible = filter === 'Todos' ? cars : cars.filter((c) => c.category === filter)

  return (
    <section className="eq-stock">
      <div className="eq-container">
        <div className="eq-stock__header">
          <span className="eq-eyebrow">Colección actual</span>
          <h1 className="eq-section-title">Stock EQ21</h1>
          <p>{visible.length} vehículos disponibles</p>
        </div>

        <div className="eq-stock__filters">
          {categories.map((cat) => (
            <button key={cat} className={filter === cat ? 'is-active' : ''} onClick={() => setFilter(cat)}>
              {cat}
            </button>
          ))}
        </div>

        <div className="eq-stock__grid">
          {visible.map((car) => (
            <CarDetailCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  )
}