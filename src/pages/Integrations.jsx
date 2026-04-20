import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import DemoModal from "../components/DemoModal";
import hero from "../assets/images/Home/hero.png";
import logoWithoutName from "../assets/images/logowithoutname.svg";
import shopifyIcon from "../assets/images/Integration/shopifyIcon.svg";
import wooIcon from "../assets/images/Integration/wocommerceIcon.svg";
import woocommerceCardIcon from "../assets/images/Integration/woocommerce.png";
import kactusApiCardIcon from "../assets/images/Integration/KactusApi.png";
import ShopifyCard from "../assets/images/Shopify/ShopifyCard.svg";
import ShopifyHeroBg from "../assets/images/Shopify/shopifyhero.png";
import ctaImage from "../assets/images/Integration/ctaImage.png";

const integrationCards = [
  {
    title: "Fast Implementation",
    description: "Fast Implementation this is best i am best lorme ipsum lorme imsume",
    icon: shopifyIcon,
    iconAlt: "Shopify"
  },
  {
    title: "Fast Implementation",
    description: "Fast Implementation this is best i am best lorme ipsum lorme imsume",
    icon: woocommerceCardIcon,
    iconAlt: "WooCommerce"
  },
  {
    title: "Fast Implementation",
    description: "Fast Implementation this is best i am best lorme ipsum lorme imsume",
    icon: kactusApiCardIcon,
    iconAlt: "Kactus API"
  }
];

const integrationCtaPoints = [
  "150+ Handcoded",
  "150+ Handcoded",
  "150+ Handcoded"
];

const shopifyHeroTestimonial = {
  quote:
    "I've been cautious with product tech in the past, but KactusLabs just gets it. It's easy to integrate, and the visuals focus on what really matters to customers. Everything works seamlessly, reducing confusion and the small issues that often lead to returns.",
  name: "Cameo Ashe",
  role: "Lemonade Beach E-Commerce",
  image: "https://randomuser.me/api/portraits/women/28.jpg"
};

