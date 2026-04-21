import { Link } from 'react-router-dom'
import footerLogo from '../assets/logo2.svg'

export default function Footer() {
  return (
    <footer className="bg-[#06231C] border-t border-[#e5e7eb]">
      <div className="container-p py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 text-base md:text-sm">

        {/* Brand Column */}
        <div>
          <img
            src={footerLogo}
            alt="KactusLab"
            className="h-8 w-auto mb-4"
          />

          <p className="text-[#D4E5C0] leading-relaxed mb-6">
            KactusLab helps brands present products clearly,
            reduce returns, and improve purchase confidence
            using visual AI.
          </p>

          <p className="text-[#D4E5C0] text-xs">
            © 2026 KactusLab
          </p>
        </div>

        {/* Menu */}
        <div>
          <h4 className="font-medium text-[#D4E5C0] mb-4">Menu</h4>
          <ul className="space-y-3 text-[#D4E5C0]">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/" className="hover:text-white transition">Features</Link></li>
            <li><Link to="/outcomes" className="hover:text-white transition">Outcomes</Link></li>
          </ul>
        </div>

        {/* Blog */}
        <div>
          <h4 className="font-medium text-[#D4E5C0] mb-4">Blog</h4>
          <ul className="space-y-3 text-[#D4E5C0]">
            <li className="hover:text-white cursor-pointer">
              Hidden Perks: 7 Ways to Reduce Returns
            </li>
            <li className="hover:text-white cursor-pointer">
              Is Your Product Page Doing Enough?
            </li>
            <li className="hover:text-white cursor-pointer">
              Stop Losing Customers at Checkout
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-medium text-[#D4E5C0] mb-4">Legal</h4>
          <ul className="space-y-3 text-[#D4E5C0]">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms of Service</li>
            <li className="hover:text-white cursor-pointer">Cookie Policy</li>
            <li className="hover:text-white cursor-pointer">Security FAQ</li>
          </ul>
        </div>

      </div>
    </footer>
  )
}
