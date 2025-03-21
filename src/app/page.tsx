'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Nav from '@/components/Nav';
import VerticalNav from "@/components/VerticalNav";
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import HeroCountdown from '@/components/HeroCountdown';
import EventDetailsBar from '@/components/EventDetailsBar';
import ImageScroll from '@/components/ImageScroll';

// Track button clicks
function trackButtonClick(buttonText: string, section: string) {
  // Implement tracking logic here
  console.log(`Button clicked: ${buttonText} in ${section}`);
}

function MainContent({ cartUrl }: { cartUrl: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Basic scroll detection for nav background
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleTimelineScroll = () => {
      const agendaSection = document.querySelector('.agenda-timeline');
      const timeline = agendaSection?.querySelector('.space-y-48');
      if (!timeline || !agendaSection) return;
      
      const agendaRect = agendaSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const timelineStart = agendaRect.top;
      
      // Calculate scroll percentage
      let scrollPercent = 0;
      if (timelineStart <= viewportHeight) {
        const totalScroll = agendaRect.height;
        const currentScroll = Math.max(0, viewportHeight - timelineStart);
        scrollPercent = Math.min(Math.max(currentScroll / totalScroll, 0), 1);
      }
      
      // Update CSS variable
      (timeline as HTMLElement).style.setProperty('--scroll-percent', scrollPercent.toString());
    };
    
    window.addEventListener('scroll', handleTimelineScroll);
    handleTimelineScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleTimelineScroll);
  }, []);

  return (
    <div>
      {/* JSON-LD Structured Data for Event */}
      <div 
        dangerouslySetInnerHTML={{
          __html: `
            <script type="application/ld+json">
              ${JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Event",
                "name": "Brilliance 2025 with Graham Cooke - Discover an Extraordinary Relationship With God",
                "startDate": "2025-03-21T11:00:00-04:00",
                "endDate": "2025-03-23T17:00:00-04:00",
                "eventStatus": "https://schema.org/EventScheduled",
                "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
                "location": {
                  "@type": "VirtualLocation",
                  "url": "https://brilliance25.com"
                },
                "image": [
                  "https://brilliance25.com/hero-bg.jpg"
                ],
                "description": "Step into a 3-day transformational online experience hosted by leading voice Graham Cooke, Dionne van Zyl and special guests. Discover the proven path to an extraordinary relationship with God.",
                "offers": {
                  "@type": "Offer",
                  "url": "https://brilliance25.com",
                  "price": "97",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "validFrom": "2024-01-15T00:00:00-05:00"
                },
                "performer": [
                  {
                    "@type": "Person",
                    "name": "Graham Cooke",
                    "image": "https://brilliance25.com/Graham.png"
                  },
                  {
                    "@type": "Person",
                    "name": "Dionne van Zyl",
                    "image": "https://brilliance25.com/Dionne.jpg"
                  }
                ],
                "organizer": {
                  "@type": "Organization",
                  "name": "Brilliant Perspectives",
                  "url": "https://brilliantperspectives.com"
                }
              })}
            </script>
          `
        }}
      />

      <main className="relative overflow-hidden">
        <Nav scrolled={scrolled} cartUrl={cartUrl} />
        <VerticalNav />

      {/* Hero Section */}
        <section id="hero" className="relative min-h-[100vh] bg-black bg-radial-gradient flex flex-col items-center justify-center py-16 md:py-12 px-4 overflow-hidden">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0 w-full max-w-[100vw]">
          <Image
            src="/hero-bg.jpg"
              alt="Virtual Event - Brilliance 2025 with Graham Cooke and Team"
            fill
              className="object-cover opacity-40 scale-105"
            priority
          />
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/70"></div>
            {/* Subtle radial gradient for depth */}
            <div className="absolute inset-0 bg-radial-gradient"></div>
            {/* Centered spotlight effect */}
            <div className="absolute inset-0 bg-gradient-radial from-[#DD8D00]/5 via-transparent to-transparent opacity-70" style={{ backgroundPosition: '50% 30%' }}></div>
        </div>
          
          <div className="relative container mx-auto px-4 md:px-8 flex-1 flex flex-col justify-center z-20">
            {/* Content centered instead of left-aligned */}
            <div className="max-w-4xl mx-auto pt-12 md:pt-16 pb-12 md:pb-16 text-center">
              
              {/* Main Headline - Enhanced with subtle animation and better spacing */}
              <h1 className="font-bold mb-8 mx-auto">
                <span className="block text-[#F8F4F1] text-lg sm:text-xl md:text-2xl font-medium tracking-[0.2em] mb-4 animate-fade-in-up">
                  3-DAY VIRTUAL EVENT
                </span>
                <span className="block text-[2.6rem] sm:text-[3.4rem] md:text-[4.2rem] lg:text-[5.4rem] text-[#F8F4F1] leading-[1.05] tracking-tight mb-6 relative animate-fade-in-up animation-delay-200">
                  Discover Your <span className="relative inline-block">
                    Extraordinary
                    <span className="absolute -bottom-1 left-0 right-0 h-[0.15em] bg-[#DD8D00]" style={{
                      backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,5 Q25,2 50,5 T100,5' stroke='%23DD8D00' stroke-width='3' fill='none' stroke-linecap='round' stroke-dasharray='0,0'/%3E%3C/svg%3E\")",
                      backgroundRepeat: "repeat-x",
                      backgroundSize: "100% 100%"
                    }}></span>
                  </span> Relationship With God
              </span>
                <span className="block text-base sm:text-lg md:text-xl lg:text-2xl text-[#DD8D00] font-medium tracking-wide mb-4 animate-fade-in-up animation-delay-200">
                  What if life with God is more than you've ever dreamed—and it's already yours?
                </span>
            </h1>
            
              {/* Date & Location - With improved contrast and animation */}
              <div className="mb-4 animate-fade-in-up animation-delay-700">
                <div className="text-[#F8F4F1] text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
                  MARCH 21-23, 2025
                </div>
                </div>

              {/* Descriptive Copy - Enhanced with better spacing and line height */}
              <div className="max-w-2xl mb-6 mx-auto animate-fade-in-up animation-delay-900">
                <p className="text-lg md:text-xl text-[#F8F4F1]/90 leading-[1.5]">
                  Step into a 3-day transformational online experience hosted by leading voices Graham Cooke, Dionne van Zyl + Team. Experience a proven pathway to an extraordinary relationship with God.
                </p>
              </div>
              
              {/* CTA Button - Enhanced with animation and subtle hover effect */}
              <div className="mb-4 flex justify-center animate-fade-in-up animation-delay-1000">
                {/* Countdown Timer */}
                <HeroCountdown />
              </div>
              
              <div className="mb-6 flex justify-center animate-fade-in-up animation-delay-1200">
                <button 
                  className="
                    group relative
                    w-full sm:w-auto
                    transform
                    bg-gray-600
                    text-[#F8F4F1] 
                    px-8 sm:px-12 py-6 sm:py-8
                    rounded-xl 
                    text-2xl sm:text-3xl
                    font-bold
                    transition-all duration-300
                    cursor-not-allowed
                    opacity-75
                  "
                  disabled
                >
                  <span className="flex flex-col items-center">
                    <span className="flex items-center justify-center gap-2">
                      Registration Closed
                    </span>
                    <span className="text-sm font-normal mt-1">Join our waitlist for future events</span>
                  </span>
                </button>
              </div>
              
              {/* BrilliantTV Video Embed */}
              <div className="w-full max-w-2xl mx-auto px-4 mt-8 mb-16 animate-fade-in-up animation-delay-1300">
                <p className="text-center text-[#F8F4F1]/80 text-sm mb-4 italic font-medium">Watch highlights from our previous Brilliance conference below:</p>
                <div className="embed-container rounded-xl overflow-hidden">
                  <iframe 
                    src="https://www.brillianttv.com/embed/2257217?autoplay=0&muted=1" 
                    style={{border: 0}}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
                </div>
                </div>
      </section>

        {/* Sales Letter Section */}
        <section className="relative overflow-hidden py-24 sm:py-32 bg-black">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                <div className="space-y-8">
                  <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-medium leading-[1.2] text-[#F8F4F1]">
                    What if Everything You've Wanted in Your Relationship with God is Already Yours?
                  </h2>
                  
                  <p className="text-xl md:text-2xl text-[#F8F4F1]/90 leading-relaxed">
                    What if transformation isn't about trying harder, but becoming aware of what's already true?
                    Isn't it wonderful that the Father isn't waiting for you to arrive—He's delighting in who you already are?
                  </p>
                  
                  <p className="text-xl md:text-2xl text-[#F8F4F1]/90 leading-relaxed">
                    Brilliance25 isn't just another conference. It's an immersive three-day journey carefully crafted to transform how you experience God's constant presence.
                  </p>

                  <div className="space-y-6">
                    <p className="text-xl md:text-2xl text-[#F8F4F1] font-medium">You'll Discover:</p>
                    <ul className="space-y-6 text-xl md:text-2xl text-[#F8F4F1]/90">
                      <li className="flex flex-col gap-2">
                        <div className="flex items-center gap-4">
                          <div className="w-2 h-2 rounded-full bg-[#DD8D00]"></div>
                          <span className="font-medium">God's delight exists independent of your performance</span>
              </div>
                        <p className="pl-6 text-[#F8F4F1]/80">What if His love for you has nothing to do with what you do, and everything to do with who you are in Christ?</p>
                      </li>
                      <li className="flex flex-col gap-2">
                        <div className="flex items-center gap-4">
                          <div className="w-2 h-2 rounded-full bg-[#DD8D00]"></div>
                          <span className="font-medium">Your complete identity in Christ is already yours</span>
                        </div>
                        <p className="pl-6 text-[#F8F4F1]/80">Isn't it beautiful that you're not becoming a new creation—you already are one? You're simply learning to practice who you already are.</p>
                      </li>
                      <li className="flex flex-col gap-2">
                        <div className="flex items-center gap-4">
                          <div className="w-2 h-2 rounded-full bg-[#DD8D00]"></div>
                          <span className="font-medium">Freedom instead of fear in God's presence</span>
                        </div>
                        <p className="pl-6 text-[#F8F4F1]/80">What if every encounter with the Father could be filled with wonder instead of worry? What if His presence is your permanent state of being?</p>
                      </li>
                    </ul>
            </div>

                  <p className="text-xl md:text-2xl text-[#F8F4F1] font-medium">Why Brilliance25 Is Different:</p>
                  
                  <p className="text-xl md:text-2xl text-[#F8F4F1]/90 leading-relaxed">
                    We've designed each moment of these three days to build upon the last—creating a sequence of powerful experiences that shift how you relate to God. This isn't information to process; it's reality to step into.
                  </p>
                  
                  <p className="text-xl md:text-2xl text-[#F8F4F1]/90 leading-relaxed">
                    Each session guides you deeper into the Father's heart through:
                  </p>
                  
                  <ul className="space-y-4 text-xl md:text-2xl text-[#F8F4F1]/90 pl-6">
                    <li className="list-disc">Immersive teaching that helps you see yourself through Heaven's eyes</li>
                    <li className="list-disc">Interactive experiences where you practice awareness of God's presence</li>
                    <li className="list-disc">Guided encounters that turn revelation into lived reality</li>
                  </ul>
                  
                  <p className="text-xl md:text-2xl text-[#F8F4F1]/90 leading-relaxed">
                    What if these three days could help you permanently step out of performance Christianity into the freedom that's already yours?
                  </p>
                  
                  <p className="text-xl md:text-2xl text-[#F8F4F1]/90 leading-relaxed">
                    Join us as we journey together into an extraordinary relationship with God—one where you experience a Father who isn't fixing what's wrong with you, but is absolutely captivated by who you're becoming.
                    This immersive journey awaits you.
                  </p>

                  <div className="relative rounded-2xl overflow-hidden">
                    <div className="embed-container rounded-xl overflow-hidden">
                      <iframe 
                        src="https://www.brillianttv.com/embed/2257218?autoplay=0&muted=1" 
                        style={{border: 0}}
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>

                  <div className="pt-16">
                    <a 
                      href={cartUrl}
                      className="block w-full"
                    >
                      <button 
                        onClick={() => trackButtonClick('Begin Your Journey', 'Sales Letter Section')}
                        className="
                          group relative w-full
                          transform hover:-translate-y-1 
                          bg-gradient-to-br from-[#DD8D00] via-[#DD8D00] to-[#E3DDC9] 
                          hover:from-[#E3DDC9] hover:via-[#DD8D00] hover:to-[#DD8D00] 
                          text-[#F8F4F1] 
                          px-8 py-4
                          rounded-xl 
                          text-xl
                          font-semibold 
                          transition-all duration-500 
                          hover:shadow-[0_20px_50px_rgba(221,141,0,0.3)] 
                          active:scale-95
                        "
                      >
                <div className="absolute inset-0 bg-gradient-to-r from-[#F8F4F1]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                        <span className="relative flex flex-col items-center justify-center">
                  <span className="flex items-center justify-center gap-3">
                            Begin Your Journey
                            <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                  </span>
                        </span>
              </button>
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* After Sales Letter Section - First Testimonial */}
        <section className="relative overflow-hidden py-24 bg-black">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-medium leading-[1.2] text-[#F8F4F1] text-center mb-8">
                "I am deeply loved by my Abba Father, who delights in walking in intimacy with me moment by moment."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#74A78E]/20 flex items-center justify-center shrink-0">
                  <svg className="w-8 h-8 text-[#74A78E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-semibold text-[#F8F4F1]">Rhonda</p>
                  <p className="text-sm text-[#F8F4F1]/60">Event Attendee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Before & After Transformation Section */}
        <section className="relative overflow-hidden py-24 sm:py-32 bg-black">
          <div className="absolute inset-0 w-full max-w-[100vw]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#DD8D00]/20 via-black to-black"></div>
          </div>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-[#F8F4F1] text-center mb-16 relative z-10">
                Your Transformation Journey
          </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                {/* Before Column */}
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-[#DD8D00]/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#DD8D00]/20 flex items-center justify-center shrink-0">
                      <span className="text-[#DD8D00] font-bold text-xl">BEFORE</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#F8F4F1]">Where You Are Now</h3>
                  </div>
                  
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#DD8D00]/10 flex items-center justify-center shrink-0 mt-1">
                        <svg className="w-4 h-4 text-[#DD8D00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <p className="text-xl text-[#F8F4F1]/80">Feeling disconnected from God despite your best efforts</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#DD8D00]/10 flex items-center justify-center shrink-0 mt-1">
                        <svg className="w-4 h-4 text-[#DD8D00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <p className="text-xl text-[#F8F4F1]/80">Experiencing occasional spiritual highs followed by long dry seasons</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#DD8D00]/10 flex items-center justify-center shrink-0 mt-1">
                        <svg className="w-4 h-4 text-[#DD8D00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <p className="text-xl text-[#F8F4F1]/80">Constantly striving to earn God's approval and presence</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#DD8D00]/10 flex items-center justify-center shrink-0 mt-1">
                        <svg className="w-4 h-4 text-[#DD8D00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <p className="text-xl text-[#F8F4F1]/80">
                        You're unsure of your identity and purpose in God's kingdom
                      </p>
                    </li>
                  </ul>
                </div>
                
                {/* After Column */}
                <div className="bg-[#DD8D00]/10 backdrop-blur-sm rounded-2xl p-8 border border-[#DD8D00]/30">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#DD8D00]/20 flex items-center justify-center shrink-0">
                      <span className="text-[#DD8D00] font-bold text-xl">AFTER</span>
              </div>
                    <h3 className="text-2xl font-bold text-[#F8F4F1]">Your New Reality</h3>
            </div>
                  
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#74A78E]/20 flex items-center justify-center shrink-0 mt-1">
                        <svg className="w-4 h-4 text-[#74A78E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-xl text-[#F8F4F1]/90">Living in constant awareness of God's presence and delight in you</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#74A78E]/20 flex items-center justify-center shrink-0 mt-1">
                        <svg className="w-4 h-4 text-[#74A78E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-xl text-[#F8F4F1]/90">Experiencing consistent communion with God that doesn't depend on circumstances</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#74A78E]/20 flex items-center justify-center shrink-0 mt-1">
                        <svg className="w-4 h-4 text-[#74A78E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-xl text-[#F8F4F1]/90">Resting in the freedom of being fully known, fully loved, and fully accepted</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#74A78E]/20 flex items-center justify-center shrink-0 mt-1">
                        <svg className="w-4 h-4 text-[#74A78E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-xl text-[#F8F4F1]/90">Walking confidently in your true identity and purpose as God's beloved</p>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-16 text-center">
                <a 
                  href={cartUrl}
                  className="inline-block"
                >
                  <button 
                    onClick={() => trackButtonClick('Experience the Transformation', 'Before After Section')}
                    className="
                      group relative
                      transform hover:-translate-y-1 
                      bg-gradient-to-br from-[#DD8D00] via-[#DD8D00] to-[#E3DDC9] 
                      hover:from-[#E3DDC9] hover:via-[#DD8D00] hover:to-[#DD8D00] 
                      text-[#F8F4F1] 
                      px-10 py-5
                      rounded-xl 
                      text-xl md:text-2xl
                      font-semibold 
                      transition-all duration-500 
                      hover:shadow-[0_20px_50px_rgba(221,141,0,0.3)] 
                      active:scale-95
                    "
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F8F4F1]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                    <span className="relative flex items-center justify-center gap-3">
                      Experience the Transformation
                      <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                </a>
              </div>
          </div>
        </div>
      </section>

        {/* What You'll Learn Section */}
        <section className="relative overflow-hidden py-24 sm:py-32 bg-black">
          <div className="absolute inset-0 w-full max-w-[100vw]">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#DD8D00]/10"></div>
          </div>
        <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-[#F8F4F1] text-center mb-16 relative z-10">
                What You'll Learn
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Learning Point 1 */}
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-[#DD8D00]/20 transform transition-all duration-500 hover:border-[#DD8D00]/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(221,141,0,0.1)]">
              <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#DD8D00]/20 flex items-center justify-center shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[#DD8D00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
          </div>
                    <p className="text-xl text-[#F8F4F1] leading-relaxed">
                      Exploring God's true nature, and how this gives permission for everything to be made new.
                </p>
                  </div>
              </div>

                {/* Learning Point 2 */}
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-[#DD8D00]/20 transform transition-all duration-500 hover:border-[#DD8D00]/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(221,141,0,0.1)]">
              <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#DD8D00]/20 flex items-center justify-center shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[#DD8D00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                    <p className="text-xl text-[#F8F4F1] leading-relaxed">
                      Experiencing the paradigm shift that occurs when you realize that God isn't working on your sin.
              </p>
                  </div>
            </div>

                {/* Learning Point 3 */}
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-[#DD8D00]/20 transform transition-all duration-500 hover:border-[#DD8D00]/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(221,141,0,0.1)]">
              <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#DD8D00]/20 flex items-center justify-center shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[#DD8D00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
                    <p className="text-xl text-[#F8F4F1] leading-relaxed">
                      Discovering the keys to having a relationship with the Father like Jesus had.
              </p>
                  </div>
            </div>

                {/* Learning Point 4 */}
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-[#DD8D00]/20 transform transition-all duration-500 hover:border-[#DD8D00]/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(221,141,0,0.1)]">
              <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#DD8D00]/20 flex items-center justify-center shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[#DD8D00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                </div>
                    <p className="text-xl text-[#F8F4F1] leading-relaxed">
                      Knowing with absolute confidence how God wants to walk with you in your current situation.
                </p>
              </div>
            </div>

                {/* Learning Point 5 */}
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-[#DD8D00]/20 transform transition-all duration-500 hover:border-[#DD8D00]/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(221,141,0,0.1)]">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#DD8D00]/20 flex items-center justify-center shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[#DD8D00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-xl text-[#F8F4F1] leading-relaxed">
                      Accessing the astonishing inheritance that Jesus paid for in your life.
                    </p>
                  </div>
                </div>
                
                {/* Learning Point 6 */}
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-[#DD8D00]/20 transform transition-all duration-500 hover:border-[#DD8D00]/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(221,141,0,0.1)]">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#DD8D00]/20 flex items-center justify-center shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[#DD8D00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-xl text-[#F8F4F1] leading-relaxed">
                      Enjoying the same perfect love from the Father scripture talks about.
                    </p>
                  </div>
                </div>
            </div>

              <div className="mt-16 text-center">
                <a 
                  href={cartUrl}
                  className="inline-block"
                >
                  <button 
                    onClick={() => trackButtonClick('Join This Transformational Experience', 'What You\'ll Learn Section')}
                    className="
                      group relative
                      transform hover:-translate-y-1 
                      bg-gradient-to-br from-[#DD8D00] via-[#DD8D00] to-[#E3DDC9] 
                      hover:from-[#E3DDC9] hover:via-[#DD8D00] hover:to-[#DD8D00] 
                      text-[#F8F4F1] 
                      px-10 py-5
                      rounded-xl 
                      text-xl md:text-2xl
                      font-semibold 
                      transition-all duration-500 
                      hover:shadow-[0_20px_50px_rgba(221,141,0,0.3)] 
                      active:scale-95
                    "
                  >
                <span className="relative flex items-center justify-center gap-3">
                      Join This Transformational Experience
                      <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Event Schedule Section */}
        <section id="schedule" className="relative overflow-hidden py-24 bg-gradient-to-b from-black to-[#111]">
          <div className="w-min(100% - 2rem, 80rem) mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold text-[#F8F4F1] mb-8">
                  <span className="block">EVENT</span>
                  <span className="block">SCHEDULE</span>
                </h2>
                <p className="text-xl text-[#F8F4F1]/80 mb-12 max-w-2xl mx-auto">
                  Mark your calendar for three transformative days of connection and growth
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  {/* Friday */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
                    <div className="inline-block px-4 py-2 rounded-full bg-[#DD8D00]/20 text-[#DD8D00] font-bold mb-4">
                      DAY 1
                  </div>
                    <h3 className="text-2xl font-bold text-[#F8F4F1] mb-3">Friday</h3>
                    <div className="text-xl font-medium text-[#DD8D00]">
                      11AM - 7PM Eastern
            </div>
          </div>
                  
                  {/* Saturday */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
                    <div className="inline-block px-4 py-2 rounded-full bg-[#DD8D00]/20 text-[#DD8D00] font-bold mb-4">
                      DAY 2
              </div>
                    <h3 className="text-2xl font-bold text-[#F8F4F1] mb-3">Saturday</h3>
                    <div className="text-xl font-medium text-[#DD8D00]">
                      11AM - 7:30PM Eastern
                  </div>
            </div>
                  
                  {/* Sunday */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
                    <div className="inline-block px-4 py-2 rounded-full bg-[#DD8D00]/20 text-[#DD8D00] font-bold mb-4">
                      DAY 3
              </div>
                    <h3 className="text-2xl font-bold text-[#F8F4F1] mb-3">Sunday</h3>
                    <div className="text-xl font-medium text-[#DD8D00]">
                      11AM - 5PM Eastern
                  </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* This Event Is For You If Section */}
        <section id="for-you" className="relative overflow-hidden py-24 bg-black">
          <div className="w-min(100% - 2rem, 80rem) mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-5xl md:text-6xl font-bold text-[#F8F4F1] mb-4">
                    <span className="block">THIS EVENT IS</span>
                    <span className="block">FOR YOU IF</span>
                  </h2>
                  <div className="space-y-8 mt-12">
                    <div className="flex items-start gap-6 text-left">
                      <div className="w-12 h-12 rounded-full bg-[#74A78E]/20 flex items-center justify-center shrink-0 mt-1">
                        <svg className="w-6 h-6 text-[#74A78E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                      <p className="text-xl text-[#F8F4F1]/80">
                        You're sure there's more for you with God, but are unsure how to access it.
                  </p>
                </div>

                    <div className="flex items-start gap-6 text-left">
                      <div className="w-12 h-12 rounded-full bg-[#74A78E]/20 flex items-center justify-center shrink-0 mt-1">
                        <svg className="w-6 h-6 text-[#74A78E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
              </div>
                      <p className="text-xl text-[#F8F4F1]/80">
                        You're ready to let go of the "one-off moments" with God that mark so many believers' lifestyles.
                      </p>
            </div>

                    <div className="flex items-start gap-6 text-left">
                      <div className="w-12 h-12 rounded-full bg-[#74A78E]/20 flex items-center justify-center shrink-0 mt-1">
                        <svg className="w-6 h-6 text-[#74A78E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                      <p className="text-xl text-[#F8F4F1]/80">
                        You're tired of waiting for revival and see that the world is heading in the opposite direction.
                      </p>
            </div>

                    <div className="flex items-start gap-6 text-left">
                      <div className="w-12 h-12 rounded-full bg-[#74A78E]/20 flex items-center justify-center shrink-0 mt-1">
                        <svg className="w-6 h-6 text-[#74A78E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                      <p className="text-xl text-[#F8F4F1]/80">
                        You're unsure of your identity and purpose in God's kingdom.
                  </p>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
        </section>

        {/* After "This Event Is For You If" Section - Testimonial */}
        <section className="relative overflow-hidden py-24 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-medium leading-[1.2] text-[#F8F4F1] text-center mb-8">
                "The three days at Brilliance completely changed how I see myself in Christ. I remember the moment it all clicked so clearly."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#74A78E]/20 flex items-center justify-center shrink-0">
                  <svg className="w-8 h-8 text-[#74A78E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-semibold text-[#F8F4F1]">Sarah</p>
                  <p className="text-sm text-[#F8F4F1]/60">Event Attendee</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New CTA Section with Video Wall Background */}
        <section className="relative overflow-hidden py-32 bg-black">
          <div className="absolute inset-0 w-full max-w-[100vw]">
              <Image
                src="/2M5A3176.jpg"
              alt="Virtual Event Experience"
                fill
                className="object-cover opacity-40"
              priority
              />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40"></div>
            {/* Add top fade for smooth transition */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent"></div>
            </div>
          
          <div className="relative z-10 w-min(100% - 2rem, 80rem) mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8F4F1] mb-8">
                Ready to Transform Your Relationship with God?
              </h2>
              <p className="text-xl text-[#F8F4F1]/80 mb-12 max-w-2xl mx-auto">
                Join us for three extraordinary days that will forever change how you experience God's presence in your life.
              </p>
              <div className="relative flex flex-col items-center">
                <a 
                  href={cartUrl}
                  className="block w-full sm:w-auto"
                >
                  <button 
                    onClick={() => trackButtonClick('Claim Your Seat', 'Middle CTA Section')}
                    className="
                      cart-button
                      group relative w-full sm:w-auto 
                      transform hover:-translate-y-1 
                      bg-gradient-to-br from-[#DD8D00] via-[#DD8D00] to-[#E3DDC9] 
                      hover:from-[#E3DDC9] hover:via-[#DD8D00] hover:to-[#DD8D00] 
                      text-[#F8F4F1] 
                      px-4 sm:px-16 py-4 sm:py-6 
                      rounded-xl 
                      text-lg sm:text-2xl md:text-4xl 
                      font-semibold 
                      transition-all duration-500 
                      hover:shadow-[0_20px_50px_rgba(221,141,0,0.3)] 
                      active:scale-95
                      z-20
                      mx-auto
                      mb-6 sm:mb-8
                      min-h-[3.5rem]
                      touch-manipulation
                    "
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F8F4F1]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                    <div className="relative flex flex-col items-center gap-2">
                      <span className="flex items-center justify-center gap-2 sm:gap-3">
                        Claim Your Seat
                        <svg className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                      <span className="text-sm sm:text-base md:text-lg font-medium">March 21-23, 2025</span>
                      <span className="text-xs sm:text-sm md:text-base font-normal italic opacity-90">"I'm finally aware that God is so, so for me. My self-condemnation is gone."</span>
                    </div>
              </button>
                </a>
            </div>
          </div>
        </div>
      </section>

        {/* Full Width Image Scroll */}
        <div className="relative overflow-hidden">
          <ImageScroll />
        </div>

        {/* Speakers Section */}
        <section id="speakers" className="relative overflow-hidden py-32 bg-black text-[#F8F4F1]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
              <div className="text-center mb-24">
                <span className="inline-block text-xs tracking-[0.2em] uppercase text-[#DD8D00] mb-6">
                  Meet Your Guides
                </span>
                <h2 className="text-[3.5rem] md:text-[5rem] font-bold mb-8 leading-[0.95] tracking-tight text-[#F8F4F1]">
                  World-Class<br />Speakers & Leaders
                </h2>
                <p className="text-base md:text-lg text-[#F8F4F1]/60 max-w-xl mx-auto tracking-wide">
                  Join an extraordinary team of speakers and leaders who have helped thousands discover a deeper, more vibrant relationship with God
                </p>
            </div>

              {/* Top Row - Graham & Dionne */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Graham */}
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-[#1A1A1A] group">
                  <Image
                    src="/Graham.png"
                    alt="Graham Cooke"
                    fill
                    className="object-cover object-[50%_30%] scale-[1.4] transition-transform duration-700 group-hover:scale-[1.45] group-hover:opacity-30"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-700"></div>
                  
                  {/* Bio Overlay - Appears on Hover */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-center bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-lg text-[#F8F4F1]/90 leading-relaxed">
                        Graham is a popular speaker around the world with a passion to empower the people of God to walk in their true identity. His life and ministry are marked by his delightful, intimate, and unreserved two-way friendship with the Lord, and his unique way of communicating a radiant idea of Jesus and the Kingdom of God.
                      </p>
                </div>
                        </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                    <span className="inline-block text-xs tracking-[0.2em] uppercase text-[#DD8D00] bg-[#DD8D00]/10 px-3 py-1 rounded-full mb-4">
                      Keynote Speaker
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-2">Graham Cooke</h3>
                    <p className="text-base text-white/80">A popular speaker around the world with a passion to empower the people of God to walk in their true identity.</p>
                      </div>
              </div>

                {/* Dionne */}
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-[#1A1A1A] group">
                        <Image
                    src="/Dionne.jpg"
                    alt="Dionne van Zyl"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-30"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  
                  {/* Bio Overlay - Appears on Hover */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-center bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-lg text-[#F8F4F1]/90 leading-relaxed mb-4">
                        Dionne van Zyl is a dynamic and visionary leader who serves as CEO of Brilliant Perspectives. His passion is helping believers align their thinking with God's perspective through transformative resources, experiences, and communities.
                      </p>
                      <p className="text-lg text-[#F8F4F1]/90 leading-relaxed">
                        His goal is to enable Kingdom leaders to step into their true identity in Christ, empowering them to live from a place of confidence, purpose, and joy.
                      </p>
                      </div>
                    </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                    <span className="inline-block text-xs tracking-[0.2em] uppercase text-[#DD8D00] bg-[#DD8D00]/10 px-3 py-1 rounded-full mb-4">
                      Keynote Speaker
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-2">Dionne van Zyl</h3>
                    <p className="text-base text-white/80">CEO, Brilliant Perspectives</p>
                  </div>
                </div>
              </div>

              {/* Speaker Grid - Others */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Ray */}
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-[#1A1A1A] group">
                  <Image
                    src="/Ray.png"
                    alt="Ray Higdon"
                    fill
                    className="object-cover object-top scale-[1.15] transition-transform duration-700 group-hover:scale-[1.2] group-hover:opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  
                  {/* Bio Overlay - Appears on Hover */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-center bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-lg text-[#F8F4F1]/90 leading-relaxed">
                        Ray Higdon is a dynamic speaker and thought leader in personal development. His unique approach combines spiritual growth with practical business wisdom, helping people align their purpose with their profession.
                      </p>
                </div>
                        </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                    <span className="inline-block text-xs tracking-[0.2em] uppercase text-[#74A78E] bg-[#74A78E]/10 px-3 py-1 rounded-full mb-4">
                      Guest Speaker
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">Ray Higdon</h3>
                    <p className="text-sm text-white/60">New This Year</p>
                      </div>
                </div>

                {/* Jim Baker */}
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-[#1A1A1A] group">
                  <Image
                    src="/JimBaker.webp"
                    alt="Jim Baker"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105 group-hover:opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  
                  {/* Bio Overlay - Appears on Hover */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-center bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-lg text-[#F8F4F1]/90 leading-relaxed">
                        Jim Baker and Mary, his wife of over 30 years, are the senior leaders of Zion Christian Fellowship in Powell, Ohio. The church is marked by worship, a strong presence of God, healings, miracles, several resurrections and a passion for personal and regional transformation. Jim is known for his humor and revelatory teaching.
                </p>
              </div>
            </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                    <span className="inline-block text-xs tracking-[0.2em] uppercase text-[#74A78E] bg-[#74A78E]/10 px-3 py-1 rounded-full mb-4">
                      Special Guest
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">Jim Baker</h3>
                    <p className="text-sm text-white/60">Pastor & Entrepreneur</p>
                  </div>
                </div>

                {/* Jenny */}
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-[#1A1A1A] group">
                        <Image
                    src="/JennyTaylor.jpg"
                    alt="Jenny Taylor"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  
                  {/* Bio Overlay - Appears on Hover */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-center bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-lg text-[#F8F4F1]/90 leading-relaxed">
                        As Chief Operating Officer, Jenny Taylor brings operational excellence and strategic vision to Brilliant's global initiatives. Her leadership ensures that transformational experiences are delivered with excellence and impact.
                      </p>
                      </div>
                    </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                    <h3 className="text-2xl font-bold text-white mb-2">Jenny Taylor</h3>
                    <p className="text-sm text-white/60">Chief Operating Officer</p>
                </div>
              </div>

                {/* Theresa */}
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-[#1A1A1A] group">
                  <Image
                    src="/Theresa1.png"
                    alt="Theresa Cooke"
                    fill
                    className="object-cover scale-[1.2] transition-transform duration-700 group-hover:scale-[1.25] group-hover:opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  
                  {/* Bio Overlay - Appears on Hover */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-center bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-lg text-[#F8F4F1]/90 leading-relaxed">
                        Theresa Cooke serves as a key ministry leader, bringing wisdom and practical application to spiritual principles. Her teaching style makes complex truths accessible and applicable to daily life.
                      </p>
                </div>
                        </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                    <h3 className="text-2xl font-bold text-white mb-2">Theresa Cooke</h3>
                    <p className="text-sm text-white/60">Ministry Leader</p>
                      </div>
                </div>

                {/* Bridget */}
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-[#1A1A1A] group">
                  <Image
                    src="/Bridget.jpg"
                    alt="Bridget van Zyl"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  
                  {/* Bio Overlay - Appears on Hover */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-center bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-lg text-[#F8F4F1]/90 leading-relaxed">
                        As a Senior Church Leader, Bridget van Zyl brings years of pastoral experience and spiritual insight. Her heart for community and leadership development has impacted churches and organizations worldwide.
                      </p>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                    <h3 className="text-2xl font-bold text-white mb-2">Bridget van Zyl</h3>
                    <p className="text-sm text-white/60">Senior Church Leader</p>
                  </div>
                </div>

                {/* Liesl */}
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-[#1A1A1A] group">
                        <Image
                    src="/Liesl.jpg"
                    alt="Liesl Webber"
                    fill
                    className="object-cover object-[50%_20%] transition-transform duration-700 group-hover:scale-105 group-hover:opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  
                  {/* Bio Overlay - Appears on Hover */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-center bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-lg text-[#F8F4F1]/90 leading-relaxed">
                        Liesl Webber returns as our beloved host, bringing her warmth and insight to guide us through this transformative journey. Her gift for creating sacred spaces and facilitating meaningful connections has made her an integral part of our events.
                      </p>
                      </div>
                    </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                    <span className="inline-block text-xs tracking-[0.2em] uppercase text-[#74A78E] bg-[#74A78E]/10 px-3 py-1 rounded-full mb-4">
                      Returning Host
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">Liesl Webber</h3>
                    <p className="text-sm text-white/60">Event Host</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Agenda Section */}
        <section id="agenda" className="relative overflow-hidden py-24 sm:py-32 bg-[#F8F4F1]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <span className="text-sm uppercase tracking-widest text-black/60 font-medium">AGENDA</span>
                <h2 className="text-[3.5rem] sm:text-[4rem] md:text-[5rem] font-bold mt-4 leading-[1.1] text-black">
                  Three Days of<br />Wonder
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-black/80 md:max-w-2xl mt-6">
                  Each day builds upon the last, creating a journey that transforms how you experience God's presence in your daily life.
                </p>
                    </div>

              <div className="space-y-32">
                {/* Day 1 */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                  <div className="w-full md:w-1/3 sticky top-8">
                    <div className="flex items-baseline gap-4">
                      <span className="text-4xl font-bold text-black/20">01</span>
                      <h3 className="text-3xl font-bold text-black">Embracing Your New Self in God</h3>
                  </div>
                    </div>
                  <div className="w-full md:w-2/3">
                    <p className="text-xl text-black/70 leading-relaxed">
                      Begin your journey by discovering how deeply God delights in you. Break free from performance-based relationship and step into the joy of being His beloved. Experience the transformative power of seeing yourself through His eyes of love.
                    </p>
                </div>
              </div>

                {/* Day 2 */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                  <div className="w-full md:w-1/3 sticky top-8">
                    <div className="flex items-baseline gap-4">
                      <span className="text-4xl font-bold text-black/20">02</span>
                      <h3 className="text-3xl font-bold text-black">Embracing a New Way of Living with God</h3>
              </div>
            </div>
                  <div className="w-full md:w-2/3">
                    <p className="text-xl text-black/70 leading-relaxed">
                      Learn the art of living from His presence rather than for His presence. Discover practical ways to recognize and respond to His voice in every moment. Transform occasional encounters into continuous communion.
                    </p>
                </div>
              </div>

                {/* Day 3 */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                  <div className="w-full md:w-1/3 sticky top-8">
                    <div className="flex items-baseline gap-4">
                      <span className="text-4xl font-bold text-black/20">03</span>
                      <h3 className="text-3xl font-bold text-black">Embrace a New Way of Learning with God</h3>
              </div>
            </div>
                  <div className="w-full md:w-2/3">
                    <p className="text-xl text-black/70 leading-relaxed mb-12">
                      Step into a lifestyle of continuous wonder and delight. Embrace the adventure of walking with God in every circumstance. Learn to see challenges as opportunities for deeper intimacy and discover the joy of partnering with Him in your everyday life.
                    </p>
                    <div className="aspect-[16/9] relative rounded-2xl overflow-hidden">
                      <Image
                        src="/2M5A1060-3.jpg"
                        alt="Day 3 - Embrace a New Way of Learning with God"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                      />
                  </div>
                </div>
              </div>
                    </div>
                  </div>
                    </div>
        </section>

        {/* After Agenda Section - Final Testimonial */}
        <section className="relative overflow-hidden py-24 bg-[#F8F4F1]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-medium leading-[1.2] text-black text-center mb-8">
                "The breakout sessions were incredible! I finally understand what it means to live from God's presence rather than for it."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#74A78E]/20 flex items-center justify-center shrink-0">
                  <svg className="w-8 h-8 text-[#74A78E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  </div>
                <div>
                  <p className="text-xl font-semibold text-black">Rachel</p>
                  <p className="text-sm text-black/60">Event Attendee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
        <section id="pricing" className="relative overflow-hidden w-full bg-[#222] py-32">
          <div className="absolute inset-0 w-full max-w-[100vw]">
          <Image
            src="/2M5A4184.jpg"
            alt="Event atmosphere"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000] via-[#000]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000] via-transparent to-transparent" />
        </div>

          <div className="relative z-10 w-min(100% - 2rem, 80rem) mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F8F4F1] mb-6 leading-[1.1]">
                <span className="inline sm:block">Discover an</span>{' '}
                <span className="inline sm:block">Extraordinary</span>{' '}
                <span className="inline sm:block">Relationship</span>{' '}
                <span className="inline sm:block">With God</span>
            </h2>
              <p className="text-lg sm:text-xl text-[#F8F4F1]/80 mb-12 max-w-2xl mx-auto">
              Join this transformative virtual gathering, connecting with seekers from around the world.
            </p>

              <div className="bg-[#2A2A2A]/80 backdrop-blur-xl rounded-[32px] py-5 px-8 inline-flex gap-16 transition-all duration-300 flex-wrap justify-center gap-8 mx-auto mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#74A78E]/20 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-[#74A78E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#E3DDC9]/60 uppercase tracking-wider">DATE</p>
                    <p className="text-base font-medium text-[#F8F4F1]">March 21st-23rd, 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#74A78E]/20 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-[#74A78E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#E3DDC9]/60 uppercase tracking-wider">PLACE</p>
                    <p className="text-base font-medium text-[#F8F4F1]">Virtual</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#74A78E]/20 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-[#74A78E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#E3DDC9]/60 uppercase tracking-wider">TIMEZONE</p>
                    <p className="text-base font-medium text-[#F8F4F1]">Eastern</p>
                  </div>
                </div>
              </div>
          </div>

            <div className="max-w-xl mx-auto bg-white rounded-[32px] p-12 shadow-2xl relative">
              {/* Last Chance Badge */}
              <div className="absolute -top-5 -right-5 bg-red-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg transform rotate-12 animate-pulse">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>LAST CHANCE!</span>
                </div>
                <div className="text-xs font-normal text-center">Cart closes Thursday</div>
              </div>
            {/* Price Header */}
            <div className="text-center mb-12">
              <div className="space-y-2">
                  <span className="text-base text-gray-600 font-medium">FULL ACCESS TICKET</span>
                <div className="flex flex-col items-center">
                    <span className="text-7xl font-bold text-black tracking-tight">$97</span>
                    <span className="text-base font-medium text-green-600 mt-2 mb-8">All-Inclusive Experience</span>
              </div>
            </div>

            {/* Value Stack */}
                <ul className="space-y-8 mb-12 text-left max-w-xl">
              <li className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-1">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start gap-4">
                        <span className="text-xl font-medium text-black">Three Days of Radical Transformation<br />March 21st-23rd 2025</span>
                        <span className="text-xl font-semibold text-gray-900 shrink-0">Value: $297</span>
                  </div>
                      <span className="text-base text-gray-500 mt-1.5 block">Virtual front row seats to three days of transformational awakening with Graham Cooke, Ray Higdon & Team.</span>
                </div>
                  </li>
              <li className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-1">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start gap-4">
                        <span className="text-xl font-medium text-black">Breakout & Activation Sessions</span>
                        <span className="text-xl font-semibold text-gray-900 shrink-0">Value: $147</span>
                  </div>
                      <span className="text-base text-gray-500 mt-1.5 block">Practical sessions designed to help you activate and apply the transformational principles in your daily life.</span>
                </div>
                  </li>
              <li className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-1">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start gap-4">
                        <span className="text-xl font-medium text-black">Interactive Q&A Sessions<br />with Dionne & Team</span>
                        <span className="text-xl font-semibold text-gray-900 shrink-0">Value: $153</span>
                  </div>
                      <span className="text-base text-gray-500 mt-1.5 block">Live Q&A opportunities to deepen your understanding and get personalized insights.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-1">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start gap-4">
                        <span className="text-xl font-medium text-black">Global Community Connection</span>
                        <span className="text-xl font-semibold text-gray-900 shrink-0">Priceless</span>
                      </div>
                      <span className="text-base text-gray-500 mt-1.5 block">Connect with believers from around the world, sharing experiences and building lasting relationships.</span>
                </div>
                  </li>
                </ul>

            {/* Total Value & CTA */}
            <div className="pt-8 border-t border-gray-200">
              <div className="bg-gray-50 -mx-10 -mb-10 p-8 rounded-b-[32px]">
                    <div className="space-y-8 mb-8">
                  <div>
                        <span className="text-3xl text-gray-400 line-through">Total Value: $597</span>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-2">
                          <p className="text-2xl font-bold">Full Access Ticket:</p>
                          <div className="flex flex-col items-center gap-4">
                            <span className="text-7xl font-bold text-green-600">$97</span>
                      </div>
                    </div>
                  </div>
                </div>

                    <button 
                      className="
                        w-full
                        bg-gray-600
                        text-white
                        py-6
                        rounded-full
                        text-2xl
                        font-semibold
                        cursor-not-allowed
                        opacity-75
                        mb-4
                      "
                      disabled
                    >
                      <span className="flex flex-col items-center">
                        <span>Registration Closed</span>
                        <span className="text-base font-medium mt-1">Join our waitlist for future events</span>
                      </span>
                    </button>
                    <p className="text-sm text-gray-500">Limited spots available for optimal experience</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        <section id="faq" className="relative overflow-hidden py-24 bg-black">
      <FAQ />
        </section>

      <Footer />
    </main>
  </div>
  );
}

export default function Home() {
  return <MainContent cartUrl={process.env.NEXT_PUBLIC_CART_URL || '#'} />;
}

