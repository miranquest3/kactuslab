import { Link, useNavigate, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Navbar() {

  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const [open, setOpen] = useState(false)

  const [showNav, setShowNav] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  const handleFeaturesClick = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "features" } })
    } else {
      const section = document.getElementById("features")
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > lastScrollY) {
        setShowNav(false) // scrolling down
      } else {
        setShowNav(true) // scrolling up
      }

      setLastScrollY(window.scrollY)

      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [lastScrollY])

  return (

<motion.nav
initial={{ y:0 }}
animate={{ y: showNav ? 0 : -100 }}
transition={{ duration:0.3 }}

className={`fixed top-0 left-0 w-full z-40 px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between
${scrolled 
? "bg-white/80 backdrop-blur-lg border-b border-slate-200 shadow-sm"
: "bg-white"
}`}

>

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

        <Link to="/about" className="hover:text-emerald-600 transition">
          About
        </Link>

        <Link to="/integrations" className="hover:text-emerald-600 transition">
          Integrations
        </Link>

      </div>

      {/* Right Area */}

      <div className="flex items-center gap-4">

        {/* Mobile Hamburger */}

        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-md inline-flex items-center justify-center text-slate-700 hover:bg-slate-100"
        >

          {open ? (

            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>

          ) : (

            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>

          )}

        </button>

      </div>


      {/* Mobile Menu */}

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

</motion.nav>

  )
}