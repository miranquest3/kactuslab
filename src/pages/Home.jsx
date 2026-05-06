import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence, useInView, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion"
import { MagneticButton, SectionTitle, RevealImage, StaggerText } from "../components/AnimatedElements"
import HeroMain from "../assets/images/Home/Hero-Main.png";

import DemoModal from "../components/DemoModal";

import shopifyl from "../assets/images/Home/Icons/shopify.png";
import magentol from "../assets/images/Home/Icons/magento.png";
import woocoml from "../assets/images/Home/Icons/woocom.png";
import cardBg from "../assets/images/Home/cardbg.png";
import whatsappIcon from "../assets/images/Home/whatsapp.svg";
import aiProductIcon from "../assets/images/Home/aiProduct.svg";
import marketResearchIcon from "../assets/images/Home/MARKET RESEARCH.png";
import socialMediaMarketingIcon from "../assets/images/Home/SOCIAL MEDIA MARKETING.png";
import websiteManagementIcon from "../assets/images/Home/web-management 1.png";
import vtoFeatureIcon from "../assets/images/Home/vto.png";
import inventoryManagementIcon from "../assets/images/Home/INVENTORY MANAGEMENT.png";
import enterpriceFast from "../assets/images/Home/enterpriceFast.svg";
import enterpriceRealtime from "../assets/images/Home/enterpriceRealtime.svg";
import enterpriceDown from "../assets/images/Home/enterpricedown.svg";
import enterpriseApi from "../assets/images/Home/enterpriseApi.svg";
import finalBg from "../assets/images/Home/finalBg.png";
import finalHand from "../assets/images/Home/finalHand.png";
import thirdContainerBg from "../assets/images/Home/3rdContainer.png";
import finalWhatsapp from "../assets/images/Home/finalWhatsapp.png";
import cardsOutcome from "../assets/images/Home/cardsOutcome.png";
import graphicAnimation from "../assets/images/Home/graphic animation.mp4";
import poweredBg from "../assets/images/Home/poweredBg.png";
import poweredLeft from "../assets/images/Home/poweredLeft.png";
import poweredRight from "../assets/images/Home/poweredRight.png";
import miranLogo from "../assets/images/Home/MIRAN LOGO.png";
import orbitCardBg from "../assets/images/Home/orbitcard.png";
import logoWithoutName from "../assets/images/Home/logowithoutname.svg";


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
    position: "left-[3.5%] top-[28%] xl:left-[6%] xl:top-[26.5%] 2xl:left-[8%] 2xl:top-[25.5%]",
    entryDelay: 0.34
  },
  {
    title: "API-based Integration",
    description: "Quick setup with API integration",
    icon: enterpriseApi,
    position: "right-[3.5%] top-[28%] xl:right-[6%] xl:top-[26.5%] 2xl:right-[8%] 2xl:top-[25.5%]",
    entryDelay: 0.38
  },
  {
    title: "Real-time Brand Audit",
    description: "Real-time insights into your brand performance",
    icon: enterpriceRealtime,
    position: "left-[22.5%] top-[66%] xl:left-[26%] xl:top-[64%] 2xl:left-[28.5%] 2xl:top-[63%]",
    entryDelay: 0.46
  },
  {
    title: "Zero Downtime",
    description: "Stay live without interruptions",
    icon: enterpriceDown,
    position: "right-[22.5%] top-[66%] xl:right-[26%] xl:top-[64%] 2xl:right-[28.5%] 2xl:top-[63%]",
    entryDelay: 0.5
  }
];

const enterpriseOrbitRings = [
  { radius: 467, strokeOpacity: 1 },
  { radius: 526, strokeOpacity: 1 },
  { radius: 577, strokeOpacity: 0.34 },
  { radius: 629, strokeOpacity: 0.16 },
  { radius: 680, strokeOpacity: 0.10 }
];

const orbitDots = [
  { size: 536, color: "bg-[#A7F3AE]", duration: 18, delay: 0, dotSize: "w-3 h-3" },
  { size: 470, color: "bg-[#D6A7FF]", duration: 15, delay: 0.8, dotSize: "w-3 h-3" },
  { size: 392, color: "bg-[#F7E58C]", duration: 13, delay: 1.2, dotSize: "w-3 h-3" },
  { size: 312, color: "bg-[#F5A3A7]", duration: 11, delay: 0.4, dotSize: "w-3 h-3" },
  { size: 232, color: "bg-[#9BCBFF]", duration: 9, delay: 1.6, dotSize: "w-3 h-3" }
];

const faqListVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.28,
      delayChildren: 0.16
    }
  }
};

const faqItemVariants = {
  hidden: { opacity: 0, x: -64 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

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
    description: "Kactus AI Virtual Try-On, let your customers visualize the fit before checkout. Confidence cuts returns. Boosts conversions. With brand watermark, every share becomes an ad.",
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
    description: "Let Kactus AI handle next actions from engagement through conversion in a single flow.",
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
    description: "Kactus AI provides customers with a visual representation of the outfit along with AI size recommendations before they check out.",
    icon: vtoFeatureIcon,
    iconAlt: "Virtual try-on",
    iconClassName: "h-[72px] w-[72px]",
    buttonLabel: "Know more",
    to: "/vto",
    glow: "rgba(214, 233, 200, 0.34)"
  },
  {
    title: "WHATSAPP MARKETING",
    description: "Provide customers with customized shopping experiences by displaying outfits on their own images in WhatsApp marketing campaigns",
    icon: whatsappIcon,
    iconAlt: "WhatsApp marketing",
    buttonLabel: "Know more",
    to: "/ai-whatsapp-marketing",
    glow: "rgba(194, 233, 220, 0.34)"
  },
  {
    title: "AI PRODUCT PHOTOSHOOT",
    description: "Studio-quality product photoshoot on WhatsApp. Kactus AI turns your product images into high-quality photos saving time and resources.",
    icon: aiProductIcon,
    iconAlt: "AI product photoshoot",
    buttonLabel: "Know more",
    to: "/ai-photoshoot",
    glow: "rgba(233, 242, 220, 0.34)"
  },
  {
    title: "MARKET RESEARCH",
    description: "Kactus AI Market Research helps businesses grow by analysing target audiences, competitors, and market trends.",
    icon: marketResearchIcon,
    iconAlt: "Market research",
    titleWeight: 560,
    buttonLabel: "Coming soon",
    comingSoon: true,
    glow: "rgba(206, 232, 214, 0.28)"
  },
  {
    title: "SOCIAL MEDIA MARKETING",
    description: "Manage Instagram, Facebook, and Gmail accounts by creating posts, engaging with followers, and posting. Kactus AI handles it all.",
    icon: socialMediaMarketingIcon,
    iconAlt: "Social media marketing",
    titleWeight: 560,
    buttonLabel: "Coming soon",
    comingSoon: true,
    glow: "rgba(211, 233, 223, 0.28)"
  },
  {
    title: "WEBSITE MANAGEMENT",
    description: "Manage and update your website entirely through WhatsApp. Change theme, layout, and content hassle free. No developers. No delays.",
    icon: websiteManagementIcon,
    iconAlt: "Website management",
    titleWeight: 560,
    buttonLabel: "Coming soon",
    comingSoon: true,
    glow: "rgba(219, 236, 223, 0.28)"
  },
  {
    title: "INVENTORY MANAGEMENT",
    description: "Kactus AI helps brands avoid stockouts and overstocking of inventories.",
    icon: inventoryManagementIcon,
    iconAlt: "Inventory management",
    titleWeight: 560,
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

const SplitLockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[11px] w-[11px] shrink-0"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
);

const splitCards = [
  {
    id: 1,
    row: "top",
    title: "VIRTUAL TRY - ON",
    desc: "Kactus AI provides customers with a visual representation of the outfit along with AI size recommendations before they check out.",
    icon: vtoFeatureIcon,
    iconAlt: "Virtual try-on",
    iconClassName: "h-[58px] w-[58px]",
    btn: "Know more",
    to: "/vto",
    glow: "rgba(214, 233, 200, 0.34)"
  },
  {
    id: 2,
    row: "top",
    title: "WHATSAPP MARKETING",
    desc: "Provide customers with customized shopping experiences by displaying outfits on their own images in WhatsApp marketing campaigns.",
    icon: whatsappIcon,
    iconAlt: "WhatsApp marketing",
    btn: "Know more",
    to: "/ai-whatsapp-marketing",
    glow: "rgba(194, 233, 220, 0.34)"
  },
  {
    id: 3,
    row: "top",
    title: "AI PRODUCT PHOTOSHOOT",
    desc: "Studio-quality product photoshoot on WhatsApp. Kactus AI turns your product images into high-quality photos saving time and resources.",
    icon: aiProductIcon,
    iconAlt: "AI product photoshoot",
    btn: "Know more",
    to: "/ai-photoshoot",
    glow: "rgba(233, 242, 220, 0.34)"
  },
  {
    id: 4,
    row: "bot",
    title: "MARKET RESEARCH",
    desc: "Kactus AI Market Research helps businesses grow by analysing target audiences, competitors, and market trends.",
    icon: marketResearchIcon,
    iconAlt: "Market research",
    coming: true,
    glow: "rgba(206, 232, 214, 0.28)"
  },
  {
    id: 5,
    row: "bot",
    title: "SOCIAL MEDIA MARKETING",
    desc: "Manage Instagram, Facebook, and Gmail accounts by creating posts, engaging with followers, and posting. Kactus AI handles it all.",
    icon: socialMediaMarketingIcon,
    iconAlt: "Social media marketing",
    coming: true,
    glow: "rgba(211, 233, 223, 0.28)"
  },
  {
    id: 6,
    row: "bot",
    title: "WEBSITE MANAGEMENT",
    desc: "Manage and update your website entirely through WhatsApp. Change theme, layout, and content hassle free. No developers. No delays.",
    icon: websiteManagementIcon,
    iconAlt: "Website management",
    coming: true,
    glow: "rgba(219, 236, 223, 0.28)"
  },
  {
    id: 7,
    row: "bot",
    title: "INVENTORY MANAGEMENT",
    desc: "Kactus AI helps brands avoid stockouts and overstocking of inventories.",
    icon: inventoryManagementIcon,
    iconAlt: "Inventory management",
    coming: true,
    glow: "rgba(228, 236, 210, 0.28)"
  }
];

const FEATURE_SEQUENCE_TOTAL = 2.2;
const FEATURE_CARD_REVEAL_DELAY = 0;
const FEATURE_CARDS_HANDOFF_MS = 220;

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
    question: "Does Kactus AI work across different product categories and collections?",
    answer: "Yes. Kactus AI adapts across product types and collections, ensuring a seamless AI-driven merchandising experience across your entire catalog."
  },
  {
    question: "Is customer data secure and compliant with privacy standards?",
    answer: "Absolutely. We follow strict encryption and compliance standards to ensure all customer data is protected and privacy-safe."
  },
  {
    question: "How quickly does Kactus AI enhance the product experience?",
    answer: "Most brands see improved engagement and conversion metrics within days of integration."
  },
  {
    question: "Can my team manage and update Kactus AI content easily?",
    answer: "Yes. The platform is built for non-technical teams, allowing easy updates and content control without engineering support."
  },
  {
    question: "Does Kactus AI work across mobile, desktop, and storefront views?",
    answer: "Kactus AI is fully responsive and optimized for all devices including embedded storefront environments."
  }
];

