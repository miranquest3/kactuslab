import { useRef, useState } from "react"
import { motion, AnimatePresence, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion"
import { MagneticButton, SectionTitle, RevealImage, StaggerText } from "../components/AnimatedElements"
import HeroMain from "../assets/images/Home/Hero-Main.png";
import DemoModal from "../components/DemoModal";

import shopifyl from "../assets/images/Home/Icons/shopify.png";
import magentol from "../assets/images/Home/Icons/magento.png";
import woocoml from "../assets/images/Home/Icons/woocom.png";
import cardBg from "../assets/images/Home/cardbg.png";
import whatsappIcon from "../assets/images/Home/whatsapp.svg";
import aiProductIcon from "../assets/images/Home/aiProduct.svg";
import marketResearchIcon from "../assets/images/Home/market resecher.svg";
import websiteManagementIcon from "../assets/images/Home/web-management 1.png";
import vtoFeatureIcon from "../assets/images/Home/vto.png";
import inventoryManagementIcon from "../assets/images/Home/inventory-management 2.png";
import EnterpriseReadyBg from "../assets/images/Home/Enterprise Ready.svg";
import enterpriceFast from "../assets/images/Home/enterpriceFast.svg";
import enterpriceRealtime from "../assets/images/Home/enterpriceRealtime.svg";
import enterpriseApi from "../assets/images/Home/enterpriseApi.svg";
import hero from "../assets/images/Home/hero.png";
import handPhone from "../assets/images/Home/handPhone.png";
import cardsOutcome from "../assets/images/Home/cardsOutcome.png";
import miranBanne from "../assets/images/Home/MIRAN BANNE.png";
import orbitCardBg from "../assets/images/Home/orbitcard.png";
import logoWithoutName from "../assets/images/logowithoutname.svg";


const logos = [
  { type: "image", src: shopifyl, label: "Shopify" },
  { type: "image", src: magentol, label: "Magento" },
  { type: "image", src: woocoml, label: "WooCommerce" },
  { type: "text", label: "Custom APIs" },
];

const enterpriseCards = [
  {
    title: "Fast Implementation",
    description: "Launch faster with minimal effort",
    icon: enterpriceFast,
    position: "md:left-[14%] md:top-[1%]"
  },
  {
    title: "API-based Integration",
    description: "Quick setup with API integration",
    icon: enterpriseApi,
    position: "md:right-[14%] md:top-[1%]"
  },
  {
    title: "Real-time Brand Audit",
    description: "Real-time insights into your brand performance",
    icon: enterpriceRealtime,
    position: "md:left-[31%] md:top-[58%]"
  },
  {
    title: "Zero Downtime",
    description: "Stay live without interruptions",
    icon: null,
    iconType: "zero-downtime",
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
    title: "Virtual Try On",
    description: "Kactuslabs Virtual Try-On, let your customers visualize the fit before checkout. Confidence cuts returns. Boosts conversions. With brand watermark, every share becomes an ad.",
    iconKey: "camera",
    orbitAngle: 180,
    accent: {
      glow: "rgba(132, 225, 212, 0.35)",
      tint: "#7AD8C6"
    }
  },
  {
    title: "WhatsApp Commerce",
    description: "Engage shoppers on WhatsApp with instant replies, guided discovery, and conversion-ready conversations.",
    iconKey: "chat",
    orbitAngle: 240,
    accent: {
      glow: "rgba(204, 166, 255, 0.34)",
      tint: "#B88AF5"
    }
  },
  {
    title: "Catalog Studio",
    description: "Generate polished storefront assets, campaign visuals, and product-ready imagery without long studio cycles.",
    iconKey: "studio",
    orbitAngle: 300,
    accent: {
      glow: "rgba(201, 235, 170, 0.34)",
      tint: "#8FAE58"
    }
  },
  {
    title: "Size Intelligence",
    description: "Guide customers toward the right fit with product-aware size suggestions that reduce hesitation.",
    iconKey: "hanger",
    orbitAngle: 0,
    accent: {
      glow: "rgba(255, 192, 193, 0.35)",
      tint: "#EC6B70"
    }
  },
  {
    title: "Visual Search",
    description: "Turn inspiration into discovery with AI-assisted search that helps shoppers find matching products fast.",
    iconKey: "search",
    orbitAngle: 60,
    accent: {
      glow: "rgba(251, 236, 149, 0.38)",
      tint: "#D7B32B"
    }
  },
  {
    title: "Commerce Automation",
    description: "Let KactusLabs handle next actions from engagement through conversion in a single flow.",
    iconKey: "workflow",
    orbitAngle: 120,
    accent: {
      glow: "rgba(214, 191, 255, 0.34)",
      tint: "#A893E9"
    }
  }
];

const featureShowcaseCards = [
  {
    title: "VIRTUAL TRY - ON",
    description: "KactusLab provides customers with a visual representation of the outfit along with AI size recommendations before they check out.",
    icon: vtoFeatureIcon,
    iconAlt: "Virtual try-on",
    buttonLabel: "Know more",
    glow: "rgba(214, 233, 200, 0.34)"
  },
  {
    title: "WHATSAPP MARKETING",
    description: "Provide customers with customized shopping experiences by displaying outfits on their own images in WhatsApp marketing campaigns",
    icon: whatsappIcon,
    iconAlt: "WhatsApp marketing",
    buttonLabel: "Know more",
    glow: "rgba(194, 233, 220, 0.34)"
  },
  {
    title: "AI PRODUCT PHOTOSHOOT",
    description: "Studio-quality product photoshoot on WhatsApp. KactusLab AI turns your product images into high-quality photos saving time and resources.",
    icon: aiProductIcon,
    iconAlt: "AI product photoshoot",
    buttonLabel: "Know more",
    glow: "rgba(233, 242, 220, 0.34)"
  },
  {
    title: "MARKET RESEARCH",
    description: "KactusLab Market Research helps businesses grow by analysing target audiences, competitors, and market trends.",
    icon: marketResearchIcon,
    iconAlt: "Market research",
    buttonLabel: "Coming soon",
    comingSoon: true,
    glow: "rgba(206, 232, 214, 0.28)"
  },
  {
    title: "SOCIAL MEDIA MARKETING",
    description: "Manage Instagram, Facebook, and Gmail accounts by creating posts, engaging with followers, and posting. KactusLab AI handles it all.",
    iconType: "social-media",
    buttonLabel: "Coming soon",
    comingSoon: true,
    glow: "rgba(211, 233, 223, 0.28)"
  },
  {
    title: "WEBSITE MANAGEMENT",
    description: "Manage and update your website entirely through WhatsApp. Change theme, layout, and content hassle free. No developers. No delays.",
    icon: websiteManagementIcon,
    iconAlt: "Website management",
    buttonLabel: "Coming soon",
    comingSoon: true,
    glow: "rgba(219, 236, 223, 0.28)"
  },
  {
    title: "INVENTORY MANAGEMENT",
    description: "KactusLab helps brands avoid stockouts and overstocking of inventories.",
    icon: inventoryManagementIcon,
    iconAlt: "Inventory management",
    buttonLabel: "Coming soon",
    comingSoon: true,
    glow: "rgba(228, 236, 210, 0.28)"
  }
];

const featureShowcaseLayoutMap = featureShowcaseCards.map((_, index) => ({
  row: index < 3 ? 0 : 1,
  column: index < 3 ? index : index - 3,
  columnCount: index < 3 ? 3 : 4
}));

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

function EnterpriseReadyIcon({ item }) {
  if (item.iconType === "zero-downtime") {
    return (
      <svg
        viewBox="0 0 37 37"
        className="h-4 w-4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="12.2812"
          y="3.83594"
          width="12.2812"
          height="18.4237"
          rx="6.14062"
          stroke="#F9FAF7"
          strokeWidth="3.07067"
        />
        <path
          d="M18.4219 24.5654V33.7774"
          stroke="#F9FAF7"
          strokeWidth="3.07067"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.8164 29.1709L18.4224 33.7769L23.0284 29.1709"
          stroke="#F9FAF7"
          strokeWidth="3.07067"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <img
      src={item.icon}
      alt=""
      aria-hidden="true"
      className="h-4 w-4 object-contain brightness-0 invert opacity-95"
    />
  )
}

function FeatureShowcaseCard({
  card,
  index,
  activeCard,
  setActiveCard,
  layout,
  activeLayoutMap,
  compact = false
}) {
  const isActive = activeCard === index
  const hasActiveCard = activeCard !== null
  const activeLayout = hasActiveCard ? activeLayoutMap[activeCard] : null
  const glowX = useMotionValue(compact ? 138 : 186)
  const glowY = useMotionValue(compact ? 88 : 96)
  const glowBackground = useMotionTemplate`radial-gradient(circle at ${glowX}px ${glowY}px, ${card.glow} 0%, rgba(255,255,255,0) 46%)`
  const cardSizeClass = compact ? "rounded-[12px]" : "rounded-[14px]"
  const contentClass = compact
    ? "px-[18px] pt-[46px] pb-[22px]"
    : "px-[30px] pt-[68px] pb-[32px]"
  const iconClass = compact
    ? "h-[64px] w-[64px]"
    : "h-[92px] w-[92px]"
  const rowDistance =
    activeLayout && activeCard !== index
      ? Math.abs(activeLayout.row - layout.row) + Math.abs(activeLayout.column - layout.column)
      : 0
  const siblingOpacity = !hasActiveCard || isActive
    ? 1
    : Math.max(0.72, 0.92 - rowDistance * 0.08)
  const columnCenter = (layout.columnCount - 1) / 2
  const hoverRotateY = (layout.column - columnCenter) * (compact ? 3.2 : 4.4)
  const hoverRotateX = compact ? 4 : 5.5
  const titleStyle = {
    color: "#FFF",
    textAlign: "center",
    fontFamily: '"SF Pro"',
    fontSize: compact ? "12.6px" : "18px",
    fontStyle: "normal",
    fontWeight: 860,
    lineHeight: compact ? "13px" : "18.5px",
    letterSpacing: "-0.187px",
    textTransform: "uppercase",
    whiteSpace: "nowrap"
  }
  const descriptionStyle = {
    width: compact ? "205px" : "272px",
    maxWidth: "100%",
    textAlign: "center",
    fontFamily: '"SF Pro"',
    fontSize: compact ? "11.6px" : "13.5px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: compact ? "16.2px" : "20px",
    background: "linear-gradient(90deg, #ECEFFF 25.19%, #FFF 43.88%, #FFC3A9 93.56%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textWrap: "balance"
  }

  const handleMouseEnter = () => {
    setActiveCard(index)
  }

  const handleMouseMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    glowX.set(event.clientX - bounds.left)
    glowY.set(event.clientY - bounds.top)
  }

  const handleMouseLeave = () => {
    setActiveCard(null)
    glowX.set(compact ? 138 : 186)
    glowY.set(compact ? 88 : 96)
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        opacity: { duration: 0.55, delay: index * 0.06 }
      }}
      animate={{
        opacity: siblingOpacity,
        scale: hasActiveCard && !isActive ? 0.985 : 1,
        boxShadow: isActive
          ? `0 24px 70px ${card.glow}`
          : compact
            ? "0 14px 36px rgba(4, 36, 26, 0.08)"
            : "0 18px 48px rgba(4, 36, 26, 0.10)"
      }}
      whileHover={{
        y: compact ? -7 : -10,
        scale: compact ? 1.02 : 1.025,
        rotateX: hoverRotateX,
        rotateY: hoverRotateY
      }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative mx-auto w-full overflow-hidden ${cardSizeClass}`}
      style={{
        maxWidth: compact ? "275.959px" : "372.545px",
        minHeight: compact ? "376.251px" : "507.939px",
        height: compact ? "376.251px" : "507.939px",
        transformPerspective: 1400,
        transformStyle: "preserve-3d"
      }}
    >
      <img
        src={cardBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <motion.div
        className="absolute inset-0 rounded-[inherit]"
        animate={{ opacity: isActive ? 1 : 0.8 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{
          backgroundImage: glowBackground
        }}
      />
      <div className="absolute inset-0 rounded-[inherit] border border-white/6" />

      <div
        className={`relative z-10 flex h-full flex-col items-center text-center ${contentClass}`}
        style={{ transform: "translateZ(18px)" }}
      >
        <div className="flex w-full flex-col items-center">
          <h3
            style={titleStyle}
            className={`mx-auto flex w-full items-center justify-center ${compact ? "min-h-[16px]" : "min-h-[20px]"}`}
          >
            {card.title}
          </h3>
          <p
            style={descriptionStyle}
            className={`mx-auto ${compact ? "mt-[18px] min-h-[68px]" : "mt-[24px] min-h-[84px]"}`}
          >
            {card.description}
          </p>
          <div className={compact ? "mt-[32px] flex h-[74px] items-center justify-center" : "mt-[56px] flex h-[106px] items-center justify-center"}>
            {card.iconType === "social-media" ? (
              <svg
                viewBox="0 0 64 64"
                className={iconClass}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect x="12" y="12" width="40" height="40" rx="10" stroke="#E8E8E8" strokeWidth="2.5" />
                <circle cx="32" cy="32" r="9.5" stroke="#E8E8E8" strokeWidth="2.5" />
                <circle cx="43.5" cy="20.5" r="2.5" fill="#E8E8E8" />
              </svg>
            ) : (
              <img
                src={card.icon}
                alt={card.iconAlt}
                className={`${iconClass} object-contain`}
              />
            )}
          </div>
        </div>

        <div className="mt-auto flex w-full justify-center">
          <button
            className="inline-flex items-center justify-center gap-2 text-[13px] text-white transition-all duration-300 hover:translate-y-[-1px]"
            style={{
              width: "178px",
              height: "39px",
              borderRadius: "6px",
              border: "0.841px solid rgba(243, 238, 255, 0.08)",
              background: "linear-gradient(90deg, rgba(212, 229, 192, 0.39) 0.24%, rgba(118, 127, 106, 0.22) 127.22%)",
              fontFamily: '"SF Pro"',
              fontStyle: "normal",
              fontWeight: 510,
              lineHeight: "normal"
            }}
          >
            {card.comingSoon ? (
              <>
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                  <path d="M4.75 7V5.75a3.25 3.25 0 1 1 6.5 0V7" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.35" />
                </svg>
                {card.buttonLabel}
              </>
            ) : (
              card.buttonLabel
            )}
          </button>
        </div>
      </div>
    </motion.article>
  )
}

function FeatureIcon({ iconKey, className = "h-7 w-7", stroke = "currentColor" }) {
  const iconProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke,
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }

  switch (iconKey) {
    case "camera":
      return (
        <svg {...iconProps}>
          <path d="M4 8.5h3l1.5-2h7l1.5 2H20a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6.5a2 2 0 0 1 2-2Z" />
          <circle cx="12" cy="13" r="3.5" />
        </svg>
      )
    case "chat":
      return (
        <svg {...iconProps}>
          <path d="M12 20c4.97 0 9-3.58 9-8s-4.03-8-9-8-9 3.58-9 8c0 1.96.8 3.76 2.13 5.16L4 21l4.19-1.48A10 10 0 0 0 12 20Z" />
          <path d="M9 10.5h6" />
          <path d="M9 13.5h3.5" />
        </svg>
      )
    case "whatsapp":
      return (
        <svg {...iconProps}>
          <path d="M12.05 21c4.95 0 8.95-3.96 8.95-8.84S17 3.32 12.05 3.32 3.1 7.28 3.1 12.16c0 1.58.43 3.11 1.24 4.45L3 21l4.58-1.3A9.1 9.1 0 0 0 12.05 21Z" />
          <path d="M9.45 8.95c.2-.43.42-.44.62-.45h.52c.17 0 .42.06.64.53.22.47.74 1.62.8 1.74.07.12.12.27.02.44-.1.17-.15.27-.3.42-.15.15-.32.33-.46.44-.15.12-.3.25-.13.5.18.25.77 1.26 1.65 2.03 1.13.99 2.08 1.3 2.38 1.44.3.14.48.12.66-.07.17-.18.74-.85.94-1.14.2-.29.4-.24.67-.14.27.1 1.7.8 1.99.95.28.14.47.22.54.35.07.14.07.79-.18 1.55-.24.76-1.42 1.47-1.95 1.54-.5.06-1.13.09-1.82-.14-.42-.14-.95-.31-1.65-.61-2.9-1.25-4.79-4.17-4.93-4.37-.13-.2-1.17-1.57-1.17-2.99 0-1.42.74-2.12 1-2.41Z" />
        </svg>
      )
    case "studio":
      return (
        <svg {...iconProps}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M8 5V3" />
          <path d="M16 5V3" />
          <path d="M7.5 14l2.2-2.2 2.3 2.3 3.5-3.5 2.5 2.5" />
          <circle cx="8" cy="10" r="1" />
        </svg>
      )
    case "hanger":
      return (
        <svg {...iconProps}>
          <path d="M12 8a2.5 2.5 0 1 0-2.1-3.86" />
          <path d="M12 8l8 6.5a1.5 1.5 0 0 1-.95 2.7H4.95A1.5 1.5 0 0 1 4 14.5L12 8Z" />
        </svg>
      )
    case "search":
      return (
        <svg {...iconProps}>
          <circle cx="11" cy="11" r="6" />
          <path d="m20 20-4.2-4.2" />
          <path d="M8.8 11h4.4" />
        </svg>
      )
    case "workflow":
      return (
        <svg {...iconProps}>
          <rect x="4" y="5" width="5" height="5" rx="1.2" />
          <rect x="15" y="5" width="5" height="5" rx="1.2" />
          <rect x="9.5" y="14" width="5" height="5" rx="1.2" />
          <path d="M9 7.5h6" />
          <path d="M12 10v4" />
        </svg>
      )
    case "catalog":
      return (
        <svg {...iconProps}>
          <rect x="4" y="4.5" width="6" height="6" rx="1.2" />
          <rect x="14" y="4.5" width="6" height="6" rx="1.2" />
          <rect x="4" y="13.5" width="6" height="6" rx="1.2" />
          <path d="M14 15h6" />
          <path d="M14 18h4" />
        </svg>
      )
    case "browser":
      return (
        <svg {...iconProps}>
          <rect x="3" y="4" width="18" height="16" rx="2.2" />
          <path d="M3 8h18" />
          <path d="M7 6h.01" />
          <path d="M10 6h.01" />
          <path d="M13 6h.01" />
          <path d="M8 12h3" />
          <path d="M8 16h5" />
          <path d="M15.5 12.5h2.5v4h-2.5z" />
        </svg>
      )
    case "instagram":
      return (
        <svg {...iconProps}>
          <rect x="4" y="4" width="16" height="16" rx="5" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="17" cy="7.2" r="0.9" fill={stroke} stroke="none" />
        </svg>
      )
    default:
      return null
  }
}

function InteractiveFeatureOrbit({ cards, activeIndex, setActiveIndex }) {
  const activeCard = cards[activeIndex]
  const desktopOrbitSize = 548
  const iconOrbitSize = 424
  const iconOrbitDuration = 18
  const iconOrbitRadius = iconOrbitSize / 2

  return (
    <section className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 lg:px-8 md:py-20">
      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid items-center gap-10 xl:grid-cols-[1fr_764px] xl:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative min-h-[420px] md:min-h-[580px]"
          >
            <div
              className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block"
              style={{
                width: desktopOrbitSize,
                height: desktopOrbitSize
              }}
            >
              {[548, 468, 388, 308, 228, 148].map((size) => (
                <div
                  key={`interactive-orbit-ring-${size}`}
                  className="absolute left-1/2 top-1/2 rounded-full border border-[rgba(18,49,38,0.08)]"
                  style={{
                    width: size,
                    height: size,
                    transform: "translate(-50%, -50%)"
                  }}
                />
              ))}

              <div className="absolute inset-0 pointer-events-none">
                {orbitDots.map((orbit) => (
                  <div
                    key={`interactive-orbit-dot-${orbit.size}`}
                    className="absolute left-1/2 top-1/2 rounded-full"
                    style={{
                      width: orbit.size,
                      height: orbit.size,
                      transform: "translate(-50%, -50%)"
                    }}
                  >
                    <motion.div
                      className="absolute inset-0"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: orbit.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: orbit.delay
                      }}
                    >
                      <span
                        className={`absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full ${orbit.color} ${orbit.dotSize}`}
                        style={{
                          boxShadow: "0 0 16px rgba(255,255,255,0.95), 0 0 30px rgba(255,255,255,0.38)"
                        }}
                      />
                    </motion.div>
                  </div>
                ))}
              </div>

              <div
                className="absolute left-1/2 top-1/2 z-20 rounded-full"
                style={{
                  width: iconOrbitSize,
                  height: iconOrbitSize,
                  transform: "translate(-50%, -50%)"
                }}
              >
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: iconOrbitDuration,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {cards.map((card, index) => {
                    const isActive = activeIndex === index
                    const angleInRadians = ((card.orbitAngle - 90) * Math.PI) / 180
                    const x = iconOrbitRadius + Math.cos(angleInRadians) * iconOrbitRadius
                    const y = iconOrbitRadius + Math.sin(angleInRadians) * iconOrbitRadius

                    return (
                      <div
                        key={card.title}
                        className="absolute"
                        style={{
                          left: `${x}px`,
                          top: `${y}px`,
                          transform: "translate(-50%, -50%)"
                        }}
                      >
                        <motion.button
                          type="button"
                          onMouseEnter={() => setActiveIndex(index)}
                          onFocus={() => setActiveIndex(index)}
                          initial={false}
                          animate={{
                            scale: isActive ? 1.08 : 1,
                            rotate: -360
                          }}
                          transition={{
                            scale: { type: "spring", stiffness: 240, damping: 18 },
                            rotate: {
                              duration: iconOrbitDuration,
                              repeat: Infinity,
                              ease: "linear"
                            }
                          }}
                          onClick={() => setActiveIndex(index)}
                          className={`flex h-[54px] w-[54px] items-center justify-center rounded-full border bg-white transition-colors duration-300 md:h-[64px] md:w-[64px] ${isActive ? "border-white" : "border-[#edf1ec]"}`}
                          style={{
                            boxShadow: isActive
                              ? `0 0 0 8px rgba(255,255,255,0.64), 0 18px 45px ${card.accent.glow}`
                              : `0 12px 30px ${card.accent.glow}`,
                            color: card.accent.tint
                          }}
                        >
                          <FeatureIcon iconKey={card.iconKey} className="h-6 w-6 md:h-7 md:w-7" />
                        </motion.button>
                      </div>
                    )
                  })}
                </motion.div>
              </div>

              <div className="absolute left-1/2 top-1/2 z-10 flex h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#dce6de] bg-white shadow-[0_18px_45px_rgba(11,47,37,0.12)]">
                <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#06231C] shadow-[0_12px_28px_rgba(6,47,37,0.28)]">
                  <img src={logoWithoutName} alt="KactusLab" className="h-8 w-8 object-contain md:h-9 md:w-9" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pr-0 sm:grid-cols-3 md:hidden">
              {cards.map((card, index) => {
                const isActive = activeIndex === index

                return (
                  <motion.button
                    key={card.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    whileTap={{ scale: 0.97 }}
                    className={`relative flex min-h-[96px] flex-col items-center justify-center rounded-[24px] border px-4 py-5 text-center transition-all duration-300 ${isActive ? "border-[#8fdccc] bg-white shadow-[0_18px_40px_rgba(11,47,37,0.12)]" : "border-[#e2e8e3] bg-white/80"}`}
                    style={{
                      boxShadow: isActive ? `0 18px 40px ${card.accent.glow}` : undefined
                    }}
                  >
                    <div
                      className="mb-3 flex h-12 w-12 items-center justify-center rounded-full"
                      style={{
                        background: `radial-gradient(circle, ${card.accent.glow} 0%, rgba(255,255,255,0.98) 70%)`,
                        color: card.accent.tint
                      }}
                    >
                      <FeatureIcon iconKey={card.iconKey} className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-medium text-[#17362d]">{card.title}</span>
                  </motion.button>
                )
              })}
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div
              className="relative mx-auto w-full overflow-hidden rounded-[30px] border border-[rgba(255,255,255,0.18)] bg-[#0B2A21] p-8 shadow-[0_32px_80px_rgba(7,34,27,0.18)] md:p-12 xl:h-[474px] xl:w-[764px]"
              style={{
                backgroundImage: `url(${orbitCardBg})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_36%,rgba(0,0,0,0)_100%)]" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCard.title}
                  initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10 flex h-full flex-col justify-center xl:pl-[34px]"
                >
                  <h3
                    className="max-w-[320px] text-[34px] font-normal leading-[1.1] text-white md:text-[44px]"
                    style={{
                      fontFamily: '"SF Pro", sans-serif'
                    }}
                  >
                    {activeCard.title}
                  </h3>

                  <p
                    className="mt-6 max-w-[354px] text-[15px] leading-[1.65] text-white/80 md:text-[18px]"
                    style={{
                      fontFamily: '"SF Pro", sans-serif'
                    }}
                  >
                    {activeCard.description}
                  </p>

                  <button
                    type="button"
                    className="mt-10 inline-flex h-[48px] w-fit items-center justify-center gap-3 rounded-[4px] bg-white px-6 text-[12px] font-medium uppercase tracking-[0.02em] text-[#06231C] transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Learn More
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8h9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      <path d="m8.5 3.5 4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const { scrollY } = useScroll();
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [activeFeatureCard, setActiveFeatureCard] = useState(null);
  const [activeReviewCard, setActiveReviewCard] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const heroRevealY = useTransform(scrollY, [0, 500], [0, 150]);
  const blobY1 = useTransform(scrollY, [0, 500], [0, 100]);
  const blobY2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <main className="demo-page bg-[#F5F6F2] text-slate-800">

      <section className="relative min-h-[100svh] overflow-hidden md:h-screen">

  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover"
    style={{
      backgroundImage: `url(${hero})`,
      backgroundPosition: "center 18%",
    }}
  />

  {/* DARK OVERLAY */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "linear-gradient(90deg, rgba(2, 21, 16, 0.34) 0%, rgba(4, 40, 31, 0.14) 42%, rgba(17, 111, 96, 0.02) 100%)",
    }}
  />

  {/* CONTENT */}
  {/* CONTENT */}
