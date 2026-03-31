import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function DemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    jobTitle: '',
    company: '',
    joinSales: false,
    joinTechnical: false,
    newsletter: false
  });
  const [status, setStatus] = useState(null);

  // ✅ FIX: Completely lock background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!res.ok) {
        const errText = await res.text();
        console.error("API Error Response:", res.status, errText);
        throw new Error("Submission failed");
      }
      
      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus(null);
        setFormData({
          email: '', firstName: '', lastName: '', jobTitle: '',
          company: '', joinSales: false, joinTechnical: false, newsletter: false
        });
      }, 3000);
    } catch(err) {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[999] flex items-center justify-center bg-[#f6f7f4]/80 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
           initial={{ y: 50, opacity: 0, scale: 0.95 }}
           animate={{ y: 0, opacity: 1, scale: 1 }}
           exit={{ y: 20, opacity: 0, scale: 0.95 }}
           onClick={e => e.stopPropagation()}

           // ✅ FIX: prevent scroll going to background
           onWheel={(e) => e.stopPropagation()}
           onTouchMove={(e) => e.stopPropagation()}

           className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-2xl w-full relative max-h-[90vh] overflow-y-auto hide-scrollbar"
        >
          {/* Close button */}
          <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-slate-800 text-3xl leading-none">
            &times;
          </button>

          <div className="text-center mb-10">
            <h2 className="text-4xl font-serif text-[#1D2B24] mb-3">Get in Touch</h2>
            <p className="text-slate-500">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>

          {status === 'success' ? (
             <div className="text-center py-20 text-emerald-700 font-bold text-xl">
               Thank you! Your request has been received.
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">Company Email</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john.doe@company.com" className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-emerald-500 transition-colors text-slate-900 bg-white placeholder:text-slate-400" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">First Name</label>
                    <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-emerald-500 transition-colors text-slate-900 bg-white placeholder:text-slate-400" />
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">Last Name</label>
                    <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-emerald-500 transition-colors text-slate-900 bg-white placeholder:text-slate-400" />
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">Job Title</label>
                    <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="Engineering Manager" className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-emerald-500 transition-colors text-slate-900 bg-white placeholder:text-slate-400" />
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">Company</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Acme Corp" className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-emerald-500 transition-colors text-slate-900 bg-white placeholder:text-slate-400" />
                 </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 mt-8 mb-6">
                 <p className="text-sm font-medium text-slate-600 mb-4">Who should join from our side?</p>
                 <label className="flex items-center gap-3 mb-3 cursor-pointer">
                    <input type="checkbox" name="joinSales" checked={formData.joinSales} onChange={handleChange} className="w-5 h-5 accent-[#0B3B2E] rounded bg-white border-slate-300" />
                    <span className="text-sm text-slate-600">Sales Experts</span>
                 </label>
                 <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" name="joinTechnical" checked={formData.joinTechnical} onChange={handleChange} className="w-5 h-5 accent-[#0B3B2E] rounded bg-white border-slate-300" />
                    <span className="text-sm text-slate-600">Technical Experts</span>
                 </label>
              </div>

              <div className="flex items-center justify-between pt-4">
                 <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleChange} className="w-5 h-5 accent-[#0B3B2E] rounded bg-white border-slate-300" />
                    <span className="text-sm text-slate-600">Sign me up for the newsletter</span>
                 </label>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-slate-100 gap-4 mt-6">
                <span className="text-sm text-slate-400">We'll respond within 24 hours</span>
                <button type="submit" disabled={status === 'loading'} className="bg-[#0B3B2E] hover:bg-[#06241c] text-white font-medium py-3 px-8 rounded-full disabled:opacity-50 transition-colors w-full sm:w-auto">
                  {status === 'loading' ? 'Submitting...' : 'Request Demo'}
                </button>
              </div>
              
              {status === 'error' && <p className="text-red-500 text-sm text-right mt-2">Error submitting form. Please try again.</p>}
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}