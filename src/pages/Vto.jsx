import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion"
import { MagneticButton, SectionTitle, RevealImage, StaggerText } from "../components/AnimatedElements"
import DemoModal from "../components/DemoModal";
import GrowthCtaSection from "../components/GrowthCtaSection";

// Icons
import EnterpriseVector from "../assets/images/Vto/vector.svg";
import EnterpriseVectorHover from "../assets/images/Vto/vectorHover.svg";

import shopifyl from "../assets/images/Vto/shopify.png";
import magentol from "../assets/images/Vto/magento.png";
import woocoml from "../assets/images/Vto/woocom.png";
import ShopifyCard from "../assets/images/Vto/ShopifyCard.svg";
import browseIcon from "../assets/images/Vto/browse.svg";
import shouldIBuyIcon from "../assets/images/Vto/Should I buy this.svg";
import orderPlacedIcon from "../assets/images/Vto/order placed.svg";
import wrongFitIcon from "../assets/images/Vto/wrong fit.svg";
import orderReturnedIcon from "../assets/images/Vto/order Returned.svg";
import backInStockIcon from "../assets/images/Vto/back in stock.svg";
import orderReturnedChallengeIcon from "../assets/images/Vto/ic1.svg";
import backInStockChallengeIcon from "../assets/images/Vto/ic2.svg";
import wrongFitChallengeIcon from "../assets/images/Vto/ic3.svg";
import shouldIBuyChallengeIcon from "../assets/images/Vto/ic4.svg";
import downloadFeatureIcon from "../assets/images/Vto/download.png";
import instantVtoFeatureIcon from "../assets/images/Vto/instant.png";
import smartSizeFeatureIcon from "../assets/images/Vto/sizefit.png";
import vtoSectionVector from "../assets/images/Vto/Vector.svg";
import rightIcon from "../assets/images/Vto/right.svg";
import wrongIcon from "../assets/images/Vto/wrong.svg";
import vtoImg from "../assets/images/Vto/vtoImg.png";
import ShopifyHeroBg from "../assets/images/Vto/shopifyhero.png";
import logoWithoutName from "../assets/images/Vto/logowithoutname.svg";


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

