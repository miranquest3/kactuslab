import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
  primaryTo = "/contact",
  secondaryTo = "/outcomes",
  imageAlt = "Kactus AI dashboard call-to-action preview",
  mobileDashboardLayout = false,
  responsiveDashboardLayout = false,
  responsiveTitleLines = null,
  responsivePoints = null
}) {
  const useMobileDashboardLayout = mobileDashboardLayout || responsiveDashboardLayout;

  return (
    <section className={`relative overflow-hidden bg-white lg:px-20 lg:pb-[72px] lg:pt-8 xl:px-24 ${useMobileDashboardLayout ? "px-[21px] pb-0 pt-6 md:px-8 md:pt-12" : "px-6 pb-14 pt-6 sm:px-8 md:px-14 md:pb-[72px] md:pt-8"}`}>
      <div className={`mx-auto grid max-w-[1380px] lg:grid-cols-[40%_60%] lg:items-center lg:gap-8 ${useMobileDashboardLayout ? "gap-9 md:gap-10" : "gap-10"}`}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`max-w-full lg:pr-6 ${responsiveDashboardLayout ? "contents lg:block" : ""}`}
        >
          <h2
            className={`w-full font-normal text-[#06231C] lg:text-left lg:text-[54px] lg:leading-[1.05] lg:tracking-[-0.03em] xl:text-[56px] ${useMobileDashboardLayout ? "text-[30px] leading-[32px] tracking-normal md:text-center md:text-[42px] md:leading-[45px]" : "text-[34px] leading-[1.05] tracking-[-0.03em] sm:text-[42px] md:text-[48px]"}`}
            style={{ fontFamily: '"SF Pro", sans-serif' }}
          >
            {responsiveDashboardLayout && responsiveTitleLines ? responsiveTitleLines.map((line) => (
              <span key={`responsive-${line}`} className="block lg:hidden">
                {line}
              </span>
            )) : null}
            {titleLines.map((line) => (
              <span key={line} className={`block ${responsiveDashboardLayout && responsiveTitleLines ? "hidden lg:block" : ""}`}>
                {line}
              </span>
            ))}
          </h2>

          <p
            className={`mt-4 font-normal text-[#1B5D4D] lg:text-left lg:text-[34px] ${useMobileDashboardLayout ? "text-[22px] leading-[27px] md:hidden" : "text-[24px] leading-[1.16] sm:text-[28px] md:text-[34px]"}`}
            style={{ fontFamily: '"SF Pro", sans-serif' }}
          >
            {subtitle}
          </p>

          <div className={responsiveDashboardLayout ? "mt-9 grid grid-cols-[minmax(0,46%)_minmax(0,54%)] items-start gap-3 md:mt-10 md:grid-cols-[minmax(0,48%)_minmax(0,52%)] lg:contents" : ""}>
            <div className={responsiveDashboardLayout ? "lg:block" : ""}>
              <div className={`${useMobileDashboardLayout ? "mt-10 space-y-5 md:mt-0 lg:mt-12" : "mt-12 space-y-5"}`}>
                {(responsiveDashboardLayout && responsivePoints ? responsivePoints : points).map((point, index) => (
                  <div key={`responsive-point-${point}-${index}`} className={`items-center gap-3 ${responsiveDashboardLayout && responsivePoints ? "flex lg:hidden" : "flex"}`}>
                    <span className={`flex shrink-0 items-center justify-center rounded-full border border-[#7D8781] text-[#4E5C56] ${useMobileDashboardLayout ? "h-[21px] w-[21px] md:h-[26px] md:w-[26px] lg:h-6 lg:w-6" : "h-6 w-6"}`}>
                      <svg viewBox="0 0 16 16" className={`${useMobileDashboardLayout ? "h-3 w-3 md:h-4 md:w-4 lg:h-3.5 lg:w-3.5" : "h-3.5 w-3.5"}`} aria-hidden="true">
                        <path d="M4 8.1 6.7 10.8 12 5.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <p
                      className={`max-w-[300px] leading-[1.35] text-[#4F5B57] lg:text-[19px] ${useMobileDashboardLayout ? "text-[16px] md:text-[20px]" : "text-[18px] md:text-[19px]"}`}
                      style={{ fontFamily: '"SF Pro", sans-serif' }}
                    >
                      {point}
                    </p>
                  </div>
                ))}
                {responsiveDashboardLayout && responsivePoints ? points.map((point, index) => (
                  <div key={`desktop-point-${point}-${index}`} className="hidden items-center gap-3 lg:flex">
                    <span className={`flex shrink-0 items-center justify-center rounded-full border border-[#7D8781] text-[#4E5C56] ${useMobileDashboardLayout ? "h-[21px] w-[21px] md:h-[26px] md:w-[26px] lg:h-6 lg:w-6" : "h-6 w-6"}`}>
                      <svg viewBox="0 0 16 16" className={`${useMobileDashboardLayout ? "h-3 w-3 md:h-4 md:w-4 lg:h-3.5 lg:w-3.5" : "h-3.5 w-3.5"}`} aria-hidden="true">
                        <path d="M4 8.1 6.7 10.8 12 5.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <p
                      className={`max-w-[300px] leading-[1.35] text-[#4F5B57] lg:text-[19px] ${useMobileDashboardLayout ? "text-[16px] md:text-[20px]" : "text-[18px] md:text-[19px]"}`}
                      style={{ fontFamily: '"SF Pro", sans-serif' }}
                    >
                      {point}
                    </p>
                  </div>
                )) : null}
              </div>

              <div className={`flex gap-4 ${useMobileDashboardLayout ? "mt-11 flex-nowrap md:mt-12 lg:flex-wrap" : "mt-12 flex-wrap"} ${responsiveDashboardLayout ? "flex-col md:max-w-[253px]" : ""}`}>
                {onPrimaryClick ? (
                <button
                  type="button"
                  onClick={onPrimaryClick}
                  className={`inline-flex items-center justify-center rounded-[4px] bg-[#D4E5C0] font-medium text-[#06231C] transition-all duration-300 hover:translate-y-[-1px] hover:bg-[#dbe9ca] ${useMobileDashboardLayout ? "h-[37px] min-w-[154px] px-5 text-[14px] md:h-[60px] md:min-w-[253px] md:text-[20px] lg:h-10 lg:min-w-[168px] lg:px-6 lg:text-[15px]" : "h-10 min-w-[168px] px-6 text-[15px]"}`}
                >
                  {primaryLabel}
                </button>
                ) : (
                <Link
                  to={primaryTo}
                  className={`inline-flex items-center justify-center rounded-[4px] bg-[#D4E5C0] font-medium text-[#06231C] transition-all duration-300 hover:translate-y-[-1px] hover:bg-[#dbe9ca] ${useMobileDashboardLayout ? "h-[37px] min-w-[154px] px-5 text-[14px] md:h-[60px] md:min-w-[253px] md:text-[20px] lg:h-10 lg:min-w-[168px] lg:px-6 lg:text-[15px]" : "h-10 min-w-[168px] px-6 text-[15px]"}`}
                >
                  {primaryLabel}
                </Link>
                )}

                {secondaryLabel ? (
                  onSecondaryClick ? (
                  <button
                    type="button"
                    onClick={onSecondaryClick}
                    className={`inline-flex items-center justify-center rounded-[4px] border border-[#16362D] bg-white font-medium text-[#16362D] transition-all duration-300 hover:translate-y-[-1px] hover:bg-[#f8fbf3] ${useMobileDashboardLayout ? "h-[37px] min-w-[126px] px-5 text-[14px] md:h-[48px] md:min-w-[253px] md:text-[20px] lg:h-10 lg:min-w-[136px] lg:px-6 lg:text-[15px]" : "h-10 min-w-[136px] px-6 text-[15px]"}`}
                  >
                    {secondaryLabel}
                  </button>
                  ) : (
                  <Link
                    to={secondaryTo}
                    className={`inline-flex items-center justify-center rounded-[4px] border border-[#16362D] bg-white font-medium text-[#16362D] transition-all duration-300 hover:translate-y-[-1px] hover:bg-[#f8fbf3] ${useMobileDashboardLayout ? "h-[37px] min-w-[126px] px-5 text-[14px] md:h-[48px] md:min-w-[253px] md:text-[20px] lg:h-10 lg:min-w-[136px] lg:px-6 lg:text-[15px]" : "h-10 min-w-[136px] px-6 text-[15px]"}`}
                  >
                    {secondaryLabel}
                  </Link>
                  )
                ) : null}
              </div>
            </div>

            {!responsiveDashboardLayout ? null : (
              <motion.div
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, delay: 0.08 }}
                viewport={{ once: true }}
                className="relative min-w-0 lg:hidden"
              >
                <div className="absolute left-[-30px] top-[18px] h-44 w-44 rounded-full bg-[#E8F1CF] blur-[92px]" />
                <div
                  className="relative mb-[-72px] mr-[-140px] overflow-hidden rounded-tl-[24px] border-t border-l border-[#EEF2E5] bg-[linear-gradient(180deg,#FFFFFF_0%,#FDFEF9_100%)] pt-3 pl-3 md:mr-[-180px]"
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
                      className="block h-auto w-full min-w-[330px] md:min-w-[430px]"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {!responsiveDashboardLayout && (
            null
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          viewport={{ once: true }}
          className={`relative lg:pl-2 ${responsiveDashboardLayout ? "hidden lg:block" : ""}`}
        >
          <div className="absolute left-[-30px] top-[18px] h-44 w-44 rounded-full bg-[#E8F1CF] blur-[92px]" />
          <div className="absolute right-[10%] top-0 h-44 w-44 rounded-full bg-[#EAF2D6] blur-[100px]" />
          <div className="absolute bottom-[12%] left-[35%] h-36 w-36 rounded-full bg-[#DCEBC2] blur-[92px]" />

          <div
            className={`relative overflow-hidden
              md:mr-[-56px] lg:mr-[-80px] xl:mr-[-96px]
              md:mb-[-72px]
              ${useMobileDashboardLayout ? "mr-[-118px] mb-[-72px] rounded-tl-[24px]" : "mr-[-24px] mb-[-56px] rounded-tl-[28px] sm:mr-[-32px]"}
              bg-[linear-gradient(180deg,#FFFFFF_0%,#FDFEF9_100%)]
              pt-3 pl-3
              border-t border-l border-[#EEF2E5]`}
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