<div className="relative z-10 flex min-h-[100svh] items-center md:h-full">
  <div className="w-full px-5 pt-[60px] sm:px-8 md:px-0">
      <div className="flex flex-col gap-4 md:pl-[66px] md:gap-[18px] lg:pl-[68px]">
      <h1
        className="max-w-[310px] text-[32px] leading-[0.96] tracking-[-0.03em] text-white sm:max-w-[360px] sm:text-[42px] md:max-w-[430px] md:text-[54px] md:leading-[0.95]"
        style={{
          color: "#FFF",
          fontFamily: "SF Pro",
          fontStyle: "normal",
          fontWeight: 400,
        }}
      >
        KactusLab For <br /> Businesses
      </h1>

      <p
        className="max-w-[308px] text-[15px] leading-[1.35] text-white/85 sm:max-w-[360px] md:max-w-[455px] md:text-[16px] md:leading-[1.22]"
        style={{
          fontFamily: "SF Pro",
          fontStyle: "normal",
          fontWeight: 274,
        }}
      >
        KactusLab AI provides an autonomous system to manage
        <br />
        businesses via WhatsApp.
      </p>

      <button
        type="button"
        onClick={() => setIsDemoOpen(true)}
        className="inline-flex items-center justify-center rounded-[4px] bg-[#DCE8B7] text-[#06231C] uppercase tracking-[0.02em] transition-transform duration-300 hover:-translate-y-0.5"
        style={{
          width: "132px",
          height: "35px",
          fontFamily: "SF Pro",
          fontSize: "11px",
          fontWeight: 500,
        }}
      >
        Book A Demo
      </button>
      </div>
    </div>
  </div>