const vtoOrbitRings = [
  { radius: 540, strokeOpacity: 1 },
  { radius: 600, strokeOpacity: 1 },
  { radius: 660, strokeOpacity: 0.34 },
  
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

const vtoChallenges = [
  {
    title: "Browser",
    icon: browseIcon,
    interactive: false,
  },
  {
    title: "Should I buy this?",
    icon: shouldIBuyIcon,
    cardIcon: shouldIBuyChallengeIcon,
    issue: "Lower Conversion Rates",
    interactive: true,
  },
  {
    title: "Order Placed",
    icon: orderPlacedIcon,
    interactive: false,
  },
  {
    title: "Wrong Fit",
    icon: wrongFitIcon,
    cardIcon: wrongFitChallengeIcon,
    issue: "Loss of Customer Trust",
    interactive: true,
  },
  {
    title: "Order Returned",
    icon: orderReturnedIcon,
    cardIcon: orderReturnedChallengeIcon,
    issue: "High Return Costs",
    interactive: true,
  },
  {
    title: "Back in Stock",
    icon: backInStockIcon,
    cardIcon: backInStockChallengeIcon,
    issue: "Dead Inventory Accumulation",
    interactive: true,
  }
];

const vtoInteractiveChallengeIndexes = vtoChallenges.reduce((indexes, item, index) => {
  if (item.interactive) {
    indexes.push(index);
  }

  return indexes;
}, []);

const vtoFeatureHighlights = [
  {
    title: "Instant Visualization",
    description: "Users can visualise how the product, pattern and fabric type will look on their own body with a single click, eliminating guesswork.",
    icon: instantVtoFeatureIcon
  },
  {
    title: "Smart Size Recommendations for Better Fit",
    description: "Kactus AI analyzes the user's BMI and uses AI algorithms to recommend the most accurate size for that individual.",
    icon: smartSizeFeatureIcon
  },
  {
    title: "Watermarked Downloads",
    description: "The users can download or share their generated images with a brand watermark after the virtual try-on.",
    icon: downloadFeatureIcon
  }
];

const comparisonRows = [
  "Purchase with instant discounts",
  "Downloadable watermark",
  "Smart Size recommendation",
  "Consistent and cohesive brand experience"
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

function VtoOrbitBackground() {
  return (
    <motion.div
      initial={{ opacity: 0.45, scale: 0.985 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: false, amount: 0.3 }}
      className="absolute inset-0 pointer-events-none"
    >
      <div className="absolute inset-0 bg-[#06231C]" />
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        style={{
          background: `
            radial-gradient(74% 82% at 50% -10%, rgba(212, 229, 192, 0.68) 0%, rgba(118, 127, 106, 0.20) 34%, rgba(6, 35, 28, 0) 67%),
            radial-gradient(24% 58% at 2% 100%, rgba(212, 229, 192, 0.18) 0%, rgba(6, 35, 28, 0) 76%),
            radial-gradient(24% 58% at 98% 100%, rgba(212, 229, 192, 0.18) 0%, rgba(6, 35, 28, 0) 76%)
          `
        }}
      />
      <svg
        viewBox="0 0 1440 920"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {vtoOrbitRings.map((ring, index) => (
          <motion.circle
            key={ring.radius}
            cx="720"
            cy="-255"
            r={ring.radius}
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeOpacity={ring.strokeOpacity}
            style={{ opacity: 0.09 }}
            initial={{ opacity: 0, pathLength: 0.92 }}
            whileInView={{ opacity: 0.09, pathLength: 1 }}
            transition={{
              duration: 1.05,
              delay: 0.04 * index,
              ease: [0.22, 1, 0.36, 1]
            }}
            viewport={{ once: false, amount: 0.3 }}
          />
        ))}
      </svg>
    </motion.div>
  )
}

function VtoTopGlow({ wrapperClassName = "", glowClassName = "" }) {
  const glowRef = useRef(null)
  const isInView = useInView(glowRef, { amount: 0.25 })

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 z-[1] flex justify-center ${wrapperClassName}`}
    >
      <motion.div
        initial={false}
        animate={
          isInView
            ? {
                opacity: [0.18, 0.34, 0.58, 0.34],
                scale: [0.9, 0.97, 1.05, 0.98],
                y: [0, 0, 6, 0]
              }
            : {
                opacity: 0,
                scale: 0.84,
                y: -12
              }
        }
        transition={
          isInView
            ? {
                duration: 6.2,
                delay: 0.12,
                times: [0, 0.2, 0.6, 1],
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror"
              }
            : { duration: 0.22, ease: "easeOut" }
        }
        className={`rounded-[1145.655px] ${glowClassName}`}
        style={{
          borderRadius: "1145.655px",
          background: "linear-gradient(180deg, rgba(212, 229, 192, 0.67) 112.39%, rgba(118, 127, 106, 0.67) 124.06%)",
          filter: "blur(100px)",
          willChange: "transform, opacity"
        }}
      />
    </div>
  )
}

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

export default function Vto() {
  const { scrollY } = useScroll();
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [activeFeatureCard, setActiveFeatureCard] = useState(null);
  const [activeVtoChallenge, setActiveVtoChallenge] = useState(null);
  const [hoveredVtoChallenge, setHoveredVtoChallenge] = useState(null);
  const [activeReviewCard, setActiveReviewCard] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const vtoChallengesSectionRef = useRef(null);
  const desktopChallengeTrackRef = useRef(null);
  const vtoChallengeCycleRef = useRef(0);
  const [desktopChallengeMetrics, setDesktopChallengeMetrics] = useState({
    containerWidth: 1260,
    slotWidth: 1260 / vtoChallenges.length
  });
  const isVtoChallengesInView = useInView(vtoChallengesSectionRef, { amount: 0.35 });

  const heroRevealY = useTransform(scrollY, [0, 500], [0, 110]);
  const desktopChallengeCardWidth = Math.min(
    476,
    Math.max(400, desktopChallengeMetrics.slotWidth * 2.18)
  );
  const desktopChallengeExtraWidth = Math.max(
    0,
    desktopChallengeCardWidth - desktopChallengeMetrics.slotWidth
  );

  useEffect(() => {
    const node = desktopChallengeTrackRef.current;

    if (!node) {
      return undefined;
    }

    const updateMetrics = () => {
      const containerWidth = node.offsetWidth || 1260;
      setDesktopChallengeMetrics({
        containerWidth,
        slotWidth: containerWidth / vtoChallenges.length
      });
    };

    updateMetrics();

    const resizeObserver = new ResizeObserver(() => {
      updateMetrics();
    });

    resizeObserver.observe(node);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVtoChallengesInView) {
      setActiveVtoChallenge(null);
      return undefined;
    }

    if (hoveredVtoChallenge !== null) {
      const hoveredCycleIndex = vtoInteractiveChallengeIndexes.indexOf(hoveredVtoChallenge);

      if (hoveredCycleIndex >= 0) {
        vtoChallengeCycleRef.current = hoveredCycleIndex;
      }

      setActiveVtoChallenge(hoveredVtoChallenge);
      return undefined;
    }

    setActiveVtoChallenge(vtoInteractiveChallengeIndexes[vtoChallengeCycleRef.current]);

    const challengeTimer = window.setInterval(() => {
      vtoChallengeCycleRef.current =
        (vtoChallengeCycleRef.current + 1) % vtoInteractiveChallengeIndexes.length;
      setActiveVtoChallenge(vtoInteractiveChallengeIndexes[vtoChallengeCycleRef.current]);
    }, 2000);

    return () => {
      window.clearInterval(challengeTimer);
    };
  }, [isVtoChallengesInView, hoveredVtoChallenge]);

  const handleVtoChallengeHoverEnter = (index) => {
    if (!vtoChallenges[index]?.interactive) {
      return;
    }

    setHoveredVtoChallenge(index);
  };

  const handleVtoChallengeHoverLeave = () => {
    if (!isVtoChallengesInView) {
      setHoveredVtoChallenge(null);
      setActiveVtoChallenge(null);
      return;
    }

    const currentInteractiveIndex = vtoInteractiveChallengeIndexes.indexOf(
      hoveredVtoChallenge ?? activeVtoChallenge
    );
    const nextCycleIndex =
      currentInteractiveIndex >= 0
        ? (currentInteractiveIndex + 1) % vtoInteractiveChallengeIndexes.length
        : vtoChallengeCycleRef.current;

    vtoChallengeCycleRef.current = nextCycleIndex;
    setHoveredVtoChallenge(null);
    setActiveVtoChallenge(vtoInteractiveChallengeIndexes[nextCycleIndex]);
  };

  return (
    <main className="demo-page bg-[#F5F6F2] text-slate-800">

      <section className="relative overflow-hidden bg-[#06231C]">
        <motion.img
          src={ShopifyHeroBg}
          alt=""
          aria-hidden="true"
          style={{ y: heroRevealY }}
          className="absolute inset-0 h-full w-full object-cover object-left"
        />

        <div className="relative z-10 flex min-h-[720px] items-center px-6 pb-20 pt-28 sm:px-8 md:px-14 md:pt-32 lg:px-20 xl:px-24">
          <div className="mx-auto grid w-full max-w-[1320px] items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(420px,580px)] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[560px]"
            >
              <h1
                className="self-stretch text-white"
                style={{
                  color: "#FFF",
                  fontFamily: "SF Pro",
                  fontSize: "54px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "56px"
                }}
              >
                Higher Conversions Fewer Returns
              </h1>

              <p
                className="mt-8 self-stretch text-white"
                style={{
                  color: "#FFF",
                  fontFamily: "SF Pro",
                  fontSize: "22px",
                  fontStyle: "normal",
                  fontWeight: 274,
                  lineHeight: "28px"
                }}
              >
                Stop guesswork and purchase confidently.
              </p>

              <p className="mt-6 max-w-[430px] self-stretch text-[15px] leading-[24px] text-white">
                Kactus AI virtual try-on lets customers see how products look on them in one click and get a precise size recommendation using body data, improving accuracy, boosting confidence, and reducing returns.
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
              <div className="relative w-full max-w-[580px]">
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
        ref={vtoChallengesSectionRef}
        className="bg-white px-6 py-16 sm:px-8 md:px-14 md:py-20 lg:px-20 xl:px-24"
      >
        <div className="mx-auto max-w-[1320px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="mx-auto flex max-w-[658px] flex-col items-center"
          >
            <h2
              className="h-[110px] w-full text-center text-[#173A31]"
              style={{
                width: "658px",
                maxWidth: "100%",
                height: "110px",
                textAlign: "center",
                fontFamily: "SF Pro",
                fontSize: "46px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "48px",
                textTransform: "capitalize"
              }}
            >
              Challenges Every Fashion <br /> Brand Faces
            </h2>
          </motion.div>

          <div
            ref={desktopChallengeTrackRef}
            className="relative mx-auto mt-14 hidden h-[146px] max-w-[1260px] overflow-hidden lg:block"
            onMouseLeave={handleVtoChallengeHoverLeave}
          >
            <div className="grid h-full grid-cols-6 items-start gap-x-3 px-3 pt-2">
              {vtoChallenges.map((item, index) => {
                const isActive = activeVtoChallenge === index;
                const hasActive = activeVtoChallenge !== null;
                const opensLeft = hasActive && activeVtoChallenge >= vtoChallenges.length - 2;
                const shouldShiftRight = hasActive && !opensLeft && index > activeVtoChallenge;
                const shouldShiftLeft = hasActive && opensLeft && index < activeVtoChallenge;
                const isInteractive = item.interactive;
                const shiftAmount = shouldShiftRight
                  ? desktopChallengeExtraWidth
                  : shouldShiftLeft
                    ? -desktopChallengeExtraWidth
                    : 0;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      opacity: { duration: 0.45, delay: index * 0.06 },
                      default: { type: "spring", stiffness: 220, damping: 28 }
                    }}
                    viewport={{ once: true }}
                    animate={{
                      x: shiftAmount,
                      opacity: isActive ? 0 : 1,
                      scale: 1
                    }}
                    onMouseEnter={() => {
                      handleVtoChallengeHoverEnter(index);
                    }}
                    className={`flex h-full flex-col items-center justify-start px-3 pt-1 text-center ${isInteractive ? "cursor-pointer" : "cursor-default"}`}
                  >
                    <div className="relative flex h-[58px] w-[58px] items-center justify-center">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="h-[43.09px] w-[42.663px] object-contain"
                      />
                      {isInteractive && (
                        <span className="pointer-events-none absolute -right-[6px] -top-[6px] flex h-3.5 w-3.5 items-center justify-center">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E76363]/60" />
                          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#E76363]" />
                        </span>
                      )}
                    </div>
                    <p
                      className="mt-4 max-w-[180px] whitespace-nowrap text-center text-[#06231C]"
                      style={{
                        color: "#06231C",
                        fontFamily: "SF Pro",
                        fontSize: "18.112px",
                        fontStyle: "normal",
                        fontWeight: 510,
                        lineHeight: "28px"
                      }}
                    >
                      {item.title}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <AnimatePresence>
              {activeVtoChallenge !== null && (
                <motion.div
                  key={vtoChallenges[activeVtoChallenge].title}
                  initial={{ opacity: 0, scale: 0.94, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 8 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="pointer-events-none absolute top-0 z-20 flex h-[146px] items-center overflow-hidden rounded-[14px] border border-[#0f3b2f] bg-[radial-gradient(circle_at_center,rgba(214,229,192,0.22)_0%,rgba(214,229,192,0.12)_32%,transparent_72%),linear-gradient(135deg,#0B2D24_0%,#163B31_100%)] px-6 shadow-[0_20px_45px_rgba(10,47,37,0.16)]"
                  style={{
                    width: desktopChallengeCardWidth,
                    left:
                      activeVtoChallenge >= vtoChallenges.length - 2
                        ? (activeVtoChallenge + 1) * desktopChallengeMetrics.slotWidth - desktopChallengeCardWidth
                        : activeVtoChallenge * desktopChallengeMetrics.slotWidth
                  }}
                >
                  <div className="flex w-[132px] shrink-0 flex-col items-center gap-3 text-center">
                    <img
                      src={vtoChallenges[activeVtoChallenge].cardIcon ?? vtoChallenges[activeVtoChallenge].icon}
                      alt={vtoChallenges[activeVtoChallenge].title}
                      className="h-[43.09px] w-[42.663px] object-contain"
                    />
                    <p
                      className="text-center text-white"
                      style={{
                        fontFamily: "SF Pro",
                        fontSize: "17px",
                        fontStyle: "normal",
                        fontWeight: 510,
                        lineHeight: "22px"
                      }}
                    >
                      {vtoChallenges[activeVtoChallenge].title}
                    </p>
                  </div>

                  <div className="ml-5 flex min-w-0 flex-1 items-center gap-3">
                    <svg
                      viewBox="0 0 20 20"
                      className="h-[26px] w-[26px] shrink-0"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 5l10 10M15 5L5 15"
                        stroke="#FF5B5B"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>

                    <div className="min-w-0">
                      <p
                        className="text-white"
                        style={{
                          fontFamily: "SF Pro",
                          fontSize: "17px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "24px"
                        }}
                      >
                        {vtoChallenges[activeVtoChallenge].issue}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mx-auto mt-12 grid max-w-[1260px] gap-4 sm:grid-cols-2 lg:hidden">
            {vtoChallenges.map((item, index) => {
              const isActive = activeVtoChallenge === index;
              const isInteractive = item.interactive;

              return (
                <motion.div
                  key={`${item.title}-mobile`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className={`rounded-[16px] border px-5 py-5 text-left transition-colors duration-300 ${isActive ? "border-[#0B2D24] bg-[#0B2D24] text-white" : "border-[#dce4dd] bg-white text-[#06231C]"}`}
                >
                  <div className={`flex gap-4 ${isActive ? "flex-col items-center text-center" : "items-start"}`}>
                    <div className={`relative shrink-0 ${isActive ? "mt-0" : "mt-1"}`}>
                      <img
                        src={item.cardIcon ?? item.icon}
                        alt={item.title}
                        className="h-[43.09px] w-[42.663px] object-contain"
                      />
                      {isInteractive && (
                        <span className="pointer-events-none absolute -right-[6px] -top-[6px] flex h-3.5 w-3.5 items-center justify-center">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E76363]/60" />
                          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#E76363]" />
                        </span>
                      )}
                    </div>
                    <div className={isActive ? "text-center" : ""}>
                      <p
                        style={{
                          fontFamily: "SF Pro",
                          fontSize: "18px",
                          fontStyle: "normal",
                          fontWeight: 510,
                          lineHeight: "24px"
                        }}
                      >
                        {item.title}
                      </p>
                      {item.issue && (
                        <p
                          className={isActive ? "mt-3 text-center text-white" : "mt-3 text-[#173A31]"}
                          style={{
                            fontFamily: "SF Pro",
                            fontSize: "15px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "21px"
                          }}
                        >
                          {item.issue}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#06231C] px-6 pt-12 pb-20 text-white sm:px-8 md:px-14 md:pt-14 md:pb-24 lg:px-20 xl:px-24">
        <VtoOrbitBackground />
        <VtoTopGlow
          wrapperClassName="top-0 -translate-y-[22%] md:-translate-y-[26%]"
          glowClassName="h-[220px] w-[360px] md:h-[320px] md:w-[940px]"
        />

        <div className="relative z-10 mx-auto max-w-[1320px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="mx-auto flex max-w-[920px] flex-col items-center text-center"
          >
            <img
              src={vtoSectionVector}
              alt=""
              aria-hidden="true"
              className="h-7 w-7 object-contain"
            />

            <h2
              className="mt-4 text-center text-white"
              style={{
                color: "#FFF",
                textAlign: "center",
                fontFamily: "SF Pro",
                fontSize: "46px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal"
              }}
            >
              Virtual Try-On
            </h2>

            <p className="mt-2.5 text-[18px] leading-[1.5] text-white/72">
              Built for scale. Designed for reliability.
            </p>

            <div
              className="mt-8 w-full max-w-full overflow-hidden border border-white/12 bg-[#d3d3d3] shadow-[0_24px_80px_rgba(0,0,0,0.22)]"
              style={{
                width: "686px",
                height: "338px",
                borderRadius: "8px"
              }}
            >
              <img
                src={vtoImg}
                alt="Virtual try-on product experience"
                className="h-full w-full object-cover"
                style={{
                  objectPosition: "-62.798px -6.124px"
                }}
              />
            </div>

            <p className="mt-8 max-w-[860px] text-[20px] leading-[1.75] text-white/88">
              Kactus AI Virtual Try-On drives buyer confidence through instant outfit visualization and smart sizing while turning try-on data into WhatsApp marketing fuel and branding every image with your logo.
            </p>

            <button
              type="button"
              onClick={() => setIsDemoOpen(true)}
              className="mt-8 inline-flex h-12 items-center justify-center rounded-[4px] bg-[#D4E5C0] px-8 text-[15px] font-medium text-[#06231C] transition-all duration-300 hover:translate-y-[-1px] hover:bg-[#dbe9ca]"
            >
              Explore Whatsapp Marketing
            </button>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {vtoFeatureHighlights.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="transform-gpu rounded-[12px] border border-white/20 bg-white/[0.03] px-6 py-7 text-center transition-all duration-500 ease-out hover:scale-[1.04] hover:border-white/45 hover:bg-white/[0.07] hover:shadow-[0_20px_45px_rgba(0,0,0,0.28)]"
              >
                <img src={card.icon} alt={card.title} className="mx-auto h-[40.667px] w-[40.667px] object-contain" />

                <h3
                  className="mt-5 self-stretch text-center text-white"
                  style={{
                    color: "#FFF",
                    textAlign: "center",
                    fontFamily: "SF Pro",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 510,
                    lineHeight: "32.5px"
                  }}
                >
                  {card.title}
                </h3>

                <p
                  className="mt-1 self-stretch text-center"
                  style={{
                    color: "rgba(255, 255, 255, 0.74)",
                    textAlign: "center",
                    fontFamily: "SF Pro",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 274,
                    lineHeight: "24px"
                  }}
                >
                  {card.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-6 py-24 sm:px-8 md:px-14 md:py-28 lg:px-20 xl:px-24">
        <div className="relative mx-auto max-w-[1320px]">
          <motion.div
            initial={{ opacity: 0, y: -64 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: false, amount: 0.35 }}
            className="overflow-hidden rounded-[20px] border border-white/60 bg-white/55 shadow-[0_18px_70px_rgba(10,47,37,0.08)] backdrop-blur-[14px]"
          >
            <div className="grid grid-cols-[minmax(0,1.2fr)_minmax(220px,1fr)_minmax(220px,1.15fr)] border-b border-[#dbe3ea]">
              <div className="flex items-center justify-center px-6 py-8 md:px-8">
                <h3 className="text-center text-[#232636] text-[24px] font-medium leading-[1.2]">Features</h3>
              </div>

              <div className="flex items-center justify-center border-l border-[#dbe3ea] px-6 py-8">
                <h3 className="text-center text-[#232636] text-[24px] font-medium leading-[1.2]">Other Brands</h3>
              </div>

              <div className="flex items-center justify-center gap-3 border-l border-[#dbe3ea] px-6 py-8">
                <img
                  src={logoWithoutName}
                  alt="Kactus AI"
                  className="h-11 w-11 object-contain"
                />
                <h3 className="text-center text-[#173A31] text-[24px] font-medium leading-[1.2]">KactusAI</h3>
              </div>
            </div>

            {comparisonRows.map((label, index) => (
              <div
                key={label}
                className={`grid grid-cols-[minmax(0,1.2fr)_minmax(220px,1fr)_minmax(220px,1.15fr)] ${index !== comparisonRows.length - 1 ? "border-b border-[#e4eaf0]" : ""}`}
              >
                <div className="flex items-center px-6 py-5 md:px-8">
                  <p
                    className="max-w-none whitespace-nowrap"
                    style={{
                      color: "#232636",
                      fontFamily: "SF Pro",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "24px"
                    }}
                  >
                    {label}
                  </p>
                </div>

                <div className="flex items-center justify-center border-l border-[#e4eaf0] px-6 py-5">
                  <img
                    src={wrongIcon}
                    alt="Not included"
                    className="h-[36px] w-[36px] object-contain"
                  />
                </div>

                <div className="flex items-center justify-center border-l border-[#e4eaf0] px-6 py-5">
                  <img
                    src={rightIcon}
                    alt="Included"
                    className="h-[36px] w-[36px] object-contain"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      

     
      <GrowthCtaSection
        onPrimaryClick={() => setIsDemoOpen(true)}
        titleLines={["AI does the work,", "You stay in control"]}
        subtitle="Scale Your Growth Today."
        points={[
          "Grow consistently",
          "150+ Handcoded",
          "Optimize intelligently"
        ]}
      />

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </main>
  );
}
