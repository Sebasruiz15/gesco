import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import PerfilEmpresa from './components/sections/PerfilEmpresa.jsx'
import ServiciosISP from './components/sections/ServiciosISP.jsx'
import ProcesosContables from './components/sections/ProcesosContables.jsx'
import Contacto from './components/sections/Contacto.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PerfilEmpresa />
        <ServiciosISP />
        <ProcesosContables />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
