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
   <section className="relative py-32 bg-white">

<div className="container mx-auto px-6">


{/* MAIN HEADLINE */}

<motion.h2
initial={{ opacity:0, y:40 }}
whileInView={{ opacity:1, y:0 }}
transition={{ duration:0.8 }}
className="text-4xl md:text-6xl font-semibold leading-tight mb-18 max-w-6xl"
>

Reduce Agency Costs by
<span className="text-emerald-600"> ₹3–5 Lakhs</span>

<br/>

Cut Production Costs by 
<span className="text-emerald-600"> 40%</span>

</motion.h2>


<br/>
<br/>
{/* CONTENT GRID */}

<div className="grid md:grid-cols-2 gap-20 items-start">


{/* LEFT SIDE */}

<div>

<h3 className="text-2xl md:text-3xl font-medium mb-6">
<br/>
AI Infrastructure for <span className="text-emerald-600">Fashion Commerce</span>

</h3>


<div className="bg-emerald-100 text-emerald-1000 px-14 py-3 rounded-full inline-flex gap-6 text-m font-medium mb-8">

<span>Cost Reduction</span>

<span>AI Production</span>

<span>Faster Photoshoots</span>

</div>


<p className="text-lg text-slate-700 max-w-xl">

KactusLabs helps fashion brands reduce returns and increase
conversions with photorealistic AI virtual try-ons,
intelligent size recommendations, and AI generated
visual content.

</p>

</div>


{/* RIGHT SIDE */}

<div className="bg-[#EDEFE6] p-12 rounded-[40px] shadow-lg">

<h3 className="text-3xl font-serif mb-4">

Meet Kactus

</h3>

<p className="text-slate-700 mb-8">

Your End-to-End Creative Partner

</p>


<div className="grid grid-cols-2 gap-5">

<div className="bg-white rounded-xl px-5 py-4 text-sm shadow-md">
AI Virtual Try-On
</div>

<div className="bg-white rounded-xl px-5 py-4 text-sm shadow-md">
AI Photoshoots
</div>

<div className="bg-white rounded-xl px-5 py-4 text-sm shadow-md">
Size Recommendation
</div>

<div className="bg-white rounded-xl px-5 py-4 text-sm shadow-md">
AI Fashion Coach
</div>

</div>

</div>

</div>

</div>{/* HIDDEN COST SECTION */}

<div className="mt-40">

{/* PROBLEM SECTION */} <div className="mt-40 text-center"> <motion.h2 initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:1 }} className="text-4xl md:text-5xl font-serif mb-16" > The Hidden Cost of Scaling a Fashion Brand </motion.h2> <div className="flex flex-wrap justify-center gap-6"> {problems.map((item,index)=>( <motion.div key={index} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} transition={{ delay:index*0.05 }} whileHover={{ scale:1.1, rotate:-1 }} className="bg-black text-white px-6 py-3 rounded-xl text-sm shadow-lg" > {item} </motion.div>

))}

</div>

</div>

</div>

</section>
  );
}