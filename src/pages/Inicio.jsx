import { Link } from 'react-router-dom'

export default function Inicio() {
  return (
    <section>
      <h1>Bienvenido</h1>
      <p>
        Este es un proyecto de ejemplo en React que usa React Router para navegar entre páginas
        sin recargar el navegador.
      </p>
      <Link className="boton" to="/productos">Ver productos</Link>
    </section>
  )
}
