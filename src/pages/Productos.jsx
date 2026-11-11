import { Link } from 'react-router-dom'
import { productos } from '../data/productos.js'

export default function Productos() {
  return (
    <section>
      <h1>Productos</h1>
      <ul className="lista">
        {productos.map((p) => (
          <li key={p.id}>
            {/* Ruta dinámica: /productos/1, /productos/2, ... */}
            <Link to={`/productos/${p.id}`}>{p.nombre}</Link>
            <span>${p.precio}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
