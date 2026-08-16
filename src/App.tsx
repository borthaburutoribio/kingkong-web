import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import Nosotros from '@/pages/Nosotros'
import Contacto from '@/pages/Contacto'
import Ubicacion from '@/pages/Ubicacion'
import Repuestos from '@/pages/Repuestos'
import Referencias from '@/pages/Referencias'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/ubicacion" element={<Ubicacion />} />
        <Route path="/repuestos" element={<Repuestos />} />
        <Route path="/referencias" element={<Referencias />} />
      </Route>
    </Routes>
  )
}
