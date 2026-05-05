import { Link, useLocation } from 'react-router-dom'
import footerLogo from '../assets/logo2.svg'
import footerBg from '../assets/images/footer.png'
import feelingsFooterBg from '../assets/images/Feelings/footerbg.png'

export default function Footer() {
  const { pathname } = useLocation()
  const isFeelingsPage = pathname === '/feelings'
  const activeFooterBg = isFeelingsPage ? feelingsFooterBg : footerBg
  const footerTextClass = isFeelingsPage ? 'text-white' : 'text-[#D4E5C0]'

  return (
    <footer
      className={`relative overflow-hidden ${isFeelingsPage ? '' : 'border-t border-[#e5e7eb]'}`}
      style={{
        backgroundColor: '#06231C',
        backgroundImage: `
          linear-gradient(180deg, rgba(6, 35, 28, 0.10) 0%, rgba(6, 35, 28, 0.34) 58%, rgba(6, 35, 28, 0.60) 100%),
          radial-gradient(52% 68% at 66% 8%, rgba(212, 229, 192, 0.12) 0%, rgba(212, 229, 192, 0) 72%),
          url(${activeFooterBg})
        `,
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 pt-24 pb-14 text-base md:px-12 md:text-sm lg:px-28">
        <div className="grid grid-cols-1 gap-y-14 md:grid-cols-2 lg:grid-cols-[1.1fr_0.7fr_1.35fr_0.85fr] lg:gap-x-20">
          <div>
            <img
              src={footerLogo}
              alt="Kactus AI"
              className="mb-4 h-8 w-auto"
            />

            <p className={`mb-9 max-w-[430px] leading-relaxed ${footerTextClass}`}>
              KactusAI helps fashion brands present products clearly,
              reduce returns, and improve purchase confidence
              using visual AI.
            </p>

            <p className={`text-xs ${footerTextClass}`}>&copy; 2026 KactusAI</p>
          </div>

          <div>
            <h4 className={`mb-4 font-medium ${footerTextClass}`}>Menu</h4>
            <ul className={`space-y-4 ${footerTextClass}`}>
              <li><Link to="/" className="transition hover:text-white">Home</Link></li>
              <li><Link to="/feelings" className="transition hover:text-white">Feelings</Link></li>
              <li><Link to="/outcomes" className="transition hover:text-white">Outcomes</Link></li>
              <li><Link to="/integrations" className="transition hover:text-white">Integration</Link></li>
              <li><Link to="/contact" className="transition hover:text-white">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={`mb-4 font-medium ${footerTextClass}`}>Blog</h4>
            <ul className={`space-y-4 ${footerTextClass}`}>
              <li className="cursor-pointer hover:text-white">
                Hidden Perks: 7 Ways to Reduce Returns
              </li>
              <li className="cursor-pointer hover:text-white">
                Is Your Product Page Doing Enough?
              </li>
              <li className="cursor-pointer hover:text-white">
                Stop Losing Customers at Checkout
              </li>
              <li className="cursor-pointer hover:text-white">
                KactusAI Raises $XM to Scale Visual AI
              </li>
              <li className="cursor-pointer hover:text-white">
                Forget Guesswork: Sell with Confidence
              </li>
              <li className="cursor-pointer hover:text-white">
                KactusAI Product Updates - What's New
              </li>
            </ul>
          </div>

          <div>
            <h4 className={`mb-4 font-medium ${footerTextClass}`}>Legal</h4>
            <ul className={`space-y-4 ${footerTextClass}`}>
              <li className="cursor-pointer hover:text-white">Privacy Policy</li>
              <li className="cursor-pointer hover:text-white">Terms of Service</li>
              <li className="cursor-pointer hover:text-white">Cookie Policy</li>
              <li className="cursor-pointer hover:text-white">Cookie Settings</li>
              <li className="cursor-pointer hover:text-white">Acceptable Use Policy</li>
              <li className="cursor-pointer hover:text-white">Sub-processor List</li>
              <li className="cursor-pointer hover:text-white">Privacy &amp; Security FAQ</li>
            </ul>
          </div>
        </div>

        <p className={`pt-10 text-center text-xs uppercase tracking-[0.2em] ${footerTextClass} md:pt-12`}>
          Powered by Miran
        </p>
      </div>
    </footer>
  )
}
