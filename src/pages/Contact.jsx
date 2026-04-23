import { motion } from "framer-motion";
import { MagneticButton, StaggerText } from "../components/AnimatedElements";

export default function Contact() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-[#f6f7f4] relative overflow-hidden py-24">

      {/* Decorative 3D-like background shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-64 h-64 bg-emerald-100 rounded-[60px] blur-3xl opacity-60"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -15, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-emerald-200 rounded-[80px] blur-3xl opacity-40"
      />

      <div className="container-p relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 1 }}
          className="bg-white/40 backdrop-blur-xl border border-white/40 rounded-[48px] p-12 md:p-20 shadow-2xl max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-semibold mb-6">
            <StaggerText text="Contact Us" />
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-slate-600 text-xl mb-12"
          >
            Reach out to our intelligence team at <br />
            <span className="text-emerald-900 font-bold border-b-2 border-emerald-900/20 px-1">contact@Kactus AI.example</span>
          </motion.p>

          <MagneticButton className="px-12 py-5 bg-emerald-900 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-emerald-900/20 transition-all">
            Send us a Message
          </MagneticButton>
        </motion.div>
      </div>

    </main>
  )
}
