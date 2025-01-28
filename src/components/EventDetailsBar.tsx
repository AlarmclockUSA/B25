import React from 'react';

interface EventDetailsBarProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export default function EventDetailsBar({ className = '', variant = 'dark' }: EventDetailsBarProps) {
  const bgColor = variant === 'dark' ? 'bg-[#222222]/80' : 'bg-[#2A2A2A]/80';
  const textColor = 'text-[#F8F4F1]';
  const iconBgColor = 'bg-[#74A78E]/20';
  const iconColor = 'text-[#74A78E]';
  const labelColor = 'text-[#F8F4F1]/60';

  return (
    <div 
      className={`
        event-details
        ${bgColor} backdrop-blur-xl 
        rounded-[32px]
        py-8 px-8
        border border-[#F8F4F1]/10
        shadow-[0_8px_32px_rgba(0,0,0,0.1)] 
        flex flex-col sm:flex-row 
        gap-6 sm:gap-8 md:gap-16 
        items-center justify-center
        mx-auto
        ${className}
      `}
    >
      <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
        <div className={`w-12 h-12 rounded-full ${iconBgColor} flex items-center justify-center shrink-0`}>
          <svg className={`w-6 h-6 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <p className={`text-sm ${labelColor} uppercase tracking-wider`}>DATE</p>
          <p className={`text-base font-medium ${textColor}`}>Mar 21 - 23, 2025</p>
        </div>
      </div>
      <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
        <div className={`w-12 h-12 rounded-full ${iconBgColor} flex items-center justify-center shrink-0`}>
          <svg className={`w-6 h-6 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
        <div>
          <p className={`text-sm ${labelColor} uppercase tracking-wider`}>PLACE</p>
          <p className={`text-base font-medium ${textColor}`}>Virtual</p>
        </div>
      </div>
      <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
        <div className={`w-12 h-12 rounded-full ${iconBgColor} flex items-center justify-center shrink-0`}>
          <svg className={`w-6 h-6 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <p className={`text-sm ${labelColor} uppercase tracking-wider`}>TIMEZONE</p>
          <p className={`text-base font-medium ${textColor}`}>Eastern</p>
        </div>
      </div>
    </div>
  );
} 