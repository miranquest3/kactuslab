import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton, SectionTitle, StaggerText } from "../components/AnimatedElements";
import DemoModal from "../components/DemoModal";

export default function Shopify() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 150]);
  const y2 = useTransform(scrollY, [0, 800], [0, -100]);

  return (
    <main className="bg-[#f6f7f4] text-[#0f172a] overflow-x-hidden relative">

      {/* Hero */}
      <section className="bg-[#e9efe4] py-32 relative overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-200/30 blur-[120px] rounded-full" />
        <motion.div style={{ y: y2 }} className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-emerald-300/20 blur-[100px] rounded-full" />

        <div className="container-p text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold mb-6 max-w-3xl mx-auto leading-tight">
            <StaggerText text="KactusLabs + Shopify Built for Modern Commerce" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-slate-600 max-w-2xl mx-auto mb-10 text-lg"
          >
            Seamlessly sync your Shopify store with KactusLabs to automate
            product workflows, reduce returns, and enhance product clarity.
          </motion.p>

          <MagneticButton className="px-10 py-5 bg-[#0b3b2e] text-white rounded-full font-bold text-lg shadow-xl hover:shadow-emerald-900/20 transition-all">
            Install on Shopify
          </MagneticButton>

          {/* Visual */}
          <div className="mt-24 flex items-center justify-center gap-10 flex-wrap relative">
            <motion.div
              initial={{ rotate: -10, x: -50, opacity: 0 }}
              animate={{ rotate: 0, x: 0, opacity: 1 }}
              transition={{ type: "spring", delay: 1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-28 h-28 rounded-[32px] bg-white shadow-2xl flex items-center justify-center text-4xl font-black text-[#96bf48]"
            >
              S
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-4 h-4 rounded-full bg-emerald-300"
            />

            <motion.div
              initial={{ rotate: 10, x: 50, opacity: 0 }}
              animate={{ rotate: 0, x: 0, opacity: 1 }}
              transition={{ type: "spring", delay: 1.2 }}
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="w-36 h-36 rounded-[40px] bg-[#0b3b2e] text-white flex items-center justify-center font-bold shadow-[0_30px_60px_rgba(11,59,46,0.3)] border-2 border-white/20"
            >
              Kactus
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container-p py-32">
        <SectionTitle
          title="Everything you need to power your Shopify store"
          subtitle="Advanced AI tools deeply integrated into the world's most popular commerce platform."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

          {[
            {
              title: "Product Sync",
              desc: "Automatically sync products, variants, pricing, and inventory directly from Shopify into KactusLabs."
            },
            {
              title: "Order & Customer Data",
              desc: "Keep order and customer data aligned across platforms to power better post-purchase experiences."
            },
            {
              title: "Smart Visual Automation",
              desc: "Generate and manage product visuals using AI, fully integrated with your Shopify catalog."
            },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
                rotateX: 5,
                rotateY: 5,
                boxShadow: "0 40px 80px rgba(0,0,0,0.1)"
              }}
              className="bg-white rounded-[40px] p-12 shadow-sm border border-slate-100 transition-all perspective-[1000px] cursor-default"
            >
              <h3 className="text-2xl font-serif font-semibold mb-6 text-emerald-900">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {feature.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* How It Works */}
      <section className="container-p pb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="bg-[#eef2ea] rounded-[56px] p-16 md:p-24 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/20 blur-[100px] rounded-full" />

          <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-20 text-center relative z-10">
            How it works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 relative z-10">

            {[
              { step: "1", text: "Connect your Shopify store in one click." },
              { step: "2", text: "Sync your products and configure automation rules." },
              { step: "3", text: "Start improving product clarity and reducing returns." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="w-20 h-20 rounded-3xl bg-emerald-100 text-[#0b3b2e] text-3xl font-black flex items-center justify-center mx-auto mb-8 shadow-inner group-hover:bg-emerald-900 group-hover:text-white transition-colors duration-500"
                >
                  {item.step}
                </motion.div>
                <p className="text-slate-600 text-xl font-medium px-4">
                  {item.text}
                </p>
              </motion.div>
            ))}

          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="container-p pb-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-emerald-900 text-white rounded-[48px] p-16 md:p-24 text-center relative overflow-hidden group shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <h2 className="text-4xl md:text-6xl font-serif font-semibold mb-10 max-w-3xl mx-auto leading-tight relative z-10">
            Ready to transform your <br /> Shopify store?
          </h2>

          <div onClick={() => setIsDemoOpen(true)} className="inline-block relative z-10 cursor-pointer">
            <MagneticButton className="px-12 py-6 bg-white text-[#0b3b2e] rounded-full font-bold text-xl shadow-2xl hover:shadow-white/20 transition-all">
              Schedule a Demo
            </MagneticButton>
          </div>

        </motion.div>
      </section>

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </main>
  )
}
