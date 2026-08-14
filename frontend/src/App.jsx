// archivo: frontend/src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Inicio from './pages/Inicio.jsx'
import Nosotros from './pages/Nosotros.jsx'
import ServiciosISPPage from './pages/ServiciosISPPage.jsx'
import ProcesosContablesPage from './pages/ProcesosContablesPage.jsx'
import ContactoPage from './pages/ContactoPage.jsx'
import TipsRegulatorios from './pages/TipsRegulatorios.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios-isp" element={<ServiciosISPPage />} />
          <Route path="/procesos-contables" element={<ProcesosContablesPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/tips-regulatorios" element={<TipsRegulatorios />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}