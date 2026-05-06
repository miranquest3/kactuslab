import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    jobTitle: "",
    company: "",
    joinSales: false,
    joinTechnical: false,
    newsletter: false
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      setFormData({
        email: "",
        firstName: "",
        lastName: "",
        jobTitle: "",
        company: "",
        joinSales: false,
        joinTechnical: false,
        newsletter: false
      });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <main className="demo-page relative overflow-hidden bg-[#F5F6F2] px-4 py-24 md:px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#D4E5C0]/50 blur-3xl" />
        <div className="absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-[#8EB49B]/35 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative mx-auto w-full max-w-4xl rounded-[30px] border border-dashed border-[#dfe5df] bg-white/90 p-8 shadow-[0_24px_70px_rgba(14,39,31,0.08)] backdrop-blur-sm md:p-12"
      >
        <div className="mb-10 text-center md:mb-12">
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#1B5D4D]">Kactus AI</p>
          <h1
            className="mt-2 text-4xl font-normal leading-tight md:text-5xl"
            style={{
              background: "linear-gradient(90deg, #0e2c22 0%, #4C7663 90.05%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Book a Demo
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-[15px] text-slate-500 md:text-[17px]">
            Fill out the form and our team will get back to you within 24 hours.
          </p>
        </div>

        {status === "success" ? (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-center text-emerald-800">
            Thank you. Your request has been received.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-7">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-600">Company Email</label>
              <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john.doe@company.com" className="w-full rounded-xl border border-[#d6ddd8] bg-white px-4 py-3.5 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#1B5D4D]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-600">First Name</label>
                <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" className="w-full rounded-xl border border-[#d6ddd8] bg-white px-4 py-3.5 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#1B5D4D]" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-600">Last Name</label>
                <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" className="w-full rounded-xl border border-[#d6ddd8] bg-white px-4 py-3.5 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#1B5D4D]" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-600">Job Title</label>
                <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="Engineering Manager" className="w-full rounded-xl border border-[#d6ddd8] bg-white px-4 py-3.5 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#1B5D4D]" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-600">Company</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Acme Corp" className="w-full rounded-xl border border-[#d6ddd8] bg-white px-4 py-3.5 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#1B5D4D]" />
              </div>
            </div>

            <div className="rounded-2xl border border-dashed border-[#dfe5df] bg-[#f9fbf8] p-6">
              <p className="mb-4 text-sm font-medium text-slate-600">Who should join from our side?</p>
              <label className="flex items-center gap-3 mb-3 cursor-pointer">
                <input type="checkbox" name="joinSales" checked={formData.joinSales} onChange={handleChange} className="w-5 h-5 accent-[#0B3B2E] rounded bg-white border-slate-300" />
                <span className="text-sm text-slate-600">Sales Experts</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" name="joinTechnical" checked={formData.joinTechnical} onChange={handleChange} className="w-5 h-5 accent-[#0B3B2E] rounded bg-white border-slate-300" />
                <span className="text-sm text-slate-600">Technical Experts</span>
              </label>
            </div>

            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleChange} className="w-5 h-5 accent-[#0B3B2E] rounded bg-white border-slate-300" />
              <span className="text-sm text-slate-600">Sign me up for the newsletter</span>
            </label>

            <div className="flex flex-col items-center justify-between gap-4 border-t border-[#e6ebe7] pt-6 sm:flex-row">
              <span className="text-sm text-slate-400">We'll respond within 24 hours</span>
              <button type="submit" disabled={status === "loading"} className="h-11 w-full rounded-[4px] bg-[#D4E5C0] px-8 text-[14px] font-medium uppercase tracking-[0.06em] text-[#17362d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#dce9c9] disabled:opacity-50 sm:w-auto">
                {status === "loading" ? "Submitting..." : "Request Demo"}
              </button>
            </div>

            {status === "error" && <p className="text-red-500 text-sm">Error submitting form. Please try again.</p>}
          </form>
        )}
      </motion.div>
    </main>
  );
}