export default function Integrations() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const { scrollY } = useScroll();
  const heroRevealY = useTransform(scrollY, [0, 500], [0, 110]);
  const blobY1 = useTransform(scrollY, [0, 500], [0, 100]);
  const blobY2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <main className="bg-[#F5F6F2] text-slate-800">
      <section className="relative min-h-screen overflow-hidden bg-[#06231C]">
        <motion.div
          style={{ y: heroRevealY, backgroundImage: `url(${ShopifyHeroBg})` }}
          className="absolute inset-0 bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,21,16,0.9)_0%,rgba(4,40,31,0.72)_42%,rgba(17,111,96,0.18)_100%)]" />
        <motion.div
          style={{ y: blobY1 }}
          className="absolute left-[-40px] top-[18%] z-[1] h-[360px] w-[360px] rounded-full bg-[#32cdb5]/30 blur-[110px]"
        />
        <motion.div
          style={{ y: blobY2 }}
          className="absolute right-[-40px] top-[-40px] z-[1] h-[320px] w-[320px] rounded-full bg-[#a8ffe8]/20 blur-[130px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_55%)] mix-blend-screen opacity-40" />

        <div className="relative z-10 px-6 pb-6 pt-16 sm:px-8 md:px-14 md:pt-20 lg:px-20 xl:px-24">
          <div className="grid min-h-[calc(100vh-10rem)] w-full items-center gap-10 lg:grid-cols-[60%_40%] lg:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[860px] lg:pr-10"
            >
              <h1
                className="self-stretch text-white"
                style={{
                  color: "#FFF",
                  fontFamily: "SF Pro",
                  fontSize: "54px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "64px"
                }}
              >
                Integrate KactusLabs with
                <br />
                Your Commerce Stack
              </h1>

              <p
                className="mt-4 max-w-[820px]"
                style={{
                  color: "rgba(255,255,255,0.88)",
                  fontFamily: "SF Pro",
                  fontSize: "22px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "1.35"
                }}
              >
                Connect KactusLabs with Shopify, WooCommerce, and
                <br />
                your own platform via our API to unify data workflows and
                <br />
                automate key processes.
              </p>

              <button
                type="button"
                onClick={() => setIsDemoOpen(true)}
                className="mt-7 inline-flex h-12 items-center justify-center rounded-[4px] bg-[#D4E5C0] px-8 text-[15px] font-medium text-[#06231C] transition-all duration-300 hover:translate-y-[-1px] hover:bg-[#dbe9ca]"
              >
                See Integrations
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="flex min-h-[520px] w-full items-center justify-center"
            >
              <div className="relative h-[420px] w-[420px]">
                <div className="absolute left-1/2 top-1/2 h-[354px] w-[354px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/85" />
                <div className="absolute left-1/2 top-1/2 h-[258px] w-[258px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/85" />

                <div className="absolute left-1/2 top-1/2 flex h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#06231C] shadow-[0_18px_40px_rgba(4,28,22,0.35)]">
                  <img src={logoWithoutName} alt="KactusLab" className="h-10 w-10 object-contain" />
                </div>

                <div className="absolute left-1/5 top-1/2 flex h-[54px] w-[54px] translate-x-[70px] translate-y-[-177px] items-center justify-center rounded-full bg-white shadow-[0_0_30px_rgba(212,229,192,0.32),0_12px_25px_rgba(255,255,255,0.16)]">
                  <img src={shopifyIcon} alt="Shopify" className="h-10 w-10 object-contain" />
                </div>

                <div className="absolute left-1/2 top-1/2 flex h-[54px] w-[54px] translate-x-[98px] translate-y-[98px] items-center justify-center rounded-full bg-[#D78AC2] shadow-[0_0_26px_rgba(215,138,194,0.34),0_12px_25px_rgba(215,138,194,0.22)]">
                  <img src={wooIcon} alt="WooCommerce" className="h-8 w-8 object-contain" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-16 pt-6 sm:px-8 md:px-14 md:pb-20 md:pt-8 lg:px-20 xl:px-24">
        <div className="mx-auto max-w-[1320px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="mx-auto flex w-full justify-center text-center"
          >
            <h2
              style={{
                width: "658px",
                height: "110px",
                textAlign: "center",
                fontFamily: "SF Pro",
                fontSize: "46px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "48px",
                textTransform: "capitalize",
                background: "linear-gradient(90deg, #06231C 48.13%, #D4E5C0 120.12%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Seamlessly Integrate KactusLabs
              <br />
              With Your Tech Stack
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            {integrationCards.map((card, index) => (
              <motion.article
                key={`${card.title}-${index}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="min-h-[218px] bg-cover bg-center bg-no-repeat px-5 pb-6 pt-5 text-white"
                style={{ backgroundImage: `url(${ShopifyCard})` }}
              >
                <div className="flex h-full flex-col">
                  <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white shadow-[0_12px_25px_rgba(255,255,255,0.12)]">
                    <img src={card.icon} alt={card.iconAlt} className="h-10 w-10 object-contain" />
                  </div>

                  <h3 className="mt-4 text-[18px] font-medium leading-[1.25] text-white">
                    {card.title}
                  </h3>

                  <p className="mt-3 max-w-[260px] text-[14px] leading-[1.45]" style={{ color: "#FFFFFFBD" }}>
                    {card.description}
                  </p>

                  <button
                    type="button"
                    className="mt-auto inline-flex items-center gap-3 pt-8 text-[14px] font-medium text-[#EEF7DA]"
                  >
                    Learn More
                    <svg viewBox="0 0 14 14" className="h-3.5 w-3.5" aria-hidden="true">
                      <path d="M4 2.5L9 7L4 11.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
<section className="relative overflow-hidden bg-white px-6 pb-14 pt-6 sm:px-8 md:px-14 md:pb-[72px] md:pt-8 lg:px-20 xl:px-24">
  <div className="mx-auto grid max-w-[1380px] gap-10 lg:grid-cols-[40%_60%] lg:items-center lg:gap-8">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-full lg:pr-6"
    >
      <h2
        className="w-full text-[34px] font-normal leading-[1.05] tracking-[-0.03em] text-[#06231C] sm:text-[42px] md:text-[48px] lg:text-[54px] xl:text-[56px]"
        style={{ fontFamily: '"SF Pro", sans-serif' }}
      >
        <span className="block">AI Visual Engine for</span>
        <span className="block">Fashion Brands</span>
      </h2>

      <p
        className="mt-4 text-[24px] font-normal leading-[1.16] text-[#1B5D4D] sm:text-[28px] md:text-[34px]"
        style={{ fontFamily: '"SF Pro", sans-serif' }}
      >
        Scale Your Growth Today.
      </p>

      <div className="mt-12 space-y-5">
        {integrationCtaPoints.map((point, index) => (
          <div key={`${point}-${index}`} className="flex items-center gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#7D8781] text-[#4E5C56]">
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true">
                <path d="M4 8.1 6.7 10.8 12 5.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <p
              className="max-w-[300px] text-[18px] leading-[1.35] text-[#4F5B57] md:text-[19px]"
              style={{ fontFamily: '"SF Pro", sans-serif' }}
            >
              {point}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <button
          type="button"
          onClick={() => setIsDemoOpen(true)}
          className="inline-flex h-10 min-w-[168px] items-center justify-center rounded-[4px] bg-[#D4E5C0] px-6 text-[15px] font-medium text-[#06231C] transition-all duration-300 hover:translate-y-[-1px] hover:bg-[#dbe9ca]"
        >
          Schedule a Demo
        </button>

        <button
          type="button"
          className="inline-flex h-10 min-w-[136px] items-center justify-center rounded-[4px] border border-[#16362D] bg-white px-6 text-[15px] font-medium text-[#16362D] transition-all duration-300 hover:translate-y-[-1px] hover:bg-[#f8fbf3]"
        >
          Outcome
        </button>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.65, delay: 0.08 }}
      viewport={{ once: true }}
      className="relative lg:pl-2"
    >
      <div className="absolute left-[-30px] top-[18px] h-44 w-44 rounded-full bg-[#E8F1CF] blur-[92px]" />
      <div className="absolute right-[10%] top-0 h-44 w-44 rounded-full bg-[#EAF2D6] blur-[100px]" />
      <div className="absolute bottom-[12%] left-[35%] h-36 w-36 rounded-full bg-[#DCEBC2] blur-[92px]" />

      <div
        className="relative overflow-hidden
          mr-[-24px] sm:mr-[-32px] md:mr-[-56px] lg:mr-[-80px] xl:mr-[-96px]
          mb-[-56px] md:mb-[-72px]
          rounded-tl-[28px]
          bg-[linear-gradient(180deg,#FFFFFF_0%,#FDFEF9_100%)]
          pt-3 pl-3
          border-t border-l border-[#EEF2E5]"
        style={{
          borderRight: 'none',
          borderBottom: 'none',
        }}
      >
        <div
          className="overflow-hidden rounded-tl-[22px] border-t border-l border-[#EEF2E3] bg-white"
          style={{
            borderRight: 'none',
            borderBottom: 'none',
          }}
        >
          <img
            src={ctaImage}
            alt="WhatsApp marketing dashboard call-to-action preview"
            className="block h-auto w-full"
          />
        </div>
      </div>
    </motion.div>
  </div>
</section>

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </main>
  );
}
