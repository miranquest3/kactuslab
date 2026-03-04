import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const handleFeaturesClick = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'features' } })
    } else {
      const section = document.getElementById('features')
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const [open, setOpen] = useState(false)

  return (
    <nav className="relative z-40 bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">

      {/* Logo */}
      <Link to="/" className="text-lg sm:text-xl font-semibold text-slate-900">
        KactusLabs
      </Link>

      {/* Center Tabs */}
      <div className="hidden md:flex items-center gap-10 text-slate-700 font-medium">

        <button
          onClick={handleFeaturesClick}
          className="hover:text-emerald-600 transition"
        >
          Features
        </button>

        <Link
          to="/about"
          className="hover:text-emerald-600 transition"
        >
          About
        </Link>

        <Link
          to="/integrations"
          className="hover:text-emerald-600 transition"
        >
          Integrations
        </Link>

      </div>

      {/* Right Button / Mobile Hamburger */}
      <div className="flex items-center gap-4">
        {/* Desktop auth area (kept intentionally minimal) */}
        <div className="hidden md:flex">
          {/* preserve space for future auth buttons */}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-md inline-flex items-center justify-center text-slate-700 hover:bg-slate-100"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu (stacked links) */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-md md:hidden z-50">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <button
              onClick={() => {
                handleFeaturesClick()
                setOpen(false)
              }}
              className="w-full text-left px-3 py-2 text-slate-700 hover:text-emerald-600"
            >
              Features
            </button>

            <Link to="/about" onClick={() => setOpen(false)} className="block px-3 py-2 text-slate-700 hover:text-emerald-600">
              About
            </Link>

            <Link to="/integrations" onClick={() => setOpen(false)} className="block px-3 py-2 text-slate-700 hover:text-emerald-600">
              Integrations
            </Link>

            <Link to="/login" onClick={() => setOpen(false)} className="block px-3 py-2 text-slate-700 hover:text-emerald-600">
              Login
            </Link>
          </div>
        </div>
      )}

    </nav>
  )
}