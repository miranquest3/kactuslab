import { useRef, useState } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { MagneticButton, SectionTitle, RevealImage, StaggerText } from "../components/AnimatedElements"
import DemoModal from "../components/DemoModal";

// Icons
import EnterpriseVector from "../assets/images/Home/vector.svg";
import EnterpriseVectorHover from "../assets/images/Home/vectorHover.svg";

import shopifyl from "../assets/images/Home/Icons/shopify.png";
import magentol from "../assets/images/Home/Icons/magento.png";
import woocoml from "../assets/images/Home/Icons/woocom.png";
import EnterpriseReadyBg from "../assets/images/Home/Enterprise Ready.svg";
import ShopifyCard from "../assets/images/Shopify/ShopifyCard.svg";
import HowItWorksBg from "../assets/images/Shopify/HowitWorks.svg.svg";
import vtoSectionBg from "../assets/images/Vto/sec 2.svg";
import rightIcon from "../assets/images/Vto/right.svg";
import wrongIcon from "../assets/images/Vto/wrong.svg";
import vtoImg from "../assets/images/Vto/vtoImg.png";
import ctaImage from "../assets/images/Integration/ctaImage.png";
import ShopifyHeroBg from "../assets/images/Shopify/shopifyhero.png";
import logoWithoutName from "../assets/images/logowithoutname.svg";
import whatsappBrandIcon from "../assets/images/whatsapp/WHATSAPP logo.svg";
import leftPopupBg from "../assets/images/whatsapp/leftpopup.png";
import rightPopupBg from "../assets/images/whatsapp/rightpopup.png";
import whatsappSectionBg from "../assets/images/whatsapp/whatsappSec2.png";


const logos = [
  { type: "image", src: shopifyl, label: "Shopify" },
  { type: "image", src: magentol, label: "Magento" },
  { type: "image", src: woocoml, label: "WooCommerce" },
  { type: "text", label: "Custom APIs" },
];

const integrationCtaPoints = [
  "150+ Handcoded",
  "150+ Handcoded",
  "150+ Handcoded"
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
    description: "Let KactusLabs handle next actions from engagement through conversion in a single flow"
  }
];

