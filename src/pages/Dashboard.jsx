import { useRef, useState } from "react"
import { Scan, Ruler, Camera, MessageCircle, Send } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { MagneticButton, SectionTitle, RevealImage, StaggerText } from "../components/AnimatedElements"
import FAQSection from "../components/FAQSection";
import HeroMain from "../assets/images/Home/Hero-Main.png";
import ValueSection from "../components/ValueSection";
import DemoModal from "../components/DemoModal";

// Icons
import FastImplementation from "../assets/images/Home/Icons/fast-implementation.svg";
import RealTime from "../assets/images/Home/Icons/real-time.svg";
import ZeroDowntime from "../assets/images/Home/Icons/zero-downtime.svg";
import APIIcon from "../assets/images/Home/Icons/API.svg";

import VirtualTryOn from "../assets/images/Home/Virtual-Try-On.jpg";
import Fifteen from "../assets/images/Home/Icons/15.svg";
import Forty from "../assets/images/Home/Icons/40.svg";
import Eighty from "../assets/images/Home/Icons/80.svg";
import shopifyl from "../assets/images/Home/Icons/shopify.png";
import magentol from "../assets/images/Home/Icons/magento.png";
import woocoml from "../assets/images/Home/Icons/woocom.png";
const logos = [
  { type: "image", src: shopifyl, label: "Shopify" },
  { type: "image", src: magentol, label: "Magento" },
  { type: "image", src: woocoml, label: "WooCommerce" },
  { type: "text", label: "Custom APIs" },
];

