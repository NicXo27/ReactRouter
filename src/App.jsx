import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Inicio from './pages/Inicio.jsx'
import AcercaDe from './pages/AcercaDe.jsx'
import Productos from './pages/Productos.jsx'
import ProductoDetalle from './pages/ProductoDetalle.jsx'
import Contacto from './pages/Contacto.jsx'
import NoEncontrado from './pages/NoEncontrado.jsx'

export default function App() {
  return (
    <Routes>
      {/* Layout envuelve todas las rutas: el contenido se pinta en <Outlet /> */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="acerca" element={<AcercaDe />} />
        <Route path="productos" element={<Productos />} />
        <Route path="productos/:id" element={<ProductoDetalle />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="*" element={<NoEncontrado />} />
      </Route>
    </Routes>
  )
}
