'use client';

import { useEffect, useState } from 'react';

export default function HeroCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // Add state to track which values changed
  const [changed, setChanged] = useState({
    days: false,
    hours: false,
    minutes: false,
    seconds: false
  });

  useEffect(() => {
    // Set Thursday night at 11:59 PM Eastern Time
    const closingDate = new Date();
    // Find the next Thursday
    const day = closingDate.getDay(); // 0 is Sunday, 4 is Thursday
    const daysUntilThursday = (4 + 7 - day) % 7;
    closingDate.setDate(closingDate.getDate() + daysUntilThursday);
    closingDate.setHours(23, 59, 59, 0); // 11:59:59 PM

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = closingDate.getTime() - now.getTime();

      if (difference > 0) {
        const newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
        
        // Check which values changed
        const newChanged = {
          days: newTimeLeft.days !== timeLeft.days,
          hours: newTimeLeft.hours !== timeLeft.hours,
          minutes: newTimeLeft.minutes !== timeLeft.minutes,
          seconds: newTimeLeft.seconds !== timeLeft.seconds
        };
        
        setTimeLeft(newTimeLeft);
        setChanged(newChanged);
        
        // Reset animation flags after animation completes
        if (Object.values(newChanged).some(Boolean)) {
          setTimeout(() => {
            setChanged({
              days: false,
              hours: false,
              minutes: false,
              seconds: false
            });
          }, 300);
        }
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="w-full max-w-sm text-center mb-3">
      <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#F8F4F1]/80 mb-2 font-medium">
        <div className="flex items-center mr-1 bg-red-600/80 backdrop-blur-sm border border-red-400 rounded-full px-2 py-1 animate-pulse">
          <div className="w-2 h-2 bg-white rounded-full mr-1"></div>
          <span className="text-white font-bold">URGENT</span>
        </div>
        <span className="relative">
          Registration Closes In:
          <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-red-500"></span>
        </span>
      </div>
      
      <div className="flex justify-center gap-3">
        <div className="flex flex-col items-center">
          <div className={`bg-red-600/20 backdrop-blur-sm border border-red-500/40 rounded-lg w-14 h-14 flex items-center justify-center font-bold text-2xl text-white transition-all duration-300 ${changed.days ? 'scale-110 border-red-500' : ''}`}>
            {timeLeft.days}
          </div>
          <div className="text-xs text-[#F8F4F1]/70 mt-1">Days</div>
        </div>
        <div className="flex flex-col items-center">
          <div className={`bg-red-600/20 backdrop-blur-sm border border-red-500/40 rounded-lg w-14 h-14 flex items-center justify-center font-bold text-2xl text-white transition-all duration-300 ${changed.hours ? 'scale-110 border-red-500' : ''}`}>
            {formatNumber(timeLeft.hours)}
          </div>
          <div className="text-xs text-[#F8F4F1]/70 mt-1">Hours</div>
        </div>
        <div className="flex flex-col items-center">
          <div className={`bg-red-600/20 backdrop-blur-sm border border-red-500/40 rounded-lg w-14 h-14 flex items-center justify-center font-bold text-2xl text-white transition-all duration-300 ${changed.minutes ? 'scale-110 border-red-500' : ''}`}>
            {formatNumber(timeLeft.minutes)}
          </div>
          <div className="text-xs text-[#F8F4F1]/70 mt-1">Mins</div>
        </div>
        <div className="flex flex-col items-center">
          <div className={`bg-red-600/20 backdrop-blur-sm border border-red-500/40 rounded-lg w-14 h-14 flex items-center justify-center font-bold text-2xl text-white transition-all duration-300 ${changed.seconds ? 'scale-110 border-red-500' : ''}`}>
            {formatNumber(timeLeft.seconds)}
          </div>
          <div className="text-xs text-[#F8F4F1]/70 mt-1">Secs</div>
        </div>
      </div>
      <div className="mt-2 text-red-400 text-sm font-medium animate-pulse">
        After Thursday, registration will be closed!
      </div>
    </div>
  );
} 