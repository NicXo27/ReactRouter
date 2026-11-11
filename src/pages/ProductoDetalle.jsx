import { useParams, useNavigate, Link } from 'react-router-dom'
import { productos } from '../data/productos.js'

export default function ProductoDetalle() {
  const { id } = useParams() // lee el :id de la URL
  const navigate = useNavigate()
  const producto = productos.find((p) => p.id === Number(id))

  if (!producto) {
    return (
      <section>
        <h1>Producto no encontrado</h1>
        <Link to="/productos">Volver a productos</Link>
      </section>
    )
  }

  return (
    <section>
      <h1>{producto.nombre}</h1>
      <p>{producto.descripcion}</p>
      <p><strong>Precio:</strong> ${producto.precio}</p>
      <button className="boton" onClick={() => navigate(-1)}>← Volver</button>
    </section>
  )
}
