import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion"
import { Link } from "react-router-dom"
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
import lastSectionBg from "../assets/images/Shopify/lastSection.png";
import outcomeHeroBg from "../assets/images/Outcomes/outcomebg.png";
import leftPopupBg from "../assets/images/whatsapp/leftpopup.png";
import rightPopupBg from "../assets/images/whatsapp/rightpopup.png";
import whatsappSectionBg from "../assets/images/whatsapp/whatsappSec2.png";
import outcomeWhatsapp from "../assets/images/Outcomes/outcomeWhatsapp.svg";
import logo from "../assets/logo.svg";
import logo2 from "../assets/logo2.svg";
import ftlock from "../assets/images/Features/VTO.png";
import ftlockHover from "../assets/images/Features/VTO G.png";
import lock from "../assets/images/Features/lock.png";
import lockHover from "../assets/images/Features/Lock G.png";
import cardBg from "../assets/images/Home/cardbg.png";
import whatsappIcon from "../assets/images/Home/whatsapp.svg";
import aiProductIcon from "../assets/images/Home/aiProduct.svg";
import marketResearchIcon from "../assets/images/Home/MARKET RESEARCH.png";
import socialMediaMarketingIcon from "../assets/images/Home/SOCIAL MEDIA MARKETING.png";
import websiteManagementIcon from "../assets/images/Home/web-management 1.png";
import vtoFeatureIcon from "../assets/images/Home/vto.png";
import inventoryManagementIcon from "../assets/images/Home/INVENTORY MANAGEMENT.png";


const outcomeFeatureMenuItems = [
  {
    label: "Virtual Try-On",
    to: "/vto",
    icon: ftlock,
    iconHover: ftlockHover
  },
  {
    label: "AI Whatsapp Marketing",
    to: "/ai-whatsapp-marketing",
    icon: lock,
    iconHover: lockHover
  },
  {
    label: "AI Product Photoshoot",
    to: "/ai-photoshoot",
    icon: lock,
    iconHover: lockHover
  },
  {
    label: "AI Marketing Research",
    comingSoon: true,
    icon: lock,
    iconHover: lockHover
  }
];

function OutcomeFeatureMenuIcon({ item }) {
  return (
    <span className="relative flex h-[clamp(36px,2.35vw,44px)] w-[clamp(36px,2.35vw,44px)] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#14382e] shadow-[inset_0_0_16px_rgba(212,228,191,0.42)]">
      <img
        src={item.icon}
        alt=""
        aria-hidden="true"
        className="absolute h-[clamp(17px,1.2vw,21px)] w-[clamp(17px,1.2vw,21px)] object-contain brightness-0 invert transition duration-300 group-hover:opacity-0"
      />
      <img
        src={item.iconHover}
        alt=""
        aria-hidden="true"
        className="absolute h-[clamp(17px,1.2vw,21px)] w-[clamp(17px,1.2vw,21px)] object-contain opacity-0 transition duration-300 group-hover:opacity-100"
      />
    </span>
  );
}

function OutcomeFeatureMenuItem({ item, onClose }) {
  const content = (
    <div className="group flex min-h-[clamp(46px,3.35vw,54px)] w-full items-center gap-[clamp(9px,0.75vw,14px)] rounded-md px-2 py-1 transition duration-200 hover:bg-[#f6faf1]">
      <OutcomeFeatureMenuIcon item={item} />
      <div className="flex min-w-0 flex-1 items-center gap-[clamp(8px,0.7vw,12px)]">
        <span className="min-w-0 flex-1 overflow-hidden text-[clamp(14px,0.92vw,17px)] font-medium leading-[1.12] text-[#171717] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
          {item.label}
        </span>
        {item.comingSoon && (
          <span className="shrink-0 rounded-full bg-[#eaf1e3] px-[clamp(8px,0.7vw,13px)] py-[clamp(4px,0.36vw,7px)] text-[clamp(8px,0.5vw,9px)] font-medium text-[#17362d]">
            Coming Soon
          </span>
        )}
      </div>
    </div>
  );

  if (item.to) {
    return (
      <Link to={item.to} onClick={onClose} className="block">
        {content}
      </Link>
    );
  }

  return (
    <div aria-disabled="true" className="cursor-not-allowed">
      {content}
    </div>
  );
}

function OutcomeFeatureMegaMenu({ visible, onMouseEnter, onMouseLeave, onClose }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="fixed left-0 top-[64px] z-[90] hidden w-screen border-y border-dashed border-[#dfe5df] bg-white text-[#111111] shadow-none md:block"
        >
          <div className="relative mx-auto grid h-[clamp(136px,9vw,160px)] max-w-[1920px] grid-cols-[16.7%_21.3%_20.2%_22.6%_14.7%_1fr] border-b border-dashed border-[#dfe5df]">
            <div className="border-r border-dashed border-[#dfe5df]" />

            <div className="grid grid-rows-2 border-r border-dashed border-[#dfe5df] px-[clamp(14px,1.25vw,24px)] py-[clamp(10px,0.9vw,16px)]">
              <div className="flex items-center">
                <OutcomeFeatureMenuItem item={outcomeFeatureMenuItems[0]} onClose={onClose} />
              </div>
              <div className="flex items-center border-t border-dashed border-[#dfe5df]">
                <OutcomeFeatureMenuItem item={outcomeFeatureMenuItems[1]} onClose={onClose} />
              </div>
            </div>

            <div className="grid grid-rows-2 border-r border-dashed border-[#dfe5df] px-[clamp(14px,1.25vw,24px)] py-[clamp(10px,0.9vw,16px)]">
              <div className="flex items-center">
                <OutcomeFeatureMenuItem item={outcomeFeatureMenuItems[2]} onClose={onClose} />
              </div>
              <div className="flex items-center border-t border-dashed border-[#dfe5df]">
                <OutcomeFeatureMenuItem item={outcomeFeatureMenuItems[3]} onClose={onClose} />
              </div>
            </div>

            <div className="flex items-center border-r border-dashed border-[#dfe5df] px-[clamp(10px,0.75vw,14px)]">
              <Link
                to="/contact"
                onClick={onClose}
                className="group relative flex h-[clamp(92px,6.8vw,108px)] w-full flex-col items-start justify-start overflow-hidden rounded-[14px] bg-[#0d2c23] px-[clamp(16px,1.1vw,22px)] py-[clamp(14px,0.9vw,18px)] text-left text-white"
              >
                <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_86%_74%,rgba(212,228,191,0.84)_0%,rgba(132,157,122,0.46)_27%,rgba(13,44,35,0)_57%)]" />
                <span className="relative flex items-center gap-3 text-[clamp(15px,0.92vw,17px)] font-semibold leading-none">
                  BOOK A DEMO
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    <path d="M5 11L11 5" />
                    <path d="M6 5H11V10" />
                  </svg>
                </span>
                <span className="relative mt-2 overflow-hidden text-[clamp(12px,0.78vw,14px)] leading-none text-white/75 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                  Loram ipsum lorme ipsum
                </span>
              </Link>
            </div>

            <div className="border-r border-dashed border-[#dfe5df] bg-[repeating-linear-gradient(120deg,rgba(12,35,29,0.08)_0,rgba(12,35,29,0.08)_1px,transparent_1px,transparent_7px)]" />
            <div className="border-r border-dashed border-[#dfe5df]" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


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