function EnterpriseReadyIcon({ item, className = "h-4 w-4" }) {
  return (
    <img
      src={item.icon}
      alt=""
      aria-hidden="true"
      className={`${className} object-contain brightness-0 invert opacity-95`}
    />
  )
}

function EnterpriseReadyOrbitBackground() {
  return (
    <motion.div
      initial={{ opacity: 0.45, scale: 0.985 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: false, amount: 0.45 }}
      className="absolute inset-0 pointer-events-none"
    >
      <div className="absolute inset-0 bg-[#06231C]" />
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.45 }}
        style={{
          background: `
            radial-gradient(72% 88% at 50% -24%, rgba(212, 229, 192, 0.68) 0%, rgba(118, 127, 106, 0.22) 36%, rgba(6, 35, 28, 0) 67%),
            radial-gradient(24% 54% at 2% 64%, rgba(212, 229, 192, 0.18) 0%, rgba(6, 35, 28, 0) 76%),
            radial-gradient(24% 54% at 98% 100%, rgba(212, 229, 192, 0.26) 0%, rgba(6, 35, 28, 0) 74%)
          `
        }}
      />
      <svg
        viewBox="0 0 1440 544"
        className="absolute inset-0 hidden h-full w-full md:block"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {enterpriseOrbitRings.map((ring, index) => (
          <motion.circle
            key={ring.radius}
            cx="720"
            cy="-137"
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
            viewport={{ once: false, amount: 0.45 }}
          />
        ))}
      </svg>
      <svg
        viewBox="0 0 390 516"
        className="absolute inset-0 h-full w-full md:hidden"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {[205, 260, 315].map((radius, index) => (
          <circle
            key={`mobile-enterprise-ring-${radius}`}
            cx="195"
            cy="-34"
            r={radius}
            fill="none"
            stroke="white"
            strokeWidth="1.2"
            strokeOpacity={index === 0 ? 0.12 : index === 1 ? 0.09 : 0.07}
          />
        ))}
      </svg>
    </motion.div>
  )
}

function EnterpriseReadyCenterGlow({ wrapperClassName = "", glowClassName = "" }) {
  const glowRef = useRef(null)
  const isInView = useInView(glowRef, { amount: 0.35 })

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

function EnterpriseReadyHeading({ mobile = false, className = "" }) {
  const headingRef = useRef(null)
  const isInView = useInView(headingRef, { amount: mobile ? 0.2 : 0.45 })

  return (
    <motion.div
      ref={headingRef}
      initial={false}
      animate={
        isInView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: -28, filter: "blur(8px)" }
      }
      transition={
        isInView
          ? { duration: mobile ? 0.78 : 0.82, delay: 0.14, ease: [0.22, 1, 0.36, 1] }
          : { duration: 0.22, ease: "easeOut" }
      }
      className={`relative isolate text-center ${className}`}
      style={{ willChange: "transform, opacity, filter" }}
    >
      <div className="relative z-10">
        <h2
          className={mobile
            ? "whitespace-nowrap text-center text-[34px] font-normal leading-[1.05] tracking-[-0.035em] text-white"
            : "text-[48px] font-normal leading-[1.04] tracking-[-0.035em] text-white lg:text-[54px]"}
          style={{ fontFamily: '"SF Pro", sans-serif' }}
        >
          Enterprise-Ready
        </h2>
        <p
          className={mobile
            ? "mt-4 text-center text-[16px] leading-[1.35] text-white"
            : "mt-2 text-[16px] leading-[1.35] text-white/80 lg:text-[17px]"}
          style={{ fontFamily: '"SF Pro", sans-serif' }}
        >
          Built for scale. Designed for reliability.
        </p>
      </div>
    </motion.div>
  )
}

function EnterpriseReadyCard({ item, index, mobile = false, desktopClassName = "" }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 42,
        filter: "blur(10px)"
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)"
      }}
      transition={{
        duration: 0.8,
        delay: mobile ? index * 0.08 : item.entryDelay,
        ease: [0.22, 1, 0.36, 1]
      }}
      viewport={{ once: false, amount: mobile ? 0.15 : 0.45 }}
      className={
        mobile
          ? "mx-auto w-full text-center"
          : desktopClassName || `absolute w-[190px] text-center ${item.position}`
      }
      style={{ willChange: "transform, opacity, filter" }}
    >
      <div className="mx-auto flex items-center justify-center">
        <EnterpriseReadyIcon
          item={item}
          className={mobile ? "h-[31px] w-[31px]" : "h-[34px] w-[34px] lg:h-[36px] lg:w-[36px]"}
        />
      </div>

      <h3
        className={`text-white ${mobile ? "mt-3 text-[16px] leading-[1.18]" : "mt-[14px] text-[17px] leading-[1.14]"}`}
        style={{
          fontFamily: '"SF Pro", sans-serif',
          fontWeight: mobile ? 600 : 400
        }}
      >
        {item.title}
      </h3>

      <p
        className={`mx-auto ${mobile ? "mt-1.5 max-w-[170px] text-[15px] font-light leading-[1.26]" : "mt-1.5 max-w-[188px] text-[12.5px] leading-[1.34] text-white"}`}
        style={{
          fontFamily: '"SF Pro", sans-serif',
          color: mobile ? "rgba(255, 255, 255, 0.68)" : undefined
        }}
      >
        {item.description}
      </p>
    </motion.div>
  )
}

