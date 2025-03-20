'use client';

import { useEffect, useState } from 'react';

export default function CartClosingBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // Keep the isVisible state for potential future use, but we won't have a UI element to toggle it
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set Thursday night at 11:59 PM Pacific Time
    const closingDate = new Date();
    // Find the next Thursday
    const day = closingDate.getDay(); // 0 is Sunday, 4 is Thursday
    const daysUntilThursday = (4 + 7 - day) % 7;
    closingDate.setDate(closingDate.getDate() + daysUntilThursday);
    // Set to 11:59:59 PM PT (which is 3 hours behind ET)
    closingDate.setHours(23, 59, 59, 0);

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = closingDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white py-2 px-4">
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex items-center justify-center text-center mx-auto">
          <svg className="w-5 h-5 mr-2 animate-pulse flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-medium">
            URGENT: Registration closes Thursday at 11:59 PM PT
            {timeLeft.days > 0 && ` (${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s)`}
            {timeLeft.days === 0 && ` (${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s)`}
          </span>
        </div>
      </div>
    </div>
  );
} 