function CardSplitSection() {
  const [phase, setPhase] = useState("blur");

  useEffect(() => {
    const clearTimer = window.setTimeout(() => setPhase("clear"), 1600);
    const fadeTimer = window.setTimeout(() => setPhase("fade"), 3300);
    const linesTimer = window.setTimeout(() => setPhase("lines"), 4050);
    const spreadTimer = window.setTimeout(() => setPhase("spread"), 5700);

    return () => {
      window.clearTimeout(clearTimer);
      window.clearTimeout(fadeTimer);
      window.clearTimeout(linesTimer);
      window.clearTimeout(spreadTimer);
    };
  }, []);

  const spreading = phase === "spread";
  const textVisible = phase === "blur" || phase === "clear";
  const linesVisible = phase === "lines";
  const topCards = splitCards.filter((card) => card.row === "top");
  const bottomCards = splitCards.filter((card) => card.row === "bot");

  return (
    <section
      className="relative overflow-visible bg-white px-4 py-14 font-['SF_Pro',sans-serif] sm:px-6 md:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-[1190px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-500 md:text-lg">
            Kactus AI turns a single WhatsApp message into complete business execution on its own through the following features:
          </p>
        </motion.div>

        <div
          className="relative mx-auto mt-[56px] h-[625px] min-h-[625px] w-full max-w-[810px] overflow-visible transition-colors duration-700"
          style={{
            backgroundColor: "transparent",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            boxShadow: spreading ? "none" : "0 22px 70px rgba(4, 36, 26, 0.10)",
            transition: "background-color 1.25s ease, border-radius 0.9s ease, box-shadow 0.9s ease"
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 z-[15]"
            style={{
              opacity: spreading ? 0 : 1,
              transition: "opacity 1.25s cubic-bezier(0.22,1,0.36,1)",
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderBottomLeftRadius: 0,
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
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderBottomLeftRadius: 0,
              backgroundImage: `url(${cardBg})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              mixBlendMode: "soft-light"
            }}
          />

          <div
            className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center px-6 transition-opacity duration-500"
            style={{ opacity: textVisible ? 1 : 0 }}
          >
            <p
              className="max-w-[660px] text-center text-[clamp(24px,3.2vw,44px)] font-normal italic leading-[1.35] text-white"
              style={{
                filter: phase === "blur" ? "blur(12px)" : "blur(0px)",
                opacity: phase === "blur" ? 0.82 : 1,
                transform: phase === "blur" ? "scale(1.015)" : "scale(1)",
                transition: "filter 1.15s cubic-bezier(0.22,1,0.36,1), opacity 1.15s ease, transform 1.15s cubic-bezier(0.22,1,0.36,1)"
              }}
            >
              " We honor the hands that build your brand "
            </p>
          </div>

          {["33.33%", "66.66%"].map((left) => (
            <div
              key={`top-${left}`}
              className="absolute top-0 z-20 h-[346px] w-px bg-white/20 transition-opacity duration-300"
              style={{ left, opacity: linesVisible ? 1 : 0, transition: "opacity 0.9s ease" }}
            />
          ))}
          {["25%", "50%", "75%"].map((left) => (
            <div
              key={`bottom-${left}`}
              className="absolute top-[346px] z-20 h-[279px] w-px bg-white/20 transition-opacity duration-300"
              style={{ left, opacity: linesVisible ? 1 : 0, transition: "opacity 0.9s ease" }}
            />
          ))}

          <div
            className="absolute left-0 top-[346px] z-[21] h-px bg-white/30"
            style={{
              width: phase === "lines" || spreading ? "100%" : 0,
              opacity: phase === "lines" ? 1 : 0,
              transition:
                phase === "lines"
                  ? "width 1.15s cubic-bezier(0.4,0,0.2,1)"
                  : spreading
                    ? "opacity 0.55s ease"
                    : "none"
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
              transition: spreading
                ? "gap 1.25s cubic-bezier(0.22,1,0.36,1)"
                : "none"
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
              transition: spreading
                ? "top 1.25s cubic-bezier(0.22,1,0.36,1), height 1.25s cubic-bezier(0.22,1,0.36,1), gap 1.25s cubic-bezier(0.22,1,0.36,1)"
                : "none"
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

function SplitCard({ card, index, count, spreading, top = false }) {
  const glowX = useMotionValue(top ? 152 : 128);
  const glowY = useMotionValue(top ? 90 : 82);
  const glowBackground = useMotionTemplate`radial-gradient(circle at ${glowX}px ${glowY}px, ${card.glow || "rgba(214,233,200,0.24)"} 0%, rgba(255,255,255,0) 46%)`;
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
      style={{
        flex: "1 1 0",
        width: "auto",
        height: "100%",
        borderRadius: spreading ? 14 : closedRadius,
        boxShadow: spreading ? "0 18px 48px rgba(4,36,26,0.10)" : "none",
        transition: `border-radius 0.85s ease, box-shadow 0.9s ease ${index * 0.08}s`
      }}
      whileHover={spreading ? { y: top ? -7 : 7, scale: 1.018, rotateX: top ? 3 : -3 } : undefined}
      transition={{ type: "spring", stiffness: 230, damping: 24 }}
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
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-80 transition-opacity duration-300 group-hover:opacity-100"
        style={{ backgroundImage: glowBackground }}
      />
      <div className="pointer-events-none absolute inset-0 border border-white/10" />

      <div
        className="relative z-[1] flex h-full w-full flex-col items-center text-center"
        style={{
          padding: top ? "32px 18px 18px" : "22px 12px 12px"
        }}
      >
        <h3
          className="flex min-h-[20px] w-full items-center justify-center whitespace-nowrap text-white transition-all"
          style={{
            opacity: spreading ? 1 : 0,
            transform: spreading ? "translateY(0)" : `translateY(${top ? "-4px" : "4px"})`,
            transition: `opacity 0.75s ease ${0.55 + index * 0.08}s, transform 0.75s ease ${0.55 + index * 0.08}s`,
            fontFamily: "SF Pro",
            fontSize: top ? "16px" : "13px",
            fontWeight: 700,
            lineHeight: top ? "19px" : "15px",
            letterSpacing: "-0.187px"
          }}
        >
          {card.title}
        </h3>
        <p
          className="line-clamp-4 w-full bg-[linear-gradient(90deg,#ECEFFF_25.19%,#FFF_43.88%,#FFC3A9_93.56%)] bg-clip-text text-transparent transition-opacity"
          style={{
            opacity: spreading ? 1 : 0,
            transition: `opacity 0.75s ease ${0.68 + index * 0.08}s`,
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
        <div
          className="flex w-full flex-1 items-center justify-center transition-opacity"
          style={{
            opacity: spreading ? 1 : 0,
            transition: `opacity 0.75s ease ${0.78 + index * 0.08}s`,
            paddingTop: top ? "10px" : "8px"
          }}
        >
          <img
            src={card.icon}
            alt={card.iconAlt}
            className={`${top ? card.iconClassName || "h-[58px] w-[58px]" : "h-[42px] w-[42px]"} object-contain`}
          />
        </div>
        <div
          className="transition-opacity"
          style={{
            opacity: spreading ? 1 : 0,
            transition: `opacity 0.75s ease ${0.9 + index * 0.08}s`
          }}
        >
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

const businessExecutionSlides = [
  {
    heading: "Reduce Dead Inventory",
    label: "Command",
    number: "01",
    rows: [
      {
        title: "The Diagnostic Engine",
        subtitle: "Identifying Why Your Inventory Isn't Moving",
        answer:
          "Kactus AI's first line of action. Our AI deep dives into your business data to pinpoint which items are stagnant and why. It delivers a comprehensive roadmap and solution-oriented report to get your stock back in fashion."
      },
      {
        title: "Visual Rejuvenation",
        subtitle: "Breathing New Life into Stagnant Stock",
        answer:
          "According to the AI Market Research Report, Our AI generates high-end, professional re-photoshoots for your dead inventory, creating trend-aligned visuals that capture attention without the cost of a traditional studio session. These assets are custom-built to fuel your Social Media Marketing and WhatsApp campaigns, ensuring every image is aesthetically aligned with current trends and optimized for the specific platform where it will be seen."
      },
      {
        title: "Dynamic Storefront Optimization",
        subtitle: "Placing the Right Products in the Spotlight",
        answer:
          'Kactus AI autonomously updates your digital storefront to prioritize items identified in the research phase. From SEO-optimized descriptions to strategic homepage placement, we ensure your "hidden gems" are seen by the right shoppers.'
      },
      {
        title: "Personalized Communication",
        subtitle: "Bringing Creative Visuals Directly To Your Inbox",
        answer:
          "Based on the AI Market Research report, AI identifies the right customer segments for your dead inventory. It then autonomously crafts personalized messages featuring fresh AI Product Photoshoot visuals. It sends them directly to your customers to trigger immediate interest and sales for previously overlooked stock."
      },
      {
        title: "Autonomous Content Deployment",
        subtitle: "From Data Insight to Viral Visuals",
        answer:
          <>
            kactus AI eliminates the gap between strategy and execution. Using the specific visual assets generated in the{" "}
            <strong>AI Product Photoshoot</strong> which are tailored to the findings of the{" "}
            <strong>Market Research Report</strong> our AI autonomously designs, captions, and uploads posts to your Instagram and Facebook pages.
            <br />
            <br />
            Beyond organic reach, kactus AI optimizes and manages <strong>Meta and Google Ads</strong> automatically. This ensures your dead inventory is transformed into high-performing digital campaigns without you lifting a finger.
            <br />
            <br />
            <strong>One command. Total Autonomy.</strong>{" "}
            <em>
              From your WhatsApp bot, tell kactus AI to 'Reduce Dead Inventory.' Our AI Lab handles the research, the photography, the social ads, and the customer outreach all working in sync to turn stagnant stock into revenue.
            </em>
          </>
      }
    ]
  },
  {
    heading: "Increase Sales",
    label: "Command",
    number: "02",
    rows: [
      {
        title: "The Opportunity Finder",
        subtitle: "Predictive Analytics for Trend Scaling",
        answer:
          "Under the \"Increase Sales\" command, Kactus AI shifts into high-gear trend forecasting. It identifies high-demand products, analyzes competitor gaps, and scans market shifts to find exactly which items in your collection are primed for a surge. It then delivers a growth roadmap focused on maximizing conversion rates and increasing average order value."
      },
      {
        title: "The Conversion Creator",
        subtitle: "High-Impact Visuals for Viral Growth",
        answer:
          "To drive sales, visuals must be irresistible. Kactus AI generates fresh, high-energy lifestyle and studio content specifically designed to trigger impulse buys. These assets are not just product shots; they are strategic visual triggers created according to the market research report to appeal to your most profitable customer segments."
      },
      {
        title: "The Conversion Optimizer",
        subtitle: "Streamlining the Path to Purchase",
        answer:
          "Kactus AI autonomously reconfigures your website for maximum revenue. It creates high-converting landing pages, optimizes product sorting based on best-seller potential, and updates SEO metadata. AI ensures when a customer lands on your site, they are met with a frictionless experience designed to turn browsers into buyers."
      },
      {
        title: "The Revenue Accelerator",
        subtitle: "Personalized Offers at Scale",
        answer:
          "Kactus AI uses the sales-focused market research to launch VIP campaigns via WhatsApp. By sending the new, high-impact visuals directly to your top-tier customers with personalized Buy Now incentives, the AI creates a direct, private sales channel that bypasses social media noise."
      },
      {
        title: "The Global Megaphone",
        subtitle: "Automated Scaling via Organic and Paid Ads",
        answer:
          "To increase sales, visibility is key. Kactus AI takes the AI photoshoot content and pushes it across Instagram, Facebook, and Google. It autonomously manages Meta Ads, shifting budget in real time toward the highest-performing visuals to ensure your brand reaches new audiences and drives massive traffic to your store."
      }
    ]
  },
  {
    heading: "Social Media Marketing Campaign",
    label: "Command",
    number: "03",
    rows: [
      {
        title: "The Campaign Architect",
        subtitle: "Data-Driven Themes & Audience Segmentation",
        answer:
          "Kactus AI begins by analyzing current high-performing trends and consumer sentiment to define your campaign's hook. Whether it is a Summer Sale, a Festive Launch, or a Brand Storytelling push, the AI generates a campaign roadmap. This includes the optimal timeline, high-conversion keywords, and a detailed breakdown of which customer segments to target for maximum ROI."
      },
      {
        title: "The Aesthetic Vision",
        subtitle: "Themed Content for High-Impact Storytelling",
        answer:
          "A campaign is only as good as its visuals. Based on the research report, Kactus AI generates a dedicated library of campaign assets. These are not just standard product shots; they are conceptual lifestyle visuals and high-energy graphics designed to evoke the specific emotions of your campaign, providing the visual fuel for your website, ads, and social pages."
      },
      {
        title: "The Conversion Hub",
        subtitle: "Dynamic Campaign Banners & Landing Pages",
        answer:
          "Kactus AI automatically dresses your website for the campaign. It creates high-converting landing pages, updates homepage banners with AI-generated visuals, and installs temporary UI elements like countdown timers or promotional bars. AI ensures that when a customer clicks an ad, they land on a page perfectly synced with the campaign message."
      },
      {
        title: "The Instant Engagement",
        subtitle: "Personalized VIP Campaign Broadcaster",
        answer:
          "Kactus AI cuts through the noise by bringing the campaign directly to your customers' pockets. Using campaign-specific visuals and research-defined segments, the AI sends personalized Early Access or Exclusive Offer messages. It handles the broadcast autonomously, ensuring your most loyal customers are the first to convert."
      },
      {
        title: "The Omni-Channel Blitz",
        subtitle: "Automated Ad Scaling & Cohesive Content",
        answer:
          "Kactus AI leads distribution. It autonomously designs and schedules posts across Instagram and Facebook that mirror the campaign theme. Simultaneously, it launches and manages Meta and Google Ads, using fresh campaign imagery to find new buyers. AI monitors performance in real time, shifting budget to the highest-performing visuals to ensure the campaign scales."
      }
    ]
  },
  {
    heading: "Business Expand",
    label: "Command",
    number: "04",
    rows: [
      {
        title: "Territory Scout",
        subtitle: "Regional Trend Mapping & Demographic Analysis",
        answer:
          "Kactus AI analyzes the fashion landscape of the target city or region. It identifies local style preferences, seasonal differences, and competitor pricing in that specific area. The AI then delivers a Market Entry Report, providing a roadmap for which products from your catalog will thrive in the new territory and the exact timeline for a successful launch."
      },
      {
        title: "The Cultural Adapter",
        subtitle: "Localized Visual Storytelling",
        answer:
          "To enter a new city, your brand must look like it belongs there. Kactus AI generates fresh visual content that reflects the local culture, climate, and aesthetics of the expansion target. Whether it is changing the background scenery to match local landmarks or adjusting the vibe to suit regional tastes, the AI creates the specific assets needed for your expansion's social media and ads."
      },
      {
        title: "The Local Ambassador",
        subtitle: "Geo-Fenced Outreach & Community Building",
        answer:
          "Kactus AI uses expansion data to trigger hyper-local WhatsApp campaigns. It targets potential customers in the new city with Grand Opening or New City Launch invitations. By using localized visuals from the AI photoshoot, it builds a direct, personal connection with the new community before you open your physical or virtual doors."
      },
      {
        title: "The Awareness Machine",
        subtitle: "Hyper-Local Ad Campaigns & Social Presence",
        answer:
          "To scale rapidly, Kactus AI launches geo-targeted Meta and Google Ads specifically focused on the upcoming city's coordinates. It uses localized photoshoot assets to run high-intent awareness campaigns, ensuring that every social media post and paid ad is seen by the right people in the target market, effectively seeding your brand presence before the official launch."
      }
    ]
  },
  {
    heading: "New Business",
    label: "Command",
    number: "05",
    rows: [
      {
        title: "The Brand Blueprint",
        subtitle: "Niche Identification & Competitor Mapping",
        answer:
          "The journey begins with the Genesis Report. Kactus AI analyzes global and local fashion trends to identify high-potential niches. It defines your target persona, suggests competitive pricing structures, and builds a launch roadmap. This report serves as the DNA of your new brand, ensuring you enter the market with a data-backed strategy rather than guesswork."
      },
      {
        title: "The Identity Creator",
        subtitle: "Building a Signature Aesthetic from Scratch",
        answer:
          "A new brand needs a soul. Kactus AI generates your first Brand Lookbook by creating high-end, professional visuals that define your aesthetic. Using market research directives, the AI produces studio and lifestyle imagery that establishes your brand's vibe, giving you a premium visual library before you hold your first physical launch event."
      },
      {
        title: "The Digital Flagship",
        subtitle: "Architecting the 0-to-1 Storefront",
        answer:
          "You can build your digital home autonomously with Kactus AI. It designs a high-converting website layout, optimizes the user journey for new visitors, and sets up the SEO foundation needed to rank on Google. The AI ensures that your Coming Soon and Launch pages are perfectly synced with the brand identity established in the research phase."
      },
      {
        title: "The Community Builder",
        subtitle: "Capturing and Nurturing Early Adopters",
        answer:
          "Before the doors open, Kactus AI starts building your Inner Circle. It sets up automated lead-capture systems to build a pre-launch waitlist. Using the updated visuals from the AI photoshoot, it sends Early Access invitations and brand stories to potential customers, ensuring you have a loyal audience ready to buy the moment the New Business command reaches the launch phase."
      },
      {
        title: "The Hype Machine",
        subtitle: "Forging Brand Authority from Zero",
        answer:
          "Kactus AI handles the 0-to-1 social climb. Utilizing AI-generated imagery, it creates a marketing strategy for Instagram and Facebook. The AI autonomously runs awareness-stage Meta Ads to introduce your upcoming brand to the world, ensuring that by the time you launch, your social pages already look like an established, trend-setting label."
      }
    ]
  }
];

const businessExecutionLeftVariants = {
  hidden: { opacity: 0, x: -72 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.05,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const businessExecutionRightVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.14
    }
  }
};

const businessExecutionRowVariants = {
  hidden: { opacity: 0, x: 72 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

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

export default function Outcomes() {
  const { scrollY } = useScroll();
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [showFeaturesDropdown, setShowFeaturesDropdown] = useState(false);
  const featuresDropdownCloseTimerRef = useRef(null);
  const [activeFeatureCard, setActiveFeatureCard] = useState(null);
  const [activeReviewCard, setActiveReviewCard] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [activeBusinessExecutionSlide, setActiveBusinessExecutionSlide] = useState(0);
  const [businessExecutionOpenIndexes, setBusinessExecutionOpenIndexes] = useState(
    () => businessExecutionSlides.map(() => -1)
  );
  const [heroPhase, setHeroPhase] = useState(0);

  const openFeaturesDropdown = () => {
    if (featuresDropdownCloseTimerRef.current) {
      window.clearTimeout(featuresDropdownCloseTimerRef.current);
    }
    setShowFeaturesDropdown(true);
  };

  const closeFeaturesDropdown = () => {
    featuresDropdownCloseTimerRef.current = window.setTimeout(() => {
      setShowFeaturesDropdown(false);
    }, 90);
  };

  const heroRevealY = useTransform(scrollY, [0, 500], [0, 110]);
  const heroEase = [0.18, 1, 0.28, 1];
  const isHeroFinal = heroPhase >= 3;
  const introOverlayAnimation = heroPhase === 0
    ? { opacity: 1 }
    : { opacity: 0 };
  const introOverlayContentAnimation = heroPhase <= 1
    ? { opacity: 1, y: 0, scale: 1 }
    : { opacity: 0, y: -16, scale: 0.992 };
  const introOverlayMarkAnimation = heroPhase === 1
    ? { opacity: 1, scale: 8.6 }
    : heroPhase >= 2
      ? { opacity: 0, scale: 1 }
      : { opacity: 0, scale: 11.6 };
  const heroNavAnimation = heroPhase >= 1
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: -8 };
  const heroCopyAnimation = heroPhase >= 1
    ? { opacity: 1, y: 0, scale: 1 }
    : { opacity: 0, y: 12, scale: 0.992 };
  const leftHeroIconAnimation = heroPhase >= 2
    ? { opacity: 1, scale: 1, x: 0, y: 0, filter: "blur(0px)" }
    : { opacity: 0, scale: 1, x: 0, y: 0, filter: "blur(0px)" };
  const kactusShortBarAnimation = { opacity: 1, x: 0, y: 0, scaleY: 1, scaleX: 1 };
  const kactusTallBarAnimation = { opacity: 1, x: 0, y: 0, scaleY: 1, scaleX: 1 };
  const kactusDotAnimation = { opacity: 1, x: 0, y: 0, scale: 1 };
  const rightHeroIconAnimation = heroPhase >= 2
    ? { opacity: 1, scale: 1, x: 0, y: 0, filter: "blur(0px)" }
    : { opacity: 0, scale: 0.86, x: 12, y: 0, filter: "blur(0px)" };
  const dividerAnimation = heroPhase >= 2
    ? { opacity: 1, scaleY: 1 }
    : { opacity: 0, scaleY: 0.2 };

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setHeroPhase(1), 1100),
      window.setTimeout(() => setHeroPhase(2), 1500),
      window.setTimeout(() => setHeroPhase(3), 2200),
    ];

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      if (featuresDropdownCloseTimerRef.current) {
        window.clearTimeout(featuresDropdownCloseTimerRef.current);
      }
    };
  }, []);

  const activeBusinessExecutionContent = businessExecutionSlides[activeBusinessExecutionSlide];
  const activeBusinessExecutionOpenIndex =
    businessExecutionOpenIndexes[activeBusinessExecutionSlide] ?? -1;

  const handleBusinessExecutionSlideChange = (direction) => {
    setActiveBusinessExecutionSlide((current) => {
      const totalSlides = businessExecutionSlides.length;
      return (current + direction + totalSlides) % totalSlides;
    });
  };

  const handleBusinessExecutionSlideSelect = (index) => {
    setActiveBusinessExecutionSlide(index);
  };

  const handleBusinessExecutionRowToggle = (rowIndex) => {
    setBusinessExecutionOpenIndexes((current) =>
      current.map((openIndex, slideIndex) =>
        slideIndex === activeBusinessExecutionSlide
          ? openIndex === rowIndex
            ? -1
            : rowIndex
          : openIndex
      )
    );
  };

  return (
    <main className="demo-page bg-[#F5F6F2] text-slate-800">

      <section className="relative min-h-screen overflow-hidden bg-[#06231C]">
        <motion.div
          style={{ y: heroRevealY, backgroundImage: `url(${outcomeHeroBg})` }}
          className="absolute inset-0 bg-cover bg-center opacity-20"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(58,103,88,0.42)_0%,rgba(6,35,28,0.94)_72%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(94,161,129,0.18)_0%,transparent_58%)]" />
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ duration: 0.01 }}
          className="absolute inset-0 bg-[linear-gradient(180deg,#0A3128_0%,#173F34_55%,#0A3128_100%)]"
        />

        <motion.div
          initial={false}
          animate={introOverlayAnimation}
          transition={{
            duration: heroPhase >= 2 ? 0.16 : 0.01,
            delay: heroPhase >= 2 ? 0.04 : 0,
            ease: heroEase
          }}
          className="pointer-events-none absolute inset-0 z-50 overflow-hidden bg-white"
        >
          <motion.div
            initial={false}
            animate={introOverlayContentAnimation}
            transition={{ duration: 0.32, ease: heroEase }}
            className={`absolute inset-x-0 top-0 border-b border-slate-200 bg-white ${heroPhase <= 1 ? "pointer-events-auto" : "pointer-events-none"}`}
          >
            <div className="relative flex items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
              <Link to="/" className="flex items-center gap-3 shrink-0">
                <img src={logo} alt="Kactus Logo" className="h-8 w-auto" />
              </Link>
              <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 font-normal text-slate-900 md:flex">
                <div
                  className="relative"
                  onMouseEnter={openFeaturesDropdown}
                  onMouseLeave={closeFeaturesDropdown}
                >
                  <motion.div whileHover={{ y: -2 }}>
                    <button
                      type="button"
                      aria-expanded={showFeaturesDropdown}
                      onClick={() => setShowFeaturesDropdown((prev) => !prev)}
                      className="flex cursor-pointer items-center gap-1 transition hover:text-emerald-600"
                    >
                      Features
                      <svg
                        className={`mt-[1px] h-3.5 w-3.5 transition-transform duration-200 ${showFeaturesDropdown ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                  </motion.div>

                  {false && showFeaturesDropdown && (
                    <div className="absolute left-0 top-full h-4 w-full" />
                  )}

                  {false && showFeaturesDropdown && (
                    <div className="absolute left-1/2 top-[calc(100%+8px)] z-30 grid w-[560px] -translate-x-1/2 grid-cols-2 gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl transition-all duration-200">
                      <div className="space-y-4">
                        <Link to="/vto" onClick={() => setShowFeaturesDropdown(false)}>
                          <div className="group flex items-center gap-3 rounded-lg p-2 transition-all duration-300 hover:scale-105">
                            <div className="relative h-5 w-5 flex-shrink-0">
                              <img
                                src={ftlock}
                                alt="vto"
                                className="absolute inset-0 h-5 w-5 object-contain transition duration-300 group-hover:opacity-0"
                              />
                              <img
                                src={ftlockHover}
                                alt="vto"
                                className="absolute inset-0 h-5 w-5 object-contain opacity-0 transition duration-300 group-hover:opacity-100"
                              />
                            </div>
                            <h4 className="whitespace-nowrap font-semibold text-slate-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#05231C] group-hover:to-[#D4E4BF] group-hover:bg-clip-text group-hover:text-transparent">
                              Virtual Try-On
                            </h4>
                          </div>
                        </Link>

                        <Link to="/" onClick={() => setShowFeaturesDropdown(false)}>
                          <div className="group flex items-center gap-3 rounded-lg p-2 transition-all duration-300 hover:scale-105">
                            <div className="relative h-5 w-5 flex-shrink-0">
                              <img
                                src={lock}
                                alt="photoshoot"
                                className="absolute inset-0 h-5 w-5 object-contain transition group-hover:opacity-0"
                              />
                              <img
                                src={lockHover}
                                alt="photoshoot"
                                className="absolute inset-0 h-5 w-5 object-contain opacity-0 transition group-hover:opacity-100"
                              />
                            </div>
                            <div className="flex w-full items-center justify-between gap-3">
                              <h4 className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-slate-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#05231C] group-hover:to-[#D4E4BF] group-hover:bg-clip-text group-hover:text-transparent">
                                AI Product Photoshoot
                              </h4>
                              <span className="shrink-0 whitespace-nowrap rounded-full bg-[#D4E4BF]/40 px-2 py-[2px] text-[10px] font-medium text-[#06231C]">
                                Coming Soon
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="space-y-4">
                        <Link to="/ai-whatsapp-marketing" onClick={() => setShowFeaturesDropdown(false)}>
                          <div className="group flex items-center gap-3 rounded-lg p-2 transition-all duration-300 hover:scale-105">
                            <div className="relative h-5 w-5 flex-shrink-0">
                              <img
                                src={ftlock}
                                alt="whatsapp"
                                className="absolute inset-0 h-5 w-5 object-contain transition group-hover:opacity-0"
                              />
                              <img
                                src={ftlockHover}
                                alt="whatsapp"
                                className="absolute inset-0 h-5 w-5 object-contain opacity-0 transition group-hover:opacity-100"
                              />
                            </div>
                            <div className="flex w-full items-center justify-between gap-3">
                              <h4 className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-slate-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#05231C] group-hover:to-[#D4E4BF] group-hover:bg-clip-text group-hover:text-transparent">
                                AI WhatsApp Marketing
                              </h4>
                            </div>
                          </div>
                        </Link>

                        <Link to="/" onClick={() => setShowFeaturesDropdown(false)}>
                          <div className="group flex items-center gap-3 rounded-lg p-2 transition-all duration-300 hover:scale-105">
                            <div className="relative h-5 w-5 flex-shrink-0">
                              <img
                                src={lock}
                                alt="research"
                                className="absolute inset-0 h-5 w-5 object-contain transition group-hover:opacity-0"
                              />
                              <img
                                src={lockHover}
                                alt="research"
                                className="absolute inset-0 h-5 w-5 object-contain opacity-0 transition group-hover:opacity-100"
                              />
                            </div>
                            <div className="flex w-full items-center justify-between gap-3">
                              <h4 className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-slate-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#05231C] group-hover:to-[#D4E4BF] group-hover:bg-clip-text group-hover:text-transparent">
                                AI Market Research
                              </h4>
                              <span className="shrink-0 whitespace-nowrap rounded-full bg-[#D4E4BF]/40 px-2 py-[2px] text-[10px] font-medium text-[#06231C]">
                                Coming Soon
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                <motion.div whileHover={{ y: -2 }}>
                  <Link to="/outcomes" className="hover:text-emerald-600 transition">Outcomes</Link>
                </motion.div>
                <motion.div whileHover={{ y: -2 }}>
                  <Link to="/feelings" className="hover:text-emerald-600 transition">Feelings</Link>
                </motion.div>
              </div>
              <OutcomeFeatureMegaMenu
                visible={showFeaturesDropdown && heroPhase <= 1}
                onMouseEnter={openFeaturesDropdown}
                onMouseLeave={closeFeaturesDropdown}
                onClose={() => setShowFeaturesDropdown(false)}
              />
              <div className="hidden w-[120px] shrink-0 md:block" />
            </div>
          </motion.div>

          <motion.div
            initial={false}
            animate={introOverlayContentAnimation}
            transition={{ duration: 0.32, ease: heroEase }}
            className="flex min-h-screen box-border items-center justify-center px-6 pb-16 pt-20 sm:px-8 md:px-14 md:pt-24 lg:px-20 xl:px-24"
          >
            <div className="mx-auto flex w-full max-w-[620px] flex-col items-center text-center">
              <div className="self-stretch">
                <h1
                  className="self-stretch text-center text-[32px] font-normal leading-[34.3px] md:text-[48px] md:leading-[48px]"
                  style={{
                    textAlign: "center",
                    fontFamily: "SF Pro",
                    fontStyle: "normal",
                    color: "#111111"
                  }}
                >
                  AI Autonomous Lab <br /> For Businesses
                </h1>

                <p
                  className="mt-3 self-stretch text-center text-[13.15px] font-[250] leading-[16.736px] md:mt-5 md:text-[16.5px] md:font-[274] md:leading-[21px]"
                  style={{
                    textAlign: "center",
                    fontFamily: "SF Pro",
                    fontStyle: "normal",
                    color: "#4B5563"
                  }}
                >
                  Kactus AI turns a single WhatsApp message into complete business execution on its own through:
                </p>
              </div>

              <div className="mt-10 h-[158px] w-full md:mt-11" />
            </div>
          </motion.div>
        </motion.div>

        <div
          className="pointer-events-none absolute inset-0 z-[55] flex min-h-screen box-border items-center justify-center px-6 pb-16 pt-20 sm:px-8 md:px-14 md:pt-24 lg:px-20 xl:px-24"
          aria-hidden="true"
        >
          <div className="mx-auto flex w-full max-w-[620px] flex-col items-center text-center">
            <div className="invisible self-stretch select-none">
              <h1
                className="self-stretch text-center text-[32px] font-normal leading-[34.3px] md:text-[48px] md:leading-[48px]"
                style={{
                  textAlign: "center",
                  fontFamily: "SF Pro",
                  fontStyle: "normal",
                  fontWeight: 400
                }}
              >
                AI Autonomous Lab <br /> For Businesses
              </h1>

              <p
                className="mt-3 self-stretch text-center text-[13.15px] font-[250] leading-[16.736px] md:mt-5 md:text-[16.5px] md:font-[274] md:leading-[21px]"
                style={{
                  textAlign: "center",
                  fontFamily: "SF Pro",
                  fontStyle: "normal"
                }}
              >
                Kactus AI turns a single WhatsApp message into complete business execution on its own through:
              </p>
            </div>

            <div className="relative mt-10 grid grid-cols-[112px_1px_112px] items-center justify-center gap-5 md:mt-11 md:grid-cols-[132px_1px_132px] md:gap-7">
              <div className="relative flex h-[150px] w-full items-center justify-center">
                <motion.svg
                  initial={false}
                  animate={introOverlayMarkAnimation}
                  transition={{ duration: 0.52, ease: heroEase }}
                  viewBox="0 0 46 105"
                  aria-hidden="true"
                  className="relative h-[128px] w-[58px] md:h-[136px] md:w-[62px]"
                  style={{ overflow: "visible" }}
                >
                  <path d="M0 23.7432C0 20.2304 2.84763 17.3828 6.36035 17.3828C9.87308 17.3828 12.7207 20.2304 12.7207 23.7432V73.8762C5.69525 73.8762 0 68.1809 0 61.1555V23.7432Z" fill="white" />
                  <path d="M16.9609 6.36036C16.9609 2.84763 19.8086 0 23.3213 0C26.834 0 29.6816 2.84763 29.6816 6.36035V91.5748C29.6816 98.6002 23.9864 104.295 16.9609 104.295V6.36036Z" fill="white" />
                  <circle cx="39.4938" cy="77.7946" r="5.64221" fill="white" />
                </motion.svg>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          animate={heroNavAnimation}
          transition={{ duration: 0.28, delay: 0.04, ease: heroEase }}
          className={`pointer-events-auto absolute inset-x-0 top-0 z-[60] transition-colors duration-300 ${
            showFeaturesDropdown
              ? "border-b border-dashed border-[#dfe5df] bg-white"
              : "bg-transparent"
          }`}
        >
          <div className="relative flex items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <img src={showFeaturesDropdown ? logo : logo2} alt="Kactus Logo" className="h-8 w-auto" />
            </Link>

            <div className={`absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 font-normal md:flex ${
              showFeaturesDropdown ? "text-[#111111]" : "text-white"
            }`}>
                <div
                  className="relative"
                  onMouseEnter={openFeaturesDropdown}
                  onMouseLeave={closeFeaturesDropdown}
                >
                  <motion.div whileHover={{ y: -2 }}>
                    <button
                      type="button"
                      aria-expanded={showFeaturesDropdown}
                      onClick={() => setShowFeaturesDropdown((prev) => !prev)}
                      className="flex cursor-pointer items-center gap-1 transition hover:text-emerald-600"
                    >
                      Features
                      <svg
                        className={`mt-[1px] h-3.5 w-3.5 transition-transform duration-200 ${showFeaturesDropdown ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                  </motion.div>

                  {false && showFeaturesDropdown && (
                    <div className="absolute left-0 top-full h-4 w-full" />
                  )}

                  {false && showFeaturesDropdown && (
                    <div className="absolute left-1/2 top-[calc(100%+8px)] z-30 grid w-[560px] -translate-x-1/2 grid-cols-2 gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl transition-all duration-200">
                      <div className="space-y-4">
                        <Link to="/vto" onClick={() => setShowFeaturesDropdown(false)}>
                          <div className="group flex items-center gap-3 rounded-lg p-2 transition-all duration-300 hover:scale-105">
                            <div className="relative h-5 w-5 flex-shrink-0">
                              <img
                                src={ftlock}
                                alt="vto"
                                className="absolute inset-0 h-5 w-5 object-contain transition duration-300 group-hover:opacity-0"
                              />
                              <img
                                src={ftlockHover}
                                alt="vto"
                                className="absolute inset-0 h-5 w-5 object-contain opacity-0 transition duration-300 group-hover:opacity-100"
                              />
                            </div>
                            <h4 className="whitespace-nowrap font-semibold text-slate-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#05231C] group-hover:to-[#D4E4BF] group-hover:bg-clip-text group-hover:text-transparent">
                              Virtual Try-On
                            </h4>
                          </div>
                        </Link>

                        <Link to="/" onClick={() => setShowFeaturesDropdown(false)}>
                          <div className="group flex items-center gap-3 rounded-lg p-2 transition-all duration-300 hover:scale-105">
                            <div className="relative h-5 w-5 flex-shrink-0">
                              <img
                                src={lock}
                                alt="photoshoot"
                                className="absolute inset-0 h-5 w-5 object-contain transition group-hover:opacity-0"
                              />
                              <img
                                src={lockHover}
                                alt="photoshoot"
                                className="absolute inset-0 h-5 w-5 object-contain opacity-0 transition group-hover:opacity-100"
                              />
                            </div>
                            <div className="flex w-full items-center justify-between gap-3">
                              <h4 className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-slate-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#05231C] group-hover:to-[#D4E4BF] group-hover:bg-clip-text group-hover:text-transparent">
                                AI Product Photoshoot
                              </h4>
                              <span className="shrink-0 whitespace-nowrap rounded-full bg-[#D4E4BF]/40 px-2 py-[2px] text-[10px] font-medium text-[#06231C]">
                                Coming Soon
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="space-y-4">
                        <Link to="/ai-whatsapp-marketing" onClick={() => setShowFeaturesDropdown(false)}>
                          <div className="group flex items-center gap-3 rounded-lg p-2 transition-all duration-300 hover:scale-105">
                            <div className="relative h-5 w-5 flex-shrink-0">
                              <img
                                src={ftlock}
                                alt="whatsapp"
                                className="absolute inset-0 h-5 w-5 object-contain transition group-hover:opacity-0"
                              />
                              <img
                                src={ftlockHover}
                                alt="whatsapp"
                                className="absolute inset-0 h-5 w-5 object-contain opacity-0 transition group-hover:opacity-100"
                              />
                            </div>
                            <div className="flex w-full items-center justify-between gap-3">
                              <h4 className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-slate-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#05231C] group-hover:to-[#D4E4BF] group-hover:bg-clip-text group-hover:text-transparent">
                                AI WhatsApp Marketing
                              </h4>
                            </div>
                          </div>
                        </Link>

                        <Link to="/" onClick={() => setShowFeaturesDropdown(false)}>
                          <div className="group flex items-center gap-3 rounded-lg p-2 transition-all duration-300 hover:scale-105">
                            <div className="relative h-5 w-5 flex-shrink-0">
                              <img
                                src={lock}
                                alt="research"
                                className="absolute inset-0 h-5 w-5 object-contain transition group-hover:opacity-0"
                              />
                              <img
                                src={lockHover}
                                alt="research"
                                className="absolute inset-0 h-5 w-5 object-contain opacity-0 transition group-hover:opacity-100"
                              />
                            </div>
                            <div className="flex w-full items-center justify-between gap-3">
                              <h4 className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-slate-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#05231C] group-hover:to-[#D4E4BF] group-hover:bg-clip-text group-hover:text-transparent">
                                AI Market Research
                              </h4>
                              <span className="shrink-0 whitespace-nowrap rounded-full bg-[#D4E4BF]/40 px-2 py-[2px] text-[10px] font-medium text-[#06231C]">
                                Coming Soon
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                <motion.div whileHover={{ y: -2 }}>
                  <Link to="/outcomes" className="hover:text-emerald-600 transition">Outcomes</Link>
                </motion.div>
                <motion.div whileHover={{ y: -2 }}>
                  <Link to="/feelings" className="hover:text-emerald-600 transition">Feelings</Link>
                </motion.div>
              </div>

            <OutcomeFeatureMegaMenu
              visible={showFeaturesDropdown && heroPhase >= 2}
              onMouseEnter={openFeaturesDropdown}
              onMouseLeave={closeFeaturesDropdown}
              onClose={() => setShowFeaturesDropdown(false)}
            />
            <div className="hidden w-[120px] shrink-0 md:block" />
          </div>
        </motion.div>

        <div className="relative z-10 flex min-h-screen box-border items-center justify-center px-6 pb-16 pt-20 sm:px-8 md:px-14 md:pt-24 lg:px-20 xl:px-24">
          <div className="mx-auto flex w-full max-w-[620px] flex-col items-center text-center">
            <motion.div
              initial={false}
              animate={heroCopyAnimation}
              transition={{ duration: 0.34, delay: 0.08, ease: heroEase }}
              className="relative z-[60] self-stretch"
            >
              <h1
                className="self-stretch text-center text-[32px] font-normal leading-[34.3px] md:text-[48px] md:leading-[48px]"
                style={{
                  textAlign: "center",
                  fontFamily: "SF Pro",
                  fontStyle: "normal",
                  color: "#FFFFFF"
                }}
              >
                AI Autonomous Lab <br /> For Businesses
              </h1>

              <p
                className="mt-3 self-stretch text-center text-[13.15px] font-[250] leading-[16.736px] md:mt-5 md:text-[16.5px] md:font-[274] md:leading-[21px]"
                style={{
                  textAlign: "center",
                  fontFamily: "SF Pro",
                  fontStyle: "normal",
                  color: "rgba(255,255,255,0.82)"
                }}
              >
                Kactus AI turns a single WhatsApp message into complete business execution on its own through:
              </p>
            </motion.div>

            <div className="relative mt-10 grid grid-cols-[112px_1px_112px] items-center justify-center gap-5 md:mt-11 md:grid-cols-[132px_1px_132px] md:gap-7">
              <motion.div
                initial={false}
                animate={leftHeroIconAnimation}
                transition={{ duration: 1.5, delay: 0.06, ease: heroEase }}
                className="relative flex h-[150px] w-full items-center justify-center"
              >
                <div className="absolute inset-x-3 top-1/2 h-24 -translate-y-1/2 rounded-full bg-white/16 blur-[36px]" />
                <motion.svg
                  viewBox="0 0 46 105"
                  aria-hidden="true"
                  className="relative h-[128px] w-[58px] md:h-[136px] md:w-[62px]"
                  style={{ overflow: "visible" }}
                >
                  <motion.g
                    initial={false}
                    animate={kactusShortBarAnimation}
                    transition={{ duration: 1.5, delay: 0.08, ease: heroEase }}
                    style={{ transformOrigin: "6px 46px" }}
                  >
                    <path d="M0 23.7432C0 20.2304 2.84763 17.3828 6.36035 17.3828C9.87308 17.3828 12.7207 20.2304 12.7207 23.7432V73.8762C5.69525 73.8762 0 68.1809 0 61.1555V23.7432Z" fill="white" />
                  </motion.g>
                  <motion.g
                    initial={false}
                    animate={kactusTallBarAnimation}
                    transition={{ duration: 1.5, delay: 0.04, ease: heroEase }}
                    style={{ transformOrigin: "23px 52px" }}
                  >
                    <path d="M16.9609 6.36036C16.9609 2.84763 19.8086 0 23.3213 0C26.834 0 29.6816 2.84763 29.6816 6.36035V91.5748C29.6816 98.6002 23.9864 104.295 16.9609 104.295V6.36036Z" fill="white" />
                  </motion.g>
                  <motion.g
                    initial={false}
                    animate={kactusDotAnimation}
                    transition={{ duration: 1.5, delay: 0.1, ease: heroEase }}
                    style={{ transformOrigin: "39px 78px" }}
                  >
                    <circle cx="39.4938" cy="77.7946" r="5.64221" fill="white" />
                  </motion.g>
                </motion.svg>
              </motion.div>

              <motion.div
                initial={false}
                animate={dividerAnimation}
                transition={{ duration: 0.28, delay: 0.04, ease: heroEase }}
                className="h-[116px] w-px origin-center justify-self-center bg-white/70"
              />

              <motion.div
                initial={false}
                animate={rightHeroIconAnimation}
                transition={{ duration: 0.38, delay: 0.08, ease: heroEase }}
                className="relative flex h-[150px] w-full items-center justify-center"
              >
                <div className="absolute inset-x-3 top-1/2 h-[92px] -translate-y-1/2 rounded-full bg-[#74ff83]/10 blur-[34px]" />
                <img
                  src={outcomeWhatsapp}
                  alt="WhatsApp"
                  className="relative h-[88px] w-[88px] object-contain md:h-[96px] md:w-[96px]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-8 md:px-14 md:py-20 lg:px-20 xl:px-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="relative px-1 sm:px-2 lg:px-4">
            <button
              type="button"
              onClick={() => handleBusinessExecutionSlideChange(-1)}
              aria-label="Show previous outcome"
              className="absolute left-0 top-1/2 z-10 hidden h-14 w-14 -translate-x-[52px] -translate-y-1/2 items-center justify-center rounded-full text-[#C7CBC4] transition-all duration-300 hover:bg-[#F6F8F2] hover:text-[#06231C] lg:flex"
            >
              <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14.5 5L7.5 12L14.5 19" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => handleBusinessExecutionSlideChange(1)}
              aria-label="Show next outcome"
              className="absolute right-0 top-1/2 z-10 hidden h-14 w-14 translate-x-[52px] -translate-y-1/2 items-center justify-center rounded-full text-[#C7CBC4] transition-all duration-300 hover:bg-[#F6F8F2] hover:text-[#06231C] lg:flex"
            >
              <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9.5 5L16.5 12L9.5 19" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeBusinessExecutionSlide}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="grid items-start gap-10 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-[58px]"
              >
                <motion.div
                  variants={businessExecutionLeftVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  className="flex flex-col gap-6 pt-1 md:gap-10 lg:self-start lg:gap-14"
                >
                  <div>
                    <h2
                      className="block max-w-[250px] overflow-visible pb-[6px] text-[32px] leading-[34.3px] md:text-[41px] md:leading-[52px]"
                      style={{
                        fontFamily: '"SF Pro", sans-serif',
                        fontStyle: "normal",
                        fontWeight: 510,
                        background: "linear-gradient(90deg, #06231C 48.13%, #D4E5C0 120.12%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                      }}
                    >
                      {activeBusinessExecutionContent.heading}
                    </h2>
                  </div>

                  <div>
                    <p
                      className="text-[13.15px] leading-[16.736px] text-[#D0D2CE] md:text-[22px] md:leading-none"
                      style={{
                        fontFamily: '"SF Pro", sans-serif',
                        fontStyle: "normal",
                        fontWeight: 400
                      }}
                    >
                      {activeBusinessExecutionContent.label}
                    </p>
                    <div
                      className="mt-1 text-[72px] leading-none text-[#F0F1EE] sm:text-[112px] md:mt-2 md:text-[136px] lg:text-[190px]"
                      style={{
                        fontFamily: '"SF Pro", sans-serif',
                        fontStyle: "normal",
                        fontWeight: 510,
                        letterSpacing: "-0.06em"
                      }}
                    >
                      {activeBusinessExecutionContent.number}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={businessExecutionRightVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  className="border-t border-[#E1E4DC]"
                >
                  {activeBusinessExecutionContent.rows.map((item, index) => {
                    const isOpen = activeBusinessExecutionOpenIndex === index;

                    return (
                      <motion.div
                        key={`${activeBusinessExecutionContent.number}-${item.title}`}
                        className="border-b border-[#E1E4DC]"
                        variants={businessExecutionRowVariants}
                      >
                        <button
                          type="button"
                          onClick={() => handleBusinessExecutionRowToggle(index)}
                          className="flex w-full items-start justify-between gap-3 py-4 text-left md:items-center md:gap-4 md:py-6"
                        >
                          <div className="min-w-0 pr-4">
                            <div
                              className="text-[13.15px] leading-[16.736px] text-[#161616] sm:text-[18px] sm:leading-[1.35] md:text-[18px] lg:text-[20px]"
                              style={{
                                fontFamily: '"SF Pro", sans-serif',
                                fontStyle: "normal",
                                letterSpacing: "-0.02em"
                              }}
                            >
                              {item.subtitle ? (
                                <>
                                  <span className="font-normal text-[#111111] sm:font-[590]">{item.title}:</span>{" "}
                                  <span className="font-normal text-[#4B4B4B]">{item.subtitle}</span>
                                </>
                              ) : (
                                <span className="font-normal text-[#111111] sm:font-[590]">{item.title}</span>
                              )}
                            </div>

                            <AnimatePresence initial={false}>
                              {isOpen && (
                                <motion.p
                                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                  animate={{ height: "auto", opacity: 1, marginTop: 14 }}
                                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                  transition={{ duration: 0.24, ease: "easeInOut" }}
                                  className="max-w-[770px] overflow-hidden text-[13.15px] leading-[16.736px] text-[#5C5C5C] sm:text-[15px] sm:leading-[1.75]"
                                  style={{
                                    fontFamily: '"SF Pro", sans-serif',
                                    fontStyle: "normal",
                                    fontWeight: 250
                                  }}
                                >
                                  {item.answer}
                                </motion.p>
                              )}
                            </AnimatePresence>
                          </div>

                          <span className="relative flex h-9 w-9 shrink-0 items-center justify-center text-[0px] leading-none text-transparent">
                            {isOpen ? (
                              <svg viewBox="0 0 20 20" className="absolute h-5 w-5 text-[#1A1A1A]" fill="none" stroke="currentColor" strokeWidth="1.8">
                                <path d="M4 10H16" strokeLinecap="round" />
                              </svg>
                            ) : (
                              <svg viewBox="0 0 20 20" className="absolute h-5 w-5 text-[#1A1A1A]" fill="none" stroke="currentColor" strokeWidth="1.8">
                                <path d="M4 10H16" strokeLinecap="round" />
                                <path d="M10 4V16" strokeLinecap="round" />
                              </svg>
                            )}
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </motion.div>
              );
            })}
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 lg:hidden">
                <button
                  type="button"
                  onClick={() => handleBusinessExecutionSlideChange(-1)}
                  aria-label="Show previous outcome"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E3E6DD] text-[#8D9487] transition-colors hover:text-[#06231C]"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14.5 5L7.5 12L14.5 19" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => handleBusinessExecutionSlideChange(1)}
                  aria-label="Show next outcome"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E3E6DD] text-[#8D9487] transition-colors hover:text-[#06231C]"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9.5 5L16.5 12L9.5 19" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              <div className="mx-auto flex items-center gap-2">
                {businessExecutionSlides.map((slide, index) => {
                  const isActive = index === activeBusinessExecutionSlide;

                  return (
                    <button
                      key={slide.number}
                      type="button"
                      onClick={() => handleBusinessExecutionSlideSelect(index)}
                      aria-label={`Show ${slide.heading}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        isActive ? "w-6 bg-[#06231C]" : "w-2.5 bg-[#D7DDD4] hover:bg-[#BCC7B8]"
                      }`}
                    />
                  );
                })}
              </div>

              <div className="hidden w-[96px] lg:block" />
            </div>
          </div>
        </div>
      </section>

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </main>
  );
}