</section>

      {/* <section className="relative bg-white pt-20 pb-10 md:pt-20 md:pb-14 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[12%] top-[38%] w-40 h-40 rounded-full bg-[#b9f3ca]/30 blur-3xl" />
          <div className="absolute right-[14%] top-[28%] w-44 h-44 rounded-full bg-[#dcb6ff]/25 blur-3xl" />
          <div className="absolute left-[18%] bottom-[18%] w-40 h-40 rounded-full bg-[#ffd7cf]/25 blur-3xl" />
          <div className="absolute right-[22%] bottom-[20%] w-40 h-40 rounded-full bg-[#dff6b8]/25 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2
              className="text-center font-normal inline-block"
              style={{
                background: "linear-gradient(90deg, #000 0%, #4C7663 90.05%)",
                color: "transparent",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "SF Pro",
                fontSize: "46px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "48px",
                textTransform: "capitalize",
              }}
            >
              More Than Traditional AI,
              <span className="block">Smarter Than Automation</span>
            </h2>
            <p className="mt-5 text-slate-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              KactusLabs turns a single WhatsApp message into complete business execution on its own through the following features:
            </p>
          </motion.div>

          <div className="relative mt-10 md:mt-12 min-h-[980px] md:min-h-[540px]">
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-[536px] h-[536px]">
              {orbitDots.map((orbit, index) => (
                <div
                  key={orbit.size}
                  className="absolute rounded-full border border-[#d8ddd7]"
                  style={{ width: orbit.size, height: orbit.size }}
                >
                  <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: orbit.duration,
                      repeat: Infinity,
                      ease: "linear",
                      delay: orbit.delay
                    }}
                  >
                    <span className={`absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full ${orbit.color} ${orbit.dotSize} shadow-[0_0_22px_rgba(255,255,255,0.9)]`} />
                  </motion.div>
                </div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative z-10 flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-[0_18px_45px_rgba(11,47,37,0.12)] border border-[#e5ebe5]"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#062f25] shadow-[0_10px_25px_rgba(6,47,37,0.28)]">
                  <img src={logoWithoutName} alt="KactusLab" className="h-8 w-8 object-contain" />
                </div>
              </motion.div>
            </div>

            <div className="md:hidden flex justify-center mb-10">
              <div className="relative flex items-center justify-center w-40 h-40 rounded-full border border-[#d8ddd7]">
                <div className="absolute inset-4 rounded-full border border-[#d8ddd7]" />
                <div className="absolute inset-8 rounded-full border border-[#d8ddd7]" />
                <motion.span
                  className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#A7F3AE]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "0 60px" }}
                />
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-[#062f25]">
                  <img src={logoWithoutName} alt="KactusLab" className="h-9 w-9 object-contain" />
                </div>
              </div>
            </div>

            {aiTestimonials.map((item, index) => (
              <motion.div
                key={`${item.name}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`${item.position} ${item.width || ""} relative z-10 mb-5 md:mb-0 mx-auto md:mx-0 w-full max-w-[430px]`}
              >
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${testimonialAccentStyles[index % testimonialAccentStyles.length].glow} blur-2xl opacity-90`} />
                <div className={`relative p-[1px] rounded-full bg-gradient-to-r ${testimonialAccentStyles[index % testimonialAccentStyles.length].border} ${testimonialAccentStyles[index % testimonialAccentStyles.length].shadow}`}>
                  <div className="relative flex items-center gap-4 rounded-full bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.92)_52%,rgba(249,249,249,0.9)_100%)] backdrop-blur-md px-4 py-3">
                    <div className="absolute inset-0 rounded-full border border-white/80 pointer-events-none" />
                  <img
                    src={item.image}
                    alt={item.name}
                    className="relative z-10 w-14 h-14 md:w-16 md:h-16 rounded-full object-cover shrink-0 ring-4 ring-white/80 shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
                  />
                  <p className="relative z-10 text-sm md:text-base text-[#202020] leading-snug text-center md:text-left">
                    {item.text}
                  </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
     

      <section className="bg-white px-4 pb-14 pt-14 sm:px-6 lg:px-8 md:pb-20 md:pt-20">
        <div className="mx-auto max-w-[1190px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2
              className="text-center font-normal inline-block"
              style={{
                background: "linear-gradient(90deg, #000 0%, #47DDBD 90.05%)",
                color: "transparent",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "SF Pro",
                fontSize: "46px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "48px",
                textTransform: "capitalize",
              }}
            >
              More Than Traditional AI,
              <span className="block">Smarter Than Automation</span>
            </h2>
            <p className="mt-5 text-slate-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              KactusLabs turns a single WhatsApp message into complete business execution on its own through the following features:
            </p>
          </motion.div>

          <div className="mt-[56px] space-y-[18px]">
            <div className="grid grid-cols-1 justify-items-center gap-x-[22px] gap-y-6 xl:grid-cols-3">
              {featureShowcaseCards.slice(0, 3).map((card, index) => (
                <FeatureShowcaseCard
                  key={card.title}
                  card={card}
                  index={index}
                  activeCard={activeFeatureCard}
                  setActiveCard={setActiveFeatureCard}
                  layout={featureShowcaseLayoutMap[index]}
                  activeLayoutMap={featureShowcaseLayoutMap}
                />
              ))}
            </div>

            <div className="grid grid-cols-1 justify-items-center gap-x-[18px] gap-y-6 sm:grid-cols-2 xl:grid-cols-4">
              {featureShowcaseCards.slice(3).map((card, localIndex) => {
                const index = localIndex + 3;

                return (
                  <FeatureShowcaseCard
                    key={card.title}
                    card={card}
                    index={index}
                    activeCard={activeFeatureCard}
                    setActiveCard={setActiveFeatureCard}
                    layout={featureShowcaseLayoutMap[index]}
                    activeLayoutMap={featureShowcaseLayoutMap}
                    compact
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

 <section className="w-full bg-white py-[40px]">
  <div
    className="relative flex h-[396px] w-full items-center overflow-hidden px-6 sm:px-10 md:px-[80px]"
    style={{
      backgroundImage: `url(${handPhone})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }}
  >
    <div className="max-w-[997px] text-white">
      <h2
        className="text-white text-[48px] font-normal leading-[52.5px]"
        style={{ fontFamily: '"SF Pro", sans-serif' }}
      >
        KactusLabs won’t make you switch tabs
      </h2>

      <button className="mt-6 bg-[#dfeac6] text-[#123126] px-6 py-3 rounded-md text-sm font-medium hover:bg-[#ebf3d8] transition">
        Book A Demo
      </button>
    </div>
  </div>
</section>

      <section className="bg-white px-4 py-6 sm:px-6 md:py-8 lg:px-8">
        <div className="mx-auto w-full max-w-[1480px]">
          <div className="bg-white lg:grid lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative flex min-h-[260px] items-center justify-center overflow-hidden px-4 py-4 sm:min-h-[300px] sm:px-8 md:min-h-[360px] md:px-10 md:py-6 lg:px-6 lg:py-4 xl:px-8"
            >
              <motion.img
                src={cardsOutcome}
                alt="KactusLabs outcome cards"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 h-auto w-full max-w-[420px] object-contain drop-shadow-[0_24px_42px_rgba(8,39,31,0.14)] lg:max-w-[450px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex items-center px-6 py-4 sm:px-10 md:px-14 md:py-6 lg:px-8 lg:py-4 xl:px-10"
            >
              <div className="flex w-full max-w-[760px] flex-col items-start">
                <h2
  className="w-full text-[22px] font-normal leading-[1.14] tracking-[-0.025em] text-[#101010] sm:text-[28px] md:text-[34px] lg:text-[38px] xl:text-[40px]"
  style={{
    fontFamily: '"SF Pro", sans-serif',
    textTransform: "capitalize"
  }}
>
  <span className="block">From One Prompt To Complete Solution</span>
  <span className="mt-1 block">Your Business, Just A Chat Away.</span>
</h2>

                <p
                  className="mt-5 max-w-[620px] text-[16px] font-normal leading-[1.6] text-[#8E8E8E] sm:text-[17px] md:text-[18px] lg:text-[18px]"
                  style={{
                    fontFamily: '"SF Pro", sans-serif'
                  }}
                >
                  Discover how KactusLab streamlines your daily business tasks and enhances your workflow with AI.
                </p>

                <button
                  className="mt-9 inline-flex h-[44px] min-w-[140px] items-center justify-center rounded-[4px] border border-[#D4E5C0] bg-[#D4E5C0] px-8 text-[12px] font-medium uppercase tracking-[0.06em] text-[#17362d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#DCE9C9]"
                >
                  Outcome
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    
     

      {/* ENTERPRISE READY */}
      <section className="relative overflow-hidden bg-[#08271f] py-0">
        <div
          className="relative min-h-[460px] w-full bg-cover bg-center bg-no-repeat md:min-h-[440px] lg:min-h-[446px]"
          style={{ backgroundImage: `url(${EnterpriseReadyBg})` }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,243,202,0.12),transparent_46%)]" />

          <div className="relative z-10 mx-auto flex min-h-[460px] w-full max-w-[1400px] flex-col px-5 py-10 sm:px-6 md:min-h-[440px] md:px-10 md:py-8 lg:min-h-[446px]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mx-auto text-center md:pt-5"
            >
              <h2
                className="text-center text-white text-[50px] font-normal leading-normal"
                style={{ fontFamily: '"SF Pro", sans-serif' }}
              >
                Enterprise-Ready
              </h2>
              <p className="mt-1 text-[16px] font-medium leading-relaxed text-white/85 md:text-[18px]">
                Built for scale. Designed for reliability.
              </p>
            </motion.div>

            <div className="relative mt-10 grid gap-8 pb-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 md:mt-0 md:block md:flex-1 md:pb-0">
              {enterpriseCards.map((item, index) => (
                <motion.div
                  key={`${item.title}-${index}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className={`group mx-auto w-full max-w-[265px] text-center sm:max-w-[280px] md:absolute md:m-0 md:max-w-[265px] ${item.position}`}
                >
                  <div className="mx-auto flex h-9 w-9 items-center justify-center border-[0.676px] border-[#D4E5C0] bg-white/6 transition-all duration-300 group-hover:border-[#D4E5C0] group-hover:bg-[#D4E4BF]">
                    <EnterpriseReadyIcon item={item} />
                  </div>

                  <h3 className="mt-5 text-[18px] font-bold leading-tight text-white md:text-[17px] lg:text-[18px]">
                    {item.title}
                  </h3>

                  <p className="mx-auto mt-2 max-w-[245px] text-[15px] leading-[1.4] text-white md:text-[14px] lg:text-[15px]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="mx-auto max-w-[760px] text-center"
          >
            <h2
              className="text-center text-[46px] font-normal leading-[48px] capitalize"
              style={{
                fontFamily: '"SF Pro", sans-serif',
                background: "linear-gradient(90deg, #000 0%, #4C7663 90.05%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Compatible With
            </h2>
            <p className="mx-auto mt-5 max-w-[620px] text-[16px] leading-relaxed text-[#595959] md:text-[18px]">
              KactusLabs turns a single WhatsApp message into complete business.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {logos.map((item, index) => (
              <motion.div
                key={`${item.label}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex h-[164px] items-center justify-center rounded-[12px] border-2 border-[#B4BDBB] bg-white px-[45px] py-[48px]"
              >
                {item.type === "text" ? (
                  <span className="text-center text-[18px] font-semibold text-[#16362D] md:text-[20px]">
                    {item.label}
                  </span>
                ) : (
                  <img
                    src={item.src}
                    alt={item.label}
                    className="max-h-[68px] w-full object-contain"
                  />
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <button
              className="min-w-[181px] rounded-[6px] border-[0.75px] border-[#D4E5C0] px-8 py-3 text-[16px] font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(89deg, #06231C 0.85%, #D4E5C0 175.94%)"
              }}
            >
              Learn more
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="w-full overflow-hidden"
        >
          <img
            src={miranBanne}
            alt="Powered by MIRAN"
            className="block h-[220px] w-full object-cover md:h-[280px] lg:h-[320px]"
          />
        </motion.div>
      </section>

      {/* <section className="overflow-hidden bg-white px-5 pb-16 sm:px-6 md:px-10 md:pb-24">
        <div className="mx-auto max-w-[1320px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="mx-auto max-w-[820px] text-center"
          >
            <h2
              className="text-center text-[46px] font-normal leading-[48px] capitalize"
              style={{
                fontFamily: '"SF Pro", sans-serif',
                background: "linear-gradient(90deg, #000 0%, #4C7663 90.05%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Why Fashion Brands Love KactusLabs
            </h2>
            <p className="mx-auto mt-5 max-w-[700px] text-[16px] leading-relaxed text-[#595959] md:text-[18px]">
              Real stories from brands that reduced returns and increased conversions with KactusLabs.
            </p>
          </motion.div>

          <div className="relative mt-12">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent md:w-24" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent md:w-24" />

            <motion.div
              className="flex w-max gap-5 py-3"
              animate={activeReviewCard === null ? { x: ["0%", "-50%"] } : undefined}
              transition={
                activeReviewCard === null
                  ? { duration: 28, repeat: Infinity, ease: "linear" }
                  : undefined
              }
            >
              {[...reviewCards, ...reviewCards].map((review, index) => {
                const baseIndex = index % reviewCards.length;
                const isActive = activeReviewCard === baseIndex;
                const isDimmed = activeReviewCard !== null && activeReviewCard !== baseIndex;

                return (
                  <motion.article
                    key={`${review.name}-${index}`}
                    onMouseEnter={() => setActiveReviewCard(baseIndex)}
                    onMouseLeave={() => setActiveReviewCard(null)}
                    animate={{
                      scale: isActive ? 1.05 : isDimmed ? 0.94 : 1,
                      y: isActive ? -10 : 0,
                      opacity: isDimmed ? 0.72 : 1
                    }}
                    transition={{ type: "spring", stiffness: 220, damping: 24 }}
                    className="w-[320px] rounded-[18px] border border-[#e5ece7] bg-white p-5 shadow-[0_18px_40px_rgba(9,35,28,0.08)] md:w-[430px]"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="h-14 w-14 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-[22px] font-semibold leading-tight text-[#111111] md:text-[24px]">
                          {review.name}
                        </h3>
                        <p className="mt-1 text-[14px] text-[#7d7d7d]">{review.handle}</p>
                        <div className="mt-3 flex items-center gap-1 text-[#F7C948]">
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <svg
                              key={starIndex}
                              viewBox="0 0 20 20"
                              className="h-[18px] w-[18px] fill-current"
                              aria-hidden="true"
                            >
                              <path d="M10 1.8l2.52 5.1 5.63.82-4.08 3.97.96 5.61L10 14.65 4.97 17.3l.96-5.61-4.08-3.97 5.63-.82L10 1.8z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 inline-flex items-center rounded-[8px] bg-[#E9F7EF] px-4 py-2 text-[13px] font-semibold text-[#185F43]">
                      {review.badge}
                    </div>

                    <p className="mt-5 min-h-[108px] text-[16px] leading-[1.6] text-[#2b2b2b]">
                      {review.text}
                    </p>

                    <button className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-[#111111]">
                      Show more
                      <svg viewBox="0 0 12 8" className="h-2.5 w-3" aria-hidden="true">
                        <path d="M1 1.25L6 6.25L11 1.25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    <p className="mt-5 text-[14px] text-[#8e98aa]">{review.date}</p>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section> */}

      <section className="bg-white px-5 pb-16 sm:px-6 md:px-10 md:pb-24">
        <div className="mx-auto max-w-[820px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="mx-auto text-center"
          >
            <h2
              className="text-[34px] font-medium leading-none md:text-[54px]"
              style={{
                background: "linear-gradient(90deg, #000 0%, #4C7663 90.05%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-5 max-w-[620px] text-[16px] leading-relaxed text-[#595959] md:text-[18px]">
              Find answers to common questions about KactusLabs, onboarding, integrations, and support.
            </p>
          </motion.div>

          <div className="mt-12 border-t border-[#edf0f2]">
            {faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div key={item.question} className="border-b border-[#edf0f2]">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    className="flex w-full items-start justify-between gap-5 py-6 text-left"
                  >
                    <div className="pr-6">
                      <h3
                        className="text-[20px] font-[510] leading-[24px] text-[#101828]"
                        style={{ fontFamily: '"SF Pro", sans-serif' }}
                      >
                        {item.question}
                      </h3>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.p
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: "auto", opacity: 1, marginTop: 14 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            transition={{ duration: 0.28, ease: "easeInOut" }}
                            className="max-w-[650px] overflow-hidden text-[16px] leading-[1.65] text-[#6f7c92]"
                          >
                            {item.answer}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#16362D] text-[#16362D]">
                      {isOpen ? (
                        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true">
                          <path d="M3 8H13" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true">
                          <path d="M3 8H13" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                          <path d="M8 3V13" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </main>
  );
}










