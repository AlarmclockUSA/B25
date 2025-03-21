'use client';

import { useState } from 'react';

export default function HeroCountdown() {
  const [timeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="w-full max-w-sm text-center mb-3">
      <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#F8F4F1]/80 mb-2 font-medium">
        <div className="flex items-center mr-1 bg-gray-600/80 backdrop-blur-sm border border-gray-400 rounded-full px-2 py-1">
          <span className="text-white font-bold">REGISTRATION CLOSED</span>
        </div>
      </div>
      
      <div className="flex justify-center gap-3">
        <div className="flex flex-col items-center">
          <div className="bg-gray-600/20 backdrop-blur-sm border border-gray-500/40 rounded-lg w-14 h-14 flex items-center justify-center font-bold text-2xl text-white/50">
            {timeLeft.days}
          </div>
          <div className="text-xs text-[#F8F4F1]/70 mt-1">Days</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-gray-600/20 backdrop-blur-sm border border-gray-500/40 rounded-lg w-14 h-14 flex items-center justify-center font-bold text-2xl text-white/50">
            {formatNumber(timeLeft.hours)}
          </div>
          <div className="text-xs text-[#F8F4F1]/70 mt-1">Hours</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-gray-600/20 backdrop-blur-sm border border-gray-500/40 rounded-lg w-14 h-14 flex items-center justify-center font-bold text-2xl text-white/50">
            {formatNumber(timeLeft.minutes)}
          </div>
          <div className="text-xs text-[#F8F4F1]/70 mt-1">Mins</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-gray-600/20 backdrop-blur-sm border border-gray-500/40 rounded-lg w-14 h-14 flex items-center justify-center font-bold text-2xl text-white/50">
            {formatNumber(timeLeft.seconds)}
          </div>
          <div className="text-xs text-[#F8F4F1]/70 mt-1">Secs</div>
        </div>
      </div>
      <div className="mt-2 text-gray-400 text-sm font-medium">
        Registration is now closed
      </div>
    </div>
  );
} 