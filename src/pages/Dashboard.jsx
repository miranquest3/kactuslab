import { useRef, useState } from "react"
import { Scan, Ruler, Camera, MessageCircle, Send } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { MagneticButton, SectionTitle, RevealImage, StaggerText } from "../components/AnimatedElements"
import FAQSection from "../components/FAQSection";
import HeroMain from "../assets/images/Home/Hero-Main.png";
import ValueSection from "../components/ValueSection";

// Icons
import FastImplementation from "../assets/images/Home/Icons/fast-implementation.svg";
import RealTime from "../assets/images/Home/Icons/real-time.svg";
import ZeroDowntime from "../assets/images/Home/Icons/zero-downtime.svg";
import APIIcon from "../assets/images/Home/Icons/API.svg";

import VirtualTryOn from "../assets/images/Home/Virtual-Try-On.jpg";
import Fifteen from "../assets/images/Home/Icons/15.svg";
import Forty from "../assets/images/Home/Icons/40.svg";
import Eighty from "../assets/images/Home/Icons/80.svg";


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
    desc: "Eliminate the number one reason for returns with brand-specific fit intelligence."
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

  const heroRevealY = useTransform(scrollY, [0, 500], [0, 150]);
  const blobY1 = useTransform(scrollY, [0, 500], [0, 100]);
  const blobY2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <main className="bg-[#F5F6F2] text-slate-900">

      <section className="relative py-24 md:py-32 overflow-hidden">

        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            style={{ y: blobY1 }}
            className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-emerald-300/20 blur-[120px] rounded-full"
          />
          <motion.div
            style={{ y: blobY2 }}
            className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-emerald-400/10 blur-[100px] rounded-full"
          />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-[#EDEFE6] via-[#EEF1E8] to-[#E6EBDD] 
                          rounded-[48px] px-8 sm:px-12 py-16 md:px-20 md:py-28 
                          grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center 
                          shadow-[0_50px_100px_rgba(0,0,0,0.08)] border border-white/30">

            {/* LEFT CONTENT */}
            <motion.div
              style={{ y: heroRevealY }}
              initial={{ opacity: 0, x: -60 }}
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
                <button className="bg-emerald-900 text-white px-8 py-4 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
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
                className="w-[115%] md:w-[120%] max-w-none rounded-3xl 
                           shadow-[0_60px_120px_rgba(0,0,0,0.25)]"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
            </motion.div>

          </div>
        </div>
      </section>


      <ValueSection />
      {/* ENTERPRISE READY */}
      {/* ENTERPRISE READY */}
      <section className="relative bg-[#F5F6F2] py-32 overflow-hidden">

        {/* Soft Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 right-10 w-[400px] h-[400px] bg-emerald-200/30 blur-3xl rounded-full" />
        </div>

        <div className="relative container mx-auto px-6 text-center">

          {/* Title Animation */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: false }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-slate-800">
              Enterprise-Ready
            </h2>
            <p className="mt-4 text-slate-500">
              Built for scale. Designed for reliability.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-10">

            {[
              { label: "Fast Implementation", icon: FastImplementation },
              { label: "Real-Time Brand Audit", icon: RealTime },
              { label: "Zero Downtime", icon: ZeroDowntime },
              { label: "API-Based Integration", icon: APIIcon },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -15,
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                  boxShadow: "0px 40px 80px rgba(0,0,0,0.12)"
                }}
                className="bg-[#F2F3EE] rounded-3xl py-14 px-6 border border-slate-200 transition-all cursor-default group perspective-[1000px]"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-emerald-950 shadow-lg group-hover:bg-emerald-800 transition-colors"
                >
                  <img src={item.icon} alt={item.label} className="w-7 h-7" />
                </motion.div>

                <div className="text-slate-800 font-medium text-lg">
                  {item.label}
                </div>
              </motion.div>
            ))}

          </div>

          {/* Compatibility Box */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: false }}
            className="mt-24 bg-[#F2F3EE] rounded-[32px] p-14 border border-slate-200 text-left shadow-sm"
          >

            {/* Compatible With */}
            <h3 className="text-xl font-semibold text-slate-800">
              Compatible With
            </h3>

            <div className="mt-8 flex flex-wrap gap-5">
              {["Shopify", "Magento", "WooCommerce", "Custom APIs"].map((item) => (
                <motion.span
                  key={item}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#ffffff",
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.05)"
                  }}
                  className="px-6 py-3 rounded-full bg-[#E6E9DC] text-slate-700 text-sm transition"
                >
                  {item}
                </motion.span>
              ))}
            </div>

            {/* Security & Compliance */}
            <h3 className="mt-14 text-xl font-semibold text-slate-800">
              Security & Compliance
            </h3>

            <div className="mt-8 flex flex-wrap gap-5">
              {["SOC 2", "GDPR Ready", "ISO 27001"].map((item) => (
                <motion.span
                  key={item}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.05)"
                  }}
                  className="px-6 py-3 rounded-full border border-slate-300 bg-white text-slate-700 text-sm transition"
                >
                  {item}
                </motion.span>
              ))}
            </div>

          </motion.div>

        </div>
      </section>
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
      <section className="bg-emerald-950 text-white py-16 text-center">
        <h3 className="text-3xl font-serif max-w-3xl mx-auto">
          KactusLab pricing is designed around how each brand operates.
        </h3>
        <a className="inline-block mt-6 bg-white text-emerald-900 px-6 py-3 rounded-full">
          Contact for pricing
        </a>
      </section>


      {/* WHY IT MATTERS */}
      {/* WHY IT MATTERS */}
      {/* WHY IT MATTERS */}
      {/* WHY IT MATTERS */}
      <section className="relative bg-[#F4F5F1] py-32 overflow-hidden">

        {/* Soft Background Glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ scale: [1, 1.03, 1], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-emerald-200/20 blur-3xl rounded-full" />
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-emerald-300/15 blur-3xl rounded-full" />
        </motion.div>

        <div className="relative container mx-auto px-6 text-center">

          {/* Title Animation */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <h2 className="text-5xl md:text-6xl font-serif text-slate-800 tracking-tight leading-tight">
              Why It Matters
            </h2>
            <p className="mt-3 text-lg md:text-xl text-slate-500 max-w-xl mx-auto">
              Powering the Next Generation of Fashion with AI-driven precision and style.
            </p>
          </motion.div>

          {/* Logos */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.85, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="mt-12 flex flex-wrap justify-center gap-16 text-sm text-slate-500"
          >
            {["logolpsum", "logolpsum", "LOGOIPSUM", "logolpsum", "logolpsum"].map((logo, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.25, y: -5, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="cursor-pointer font-medium"
              >
                {logo}
              </motion.span>
            ))}
          </motion.div>

          {/* Stat Cards */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {[
              {
                icon: Fifteen,
                title: "Reduction in Returns",
                desc: "Based on 50,000+ customer interactions across our partner network.",
                dark: true
              },
              {
                icon: Forty,
                title: "Increase in Add-to-Cart",
                desc: "Shoppers are more confident when they can visualize the product.",
              },
              {
                icon: Eighty,
                title: "Lower Production Costs",
                desc: "Replace expensive photoshoots with AI-generated on-model imagery.",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                viewport={{ once: false }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  rotate: 0.5,
                  boxShadow: "0 40px 60px rgba(0,0,0,0.08)"
                }}
                className={`rounded-3xl p-12 text-left transition-all ${card.dark
                  ? "text-white bg-gradient-to-br from-emerald-950 to-emerald-800 shadow-lg"
                  : "bg-white border border-slate-200 text-slate-800 shadow-md"
                  }`}
              >
                <motion.img
                  src={card.icon}
                  alt=""
                  className="w-16 mb-6"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 220, damping: 12 }}
                />

                <div className="text-xl font-semibold mb-2">{card.title}</div>
                <p className={`text-sm ${card.dark ? "opacity-80" : "text-slate-600"}`}>
                  {card.desc}
                </p>
              </motion.div>
            ))}

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
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

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
      <section className="bg-[#F5F6F2] py-20 text-center">
        <h3 className="text-3xl font-serif">
          Start elevating product experiences with KactusLab today
        </h3>
        <a className="inline-block mt-6 bg-emerald-900 text-white px-6 py-3 rounded-full">
          Schedule a Demo
        </a>
      </section>

    </main>
  );
}