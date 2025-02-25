'use client';

import { useEffect, useState } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const eventDate = new Date('2025-03-21T11:00:00-04:00'); // 11am EST on March 21st, 2025

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

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

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="hidden lg:block bg-[#DD8D00]/10 backdrop-blur-sm border border-[#DD8D00]/20 rounded-full px-8 py-2">
      <div className="flex items-center gap-6 text-[#F8F4F1]">
        <div className="text-center">
          <div className="text-xl font-bold">{timeLeft.days}</div>
          <div className="text-[10px] uppercase tracking-wider opacity-80">Days</div>
        </div>
        <div className="text-xl font-bold text-[#DD8D00]">:</div>
        <div className="text-center">
          <div className="text-xl font-bold">{formatNumber(timeLeft.hours)}</div>
          <div className="text-[10px] uppercase tracking-wider opacity-80">Hours</div>
        </div>
        <div className="text-xl font-bold text-[#DD8D00]">:</div>
        <div className="text-center">
          <div className="text-xl font-bold">{formatNumber(timeLeft.minutes)}</div>
          <div className="text-[10px] uppercase tracking-wider opacity-80">Mins</div>
        </div>
        <div className="text-xl font-bold text-[#DD8D00]">:</div>
        <div className="text-center">
          <div className="text-xl font-bold">{formatNumber(timeLeft.seconds)}</div>
          <div className="text-[10px] uppercase tracking-wider opacity-80">Secs</div>
        </div>
      </div>
    </div>
  );
} 