function FeatureShowcaseCard({
  card,
  index,
  activeCard,
  setActiveCard,
  layout,
  activeLayoutMap: _activeLayoutMap,
  compact = false,
  sequenceActive = false
}) {
  const isActive = activeCard === index
  const glowX = useMotionValue(compact ? 128 : 152)
  const glowY = useMotionValue(compact ? 82 : 90)
  const glowBackground = useMotionTemplate`radial-gradient(circle at ${glowX}px ${glowY}px, ${card.glow} 0%, rgba(255,255,255,0) 46%)`
  const cardSizeClass = compact ? "rounded-[12px]" : "rounded-[14px]"
  const contentClass = compact
    ? "px-[12px] pt-[22px] pb-[12px]"
    : "px-[18px] pt-[32px] pb-[18px]"
  const iconClass = compact ? "h-[42px] w-[42px]" : "h-[58px] w-[58px]"
  const columnCenter = (layout.columnCount - 1) / 2
  const rowDirection = layout.row === 0 ? -1 : 1
  const hoverRotateY = (layout.column - columnCenter) * (compact ? 3.2 : 4)
  const hoverRotateX = compact ? 4 : 4.6
  const revealDelay = FEATURE_CARD_REVEAL_DELAY
  const fromCenterX = -(layout.column - columnCenter) * (compact ? 90 : 110)
  const fromCenterY = -rowDirection * (compact ? 58 : 72)
  const titleStyle = {
    color: "#FFF",
    textAlign: "center",
    fontFamily: '"SF Pro"',
    fontSize: compact ? "13px" : "16px",
    fontStyle: "normal",
    fontWeight: card.titleWeight || 700,
    lineHeight: compact ? "15px" : "19px",
    letterSpacing: "-0.187px",
    textTransform: "uppercase",
    whiteSpace: "nowrap"
  }
  const descriptionStyle = {
    width: "100%",
    maxWidth: compact ? "212px" : "252px",
    textAlign: "center",
    fontFamily: '"SF Pro"',
    fontSize: compact ? "9.5px" : "12.5px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: compact ? "13px" : "18px",
    background: "linear-gradient(90deg, #ECEFFF 25.19%, #FFF 43.88%, #FFC3A9 93.56%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textWrap: "wrap",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: compact ? 3 : 4,
    overflow: "hidden"
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
    glowX.set(compact ? 128 : 152)
    glowY.set(compact ? 82 : 90)
  }

  return (
    <motion.article
      initial={{ opacity: 0, x: fromCenterX, y: fromCenterY, scale: 0.97 }}
      transition={{
        opacity: { duration: 0.62, delay: revealDelay, ease: [0.22, 1, 0.36, 1] },
        x: { duration: 0.62, delay: revealDelay, ease: [0.22, 1, 0.36, 1] },
        y: { duration: 0.62, delay: revealDelay, ease: [0.22, 1, 0.36, 1] },
        scale: { duration: 0.62, delay: revealDelay, ease: [0.22, 1, 0.36, 1] },
        boxShadow: { duration: 0.32 }
      }}
      animate={{
        opacity: sequenceActive ? 1 : 0,
        x: sequenceActive ? 0 : fromCenterX,
        y: sequenceActive ? 0 : fromCenterY,
        scale: sequenceActive ? 1 : 0.97,
        boxShadow: isActive
          ? `0 24px 70px ${card.glow}`
          : "0 18px 48px rgba(4, 36, 26, 0.10)"
      }}
      style={{
        width: compact ? "min(100%, 192px)" : "min(100%, 256px)",
        maxWidth: compact ? "192px" : "256px",
        minHeight: compact ? "255px" : "346px",
        height: compact ? "255px" : "346px",
        transformPerspective: 1400,
        transformStyle: "preserve-3d"
      }}
      whileHover={{
        y: compact ? -5 : -7,
        scale: compact ? 1.02 : 1.024,
        rotateX: hoverRotateX,
        rotateY: hoverRotateY
      }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative mx-auto w-full overflow-hidden ${cardSizeClass}`}
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
            title={compact ? card.description : undefined}
            className={`mx-auto ${compact ? "mt-[8px] min-h-[40px]" : "mt-[12px] min-h-[66px]"}`}
          >
            {card.description}
          </p>
        </div>

        <div className={compact ? "flex w-full flex-1 items-center justify-center pt-[8px]" : "flex w-full flex-1 items-center justify-center pt-[10px]"}>
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
              className={`${card.iconClassName || iconClass} object-contain`}
            />
          )}
        </div>

        <div className={compact ? "mt-[2px] flex w-full justify-center" : "mt-[4px] flex w-full justify-center"}>
          {card.to && !card.comingSoon ? (
            <Link
              to={card.to}
              className="inline-flex items-center justify-center gap-2 text-[13px] text-white transition-all duration-300 hover:translate-y-[-1px]"
              style={{
                width: compact ? "102px" : "132px",
                height: compact ? "24px" : "30px",
                borderRadius: "6px",
                border: "0.841px solid rgba(243, 238, 255, 0.08)",
                background: "linear-gradient(90deg, rgba(212, 229, 192, 0.39) 0.24%, rgba(118, 127, 106, 0.22) 127.22%)",
                fontFamily: '"SF Pro"',
                fontStyle: "normal",
                fontWeight: 510,
                lineHeight: "normal",
                fontSize: compact ? "10px" : "11.5px"
              }}
            >
              {card.buttonLabel}
            </Link>
          ) : (
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 text-[13px] text-white transition-all duration-300 hover:translate-y-[-1px]"
              style={{
                width: compact ? "102px" : "132px",
                height: compact ? "24px" : "30px",
                borderRadius: "6px",
                border: "0.841px solid rgba(243, 238, 255, 0.08)",
                background: "linear-gradient(90deg, rgba(212, 229, 192, 0.39) 0.24%, rgba(118, 127, 106, 0.22) 127.22%)",
                fontFamily: '"SF Pro"',
                fontStyle: "normal",
                fontWeight: 510,
                lineHeight: "normal",
                fontSize: compact ? "10px" : "11.5px"
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
          )}
        </div>
      </div>
    </motion.article>
  )
}

function FeatureShowcaseIntroPanel({ active }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-[16px]">
      <motion.div
        className="absolute inset-0"
        initial={false}
        animate={active ? { opacity: [1, 1, 1, 1, 0], scale: [1, 1, 1, 1, 1.01] } : { opacity: 1, scale: 1 }}
        transition={{
          duration: FEATURE_SEQUENCE_TOTAL,
          times: [0, 0.86, 0.94, 0.98, 1],
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        <div className="absolute inset-0 bg-[#042f25]" />
        <div className="absolute -left-16 -top-14 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(212,229,192,0.34)_0%,rgba(212,229,192,0)_72%)] blur-[54px]" />
        <div className="absolute -bottom-20 -right-14 h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(212,229,192,0.20)_0%,rgba(212,229,192,0)_74%)] blur-[62px]" />
        <FeatureShowcaseCutLines active={active} />

        <div className="absolute inset-0 flex items-center justify-center px-6">
            <motion.p
              className="text-white"
              initial={{ opacity: 1, filter: "blur(16px)", scale: 1 }}
            animate={active
              ? {
                  opacity: [1, 1, 1, 1, 0],
                  filter: ["blur(16px)", "blur(16px)", "blur(0px)", "blur(0px)", "blur(0px)"],
                  scale: [1, 1, 1, 1, 1]
                }
              : { opacity: 1, filter: "blur(18px)", scale: 1 }}
            transition={{
              duration: FEATURE_SEQUENCE_TOTAL,
              times: [0, 0.2, 0.48, 0.78, 1],
              ease: [0.22, 1, 0.36, 1]
            }}
            style={{
              width: "880px",
              maxWidth: "100%",
              color: "#FFF",
              textAlign: "center",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: "67px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "80px",
              letterSpacing: "-2.01px"
            }}
          >
            <span className="block">We honor the hands</span>
            <span className="block">that build your brand</span>
          </motion.p>
        </div>
      </motion.div>
    </div>
  )
}

function FeatureShowcaseCutLines({ active }) {
  const cutLines = [
    "M0 190 L1000 190",
    "M0 400 L1000 400",
    "M333 72 L333 410",
    "M666 72 L666 410",
    "M250 410 L250 650",
    "M500 410 L500 650",
    "M750 410 L750 650",
    "M0 650 L140 650 L210 520 L260 650 L1000 650",
    "M0 370 L115 370 L190 330 L220 650",
    "M1000 370 L885 650 L860 420 L700 650",
    "M370 650 L620 330",
    "M430 650 L760 440"
  ]
  return (
    <motion.svg
      viewBox="0 0 1000 650"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full"
      initial={false}
      animate={
        active
          ? { opacity: [0, 0, 0.42, 0.22, 0] }
          : { opacity: 0 }
      }
      transition={{
        duration: FEATURE_SEQUENCE_TOTAL,
        times: [0, 0.5, 0.72, 0.9, 1],
        ease: [0.22, 1, 0.36, 1]
      }}
      aria-hidden="true"
    >
      {cutLines.map((path, index) => (
        <motion.path
          key={path}
          d={path}
          fill="none"
          stroke="rgba(206, 225, 197, 0.42)"
          strokeWidth={index < 8 ? 1 : 1.25}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={index >= 8 ? "6 6" : "0"}
          initial={false}
          animate={
            active
              ? { pathLength: [0, 0, 1, 1], opacity: [0, 0, 1, 0.78] }
              : { pathLength: 0, opacity: 0 }
          }
          transition={{
            duration: FEATURE_SEQUENCE_TOTAL,
            times: [0, 0.54 + index * 0.008, 0.82 + index * 0.003, 1],
            ease: [0.22, 1, 0.36, 1]
          }}
        />
      ))}
    </motion.svg>
  )
}

function CardSplitSection() {
  const sectionRef = useRef(null);
  const mobileScrollRef = useRef(null);
  const mobileResumeTimerRef = useRef(null);
  const [phase, setPhase] = useState("blur");
  const [mobileCarouselPaused, setMobileCarouselPaused] = useState(false);
  const [activeMobileCardIndex, setActiveMobileCardIndex] = useState(0);
  const sectionInView = useInView(sectionRef, { amount: 0.35, once: true });

  useEffect(() => {
    if (!sectionInView) return;

    setPhase("blur");
    const clearTimer = setTimeout(() => setPhase("clear"), 700);
    const linesTimer = setTimeout(() => setPhase("lines"), 1900);
    const spreadTimer = setTimeout(() => setPhase("spread"), 3300);

    return () => {
      clearTimeout(clearTimer);
      clearTimeout(linesTimer);
      clearTimeout(spreadTimer);
    };
  }, [sectionInView]);

  useEffect(() => {
    return () => {
      if (mobileResumeTimerRef.current) {
        clearTimeout(mobileResumeTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const scroller = mobileScrollRef.current;
    if (!scroller) return undefined;

    const setInitialPosition = () => {
      const loopWidth = scroller.scrollWidth / 3;
      if (loopWidth > 0 && scroller.scrollLeft < 8) {
        scroller.scrollLeft = loopWidth;
      }
    };

    const initialTimer = window.setTimeout(setInitialPosition, 0);
    window.addEventListener("resize", setInitialPosition);

    return () => {
      window.clearTimeout(initialTimer);
      window.removeEventListener("resize", setInitialPosition);
    };
  }, []);

  const pauseMobileCarousel = (resumeDelay = 0) => {
    if (mobileResumeTimerRef.current) {
      clearTimeout(mobileResumeTimerRef.current);
    }

    setMobileCarouselPaused(true);

    if (resumeDelay > 0) {
      mobileResumeTimerRef.current = setTimeout(() => {
        setMobileCarouselPaused(false);
      }, resumeDelay);
    }
  };

  const resumeMobileCarousel = (delay = 900) => {
    if (mobileResumeTimerRef.current) {
      clearTimeout(mobileResumeTimerRef.current);
    }

    mobileResumeTimerRef.current = setTimeout(() => {
      setMobileCarouselPaused(false);
    }, delay);
  };

  const syncMobileCarouselIndex = () => {
    const scroller = mobileScrollRef.current;
    if (!scroller) return;

    const loopWidth = scroller.scrollWidth / 3;
    if (loopWidth <= 0) return;

    if (scroller.scrollLeft >= loopWidth * 2) {
      scroller.scrollLeft -= loopWidth;
    } else if (scroller.scrollLeft <= 0) {
      scroller.scrollLeft += loopWidth;
    }

    const firstCard = scroller.querySelector("[data-mobile-feature-card]");
    const cardStep = firstCard ? firstCard.getBoundingClientRect().width + 12 : 304;
    const normalizedScrollLeft = ((scroller.scrollLeft % loopWidth) + loopWidth) % loopWidth;
    const nextIndex = Math.round(normalizedScrollLeft / cardStep) % splitCards.length;
    setActiveMobileCardIndex(nextIndex);
  };

  useEffect(() => {
    if (mobileCarouselPaused) return undefined;

    const scroller = mobileScrollRef.current;
    if (!scroller) return undefined;

    let frameId;
    let previousTime;
    const speed = 0.075;

    const step = (time) => {
      if (previousTime === undefined) previousTime = time;
      const delta = time - previousTime;
      previousTime = time;

      const loopWidth = scroller.scrollWidth / 3;
      if (loopWidth > 0) {
        scroller.scrollLeft += delta * speed;
        if (scroller.scrollLeft >= loopWidth * 2) {
          scroller.scrollLeft -= loopWidth;
        }
        syncMobileCarouselIndex();
      }

      frameId = window.requestAnimationFrame(step);
    };

    frameId = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(frameId);
  }, [mobileCarouselPaused]);

  const spreading = phase === "spread";
  const textVisible = phase === "blur" || phase === "clear";
  const linesVisible = phase === "lines";
  const topCards = splitCards.filter((card) => card.row === "top");
  const bottomCards = splitCards.filter((card) => card.row === "bot");

  return (
    <section ref={sectionRef} className="relative overflow-visible bg-white px-4 py-8 font-['SF_Pro',sans-serif] sm:px-6 md:py-12 lg:px-8">
      <div className="mx-auto w-full max-w-[1190px]">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="inline-block text-center text-[34px] font-normal leading-[38px] capitalize md:text-[46px] md:leading-[48px]"
            style={{
              background: "linear-gradient(90deg, #000 0%, #47DDBD 90.05%)",
              color: "transparent",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "SF Pro",
              fontStyle: "normal",
              fontWeight: 400
            }}
          >
            More Than Traditional AI,
            <span className="block">Smarter Than Automation</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-[1.45] tracking-normal text-slate-500 md:text-lg md:leading-[1.45]">
            Kactus AI turns a single WhatsApp message into complete business execution on its own through the following features:
          </p>
        </div>
      </div>

      <div className="mt-8 overflow-hidden md:hidden">
        <style>{`
          .kactus-mobile-card-scroller {
            scrollbar-width: none;
            -ms-overflow-style: none;
            overscroll-behavior-x: contain;
            touch-action: pan-x pan-y;
            -webkit-overflow-scrolling: touch;
          }

          .kactus-mobile-card-scroller::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div
          ref={mobileScrollRef}
          className="kactus-mobile-card-scroller -mx-4 overflow-x-auto pl-4 sm:-mx-6 sm:pl-6"
          onPointerDown={() => pauseMobileCarousel()}
          onPointerUp={() => resumeMobileCarousel()}
          onPointerCancel={() => resumeMobileCarousel()}
          onScroll={syncMobileCarouselIndex}
        >
          <div
            className="flex w-max gap-3 pr-3"
          >
            {[...splitCards, ...splitCards, ...splitCards].map((card, index) => (
              <MobileFeatureCard
                key={`${card.id}-mobile-${index}`}
                card={card}
                duplicate={index < splitCards.length || index >= splitCards.length * 2}
                onPause={pauseMobileCarousel}
                onResume={resumeMobileCarousel}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-[9px]" aria-hidden="true">
          {splitCards.map((card, index) => (
            <span
              key={`mobile-feature-dot-${card.id}`}
              className={`h-[10px] rounded-full transition-all duration-300 ${
                activeMobileCardIndex === index ? "w-[24px] bg-[#062f25]" : "w-[10px] bg-[#d9ded8]"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-[56px] hidden items-center justify-center md:flex">
        <div
          className="relative mx-auto h-[625px] min-h-[625px] w-full max-w-[810px] transition-colors duration-700"
          style={{
            backgroundColor: "transparent",
            borderRadius: spreading ? 0 : "14px",
            overflow: spreading ? "visible" : "hidden",
            boxShadow: spreading ? "none" : "0 22px 70px rgba(4, 36, 26, 0.10)",
            transition: "background-color 1.25s ease, border-radius 0.9s ease, box-shadow 0.9s ease"
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 z-[15]"
            style={{
              opacity: spreading ? 0 : 1,
              transition: "opacity 1.25s cubic-bezier(0.22,1,0.36,1)",
              backgroundImage: `
                radial-gradient(circle at 0% 2%, rgba(203,223,197,0.42) 0%, rgba(130,161,136,0.26) 16%, rgba(5,43,31,0) 38%),
                radial-gradient(circle at 100% 100%, rgba(203,223,197,0.38) 0%, rgba(127,157,132,0.24) 18%, rgba(5,43,31,0) 42%),
                linear-gradient(135deg, #0b2f22 0%, #062d22 45%, #082f23 100%)
              `
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 z-[16]"
            style={{
              opacity: spreading ? 0 : 0.16,
              transition: "opacity 1.25s cubic-bezier(0.22,1,0.36,1)",
              backgroundImage: `url(${cardBg})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              mixBlendMode: "soft-light"
            }}
          />

          <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center px-6 transition-opacity duration-500" style={{ opacity: textVisible ? 1 : 0 }}>
            <p
              className="max-w-[880px] text-center font-normal text-white"
              style={{
                fontFamily: "Helvetica, Arial, sans-serif",
                fontSize: "clamp(34px, 4.05vw, 52px)",
                fontStyle: "normal",
                lineHeight: "1.2",
                letterSpacing: "-1.56px",
                filter: phase === "blur" ? "blur(12px)" : "blur(0px)",
                opacity: phase === "blur" ? 0.82 : 1,
                transform: phase === "blur" ? "scale(1.015)" : "scale(1)",
                transition: "filter 1.15s cubic-bezier(0.22,1,0.36,1), opacity 1.15s ease, transform 1.15s cubic-bezier(0.22,1,0.36,1)"
              }}
            >
              <span className="block whitespace-nowrap">&ldquo; We honor the hands that build</span>
              <span className="block">your brand &rdquo;</span>
            </p>
          </div>

          {["33.33%", "66.66%"].map((left) => (
            <div key={`top-${left}`} className="absolute top-0 z-20 h-[346px] w-px bg-white/20 transition-opacity duration-300" style={{ left, opacity: linesVisible ? 1 : 0, transition: "opacity 0.9s ease" }} />
          ))}
          {["25%", "50%", "75%"].map((left) => (
            <div key={`bottom-${left}`} className="absolute top-[346px] z-20 h-[279px] w-px bg-white/20 transition-opacity duration-300" style={{ left, opacity: linesVisible ? 1 : 0, transition: "opacity 0.9s ease" }} />
          ))}

          <div
            className="absolute left-0 top-[346px] z-[21] h-px bg-white/30"
            style={{
              width: phase === "lines" || spreading ? "100%" : 0,
              opacity: phase === "lines" ? 1 : 0,
              transition: phase === "lines" ? "width 1.15s cubic-bezier(0.4,0,0.2,1)" : spreading ? "opacity 0.55s ease" : "none"
            }}
          />

          <div
            className="absolute top-0 z-10 flex"
            style={{
              left: 0,
              right: 0,
              width: "100%",
              height: "346px",
              transform: "translateY(0)",
              gap: spreading ? "21px" : 0,
              padding: 0,
              transition: spreading ? "gap 1.25s cubic-bezier(0.22,1,0.36,1)" : "none"
            }}
          >
            {topCards.map((card, index) => (
              <SplitCard key={card.id} card={card} index={index} count={topCards.length} spreading={spreading} top />
            ))}
          </div>

          <div
            className="absolute z-10 flex"
            style={{
              left: 0,
              right: 0,
              top: spreading ? "370px" : "346px",
              bottom: spreading ? "auto" : 0,
              width: "100%",
              height: spreading ? "255px" : "auto",
              transform: "translateY(0)",
              gap: spreading ? "14px" : 0,
              padding: 0,
              transition: spreading ? "top 1.25s cubic-bezier(0.22,1,0.36,1), height 1.25s cubic-bezier(0.22,1,0.36,1), gap 1.25s cubic-bezier(0.22,1,0.36,1)" : "none"
            }}
          >
            {bottomCards.map((card, index) => (
              <SplitCard key={card.id} card={card} index={index} count={bottomCards.length} spreading={spreading} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileFeatureCard({ card, duplicate = false, onPause, onResume }) {
  return (
    <article
      data-mobile-feature-card
      aria-hidden={duplicate ? "true" : undefined}
      className="relative h-[402px] w-[292px] flex-none overflow-hidden rounded-[8px] bg-[#052d23] px-6 pb-9 pt-[50px] text-center shadow-[0_18px_48px_rgba(4,36,26,0.12)]"
      onFocus={() => onPause?.()}
      onBlur={() => onResume?.()}
    >
      <img
        src={cardBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(214,233,200,0.34)_0%,rgba(118,127,106,0.22)_28%,rgba(6,47,37,0)_58%)]"
      />

      <div className="relative z-10 flex h-full flex-col items-center">
        <h3
          className="min-h-[22px] whitespace-nowrap text-[17px] font-[500] leading-[22px] text-white"
          style={{ fontFamily: "SF Pro", letterSpacing: "-0.187px" }}
        >
          {card.title}
        </h3>

        <p
          className="mt-5 min-h-[74px] max-w-[236px] bg-[linear-gradient(90deg,#ECEFFF_25.19%,#FFF_43.88%,#FFC3A9_93.56%)] bg-clip-text text-[14px] font-normal leading-[17px] text-transparent"
          style={{ fontFamily: "SF Pro" }}
        >
          {card.desc}
        </p>

        <div className="flex flex-1 items-center justify-center pb-2 pt-6">
          <img
            src={card.icon}
            alt={card.iconAlt}
            className={`${card.iconClassName || "h-[72px] w-[72px]"} object-contain opacity-90`}
          />
        </div>

        {card.to && !card.coming ? (
          <Link
            to={card.to}
            className="inline-flex h-[31px] w-[142px] items-center justify-center rounded-[5px] bg-[#D4E5C0]/65 text-[12px] font-[600] text-white"
            style={{ fontFamily: "SF Pro" }}
          >
            {card.btn}
          </Link>
        ) : (
          <button
            type="button"
            className="inline-flex h-[31px] w-[142px] items-center justify-center rounded-[5px] bg-[#D4E5C0]/65 text-[12px] font-[600] text-white"
            style={{ fontFamily: "SF Pro" }}
          >
            {card.coming ? "Coming soon" : card.btn}
          </button>
        )}
      </div>
    </article>
  );
}

function SplitCard({ card, index, count, spreading, top = false }) {
  const [showContent, setShowContent] = useState(false);
  const glowX = useMotionValue(top ? 152 : 128);
  const glowY = useMotionValue(top ? 90 : 82);
  const glowBackground = useMotionTemplate`radial-gradient(circle at ${glowX}px ${glowY}px, ${card.glow || "rgba(214,233,200,0.24)"} 0%, rgba(255,255,255,0) 46%)`;
  const flipDelay = 1.05 + index * 0.12;
  const flipDuration = 1.15;
  const contentVisible = spreading && showContent;

  useEffect(() => {
    if (!spreading) {
      setShowContent(false);
      return undefined;
    }

    setShowContent(false);
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, (flipDelay + flipDuration) * 1000);

    return () => clearTimeout(contentTimer);
  }, [spreading, flipDelay, flipDuration]);

  const closedRadius = top
    ? index === 0
      ? "14px 0 0 0"
      : index === count - 1
        ? "0 14px 0 0"
        : 0
    : index === 0
      ? "0 0 0 14px"
      : index === count - 1
        ? "0 0 14px 0"
        : 0;

  return (
    <motion.article
      className="group relative overflow-hidden"
      animate={spreading ? { rotateY: 180 } : { rotateY: 0 }}
      style={{
        flex: "1 1 0",
        width: "auto",
        height: "100%",
        borderRadius: spreading ? 14 : closedRadius,
        boxShadow: spreading ? "0 18px 48px rgba(4,36,26,0.10)" : "none",
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
        backfaceVisibility: "visible",
        WebkitBackfaceVisibility: "visible",
        willChange: "transform, border-radius, box-shadow",
        transition: `border-radius 0.85s ease, box-shadow 0.9s ease ${index * 0.08}s`
      }}
      whileHover={spreading ? { y: top ? -7 : 7, scale: 1.018, rotateX: top ? 3 : -3 } : undefined}
      transition={{
        rotateY: {
          duration: flipDuration,
          delay: flipDelay,
          ease: [0.22, 1, 0.36, 1]
        },
        type: "spring",
        stiffness: 230,
        damping: 24
      }}
      onMouseMove={(event) => {
        if (!spreading) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        glowX.set(event.clientX - bounds.left);
        glowY.set(event.clientY - bounds.top);
      }}
      onMouseLeave={() => {
        glowX.set(top ? 152 : 128);
        glowY.set(top ? 90 : 82);
      }}
    >
      <img src={cardBg} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
      <motion.div className="pointer-events-none absolute inset-0 opacity-80 transition-opacity duration-300 group-hover:opacity-100" style={{ backgroundImage: glowBackground }} />
      <div className="pointer-events-none absolute inset-0 border border-white/10" />

      <div
        className="relative z-[1] flex h-full w-full flex-col items-center text-center"
        style={{
          padding: top ? "32px 18px 18px" : "22px 12px 12px",
          opacity: contentVisible ? 1 : 0,
          transform: "rotateY(180deg)",
          backfaceVisibility: "visible",
          WebkitBackfaceVisibility: "visible",
          transition: "opacity 0.22s ease"
        }}
      >
        <h3
          className="flex min-h-[20px] w-full items-center justify-center whitespace-nowrap text-white transition-all"
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? "translateY(0)" : `translateY(${top ? "-4px" : "4px"})`,
            transition: "opacity 0.18s ease, transform 0.18s ease",
            fontFamily: "SF Pro",
            fontSize: top ? "16px" : "13px",
            fontWeight: 500,
            lineHeight: top ? "19px" : "15px",
            letterSpacing: "-0.187px"
          }}
        >
          {card.title}
        </h3>
        <p
          className="line-clamp-4 w-full bg-[linear-gradient(90deg,#ECEFFF_25.19%,#FFF_43.88%,#FFC3A9_93.56%)] bg-clip-text text-transparent transition-opacity"
          style={{
            opacity: contentVisible ? 1 : 0,
            transition: "opacity 0.18s ease",
            maxWidth: top ? "252px" : "172px",
            minHeight: top ? "66px" : "40px",
            marginTop: top ? "12px" : "8px",
            fontFamily: "SF Pro",
            fontSize: top ? "12.5px" : "9.5px",
            lineHeight: top ? "18px" : "13px"
          }}
        >
          {card.desc}
        </p>
        <div className="flex w-full flex-1 items-center justify-center transition-opacity" style={{ opacity: contentVisible ? 1 : 0, transition: "opacity 0.18s ease", paddingTop: top ? "10px" : "8px" }}>
          <img src={card.icon} alt={card.iconAlt} className={`${top ? card.iconClassName || "h-[58px] w-[58px]" : "h-[42px] w-[42px]"} object-contain`} />
        </div>
        <div className="transition-opacity" style={{ opacity: contentVisible ? 1 : 0, transition: "opacity 0.18s ease" }}>
          {card.to && !card.coming ? (
            <Link
              to={card.to}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-[6px] border border-white/10 font-medium text-white transition-transform duration-300 group-hover:-translate-y-0.5"
              style={{
                width: top ? "132px" : "124px",
                height: top ? "30px" : "24px",
                background: "linear-gradient(90deg, rgba(212, 229, 192, 0.39) 0.24%, rgba(118, 127, 106, 0.22) 127.22%)",
                fontSize: top ? "11.5px" : "10px",
                fontFamily: "SF Pro",
                gap: top ? "8px" : "6px",
                paddingInline: top ? "16px" : "10px"
              }}
            >
              {card.btn}
            </Link>
          ) : (
            <button
              type="button"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-[6px] border border-white/10 font-medium text-white transition-transform duration-300 group-hover:-translate-y-0.5"
              style={{
                width: top ? "132px" : "124px",
                height: top ? "30px" : "24px",
                background: "linear-gradient(90deg, rgba(212, 229, 192, 0.39) 0.24%, rgba(118, 127, 106, 0.22) 127.22%)",
                fontSize: top ? "11.5px" : "10px",
                fontFamily: "SF Pro",
                gap: top ? "8px" : "6px",
                paddingInline: top ? "16px" : "10px"
              }}
            >
              {card.coming ? (
                <>
                  <SplitLockIcon /> Coming soon
                </>
              ) : (
                card.btn
              )}
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
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

function CompatibleLogoCard({ item, index, compact = false }) {
  const isShopify = item.label === "Shopify"
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const translateZ = useMotionValue(0)

  const springConfig = { stiffness: 200, damping: 18, mass: 0.6 }
  const smoothRotateX = useSpring(rotateX, springConfig)
  const smoothRotateY = useSpring(rotateY, springConfig)
  const smoothTranslateZ = useSpring(translateZ, springConfig)

  const handleMouseMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - bounds.left
    const y = event.clientY - bounds.top
    const halfWidth = bounds.width / 2
    const halfHeight = bounds.height / 2

    rotateY.set(((x - halfWidth) / halfWidth) * 7)
    rotateX.set(-((y - halfHeight) / halfHeight) * 7)
    translateZ.set(10)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    translateZ.set(0)
  }

  return (
    <motion.div
      key={`${item.label}-${index}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: false, amount: 0.35 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformPerspective: 1000,
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        z: smoothTranslateZ
      }}
      className={`group flex items-center justify-center rounded-[8px] border-2 border-[#B4BDBB] bg-white shadow-[0_14px_36px_rgba(4,36,26,0.08)] transition-shadow duration-300 hover:shadow-[0_22px_42px_rgba(4,36,26,0.16)] ${
        isShopify ? "cursor-pointer" : ""
      } ${
        compact
          ? "h-[116px] w-[178px] px-7 py-8 md:h-[164px] md:w-[260px] md:px-[45px] md:py-[48px]"
          : "h-[164px] px-[45px] py-[48px]"
      }`}
    >
      {isShopify ? (
        <Link to="/shopify" aria-label="Open Shopify page" className="flex h-full w-full items-center justify-center">
          <motion.img
            src={item.src}
            alt={item.label}
            style={{ z: smoothTranslateZ }}
            className="max-h-[58px] w-full object-contain md:max-h-[68px]"
          />
        </Link>
      ) : item.type === "text" ? (
          <motion.span
            style={{ z: smoothTranslateZ }}
            className="text-center text-[17px] font-semibold text-[#16362D] md:text-[20px]"
          >
            {item.label}
          </motion.span>
      ) : (
        <motion.img
          src={item.src}
          alt={item.label}
          style={{ z: smoothTranslateZ }}
          className="max-h-[58px] w-full object-contain md:max-h-[68px]"
        />
      )}
    </motion.div>
  )
}

function InteractiveFeatureOrbit({ cards, activeIndex, setActiveIndex }) {
  const activeCard = cards[activeIndex]
  const desktopOrbitSize = 548
  const iconOrbitSize = 424
  const iconOrbitDuration = 18
  const iconOrbitRadius = iconOrbitSize / 2

  return (
    <section className="relative overflow-hidden bg-white px-4 py-8 sm:px-6 lg:px-8 md:py-12">
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
                <motion.div
                  className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#06231C] shadow-[0_12px_28px_rgba(6,47,37,0.28)]"
                  animate={{
                    opacity: [1, 0.55, 1],
                    scale: [1, 1.06, 1]
                  }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <img src={logoWithoutName} alt="Kactus AI" className="h-8 w-8 object-contain md:h-9 md:w-9" />
                </motion.div>
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
  const [activeReviewCard, setActiveReviewCard] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const heroRevealY = useTransform(scrollY, [0, 500], [0, 150]);
  const blobY1 = useTransform(scrollY, [0, 500], [0, 100]);
  const blobY2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <main className="demo-page bg-[#F5F6F2] text-slate-800">

      <section className="relative min-h-[100svh] overflow-hidden lg:h-screen">

  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-no-repeat"
    style={{
      backgroundImage: `url(${finalBg})`,
      backgroundPosition: "center center",
    }}
  />

  {/* DARK OVERLAY */}
  <div
    className="absolute inset-0 lg:hidden"
    style={{
      background:
        "linear-gradient(180deg, rgba(70, 92, 73, 0.82) 0%, rgba(6, 35, 28, 0.7) 28%, rgba(0, 0, 0, 0.88) 100%)",
    }}
  />

  <div
    className="absolute inset-0 hidden lg:block"
    style={{
      background:
        "linear-gradient(90deg, rgba(2, 21, 16, 0.34) 0%, rgba(4, 40, 31, 0.14) 42%, rgba(17, 111, 96, 0.02) 100%)",
    }}
  />

  {/* CONTENT */}
  {/* CONTENT */}
<div className="relative z-10 flex min-h-[100svh] items-start justify-center lg:h-full lg:items-center lg:justify-start">
  <div className="w-full px-5 pb-[96px] pt-[108px] sm:px-8 sm:pt-[116px] md:pt-[128px] lg:px-0 lg:py-[60px]">
      <div className="mx-auto flex max-w-[340px] flex-col items-center text-center sm:max-w-[420px] md:max-w-[520px] lg:mx-0 lg:max-w-none lg:items-start lg:pl-[122px] lg:text-left xl:pl-[120px]">
      <h1
        className="max-w-[310px] text-[34px] leading-[0.96] tracking-[-0.03em] text-white sm:max-w-[360px] sm:text-[42px] md:max-w-[430px] md:text-[48px] lg:max-w-none lg:w-fit lg:text-[54px] lg:leading-[0.95] lg:whitespace-nowrap"
        style={{
          color: "#FFF",
          fontFamily: "SF Pro",
          fontStyle: "normal",
          fontWeight: 400,
        }}
      >
        Kactus AI For Businesses
      </h1>

      <p
        className="mt-[12px] max-w-[calc(100vw-32px)] text-[clamp(12px,3.45vw,14px)] leading-[1.45] text-white sm:max-w-none sm:text-[16px] md:mt-[14px] md:text-[18px] lg:mt-[8px] lg:max-w-[432px] lg:text-[16px] lg:leading-[1.22] lg:text-white/85"
        style={{
          fontFamily: "SF Pro",
          fontStyle: "normal",
          fontWeight: 274,
        }}
      >
        <span className="block whitespace-nowrap">Kactus AI provides an autonomous system to manage</span>
        <span className="block whitespace-nowrap">businesses via WhatsApp</span>
      </p>

      <Link
        to="/contact"
        className="absolute bottom-[22px] left-1/2 inline-flex -translate-x-1/2 items-center justify-center rounded-[4px] bg-[#DCE8B7] text-[#06231C] uppercase tracking-[0.02em] transition-transform duration-300 hover:-translate-y-0.5 sm:bottom-[28px] md:bottom-[34px] lg:static lg:mt-[18px] lg:translate-x-0"
        style={{
          width: "132px",
          height: "35px",
          fontFamily: "SF Pro",
          fontSize: "11px",
          fontWeight: 500,
        }}
      >
        Book A Demo
      </Link>
      </div>
    </div>
  </div>

  <div
    aria-hidden="true"
    className="pointer-events-none absolute bottom-[58px] left-1/2 z-[9] h-[58svh] max-h-[520px] -translate-x-1/2 sm:bottom-[62px] sm:h-[60svh] sm:max-h-[600px] md:bottom-[70px] md:h-[62svh] md:max-h-[680px] lg:bottom-0 lg:left-auto lg:right-[7%] lg:h-[78svh] lg:max-h-[640px] lg:translate-x-0"
  >
    <img
      src={finalHand}
      alt=""
      className="h-full w-auto object-contain"
    />

    <div className="absolute left-1/2 top-[18%] h-[18%] w-[27%] -translate-x-1/2 lg:left-[30.6%] lg:top-[0.4%] lg:h-[38%] lg:w-[45%] lg:translate-x-0">
      <motion.div
        className="absolute inset-[8%] rounded-full blur-[12px] lg:inset-0 lg:blur-[73px]"
        style={{
          borderRadius: "672.42px",
          background: "radial-gradient(77.33% 77.33% at 50% 50%, #F6FFEB 0%, #5E9E6D 62.07%)"
        }}
        animate={{
          opacity: [0.12, 0.34, 0.2, 0.38, 0.14],
          scale: [0.98, 1.06, 1, 1.09, 0.99]
        }}
        transition={{
          duration: 5.8,
          ease: "easeInOut",
          repeat: Infinity
        }}
      />
      <motion.div
        className="absolute inset-[16%] rounded-full blur-[3px] lg:inset-[6%] lg:blur-[8px]"
        style={{
          background:
            "radial-gradient(circle, rgba(241,255,225,0.72) 0%, rgba(200,247,207,0.22) 54%, rgba(143,222,163,0.06) 72%, rgba(143,222,163,0) 100%)",
        }}
        animate={{
          opacity: [0.16, 0.46, 0.24, 0.5, 0.18],
          scale: [0.99, 1.04, 1.01, 1.05, 1]
        }}
        transition={{
          duration: 5.8,
          ease: "easeInOut",
          repeat: Infinity
        }}
      />
    </div>
  </div>

</section>

      {/* <section className="relative bg-white pt-10 pb-10 md:pt-10 md:pb-10 overflow-hidden">
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
            <p className="mx-auto mt-5 max-w-2xl text-base leading-[1.45] tracking-normal text-slate-500 md:text-lg md:leading-[1.45]">
              Kactus AI turns a single WhatsApp message into complete business execution on its own through the following features:
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
                  <img src={logoWithoutName} alt="Kactus AI" className="h-8 w-8 object-contain" />
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
                  <img src={logoWithoutName} alt="Kactus AI" className="h-9 w-9 object-contain" />
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
     

      <CardSplitSection />

 <section className="w-full bg-white px-0 py-6 md:px-0 md:py-[32px]">
  <div
    className="relative flex h-[243px] w-full items-center overflow-visible px-6 md:h-[396px] md:overflow-hidden md:px-[56px] lg:overflow-visible lg:px-[80px]"
    style={{
      backgroundImage: `url(${thirdContainerBg})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }}
  >
    <motion.div
      initial={{ opacity: 0, x: -52 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.375, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: false, amount: 0.35 }}
      className="relative z-10 max-w-[178px] text-white md:max-w-[470px] lg:max-w-[997px]"
    >
      <h2
        className="text-[23px] font-normal leading-[28px] text-white md:text-[36px] md:font-light md:leading-[40px] lg:text-[48px] lg:font-normal lg:leading-[52.5px]"
        style={{ fontFamily: '"SF Pro", sans-serif' }}
      >
        <span className="md:hidden">Run Your Business Via WhatsApp, End To End</span>
        <span className="hidden md:inline">Run your business via WhatsApp, <br /> End to End</span>
      </h2>

      <Link
        to="/contact"
        className="mt-4 inline-flex h-[31px] w-[104px] items-center justify-center rounded-[3px] bg-[#dfeac6] px-0 py-0 text-[10px] font-medium uppercase text-[#123126] transition hover:bg-[#ebf3d8] md:mt-6 md:h-auto md:w-auto md:rounded-md md:px-6 md:py-3 md:text-sm md:normal-case"
      >
        Book A Demo
      </Link>
    </motion.div>

    <motion.img
      src={finalWhatsapp}
      alt="Hand holding phone"
      initial={{ opacity: 0, x: 72 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.41, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: false, amount: 0.35 }}
      className="pointer-events-none absolute right-[10px] top-[-52px] z-[9] h-[292px] w-auto object-contain md:-right-[6%] md:top-auto md:bottom-0 md:h-[430px] lg:right-[3%] lg:h-[501.744px]"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-[118px] right-[23%] z-[10] h-[66px] w-[66px] md:bottom-[222px] md:right-[8.5%] md:h-[98px] md:w-[98px] lg:bottom-[252px] lg:right-[11.2%] lg:h-[116px] lg:w-[116px]"
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(174, 255, 186, 0.9) 0%, rgba(116, 239, 132, 0.48) 40%, rgba(116, 239, 132, 0.12) 68%, rgba(116, 239, 132, 0) 100%)",
          filter: "blur(16px)"
        }}
        animate={{
          opacity: [0.2, 0.62, 0.28, 0.72, 0.24],
          scale: [0.95, 1.04, 0.98, 1.06, 0.96]
        }}
        transition={{
          duration: 1.4,
          ease: "easeInOut",
          repeat: Infinity
        }}
      />
    </div>
  </div>
</section>

      <section className="bg-white px-4 pb-6 pt-4 sm:px-6 md:py-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1480px]">
          <div className="bg-white lg:grid lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative mx-auto flex min-h-[242px] w-full max-w-[280px] items-center justify-center overflow-hidden px-0 py-0 sm:min-h-[300px] sm:max-w-[360px] sm:px-8 md:min-h-[360px] md:max-w-none md:px-10 md:py-6 lg:px-6 lg:py-4 xl:px-8"
            >
              <motion.video
                src={graphicAnimation}
                autoPlay
                loop
                muted
                playsInline
                className="relative z-10 h-full min-h-[236px] w-full object-contain sm:min-h-[280px] md:min-h-[340px] lg:min-h-[360px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex items-center px-2 py-0 sm:px-10 md:px-14 md:py-6 lg:px-8 lg:py-4 xl:px-10"
            >
              <div className="mx-auto flex w-full max-w-[300px] flex-col items-center text-center md:mx-0 md:max-w-[760px] md:items-start md:text-left">
                <h2
                  className="w-full md:hidden"
                  style={{
                    fontFamily: '"SF Pro", sans-serif',
                    textTransform: "capitalize"
                  }}
                >
                  <span className="block text-[13px] font-[600] leading-[16px] text-[#5f6c64]">From One Prompt To Complete Solution</span>
                  <span className="mt-1 block text-[20px] font-[700] leading-[23px] tracking-[-0.02em] text-[#101010]">Your Business, Just A Chat Away</span>
                </h2>

                <h2
                  className="hidden w-full text-[34px] font-normal leading-[1.14] tracking-[-0.025em] text-[#101010] md:block lg:text-[38px] xl:text-[40px]"
                  style={{
                    fontFamily: '"SF Pro", sans-serif',
                    textTransform: "capitalize"
                  }}
                >
                  <span className="block">From One Prompt To Complete Solution</span>
                  <span className="mt-1 block">Your Business, Just A Chat Away.</span>
                </h2>

                <p
                  className="mt-3 max-w-[276px] text-[12px] font-normal leading-[1.45] text-[#8E8E8E] sm:text-[15px] md:mt-5 md:max-w-[620px] md:text-[18px] md:leading-[1.6] lg:text-[18px]"
                  style={{
                    fontFamily: '"SF Pro", sans-serif'
                  }}
                >
                  Discover how Kactus AI streamlines your daily business tasks and enhances your workflow with AI.
                </p>

                <Link
                  to="/outcomes"
                  className="mt-5 inline-flex h-[41px] w-fit min-w-[132px] items-center justify-center rounded-[4px] bg-[#D4E5C0] px-8 text-[13px] font-medium uppercase tracking-[0.06em] text-[#17362d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#DCE9C9] md:mt-9 md:h-[44px] md:min-w-[148px] md:px-10 md:text-[14px]"
                >
                  Outcome
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    
     

      {/* ENTERPRISE READY */}
      <section className="relative overflow-hidden bg-[#06231C] py-0">
        <div className="relative isolate min-h-[516px] overflow-hidden md:min-h-[544px]">
          <EnterpriseReadyOrbitBackground />
          <EnterpriseReadyCenterGlow
            wrapperClassName="top-0 -translate-y-[30%] md:-translate-y-[42%]"
            glowClassName="h-[190px] w-[360px] md:h-[300px] md:w-[860px]"
          />

          <EnterpriseReadyHeading
            mobile
            className="absolute inset-x-0 top-[44px] z-20 mx-auto w-full max-w-none px-5 md:hidden"
          />

          <div className="relative z-10 mx-auto hidden h-[544px] w-full max-w-[1440px] md:block">
            <div className="absolute inset-x-0 top-[54px] grid grid-cols-[1fr_auto_1fr] items-start">
              <div className="flex justify-center pt-[92px]">
                <EnterpriseReadyCard
                  item={enterpriseCards[0]}
                  index={0}
                  desktopClassName="w-[184px] text-center lg:w-[196px] xl:w-[220px] 2xl:w-[248px]"
                />
              </div>

              <EnterpriseReadyHeading className="mt-[12px] w-full max-w-[460px]" />

              <div className="flex justify-center pt-[92px]">
                <EnterpriseReadyCard
                  item={enterpriseCards[1]}
                  index={1}
                  desktopClassName="w-[184px] text-center lg:w-[196px] xl:w-[220px] 2xl:w-[248px]"
                />
              </div>
            </div>

            {enterpriseCards.slice(2).map((item, index) => (
              <EnterpriseReadyCard
                key={`${item.title}-${index + 2}`}
                item={item}
                index={index + 2}
              />
            ))}
          </div>

          <div className="relative z-10 mx-auto max-w-[430px] px-5 pb-8 pt-[112px] md:hidden">
            <div className="grid grid-cols-2 gap-x-6 gap-y-[34px]">
              {[enterpriseCards[0], enterpriseCards[2], enterpriseCards[3], enterpriseCards[1]].map((item, index) => (
                <EnterpriseReadyCard
                  key={`${item.title}-mobile-${index}`}
                  item={item}
                  index={index}
                  mobile
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white px-5 py-8 sm:px-6 md:px-10 md:py-12">
        <div className="mx-auto max-w-[1180px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: false, amount: 0.35 }}
            className="mx-auto max-w-[760px] text-center"
          >
            <h2
              className="pb-1 text-center text-[40px] font-normal leading-[1.12] capitalize"
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
            <p className="mx-auto mt-1 max-w-[620px] text-[16px] leading-relaxed text-[#595959] md:mt-1 md:text-[18px]">
              Kactus AI turns a single WhatsApp message into complete business.
            </p>
          </motion.div>

          <div className="mt-8 overflow-hidden md:mt-10">
            <style>{`
              @keyframes kactus-compatible-scroll {
                from { transform: translateX(-50%); }
                to { transform: translateX(0); }
              }

              @media (prefers-reduced-motion: reduce) {
                .kactus-compatible-track {
                  animation: none !important;
                }
              }
            `}</style>

            <div
              className="kactus-compatible-track flex w-max gap-3 pr-3 sm:gap-5 md:gap-10"
              style={{ animation: "kactus-compatible-scroll 28s linear infinite" }}
            >
              {[...logos, ...logos].map((item, index) => (
                <CompatibleLogoCard
                  key={`${item.label}-compatible-${index}`}
                  item={item}
                  index={index % logos.length}
                  compact
                />
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              to="/integrations"
              className="inline-flex h-[41px] w-[212px] items-center justify-center rounded-[4px] bg-[#D4E5C0] text-[13px] font-medium uppercase tracking-[0.06em] text-[#17362d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#DCE9C9] md:h-[44px] md:w-[240px] md:text-[14px]"
            >
              Integrations
            </Link>
          </div>

          
        </div>
      </section>

      <section className="bg-white pb-8 md:pb-12">
        <div
          className="relative mx-auto w-full max-w-[1920px] overflow-hidden"
          style={{
            backgroundImage: `url(${poweredBg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        >
          <div className="relative h-[220px] md:h-[280px] lg:h-[320px]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: false, amount: 0.45 }}
              className="absolute inset-0 z-[25] flex flex-col items-center justify-center"
            >
              <p className="text-[15px] font-medium uppercase tracking-[0.26em] text-white/95 md:text-[18px]">
                Powered By
              </p>
              <img
                src={miranLogo}
                alt="MIRAN logo"
                className="mt-4 h-[64px] w-auto object-contain md:h-[84px] lg:h-[106px]"
              />
            </motion.div>

            <motion.img
              src={poweredLeft}
              alt=""
              aria-hidden="true"
              initial={{ opacity: 0, x: -90, y: 90 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: false, amount: 0.2 }}
              className="pointer-events-none absolute -bottom-[48%] -left-[24%] z-[10] hidden h-[245%] w-auto max-w-none object-contain object-left-bottom opacity-95 md:block md:-bottom-[52%] md:-left-[22%] md:h-[258%] lg:-bottom-[56%] lg:-left-[20%] lg:h-[272%]"
            />

            <motion.img
              src={poweredRight}
              alt=""
              aria-hidden="true"
              initial={{ opacity: 0, x: 90, y: -90 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              viewport={{ once: false, amount: 0.2 }}
              className="pointer-events-none absolute -right-[24%] -top-[28%] z-[10] hidden h-[245%] w-auto max-w-none object-contain object-right-top opacity-95 md:block md:-right-[22%] md:-top-[32%] md:h-[258%] lg:-right-[20%] lg:-top-[36%] lg:h-[272%]"
            />

          </div>
        </div>
      </section>

      {/* <section className="overflow-hidden bg-white px-5 pb-10 sm:px-6 md:px-10 md:pb-10">
        <div className="mx-auto max-w-[1320px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="mx-auto max-w-[820px] text-center"
          >
            <h2
              className="text-center text-[46px] font-normal leading-[48px] tracking-[-0.03em] capitalize"
              style={{
                fontFamily: '"SF Pro", sans-serif',
                background: "linear-gradient(90deg, #000 0%, #4C7663 90.05%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Why Fashion Brands Love Kactus AI
            </h2>
            <p className="mx-auto mt-5 max-w-[700px] text-[16px] leading-relaxed text-[#595959] md:text-[18px]">
              Real stories from brands that reduced returns and increased conversions with Kactus AI.
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

      <section className="bg-white px-5 pb-8 sm:px-6 md:px-10 md:pb-12">
        <div className="mx-auto max-w-[820px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="mx-auto text-center"
          >
            <h2
              className="pb-1 text-[34px] font-300 leading-[1.18] tracking-[-0.045em] md:pb-0 md:text-[54px] md:leading-none md:tracking-[-0.025em]"
              style={{
                background: "linear-gradient(90deg, #000 0%, #4C7663 90.05%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-5 max-w-[620px] text-[13px] leading-[1.35] tracking-[-0.01em] text-[#595959] md:text-[18px] md:leading-relaxed md:tracking-[0.01em]">
              Find answers to common questions about Kactus AI, onboarding, integrations, and support.
            </p>
          </motion.div>

          <motion.div
            className="mt-12 border-t border-[#edf0f2]"
            variants={faqListVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <motion.div
                  key={item.question}
                  className="border-b border-[#edf0f2]"
                  variants={faqItemVariants}
                >
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
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>



      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </main>
  );
}





