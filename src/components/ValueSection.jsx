import { motion } from "framer-motion";
import {
  DollarSign,
  Clock,
  Users,
  Camera,
  AlertTriangle,
  Workflow,
  Layers,
  UserX
} from "lucide-react";

export default function ValueSection() {

  const problems = [
    {
      icon: DollarSign,
      text: "High Agency Costs"
    },
    {
      icon: Camera,
      text: "Studio Availability Problems"
    },
    {
      icon: Layers,
      text: "Scaling Difficulties"
    },
    {
      icon: Clock,
      text: "Slow Turnaround"
    },
    {
      icon: AlertTriangle,
      text: "Hidden Fees"
    },
    {
      icon: Workflow,
      text: "Workflow Inefficiency"
    },
    {
      icon: Users,
      text: "Vendor Mismanagement"
    },
    {
      icon: UserX,
      text: "Model Sourcing Issues"
    },
    {
      icon: DollarSign,
      text: "Expensive Production"
    },
    {
      icon: Clock,
      text: "Time Drain"
    },
    {
      icon: Layers,
      text: "Resource Gaps"
    },
    {
      icon: AlertTriangle,
      text: "Low ROI"
    }
  ];

  function shuffle(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
  }

  const row1 = shuffle(problems);
  const row2 = shuffle(problems);
  const row3 = shuffle(problems);

  return (

    <section className="relative py-32 bg-white">

      <div className="container mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-serif text-center mb-20"
        >
          The Hidden Cost of Scaling a Fashion Brand
        </motion.h2>

        <div className="relative overflow-hidden space-y-6">

          {/* fade edges */}

          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />


          {/* ROW 1 */}

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 80,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex gap-6 w-max"
          >

            {[...row1, ...row1].map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="flex items-center gap-4 bg-white border border-slate-200 px-7 py-5 rounded-2xl shadow-sm min-w-[260px]"
                >

                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <Icon size={20} />
                  </div>

                  <span className="font-medium text-slate-800 text-sm">
                    {item.text}
                  </span>

                </div>

              )

            })}

          </motion.div>


          {/* ROW 2 (reverse) */}

          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 90,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex gap-6 w-max"
          >

            {[...row2, ...row2].map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="flex items-center gap-4 bg-white border border-slate-200 px-7 py-5 rounded-2xl shadow-sm min-w-[260px]"
                >

                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <Icon size={20} />
                  </div>

                  <span className="font-medium text-slate-800 text-sm">
                    {item.text}
                  </span>

                </div>

              )

            })}

          </motion.div>


          {/* ROW 3 */}

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 85,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex gap-6 w-max"
          >

            {[...row3, ...row3].map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="flex items-center gap-4 bg-white border border-slate-200 px-7 py-5 rounded-2xl shadow-sm min-w-[260px]"
                >

                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <Icon size={20} />
                  </div>

                  <span className="font-medium text-slate-800 text-sm">
                    {item.text}
                  </span>

                </div>

              )

            })}

          </motion.div>

        </div>

      </div>

    </section>

  );

}