import Link from 'next/link';
import { trackButtonClick } from '../utils/analytics';

interface NavProps {
  scrolled: boolean;
  cartUrl: string;
}

export default function Nav({ scrolled, cartUrl }: NavProps) {
  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 
      ${scrolled ? 'bg-black' : 'bg-transparent'} 
      transition-colors duration-300 py-6
    `}>
      <div className="w-min(100% - 2rem, 80rem) mx-auto px-4">
        <div className="grid grid-cols-2 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="hidden md:block text-[#F8F4F1] text-2xl font-bold tracking-wide">
              Brilliance25
            </Link>
          </div>

          {/* Right Side: Dates + CTA */}
          <div className="flex items-center gap-4 justify-end">
            {/* Event Dates */}
            <div className="hidden md:flex items-center">
              <div className="bg-[#DD8D00]/10 backdrop-blur-sm border border-[#DD8D00]/20 rounded-full px-6 py-2">
                <span className="text-[#F8F4F1] text-sm font-medium">March 21st-23rd, 2025</span>
              </div>
            </div>

            {/* CTA Button */}
            <a 
              href={cartUrl}
            >
              <button 
                onClick={() => trackButtonClick('Claim Your Seat', 'Navigation')}
                className="
                  cart-button
                  group relative 
                  bg-gradient-to-br from-[#DD8D00] via-[#DD8D00] to-[#E3DDC9] 
                  hover:from-[#E3DDC9] hover:via-[#DD8D00] hover:to-[#DD8D00] 
                  text-[#F8F4F1] 
                  px-6 py-3
                  rounded-xl 
                  text-sm font-semibold 
                  transition-all duration-500 
                  hover:shadow-[0_8px_16px_rgba(221,141,0,0.3)]
                "
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#F8F4F1]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                <span className="relative flex flex-col items-center justify-center">
                  <span className="flex items-center justify-center gap-2">
                    Claim Your Seat
                    <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <span className="text-[10px] font-normal mt-1">March 21-23, 2025</span>
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 