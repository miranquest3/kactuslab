import { Link, useNavigate, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import logo from "../assets/logo.svg"
import ftlock from "../assets/images/Features/VTO.png"
import ftlockHover from "../assets/images/Features/VTO G.png"

import lock from "../assets/images/Features/lock.png"
import lockHover from "../assets/images/Features/Lock G.png"

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const [open, setOpen] = useState(false)
  const [showNav, setShowNav] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  // ✅ NEW: dropdown state
  const [showDropdown, setShowDropdown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false)
      } else {
        setShowNav(true)
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
      <Link to="/" className="group flex items-center gap-3">
        <motion.img
          whileHover={{ scale: 1.08 }}
          src={logo}
          alt="Kactus Logo"
          className="h-8 w-auto"
        />
        <span className="text-lg sm:text-xl font-semibold text-slate-900 group-hover:text-emerald-700 transition">
        </span>
      </Link>

      {/* Center Tabs */}
      <div className="hidden md:flex items-center gap-10 text-slate-700 font-medium">

        {/* ✅ Features with dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <motion.div whileHover={{ y: -2 }}>
            <span className="cursor-pointer hover:text-emerald-600 transition flex items-center gap-1">
              Features
              {/* Small arrow icon */}
              <svg
                className="w-4 h-4 mt-[2px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </motion.div>

          {/* Invisible hover bridge */}
          {showDropdown && (
            <div className="absolute top-full left-0 w-full h-4"></div>
          )}

          {/* Dropdown */}
          {showDropdown && (
            <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[560px] bg-white shadow-xl rounded-2xl p-6 grid grid-cols-2 gap-6 border border-slate-200 transition-all duration-200">

              {/* Column 1 */}
              <div className="space-y-4">

                {/* Virtual Try-On */}
                <Link to="/vto">
                  <div className="group flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105">

                    {/* ICON FIX */}
                    <div className="relative w-5 h-5 flex-shrink-0">
                      <img
                        src={ftlock}
                        alt="vto"
                        className="absolute inset-0 w-5 h-5 object-contain transition duration-300 group-hover:opacity-0"
                      />
                      <img
                        src={ftlockHover}
                        alt="vto"
                        className="absolute inset-0 w-5 h-5 object-contain opacity-0 transition duration-300 group-hover:opacity-100"
                      />
                    </div>

                    <h4 className="font-semibold text-slate-900 whitespace-nowrap transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#05231C] group-hover:to-[#D4E4BF] group-hover:bg-clip-text group-hover:text-transparent">
                      Virtual Try-On
                    </h4>

                  </div>
                </Link>

                {/* AI Product Photoshoot */}
                <Link to="/">
                  <div className="group flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105">

                    <div className="relative w-5 h-5 flex-shrink-0">
                      <img
                        src={lock}
                        alt="photoshoot"
                        className="absolute inset-0 w-5 h-5 object-contain transition group-hover:opacity-0"
                      />
                      <img
                        src={lockHover}
                        alt="photoshoot"
                        className="absolute inset-0 w-5 h-5 object-contain opacity-0 transition group-hover:opacity-100"
                      />
                    </div>

                    <div className="flex items-center justify-between w-full gap-3">
                      <h4 className="font-semibold text-slate-900 whitespace-nowrap overflow-hidden text-ellipsis transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#05231C] group-hover:to-[#D4E4BF] group-hover:bg-clip-text group-hover:text-transparent">
                        AI Product Photoshoot
                      </h4>

                      <span className="text-[10px] font-medium text-[#06231C] bg-[#D4E4BF]/40 px-2 py-[2px] rounded-full whitespace-nowrap shrink-0">
                        Coming Soon
                      </span>
                    </div>

                  </div>
                </Link>

              </div>

              {/* Column 2 */}
              <div className="space-y-4">

                {/* AI WhatsApp Marketing */}
                <Link to="/">
                  <div className="group flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105">

                    <div className="relative w-5 h-5 flex-shrink-0">
                      <img
                        src={lock}
                        alt="whatsapp"
                        className="absolute inset-0 w-5 h-5 object-contain transition group-hover:opacity-0"
                      />
                      <img
                        src={lockHover}
                        alt="whatsapp"
                        className="absolute inset-0 w-5 h-5 object-contain opacity-0 transition group-hover:opacity-100"
                      />
                    </div>

                    <div className="flex items-center justify-between w-full gap-3">
                      <h4 className="font-semibold text-slate-900 whitespace-nowrap overflow-hidden text-ellipsis transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#05231C] group-hover:to-[#D4E4BF] group-hover:bg-clip-text group-hover:text-transparent">
                        AI WhatsApp Marketing
                      </h4>

                      <span className="text-[10px] font-medium text-[#06231C] bg-[#D4E4BF]/40 px-2 py-[2px] rounded-full whitespace-nowrap shrink-0">
                        Coming Soon
                      </span>
                    </div>

                  </div>
                </Link>

                {/* AI Market Research */}
                <Link to="/">
                  <div className="group flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105">

                    <div className="relative w-5 h-5 flex-shrink-0">
                      <img
                        src={lock}
                        alt="research"
                        className="absolute inset-0 w-5 h-5 object-contain transition group-hover:opacity-0"
                      />
                      <img
                        src={lockHover}
                        alt="research"
                        className="absolute inset-0 w-5 h-5 object-contain opacity-0 transition group-hover:opacity-100"
                      />
                    </div>

                    <div className="flex items-center justify-between w-full gap-3">
                      <h4 className="font-semibold text-slate-900 whitespace-nowrap overflow-hidden text-ellipsis transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#05231C] group-hover:to-[#D4E4BF] group-hover:bg-clip-text group-hover:text-transparent">
                        AI Market Research
                      </h4>

                      <span className="text-[10px] font-medium text-[#06231C] bg-[#D4E4BF]/40 px-2 py-[2px] rounded-full whitespace-nowrap shrink-0">
                        Coming Soon
                      </span>
                    </div>

                  </div>
                </Link>

              </div>

            </div>
          )}

        </div>
        {/* Other Tabs (unchanged) */}
        <motion.div whileHover={{ y: -2 }}>
          <Link
            to="/about"
            className="hover:text-emerald-600 transition"
          >
            About
          </Link>
        </motion.div>

        <motion.div whileHover={{ y: -2 }}>
          <Link
            to="/integrations"
            className="hover:text-emerald-600 transition"
          >
            Integrations
          </Link>
        </motion.div>

      </div>

      {/* Right Area */}
      <div className="flex items-center gap-4">
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

      {/* Mobile Menu (unchanged) */}
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
                { label: "Features", to: "/vto" },
                { label: "About", to: "/about" },
                { label: "Integrations", to: "/integrations" },
                { label: "Login", to: "/login" }
              ].map((item) => (
                <motion.div key={item.label} variants={itemVariants}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="text-4xl font-serif text-slate-900 block"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}