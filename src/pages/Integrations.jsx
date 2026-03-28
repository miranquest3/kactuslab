import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton, SectionTitle, StaggerText } from "../components/AnimatedElements";
import HeroIntegration from "../assets/images/Integration/Hero-Integration.png";
import KactusLabsAPI from "../assets/images/Integration/kactuslabsapi.png";
import ShopifyLogo from "../assets/images/Integration/shopify.png";
import WooCommerceLogo from "../assets/images/Integration/woocommerce.png";

export default function Integrations() {
  const { scrollY } = useScroll();
  const blobY1 = useTransform(scrollY, [0, 800], [0, 100]);
  const blobY2 = useTransform(scrollY, [0, 800], [0, -100]);

  return (
    <main className="bg-[#f6f7f4] text-[#0f172a] overflow-x-hidden relative">

      {/* Hero Section */}
    <section className="bg-[#EEF2E8] py-28 relative overflow-hidden">

  {/* Soft Background Glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-200/30 blur-[140px] rounded-full" />
  </div>

  <div className="relative z-10 max-w-5xl mx-auto text-center px-6">

    {/* Heading */}
    <h2 className="text-4xl md:text-6xl font-serif text-[#1D2B24] leading-tight">
      Integrate KactusLabs with
      <br />
      Your Commerce Stack
    </h2>

    {/* Subtext */}
    <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
      Connect KactusLabs with Shopify, WooCommerce, and your own platform via our API
      to unify data workflows and automate key processes.
    </p>

    {/* CTA */}
    <button className="mt-8 bg-[#0B3B2E] text-white px-8 py-3 rounded-full text-sm hover:shadow-xl hover:scale-[1.03] transition-all">
      See Integrations
    </button>

    {/* ================== CONNECTION MAP ================== */}
    <div className="mt-24 relative flex items-center justify-center">

      {/* BASE LINE */}
      <div className="absolute w-full max-w-3xl h-[2px] bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />

      {/* 🔥 CENTER → LEFT + RIGHT HEARTBEAT */}
     <div className="absolute w-full max-w-3xl h-[2px] overflow-hidden">

  {/* LEFT FLOW (center → Shopify) */}
  <motion.div
    className="absolute left-1/2 top-0 h-[2px] bg-emerald-500"
    animate={{
      x: ["0%", "-100%"],
      width: ["0%", "50%"],
      opacity: [1, 0]
    }}
    transition={{
      duration: 2.2,
      repeat: Infinity,
      ease: "easeOut"
    }}
  />

  {/* RIGHT FLOW (center → WooCommerce) */}
  <motion.div
    className="absolute left-1/2 top-0 h-[2px] bg-emerald-500"
    animate={{
      x: ["0%", "100%"],
      width: ["0%", "50%"],
      opacity: [1, 0]
    }}
    transition={{
      duration: 2.2,
      repeat: Infinity,
      ease: "easeOut"
    }}
  />

  {/* GLOW LEFT */}
  <motion.div
    className="absolute left-1/2 h-[2px] bg-emerald-400 blur-md"
    animate={{
      x: ["0%", "-100%"],
      width: ["0%", "60%"],
      opacity: [0.8, 0]
    }}
    transition={{
      duration: 2.2,
      repeat: Infinity,
      ease: "easeOut"
    }}
  />

  {/* GLOW RIGHT */}
  <motion.div
    className="absolute left-1/2 h-[2px] bg-emerald-400 blur-md"
    animate={{
      x: ["0%", "100%"],
      width: ["0%", "60%"],
      opacity: [0.8, 0]
    }}
    transition={{
      duration: 2.2,
      repeat: Infinity,
      ease: "easeOut"
    }}
  />

</div>

      {/* LEFT NODE (Shopify) */}
      <div className="absolute left-2 md:left-10 flex flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-lg flex items-center justify-center"
        >
          <img src={ShopifyLogo} className="w-8 md:w-10 object-contain" />
        </motion.div>
      </div>

      {/* CENTER NODE (KactusLabs) */}
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2.2, repeat: Infinity }}
        className="w-32 h-32 md:w-40 md:h-40 rounded-full 
                   bg-[#062E22] flex items-center justify-center 
                   text-white font-serif text-xl md:text-2xl 
                   shadow-[0_25px_80px_rgba(0,0,0,0.35)] 
                   border-[14px] border-[#C7D3B3]"
      >
        KactusLabs
      </motion.div>

      {/* RIGHT NODE (WooCommerce) */}
      <div className="absolute right-2 md:right-10 flex flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#A48DB3] flex items-center justify-center shadow-md"
        >
          <img src={WooCommerceLogo} className="w-10 md:w-12 object-contain" />
        </motion.div>
      </div>

    </div>

  </div>
</section>

      {/* Integration Cards */}
      <section className="container-p py-32">
        <SectionTitle
          title="Seamlessly integrate KactusLabs with your tech stack"
          subtitle="One connection, infinite possibilities for your commerce growth."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

          {[
            {
              name: "Shopify",
              logo: ShopifyLogo,
              desc: "Automatically sync products, orders, customers, and inventory directly from Shopify.",
              link: "/shopify",
              tag: "Native App"
            },
            {
              name: "WooCommerce",
              logo: WooCommerceLogo,
              desc: "Sync products and order data seamlessly from WooCommerce into KactusLabs.",
              link: null,
              tag: "Coming Soon"
            },
            {
              name: "KactusLabs API",
              logo: KactusLabsAPI,
              desc: "Build custom integrations and automate advanced workflows using our open API.",
              link: "#",
              tag: "Docs"
            }
          ].map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
                scale: 1.02,
                rotateX: 4,
                rotateY: 4,
                boxShadow: "0 40px 80px rgba(0,0,0,0.1)"
              }}
              className="bg-white rounded-[32px] p-10 shadow-sm border border-slate-100 transition-all flex flex-col perspective-[1000px] group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 rounded-2xl bg-[#eef2ea] flex items-center justify-center p-3">
                  <img src={item.logo} alt={item.name} className="w-full h-full object-contain" />
                </div>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-widest rounded-full border border-emerald-100">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-2xl font-serif font-semibold mb-4 text-slate-900 group-hover:text-emerald-800 transition-colors">
                {item.name}
              </h3>
              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                {item.desc}
              </p>

              {item.link ? (
                <Link to={item.link} className="flex items-center gap-2 text-[#0b3b2e] font-bold translate-x-0 group-hover:translate-x-2 transition-transform">
                  Explore Integration <span className="text-xl">→</span>
                </Link>
              ) : (
                <span className="text-slate-400 font-bold">Coming 2026</span>
              )}
            </motion.div>
          ))}

        </div>
      </section>

      {/* CTA Section */}
      <section className="container-p pb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-[#0b3b2e] to-[#041a14] text-white rounded-[32px] md:rounded-[40px] p-8 md:p-20 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-16 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(52,211,153,0.1),transparent)]" />

          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-8 leading-tight">
              Ready to unify your <br className="hidden md:block" /> commerce data?
            </h2>
            <MagneticButton className="px-8 py-4 md:px-10 md:py-5 bg-white text-[#0b3b2e] rounded-full font-bold text-lg shadow-xl hover:shadow-white/20 transition-all">
              Schedule a Demo
            </MagneticButton>
          </div>

          <div className="max-w-md text-emerald-100/70 text-lg relative z-10 border-l-0 border-t md:border-t-0 md:border-l border-emerald-500/30 pt-8 md:pt-0 md:pl-8 text-center md:text-left">
            <p className="italic mb-6">
              “The API integration was straightforward and well-documented. We had our custom ERP sync built and running in less than a week.”
            </p>
            <p className="font-bold text-white">— VP of Engineering, Global Fashion Brand</p>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