const reviewCards = [
  {
    name: "Samantha Payne",
    handle: "@Sam.Payne90",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    badge: "Verified Purchase",
    text: "KactusLabs made product discovery smoother and helped customers shop with more confidence from the start.",
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

const comparisonRows = [
  "Choose your workspace plan according to your organisational plan",
  "AI-Autonomous Campaigns",
  "Interactive Experience",
  "Real User Behavior Data",
  "Behaviour-Driven Personalised Campaigns"
];

const whatsappGapMessages = [
  {
    text: "Lack of personalization",
    position: "left-0 top-[14%] md:left-[3%] md:top-[20%]",
    side: "left"
  },
  {
    text: "Low engagement and conversion",
    position: "right-0 top-[24%] md:right-[3%] md:top-[31%]",
    side: "right"
  },
  {
    text: "No smart suggestions tailored to user behavior",
    position: "left-0 bottom-[15%] md:left-[3%] md:bottom-[19%]",
    side: "left"
  },
  {
    text: "Inconsistent Outreach",
    position: "right-0 bottom-[4%] md:right-[3%] md:bottom-[3%]",
    side: "right"
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
    "I've been cautious with product tech in the past, but KactusLabs just gets it. It's easy to integrate, and the visuals focus on what really matters to customers. Everything works seamlessly, reducing confusion and the small issues that often lead to returns.",
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

      <div className="relative z-10 flex h-full flex-col items-center px-6 pt-16 pb-8 text-center">
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

  const heroRevealY = useTransform(scrollY, [0, 500], [0, 110]);

  return (
    <main className="demo-page bg-[#F5F6F2] text-slate-800">

      <section className="relative overflow-hidden bg-[#06231C]">
        <motion.div
          style={{ y: heroRevealY, backgroundImage: `url(${ShopifyHeroBg})` }}
          className="absolute inset-0 bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,21,16,0.9)_0%,rgba(4,40,31,0.72)_42%,rgba(17,111,96,0.18)_100%)]" />

        <div className="relative z-10 flex min-h-[720px] items-center px-6 pb-20 pt-28 sm:px-8 md:px-14 md:pt-32 lg:px-20 xl:px-24">
          <div className="mx-auto grid w-full max-w-[1320px] items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(420px,580px)] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[640px]"
            >
              <h1
                className="self-stretch whitespace-pre-line text-white"
                style={{
                  color: "#FFF",
                  fontFamily: "SF Pro",
                  fontSize: "54px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "56px"
                }}
              >
                {"Boost Conversions with\nAI-Driven WhatsApp Marketing"}
              </h1>

              <p
                className="mt-6 max-w-[620px] self-stretch text-white"
                style={{
                  color: "#FFF",
                  fontFamily: "SF Pro",
                  fontSize: "22px",
                  fontStyle: "normal",
                  fontWeight: 274,
                  lineHeight: "28px"
                }}
              >
                KactusLabs introduces a fresh approach to WhatsApp marketing.
              </p>

              <p className="mt-7 max-w-[620px] self-stretch text-[15px] leading-[24px] text-white">
                New arrivals are displayed on the customer&apos;s own photo instead of static images. This creates a more immersive and relevant experience that engages users and facilitates quicker purchasing decisions.
              </p>

              <button
                type="button"
                onClick={() => setIsDemoOpen(true)}
                className="mt-8 flex items-center justify-center rounded-[4px] bg-[#D4E5C0] text-[15px] font-medium text-[#06231C] transition-all duration-300 hover:translate-y-[-1px] hover:bg-[#dbe9ca]"
                style={{
                  display: "flex",
                  width: "181.53px",
                  height: "48px",
                  padding: "12px 40.53px 12px 40px",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "4px",
                  background: "#D4E5C0"
                }}
              >
                Book a Demo
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[620px]">
                <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[12px] bg-black/10 blur-[20px]" />
                <img
                  src={vtoImg}
                  alt="Customer trying on clothing in front of a mirror"
                  className="relative aspect-[1.28/1] w-full rounded-[10px] object-cover shadow-[0_24px_80px_rgba(6,35,28,0.28)]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden px-6 pb-20 pt-10 sm:px-8 md:px-14 md:pb-24 md:pt-14 lg:px-20 xl:px-24"
        style={{
          backgroundImage: `url(${whatsappSectionBg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <div className="relative mx-auto max-w-[1320px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto flex max-w-[658px] flex-col items-center"
          >
            <h2
              className="text-center"
              style={{
                width: "658px",
                height: "110px",
                maxWidth: "100%",
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
              Gaps In The Current WhatsApp <br /> Marketing Strategy
            </h2>
          </motion.div>

          <div className="relative mt-4 min-h-[620px] md:mt-6 md:min-h-[740px]">
            {whatsappGapMessages.map((message, index) => (
              <motion.div
                key={message.text}
                initial={{
                  opacity: 0,
                  y: 34,
                  x: message.side === "left" ? -36 : 36,
                  scale: 0.92
                }}
                whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.14, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: false, amount: 0.4 }}
                className={`relative z-20 mt-6 md:mt-0 md:absolute ${message.position}`}
              >
                <div
                  className="relative h-[113px] w-full max-w-[398px] bg-contain bg-center bg-no-repeat px-6 py-6"
                  style={{
                    backgroundImage: `url(${message.side === "left" ? leftPopupBg : rightPopupBg})`
                  }}
                >
                  <p className="max-w-[285px] text-[17px] leading-[1.4] text-[#06231C] md:text-[18px]">
                    {message.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-[#0A3128] px-6 py-20 text-white sm:px-8 md:px-14 md:py-24 lg:px-20 xl:px-24"
        style={{
          backgroundImage: `linear-gradient(180deg,rgba(10,49,40,0.78)_0%,rgba(5,38,30,0.92)_100%), url(${vtoSectionBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.04)_22%,transparent_52%)]" />

        <div className="relative mx-auto max-w-[1320px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto flex max-w-[584px] flex-col items-center"
          >
            <h2
              className="text-center text-white"
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
              KactusLabs WhatsApp Marketing Flow
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true, amount: 0.25 }}
            className="relative mx-auto mt-12 max-w-[1120px] overflow-hidden rounded-[10px] bg-white p-6 shadow-[0_26px_80px_rgba(0,0,0,0.18)] md:p-8"
          >
            <div className="absolute left-[-54px] top-[-56px] h-[170px] w-[170px] rounded-full border-[8px] border-[#24483F]/55 blur-[3px]" />
            <div className="absolute right-[-68px] bottom-[-82px] h-[230px] w-[230px] rounded-full border-[8px] border-[#24483F]/55 blur-[3px]" />

            <div className="relative rounded-[10px] border border-[#e8ece7] bg-white/65 px-6 py-14 shadow-[0_0_0_1px_rgba(232,236,231,0.45)] backdrop-blur-[18px] md:px-12 md:py-20">
              <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-16">
                <div className="flex items-center gap-4">
                  <img
                    src={logoWithoutName}
                    alt="KactusLab"
                    className="h-14 w-14 object-contain"
                  />
                  <span className="text-[34px] font-normal leading-none text-[#0C2D25] md:text-[40px]">
                    KactusLab
                  </span>
                </div>

                <div className="hidden h-[124px] w-px bg-[#b8beb8] md:block" />

                <div className="flex items-center gap-4">
                  <img
                    src={whatsappBrandIcon}
                    alt="WhatsApp"
                    className="h-14 w-14 object-contain"
                  />
                  <span className="text-[34px] font-normal leading-none text-[#111827] md:text-[40px]">
                    Whatsapp
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-6 py-24 sm:px-8 md:px-14 md:py-28 lg:px-20 xl:px-24">
        <div className="relative mx-auto max-w-[1320px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[20px] border border-white/60 bg-white/55 shadow-[0_18px_70px_rgba(10,47,37,0.08)] backdrop-blur-[14px]"
          >
            <div className="grid grid-cols-[minmax(0,1.2fr)_minmax(220px,1fr)_minmax(220px,1.15fr)] border-b border-[#dbe3ea]">
              <div className="px-6 py-8 md:px-8">
                <h3 className="text-[#1d2433] text-[20px] font-medium leading-[1.25]">Features</h3>
              </div>

              <div className="flex items-center justify-center border-l border-[#dbe3ea] px-6 py-8">
                <h3 className="text-center text-[#232636] text-[24px] font-medium leading-[1.2]">Other Brands</h3>
              </div>

              <div className="flex items-center justify-center gap-3 border-l border-[#dbe3ea] px-6 py-8">
                <img
                  src={logoWithoutName}
                  alt="Kactuslabs"
                  className="h-11 w-11 object-contain"
                />
                <h3 className="text-center text-[#173A31] text-[24px] font-medium leading-[1.2]">Kactuslabs</h3>
              </div>
            </div>

            {comparisonRows.map((label, index) => (
              <div
                key={label}
                className={`grid grid-cols-[minmax(0,1.2fr)_minmax(220px,1fr)_minmax(220px,1.15fr)] ${index !== comparisonRows.length - 1 ? "border-b border-[#e4eaf0]" : ""}`}
              >
                <div className="px-6 py-5 md:px-8">
                  <p
                    className={index === 0 ? "max-w-[250px]" : ""}
                    style={{
                      color: index === 0 ? "#8B95AF" : "#232636",
                      fontFamily: "SF Pro",
                      fontSize: index === 0 ? "14px" : "16px",
                      fontStyle: "normal",
                      fontWeight: index === 0 ? 274 : 400,
                      lineHeight: index === 0 ? "20px" : "24px"
                    }}
                  >
                    {label}
                  </p>
                </div>

                <div className="flex items-center justify-center border-l border-[#e4eaf0] px-6 py-5">
                  <img
                    src={wrongIcon}
                    alt="Not included"
                    className="h-4 w-4 object-contain"
                  />
                </div>

                <div className="flex items-center justify-center border-l border-[#e4eaf0] px-6 py-5">
                  <img
                    src={rightIcon}
                    alt="Included"
                    className="h-4 w-4 object-contain"
                  />
                </div>
              </div>
            ))}
          </motion.div>
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

            <div className="relative overflow-hidden rounded-[36px] border border-[#EEF2E5] bg-[linear-gradient(180deg,#FFFFFF_0%,#FDFEF9_100%)] p-3 shadow-[0_24px_70px_rgba(6,35,28,0.08)]">
              <div className="overflow-hidden rounded-[30px] border border-[#EEF2E3] bg-white">
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
