import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import bgImage from "../assets/images/Feelings/bg1.png";
import bgSecondImage from "../assets/images/Feelings/bg2.png";
import bgThirdImage from "../assets/images/Feelings/bg3.png";
import headphoneManImage from "../assets/images/Feelings/headphoneMan.png";
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
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.18, 0.26], [1, 1, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.26], [0, -42]);
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
  const thirdSceneOpacity = useTransform(scrollYProgress, [0.78, 0.86], [0, 1]);
  const thirdSceneY = useTransform(scrollYProgress, [0.78, 0.88], [46, 0]);
  const thirdHeadingY = useTransform(scrollYProgress, [0.8, 0.88], [-70, 0]);
  const thirdCopyY = useTransform(scrollYProgress, [0.84, 0.92], [70, 0]);
  const manHandX = useTransform(scrollYProgress, [0.82, 0.94], ["-38%", "0%"]);
  const robotHandX = useTransform(scrollYProgress, [0.82, 0.94], ["38%", "0%"]);
  return (
    <main className="bg-[#07131a]">
      <section ref={introRef} className="relative h-[1040vh] bg-[#07131a]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.img
            src={bgImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ opacity: firstBgOpacity }}
          />

          <motion.img
            src={bgSecondImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ opacity: secondBgOpacity }}
          />

          <motion.img
            src={bgThirdImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ opacity: thirdBgOpacity }}
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,rgba(0,0,0,0.18)_100%)]" />

          <motion.div
            className="absolute inset-0 z-10 flex items-center justify-center px-6 pb-16 pt-20 sm:px-8 md:px-14 md:pt-24 lg:px-20 xl:px-24"
            style={{ opacity: heroTextOpacity, y: heroTextY }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[760px] text-center text-[61px] font-normal text-white"
              style={{
                color: "#FFF",
                textAlign: "center",
                fontFamily: '"SF Pro", sans-serif',
                fontSize: "61px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "65px",
                letterSpacing: "-1.921px"
              }}
            >
              We honor the hands
              <br />
              that built your brand.
            </motion.h1>
          </motion.div>

          <motion.div
            className="absolute inset-0 z-20 min-h-screen"
            style={{ opacity: firstOrderSceneOpacity, y: firstOrderSceneY }}
          >
            <motion.p
              className="absolute left-6 top-[46%] z-20 w-[190px] max-w-[calc(100vw-48px)] text-[24px] text-white sm:left-10 sm:w-[220px] sm:text-[28px] md:left-[12.4%] md:top-[49%] md:w-[260px] md:text-[32px] lg:left-[10.8%] lg:top-[51%] lg:text-[36px]"
              style={{ opacity: oldTextOpacity, x: firstOrderLeftTextX, fontFamily: '"SF Pro", sans-serif', fontWeight: 500, lineHeight: "1.12" }}
            >
              The late
              <br />
              night is spent
              <br />
              sketching.
            </motion.p>

            <motion.p
              className="absolute right-6 top-[46%] z-20 w-[250px] max-w-[calc(100vw-48px)] text-left text-[24px] text-white sm:right-10 sm:w-[300px] sm:text-[28px] md:right-[4.2%] md:top-[49%] md:w-[360px] md:text-[32px] lg:right-[3.8%] lg:top-[51%] lg:w-[410px] lg:text-[36px]"
              style={{ opacity: oldTextOpacity, x: firstOrderRightTextX, fontFamily: '"SF Pro", sans-serif', fontWeight: 500, lineHeight: "1.12" }}
            >
              The fabric was
              <br />
              unrolled and held
              <br />
              up against the light.
            </motion.p>

            <motion.p
              className="absolute left-6 top-[24%] z-20 w-[255px] max-w-[calc(100vw-48px)] text-[22px] font-semibold text-white sm:left-10 sm:w-[300px] sm:text-[26px] md:left-[11.7%] md:top-[31.5%] md:w-[330px] md:text-[30px] lg:w-[360px] lg:text-[32px]"
              style={{ opacity: newTextOpacity, x: leftTextX, fontFamily: '"SF Pro", sans-serif', lineHeight: "1.12" }}
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
              className="absolute right-6 top-[58%] z-20 w-[280px] max-w-[calc(100vw-48px)] text-left text-[21px] font-semibold text-white sm:right-10 sm:top-[54%] sm:w-[330px] sm:text-[25px] md:right-[8.8%] md:top-[31.5%] md:w-[390px] md:text-[30px] lg:w-[420px] lg:text-[32px]"
              style={{ opacity: newTextOpacity, x: rightTextX, fontFamily: '"SF Pro", sans-serif', lineHeight: "1.12" }}
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

            <div className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-[76vh] max-h-[690px] w-auto max-w-none -translate-x-1/2 sm:h-[82vh] sm:max-h-[760px] md:h-[92vh] md:max-h-[850px] lg:h-[100vh] lg:max-h-[930px]">
              <motion.img
                src={headphoneManImage}
                alt="Man wearing headphones"
                className="h-full w-auto object-contain"
                style={{ opacity: firstOrderPersonOpacity, y: firstOrderPersonY, aspectRatio: "117 / 139" }}
              />
            </div>
          </motion.div>

          <motion.div
            className="absolute inset-0 z-30"
            style={{ opacity: thirdSceneOpacity, y: thirdSceneY }}
          >
            <div className="pointer-events-none absolute inset-x-0 top-1/2 z-10 h-[34vh] min-h-[230px] -translate-y-1/2 md:h-[42vh]">
              <div className="absolute left-[-24%] top-1/2 w-[70vw] max-w-none -translate-y-1/2 sm:left-[-18%] sm:w-[58vw] md:left-[-4%] md:w-[48vw] lg:left-0 lg:w-[47vw] xl:w-[45vw]">
            <motion.img
              src={manHandImage}
              alt=""
              aria-hidden="true"
              className="h-auto w-full object-contain"
              style={{ x: manHandX, aspectRatio: "643 / 362" }}
            />
              </div>

              <div className="absolute right-[-32%] top-1/2 w-[82vw] max-w-none -translate-y-1/2 sm:right-[-24%] sm:w-[66vw] md:right-[-6%] md:w-[52vw] lg:right-0 lg:w-[51vw] xl:w-[49vw]">
            <motion.img
              src={robotHandImage}
              alt=""
              aria-hidden="true"
              className="h-auto w-full object-contain"
              style={{ x: robotHandX, aspectRatio: "770 / 362" }}
            />
              </div>
          </div>

            <div className="relative z-20 flex min-h-screen flex-col items-center justify-between px-6 pb-[12.5vh] pt-[11vh] text-center sm:px-8 md:px-12 md:pb-[9vh] md:pt-[10vh]">
          <motion.h2
            className="max-w-[760px] text-[34px] font-normal leading-[1.14] text-white sm:text-[42px] md:text-[42px]"
            style={{ y: thirdHeadingY, fontFamily: '"SF Pro", sans-serif' }}
          >
            You built something real.
            <br />
            You built this.
          </motion.h2>

          <motion.p
            className="max-w-[760px] text-[24px] font-normal leading-[1.18] text-white sm:text-[30px] md:text-[30px]"
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
