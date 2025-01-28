'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const images = [
  { src: '/2M5A3176.jpg', alt: 'Event Photo 1', size: 'large', position: 'center' },
  { src: '/2M5A1689.jpg', alt: 'Event Photo 2', size: 'medium', position: 'top' },
  { src: '/2M5A4184.jpg', alt: 'Event Photo 3', size: 'large', position: 'center' },
  { src: '/2M5A0691-2.jpg', alt: 'Event Photo 4', size: 'medium', position: 'top' },
  { src: '/2M5A0415-2.jpg', alt: 'Event Photo 5', size: 'large', position: 'center' },
  { src: '/2M5A1901-2.jpg', alt: 'Event Photo 6', size: 'medium', position: 'top' },
  { src: '/2M5A2212-2.jpg', alt: 'Event Photo 7', size: 'large', position: 'center' },
  { src: '/2M5A2599-3.jpg', alt: 'Event Photo 8', size: 'medium', position: 'top' },
  { src: '/2M5A4455.jpg', alt: 'Event Photo 9', size: 'large', position: 'top' },
  { src: '/2M5A1060-3.jpg', alt: 'Event Photo 10', size: 'medium', position: 'center' },
  { src: '/2M5A4500-2.jpg', alt: 'Event Photo 11', size: 'large', position: 'top' },
  // Duplicate first few images to create seamless loop
  { src: '/2M5A3176.jpg', alt: 'Event Photo 1', size: 'large', position: 'center' },
  { src: '/2M5A1689.jpg', alt: 'Event Photo 2', size: 'medium', position: 'top' },
  { src: '/2M5A4184.jpg', alt: 'Event Photo 3', size: 'large', position: 'center' }
];

export default function ImageScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'medium':
        return 'w-[600px] h-[450px]';
      case 'large':
      default:
        return 'w-[800px] h-[450px]';
    }
  };

  return (
    <div className="w-full overflow-hidden bg-[#222222]">
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden -mx-4"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`flex-none relative overflow-hidden first:ml-4 last:mr-4 ${getSizeClasses(image.size)}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={`object-cover object-${image.position} rounded-2xl hover:scale-105 transition-transform duration-500 ${getSizeClasses(image.size)}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
} 