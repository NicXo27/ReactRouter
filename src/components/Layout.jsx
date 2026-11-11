import { NavLink, Outlet } from 'react-router-dom'

const enlaces = [
  { to: '/', texto: 'Inicio', end: true },
  { to: '/acerca', texto: 'Acerca de' },
  { to: '/productos', texto: 'Productos' },
  { to: '/contacto', texto: 'Contacto' },
]

export default function Layout() {
  return (
    <>
      <header className="barra">
        <span className="logo">Mi App</span>
        <nav>
          {enlaces.map(({ to, texto, end }) => (
            // NavLink añade la clase "active" automáticamente a la ruta actual
            <NavLink key={to} to={to} end={end}>
              {texto}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="contenido">
        <Outlet />
      </main>
      <footer className="pie">Proyecto del Grupo de Trabajo · React + React Router</footer>
    </>
  )
}
