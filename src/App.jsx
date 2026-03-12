import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import Destinasi from './pages/Destinasi'
import DestinationDetail from './pages/DestinationDetail'
import Budaya from './pages/Budaya'
import UMKM from './pages/UMKM'
import Investasi from './pages/Investasi'
import Berita from './pages/Berita'
import Kontak from './pages/Kontak'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinasi" element={<Destinasi />} />
          <Route path="/destinasi/:slug" element={<DestinationDetail />} />
          <Route path="/budaya" element={<Budaya />} />
          <Route path="/umkm" element={<UMKM />} />
          <Route path="/investasi" element={<Investasi />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
