import './index.css'

const heatZones = [
  { id: 1, top: '22%', left: '63%', count: '24+', label: 'Zapopan Centro', type: 'Mixto' },
  { id: 2, top: '40%', left: '54%', count: '18+', label: 'Estadio Akron', type: 'Rides + Partido' },
  { id: 3, top: '57%', left: '71%', count: '12+', label: 'Tlaquepaque', type: 'Cultural' },
  { id: 4, top: '68%', left: '37%', count: '8+', label: 'Chapala Route', type: 'Social' },
]

const rides = [
  {
    id: 1,
    from: 'La Minerva',
    to: 'Estadio Akron',
    time: '17:30',
    seats: 3,
    price: '$80 MXN',
    host: 'Carlos',
  },
  {
    id: 2,
    from: 'Centro Histórico',
    to: 'Fan Zone Chapultepec',
    time: '15:00',
    seats: 2,
    price: '$50 MXN',
    host: 'Fernanda',
  },
  {
    id: 3,
    from: 'Zapopan Norte',
    to: 'Estadio Akron',
    time: '18:10',
    seats: 4,
    price: '$60 MXN',
    host: 'Luis',
  },
]

const experiences = [
  {
    id: 1,
    title: 'Tour gastronómico tapatío',
    place: 'Mercado San Juan de Dios',
    time: '13:00',
    price: 'Gratis',
    type: 'Cultural',
  },
  {
    id: 2,
    title: 'Mariachi en Tlaquepaque',
    place: 'Andador Independencia',
    time: '19:00',
    price: '$150 MXN',
    type: 'Música',
  },
  {
    id: 3,
    title: 'Ruta muralista',
    place: 'Centro de Guadalajara',
    time: '11:00',
    price: '$90 MXN',
    type: 'Arte',
  },
]

const parties = [
  {
    id: 1,
    title: 'Watch Party MX',
    place: 'Avenida Chapultepec',
    time: '16:00',
    crowd: '120 asistentes',
  },
  {
    id: 2,
    title: 'Post Match Celebration',
    place: 'Providencia',
    time: '22:00',
    crowd: '80 asistentes',
  },
  {
    id: 3,
    title: 'Fan Meetup Latam',
    place: 'Parque Revolución',
    time: '14:30',
    crowd: '60 asistentes',
  },
]

function Chip({ label, active = false }) {
  return (
    <button className={active ? 'chip chip--active' : 'chip'}>
      {label}
    </button>
  )
}

function StatCard({ title, value }) {
  return (
    <div className="stat-card">
      <span className="stat-card__title">{title}</span>
      <strong className="stat-card__value">{value}</strong>
    </div>
  )
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  )
}

function RideCard({ ride }) {
  return (
    <article className="content-card">
      <div className="content-card__top">
        <span className="badge">Ride</span>
        <span className="price">{ride.price}</span>
      </div>
      <h3>{ride.from} → {ride.to}</h3>
      <p className="muted">Hora: {ride.time}</p>
      <p className="muted">Asientos: {ride.seats}</p>
      <p className="muted">Conductor: {ride.host}</p>
      <button className="primary-button">Unirme</button>
    </article>
  )
}

function ExperienceCard({ item }) {
  return (
    <article className="content-card">
      <div className="content-card__top">
        <span className="badge badge--soft">{item.type}</span>
        <span className="price">{item.price}</span>
      </div>
      <h3>{item.title}</h3>
      <p className="muted">{item.place}</p>
      <p className="muted">Hora: {item.time}</p>
      <button className="secondary-button">Ver detalle</button>
    </article>
  )
}

