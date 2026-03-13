import { useEffect, useRef } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

function RealMap() {
  const mapContainer = useRef(null)
  const mapRef = useRef(null)

  useEffect(() => {
    if (mapRef.current) return

    const apiKey = import.meta.env.VITE_AMAZON_LOCATION_API_KEY
    const region = import.meta.env.VITE_AMAZON_LOCATION_REGION
    const styleName = import.meta.env.VITE_AMAZON_LOCATION_MAP_STYLE || 'Standard'

    if (!apiKey || !region) {
      console.error('Faltan variables de entorno de Amazon Location')
      return
    }

    const styleUrl = `https://maps.geo.${region}.amazonaws.com/v2/styles/${styleName}/descriptor?key=${apiKey}`

    mapRef.current = new maplibregl.Map({
      container: mapContainer.current,
      style: styleUrl,
      center: [-103.3496, 20.6597],
      zoom: 9.6,
    })

    mapRef.current.addControl(new maplibregl.NavigationControl(), 'top-right')

    const hotspots = [
      { lng: -103.4068, lat: 20.6814, label: '24+', name: 'Zapopan Centro' },
      { lng: -103.4619, lat: 20.6829, label: '18+', name: 'Estadio Akron' },
      { lng: -103.3112, lat: 20.6409, label: '12+', name: 'Tlaquepaque' },
      { lng: -103.1850, lat: 20.3000, label: '8+', name: 'Chapala Route' },
    ]

    hotspots.forEach((point) => {
      const el = document.createElement('button')
      el.className = 'map-hotspot'
      el.type = 'button'
      el.innerHTML = `<span class="map-hotspot__dot"></span>${point.label}`

      new maplibregl.Marker({
        element: el,
        anchor: 'center',
      })
        .setLngLat([point.lng, point.lat])
        .setPopup(
          new maplibregl.Popup({ offset: 18 }).setHTML(
            `<div class="map-popup"><strong>${point.name}</strong><br/>Alta concurrencia de eventos</div>`
          )
        )
        .addTo(mapRef.current)
    })

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [])

  return (
    <section className="map-section">
      <div className="real-map-shell">
        <div className="map-top-controls">
          <button className="chip chip--active">All (24)</button>
          <button className="chip">Food & Drinks (8)</button>
          <button className="chip">Social (10)</button>
          <button className="chip">Rides (6)</button>
        </div>

        <div ref={mapContainer} className="real-map-container" />

        <button className="add-floating-button" aria-label="Movilidad">
          🚶
        </button>

        <div className="zone-panel">
          <div className="zone-panel__header">
            <div>
              <h3>Zonas con más actividad</h3>
              <p>Explora dónde se concentra la afición</p>
            </div>
            <span className="badge badge--soft">Tiempo real</span>
          </div>

          <div className="zone-grid">
            <div className="zone-card">
              <div className="zone-card__top">
                <strong>Zapopan Centro</strong>
                <span className="badge">24+</span>
              </div>
              <p>Mixto</p>
            </div>

            <div className="zone-card">
              <div className="zone-card__top">
                <strong>Estadio Akron</strong>
                <span className="badge">18+</span>
              </div>
              <p>Rides + Partido</p>
            </div>

            <div className="zone-card">
              <div className="zone-card__top">
                <strong>Tlaquepaque</strong>
                <span className="badge">12+</span>
              </div>
              <p>Cultural</p>
            </div>

            <div className="zone-card">
              <div className="zone-card__top">
                <strong>Chapala Route</strong>
                <span className="badge">8+</span>
              </div>
              <p>Social</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RealMap