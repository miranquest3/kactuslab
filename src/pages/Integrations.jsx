import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import DemoModal from "../components/DemoModal";
import hero from "../assets/images/Integration/hero.png";
import logoWithoutName from "../assets/images/Integration/logowithoutname.svg";
import shopifyIcon from "../assets/images/Integration/shopifyIcon.svg";
import wooIcon from "../assets/images/Integration/wocommerceIcon.svg";
import woocommerceCardIcon from "../assets/images/Integration/woocommerce.png";
import kactusApiCardIcon from "../assets/images/Integration/KactusApi.png";
import whatsappMobileBg from "../assets/images/Integration/mobileBg.png";
import ShopifyCard from "../assets/images/Integration/ShopifyCard.svg";
import ShopifyHeroBg from "../assets/images/Integration/shopifyhero.png";
import shopifyCtaImage from "../assets/images/Integration/shopifyCta.png";
import shopifyCtaMobileImage from "../assets/images/Integration/shopifyCtaMb.png";

const integrationCards = [
  {
    title: "Fast Implementation",
    description: "Fast Implementation this is best i am best lorme ipsum lorme imsume",
    icon: shopifyIcon,
    iconAlt: "Shopify",
    to: "/shopify"
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

const shopifyHeroTestimonial = {
  quote:
    "I've been cautious with product tech in the past, but Kactus AI just gets it. It's easy to integrate, and the visuals focus on what really matters to customers. Everything works seamlessly, reducing confusion and the small issues that often lead to returns.",
  name: "Cameo Ashe",
  role: "Lemonade Beach E-Commerce",
  image: "https://randomuser.me/api/portraits/women/28.jpg"
};

export default function Integrations() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const { scrollY } = useScroll();
  const heroRevealY = useTransform(scrollY, [0, 500], [0, 110]);

  return (
    <main className="sf-pro-page bg-[#F5F6F2] text-slate-800">
      <section className="relative min-h-screen overflow-hidden bg-[#06231C] md:min-h-screen">
        <motion.img
          src={ShopifyHeroBg}
          alt=""
          aria-hidden="true"
          style={{ y: heroRevealY }}
          className="absolute inset-0 hidden h-full w-full object-cover object-left md:block"
        />
        <motion.img
          src={whatsappMobileBg}
          alt=""
          aria-hidden="true"
          style={{ y: heroRevealY }}
          className="absolute inset-0 h-full w-full object-cover object-center md:hidden"
        />

        <div className="relative z-10 px-6 pb-8 pt-[92px] sm:px-8 md:px-14 md:pb-6 md:pt-10 lg:px-20 xl:px-24">
          <div className="grid min-h-[calc(100svh-124px)] w-full content-center gap-6 md:min-h-[calc(100vh-10rem)] md:items-center lg:grid-cols-[60%_40%] lg:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-[296px] text-center md:mx-0 md:max-w-[860px] md:text-left lg:pr-10"
            >
              <h1
                className="self-stretch text-center text-[30px] font-normal leading-[30px] text-white md:hidden"
                style={{ fontFamily: '"SF Pro", sans-serif' }}
              >
                <span className="block whitespace-nowrap">Integrate KactusAI with</span>
                <span className="block whitespace-nowrap">Your Commerce Stack</span>
              </h1>

              <h1
                className="hidden self-stretch text-white md:block"
                style={{
                  color: "#FFF",
                  fontFamily: "SF Pro",
                  fontSize: "54px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "64px"
                }}
              >
                Integrate Kactus AI with
                <br />
                Your Commerce Stack
              </h1>

              <p
                className="mx-auto mt-2 max-w-[330px] text-center text-[13.15px] font-[250] leading-[16.736px] text-white/80 md:hidden"
                style={{ fontFamily: '"SF Pro", sans-serif' }}
              >
                Connect KactusAI with Shopify, WooCommerce, and your
                own platform via our API to unify data workflows and
                automate key processes.
              </p>

              <p
                className="mt-4 hidden max-w-[820px] md:block"
                style={{
                  color: "rgba(255,255,255,0.88)",
                  fontFamily: "SF Pro",
                  fontSize: "22px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "1.35"
                }}
              >
                Connect Kactus AI with Shopify, WooCommerce, and
                <br />
                your own platform via our API to unify data workflows and
                <br />
                automate key processes.
              </p>

              <Link
                to="/contact"
                className="mt-11 inline-flex h-[29px] min-w-[118px] items-center justify-center rounded-[3px] bg-[#D4E5C0] px-[21px] text-[10px] font-medium uppercase text-[#06231C] transition-all duration-300 hover:translate-y-[-1px] hover:bg-[#dbe9ca] md:mt-7 md:h-12 md:min-w-0 md:rounded-[4px] md:px-8 md:text-[15px] md:normal-case"
              >
                <span className="md:hidden">Book a Demo</span>
                <span className="hidden md:inline">See Integrations</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto mt-4 h-[300px] w-[300px] md:hidden"
            >
              <div className="absolute left-1/2 top-1/2 h-[244px] w-[244px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/85" />
              <div className="absolute left-1/2 top-1/2 h-[178px] w-[178px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/85" />

              <div className="absolute left-1/2 top-1/2 flex h-[48px] w-[48px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#03251D] shadow-[0_0_54px_rgba(212,229,192,0.24),0_18px_42px_rgba(0,0,0,0.28)]">
                <img src={logoWithoutName} alt="Kactus AI" className="h-[28px] w-[28px] object-contain" />
              </div>

              <div className="absolute left-1/2 top-1/2 flex h-[34px] w-[34px] translate-x-[-72px] translate-y-[-132px] items-center justify-center rounded-full bg-white shadow-[0_0_30px_rgba(212,229,192,0.32),0_12px_25px_rgba(255,255,255,0.16)]">
                <img src={shopifyIcon} alt="Shopify" className="h-[26px] w-[26px] object-contain" />
              </div>

              <div className="absolute left-1/2 top-1/2 flex h-[38px] w-[38px] translate-x-[38px] translate-y-[106px] items-center justify-center rounded-full bg-[#D78AC2] shadow-[0_0_28px_rgba(215,138,194,0.42),0_12px_25px_rgba(215,138,194,0.26)]">
                <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-white">
                  <img src={woocommerceCardIcon} alt="WooCommerce" className="h-[20px] w-[20px] object-contain" />
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="hidden min-h-[300px] w-full items-center justify-center md:flex md:min-h-[520px]"
            >
              <div className="relative h-[250px] w-[250px] md:h-[420px] md:w-[420px]">
                <div className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/85 md:h-[354px] md:w-[354px]" />
                <div className="absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/85 md:h-[258px] md:w-[258px]" />

                <div className="absolute left-1/2 top-1/2 flex h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#06231C] shadow-[0_18px_40px_rgba(4,28,22,0.35)] md:h-[76px] md:w-[76px] md:bg-[#03251D] md:shadow-[0_0_54px_rgba(212,229,192,0.20),0_18px_42px_rgba(0,0,0,0.24)]">
                  <img src={logoWithoutName} alt="Kactus AI" className="h-7 w-7 object-contain md:h-[46px] md:w-[46px]" />
                </div>

                <div className="absolute left-1/2 top-1/2 flex h-[34px] w-[34px] translate-x-[-44px] translate-y-[-120px] items-center justify-center rounded-full bg-white shadow-[0_0_30px_rgba(212,229,192,0.32),0_12px_25px_rgba(255,255,255,0.16)] md:h-[54px] md:w-[54px] md:-translate-x-[88px] md:-translate-y-[192px] md:shadow-[0_0_36px_rgba(212,229,192,0.50),0_14px_34px_rgba(255,255,255,0.18)]">
                  <img src={shopifyIcon} alt="Shopify" className="h-7 w-7 object-contain md:h-10 md:w-10" />
                </div>

                <div className="absolute left-1/2 top-1/2 flex h-[34px] w-[34px] translate-x-[28px] translate-y-[88px] items-center justify-center rounded-full bg-[#D78AC2] shadow-[0_0_26px_rgba(215,138,194,0.34),0_12px_25px_rgba(215,138,194,0.22)] md:h-[54px] md:w-[54px] md:translate-x-[92px] md:translate-y-[120px] md:shadow-[0_0_38px_rgba(215,138,194,0.58),0_16px_34px_rgba(215,138,194,0.28)]">
                  <img src={wooIcon} alt="WooCommerce" className="h-6 w-6 object-contain md:h-8 md:w-8" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white px-0 pb-10 pt-8 sm:px-0 md:px-14 md:pb-10 md:pt-8 lg:px-20 xl:px-24">
        <div className="mx-auto max-w-[1320px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="mx-auto flex w-full justify-center px-6 text-center sm:px-8 md:px-0"
          >
            <h2
              className="pb-1 text-center text-[32px] font-normal leading-[34.3px] lg:hidden"
              style={{
                fontFamily: "SF Pro",
                textTransform: "capitalize",
                background: "linear-gradient(90deg, #06231C 48.13%, #D4E5C0 120.12%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Seamlessly Integrate
              <br />
              Kactus AI With Your
              <br />
              Tech Stack
            </h2>

            <h2
              className="hidden lg:block"
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
              Seamlessly Integrate Kactus AI
              <br />
              With Your Tech Stack
            </h2>
          </motion.div>

          <div className="mt-8 overflow-hidden lg:hidden">
            <style>{`
              @keyframes integrations-mobile-card-scroll {
                from { transform: translateX(0); }
                to { transform: translateX(calc(-50% - 14px)); }
              }

              @media (prefers-reduced-motion: reduce) {
                .integrations-mobile-card-track {
                  animation: none !important;
                  transform: translateX(0) !important;
                }
              }
            `}</style>

            <div
              className="integrations-mobile-card-track flex w-max gap-7 px-6"
              style={{ animation: "integrations-mobile-card-scroll 22s linear infinite" }}
            >
              {[...integrationCards, ...integrationCards].map((card, index) => (
                <article
                  key={`${card.title}-mobile-${index}`}
                  className="min-h-[210px] w-[284px] shrink-0 bg-cover bg-center bg-no-repeat px-5 pb-6 pt-5 text-white"
                  style={{ backgroundImage: `url(${ShopifyCard})` }}
                >
                  <div className="flex h-full flex-col">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white shadow-[0_12px_25px_rgba(255,255,255,0.12)]">
                      <img src={card.icon} alt={card.iconAlt} className="h-9 w-9 object-contain" />
                    </div>

                    <h3 className="mt-4 text-[17px] font-medium leading-[1.25] text-white">
                      {card.title}
                    </h3>

                    <p className="mt-3 max-w-[230px] text-[13px] leading-[1.45]" style={{ color: "#FFFFFFBD" }}>
                      {card.description}
                    </p>

                    {card.to ? (
                      <Link to={card.to} className="mt-auto inline-flex items-center gap-3 pt-7 text-[13px] font-medium text-[#EEF7DA]">
                        Learn More
                        <svg viewBox="0 0 14 14" className="h-3.5 w-3.5" aria-hidden="true">
                          <path d="M4 2.5L9 7L4 11.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    ) : (
                      <button type="button" className="mt-auto inline-flex items-center gap-3 pt-7 text-[13px] font-medium text-[#EEF7DA]">
                        Learn More
                        <svg viewBox="0 0 14 14" className="h-3.5 w-3.5" aria-hidden="true">
                          <path d="M4 2.5L9 7L4 11.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12 hidden gap-7 lg:grid lg:grid-cols-3">
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

                  {card.to ? (
                    <Link to={card.to} className="mt-auto inline-flex items-center gap-3 pt-8 text-[14px] font-medium text-[#EEF7DA]">
                      Learn More
                      <svg viewBox="0 0 14 14" className="h-3.5 w-3.5" aria-hidden="true">
                        <path d="M4 2.5L9 7L4 11.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  ) : (
                    <button type="button" className="mt-auto inline-flex items-center gap-3 pt-8 text-[14px] font-medium text-[#EEF7DA]">
                      Learn More
                      <svg viewBox="0 0 14 14" className="h-3.5 w-3.5" aria-hidden="true">
                        <path d="M4 2.5L9 7L4 11.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-white px-6 pt-10 pb-0 md:pt-8 lg:hidden">
        <div className="mx-auto max-w-[430px]">
          <div className="text-center">
            <h2 className="text-[31px] font-normal leading-[1.13] text-[#06231C]">
              Seamless Integrations <span className="text-[#64786E]">for</span>
              <br />
              AI-Driven Commerce
            </h2>
            <p className="mt-2 text-[23px] font-normal leading-[1.2] text-[#00624E]">
              Unify Your Tools. Execute Faster.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-[48%_52%] items-start gap-4">
            <div className="flex min-h-[322px] flex-col justify-center pr-1">
              <div className="space-y-4">
                {[
                  "Connect in minutes",
                  "Launch journeys",
                  "Refine interactions"
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <span className="flex h-[21px] w-[21px] shrink-0 items-center justify-center rounded-full border-[2px] border-[#5E6862] text-[#4E5C56]">
                      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true">
                        <path d="M4 8.1 6.7 10.8 12 5.5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <p className="whitespace-nowrap text-[16px] leading-[1.25] text-[#4F5B57]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => setIsDemoOpen(true)}
                  className="flex h-[50px] w-full items-center justify-center rounded-[3px] bg-[#D4E5C0] text-[17px] font-normal text-[#06231C]"
                >
                  Schedule a Demo
                </button>
                <Link
                  to="/outcomes"
                  className="flex h-[48px] w-full items-center justify-center rounded-[3px] border border-[#16362D] bg-white text-[17px] font-normal text-[#16362D]"
                >
                  Outcome
                </Link>
              </div>
            </div>

            <div className="relative min-h-[322px] pl-1">
              <div className="absolute left-[-28px] top-[-18px] h-44 w-44 rounded-full bg-[#E8F1CF] blur-[82px]" />
              <div className="relative mr-[-54px] w-[210px] overflow-hidden rounded-tl-[20px] border-t border-l border-[#EEF2E5] bg-white shadow-[0_0_40px_rgba(22,54,45,0.06)] md:mr-[-96px] md:w-[300px]">
                <img
                  src={shopifyCtaMobileImage}
                  alt="Integrations dashboard preview"
                  className="block h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[#06231C]" />
      </section>

      <section className="hidden overflow-hidden bg-white pt-10 pb-10 lg:block xl:pt-8 xl:pb-10">
        <div className="mx-auto grid min-h-[370px] max-w-[1440px] grid-cols-[40%_60%] items-center bg-[linear-gradient(90deg,#FFFFFF_0%,#FFFFFF_32%,#F4FAEA_100%)] pl-20 xl:pl-24">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-[410px] pb-7"
          >
            <h2
              className="text-[32px] font-normal leading-[1.03] text-[#06231C] xl:text-[35px]"
              style={{ fontFamily: '"SF Pro", sans-serif' }}
            >
              Seamless Integrations <span className="text-[#7F9588]">for</span>
              <br />
              AI-Driven Commerce
            </h2>

            <p
              className="mt-3 text-[20px] font-normal leading-[1.2] text-[#00644F] xl:text-[21px]"
              style={{ fontFamily: '"SF Pro", sans-serif' }}
            >
              Unify Your Tools. Execute Faster.
            </p>

            <div className="mt-9 space-y-3.5">
              {[
                "Connect your platforms in minutes",
                "Launch automated WhatsApp journeys",
                "Track and refine every interaction"
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <span className="flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-full border border-[#6F7A74] text-[#4E5C56]">
                    <svg viewBox="0 0 16 16" className="h-[9px] w-[9px]" aria-hidden="true">
                      <path d="M4 8.1 6.7 10.8 12 5.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p
                    className="text-[14px] leading-[1.3] text-[#4F5B57]"
                    style={{ fontFamily: '"SF Pro", sans-serif' }}
                  >
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setIsDemoOpen(true)}
              className="mt-9 inline-flex h-10 min-w-[168px] items-center justify-center rounded-[4px] bg-[#D4E5C0] px-6 text-[13px] font-medium text-[#06231C] transition-all duration-300 hover:translate-y-[-1px] hover:bg-[#dbe9ca]"
            >
              Schedule a Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            viewport={{ once: true }}
            className="relative flex h-full min-h-[370px] items-end overflow-hidden"
          >
            <div className="relative ml-auto h-[330px] w-[94%] overflow-hidden rounded-tl-[42px] border-l-[10px] border-t-[10px] border-[#F4FAEA]">
              <img
                src={shopifyCtaImage}
                alt="Integrations dashboard preview"
                className="h-full w-full object-cover object-left-top"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </main>
  );
}