function PartyCard({ item }) {
  return (
    <article className="content-card">
      <div className="content-card__top">
        <span className="badge">Party</span>
        <span className="price">Popular</span>
      </div>
      <h3>{item.title}</h3>
      <p className="muted">{item.place}</p>
      <p className="muted">Hora: {item.time}</p>
      <p className="muted">{item.crowd}</p>
      <button className="primary-button">Asistir</button>
    </article>
  )
}

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <div className="brand__avatar">RT</div>
          <div>
            <span className="brand__eyebrow">Mundial 2026</span>
            <h1>Ruta Tapatía</h1>
          </div>
        </div>

        <div className="topbar__actions">
          <span className="location-pill">Jalisco</span>
          <button className="icon-button">🔔</button>
          <button className="icon-button">👤</button>
        </div>
      </header>

      <main className="main-content">
        <section className="search-row">
          <input
            className="search-input"
            type="text"
            placeholder="Buscar zonas, rides o eventos"
          />
          <div className="search-row__actions">
            <button className="secondary-button">Publicar ride</button>
            <button className="primary-button">Crear evento</button>
          </div>
        </section>

        <section className="map-section">
          <div className="map-surface">
            <div className="map-overlay map-overlay--road road-1"></div>
            <div className="map-overlay map-overlay--road road-2"></div>
            <div className="map-overlay map-overlay--road road-3"></div>
            <div className="map-overlay map-overlay--road road-4"></div>
            <div className="map-overlay map-overlay--road road-5"></div>
            <div className="map-overlay map-overlay--road road-6"></div>
            <div className="map-overlay map-overlay--vertical road-7"></div>
            <div className="map-overlay map-overlay--vertical road-8"></div>
            <div className="map-overlay map-overlay--vertical road-9"></div>

            <div className="map-top-controls">
              <Chip label="All (24)" active />
              <Chip label="Food & Drinks (8)" />
              <Chip label="Social (10)" />
              <Chip label="Rides (6)" />
            </div>

            <div className="traveler-pill">100+ viajeros activos</div>
            <button className="map-pin-button">📍</button>

            {heatZones.map((zone) => (
              <button
                key={zone.id}
                className="hotspot"
                style={{ top: zone.top, left: zone.left }}
                title={`${zone.label} - ${zone.count}`}
              >
                <span className="hotspot__pulse"></span>
                <span className="hotspot__content">
                  <span className="hotspot__dot"></span>
                  {zone.count}
                </span>
              </button>
            ))}

            <button className="list-floating-button">☰ Lista</button>
            <button className="add-floating-button">+</button>

            <div className="zone-panel">
              <div className="zone-panel__header">
                <div>
                  <h3>Zonas con más actividad</h3>
                  <p>Explora dónde se concentra la afición</p>
                </div>
                <span className="badge badge--soft">Tiempo real</span>
              </div>

              <div className="zone-grid">
                {heatZones.map((zone) => (
                  <div key={zone.id} className="zone-card">
                    <div className="zone-card__top">
                      <strong>{zone.label}</strong>
                      <span className="badge">{zone.count}</span>
                    </div>
                    <p>{zone.type}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="stats-grid">
          <StatCard title="Rides hoy" value="24" />
          <StatCard title="Experiencias" value="18" />
          <StatCard title="Eventos" value="12" />
          <StatCard title="Zonas activas" value="4" />
        </section>

        <section className="content-section">
          <SectionTitle
            title="Ride Sharing"
            subtitle="Viajes disponibles hacia estadio, fan zones y puntos clave"
          />
          <div className="cards-grid">
            {rides.map((ride) => (
              <RideCard key={ride.id} ride={ride} />
            ))}
          </div>
        </section>

        <section className="content-section">
          <SectionTitle
            title="Cultural Experience"
            subtitle="Experiencias auténticas para vivir Guadalajara como local"
          />
          <div className="cards-grid">
            {experiences.map((item) => (
              <ExperienceCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section className="content-section">
          <SectionTitle
            title="Partying"
            subtitle="Eventos para conectar y celebrar con otros aficionados"
          />
          <div className="cards-grid">
            {parties.map((item) => (
              <PartyCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </main>

      <nav className="bottom-nav">
        <button className="bottom-nav__item bottom-nav__item--active">
          <span>⌂</span>
          <small>Inicio</small>
        </button>
        <button className="bottom-nav__item">
          <span>⌕</span>
          <small>Buscar</small>
        </button>
        <button className="bottom-nav__item">
          <span>＋</span>
          <small>Crear</small>
        </button>
        <button className="bottom-nav__item">
          <span>♡</span>
          <small>Guardados</small>
        </button>
        <button className="bottom-nav__item">
          <span>☻</span>
          <small>Perfil</small>
        </button>
      </nav>
    </div>
  )
}

export default App