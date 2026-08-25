import { createContext, useContext, useState, useCallback } from 'react'

const ContactModalContext = createContext(null)

export function ContactModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [car, setCar] = useState(null)

  const openModal = useCallback((selectedCar = null) => {
    setCar(selectedCar)
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => setIsOpen(false), [])
  const selectCar = useCallback((selectedCar) => setCar(selectedCar), [])
  const clearCar = useCallback(() => setCar(null), [])

  return (
    <ContactModalContext.Provider value={{ isOpen, car, openModal, closeModal, selectCar, clearCar }}>
      {children}
    </ContactModalContext.Provider>
  )
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext)
  if (!ctx) throw new Error('useContactModal debe usarse dentro de ContactModalProvider')
  return ctx
}