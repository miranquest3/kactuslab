import { motion } from "framer-motion";

export default function ValueSection() {

  const problems = [
    "High Agency Costs",
    "Studio Availability Problems",
    "Scaling Difficulties",
    "Slow Turnaround",
    "Hidden Fees",
    "Low ROI",
    "Resource Gaps",
    "Expensive Production",
    "Workflow Inefficiency",
    "Vendor Mismanagement",
    "Model Sourcing Issues",
    "Time Drain"
  ];

  const features = [
    "AI Virtual Try-On",
    "AI Photoshoots",
    "Size Recommendation",
    "AI Fashion Coach"
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-white">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-0 w-[400px] h-[400px] bg-emerald-200/30 blur-3xl rounded-full"/>
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-emerald-300/20 blur-3xl rounded-full"/>
      </div>

      <div className="container mx-auto px-6 relative">

        {/* MAIN SECTION */}

        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity:0, y:60 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:1 }}
            viewport={{ once:true }}
          >

            {/* HEADLINE */}

            <motion.h2
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.6 }}
              className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight mb-6"
            >
              AI Infrastructure for
              <span className="text-emerald-600"> Fashion Commerce</span>
            </motion.h2>

            {/* DESCRIPTION */}

            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-xl mb-10">
              KactusLabs helps fashion brands reduce returns and increase
              conversions with photorealistic AI virtual try-ons,
              intelligent size recommendations, and AI generated
              visual content.
            </p>

            {/* IMPACT METRICS */}

            <div className="grid grid-cols-2 gap-6 max-w-md">

              <motion.div
                whileHover={{ scale:1.03 }}
                className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 shadow-sm"
              >
                <p className="text-sm text-slate-500 mb-2">
                  Agency Savings
                </p>

                <h3 className="text-5xl font-bold text-emerald-600">
                  ₹3–5L
                </h3>

                <p className="text-sm text-slate-600 mt-2">
                  Saved per campaign
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale:1.03 }}
                className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 shadow-sm"
              >
                <p className="text-sm text-slate-500 mb-2">
                  Production Cost
                </p>

                <h3 className="text-5xl font-bold text-emerald-600">
                  40%
                </h3>

                <p className="text-sm text-slate-600 mt-2">
                  Cost reduction
                </p>
              </motion.div>

            </div>

          </motion.div>


          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity:0, x:100 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ duration:1 }}
            viewport={{ once:true }}
            whileHover={{ scale:1.02 }}
            className="bg-[#EDEFE6] p-12 rounded-[40px] shadow-[0_50px_120px_rgba(0,0,0,0.15)]"
          >

            <h3 className="text-3xl font-serif mb-4">
              Meet Kactus
            </h3>

            <p className="text-slate-700 mb-8">
              Your End-to-End Creative Partner
            </p>

            {/* FEATURES */}

            <div className="grid grid-cols-2 gap-5">

              {features.map((feature,index)=>(
                <motion.div
                  key={index}
                  initial={{ opacity:0, y:20 }}
                  whileInView={{ opacity:1, y:0 }}
                  transition={{ delay:index*0.1 }}
                  whileHover={{ scale:1.05 }}
                  className="bg-white rounded-xl px-5 py-4 text-sm shadow-md"
                >
                  {feature}
                </motion.div>
              ))}

            </div>

          </motion.div>

        </div>


        {/* PROBLEMS SECTION */}
{/* PROBLEM SECTION */}

<div className="mt-40">

  <motion.h2
    initial={{ opacity:0, y:40 }}
    whileInView={{ opacity:1, y:0 }}
    transition={{ duration:1 }}
    className="text-center text-4xl md:text-5xl font-serif mb-16"
  >    The Hidden Cost of Scaling a Fashion Brand
  </motion.h2>

  {/* CONTAINER CARD */}

  <div className="bg-[#F4F5EF] border border-slate-200 rounded-[40px] p-12">

    <div className="flex flex-wrap justify-center gap-6">

      {problems.map((item,index)=>(
        <motion.div
          key={index}
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ delay:index*0.05 }}
          whileHover={{ scale:1.05 }}
          className="px-6 py-3 rounded-full bg-white border border-slate-200 text-sm text-slate-700 shadow-sm"
        >
          {item}
        </motion.div>
      ))}

    </div>

  </div>

</div>

      </div>

    </section>
  );
}