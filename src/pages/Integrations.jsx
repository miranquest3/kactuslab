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
      <section className="bg-[#e9efe4] py-32 relative overflow-hidden">
        {/* Parallax Blobs */}
        <motion.div style={{ y: blobY1 }} className="absolute -top-20 -left-20 w-96 h-96 bg-emerald-200/40 blur-[100px] rounded-full" />
        <motion.div style={{ y: blobY2 }} className="absolute bottom-0 -right-20 w-80 h-80 bg-emerald-300/20 blur-[80px] rounded-full" />

        <div className="container-p text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold mb-6 max-w-4xl mx-auto leading-tight">
            <StaggerText text="Integrate KactusLabs with Your Commerce Stack" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg"
          >
            Connect KactusLabs with Shopify, WooCommerce, and custom platforms
            to unify data workflows and automate intelligent product operations.
          </motion.p>

          <MagneticButton className="px-10 py-5 bg-[#0b3b2e] text-white rounded-full font-bold text-lg shadow-xl hover:shadow-emerald-900/20 transition-all">
            Explore Integrations
          </MagneticButton>

          {/* Visual Connection Map */}
          <div className="mt-24 relative flex items-center justify-center gap-10 md:gap-32 flex-wrap">
            {/* Connection Lines (SVGs) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg className="w-full h-full max-w-4xl opacity-20" viewBox="0 0 800 200">
                <motion.path
                  d="M 150 100 Q 400 0 650 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="10 10"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1, strokeDashoffset: [0, -100] }}
                  transition={{ pathLength: { duration: 2 }, strokeDashoffset: { repeat: Infinity, duration: 20, ease: "linear" } }}
                />
                <motion.path
                  d="M 150 100 Q 400 200 650 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="10 10"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1, strokeDashoffset: [0, 100] }}
                  transition={{ pathLength: { duration: 2, delay: 0.5 }, strokeDashoffset: { repeat: Infinity, duration: 20, ease: "linear" } }}
                />
              </svg>
            </div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", delay: 1 }}
              className="flex flex-col items-center group relative z-10"
            >
              <div className="w-28 h-28 rounded-full bg-white shadow-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-500">
                <img src={ShopifyLogo} alt="Shopify" className="w-14 h-14 object-contain" />
              </div>
              <span className="mt-4 font-bold text-slate-500 uppercase tracking-widest text-xs">Shopify</span>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", delay: 0.8 }}
              className="w-40 h-40 rounded-full bg-[#0b3b2e] text-white flex flex-col items-center justify-center font-bold shadow-[0_20px_50px_rgba(11,59,46,0.5)] border-4 border-white relative z-10"
            >
              <div className="text-xl">Kactus</div>
              <div className="text-xs opacity-50">HUB</div>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", delay: 1.2 }}
              className="flex flex-col items-center group relative z-10"
            >
              <div className="w-28 h-28 rounded-full bg-white shadow-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-500">
                <img src={WooCommerceLogo} alt="WooCommerce" className="w-14 h-14 object-contain" />
              </div>
              <span className="mt-4 font-bold text-slate-500 uppercase tracking-widest text-xs">WooCommerce</span>
            </motion.div>
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
          className="bg-gradient-to-br from-[#0b3b2e] to-[#041a14] text-white rounded-[40px] p-12 md:p-20 flex flex-col md:flex-row justify-between items-center gap-16 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(52,211,153,0.1),transparent)]" />

          <div className="relative z-10 maxWidth-xl">
            <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-8 leading-tight">
              Ready to unify your <br /> commerce data?
            </h2>
            <MagneticButton className="px-10 py-5 bg-white text-[#0b3b2e] rounded-full font-bold text-lg shadow-xl hover:shadow-white/20 transition-all">
              Schedule a Demo
            </MagneticButton>
          </div>

          <div className="max-w-md text-emerald-100/70 text-lg relative z-10 border-l border-emerald-500/30 pl-8">
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
