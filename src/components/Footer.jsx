import { Link } from 'react-router-dom'
import footerLogo from '../assets/logo2.svg'
import footerBg from '../assets/images/footer.png'

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t border-[#e5e7eb]"
      style={{
        backgroundColor: '#06231C',
        backgroundImage: `
          linear-gradient(180deg, rgba(6, 35, 28, 0.10) 0%, rgba(6, 35, 28, 0.34) 58%, rgba(6, 35, 28, 0.60) 100%),
          radial-gradient(52% 68% at 66% 8%, rgba(212, 229, 192, 0.12) 0%, rgba(212, 229, 192, 0) 72%),
          url(${footerBg})
        `,
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div className="container-p relative z-10 grid grid-cols-1 gap-14 py-20 text-base md:grid-cols-2 md:text-sm lg:grid-cols-4">
        <div>
          <img
            src={footerLogo}
            alt="Kactus AI"
            className="mb-4 h-8 w-auto"
          />

          <p className="mb-6 leading-relaxed text-[#D4E5C0]">
            Kactus AI helps brands present products clearly,
            reduce returns, and improve purchase confidence
            using visual AI.
          </p>

          <p className="text-xs text-[#D4E5C0]">&copy; 2026 Kactus AI</p>
        </div>

        <div>
          <h4 className="mb-4 font-medium text-[#D4E5C0]">Menu</h4>
          <ul className="space-y-3 text-[#D4E5C0]">
            <li><Link to="/" className="transition hover:text-white">Home</Link></li>
            <li><Link to="/" className="transition hover:text-white">Features</Link></li>
            <li><Link to="/outcomes" className="transition hover:text-white">Outcomes</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-medium text-[#D4E5C0]">Blog</h4>
          <ul className="space-y-3 text-[#D4E5C0]">
            <li className="cursor-pointer hover:text-white">
              Hidden Perks: 7 Ways to Reduce Returns
            </li>
            <li className="cursor-pointer hover:text-white">
              Is Your Product Page Doing Enough?
            </li>
            <li className="cursor-pointer hover:text-white">
              Stop Losing Customers at Checkout
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-medium text-[#D4E5C0]">Legal</h4>
          <ul className="space-y-3 text-[#D4E5C0]">
            <li className="cursor-pointer hover:text-white">Privacy Policy</li>
            <li className="cursor-pointer hover:text-white">Terms of Service</li>
            <li className="cursor-pointer hover:text-white">Cookie Policy</li>
            <li className="cursor-pointer hover:text-white">Security FAQ</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
