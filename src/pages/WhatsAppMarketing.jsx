import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion"
import { MagneticButton, SectionTitle, RevealImage, StaggerText } from "../components/AnimatedElements"
import DemoModal from "../components/DemoModal";
import GrowthCtaSection from "../components/GrowthCtaSection";
import vtoCtaImage from "../assets/images/WhatsAppMarketing/vtoCta.png";

// Icons
import EnterpriseVector from "../assets/images/WhatsAppMarketing/vector.svg";
import EnterpriseVectorHover from "../assets/images/WhatsAppMarketing/vectorHover.svg";

import shopifyl from "../assets/images/WhatsAppMarketing/shopify.png";
import magentol from "../assets/images/WhatsAppMarketing/magento.png";
import woocoml from "../assets/images/WhatsAppMarketing/woocom.png";
import ShopifyCard from "../assets/images/WhatsAppMarketing/ShopifyCard.svg";
import vtoSectionBg from "../assets/images/WhatsAppMarketing/sec 2.svg";
import vtoImg from "../assets/images/WhatsAppMarketing/vtoImg.png";
import whatsappTopSectionBg from "../assets/images/WhatsAppMarketing/topsectionbg.png";
import whatsappMobileBg from "../assets/images/WhatsAppMarketing/mobileBg.png";
import logoWithoutName from "../assets/images/WhatsAppMarketing/logowithoutname.svg";
import whatsappBrandIcon from "../assets/images/WhatsAppMarketing/WHATSAPP logo.svg";
import whatsappSectionLogo from "../assets/images/WhatsAppMarketing/logo.svg";
import whatsappCardBigBg from "../assets/images/WhatsAppMarketing/CardBig.png";
import whatsappCardSmallBg from "../assets/images/WhatsAppMarketing/Cardsmall.png";
import marketingFlowBg from "../assets/images/WhatsAppMarketing/Marketing Flow.png";
import marketingFlowSectionBg from "../assets/images/WhatsAppMarketing/Marketing Flow Bg.png";
import marketingFlowIcon1 from "../assets/images/WhatsAppMarketing/mf1.svg";
import marketingFlowIcon2 from "../assets/images/WhatsAppMarketing/mf2.svg";
import marketingFlowIcon3 from "../assets/images/WhatsAppMarketing/mf3.svg";
import marketingFlowIcon4 from "../assets/images/WhatsAppMarketing/mf4.svg";
import otherMobile from "../assets/images/WhatsAppMarketing/otherMobile.png";
import kactusMobile from "../assets/images/WhatsAppMarketing/kactusMobile.png";


const logos = [
  { type: "image", src: shopifyl, label: "Shopify" },
  { type: "image", src: magentol, label: "Magento" },
  { type: "image", src: woocoml, label: "WooCommerce" },
  { type: "text", label: "Custom APIs" },
];

const enterpriseCards = [
  {
    title: "Fast Implementation",
    description: "Fast setup with less effort and smoother rollout.",
    icon: EnterpriseVector,
    hoverIcon: EnterpriseVectorHover,
    position: "md:left-[14%] md:top-[1%]"
  },
  {
    title: "Fast Implementation",
    description: "Fast setup with less effort and smoother rollout.",
    icon: EnterpriseVector,
    hoverIcon: EnterpriseVectorHover,
    position: "md:right-[14%] md:top-[1%]"
  },
  {
    title: "Fast Implementation",
    description: "Fast setup with less effort and smoother rollout.",
    icon: EnterpriseVector,
    hoverIcon: EnterpriseVectorHover,
    position: "md:left-[31%] md:top-[58%]"
  },
  {
    title: "Fast Implementation",
    description: "Fast setup with less effort and smoother rollout.",
    icon: EnterpriseVector,
    hoverIcon: EnterpriseVectorHover,
    position: "md:right-[31%] md:top-[58%]"
  }
];

const orbitDots = [
  { size: 536, color: "bg-[#A7F3AE]", duration: 18, delay: 0, dotSize: "w-3 h-3" },
  { size: 470, color: "bg-[#D6A7FF]", duration: 15, delay: 0.8, dotSize: "w-3 h-3" },
  { size: 392, color: "bg-[#F7E58C]", duration: 13, delay: 1.2, dotSize: "w-3 h-3" },
  { size: 312, color: "bg-[#F5A3A7]", duration: 11, delay: 0.4, dotSize: "w-3 h-3" },
  { size: 232, color: "bg-[#9BCBFF]", duration: 9, delay: 1.6, dotSize: "w-3 h-3" }
];

const aiTestimonials = [
  {
    name: "Ariana Cole",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    text: "\"Our Website From BINTO Has Been A Lead-Generating Machine!\"",
    position: "md:absolute md:left-[10%] md:top-[10%]"
  },
  {
    name: "Maya Brook",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "\"The ROI On Our Website Design By BINTO Has Been Outstanding\"",
    position: "md:absolute md:right-[9%] md:top-[10%]"
  },
  {
    name: "Elena Park",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
    text: "\"Our Investment In A Website By BINTO Has Paid Off Tenfold In Lead\"",
    position: "md:absolute md:left-[0%] md:top-[39%]"
  },
  {
    name: "Jordan Vale",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    text: "\"Impressed By The Immediate Increase In Leads After Launching\"",
    position: "md:absolute md:right-[0%] md:top-[39%]"
  },
  {
    name: "Daniel Ross",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    text: "\"Thanks To BINTO, Our Site's Design Has Skyrocketed\"",
    position: "md:absolute md:left-[10%] md:bottom-[12%]"
  },
  {
    name: "Aaron Hill",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    text: "\"Thanks To BINTO, Our Site's Design Has Skyrocketed\"",
    position: "md:absolute md:right-[9%] md:bottom-[12%]"
  }
];