const whyCards = [
  {
    icon: Fifteen,
    value: "15%",
    title: "Reduction in Returns",
    desc: "Based on 50,000+ customer interactions across our partner network.",
    dark: true
  },
  {
    icon: Forty,
    value: "40%",
    title: "Increase in Add-to-Cart",
    desc: "Shoppers are more confident when they can visualize the product."
  },
  {
    icon: Eighty,
    value: "80%",
    title: "Lower Production Costs",
    desc: "Replace expensive photoshoots with AI-generated imagery."
  }
];
/* Floating Particles Background */
function FloatingParticles() {
  const particles = Array.from({ length: 25 })
  const { scrollY } = useScroll()
  const yRange = useTransform(scrollY, [0, 1000], [0, -200])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          initial={{
            x: Math.random() * 1600,
            y: Math.random() * 900,
            opacity: 0
          }}
          style={{ y: yRange }}
          animate={{
            y: [null, -300],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

/* 3D Tilt Card */
function TiltCard({ children }) {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = -(y - centerY) / 25
    const rotateY = (x - centerX) / 25

    ref.current.style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`
  }

  const reset = () => {
    ref.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className="transition-transform duration-300"
    >
      {children}
    </div>
  )
}
const features = [
  {
    icon: Scan,
    title: "Virtual Try-On",
    desc: "Let customers see apparel and accessories on themselves in real time."
  },
  {
    icon: Ruler,
    title: "AI-Powered Size Recommendations",
    desc: "Eliminate  number one reason for returns with brand-specific fit intelligence."
  },
  {
    icon: Camera,
    title: "AI Photoshoot Studio",
    desc: "Generate studio-quality product images without production overhead."
  },
  {
    icon: MessageCircle,
    title: "AI Fashion Coach",
    desc: "Conversational AI for style guidance, sizing, and product discovery."
  },
  {
    icon: Send,
    title: "WhatsApp Marketing",
    desc: "Personalized campaigns driven by customer behavior and try-on history."
  }
];
function Stat({ value, label }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200"
    >
      <div className="text-3xl font-semibold text-emerald-800">{value}</div>
      <div className="mt-2 text-sm text-slate-600">{label}</div>
    </motion.div>
  )
}

export default function Dashboard() {
  const { scrollY } = useScroll();
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const heroRevealY = useTransform(scrollY, [0, 500], [0, 150]);
  const blobY1 = useTransform(scrollY, [0, 500], [0, 100]);
  const blobY2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <main className="bg-[#F5F6F2] text-slate-800">

      <section className="overflow-hidden">
        <div className="bg-gradient-to-br from-[#EDEFE6] via-[#EEF1E8] to-[#E6EBDD] 
                              rounded-[48px] px-8 sm:px-12 py-16 md:px-20 md:py-28 
                              grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center 
                              shadow-[0_50px_100px_rgba(0,0,0,0.08)] border border-white/30">

          {/* LEFT CONTENT */}
          <motion.div
            style={{ y: heroRevealY }}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-serif leading-tight text-[#1F2A24]">
              <span className="block text-4xl md:text-5xl lg:text-6xl font-medium">
                Cut Production Costs by
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl text-emerald-900 font-semibold mt-2">
                40% Scale Faster With AI
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-6 text-slate-600 max-w-xl text-base md:text-lg leading-relaxed"
            >
              KactusLab helps fashion brands reduce returns and increase
              conversions with photorealistic virtual try-ons, intelligent
              size recommendations, and AI-generated visual content.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-10 flex gap-5 flex-wrap"
            >
              <button onClick={() => setIsDemoOpen(true)} className="bg-emerald-900 text-white px-8 py-4 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                Schedule a Demo
              </button>

              <button className="border border-slate-300 px-8 py-4 rounded-full font-medium bg-[#F5F7F2] hover:bg-white transition">
                See It In Action
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 80 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-end"
          >
            <img
              src={HeroMain}
              alt="Preview"
              className="w-full md:scale-110 lg:scale-125 rounded-3xl 
                              shadow-[0_60px_120px_rgba(0,0,0,0.0)]"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/0 to-transparent pointer-events-none" />
          </motion.div>

        </div>

      </section>


      <ValueSection />
      {/* ENTERPRISE READY */}

      {/* ENTERPRISE READY */}
      <section className="relative bg-[#F5F6F2] py-32 overflow-hidden">

        {/* Soft Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 right-10 w-[400px] h-[400px] bg-slate-200/20 blur-[120px] rounded-full" />
        </div>

        <div className="relative container mx-auto px-6 text-center">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-serif text-[#1D2B24]">
              Enterprise-Ready
            </h2>
            <p className="mt-4 text-slate-500 text-lg">
              Built for scale. Designed for reliability.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="mt-20 flex md:grid md:grid-cols-4 overflow-x-auto md:overflow-visible gap-6 max-w-6xl mx-auto">

            {[
              { label: "Fast Implementation", icon: FastImplementation },
              { label: "Real-time Brand Audit", icon: RealTime },
              { label: "Zero Downtime", icon: ZeroDowntime },
              { label: "API-based Integration", icon: APIIcon },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="min-w-[260px] md:min-w-0 
                 bg-[#F2F3EE] rounded-[28px] py-10 px-6 
                 border border-slate-200 shadow-sm"
              >
                <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-xl bg-[#1F4D3A]">
                  <img src={item.icon} alt="" className="w-16 h-16" />
                </div>

                <div className="text-slate-800 font-medium text-base">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
          <h3 className="text-2xl md:text-3xl font-serif text-[#1D2B24] mt-32">Compatible with</h3>
          {/* Compatible With */}
          {/* DESKTOP */}
          <div className="hidden md:flex justify-between items-center max-w-6xl mx-auto mt-12">
            <h2 className="text-xl text-slate-600 font-medium"></h2>
            {logos.map((item, index) => (
              <div key={index}>
                {item.type === "text" ? (
                  <div className="text-slate-900 font-semibold text-lg">
                    {item.label}
                  </div>
                ) : (
                  <img src={item.src} className="h-12 object-contain opacity-80" />
                )}
              </div>
            ))}
          </div>

          {/* MOBILE LOOP */}
          <div className="md:hidden mt-12 relative overflow-hidden">

            <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#F5F6F2] to-transparent z-0" />
            <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#F5F6F2] to-transparent z-0" />

            <motion.div
              className="flex gap-12 w-max"
              animate={{ x: ["0%", "-50%"] }}   // ✅ FIXED (no jump)
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
              {[...logos, ...logos].map((item, index) => (
                <div key={index} className="min-w-[120px] flex justify-center items-center">
                  {item.type === "text" ? (
                    <div className="text-slate-900 font-semibold text-base whitespace-nowrap">
                      {item.label}
                    </div>
                  ) : (
                    <img src={item.src} className="h-10 object-contain opacity-80" />
                  )}
                </div>
              ))}
            </motion.div>

          </div>

        </div>
      </section>
      {/* ENTERPRISE READY */}

      {/* FROM BROWSING TO BUYING */}

      {/*
    {/* FROM BROWSING TO BUYING */}
      <section id="features" className="bg-[#EDEFE6] py-24">

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-start">

          {/* LEFT IMAGE */}

          <div className="sticky top-32">

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="rounded-[32px] overflow-hidden shadow-xl border border-slate-300"
            >

              <img
                src={VirtualTryOn}
                alt="Virtual Try-On"
                className="w-full h-full object-cover"
              />

            </motion.div>

          </div>


          {/* RIGHT SIDE */}

          <div className="flex flex-col h-[720px]">

            <h2 className="text-4xl font-serif text-slate-900">
              From browsing to buying, visualized
            </h2>

            <p className="text-slate-600 mt-2 mb-6">
              Helping brands and customers make confident buying decisions.
            </p>

            <div className="relative flex-1 overflow-hidden">

              {/* gradient fade */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#EDEFE6] to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#EDEFE6] to-transparent z-10" />

              <motion.div
                animate={{ y: ["0%", "-50%"] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="flex flex-col gap-4"
              >

                {[...features, ...features].map((item, index) => {

                  const Icon = item.icon;

                  return (

                    <div
                      key={index}
                      className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition"
                    >

                      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-emerald-50 text-emerald-900">

                        <Icon size={20} />

                      </div>

                      <div>

                        <div className="font-semibold text-slate-900">
                          {item.title}
                        </div>

                        <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                          {item.desc}
                        </p>

                      </div>

                    </div>

                  );

                })}

              </motion.div>

            </div>

          </div>

        </div>

      </section>


      {/* PRICING STRIP */}
      <section className="bg-emerald-950 text-white py-16 px-6 text-center">

        <div className="max-w-3xl mx-auto">

          {/* Heading */}
          <h2 className="font-serif leading-tight tracking-tight text-3xl sm:text-4xl md:text-5xl">
            KactusLab pricing is designed around
            <span className="block mt-2">
              how each brand operates.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-sm sm:text-base text-emerald-200/80 leading-relaxed">
            Instead of rigid tiers, we tailor plans based on your scale, use cases,
            and integration needs. This ensures you pay for intelligence that actually
            fits your business, not unused features.
          </p>

          {/* CTA */}
          <button className="mt-8 bg-white text-emerald-900 px-6 py-3 rounded-full 
                       text-sm sm:text-base font-medium 
                       hover:bg-emerald-100 transition">
            Contact for pricing
          </button>

        </div>

      </section>

      {/* WHY IT MATTERS */}
      {/* WHY IT MATTERS */}
      {/* WHY IT MATTERS */}
      {/* WHY IT MATTERS */}
      {/* WHY IT MATTERS */}
      <section className="bg-white py-32">

        <div className="container mx-auto px-0 text-center">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-serif text-[#1D2B24]">
              Why It Matters
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Powering the Next Generation of Fashion
            </p>
          </motion.div>

          {/* Cards */}
          {/* DESKTOP */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-20">

            {/* Card 1 (Dark) */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-[32px] p-10 text-left 
                    bg-gradient-to-br from-[#062E22] to-[#0B3D2E] 
                    text-white shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                <img src={Fifteen} className="w-20 h-20" />
              </div>

              <div className="text-4xl font-semibold mb-2">15%</div>
              <div className="text-base mb-3">Reduction in Returns</div>
              <p className="text-sm text-white/70">
                Based on 50,000+ customer interactions across our partner network.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-[32px] p-10 text-left 
                    bg-[#C9D6B8] text-[#1D2B24]"
            >
              <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center mb-6">
                <img src={Forty} className="w-20 h-20" />
              </div>

              <div className="text-4xl font-semibold mb-2">40%</div>
              <div className="text-base mb-3">Increase in Add-to-Cart</div>
              <p className="text-sm text-slate-700">
                Shoppers are more confident when they can visualize the product.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-[32px] p-10 text-left 
                    bg-[#E4EAD9] text-[#1D2B24]"
            >
              <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center mb-6">
                <img src={Eighty} className="w-50 h-50" />
              </div>

              <div className="text-4xl font-semibold mb-2">80%</div>
              <div className="text-base mb-3">Lower Production Costs</div>
              <p className="text-sm text-slate-700">
                Replace expensive photoshoots with AI-generated on-model imagery.
              </p>
            </motion.div>

          </div>
          <div className="md:hidden mt-20 relative overflow-hidden">

            <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-0" />
            <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-0" />

            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              {[...whyCards, ...whyCards].map((card, i) => (
                <div
                  key={i}
                  className={`min-w-[200px] rounded-[32px] p-5 text-left ${card.dark
                    ? "bg-gradient-to-br from-[#062E22] to-[#0B3D2E] text-white"
                    : "bg-[#E4EAD9] text-[#1D2B24]"
                    }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-black/10 flex items-center justify-center mb-5">
                    <img src={card.icon} className="w-10 h-10" />
                  </div>

                  <div className="text-2xl font-semibold mb-2">{card.value}</div>
                  <div className="text-sm font-medium mb-1 line-clamp-1">
                    {card.title}
                  </div>
                  <p className="text-xs opacity-70 h-[36px] overflow-hidden">
                    {card.desc}
                  </p>
                </div>
              ))}
            </motion.div>

          </div>

        </div>
      </section>
      {/* TESTIMONIALS – ULTRA FLOATING PREMIUM */}
      {/* TESTIMONIALS – SAME SIZE PREMIUM VERSION */}
      <section className="relative bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 py-28 overflow-hidden">

        <div className="relative container mx-auto px-4 sm:px-6">

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-emerald-100">
              Why Fashion Brands love KactusLab
            </h2>
            <p className="mt-4 text-emerald-200/80">
              Real stories from brands that reduced returns and increased conversions.
            </p>
          </motion.div>

          {/* Cards Grid (Same Layout) */}

          <div className="mt-20 
                flex md:grid md:grid-cols-3 
                overflow-x-auto md:overflow-visible 
                gap-6 max-w-6xl mx-auto">

            {[
              "KactusLab improved our conversions instantly.",
              "Customers trust the virtual try-on experience.",
              "Reduced returns significantly within weeks.",
              "Saved production costs on photoshoots.",
              "Boosted add-to-cart rate dramatically.",
              "Better visual storytelling for products.",
              "Improved customer confidence.",
              "Seamless integration with our store."
            ].map((text, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  boxShadow: "0px 25px 60px rgba(0,0,0,0.25)"
                }}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  opacity: { duration: 0.6, delay: i * 0.08 },
                  y: {
                    duration: 2 + (i % 2),
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 transition-all 
    ${i % 2 === 1 ? "md:mt-12" : ""}`}
              >
                <div className="text-emerald-100 font-semibold">
                  ★★★★★
                </div>

                <p className="mt-4 text-sm text-emerald-50/90 leading-relaxed">
                  {text}
                </p>

                <div className="mt-4 text-xs text-emerald-200/70">
                  Fashion Brand Partner
                </div>
              </motion.div>

            ))}

          </div>

        </div>
      </section>




      {/* FAQ SECTION */}
      <FAQSection />

      {/* CTA */}
      {/* CTA SECTION */}
      {/* CTA SECTION */}
      <section className="bg-white py-5 px-4 md:px-6">

        <div className="max-w-[2050px] mx-auto"> {/* 👈 wider */}

          <div className="rounded-[40px] px-6 md:px-16 py-14 md:py-16 
                      bg-gradient-to-r from-[#0B2F25] via-[#061E18] to-[#0B2F25] 
                      text-white flex flex-col md:flex-row items-start md:items-center 
                      gap-6 md:gap-8">

            {/* LEFT CONTENT */}
            <div className="max-w-[1220px] flex-1">
              <h2 className="text-4xl md:text-3xl lg:text-6xl font-serif leading-[1.1] tracking-tight">
                AI Visual Engine for Fashion Brands
                <br />
                Scale Your Growth Today.
              </h2>

              <button onClick={() => setIsDemoOpen(true)} className="mt-6 border border-white/40 px-6 py-3 rounded-full text-sm hover:bg-white hover:text-black transition">
                Schedule a Demo
              </button>
            </div>

            {/* RIGHT TESTIMONIAL */}
            <div className="relative max-w-[420px] flex-shrink-0 border-l border-white/20 pl-6">
              <p className="text-sm text-white/80 leading-relaxed">
                I’ve been cautious with product tech in the past... but KactusLabs
                just gets it. It’s easy to integrate, and the visuals focus on what
                really matters to customers. Everything works seamlessly, reducing
                confusion and the small issues that often lead to returns.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="user"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-medium">Cameo Ashe</div>
                  <div className="text-xs text-white/60">
                    Lemonade Beach E-Commerce
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </main>
  );
}