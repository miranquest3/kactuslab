import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MagneticButton, StaggerText } from '../components/AnimatedElements'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center text-center p-6 bg-[#f6f7f4] relative overflow-hidden">

      {/* 404 Floating Number */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
        animate={{ opacity: 0.05, scale: 1.5, rotate: 0 }}
        transition={{ duration: 2, type: "spring" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <span className="text-[40vw] font-black text-emerald-900">404</span>
      </motion.div>

      <div className="relative z-10">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="text-6xl sm:text-7xl md:text-9xl font-serif font-black text-emerald-900"
        >
          Oops!
        </motion.h1>

        <p className="mt-6 text-2xl text-slate-600 font-medium">
          <StaggerText text="The page you're looking for has vanished into thin air." delay={0.5} />
        </p>

        <div className="mt-12 flex justify-center">
          <Link to="/">
            <MagneticButton className="px-10 py-5 bg-emerald-900 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-emerald-900/20 transition-all flex items-center gap-3">
              <span className="text-xl">←</span> Back to Safety
            </MagneticButton>
          </Link>
        </div>
      </div>
    </main>
  )
}
