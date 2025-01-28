import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={onClose}>
      <div 
        className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <nav className="mt-8">
            <div className="flex flex-col space-y-4">
              <Link href="#about" className="text-gray-600 hover:text-blue-600" onClick={onClose}>
                About
              </Link>
              <Link href="#programs" className="text-gray-600 hover:text-blue-600" onClick={onClose}>
                Programs
              </Link>
              <Link href="#events" className="text-gray-600 hover:text-blue-600" onClick={onClose}>
                Events
              </Link>
              <Link href="#coaching" className="text-gray-600 hover:text-blue-600" onClick={onClose}>
                Coaching
              </Link>
              <Link href="#explore" className="text-gray-600 hover:text-blue-600" onClick={onClose}>
                Explore
              </Link>
              <Link href="#shop" className="text-gray-600 hover:text-blue-600" onClick={onClose}>
                Shop
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
} 