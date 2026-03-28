import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton, RevealImage, StaggerText } from "../components/AnimatedElements";
import HeroAbout from "../assets/images/About/Hero-about.png";
import StopGuessing from "../assets/images/About/stop-guessing.png";
import WeBelieve from "../assets/images/About/we-belive.png";
import buildImg from "../assets/images/About/What Were Building.jpg";
import buildleft from "../assets/images/About/Rectangle 521.png";
import buildcenter from "../assets/images/About/Rectangle 522.png";
import buildright from "../assets/images/About/Rectangle 523.png";

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollY } = useScroll();
  const parallaxY1 = useTransform(scrollY, [0, 1000], [0, 150]);
  const parallaxY2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <main className="bg-[#f6f7f4] text-[#0f172a] overflow-x-hidden relative">

      {/* Background Parallax Blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div style={{ y: parallaxY1 }} className="absolute top-20 -left-40 w-[600px] h-[600px] bg-emerald-100/40 blur-[120px] rounded-full" />
        <motion.div style={{ y: parallaxY2 }} className="absolute top-[1000px] -right-40 w-[500px] h-[500px] bg-emerald-200/20 blur-[100px] rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="container-p py-24 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold mb-6">
          <StaggerText text="About KactusLab" delay={0.1} />
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-slate-600 max-w-2xl mx-auto text-lg"
        >
          An intelligence platform for brands, built to turn market signals
          into clear, reliable decisions.
        </motion.p>

        <div className="mt-16 flex justify-center">
          <RevealImage
            src={HeroAbout}
            alt="KactusLab intelligence visualization"
            className="rounded-[40px] shadow-2xl max-w-5xl w-full"
          />
        </div>
      </section>

      {/* What We're Building */}
      <section className="bg-[#f5f6f4] py-32 text-center relative">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-semibold text-[#1c2b24] mb-24"
        >
          What We’re Building
        </motion.h2>


        {/* Cards */}
        

    <div className="relative flex justify-center items-center h-[420px] md:h-[520px] mb-24">

  {/* LEFT CARD */}
  <motion.div
    initial={{ opacity: 0, x: isMobile ? 40 : 80 }}
    whileInView={{ opacity: 1, x: isMobile ? -90 : -260 }}
    transition={{ duration: 1}}
    viewport={{ once: true }}
    className="absolute w-[270px] md:w-[580px] z-10"
  >
    <img
      src={buildright}
      className="w-full h-full object-contain pointer-events-none"
    />

    {/* Soft fade (NOT black bg) */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/0" />
  </motion.div>


  {/* CENTER CARD */}
  <motion.div
    initial={{ opacity: 0, y: 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1}}
    transition={{ duration: 0.8, delay: 0.2 }}
    viewport={{ once: true }}
    className="relative w-[300px] md:w-[590px] z-20"
  >
    <img
      src={buildcenter}
      className="w-full h-full object-contain pointer-events-none"
    />
  </motion.div>


  {/* RIGHT CARD */}
  <motion.div
    initial={{ opacity: 0, x: isMobile ? 40 : 80 }}
    whileInView={{ opacity: 1, x: isMobile ? 90 : 260 }}
    transition={{ duration: 1}}
    viewport={{ once: true }}
    className="absolute w-[320px] md:w-[580px] z-30"
  >
    <img
      src={buildleft}
      className="w-full h-full object-contain pointer-events-none"
    />

    {/* Soft fade */}
    <div className="absolute inset-0 bg-gradient-to-0 from-transparent via-transparent to-white/0" />
  </motion.div>

</div>
        {/* Subtitle */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-serif text-[#2d3a32] mb-6"
        >
          <span className="font-semibold text-[#1c2b24]">Today</span>
          <span className="mx-2 text-gray-400">·</span>
          <span className="text-gray-500">Next</span>
          <span className="mx-2 text-gray-400">·</span>
          <span className="text-gray-500">Forward</span>
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          KactusLabs brings fragmented market signals into one clear
          intelligence layer, helping brands understand what the market is
          doing now, how it’s evolving, and where demand is forming.
        </motion.p>
      </section>
    

      {/* Section 1 */}
      <section className="container-p py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        <RevealImage
          src={StopGuessing}
          alt="Business professionals discussion"
          className="rounded-[40px] shadow-xl"
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
            Stop guessing. <br /> Start understanding.
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Sales numbers, customer feedback, trends, and competitor activity
            all exist in different places. KactusLab unifies those signals into
            one intelligence view so teams can move with confidence instead of
            assumptions.
          </p>
        </motion.div>
      </section>

      {/* Section 2 */}
      <section className="container-p py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
            We believe intelligence should be clear, not chaotic.
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Good tools reduce noise. Our platform surfaces the insights that
            matter most, helping leaders focus on what drives growth — without
            dashboard overload.
          </p>
        </motion.div>

        <RevealImage
          src={WeBelieve}
          alt="Team strategic meeting"
          className="rounded-[40px] shadow-xl order-1 md:order-2"
        />
      </section>

      {/* Investors Section */}
      <section className="py-32 bg-emerald-950 text-white text-center relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-400 blur-3xl rounded-full" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-500 blur-3xl rounded-full" />
        </motion.div>

        <div className="container-p relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-serif font-semibold mb-6"
          >
            Backed by Industry-Leading Investors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-emerald-200/80 mb-12 text-lg"
          >
            Backed by investors that care about execution just as much as we do.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-12 text-emerald-100/50 text-xl font-medium">
            {["Tidal", "KeyPay", "ReceiptBank", "Ignition"].map((name, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.2, color: "#fff", opacity: 1 }}
                className="cursor-pointer transition-all"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-p py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-emerald-900 text-white rounded-[48px] p-12 md:p-20 flex flex-col md:flex-row justify-between items-center gap-12 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-8 leading-tight">
              Start elevating product <br /> experiences with <br /> KactusLab today
            </h2>
            <MagneticButton className="px-10 py-5 bg-white text-emerald-950 rounded-full font-bold text-lg shadow-xl hover:shadow-white/20 transition-all">
              Schedule a Demo
            </MagneticButton>
          </div>

          <div className="max-w-md text-emerald-100/80 text-lg relative z-10 backdrop-blur-sm bg-black/5 p-8 rounded-3xl border border-white/10">
            <p className="italic">
              “We’ve been confident with product insights like never before.
              Everything works seamlessly, providing context and true clarity.”
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-800" />
              <div>
                <p className="font-bold text-white">— Camila Ashe</p>
                <p className="text-sm">E-commerce Leader</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

    </main>
  )
}
