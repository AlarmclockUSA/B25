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
            <button
              className="
                bg-gray-600
                text-[#F8F4F1]
                px-6 py-2
                rounded-full
                text-sm
                font-medium
                cursor-not-allowed
                opacity-75
              "
              disabled
            >
              Registration Closed
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 