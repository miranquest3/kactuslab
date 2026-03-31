import { useState } from "react"
import { motion } from "framer-motion"

// image
import HeroImage from "../assets/images/Home/Virtual-Try-On.jpg"
import vtoImage from "../assets/images/Vto/vtoImg.png"
import instant from "../assets/images/Vto/instant vto.png"
import download from "../assets/images/Vto/download f.png"
import size from "../assets/images/Vto/smart size.png"
import challanges from "../assets/images/Vto/sec 2.svg"
import vto from "../assets/images/Vto/vto.mp4"

export default function AiPhotoShoot() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <main className="bg-[#ffffff] text-slate-800">

     {/* ================= 1. HERO SECTION ================= */}
<section id="vto-hero" className="overflow-hidden px-6 md:px-12 lg:px-20 py-10">

  <div className="bg-gradient-to-br from-[#EDEFE6] via-[#EEF1E8] to-[#E6EBDD] 
                  rounded-[40px] px-6 sm:px-10 md:px-16 py-12 md:py-16
                  grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-stretch
                  shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-white/30">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col justify-center h-full"
    >
      {/* TAG */}
      <p className="text-base md:text-lg font-semibold tracking-wide text-[#05231C] mb-3">
        AI SHOPPING EXPERIENCE PLATFORM
      </p>

      {/* HEADING */}
      <h1 className="font-serif leading-[1.1] text-[#05231C]">
        <span className="block text-4xl md:text-5xl lg:text-[56px] font-medium">
          More Conversions
        </span>
        <span className="block text-4xl md:text-5xl lg:text-[56px] font-medium mt-1">
          Up to 40% Fewer Returns
        </span>
      </h1>

      {/* DESCRIPTION */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-5 text-slate-600 max-w-lg text-base md:text-lg leading-relaxed"
      >
        Stop guesswork. See your fit instantly with AI-powered try-on and
        precise size recommendations—boosting customer confidence and
        reducing brand returns.
      </motion.p>

      {/* BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-7"
      >
        <button
          onClick={() => setIsDemoOpen(true)}
          className="bg-[#05231C] text-white px-7 py-3 rounded-full 
                     font-medium shadow-md hover:shadow-lg 
                     transition-all duration-300 hover:-translate-y-0.5"
        >
          BOOK A DEMO
        </button>
      </motion.div>
    </motion.div>

    {/* RIGHT VIDEO */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95, x: 80 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="relative h-full flex items-center"
    >
      <video
        src={vto}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover rounded-3xl 
                   shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
      />

      {/* overlay */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
    </motion.div>

  </div>
</section>


   {/* ================= 2. CHALLENGES SECTION ================= */}
<section id="vto-challenges" className="px-6 md:px-16 py-4 bg-[#F7F7F7]">

  <div className="max-w-7xl mx-auto">

    {/* HEADING */}
    <h2 className="text-center font-serif text-4xl md:text-5xl text-[#1D2B24]">
      Challenges Every Fashion <br /> Brand Faces
    </h2>

    <div className="mt-2 grid md:grid-cols-[60%_40%]  items-center">

      {/* ================= LEFT SIDE (IMAGE) ================= */}
      <div className="flex justify-center md:justify-start">

        <img
          src={challanges}
          alt="Customer Confusion Flow"
          className="w-full max-w-[700px] object-contain"
        />

      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="bg-gradient-to-br from-[#062E22] to-[#0B3D2E] 
                      rounded-[32px] p-10 md:p-12 text-white">

        <h3 className="font-serif text-2xl mb-8 text-[#D4E5C0]">
          How this Effect Brands?
        </h3>

        <ul className="space-y-6 text-[15px]">

          <li className="flex items-center gap-3">
            <span className="text-red-400 text-xl">✕</span>
            Lower Conversion Rates
          </li>

          <li className="flex items-center gap-3">
            <span className="text-red-400 text-xl">✕</span>
            High Return Costs
          </li>

          <li className="flex items-center gap-3">
            <span className="text-red-400 text-xl">✕</span>
            Dead Inventory Accumulation
          </li>

          <li className="flex items-center gap-3">
            <span className="text-red-400 text-xl">✕</span>
            Loss of Customer Trust
          </li>

        </ul>

      </div>

    </div>

  </div>

</section>

    {/* ================= 3. SOLUTION / VTO SECTION ================= */}
<section id="vto-solution" className="px-6 md:px-16 py-20 bg-[#ffffff]">

  <div className="max-w-7xl mx-auto">

    {/* ================= HEADING ================= */}
    <h2 className="text-center font-serif text-4xl md:text-5xl leading-tight text-[#1D2B24]">
      KactusLabs Brings Smarter Tools for <br />
      Better Buying Decisions
    </h2>

    {/* ================= MAIN CARD ================= */}
<div className="mt-14 bg-gradient-to-r from-[#052E22] via-[#063B2B] to-[#0B3D2E] 
                rounded-[48px] px-8 md:px-16 py-12 md:py-14
                grid md:grid-cols-2 gap-12 items-stretch text-white">

  {/* LEFT CONTENT */}
  <div className="flex flex-col justify-center h-full">

    {/* HEADING */}
    <h3 className="font-serif text-[32px] md:text-[42px] leading-tight text-[#D4E5C0] mb-5">
      Virtual Try-On
    </h3>

    {/* DESCRIPTION */}
    <p className="text-white text-sm md:text-base leading-relaxed max-w-xl md:text-justify">
      KactusLabs stands apart with its AI-powered Virtual Try-On,
      combining instant visualization of outfits and smart size
      recommendations to boost buyer confidence. It also leverages
      try-on data for Whatsapp marketing, while brand logos as
      watermark on try-on images turn every interaction into a
      growth opportunity.
    </p>

    {/* LINK TEXT */}
    <p className="mt-6 text-sm text-[#D4E5C0] hover:text-white transition cursor-pointer">
      Explore Try On Whatsapp Marketing →
    </p>

  </div>

  {/* RIGHT IMAGE */}
  <div className="h-full flex items-center">

    <img
      src={vtoImage}
      alt="VTO Preview"
      className="w-full h-full object-cover rounded-[32px] 
                 shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
    />

  </div>

</div>
    {/* ================= SUB TEXT ================= */}
    <p className="text-center mt-12 text-[32px] md:text-[38px] text-[#05231C] font-serif leading-relaxed ">
      Not just a Virtual Try-On, KactusLabs delivers a complete,
      intelligent shopping experience
    </p>

{/* ================= FEATURE CARDS ================= */}
<div className="grid md:grid-cols-3 gap-8 mt-12 font-inter">

  {/* CARD 1 */}
  <div className="bg-gradient-to-br from-[#062E22] to-[#0B3D2E] 
                  text-white p-8 pb-6 rounded-[32px] flex flex-col">

    {/* ICON + HEADING */}
    <div className="flex items-center gap-3 mb-4">
      <img src={instant} alt="icon" className="w-6 h-6" />
      <h4 className="text-[20px] font-semibold">
        Instant Visualization
      </h4>
    </div>

    {/* TEXT */}
    <p className="text-[15px] leading-relaxed text-white/80 ">
Users instantly see how an outfit looks on their own body with a single click, eliminating guesswork through high-quality, accurate visualization of fabric, pattern, and texture.
    </p>

    {/* BULLET */}
    <p className="mt-5 text-[14px] text-white/80">
      • Helps customers feel confident before buying{" "}
      <span className="font-semibold text-white">
        → Increases Conversions
      </span>
    </p>

  </div>

  {/* CARD 2 */}
  <div className="bg-[#C9D6B8] text-[#1D2B24] 
                  p-8 pb-6 rounded-[32px] flex flex-col">

    <div className="flex items-center gap-3 mb-4">
      <img src={size} alt="icon" className="w-6 h-6" />
      <h4 className="text-[20px] font-semibold">
        Smart Sizing for Better Fit
      </h4>
    </div>

    <p className="text-[15px] leading-relaxed text-[#1D2B24]/80">
      KactusLabs analyze the user’s BMI and use AI algorithms to recommend the most accurate size for that individual.
    </p>

    <p className="mt-9  text-[14px] text-[#1D2B24]/80 ">
      • Helps users choose the right size{" "}
      <span className="font-semibold text-[#1D2B24]">
        → Reduces wrong-size orders & returns
      </span>
    </p>

  </div>

  {/* CARD 3 */}
  <div className="bg-[#E4EAD9] text-[#1D2B24] 
                  p-8 pb-6 rounded-[32px] flex flex-col">

    <div className="flex items-center gap-3 mb-4">
      <img src={download} alt="icon" className="w-6 h-6" />
      <h4 className="text-[20px] font-semibold">
        Watermarked Downloads
      </h4>
    </div>

    <p className="text-[15px] leading-relaxed text-[#1D2B24]/80">
      After virtual try-on, users can download or share their generated images with brand watermark.
    </p>

    <p className="mt-9 text-[14px] text-[#1D2B24]/80">
      • Every shared image becomes organic marketing{" "}
      <span className="font-semibold text-[#1D2B24]">
        → Increases brand recognition & awareness
      </span>
    </p>

  </div>

</div>
</div>

</section>
{/* ================= 4. COMPARISON SECTION ================= */}
<section id="vto-comparison" className="px-6 md:px-16  bg-[#ffffff]">

  <div className="max-w-6xl mx-auto">

    {/* HEADING */}
    <h2 className="font-serif text-4xl md:text-5xl text-[#1D2B24] 
                   text-center leading-tight mb-16">
      Why Kactuslabs Virtual Try-On <br />
      Outperforms Traditional Try-On
    </h2>

    {/* CARDS */}
    <div className="grid md:grid-cols-2 gap-10">

      {/* ================= LEFT CARD ================= */}
      <div className="bg-[#F7F8F3] 
                      border-2 border-[#D6E2C8] 
                      rounded-[32px] 
                      px-10 py-12 
                      text-left 
                      min-h-[340px] flex flex-col justify-start">

        <h3 className="font-serif text-[26px] text-[#1D2B24] mb-8">
          Other Brands
        </h3>

        <ul className="space-y-6 text-[15px] text-[#2F3E35] leading-relaxed">

          <li>• Absence of a direct purchase option following the try-on.</li>

          <li>• Inconsistent brand experience.</li>

          <li>• Limited or nonexistent sharing options.</li>

          <li>• The VTO limited to Try On only.</li>

        </ul>

      </div>

      {/* ================= RIGHT CARD ================= */}
      <div className="bg-gradient-to-br from-[#062E22] to-[#0B3D2E] 
                      rounded-[32px] 
                      px-10 py-12 
                      text-left text-white 
                      min-h-[340px] flex flex-col justify-start">

        <h3 className="font-serif text-[26px] mb-8 text-[#D4E5C0]">
          Kactuslabs
        </h3>

        <ul className="space-y-6 text-[15px] text-white/90 leading-relaxed">

          <li>• Instant buy option with visible discounts.</li>

          <li>• Brand-consistent color palette.</li>

          <li>• Easy share & download with subtle watermark.</li>

          <li>
            • The Virtual Try-On comes with AI Powered Size recommendation,
            and brand watermark.
          </li>

        </ul>

      </div>

    </div>

  </div>

</section>
{/* ================= 5. CTA SECTION ================= */}
<section id="vto-cta" className="px-6 md:px-16 py-24 bg-[#ffffff]">

  <div className="max-w-7xl mx-auto">

    <div className="bg-gradient-to-r from-[#0B2F25] via-[#061E18] to-black
                    rounded-[32px] md:rounded-[40px]
                    px-6 md:px-16 py-16 md:py-20
                    text-center">

      {/* HEADING */}
      <h2 className="font-serif text-3xl md:text-5xl leading-tight text-[#E6EFE3]">
        AI Visual Engine for Fashion Brands 
      </h2>
      <h2 className="font-serif text-3xl md:text-5xl leading-tight text-[#ffffff]">
        
        Scale Your Growth Today
      </h2>

      {/* BUTTON */}
      <div className="mt-10">
        <button
          className="border border-[#E6EFE3]/40 
                     text-[#E6EFE3]
                     px-7 py-3 rounded-full text-sm
                     hover:bg-[#E6EFE3] hover:text-black
                     transition-all duration-300"
        >
          Contact us
        </button>
      </div>

    </div>

  </div>

</section>
    </main>
  )
}