import { Routes, Route } from 'react-router-dom'
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

export default function App() {

  const { user } = useAuth()

  return (

    <div className="min-h-screen flex flex-col">

      {/* Navbar always visible */}
      <Navbar />

      <div className="flex-1 pt-10">

        <Routes>

          {/* Main Pages */}

          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/shopify" element={<Shopify />} />

          {/* 404 */}

          <Route path="*" element={<NotFound />} />

        </Routes>

      </div>

      {/* Footer always visible */}

      <Footer />

    </div>

  )

}