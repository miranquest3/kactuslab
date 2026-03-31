import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { useAuth } from './context/AuthContext.jsx'

import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Integrations from './pages/Integrations.jsx'
import Shopify from './pages/Shopify.jsx'
import NotFound from './pages/NotFound.jsx'
import Register from './pages/Register.jsx'
import AdminDemoRequests from './pages/AdminDemoRequests.jsx'
import Feature from './pages/Features.jsx'
import Vto from './pages/Vto.jsx'
import WhatsAppMarketing from './pages/WhatsAppMarketing.jsx'
import AiPhotoShoot from './pages/AiPhotoShoot.jsx'
import ScrollToTop from "./components/ScrollToTop.jsx"

export default function App() {
  const { user } = useAuth()
  const location = useLocation()
  const { scrollYProgress } = useScroll()

  return (
    <div className="min-h-screen flex flex-col">
       <ScrollToTop />
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navbar always visible */}
      <Navbar />

      <div className="flex-1 pt-10 overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Routes location={location} key={location.pathname}>
              {/* Main Pages */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/integrations" element={<Integrations />} />
              <Route path="/shopify" element={<Shopify />} />
              <Route path="/vto" element={<Vto />} />
              <Route path="/whatsapp-marketing" element={<WhatsAppMarketing />} />
              <Route path="/ai-photoshoot" element={<AiPhotoShoot />} />

              {/* Hidden Admin Views */}
              <Route path="/admin/demo-requests" element={<AdminDemoRequests />} />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer always visible */}
      <Footer />
    </div>
  )
}