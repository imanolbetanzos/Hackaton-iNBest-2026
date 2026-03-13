import './index.css'
import RealMap from './components/RealMap'

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

      <h3>
        {ride.from} → {ride.to}
      </h3>

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
          <div className="brand__avatar" aria-label="Sombrero">
            🤠
          </div>
          <div>
            <span className="brand__eyebrow">MUNDIAL 2026</span>
            <h1>Ruta Tapatía</h1>
          </div>
        </div>

        <div className="topbar__actions">
          <span className="location-pill">Jalisco</span>
          <button className="icon-button" aria-label="Notificaciones">
            🔔
          </button>
          <button className="icon-button" aria-label="Perfil">
            👤
          </button>
        </div>
      </header>

      <main className="main-content">
        <RealMap />

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
        <button className="bottom-nav__item bottom-nav__item--active">
          <span>☻</span>
          <small>Perfil</small>
        </button>
      </nav>
    </div>
  )
}

export default App