import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#f6f7f4] border-t border-[#e5e7eb]">
      <div className="container-p py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 text-base md:text-sm">

        {/* Brand Column */}
        <div>
          <h3 className="text-base font-medium text-[#0b3b2e] mb-4">
            KactusLabs
          </h3>

          <p className="text-slate-600 leading-relaxed mb-6">
            KactusLabs helps brands present products clearly,
            reduce returns, and improve purchase confidence
            using visual AI.
          </p>

          <p className="text-slate-400 text-xs">
            © 2026 KactusLabs
          </p>
        </div>

        {/* Menu */}
        <div>
          <h4 className="font-medium text-[#0b3b2e] mb-4">Menu</h4>
          <ul className="space-y-3 text-slate-600">
            <li><Link to="/" className="hover:text-[#0b3b2e] transition">Home</Link></li>
            <li><Link to="/" className="hover:text-[#0b3b2e] transition">Features</Link></li>
            <li><Link to="/about" className="hover:text-[#0b3b2e] transition">About</Link></li>
          </ul>
        </div>

        {/* Blog */}
        <div>
          <h4 className="font-medium text-[#0b3b2e] mb-4">Blog</h4>
          <ul className="space-y-3 text-slate-600">
            <li className="hover:text-[#0b3b2e] cursor-pointer">
              Hidden Perks: 7 Ways to Reduce Returns
            </li>
            <li className="hover:text-[#0b3b2e] cursor-pointer">
              Is Your Product Page Doing Enough?
            </li>
            <li className="hover:text-[#0b3b2e] cursor-pointer">
              Stop Losing Customers at Checkout
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-medium text-[#0b3b2e] mb-4">Legal</h4>
          <ul className="space-y-3 text-slate-600">
            <li className="hover:text-[#0b3b2e] cursor-pointer">Privacy Policy</li>
            <li className="hover:text-[#0b3b2e] cursor-pointer">Terms of Service</li>
            <li className="hover:text-[#0b3b2e] cursor-pointer">Cookie Policy</li>
            <li className="hover:text-[#0b3b2e] cursor-pointer">Security FAQ</li>
          </ul>
        </div>

      </div>
    </footer>
  )
}