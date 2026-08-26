import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { cars } from '../../data/cars.js'
import CarDetailCard from '../../components/CarDetailCard/CarDetailCard.jsx'
import StockFilters from '../../components/StockFilters/StockFilters.jsx'
import './Stock.css'

const defaultFilters = {
  search: '',
  brands: [],
  categories: [],
  fuels: [],
  onlyNew: false,
  priceMax: '',
  yearMin: '',
  kmMax: '',
  powerMin: '',
}

const sortOptions = [
  { value: 'relevance', label: 'Relevancia' },
  { value: 'price-asc', label: 'Precio: menor a mayor' },
  { value: 'price-desc', label: 'Precio: mayor a menor' },
  { value: 'year-desc', label: 'Año: más reciente' },
  { value: 'km-asc', label: 'Kilometraje: menor' },
  { value: 'power-desc', label: 'Potencia: mayor' },
]

export default function Stock() {
  const [searchParams] = useSearchParams()
  const [filters, setFilters] = useState(() => ({
    ...defaultFilters,
    search: searchParams.get('q') || '',
    categories: searchParams.get('category') ? [searchParams.get('category')] : [],
  }))
  const [sort, setSort] = useState('relevance')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const toggleValue = (key, value) => {
    setFilters((prev) => {
      const current = prev[key]
      const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value]
      return { ...prev, [key]: next }
    })
  }

  const updateFilter = (key, value) => setFilters((prev) => ({ ...prev, [key]: value }))
  const resetFilters = () => setFilters(defaultFilters)

  const filtered = useMemo(() => {
    let result = cars.filter((car) => {
      const matchesSearch = filters.search
        ? `${car.brand} ${car.model}`.toLowerCase().includes(filters.search.toLowerCase())
        : true
      const matchesBrand = filters.brands.length ? filters.brands.includes(car.brand) : true
      const matchesCategory = filters.categories.length ? filters.categories.includes(car.category) : true
      const matchesFuel = filters.fuels.length ? filters.fuels.includes(car.fuel) : true
      const matchesNew = filters.onlyNew ? car.isNew : true
      const matchesPrice = filters.priceMax ? car.price <= Number(filters.priceMax) : true
      const matchesYear = filters.yearMin ? car.year >= Number(filters.yearMin) : true
      const matchesKm = filters.kmMax ? car.mileage <= Number(filters.kmMax) : true
      const matchesPower = filters.powerMin ? car.power >= Number(filters.powerMin) : true

      return matchesSearch && matchesBrand && matchesCategory && matchesFuel && matchesNew && matchesPrice && matchesYear && matchesKm && matchesPower
    })

    switch (sort) {
      case 'price-asc': result = [...result].sort((a, b) => a.price - b.price); break
      case 'price-desc': result = [...result].sort((a, b) => b.price - a.price); break
      case 'year-desc': result = [...result].sort((a, b) => b.year - a.year); break
      case 'km-asc': result = [...result].sort((a, b) => a.mileage - b.mileage); break
      case 'power-desc': result = [...result].sort((a, b) => b.power - a.power); break
      default: break
    }
    return result
  }, [filters, sort])

  const activeCount =
    filters.brands.length + filters.categories.length + filters.fuels.length +
    (filters.onlyNew ? 1 : 0) + (filters.priceMax ? 1 : 0) + (filters.yearMin ? 1 : 0) +
    (filters.kmMax ? 1 : 0) + (filters.powerMin ? 1 : 0)

  return (
    <section className="eq-stock">
      <div className="eq-stock__header">
        <div className="eq-container">
          <span className="eq-eyebrow">Colección actual</span>
          <h1 className="eq-section-title">Stock EQ21</h1>
        </div>
      </div>

      <div className="eq-container eq-stock__layout">
        <StockFilters
          filters={filters}
          onToggle={toggleValue}
          onUpdate={updateFilter}
          onReset={resetFilters}
          activeCount={activeCount}
          isOpen={filtersOpen}
          onClose={() => setFiltersOpen(false)}
        />

        <div className="eq-stock__results">
          <div className="eq-stock__toolbar">
            <button type="button" className="eq-stock__filters-toggle" onClick={() => setFiltersOpen(true)}>
              Filtros {activeCount > 0 && <span>{activeCount}</span>}
            </button>

            <span className="eq-stock__count">
              {filtered.length} vehículo{filtered.length !== 1 ? 's' : ''} disponible{filtered.length !== 1 ? 's' : ''}
            </span>

            <label className="eq-stock__sort">
              Ordenar por
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </label>
          </div>

          {filtered.length > 0 ? (
            <div className="eq-stock__grid">
              {filtered.map((car) => (
                <CarDetailCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <div className="eq-stock__empty">
              <span className="eq-eyebrow">Sin resultados</span>
              <p>Ningún vehículo de la colección coincide con estos filtros.</p>
              <button type="button" onClick={resetFilters}>Limpiar filtros</button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}