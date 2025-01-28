import Link from 'next/link';
import Image from 'next/image';

export default function Nav({ scrolled }: { scrolled: boolean }) {
  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 
      ${scrolled ? 'bg-[#222222]' : 'bg-transparent'} 
      transition-colors duration-300 py-6
    `}>
      <div className="w-min(100% - 2rem, 80rem) mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="hidden md:block text-[#F8F4F1] text-2xl font-bold tracking-wide">
              Brilliance25
            </Link>
          </div>

          {/* CTA Button */}
          <a 
            href="https://www.tickets.brilliance25.com"
            className="ml-auto"
          >
            <button 
              className="
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
              <span className="relative flex items-center justify-center gap-2">
                Claim Your Seat
                <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
} 