import { useEffect, useRef, useState } from 'react'
import './MakerPlate.css'

export default function MakerPlate() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="eq-maker" ref={ref}>
      <div className="eq-container eq-maker__inner">
        {/*<span className="eq-maker__plate-label">Placa de fabricante</span>*/}

        <div className={`eq-maker__signature-wrap ${visible ? 'is-visible' : ''}`}>
          <span className="eq-maker__signature">Endrit Qukovci</span>
          <svg className="eq-maker__underline" viewBox="0 0 320 20" preserveAspectRatio="none" aria-hidden="true">
            <path d="M2 12 C 60 4, 120 18, 180 9 S 280 4, 318 11" />
          </svg>
        </div>

        <div className="eq-maker__meta">
          <span>E · Q</span>
          <span className="eq-maker__divider" />
          <span>Diseño y desarrollo · Girona, España</span>
        </div>
      </div>
    </section>
  )
}