const testimonialAccentStyles = [
  {
    glow: "from-[#b8f2c2]/45 via-transparent to-transparent",
    border: "from-[#dff8e5] via-white/90 to-[#f7fbf8]",
    shadow: "shadow-[0_18px_50px_rgba(148,225,160,0.20)]"
  },
  {
    glow: "from-[#f6c5ff]/35 via-transparent to-transparent",
    border: "from-[#f6e4ff] via-white/90 to-[#fbf8ff]",
    shadow: "shadow-[0_18px_50px_rgba(210,164,255,0.18)]"
  },
  {
    glow: "from-[#b8ecff]/40 via-transparent to-transparent",
    border: "from-[#dbf6ff] via-white/90 to-[#f8fdff]",
    shadow: "shadow-[0_18px_50px_rgba(122,214,255,0.18)]"
  },
  {
    glow: "from-[#c7f6f0]/35 via-transparent to-transparent",
    border: "from-[#dcfbf5] via-white/90 to-[#f8fffe]",
    shadow: "shadow-[0_18px_50px_rgba(120,222,206,0.18)]"
  },
  {
    glow: "from-[#ffd8d2]/35 via-transparent to-transparent",
    border: "from-[#ffe8e4] via-white/90 to-[#fff9f8]",
    shadow: "shadow-[0_18px_50px_rgba(255,186,176,0.18)]"
  },
  {
    glow: "from-[#e4f8ba]/35 via-transparent to-transparent",
    border: "from-[#f1fbdf] via-white/90 to-[#fbfff6]",
    shadow: "shadow-[0_18px_50px_rgba(213,237,141,0.18)]"
  }
];

const featureCards = [
  {
    title: "VIRTUAL TRY-ON",
    subtitle: "Larger Amounts, Longer Tenures",
    description: "Unlock up to 4X your monthly revenue without any collateral or restrictions"
  },
  {
    title: "AI WHATSAPP",
    subtitle: "Personalized, Always On",
    description: "Turn customer behavior into autonomous campaigns that reach shoppers at the right time"
  },
  {
    title: "AI PHOTOSHOOT",
    subtitle: "Studio Quality, Faster",
    description: "Create premium product visuals with AI workflows that cut production effort and cost"
  },
  {
    title: "SIZE INTELLIGENCE",
    subtitle: "Fewer Returns, Better Fit",
    description: "Guide shoppers to the right size using fit-aware recommendations tailored to your catalog"
  },
  {
    title: "STYLE DISCOVERY",
    subtitle: "Contextual Recommendations",
    description: "Help customers discover what suits them best with smarter styling and product matching"
  },
  {
    title: "COMMERCE AUTOMATION",
    subtitle: "From Chat to Checkout",
    description: "Let Kactus AI handle next actions from engagement through conversion in a single flow"
  }
];

const reviewCards = [
  {
    name: "Samantha Payne",
    handle: "@Sam.Payne90",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    badge: "Verified Purchase",
    text: "Kactus AI made product discovery smoother and helped customers shop with more confidence from the start.",
    date: "23 Nov 2021"
  },
  {
    name: "Noah Carter",
    handle: "@NoahCarter",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    badge: "Fashion Retail",
    text: "The experience feels polished, fast, and reliable. Our shoppers understand products better before they buy.",
    date: "08 Dec 2021"
  },
  {
    name: "Anaya Brooks",
    handle: "@AnayaBrooks",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    badge: "Verified Purchase",
    text: "Returns dropped because shoppers could see what fits them best. It added clarity without slowing the journey.",
    date: "14 Jan 2022"
  },
  {
    name: "Liam Rhodes",
    handle: "@LiamRhodes",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    badge: "Brand Partner",
    text: "This gave our storefront a more premium feel and helped us guide people from browsing to confident checkout.",
    date: "02 Feb 2022"
  }
];

const faqItems = [
  {
    question: "Is there a free trial available?",
    answer: "Yes, you can try us for free for 30 days. If you want, we will provide a free, personalized onboarding call to get you up and running as soon as possible."
  },
  {
    question: "What is your cancellation policy?",
    answer: "You can cancel anytime. Your access remains active through the current billing period with no hidden penalties."
  },
  {
    question: "How long does implementation take?",
    answer: "Most brands can get started quickly. The timeline depends on your catalog, storefront setup, and the workflows you want to launch."
  },
  {
    question: "Do you support custom integrations?",
    answer: "Yes. We support platform connections, custom APIs, and tailored workflows for growing fashion and commerce brands."
  },
  {
    question: "Can my team get onboarding support?",
    answer: "Absolutely. We help your team with onboarding, setup guidance, and best practices so adoption feels smooth from day one."
  }
];

