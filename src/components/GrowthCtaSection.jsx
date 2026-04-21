import { motion } from "framer-motion";
import ctaImage from "../assets/images/Integration/ctaImage.png";

const defaultPoints = [
  "150+ Handcoded",
  "150+ Handcoded",
  "150+ Handcoded"
];

export default function GrowthCtaSection({
  onPrimaryClick,
  onSecondaryClick,
  titleLines = ["AI Visual Engine for", "Fashion Brands"],
  subtitle = "Scale Your Growth Today.",
  points = defaultPoints,
  primaryLabel = "Schedule a Demo",
  secondaryLabel = "Outcome",
  imageAlt = "KactusLabs dashboard call-to-action preview"
}) {
  return (
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
            {titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <p
            className="mt-4 text-[24px] font-normal leading-[1.16] text-[#1B5D4D] sm:text-[28px] md:text-[34px]"
            style={{ fontFamily: '"SF Pro", sans-serif' }}
          >
            {subtitle}
          </p>

          <div className="mt-12 space-y-5">
            {points.map((point, index) => (
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
              onClick={onPrimaryClick}
              className="inline-flex h-10 min-w-[168px] items-center justify-center rounded-[4px] bg-[#D4E5C0] px-6 text-[15px] font-medium text-[#06231C] transition-all duration-300 hover:translate-y-[-1px] hover:bg-[#dbe9ca]"
            >
              {primaryLabel}
            </button>

            {secondaryLabel ? (
              <button
                type="button"
                onClick={onSecondaryClick}
                className="inline-flex h-10 min-w-[136px] items-center justify-center rounded-[4px] border border-[#16362D] bg-white px-6 text-[15px] font-medium text-[#16362D] transition-all duration-300 hover:translate-y-[-1px] hover:bg-[#f8fbf3]"
              >
                {secondaryLabel}
              </button>
            ) : null}
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
              borderRight: "none",
              borderBottom: "none"
            }}
          >
            <div
              className="overflow-hidden rounded-tl-[22px] border-t border-l border-[#EEF2E3] bg-white"
              style={{
                borderRight: "none",
                borderBottom: "none"
              }}
            >
              <img
                src={ctaImage}
                alt={imageAlt}
                className="block h-auto w-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
