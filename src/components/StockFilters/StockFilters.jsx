import { cars } from '../../data/cars.js'
import './StockFilters.css'

const brands = [...new Set(cars.map((c) => c.brand))].sort()
const categories = [...new Set(cars.map((c) => c.category))].sort()
const fuels = [...new Set(cars.map((c) => c.fuel))].sort()

const priceSteps = [75000, 100000, 125000, 150000, 175000, 200000, 250000, 300000]
const yearSteps = [2018, 2019, 2020, 2021, 2022, 2023, 2024]
const kmSteps = [2000, 5000, 10000, 15000, 20000, 30000]
const powerSteps = [450, 500, 550, 600, 650, 700]

export default function StockFilters({ filters, onToggle, onUpdate, onReset, activeCount, isOpen, onClose }) {
  return (
    <>
      {isOpen && <div className="eq-filters__backdrop" onClick={onClose} />}
      <aside className={`eq-filters ${isOpen ? 'is-open' : ''}`}>
        <div className="eq-filters__head">
          <span className="eq-eyebrow">Buscador</span>
          {activeCount > 0 && (
            <button type="button" className="eq-filters__reset" onClick={onReset}>Limpiar ({activeCount})</button>
          )}
          <button type="button" className="eq-filters__close" onClick={onClose} aria-label="Cerrar filtros">×</button>
        </div>

        <label className="eq-filters__search">
          <input
            type="text"
            placeholder="Buscar marca o modelo…"
            value={filters.search}
            onChange={(e) => onUpdate('search', e.target.value)}
          />
        </label>

        <div className="eq-filters__group">
          <span className="eq-filters__group-title">Marca</span>
          {brands.map((brand) => (
            <label key={brand} className="eq-filters__checkbox">
              <input type="checkbox" checked={filters.brands.includes(brand)} onChange={() => onToggle('brands', brand)} />
              {brand}
            </label>
          ))}
        </div>

        <div className="eq-filters__group">
          <span className="eq-filters__group-title">Carrocería</span>
          {categories.map((category) => (
            <label key={category} className="eq-filters__checkbox">
              <input type="checkbox" checked={filters.categories.includes(category)} onChange={() => onToggle('categories', category)} />
              {category}
            </label>
          ))}
        </div>

        <div className="eq-filters__group">
          <span className="eq-filters__group-title">Combustible</span>
          {fuels.map((fuel) => (
            <label key={fuel} className="eq-filters__checkbox">
              <input type="checkbox" checked={filters.fuels.includes(fuel)} onChange={() => onToggle('fuels', fuel)} />
              {fuel}
            </label>
          ))}
        </div>

        <div className="eq-filters__group">
          <span className="eq-filters__group-title">Precio máximo</span>
          <select value={filters.priceMax} onChange={(e) => onUpdate('priceMax', e.target.value)}>
            <option value="">Sin límite</option>
            {priceSteps.map((step) => (
              <option key={step} value={step}>hasta {step.toLocaleString('es-ES')} €</option>
            ))}
          </select>
        </div>

        <div className="eq-filters__group">
          <span className="eq-filters__group-title">Año mínimo</span>
          <select value={filters.yearMin} onChange={(e) => onUpdate('yearMin', e.target.value)}>
            <option value="">Cualquiera</option>
            {yearSteps.map((year) => (
              <option key={year} value={year}>desde {year}</option>
            ))}
          </select>
        </div>

        <div className="eq-filters__group">
          <span className="eq-filters__group-title">Kilometraje máximo</span>
          <select value={filters.kmMax} onChange={(e) => onUpdate('kmMax', e.target.value)}>
            <option value="">Sin límite</option>
            {kmSteps.map((km) => (
              <option key={km} value={km}>hasta {km.toLocaleString('es-ES')} km</option>
            ))}
          </select>
        </div>

        <div className="eq-filters__group">
          <span className="eq-filters__group-title">Potencia mínima</span>
          <select value={filters.powerMin} onChange={(e) => onUpdate('powerMin', e.target.value)}>
            <option value="">Cualquiera</option>
            {powerSteps.map((power) => (
              <option key={power} value={power}>desde {power} CV</option>
            ))}
          </select>
        </div>

        <label className="eq-filters__checkbox eq-filters__checkbox--standalone">
          <input type="checkbox" checked={filters.onlyNew} onChange={(e) => onUpdate('onlyNew', e.target.checked)} />
          Solo new arrivals
        </label>
      </aside>
    </>
  )
}