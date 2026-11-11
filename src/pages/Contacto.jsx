import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contacto() {
  const [nombre, setNombre] = useState('')
  const navigate = useNavigate()

  const enviar = (e) => {
    e.preventDefault()
    alert(`¡Gracias, ${nombre || 'visitante'}!`)
    navigate('/') // redirección programática
  }

  return (
    <section>
      <h1>Contacto</h1>
      <form className="formulario" onSubmit={enviar}>
        <label htmlFor="nombre">Nombre</label>
        <input id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <button className="boton" type="submit">Enviar</button>
      </form>
    </section>
  )
}
