// archivo: frontend/src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import FloatingWhatsApp from './components/ui/FloatingWhatsApp.jsx'
import Inicio from './pages/Inicio.jsx'
import Nosotros from './pages/Nosotros.jsx'
import ServiciosISPPage from './pages/ServiciosISPPage.jsx'
import ProcesosContablesPage from './pages/ProcesosContablesPage.jsx'
import ContactoPage from './pages/ContactoPage.jsx'
import TipsRegulatorios from './pages/TipsRegulatorios.jsx'
import Feria from './pages/Feria.jsx'
import PanelFeria from './pages/PanelFeria.jsx'
import PortafolioPage from './pages/PortafolioPage';
import PortafolioDetallePage from './pages/PortafolioDetallePage';

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
          <Route path="/feria" element={<Feria />} />
          <Route path="/panel-feria" element={<PanelFeria />} />
          <Route path="/portafolio" element={<PortafolioPage />} />
          <Route path="/portafolio/:slug" element={<PortafolioDetallePage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}