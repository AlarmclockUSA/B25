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
    const eventDate = new Date('2025-03-21T11:00:00-04:00'); // 11am EST on March 21st, 2025

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

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
    <div className="w-full max-w-md text-center mb-4">
      <div className="flex items-center justify-center gap-3 text-sm uppercase tracking-widest text-[#F8F4F1]/80 mb-4 font-medium">
        <div className="flex items-center mr-1 bg-[#DD8D00]/10 backdrop-blur-sm border border-green-400/30 rounded-full px-3 py-1.5">
          <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse mr-1.5"></div>
          <span className="text-green-400 font-bold">LIVE</span>
        </div>
        <span className="relative">
          Event Begins In:
          <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#DD8D00]/30"></span>
        </span>
      </div>
      
      <div className="flex justify-center gap-4">
        <div className="flex flex-col items-center">
          <div className={`bg-[#DD8D00]/10 backdrop-blur-sm border border-[#DD8D00]/20 rounded-lg w-16 h-16 flex items-center justify-center font-bold text-3xl text-[#DD8D00] transition-all duration-300 ${changed.days ? 'scale-110 border-[#DD8D00]' : ''}`}>
            {timeLeft.days}
          </div>
          <div className="text-xs text-[#F8F4F1]/70 mt-1">Days</div>
        </div>
        <div className="flex flex-col items-center">
          <div className={`bg-[#DD8D00]/10 backdrop-blur-sm border border-[#DD8D00]/20 rounded-lg w-16 h-16 flex items-center justify-center font-bold text-3xl text-[#DD8D00] transition-all duration-300 ${changed.hours ? 'scale-110 border-[#DD8D00]' : ''}`}>
            {formatNumber(timeLeft.hours)}
          </div>
          <div className="text-xs text-[#F8F4F1]/70 mt-1">Hours</div>
        </div>
        <div className="flex flex-col items-center">
          <div className={`bg-[#DD8D00]/10 backdrop-blur-sm border border-[#DD8D00]/20 rounded-lg w-16 h-16 flex items-center justify-center font-bold text-3xl text-[#DD8D00] transition-all duration-300 ${changed.minutes ? 'scale-110 border-[#DD8D00]' : ''}`}>
            {formatNumber(timeLeft.minutes)}
          </div>
          <div className="text-xs text-[#F8F4F1]/70 mt-1">Minutes</div>
        </div>
        <div className="flex flex-col items-center">
          <div className={`bg-[#DD8D00]/10 backdrop-blur-sm border border-[#DD8D00]/20 rounded-lg w-16 h-16 flex items-center justify-center font-bold text-3xl text-[#DD8D00] transition-all duration-300 ${changed.seconds ? 'scale-110 border-[#DD8D00]' : ''}`}>
            {formatNumber(timeLeft.seconds)}
          </div>
          <div className="text-xs text-[#F8F4F1]/70 mt-1">Seconds</div>
        </div>
      </div>
    </div>
  );
} 