const shopifyFeatureCards = [
  {
    title: "One-click install, zero complexity",
    description: "Install the app from the Shopify App Store and activate it in minutes."
  },
  {
    title: "Virtual try-on that converts",
    description: "Let customers see products on themselves before buying, directly on your product pages."
  },
  {
    title: "Seamless store integration",
    description: "Works inside your Shopify theme with App Embed and optional product page blocks for full control."
  }
];

const whatsappAdvantageOtherBrandMessages = [
  "Generic product photo",
  "\"Hi Priya, new arrivals\"",
  "Customer imagines fit"
];

const whatsappAdvantageKactusMessages = [
  "Customer's own image with\nnew shirt",
  "\"Here's how this looks on you\"",
  "Customer sees fit"
];

const whatsappMarketingFlowSteps = [
  {
    number: "1",
    title: "New Stock Lands",
    description: "Brand uploads a new shirt to inventory via Dashboard.",
    icon: marketingFlowIcon1
  },
  {
    number: "2",
    title: "AI Re-Apples",
    description: "KactusLab generates new try-on on customer's stored image",
    icon: marketingFlowIcon2
  },
  {
    number: "3",
    title: "Whatsapp Drop",
    description: "Personalized message: \"Here's how the new shirt looks on you\"",
    icon: marketingFlowIcon3
  },
  {
    number: "4",
    title: "Purchase",
    description: "Loop restarts - and the asset gets richer each cycle",
    icon: marketingFlowIcon4
  }
];

const shopifyHowItWorksSteps = [
  {
    title: "Fast Implementation",
    description: "Fast Implementation this is best i am best lorme ipsum lorme imsume"
  },
  {
    title: "Fast Implementation",
    description: "Fast Implementation this is best i am best lorme ipsum lorme imsume"
  },
  {
    title: "Fast Implementation",
    description: "Fast Implementation this is best i am best lorme ipsum lorme imsume"
  },
  {
    title: "Fast Implementation",
    description: "Fast Implementation this is best i am best lorme ipsum lorme imsume"
  }
];

const shopifyHeroTestimonial = {
  quote:
    "I've been cautious with product tech in the past, but Kactus AI just gets it. It's easy to integrate, and the visuals focus on what really matters to customers. Everything works seamlessly, reducing confusion and the small issues that often lead to returns.",
  name: "Cameo Ashe",
  role: "Lemonade Beach E-Commerce",
  image: "https://randomuser.me/api/portraits/women/28.jpg"
};

