import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MagneticButton, StaggerText } from '../components/AnimatedElements'

export default function NotFound() {
  return (
    <main className="demo-page relative min-h-screen overflow-hidden bg-[#F5F6F2] p-6 text-center">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#D4E5C0]/50 blur-3xl" />
        <div className="absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-[#8EB49B]/35 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
        animate={{ opacity: 0.05, scale: 1.5, rotate: 0 }}
        transition={{ duration: 2, type: 'spring' }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <span className="text-[40vw] font-black text-[#123126]">404</span>
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center">
        <div className="w-full rounded-[30px] border border-dashed border-[#dfe5df] bg-white/90 p-8 shadow-[0_24px_70px_rgba(14,39,31,0.08)] backdrop-blur-sm md:p-12">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
            className="text-6xl font-black text-[#123126] sm:text-7xl md:text-9xl"
          >
            Oops!
          </motion.h1>

          <p className="mt-6 text-xl font-medium text-slate-600 md:text-2xl">
            <StaggerText text="The page you're looking for has vanished into thin air." delay={0.5} />
          </p>

          <div className="mt-12 flex justify-center">
            <Link to="/">
              <MagneticButton className="inline-flex h-[44px] items-center gap-3 rounded-[4px] bg-[#D4E5C0] px-8 text-[14px] font-medium uppercase tracking-[0.06em] text-[#17362d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#dce9c9]">
                <span className="text-xl">?</span> Back to Safety
              </MagneticButton>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
