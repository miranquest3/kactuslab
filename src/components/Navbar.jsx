import { Link, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import logo from "../assets/logo.svg"
import logo2 from "../assets/logo2.svg"
import virtualTryOnIcon from "../assets/images/Virtual Try-On.png"
import whatsappIcon from "../assets/images/whatsapp.png"
import lockIcon from "../assets/images/lock.png"

const featureMenuItems = [
  {
    label: "Virtual Try-On",
    to: "/vto",
    icon: virtualTryOnIcon
  },
  {
    label: "AI Whatsapp Marketing",
    to: "/ai-whatsapp-marketing",
    icon: whatsappIcon
  },
  {
    label: "AI Product Photoshoot",
    comingSoon: true,
    icon: lockIcon
  },
  {
    label: "AI Marketing Research",
    comingSoon: true,
    icon: lockIcon
  }
]

function FeatureMenuIcon({ item }) {
  return (
    <img
      src={item.icon}
      alt=""
      aria-hidden="true"
      className="h-[clamp(36px,2.35vw,44px)] w-[clamp(36px,2.35vw,44px)] shrink-0 object-contain transition duration-300 group-hover:scale-105"
    />
  )
}

function FeatureMenuItem({ item }) {
  const content = (
    <div className="group flex min-h-[clamp(46px,3.35vw,54px)] w-full items-center gap-[clamp(9px,0.75vw,14px)] rounded-md px-2 py-1 transition duration-200 hover:bg-[#f6faf1]">
      <FeatureMenuIcon item={item} />
      <div className="flex min-w-0 flex-1 items-center gap-[clamp(8px,0.7vw,12px)]">
        <span className="min-w-0 flex-1 overflow-hidden text-[clamp(14px,0.92vw,17px)] font-medium leading-[1.12] text-[#171717] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
          {item.label}
        </span>
        {item.comingSoon && (
          <span className="shrink-0 rounded-full bg-[#eaf1e3] px-[clamp(8px,0.7vw,13px)] py-[clamp(4px,0.36vw,7px)] text-[clamp(8px,0.5vw,9px)] font-medium text-[#17362d]">
            Coming Soon
          </span>
        )}
      </div>
    </div>
  )

  if (item.to) {
    return (
      <Link to={item.to} className="block">
        {content}
      </Link>
    )
  }

  return (
    <div aria-disabled="true" className="cursor-not-allowed">
      {content}
    </div>
  )
}

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const [open, setOpen] = useState(false)
  const [showNav, setShowNav] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const lastScrollYRef = useRef(0)
  const tickingRef = useRef(false)
  const dropdownCloseTimerRef = useRef(null)

  const [showDropdown, setShowDropdown] = useState(false)
  const [showMobileFeatures, setShowMobileFeatures] = useState(false)

  const toggleMobileMenu = () => {
    setOpen((prev) => {
      const nextOpen = !prev
      if (nextOpen) {
        setShowMobileFeatures(true)
      }
      return nextOpen
    })
  }

  const openFeatureDropdown = () => {
    if (dropdownCloseTimerRef.current) {
      clearTimeout(dropdownCloseTimerRef.current)
    }
    setShowDropdown(true)
  }

  const closeFeatureDropdown = () => {
    dropdownCloseTimerRef.current = setTimeout(() => {
      setShowDropdown(false)
    }, 90)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (tickingRef.current) {
        return
      }

      tickingRef.current = true
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY

        setShowNav(currentScrollY <= lastScrollYRef.current || currentScrollY < 8)
        setScrolled(currentScrollY > 20)

        lastScrollYRef.current = currentScrollY
        tickingRef.current = false
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (dropdownCloseTimerRef.current) {
        clearTimeout(dropdownCloseTimerRef.current)
      }
    }
  }, [])

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

  const transparentNavbarRoutes = ["/", "/outcomes", "/integrations", "/feelings", "/shopify", "/vto", "/ai-whatsapp-marketing"]
  const shouldOverlayHero = transparentNavbarRoutes.includes(location.pathname)
  const useTransparentNavbarStyle = shouldOverlayHero && !scrolled && !showDropdown && !open

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNav ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`${useTransparentNavbarStyle ? "absolute" : "fixed"} top-0 left-0 w-full z-[90] px-4 py-4 sm:px-6 lg:px-10 flex items-center justify-between transition-colors duration-300
      ${open
          ? "bg-white border-b border-dashed border-[#dfe5df] shadow-none backdrop-blur-none"
          : useTransparentNavbarStyle
          ? "bg-transparent border-transparent shadow-none backdrop-blur-none"
          : showDropdown
            ? "bg-white border-b border-dashed border-[#dfe5df] shadow-none backdrop-blur-none"
            : "bg-white/80 backdrop-blur-lg border-b border-slate-200 shadow-sm"
        }`}
    >
      {/* Logo */}
      <Link to="/" className="group flex items-center gap-3">
        <motion.img
          whileHover={{ scale: 1.08 }}
          src={open ? logo : useTransparentNavbarStyle ? logo2 : logo}
          alt="Kactus Logo"
          className="h-8 w-auto"
        />
      </Link>

      {/* Center Tabs */}
      <div
        className={`absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 font-normal md:flex ${useTransparentNavbarStyle ? "text-white" : "text-[#111111]"}`}
      >

        {/* Features with dropdown */}
        <div
          className="relative"
          onMouseEnter={openFeatureDropdown}
          onMouseLeave={closeFeatureDropdown}
        >
          <motion.div whileHover={{ y: -2 }}>
            <button
              type="button"
              aria-expanded={showDropdown}
              onClick={() => setShowDropdown((prev) => !prev)}
              className="flex cursor-pointer items-center gap-1 transition hover:text-emerald-600"
            >
              Features
              <svg
                className={`mt-[1px] h-3.5 w-3.5 transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </motion.div>

        </div>
        {/* Other Tabs (unchanged) */}
        <motion.div whileHover={{ y: -2 }}>
          <Link
            to="/outcomes"
            className="hover:text-emerald-600 transition"
          >
           Outcomes
          </Link>
        </motion.div>

        <motion.div whileHover={{ y: -2 }}>
          <Link
            to="/feelings"
            className="hover:text-emerald-600 transition"
          >
            Feelings
          </Link>
        </motion.div>

      </div>

      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onMouseEnter={openFeatureDropdown}
            onMouseLeave={closeFeatureDropdown}
            className="absolute left-0 top-full z-40 hidden w-screen border-y border-dashed border-[#dfe5df] bg-white text-[#111111] shadow-none md:block"
          >
            <div className="relative mx-auto grid h-[clamp(136px,9vw,160px)] max-w-[1920px] grid-cols-[16.7%_21.3%_20.2%_22.6%_14.7%_1fr] border-b border-dashed border-[#dfe5df]">
              <div className="border-r border-dashed border-[#dfe5df]" />

              <div className="grid grid-rows-2 border-r border-dashed border-[#dfe5df] px-[clamp(14px,1.25vw,24px)] py-[clamp(10px,0.9vw,16px)]">
                <div className="flex items-center">
                  <FeatureMenuItem item={featureMenuItems[0]} />
                </div>
                <div className="flex items-center border-t border-dashed border-[#dfe5df]">
                  <FeatureMenuItem item={featureMenuItems[1]} />
                </div>
              </div>

              <div className="grid grid-rows-2 border-r border-dashed border-[#dfe5df] px-[clamp(14px,1.25vw,24px)] py-[clamp(10px,0.9vw,16px)]">
                <div className="flex items-center">
                  <FeatureMenuItem item={featureMenuItems[2]} />
                </div>
                <div className="flex items-center border-t border-dashed border-[#dfe5df]">
                  <FeatureMenuItem item={featureMenuItems[3]} />
                </div>
              </div>

              <div className="flex items-center border-r border-dashed border-[#dfe5df] px-[clamp(10px,0.75vw,14px)]">
                <button
                  type="button"
                  onClick={() => navigate("/contact")}
                  className="group relative flex h-[clamp(92px,6.8vw,108px)] w-full flex-col items-start justify-start overflow-hidden rounded-[14px] bg-[#0d2c23] px-[clamp(16px,1.1vw,22px)] py-[clamp(14px,0.9vw,18px)] text-left text-white"
                >
                  <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_86%_74%,rgba(212,228,191,0.84)_0%,rgba(132,157,122,0.46)_27%,rgba(13,44,35,0)_57%)]" />
                  <span className="relative flex items-center gap-3 text-[clamp(15px,0.92vw,17px)] font-semibold leading-none">
                    BOOK A DEMO
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    >
                      <path d="M5 11L11 5" />
                      <path d="M6 5H11V10" />
                    </svg>
                  </span>
                  <span className="relative mt-2 overflow-hidden text-[clamp(12px,0.78vw,14px)] leading-none text-white/75 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                    Loram ipsum lorme ipsum
                  </span>
                </button>
              </div>

              <div className="border-r border-dashed border-[#dfe5df] bg-[repeating-linear-gradient(120deg,rgba(12,35,29,0.08)_0,rgba(12,35,29,0.08)_1px,transparent_1px,transparent_7px)]" />
              <div className="border-r border-dashed border-[#dfe5df]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right Area */}
      <div className="flex items-center gap-4 md:w-[120px] md:justify-end">
        <button
          onClick={toggleMobileMenu}
          aria-expanded={open}
          aria-label="Toggle menu"
          className={`md:hidden p-2 rounded-full inline-flex items-center justify-center transition-all active:scale-90 ${
            open
              ? "text-[#06231C] hover:bg-[#06231C]/10"
              : useTransparentNavbarStyle
                ? "text-white hover:bg-white/10"
                : "text-slate-700 hover:bg-slate-100"
          }`}
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
            className="absolute left-0 right-0 top-full z-[-1] min-h-[calc(100vh-64px)] bg-white md:hidden"
          >
            <div className="min-h-[calc(100vh-64px)] w-[min(100%,250px)] border-r border-dashed border-[#dfe5df] bg-white">
              <div className="border-b border-dashed border-[#dfe5df] px-7 pb-6 pt-6">
                <motion.div variants={itemVariants}>
                <button
                  type="button"
                  onClick={() => setShowMobileFeatures((prev) => !prev)}
                    className="flex items-center gap-2 text-[20px] font-normal leading-none text-[#111111]"
                >
                  Features
                  <svg
                      className={`mt-[2px] h-4 w-4 transition-transform ${showMobileFeatures ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {showMobileFeatures && (
                    <div className="mt-5 space-y-4">
                      {featureMenuItems.map((item) => {
                        const rowContent = (
                          <span className="flex min-h-[34px] w-full items-center gap-3">
                            <img
                              src={item.icon}
                              alt=""
                              aria-hidden="true"
                              className="h-8 w-8 shrink-0 object-contain"
                            />
                            <span className="min-w-0 flex-1 text-[12px] font-normal leading-[1.2] text-[#111111]">
                              {item.label}
                            </span>
                            {item.comingSoon && (
                              <span className="ml-1 shrink-0 rounded-full bg-[#eaf1e3] px-3 py-1.5 text-[7px] font-medium leading-none text-[#17362d]">
                                Coming Soon
                              </span>
                            )}
                          </span>
                        )

                        if (item.to) {
                          return (
                            <Link
                              key={item.label}
                              to={item.to}
                              onClick={() => {
                                setShowMobileFeatures(false)
                                setOpen(false)
                              }}
                              className="block"
                            >
                              {rowContent}
                            </Link>
                          )
                        }

                        return (
                          <span key={item.label} aria-disabled="true" className="block cursor-not-allowed">
                            {rowContent}
                          </span>
                        )
                      })}
                  </div>
                )}
                </motion.div>

                <div className="mt-6 space-y-5">
                  {[
                    { label: "Outcomes", to: "/outcomes" },
                    { label: "Feelings", to: "/feelings" }
                  ].map((item) => (
                    <motion.div key={item.label} variants={itemVariants}>
                      <Link
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className="block text-[20px] font-normal leading-none text-[#111111]"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="h-[120px] border-b border-dashed border-[#dfe5df] bg-[repeating-linear-gradient(120deg,rgba(12,35,29,0.06)_0,rgba(12,35,29,0.06)_1px,transparent_1px,transparent_5px)]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
