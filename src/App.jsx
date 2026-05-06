import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from "./components/ScrollToTop.jsx"
import Home from './pages/Home.jsx'
import Outcomes from './pages/Outcomes.jsx'
import Contact from './pages/Contact.jsx'
import Integrations from './pages/Integrations.jsx'
import Feelings from './pages/Feelings.jsx'
import Shopify from './pages/Shopify.jsx'
import NotFound from './pages/NotFound.jsx'
import Vto from './pages/Vto.jsx'
import WhatsAppMarketing from './pages/WhatsAppMarketing.jsx'

export default function App() {
  const location = useLocation()
  const transparentNavbarRoutes = ['/', '/outcomes', '/integrations', '/feelings', '/shopify', '/vto', '/ai-whatsapp-marketing']
  const hideGlobalNavbarRoutes = ['/outcomes']
  const shouldOverlayNavbar = transparentNavbarRoutes.includes(location.pathname)
  const shouldShowGlobalNavbar = !hideGlobalNavbarRoutes.includes(location.pathname)
  const shouldPreserveStickyScroll = location.pathname === '/feelings'

  return (
    <div className="min-h-screen flex flex-col bg-white">
       <ScrollToTop />

      {/* Navbar always visible */}
      {shouldShowGlobalNavbar && <Navbar />}

      <div className={`flex-1 bg-white ${shouldPreserveStickyScroll ? 'overflow-x-clip' : 'overflow-x-hidden'} ${shouldOverlayNavbar ? '' : 'pt-10'}`}>
        <Routes location={location} key={location.pathname}>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/outcomes" element={<Outcomes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/feelings" element={<Feelings />} />
          <Route path="/shopify" element={<Shopify />} />
          <Route path="/vto" element={<Vto />} />
          <Route path="/ai-whatsapp-marketing" element={<WhatsAppMarketing />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
