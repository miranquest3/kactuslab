import { Suspense, lazy } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence, motion, useScroll } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from "./components/ScrollToTop.jsx"
import Home from './pages/Home.jsx'

const Outcomes = lazy(() => import('./pages/Outcomes.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const Feelings = lazy(() => import('./pages/Feelings.jsx'))
const Shopify = lazy(() => import('./pages/Shopify.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))
const AdminDemoRequests = lazy(() => import('./pages/AdminDemoRequests.jsx'))
const Vto = lazy(() => import('./pages/Vto.jsx'))
const WhatsAppMarketing = lazy(() => import('./pages/WhatsAppMarketing.jsx'))
const AiPhotoShoot = lazy(() => import('./pages/AiPhotoShoot.jsx'))

function RouteLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-white px-6">
      <div className="h-10 w-10 rounded-full border-2 border-[#d4e5c0] border-t-[#123126] animate-spin" />
    </div>
  )
}

export default function App() {
  const location = useLocation()
  const { scrollYProgress } = useScroll()
  const transparentNavbarRoutes = ['/', '/about', '/outcomes', '/integrations', '/feelings', '/shopify', '/vto', '/ai-whatsapp-marketing']
  const hideGlobalNavbarRoutes = ['/about', '/outcomes']
  const shouldOverlayNavbar = transparentNavbarRoutes.includes(location.pathname)
  const shouldShowGlobalNavbar = !hideGlobalNavbarRoutes.includes(location.pathname)

  return (
    <div className="min-h-screen flex flex-col">
       <ScrollToTop />
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navbar always visible */}
      {shouldShowGlobalNavbar && <Navbar />}

      <div className={`flex-1 overflow-x-hidden ${shouldOverlayNavbar ? '' : 'pt-16'}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Suspense fallback={<RouteLoader />}>
              <Routes location={location} key={location.pathname}>
                {/* Main Pages */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Navigate to="/outcomes" replace />} />
                <Route path="/outcomes" element={<Outcomes />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/integrations" element={<Navigate to="/feelings" replace />} />
                <Route path="/feelings" element={<Feelings />} />
                <Route path="/shopify" element={<Shopify />} />
                <Route path="/vto" element={<Vto />} />
                <Route path="/ai-whatsapp-marketing" element={<WhatsAppMarketing />} />
                <Route path="/ai-photoshoot" element={<AiPhotoShoot />} />
                {/* Hidden Admin Views */}
                <Route path="/admin/demo-requests" element={<AdminDemoRequests />} />

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer always visible */}
      <Footer />
    </div>
  )
}