function FeatureShowcaseCard({ card, index, activeCard, setActiveCard }) {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, active: false })
  const [selfTilt, setSelfTilt] = useState({ x: 0, y: 0 })
  const column = index % 3
  const row = Math.floor(index / 3)
  const activeColumn = activeCard === null ? column : activeCard % 3
  const activeRow = activeCard === null ? row : Math.floor(activeCard / 3)
  const deltaX = activeColumn - column
  const deltaY = activeRow - row
  const towardTiltY = activeCard === null ? 0 : Math.max(-14, Math.min(14, deltaX * 6))
  const towardTiltX = activeCard === null ? 0 : Math.max(-10, Math.min(10, -deltaY * 5))

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    const rotateY = ((x - 50) / 50) * 10
    const rotateX = ((50 - y) / 50) * 8
    setSpotlight({ x, y, active: true })
    setSelfTilt({ x: rotateX, y: rotateY })
    setActiveCard(index)
  }

  const handleMouseLeave = () => {
    setSpotlight((prev) => ({ ...prev, active: false }))
    setSelfTilt({ x: 0, y: 0 })
    setActiveCard(null)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      animate={{
        rotateX: activeCard === index ? selfTilt.x : towardTiltX,
        rotateY: activeCard === index ? selfTilt.y : towardTiltY,
        y: activeCard === index ? -10 : activeCard !== null ? -2 : 0,
        scale: activeCard === index ? 1.025 : activeCard !== null ? 0.985 : 1,
        x: activeCard !== null && activeCard !== index ? deltaX * 3 : 0
      }}
      transition={{
        rotateX: { type: "spring", stiffness: 180, damping: 20 },
        rotateY: { type: "spring", stiffness: 180, damping: 20 },
        y: { type: "spring", stiffness: 180, damping: 20 },
        scale: { type: "spring", stiffness: 180, damping: 20 },
        x: { type: "spring", stiffness: 180, damping: 22 },
        opacity: { duration: 0.55, delay: index * 0.06 }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", transformPerspective: 1200 }}
      className="group relative w-full max-w-[372.545px] h-[507.939px] mx-auto rounded-[14px] overflow-hidden border border-[#d8e6d5] bg-[radial-gradient(circle_at_top_left,rgba(59,113,91,0.38),transparent_46%),linear-gradient(135deg,#0a2f25_0%,#113a2e_55%,#153d31_100%)] shadow-[0_12px_40px_rgba(10,47,37,0.08)]"
    >
      <motion.div
        className="absolute inset-0 opacity-0 pointer-events-none"
        animate={{ opacity: spotlight.active ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(123, 255, 219, 0.22) 0%, rgba(123, 255, 219, 0.1) 18%, rgba(123, 255, 219, 0.04) 34%, transparent 56%)`
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-0 pointer-events-none"
        animate={{ opacity: spotlight.active ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(255,255,255,0.18) 0%, transparent 24%)`
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.01)_26%,rgba(255,255,255,0)_100%)]" />
      <div className="absolute inset-0 opacity-80">
        <div className="absolute inset-x-0 top-[60%] h-px bg-white/8" />
        <div className="absolute left-0 right-0 bottom-[28%] h-px bg-white/6" />
        <div className="absolute inset-x-0 bottom-0 h-[46%] bg-[radial-gradient(circle_at_bottom,rgba(67,221,189,0.08),transparent_58%)]" />
        <svg viewBox="0 0 360 520" className="absolute inset-0 h-full w-full">
          <path d="M0 420 C 35 360, 65 390, 90 330 S 145 355, 165 285 S 215 300, 235 215 S 280 250, 300 165 S 330 145, 360 120" stroke="rgba(113,129,255,0.82)" strokeWidth="2" fill="none" />
          <path d="M0 455 C 25 390, 55 395, 82 360 S 128 352, 152 318 S 194 384, 214 298 S 238 392, 255 270 S 286 392, 305 248 S 334 258, 360 210" stroke="rgba(255,255,255,0.12)" strokeWidth="2" strokeDasharray="5 6" fill="none" />
          <path d="M0 468 C 28 445, 60 430, 92 388 S 145 404, 170 324 S 215 302, 235 375 S 275 282, 300 324 S 334 232, 360 210" stroke="rgba(106,143,255,0.18)" strokeWidth="1.5" fill="none" />
        </svg>
      </div>
      <div className="absolute inset-0 rounded-[14px] border border-white/6 pointer-events-none group-hover:border-[#8ef0d0]/30 transition-colors duration-300" />

      <div className="relative z-10 flex h-full flex-col items-center px-6 pt-8 pb-8 text-center">
        <h3 className="text-white text-[17px] md:text-[18px] font-semibold tracking-wide">
          {card.title}
        </h3>
        <p className="mt-3 text-white/75 text-xs md:text-[13px]">
          {card.subtitle}
        </p>
        <p
          className="mt-10 text-[17px] md:text-[18px] leading-snug max-w-[250px] transition-colors duration-300"
          style={{
            background: "linear-gradient(90deg, #47559C 25.19%, #6376DD 43.88%, #FFC3A9 93.56%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          {card.description}
        </p>

        <div className="mt-auto">
          <button className="px-10 py-4 text-white/95 text-sm bg-white/6 border border-white/10 rounded-[2px] backdrop-blur-[2px] group-hover:bg-white/10 group-hover:border-white/20 transition-colors">
            Know more
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function WhatsAppMarketing() {
  const { scrollY } = useScroll();
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [activeFeatureCard, setActiveFeatureCard] = useState(null);
  const [activeReviewCard, setActiveReviewCard] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [activeWhatsappAdvantageStage, setActiveWhatsappAdvantageStage] = useState(0);
  const [isMarketingFlowActive, setIsMarketingFlowActive] = useState(false);
  const whatsappAdvantageRef = useRef(null);
  const marketingFlowRef = useRef(null);
  const isWhatsappAdvantageInView = useInView(whatsappAdvantageRef, { amount: 0.45 });
  const isMarketingFlowInView = useInView(marketingFlowRef, { amount: 0.7 });

  const heroRevealY = useTransform(scrollY, [0, 500], [0, 110]);

  useEffect(() => {
    if (!isMarketingFlowInView) {
      setIsMarketingFlowActive(false);
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setIsMarketingFlowActive(true);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [isMarketingFlowInView]);

  useEffect(() => {
    if (!isWhatsappAdvantageInView) {
      setActiveWhatsappAdvantageStage(0);
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActiveWhatsappAdvantageStage((current) => (current === 0 ? 1 : 0));
    }, 2000);

    return () => window.clearInterval(interval);
  }, [isWhatsappAdvantageInView]);

  const isKactusCardActive = activeWhatsappAdvantageStage === 0;
  const isOtherBrandsCardActive = !isKactusCardActive;

  return (
    <main className="demo-page bg-[#F5F6F2] text-slate-800">

      <section className="relative overflow-hidden bg-[#06231C]">
        <motion.img
          src={whatsappTopSectionBg}
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
          className="absolute inset-0 h-full w-full object-cover object-left-top md:hidden"
        />

        <div className="relative z-10 flex min-h-[663px] items-start px-[11px] pb-8 pt-[146px] sm:px-8 md:min-h-[720px] md:items-center md:px-14 md:pb-10 md:pt-32 lg:px-20 xl:px-24">
          <div className="mx-auto grid w-full max-w-[1320px] items-center gap-[86px] md:gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(420px,580px)] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto w-full max-w-[340px] text-center md:mx-0 md:max-w-[640px] md:text-left"
            >
              <h1
                className="self-stretch whitespace-pre-line text-center text-white md:hidden"
                style={{
                  color: "#FFF",
                  textAlign: "center",
                  fontFamily: "SF Pro",
                  fontSize: "32px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "34.3px"
                }}
              >
                {"Boost Conversions with\nAI-Driven WhatsApp\nMarketing"}
              </h1>

              <h1
                className="hidden self-stretch whitespace-pre-line text-white md:block md:text-[54px] md:leading-[56px]"
                style={{
                  color: "#FFF",
                  fontStyle: "normal",
                  fontWeight: 400
                }}
              >
                {"Boost Conversions with\nAI WhatsApp Marketing"}
              </h1>

              <p
                className="mt-2 self-stretch text-center text-white md:hidden"
                style={{
                  color: "#FFF",
                  textAlign: "center",
                  fontFamily: "SF Pro",
                  fontSize: "13.15px",
                  fontStyle: "normal",
                  fontWeight: 250,
                  lineHeight: "16.736px"
                }}
              >
                A fresh approach to WhatsApp Marketing.
              </p>

              <p
                className="mx-auto mt-3 w-full max-w-[330px] self-stretch text-center md:hidden"
                style={{
                  color: "#FFF",
                  textAlign: "center",
                  fontFamily: "SF Pro",
                  fontSize: "13.15px",
                  fontStyle: "normal",
                  fontWeight: 250,
                  lineHeight: "16.736px"
                }}
              >
                KactusAI WhatsApp Marketing isn't just messaging, it is an AI-powered personalization built around user interactions. It uses customers past virtual try-on images to display new arrivals and trending styles on their own photos, turning generic campaigns into engaging and impactful experiences that boost conversions.
              </p>

              <p
                className="hidden max-w-[620px] self-stretch text-white md:mt-6 md:block md:text-left md:text-[22px] md:leading-[28px]"
                style={{
                  color: "#FFF",
                  fontStyle: "normal",
                  fontWeight: 274
                }}
              >
                A fresh approach to WhatsApp Marketing.
              </p>

              <p className="hidden self-stretch text-white md:mx-0 md:mt-7 md:block md:max-w-[620px] md:text-left md:text-[15px] md:leading-[24px]">
                KactusAI WhatsApp Marketing isn't just messaging, it is an AI-powered personalization built around user interactions. It uses customers past virtual try-on images to display new arrivals and trending styles on their own photos, turning generic campaigns into engaging and impactful experiences that boost conversions.
              </p>

              <Link
                to="/contact"
                className="mx-auto mt-6 flex h-[27px] w-[100px] items-center justify-center rounded-[4px] bg-[#D4E5C0] px-0 py-0 text-[8px] font-medium uppercase text-[#06231C] transition-all duration-300 hover:translate-y-[-1px] hover:bg-[#dbe9ca] md:mx-0 md:mt-8 md:h-[48px] md:w-[181.53px] md:px-[40px] md:py-[12px] md:text-[15px] md:normal-case"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "4px",
                  background: "#D4E5C0"
                }}
              >
                Book a Demo
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[286px] md:max-w-[620px]">
                <div className="absolute inset-0 hidden translate-x-4 translate-y-4 rounded-[12px] bg-black/10 blur-[20px] md:block" />
                <img
                  src={vtoImg}
                  alt="Customer trying on clothing in front of a mirror"
                  className="relative aspect-[1.64/1] w-full rounded-[4px] object-cover shadow-[0_18px_52px_rgba(6,35,28,0.22)] md:aspect-[1.28/1] md:rounded-[10px] md:shadow-[0_24px_80px_rgba(6,35,28,0.28)]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y-[3px] border-[#06231C] bg-white lg:border-y-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_30%,rgba(223,205,255,0.34),transparent_24%),radial-gradient(circle_at_74%_78%,rgba(204,244,192,0.42),transparent_18%),linear-gradient(180deg,#ffffff_0%,#fdfefd_100%)]" />

        <div
          ref={whatsappAdvantageRef}
          className="relative mx-auto w-full max-w-[1440px] px-5 pb-5 pt-6 sm:px-8 sm:pb-8 sm:pt-8 md:px-14 md:pb-10 md:pt-8 lg:px-20 lg:pt-8 lg:pb-10 xl:h-[773px] xl:px-24 xl:pt-8 xl:pb-0"
        >
          <div className="grid h-full items-start gap-9 lg:grid-cols-[minmax(0,60%)_minmax(0,40%)] lg:items-end lg:gap-4">
            <div className="flex max-w-[700px] flex-col lg:h-full lg:max-w-none">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.4 }}
                className="hidden w-full whitespace-pre-line pb-2 text-left lg:block"
                style={{
                  width: "671px",
                  maxWidth: "100%",
                  fontFamily: "SF Pro",
                  fontSize: "46px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "52px",
                  background: "var(--they, linear-gradient(90deg, #06231C 48.13%, #D4E5C0 120.12%))",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                {"Why This Beats Standard\nWhatsApp Marketing"}
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.4 }}
                className="mx-auto w-full max-w-[330px] pb-1 text-center text-[24px] font-normal leading-[27px] lg:hidden"
                style={{
                  background: "var(--they, linear-gradient(90deg, #06231C 48.13%, #D4E5C0 120.12%))",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                Why This Beats Standard WhatsApp Marketing
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                viewport={{ once: true, amount: 0.4 }}
                className="hidden mt-3 w-full max-w-[671px] text-left lg:block"
                style={{
                  color: "rgba(0, 0, 0, 0.70)",
                  textAlign: "left",
                  fontFamily: "SF Pro",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "32.5px"
                }}
              >
                Built for scale. Designed for reliability.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                viewport={{ once: true, amount: 0.4 }}
                className="mx-auto mt-1 text-center text-[12px] font-normal leading-[18px] text-black/60 lg:hidden"
              >
                Built for scale. Designed for reliability.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, amount: 0.35 }}
                className="relative mx-auto mt-5 flex justify-center lg:hidden"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img
                    key={isKactusCardActive ? "kactus-mobile-inline" : "other-mobile-inline"}
                    src={isKactusCardActive ? kactusMobile : otherMobile}
                    alt={isKactusCardActive ? "Kactus AI WhatsApp example" : "Standard WhatsApp example"}
                    initial={{ opacity: 0, x: isKactusCardActive ? 24 : -24, scale: 0.985, filter: "blur(8px)" }}
                    animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: isKactusCardActive ? -20 : 20, scale: 0.985, filter: "blur(8px)" }}
                    transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
                    className="h-[232px] w-auto object-contain drop-shadow-[0_12px_22px_rgba(0,0,0,0.22)] sm:h-[270px] md:h-[320px]"
                  />
                </AnimatePresence>
              </motion.div>

              <div className="relative mx-auto mt-7 h-[188px] w-full max-w-[318px] sm:h-[224px] sm:max-w-[380px] md:h-[276px] md:max-w-[470px] lg:mx-0 lg:mt-auto lg:h-[476px] lg:max-w-none">
                <div className="absolute bottom-0 left-0 w-[168px] sm:w-[202px] md:w-[250px] lg:w-full lg:max-w-[379px] lg:left-[4%]">
                  <p
                    className="pb-1 text-center lg:hidden"
                    style={{
                      color: "#06231C",
                      fontFamily: "SF Pro",
                      fontSize: "clamp(11px, 3.4vw, 26px)",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "1.25"
                    }}
                  >
                    Other Brands
                  </p>
                  <p
                    className="hidden pb-1 text-center lg:block"
                    style={{
                      color: "#06231C",
                      fontFamily: "SF Pro",
                      fontSize: "26px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "52px"
                    }}
                  >
                    Other Brands
                  </p>
                  <motion.div
                    initial={{ opacity: 0, x: -28, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    animate={{
                      y: 0,
                      x: isOtherBrandsCardActive ? 0 : -10,
                      scale: isOtherBrandsCardActive ? 1 : 0.965,
                      opacity: isOtherBrandsCardActive ? 1 : 0.72,
                      filter: isOtherBrandsCardActive ? "blur(0px)" : "blur(4px)"
                    }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformOrigin: "bottom center" }}
                    className="relative h-[141px] w-full overflow-hidden rounded-t-[10px] rounded-b-none shadow-[0_12px_32px_rgba(12,45,37,0.08)] sm:h-[170px] md:h-[211px] lg:h-[357px] lg:rounded-t-[22px] lg:shadow-[0_20px_60px_rgba(12,45,37,0.08)]"
                  >
                    <img
                      src={whatsappCardSmallBg}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full object-fill"
                    />
                    {whatsappAdvantageOtherBrandMessages.map((message, index) => (
                      <div
                        key={message}
                        className="absolute flex items-center justify-center px-5 text-center"
                        style={{
                          color: "#000",
                          fontFamily: "SF Pro",
                          fontSize: "clamp(8px, 2.6vw, 20px)",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "normal",
                          left: "5.8%",
                          width: "71.8%",
                          height: "22.5%",
                          top: `${18.3 + index * 22.5}%`
                        }}
                      >
                        {message}
                      </div>
                    ))}
                  </motion.div>
                </div>

                <div className="absolute bottom-0 left-[43%] z-10 w-[168px] sm:w-[202px] md:w-[250px] lg:left-[43%] lg:w-full lg:max-w-[379px]">
                  <div className="mb-2 flex items-center justify-center gap-1.5 text-[#111111] lg:mb-3 lg:gap-3">
                    <img src={whatsappSectionLogo} alt="Kactus AI" className="h-[17px] w-[17px] object-contain sm:h-[20px] sm:w-[20px] md:h-[25px] md:w-[25px] lg:h-[38px] lg:w-[38px]" />
                    <span
                      style={{
                        color: "#000",
                        textAlign: "center",
                        fontFamily: "SF Pro",
                        fontSize: "clamp(12px, 3.8vw, 31.92px)",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal"
                      }}
                    >
                      Kactus AI
                    </span>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: 26, y: 18 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    animate={{
                      x: isKactusCardActive ? 0 : 8,
                      y: 0,
                      scale: isKactusCardActive ? 1 : 0.97,
                      opacity: isKactusCardActive ? 1 : 0.74,
                      filter: isKactusCardActive ? "blur(0px)" : "blur(4px)"
                    }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformOrigin: "bottom center" }}
                    className="relative h-[168px] w-full overflow-hidden rounded-t-[10px] rounded-b-none shadow-[0_18px_42px_rgba(10,47,37,0.24)] sm:h-[202px] md:h-[250px] lg:h-[417px] lg:rounded-t-[26px] lg:shadow-[0_30px_90px_rgba(10,47,37,0.24)]"
                  >
                    <img
                      src={whatsappCardBigBg}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full object-fill"
                    />
                    {whatsappAdvantageKactusMessages.map((message, index) => (
                      <motion.div
                        key={`${message}-${index}`}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.55, delay: index * 0.03 }}
                        className="absolute left-1/2 flex -translate-x-1/2 items-center justify-center px-5 text-center"
                        style={{
                          color: "#000",
                          fontFamily: "SF Pro",
                          fontSize: "clamp(7px, 2.25vw, 18.072px)",
                          fontStyle: "normal",
                          fontWeight: 510,
                          lineHeight: "normal",
                          width: "min(275px, 88.7%)",
                          height: "26.5%",
                          top: `${6 + index * 30.8}%`
                        }}
                      >
                        <span className="whitespace-pre-line">{message}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 26 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.35 }}
              className="relative hidden justify-center lg:flex lg:h-full lg:items-end lg:justify-end"
            >
              <div className="absolute left-[8%] top-[18%] h-[220px] w-[220px] rounded-full bg-[#ddccf6]/42 blur-[108px]" />
              <div className="absolute right-[0%] top-[62%] h-[220px] w-[220px] rounded-full bg-[#d2efb8]/52 blur-[108px]" />

              <div className="relative w-full max-w-[412px] lg:translate-x-1">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img
                    key={isKactusCardActive ? "kactus-mobile" : "other-mobile"}
                    src={isKactusCardActive ? kactusMobile : otherMobile}
                    alt={isKactusCardActive ? "Kactus AI WhatsApp example" : "Standard WhatsApp example"}
                    initial={{
                      opacity: 0,
                      x: isKactusCardActive ? 34 : -34,
                      scale: 0.985,
                      filter: "blur(10px)"
                    }}
                    animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                    exit={{
                      opacity: 0,
                      x: isKactusCardActive ? -26 : 26,
                      scale: 0.985,
                      filter: "blur(10px)"
                    }}
                    transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                    className="relative ml-auto block w-full max-w-[412px] object-contain drop-shadow-[0_28px_72px_rgba(0,0,0,0.14)]"
                    style={{ width: "412px", maxWidth: "100%", height: "692px" }}
                  />
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-[#0A3128] px-5 py-8 text-white sm:px-8 md:px-14 md:py-10 lg:px-20 xl:px-24"
        style={{
          backgroundImage: `linear-gradient(180deg,rgba(10,49,40,0.78)_0%,rgba(5,38,30,0.92)_100%), url(${vtoSectionBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${marketingFlowSectionBg})` }}
        />

        <div className="relative mx-auto max-w-[1320px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto flex max-w-[584px] flex-col items-center"
          >
            <h2
              className="text-center text-white md:hidden"
              style={{
                width: "584px",
                maxWidth: "100%",
                color: "#FFF",
                textAlign: "center",
                fontFamily: "SF Pro",
                fontSize: "32px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "34.3px"
              }}
            >
              KactusLabs Brings Smarter Tools for
              <br />
              <span className="whitespace-nowrap">Better Buying Decisions</span>
            </h2>
            <h2
              className="hidden text-center text-white md:block"
              style={{
                width: "584px",
                maxWidth: "100%",
                color: "#FFF",
                textAlign: "center",
                fontFamily: "SF Pro",
                fontSize: "46px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal"
              }}
            >
              KactusLabs Brings Smarter Tools for Better Buying Decisions
            </h2>
          </motion.div>

          <motion.div
            ref={marketingFlowRef}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true, amount: 0.25 }}
            className={`relative mx-auto mt-8 max-w-[1120px] overflow-hidden rounded-[18px] bg-white shadow-[0_26px_80px_rgba(0,0,0,0.18)] transition-[min-height,box-shadow] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] focus:outline-none focus:ring-2 focus:ring-[#d5e6c1]/60 md:mt-12 md:rounded-[24px] ${isMarketingFlowActive ? "min-h-[520px] sm:min-h-[640px] md:min-h-[560px] shadow-[0_34px_100px_rgba(0,0,0,0.22)]" : "min-h-[236px] sm:min-h-[420px] md:min-h-[500px]"}`}
          >
            <img
              src={marketingFlowBg}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-contain object-center"
            />
            <div className="absolute inset-0 px-3 py-5 sm:px-8 sm:py-8 md:px-10 md:py-10">
              <div className="pointer-events-none absolute inset-0 z-20">
                <div className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 items-center justify-center md:inset-x-8">
                  <div className="flex items-center justify-center gap-4 md:gap-8">
                    <div
                      className={`flex items-center gap-2 px-1 py-2 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] md:gap-3 md:px-2 ${isMarketingFlowActive ? "-translate-x-[92px] scale-[0.72] opacity-0 sm:-translate-x-[180px] md:-translate-x-[320px] lg:-translate-x-[420px]" : "opacity-100"}`}
                    >
                      <img
                        src={logoWithoutName}
                        alt="Kactus AI"
                        className={`object-contain transition-all duration-1000 ${isMarketingFlowActive ? "h-9 w-9 md:h-11 md:w-11" : "h-11 w-11 md:h-16 md:w-16"}`}
                      />
                      <span
                        className={`font-normal leading-none text-[#0C2D25] transition-all duration-1000 ${isMarketingFlowActive ? "text-[16px] md:text-[22px]" : "text-[25px] md:text-[40px]"}`}
                      >
                        Kactus AI
                      </span>
                    </div>

                    <div
                      className={`hidden w-px bg-[#a0aca2] transition-all duration-1000 md:block ${isMarketingFlowActive ? "h-0 opacity-0" : "h-[110px] opacity-100"}`}
                    />

                    <div
                      className={`flex items-center gap-2 px-1 py-2 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] md:gap-3 md:px-2 ${isMarketingFlowActive ? "translate-x-[92px] scale-[0.72] opacity-0 sm:translate-x-[180px] md:translate-x-[320px] lg:translate-x-[420px]" : "opacity-100"}`}
                    >
                      <img
                        src={whatsappBrandIcon}
                        alt="WhatsApp"
                        className={`object-contain transition-all duration-1000 ${isMarketingFlowActive ? "h-9 w-9 md:h-11 md:w-11" : "h-11 w-11 md:h-16 md:w-16"}`}
                      />
                      <span
                        className={`font-normal leading-none text-[#111827] transition-all duration-1000 ${isMarketingFlowActive ? "text-[16px] md:text-[22px]" : "text-[25px] md:text-[40px]"}`}
                      >
                        WhatsApp
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`absolute inset-x-4 inset-y-6 z-10 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] md:inset-x-12 md:inset-y-10 ${isMarketingFlowActive ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-8 scale-[0.96] opacity-0"}`}
              >
                <div className="mx-auto grid h-full max-w-[900px] content-center gap-3 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6">
                  {whatsappMarketingFlowSteps.map((step) => (
                    <article key={step.number} className="relative mx-auto min-h-[92px] w-full max-w-[380px] px-1 py-1 md:min-h-[170px] md:px-3 md:py-2">
                      <span className="absolute left-1 top-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#5E6860] text-[11px] font-semibold text-white md:left-3 md:h-7 md:w-7 md:text-[12px]">
                        {step.number}
                      </span>

                      <div className="mt-6 flex items-start gap-2 md:mt-8 md:gap-3">
                        <img
                          src={step.icon}
                          alt=""
                          aria-hidden="true"
                          className="h-[40px] w-[40px] shrink-0 object-contain md:h-[78px] md:w-[78px]"
                        />

                        <div className="space-y-1 md:space-y-2">
                          <h3 className="text-[15px] font-normal leading-[1.15] text-[#0C2D25] md:text-[22px]">
                            {step.title}
                          </h3>
                          <p className="max-w-[230px] text-[10px] leading-[1.32] text-[#45524D] md:max-w-[260px] md:text-[14px] md:leading-[1.45]">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-6 pt-10 pb-0 md:pt-10 lg:hidden">
        <div className="mx-auto max-w-[430px]">
          <div className="text-center">
            <h2 className="text-[31px] font-normal leading-[1.13] text-[#06231C]">
              AI Visual Engine <span className="text-[#64786E]">For</span>
              <br />
              Fashion Brands
            </h2>
            <p className="mt-2 text-[25px] font-normal leading-[1.2] text-[#00624E]">
              Scale Your Growth Today.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-[48%_52%] items-start gap-4">
            <div className="flex min-h-[322px] flex-col justify-center pr-1">
              <div className="space-y-4">
                {["Grow consistently", "Manage effortlessly", "Optimize intelligently"].map((point) => (
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
                <Link
                  to="/contact"
                  className="flex h-[50px] w-full items-center justify-center rounded-[3px] bg-[#D4E5C0] text-[17px] font-normal text-[#06231C]"
                >
                  Schedule a Demo
                </Link>
                <Link
                  to="/outcomes"
                  className="flex h-[48px] w-full items-center justify-center rounded-[3px] border border-[#16362D] bg-white text-[17px] font-normal text-[#16362D]"
                >
                  Outcome
                </Link>
              </div>
            </div>

            <div className="relative min-h-[322px] pl-1">
              <div className="absolute left-[-32px] top-[-22px] h-48 w-48 rounded-full bg-[#E8F1CF] blur-[88px]" />
              <div className="relative mr-[-132px] overflow-hidden rounded-tl-[20px] border-t border-l border-[#EEF2E5] bg-white pt-2 pl-2 shadow-[0_0_40px_rgba(22,54,45,0.06)]">
                <img
                  src={vtoCtaImage}
                  alt="Whatsapp Marketing Dashboard"
                  className="block h-auto min-w-[338px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[#06231C]" />
      </section>

      <div className="hidden lg:block">
        <GrowthCtaSection
          titleLines={["AI does the work,", "You stay in control"]}
          subtitle="Scale Your Growth Today."
          points={[
            "Grow consistently",
            "150+ Handcoded",
            "Optimize intelligently"
          ]}
        />
      </div>

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </main>
  );
}

