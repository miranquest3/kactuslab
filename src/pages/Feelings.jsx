import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import bgImage from "../assets/images/Feelings/bg1.png";
import bgSecondImage from "../assets/images/Feelings/bg2.png";
import bgThirdImage from "../assets/images/Feelings/bg3.png";
import mobileBgImage1 from "../assets/images/Feelings/mbg1.png";
import mobileBgImage2 from "../assets/images/Feelings/mbg2.png";
import mobileBgImage3 from "../assets/images/Feelings/mbg3.png";
import headphoneManImage from "../assets/images/Feelings/headphoneMan.png";
import handPhoneMobileImage from "../assets/images/Feelings/handPhoneMobile.png";
import manHandImage from "../assets/images/Feelings/manHand.png";
import robotHandImage from "../assets/images/Feelings/robotHand.png";

const Feelings = () => {
  const introRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["start start", "end start"]
  });

  const firstBgOpacity = useTransform(scrollYProgress, [0, 0.24, 0.32], [1, 1, 0]);
  const secondBgOpacity = useTransform(scrollYProgress, [0.24, 0.34, 0.78, 0.86], [0, 1, 1, 0]);
  const thirdBgOpacity = useTransform(scrollYProgress, [0.76, 0.84], [0, 1]);
  const secondBgOpacityMobile = useTransform(scrollYProgress, [0.08, 0.14, 0.6, 0.68], [0, 1, 1, 0]);
  const thirdBgOpacityMobile = useTransform(scrollYProgress, [0.62, 0.7], [0, 1]);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.18, 0.26], [1, 1, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.26], [0, -42]);
  const heroTextOpacityMobile = useTransform(scrollYProgress, [0, 0.03, 0.06], [1, 1, 0]);
  const heroTextYMobile = useTransform(scrollYProgress, [0, 0.06], [0, -18]);
  const firstOrderSceneOpacity = useTransform(scrollYProgress, [0.28, 0.38, 0.7, 0.78], [0, 1, 1, 0]);
  const firstOrderSceneY = useTransform(scrollYProgress, [0.28, 0.4, 0.78], [42, 0, -34]);
  const oldTextOpacity = useTransform(scrollYProgress, [0.3, 0.38, 0.48, 0.56], [0, 1, 1, 0]);
  const newTextOpacity = useTransform(scrollYProgress, [0.52, 0.62, 0.68, 0.76], [0, 1, 1, 0]);
  const firstOrderLeftTextX = useTransform(scrollYProgress, [0.32, 0.44], [-88, 0]);
  const firstOrderRightTextX = useTransform(scrollYProgress, [0.32, 0.44], [88, 0]);
  const firstOrderPersonY = useTransform(scrollYProgress, [0.3, 0.44], [170, 0]);
  const firstOrderPersonOpacity = useTransform(scrollYProgress, [0.3, 0.4, 0.72, 0.8], [0, 1, 1, 0]);
  const leftTextX = useTransform(scrollYProgress, [0.56, 0.68], [-88, 0]);
  const rightTextX = useTransform(scrollYProgress, [0.56, 0.68], [88, 0]);
  const thirdSceneOpacity = useTransform(scrollYProgress, [0.78, 0.88], [0, 1]);
  const thirdSceneY = useTransform(scrollYProgress, [0.78, 0.9], [46, 0]);
  const thirdHeadingY = useTransform(scrollYProgress, [0.8, 0.9], [-70, 0]);
  const thirdCopyY = useTransform(scrollYProgress, [0.84, 0.92], [70, 0]);
  const manHandX = useTransform(scrollYProgress, [0.82, 0.9], ["-38%", "-2.2%"]);
  const robotHandX = useTransform(scrollYProgress, [0.82, 0.9], ["38%", "2.2%"]);
  const thirdSceneOpacityMobile = useTransform(scrollYProgress, [0.66, 0.74], [0, 1]);
  const thirdSceneYMobile = useTransform(scrollYProgress, [0.66, 0.76], [32, 0]);
  const thirdHeadingYMobile = useTransform(scrollYProgress, [0.7, 0.78], [-34, 0]);
  const thirdCopyYMobile = useTransform(scrollYProgress, [0.74, 0.82], [34, 0]);
  const manHandXMobile = useTransform(scrollYProgress, [0.7, 0.84], ["-28%", "0%"]);
  const robotHandXMobile = useTransform(scrollYProgress, [0.7, 0.84], ["28%", "0%"]);

  // Mobile-only first sequence timing (faster, like provided reference)
  const firstOrderSceneOpacityMobile = useTransform(scrollYProgress, [0.02, 0.08, 0.56, 0.64], [0, 1, 1, 0]);
  const firstOrderSceneYMobile = useTransform(scrollYProgress, [0.02, 0.14, 0.64], [24, 0, -14]);
  const oldTextOpacityMobile = useTransform(scrollYProgress, [0.06, 0.12, 0.2, 0.26], [0, 1, 1, 0]);
  const newTextOpacityMobile = useTransform(scrollYProgress, [0.24, 0.32, 0.44, 0.54], [0, 1, 1, 0]);
  const firstOrderLeftTextXMobile = useTransform(scrollYProgress, [0.08, 0.16], [-40, 0]);
  const firstOrderRightTextXMobile = useTransform(scrollYProgress, [0.08, 0.16], [40, 0]);
  const leftTextXMobile = useTransform(scrollYProgress, [0.24, 0.34], [-34, 0]);
  const rightTextXMobile = useTransform(scrollYProgress, [0.24, 0.34], [34, 0]);
  const firstOrderPersonYMobile = useTransform(scrollYProgress, [0.06, 0.2], [90, 0]);
  const firstOrderPersonOpacityMobile = useTransform(scrollYProgress, [0.04, 0.12, 0.58, 0.66], [0, 1, 1, 0]);
  return (
    <main className="bg-[#07131a]">
      <section ref={introRef} className="relative h-[460vh] bg-[#07131a] md:h-[840vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.img
            src={bgImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 hidden h-full w-full object-cover md:block"
            style={{ opacity: firstBgOpacity }}
          />
          <motion.img
            src={mobileBgImage1}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover md:hidden"
            style={{ opacity: firstBgOpacity }}
          />

          <motion.img
            src={bgSecondImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 hidden h-full w-full object-cover md:block"
            style={{ opacity: secondBgOpacity }}
          />
          <motion.img
            src={mobileBgImage2}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover md:hidden"
            style={{ opacity: secondBgOpacityMobile }}
          />

          <motion.img
            src={bgThirdImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 hidden h-full w-full object-cover md:block"
            style={{ opacity: thirdBgOpacity }}
          />
          <motion.img
            src={mobileBgImage3}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover md:hidden"
            style={{ opacity: thirdBgOpacityMobile }}
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,rgba(0,0,0,0.18)_100%)]" />

          <motion.div
            className="absolute inset-0 z-10 flex items-center justify-center px-6 pb-10 pt-10 sm:px-8 md:hidden"
            style={{ opacity: heroTextOpacityMobile, y: heroTextYMobile }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[760px] text-center text-[32px] font-normal leading-[34.3px] text-white"
              style={{
                color: "#FFF",
                textAlign: "center",
                fontFamily: '"SF Pro", sans-serif',
                fontStyle: "normal",
                fontWeight: 400
              }}
            >
              We honor the hands
              <br />
              that built your brand.
            </motion.h1>
          </motion.div>

          <motion.div
            className="absolute inset-0 z-10 hidden items-center justify-center px-6 pb-10 pt-10 sm:px-8 md:flex md:px-14 md:pt-24 lg:px-20 xl:px-24"
            style={{ opacity: heroTextOpacity, y: heroTextY }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[760px] text-center text-[32px] font-normal leading-[34.3px] text-white md:text-[61px] md:leading-[65px] md:tracking-[-1.921px]"
              style={{
                color: "#FFF",
                textAlign: "center",
                fontFamily: '"SF Pro", sans-serif',
                fontStyle: "normal",
                fontWeight: 400
              }}
            >
              We honor the hands
              <br />
              that built your brand.
            </motion.h1>
          </motion.div>

          <motion.div
            className="absolute inset-0 z-20 min-h-screen md:hidden"
            style={{ opacity: firstOrderSceneOpacityMobile, y: firstOrderSceneYMobile }}
          >
            <motion.p
              className="absolute left-[14px] top-[16%] z-20 w-[136px] text-[18px] font-normal leading-[1.08] tracking-[-0.36px] text-white"
              style={{ opacity: oldTextOpacityMobile, x: firstOrderLeftTextXMobile, fontFamily: '"SF Pro", sans-serif' }}
            >
              The late
              <br />
              night is spent
              <br />
              sketching.
            </motion.p>

            <motion.p
              className="absolute right-[16px] top-[44%] z-20 w-[168px] text-right text-[18px] font-normal leading-[1.08] tracking-[-0.36px] text-white"
              style={{ opacity: oldTextOpacityMobile, x: firstOrderRightTextXMobile, fontFamily: '"SF Pro", sans-serif' }}
            >
              The fabric was
              <br />
              unrolled and held
              <br />
              up against the light.
            </motion.p>

            <motion.p
              className="absolute left-[12px] top-[18%] z-20 w-[252px] max-w-[calc(100vw-24px)] text-[16px] font-normal leading-[1.28] tracking-[-0.24px] text-white"
              style={{ opacity: newTextOpacityMobile, x: leftTextXMobile, fontFamily: '"SF Pro", sans-serif' }}
            >
              The first order was
              <br />
              packed, the first thank-
              <br />
              you note was written,
              <br />
              the first time a customer
              <br />
              said "I love it" and you
              <br />
              didn't quite believe
              <br />
              them.
            </motion.p>

            <motion.p
              className="absolute right-[10px] top-[35%] z-20 w-[244px] max-w-[calc(100vw-24px)] text-right text-[16px] font-normal leading-[1.28] tracking-[-0.24px] text-white"
              style={{ opacity: newTextOpacityMobile, x: rightTextXMobile, fontFamily: '"SF Pro", sans-serif' }}
            >
              The years of working when
              <br />
              the numbers didn't work yet.
              <br />
              When your family asks when
              <br />
              you'll get a real job. When
              <br />
              samples came back wrong,
              <br />
              again.
            </motion.p>

            <div className="pointer-events-none absolute bottom-0 left-1/2 z-10 w-[84%] max-w-[350px] -translate-x-1/2">
              <motion.img
                src={handPhoneMobileImage}
                alt="Man wearing headphones"
                className="h-auto w-full object-contain"
                style={{ opacity: firstOrderPersonOpacityMobile, y: firstOrderPersonYMobile, aspectRatio: "117 / 139" }}
              />
            </div>
          </motion.div>

          <motion.div
            className="absolute inset-0 z-20 hidden min-h-screen md:block"
            style={{ opacity: firstOrderSceneOpacity, y: firstOrderSceneY }}
          >
            <motion.p
              className="absolute left-6 top-[46%] z-20 w-[190px] max-w-[calc(100vw-48px)] text-[13.15px] font-[250] leading-[16.736px] text-white/80 sm:left-10 sm:w-[220px] md:left-[4.5%] md:top-[49%] md:w-[240px] md:text-[32px] md:font-medium md:leading-[1.12] md:text-white lg:left-[3.2%] lg:top-[51%] lg:w-[255px] lg:text-[36px]"
              style={{ opacity: oldTextOpacity, x: firstOrderLeftTextX, fontFamily: '"SF Pro", sans-serif' }}
            >
              The late
              <br />
              night is spent
              <br />
              sketching.
            </motion.p>

            <motion.p
              className="absolute right-6 top-[46%] z-20 w-[250px] max-w-[calc(100vw-48px)] text-left text-[13.15px] font-[250] leading-[16.736px] text-white/80 sm:right-10 sm:w-[300px] md:right-[1.8%] md:top-[49%] md:w-[310px] md:text-[32px] md:font-medium md:leading-[1.12] md:text-white lg:right-[1.2%] lg:top-[51%] lg:w-[345px] lg:text-[36px]"
              style={{ opacity: oldTextOpacity, x: firstOrderRightTextX, fontFamily: '"SF Pro", sans-serif' }}
            >
              The fabric was
              <br />
              unrolled and held
              <br />
              up against the light.
            </motion.p>

            <motion.p
              className="absolute left-6 top-[24%] z-20 w-[245px] max-w-[calc(100vw-48px)] text-[13.15px] font-[250] leading-[16.736px] text-white/80 sm:left-10 sm:w-[280px] md:left-[6.5%] md:top-[31.5%] md:w-[310px] md:text-[28px] md:font-medium md:leading-[1.12] md:text-white lg:left-[5.8%] lg:w-[330px] lg:text-[30px]"
              style={{ opacity: newTextOpacity, x: leftTextX, fontFamily: '"SF Pro", sans-serif' }}
            >
              The first order was
              <br />
              packed, the first thank-
              <br />
              you note was written,
              <br />
              the first time a customer
              <br />
              said "I love it" and you
              <br />
              didn't quite believe
              <br />
              them.
            </motion.p>

            <motion.p
              className="absolute right-6 top-[58%] z-20 w-[260px] max-w-[calc(100vw-48px)] text-left text-[13.15px] font-[250] leading-[16.736px] text-white/80 sm:right-10 sm:top-[54%] sm:w-[300px] md:right-[4.8%] md:top-[31.5%] md:w-[350px] md:text-[28px] md:font-medium md:leading-[1.12] md:text-white lg:right-[4.2%] lg:w-[380px] lg:text-[30px]"
              style={{ opacity: newTextOpacity, x: rightTextX, fontFamily: '"SF Pro", sans-serif' }}
            >
              The years of working when
              <br />
              the numbers didn't work yet.
              <br />
              When your family asks when
              <br />
              you'll get a real job. When
              <br />
              samples came back wrong,
              <br />
              again.
            </motion.p>

            <div className="pointer-events-none absolute bottom-[-7vh] left-1/2 z-10 h-[80vh] max-h-[730px] w-auto max-w-none -translate-x-1/2 sm:bottom-[-7vh] sm:h-[86vh] sm:max-h-[800px] md:bottom-[-8vh] md:h-[98vh] md:max-h-[900px] lg:bottom-[-9vh] lg:h-[108vh] lg:max-h-[980px]">
              <motion.img
                src={headphoneManImage}
                alt="Man wearing headphones"
                className="h-full w-auto object-contain"
                style={{ opacity: firstOrderPersonOpacity, y: firstOrderPersonY, aspectRatio: "117 / 139" }}
              />
            </div>
          </motion.div>

          <motion.div
            className="absolute inset-0 z-30 md:hidden"
            style={{ opacity: thirdSceneOpacityMobile, y: thirdSceneYMobile }}
          >
            <div className="pointer-events-none absolute inset-x-0 top-1/2 z-10 h-[34vh] min-h-[230px] -translate-y-1/2">
              <div className="absolute left-[-24%] top-1/2 w-[70vw] max-w-none -translate-y-1/2">
                <motion.img
                  src={manHandImage}
                  alt=""
                  aria-hidden="true"
                  className="h-auto w-[106%] max-w-none object-cover object-left"
                  style={{ x: manHandXMobile, aspectRatio: "643 / 362" }}
                />
              </div>

              <div className="absolute right-[-32%] top-1/2 w-[82vw] max-w-none -translate-y-1/2">
                <motion.img
                  src={robotHandImage}
                  alt=""
                  aria-hidden="true"
                  className="h-auto w-[106%] max-w-none object-cover object-right"
                  style={{ x: robotHandXMobile, aspectRatio: "770 / 362" }}
                />
              </div>
            </div>

            <div className="relative z-20 flex min-h-screen flex-col items-center justify-between px-6 pb-[12.5vh] pt-[11vh] text-center sm:px-8">
              <motion.h2
                className="max-w-[760px] text-[32px] font-normal leading-[34.3px] text-white"
                style={{ y: thirdHeadingYMobile, fontFamily: '"SF Pro", sans-serif' }}
              >
                You built something real.
                <br />
                You built this.
              </motion.h2>

              <motion.p
                className="max-w-[350px] text-[18px] font-normal leading-[1.25] text-white/85"
                style={{ y: thirdCopyYMobile, fontFamily: '"SF Pro", sans-serif' }}
              >
                We built Kactus to stand beside you.
                <br />
                You made the brand. We'll help you carry it.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            className="absolute inset-0 z-30 hidden md:block"
            style={{ opacity: thirdSceneOpacity, y: thirdSceneY }}
          >
            <div className="pointer-events-none absolute inset-x-0 top-[56%] z-10 h-[34vh] min-h-[230px] -translate-y-1/2 md:h-[42vh]">
              <div className="absolute left-[-24%] top-1/2 w-[70vw] max-w-none -translate-y-1/2 sm:left-[-18%] sm:w-[58vw] md:left-0 md:w-[52vw] lg:left-0 lg:w-[51vw] xl:w-[49vw]">
            <motion.img
              src={manHandImage}
              alt=""
              aria-hidden="true"
              className="h-auto w-[106%] max-w-none object-cover object-left"
              style={{ x: manHandX, aspectRatio: "643 / 362" }}
            />
              </div>

              <div className="absolute right-[-32%] top-1/2 w-[82vw] max-w-none -translate-y-1/2 sm:right-[-24%] sm:w-[66vw] md:right-0 md:w-[56vw] lg:right-0 lg:w-[55vw] xl:w-[53vw]">
            <motion.img
              src={robotHandImage}
              alt=""
              aria-hidden="true"
              className="h-auto w-[106%] max-w-none object-cover object-right"
              style={{ x: robotHandX, aspectRatio: "770 / 362" }}
            />
              </div>
          </div>

            <div className="relative z-20 flex min-h-screen flex-col items-center justify-between px-6 pb-[12.5vh] pt-[11vh] text-center sm:px-8 md:px-12 md:pb-[6vh] md:pt-[10vh]">
          <motion.h2
            className="max-w-[760px] text-[32px] font-normal leading-[34.3px] text-white md:text-[42px] md:leading-[1.14]"
            style={{ y: thirdHeadingY, fontFamily: '"SF Pro", sans-serif' }}
          >
            You built something real.
            <br />
            You built this.
          </motion.h2>

          <motion.p
            className="max-w-[330px] text-[13.15px] font-[250] leading-[16.736px] text-white/80 md:max-w-[760px] md:text-[30px] md:font-normal md:leading-[1.18] md:text-white"
            style={{ y: thirdCopyY, fontFamily: '"SF Pro", sans-serif' }}
          >
            We built Kactus to stand beside you.
            <br />
            You made the brand. We'll help you carry it.
          </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default Feelings;

