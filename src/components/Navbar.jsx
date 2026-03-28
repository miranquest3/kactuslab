import { Link, useNavigate, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

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

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
        mass: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  }

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNav ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 w-full z-40 px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between transition-colors duration-300
      ${scrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-slate-200 shadow-sm"
          : "bg-white"
        }`}
    >
      {/* Logo */}
      <Link to="/" className="group flex items-center gap-2">
        <motion.span
          whileHover={{ rotate: 15, scale: 1.1 }}
          className="w-8 h-8 bg-emerald-900 rounded-lg flex items-center justify-center text-white font-bold"
        >
          K
        </motion.span>
        <span className="text-lg sm:text-xl font-semibold text-slate-900 transition-colors group-hover:text-emerald-700">
          KactusLab
        </span>
      </Link>

      {/* Center Tabs */}
      <div className="hidden md:flex items-center gap-10 text-slate-700 font-medium">
        {["Features", "About", "Integrations"].map((item) => (
          <motion.div key={item} whileHover={{ y: -2 }}>
            {item === "Features" ? (
              <button onClick={handleFeaturesClick} className="hover:text-emerald-600 transition">
                {item}
              </button>
            ) : (
              <Link to={`/${item.toLowerCase()}`} className="hover:text-emerald-600 transition">
                {item}
              </Link>
            )}
          </motion.div>
        ))}
      </div>

      {/* Right Area */}
      <div className="flex items-center gap-4">
        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-full inline-flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-all active:scale-90"
        >
          <div className="w-6 h-6 relative">
            <motion.span
              animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
              className="absolute inset-0 m-auto h-0.5 w-6 bg-current rounded-full"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="absolute inset-0 m-auto h-0.5 w-6 bg-current rounded-full"
            />
            <motion.span
              animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
              className="absolute inset-0 m-auto h-0.5 w-6 bg-current rounded-full"
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-0 left-0 right-0 h-screen bg-white/95 backdrop-blur-xl md:hidden z-[-1] flex flex-col justify-center px-10"
          >
            <div className="space-y-8">
              {[
                { label: "Features", action: handleFeaturesClick },
                { label: "About", to: "/about" },
                { label: "Integrations", to: "/integrations" },
                { label: "Login", to: "/login" }
              ].map((item, idx) => (
                <motion.div key={item.label} variants={itemVariants}>
                  {item.to ? (
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="text-4xl font-serif text-slate-900 block"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        item.action()
                        setOpen(false)
                      }}
                      className="text-4xl font-serif text-slate-900 block"
                    >
                      {item.label}
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}