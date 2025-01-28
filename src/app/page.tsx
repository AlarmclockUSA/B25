'use client';

import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import ImageScroll from '../components/ImageScroll';
import Nav from '../components/Nav';
import Speakers from '../components/Speakers';
import EventDetailsBar from '../components/EventDetailsBar';
import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Home() {
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
      
      const timelineRect = timeline.getBoundingClientRect();
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
    <>
      <Head>
        <title>Brilliance 2025 - Discover an Extraordinary Relationship With God</title>
        <meta name="description" content="Join us March 21st-23rd 2025 for a transformative 3-day virtual experience with Graham Cooke + Team. Discover the proven path to an extraordinary relationship with God." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Brilliance 2025 - March 21st-23rd 2025" />
        <meta property="og:description" content="Step into a 3-day transformational online experience hosted by leading voice Graham Cooke + Team. Discover the proven path to an extraordinary relationship with God." />
        <meta property="og:image" content="/hero-bg.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Brilliance 2025 - March 21st-23rd 2025" />
        <meta name="twitter:description" content="Step into a 3-day transformational online experience hosted by leading voice Graham Cooke + Team. Discover the proven path to an extraordinary relationship with God." />
        <meta name="twitter:image" content="/hero-bg.jpg" />
      </Head>

      <main className="relative overflow-x-hidden">
        <Nav scrolled={scrolled} />
        
        {/* Hero Section */}
        <section 
          className="
            relative overflow-hidden
            min-h-[100svh] bg-[#222222] text-[#F8F4F1]
            pt-safe
          "
          style={{
            paddingTop: 'calc(env(safe-area-inset-top) + 6rem)'
          }}
        >
          <div className="absolute inset-0 w-full max-w-[100vw]">
            <Image
              src="/hero-bg.jpg"
              alt="Virtual Event"
              fill
              className="object-cover opacity-100 scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40"></div>
          </div>
          
          <div className="relative container mx-auto px-4 min-h-[calc(100svh-4rem)] flex flex-col items-center justify-center">
            <div className="w-full max-w-3xl mx-auto text-center">
              <div className="mb-4 md:mb-6">
                <span 
                  className="
                    inline-block text-[#F8F4F1] 
                    text-[0.7rem] sm:text-sm md:text-base 
                    tracking-widest font-medium 
                    px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 
                    uppercase hover:scale-105 transition-transform duration-300
                  "
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F8F4F1] via-[#F8F4F1] to-[#F8F4F1]/80">
                    Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#DD8D00] via-[#DD8D00] to-[#E3DDC9]">Biggest</span> Virtual Event Yet
                  </span>
                </span>
              </div>

              <h1 
                className="font-bold mb-4 md:mb-8 leading-[1.1] tracking-tight px-2"
                style={{
                  fontSize: 'clamp(2rem, 8vw, 5rem)'
                }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F8F4F1] via-[#F8F4F1] to-[#E3DDC9] mb-1">Discover an</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F8F4F1] via-[#F8F4F1] to-[#E3DDC9] mb-1">Extraordinary</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F8F4F1] via-[#F8F4F1] to-[#E3DDC9] mb-1">Relationship</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F8F4F1] via-[#F8F4F1] to-[#E3DDC9]">With God</span>
              </h1>
              
              <p 
                className="
                  inline-block
                  bg-[#DD8D00]/10 backdrop-blur-sm
                  border border-[#DD8D00]/20
                  rounded-full
                  px-8 py-3
                  text-[#F8F4F1]
                  text-lg sm:text-xl md:text-2xl 
                  font-medium tracking-wide 
                  mb-8
                  transform hover:scale-105 transition-all duration-300
                "
              >
                March 21st-23rd | Virtual Event
              </p>
              
              <p 
                className="
                  mb-6 md:mb-8 text-[#F8F4F1] max-w-3xl mx-auto leading-relaxed font-light text-center px-4
                "
                style={{
                  fontSize: 'clamp(0.875rem, 4vw, 1.25rem)'
                }}
              >
                Step into a 3-day transformational online experience hosted by leading voice Graham Cooke + Team. 
                Discover the proven path to discovering an extraordinary relationship with God.
              </p>

              <div className="relative flex flex-col items-center">
                <a 
                  href="https://www.tickets.brilliance25.com"
                  className="block w-full sm:w-auto"
                >
                  <button 
                    className="
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
                      <span className="text-xs sm:text-sm md:text-base font-normal italic opacity-90">"I'm finally aware that God is so, so for me. My self-condemnation is gone."</span>
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="relative overflow-hidden pb-48 bg-[#222222]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                  <div className="flex flex-col items-center">
                    <h2 className="mb-4 sm:mb-6 md:mb-8">
                      <span 
                        className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#F8F4F1] mb-2 sm:mb-3 tracking-tight pt-8 sm:pt-12 md:pt-16"
                        style={{
                          textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}
                      >
                        THREE DAYS OF
                      </span>
                      <span 
                        className="block font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DD8D00] via-[#DD8D00] to-[#E3DDC9] tracking-tight"
                        style={{
                          fontSize: 'clamp(2rem, 6vw, 4.5rem)',
                          lineHeight: '1.1',
                          textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}
                      >
                        RADICAL TRANSFORMATION
                      </span>
                    </h2>
                    
                    <div className="w-24 h-1 bg-gradient-to-r from-[#DD8D00] to-[#E3DDC9] rounded-full mb-6 sm:mb-8 opacity-80"></div>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#F8F4F1]/80 font-medium tracking-wide mb-8 sm:mb-12 max-w-2xl">
                      IT'S TIME TO DELIGHT IN YOUR RELATIONSHIP WITH GOD
                    </p>
                  </div>

                  <div className="space-y-6 sm:space-y-8 mt-8 sm:mt-12 text-left">
                    <div className="bg-[#F8F4F1]/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#F8F4F1]/10">
                      <p className="text-base sm:text-lg md:text-xl text-[#F8F4F1]/90 leading-relaxed">
                        For three extraordinary days, you'll discover what your heart has always known was possible - a way of being with God that transforms everything it touches. This isn't about adding more knowledge; it's about awakening to a relationship that changes how you see God, yourself, and your world.
                      </p>
                    </div>
                    
                    <div className="bg-[#F8F4F1]/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#F8F4F1]/10">
                      <p className="text-base sm:text-lg md:text-xl text-[#F8F4F1]/90 leading-relaxed">
                        We want to be clear about something - what you're about to step into isn't just another Christian event. It's an invitation to completely rewire the way you see your relationship with God.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New CTA Section with Video Wall Background */}
        <section className="relative overflow-hidden py-32 bg-[#222222] -mt-32">
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
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#222222] to-transparent"></div>
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
                  href="https://www.tickets.brilliance25.com"
                  className="block w-full sm:w-auto"
                >
                  <button 
                    className="
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
                      <span className="text-xs sm:text-sm md:text-base font-normal italic opacity-90">"I'm finally aware that God is so, so for me. My self-condemnation is gone."</span>
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* This Event Is For You If Section */}
        <section className="relative overflow-hidden py-24 bg-[#222222]">
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
                      <p className="text-2xl text-[#F8F4F1]/90 leading-relaxed flex-1">
                        You're sure there's more for you with God, but are unsure how to access it.
                      </p>
                    </div>

                    <div className="flex items-start gap-6 text-left">
                      <div className="w-12 h-12 rounded-full bg-[#74A78E]/20 flex items-center justify-center shrink-0 mt-1">
                        <svg className="w-6 h-6 text-[#74A78E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-2xl text-[#F8F4F1]/90 leading-relaxed flex-1">
                        You're ready to let go of the "one-off moments" with God that mark so many believers lifestyles.
                      </p>
                    </div>

                    <div className="flex items-start gap-6 text-left">
                      <div className="w-12 h-12 rounded-full bg-[#74A78E]/20 flex items-center justify-center shrink-0 mt-1">
                        <svg className="w-6 h-6 text-[#74A78E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-2xl text-[#F8F4F1]/90 leading-relaxed flex-1">
                        You're tired of waiting for revival, and see that the world is heading in the opposite direction.
                      </p>
                    </div>

                    <div className="flex items-start gap-6 text-left">
                      <div className="w-12 h-12 rounded-full bg-[#74A78E]/20 flex items-center justify-center shrink-0 mt-1">
                        <svg className="w-6 h-6 text-[#74A78E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-2xl text-[#F8F4F1]/90 leading-relaxed flex-1">
                        You've long suspected that while good intentioned, the teaching you've received still seems to leave you in the same place without the change you're really looking for...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Width Image Scroll */}
        <div className="relative overflow-hidden">
          <ImageScroll />
        </div>

        {/* Agenda Section */}
        <section className="relative overflow-hidden py-24 sm:py-32 md:py-40 bg-[#F8F4F1] agenda-timeline">
          <div className="w-min(100% - 2rem, 80rem) mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12 sm:mb-16 md:mb-24 mt-8 sm:mt-12 md:mt-16">
                <p className="text-sm sm:text-base tracking-widest text-[#222222]/60 font-medium mb-4 sm:mb-6">YOUR JOURNEY</p>
                <div className="flex flex-col md:flex-row items-start md:items-end gap-6 sm:gap-8">
                  <h2 className="text-[3.5rem] sm:text-[5rem] md:text-[8rem] lg:text-[120px] font-bold leading-[0.9] md:flex-1">
                    <span className="block">3 Days</span>
                    <span className="block">of Wonder</span>
                  </h2>
                  <p className="text-lg sm:text-xl md:text-2xl text-[#222222]/80 md:max-w-md pb-0 sm:pb-4">
                    Each day builds upon the last, creating a journey that transforms how you experience God's presence in your daily life.
                  </p>
                </div>
              </div>

              <div className="space-y-24 sm:space-y-32 md:space-y-48 relative">
                {/* Central timeline container */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#DD8D00]/10 hidden md:block">
                  {/* Growing line */}
                  <div 
                    className="absolute top-0 w-full bg-gradient-to-b from-[#DD8D00] to-[#DD8D00]/30 origin-top transition-all duration-700" 
                    style={{
                      height: '100%',
                      transform: 'scaleY(var(--scroll-percent, 0))'
                    }}
                  ></div>
                </div>

                {/* Day 1 */}
                <div className="relative">
                  {/* Branch to content */}
                  <div className="absolute left-1/2 top-1/2 w-24 h-0.5 bg-[#DD8D00]/50 hidden md:block"></div>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#DD8D00] hidden md:block">
                    <div className="absolute inset-0 rounded-full bg-[#DD8D00] animate-ping opacity-50"></div>
                  </div>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
                    <div className="flex-1 relative z-10">
                      <div className="md:sticky md:top-32">
                        <div className="flex items-center gap-4 mb-6 sm:mb-8">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#DD8D00] flex items-center justify-center">
                            <span className="text-xl sm:text-2xl font-bold text-white">01</span>
                          </div>
                          <p className="text-lg sm:text-xl font-medium text-[#222222]/60">DAY ONE</p>
                        </div>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">Embracing Your New Self in God</h3>
                        <p className="text-lg sm:text-xl text-[#222222]/80 leading-relaxed">
                          Begin your journey by discovering how deeply God delights in you. Break free from performance-based relationship and step into the joy of being His beloved. Experience the transformative power of seeing yourself through His eyes of love.
                        </p>
                      </div>
                    </div>
                    <div className="flex-1 w-full md:w-auto">
                      <div className="relative group">
                        <div className="absolute -inset-4 sm:-inset-8 bg-[#DD8D00]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
                          <Image
                            src="/2M5A3176.jpg"
                            alt="Day 1 - Embracing Your New Self in God"
                            width={800}
                            height={1000}
                            className="object-cover w-full h-[400px] sm:h-[600px] md:h-[800px] hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Day 2 */}
                <div className="relative">
                  {/* Branch to content */}
                  <div className="absolute left-1/2 top-1/2 w-24 h-0.5 bg-[#DD8D00]/50 hidden md:block"></div>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#DD8D00] hidden md:block">
                    <div className="absolute inset-0 rounded-full bg-[#DD8D00] animate-ping opacity-50"></div>
                  </div>
                  <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
                    <div className="flex-1 relative z-10">
                      <div className="md:sticky md:top-32">
                        <div className="flex items-center gap-4 mb-6 sm:mb-8">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#DD8D00] flex items-center justify-center">
                            <span className="text-xl sm:text-2xl font-bold text-white">02</span>
                          </div>
                          <p className="text-lg sm:text-xl font-medium text-[#222222]/60">DAY TWO</p>
                        </div>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">Embracing a New Way of Living with God</h3>
                        <p className="text-lg sm:text-xl text-[#222222]/80 leading-relaxed">
                          Learn the art of living from His presence rather than for His presence. Discover practical ways to recognize and respond to His voice in every moment. Transform occasional encounters into continuous communion.
                        </p>
                      </div>
                    </div>
                    <div className="flex-1 w-full md:w-auto">
                      <div className="relative group">
                        <div className="absolute -inset-4 sm:-inset-8 bg-[#DD8D00]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
                          <Image
                            src="/2M5A4455.jpg"
                            alt="Day 2 - Embracing a New Way of Living with God"
                            width={800}
                            height={1000}
                            className="object-cover w-full h-[400px] sm:h-[600px] md:h-[800px] hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Day 3 */}
                <div className="relative">
                  {/* Branch to content */}
                  <div className="absolute left-1/2 top-1/2 w-24 h-0.5 bg-[#DD8D00]/50 hidden md:block"></div>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#DD8D00] hidden md:block">
                    <div className="absolute inset-0 rounded-full bg-[#DD8D00] animate-ping opacity-50"></div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <div className="flex-1 relative z-10">
                      <div className="md:sticky md:top-32">
                        <div className="flex items-center gap-4 mb-6 sm:mb-8">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#DD8D00] flex items-center justify-center">
                            <span className="text-xl sm:text-2xl font-bold text-white">03</span>
                          </div>
                          <p className="text-lg sm:text-xl font-medium text-[#222222]/60">DAY THREE</p>
                        </div>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">Embrace a New Way of Learning with God</h3>
                        <p className="text-lg sm:text-xl text-[#222222]/80 leading-relaxed">
                          Step into a lifestyle of continuous wonder and delight. Embrace the adventure of walking with God in every circumstance. Learn to see challenges as opportunities for deeper intimacy and discover the joy of partnering with Him in your everyday life.
                        </p>
                      </div>
                    </div>
                    <div className="flex-1 w-full md:w-auto">
                      <div className="relative group">
                        <div className="absolute -inset-4 sm:-inset-8 bg-[#DD8D00]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
                          <Image
                            src="/2M5A1060-3.jpg"
                            alt="Day 3 - Embrace a New Way of Learning with God"
                            width={800}
                            height={1000}
                            className="object-cover w-full h-[400px] sm:h-[600px] md:h-[800px] hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Speakers />

        {/* Testimonials Section */}
        <section className="relative overflow-hidden py-24 bg-[#F8F4F1]">
          <div className="w-min(100% - 2rem, 80rem) mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16 text-[#222222]">What People Are Saying</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#3E5E17] flex items-center justify-center text-white font-semibold text-lg">
                        R
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-[#222222]">Rhonda</h3>
                        <span className="text-sm text-[#222222]/60">· Event Attendee</span>
                      </div>
                      <p className="text-[#222222] leading-relaxed">
                        I am so SO Loved by my ABBA Father who wants to walking Intimacy with Me Moment by Moment. His Plans and Purpose for Me is Abundantly, Extravagantly Above and Beyond All I can Think, Imagine or Dream. I Am Loved and He Walks With Me in Perfect Peace and Rest. 🙏✨
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#3E5E17] flex items-center justify-center text-white font-semibold text-lg">
                        P
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-[#222222]">Pam</h3>
                        <span className="text-sm text-[#222222]/60">· Event Attendee</span>
                      </div>
                      <p className="text-[#222222] leading-relaxed">
                        I'm finally aware that God is so, so for me. My self-condemnation is gone. It's time to pick up my promises and walk with Him. 💫
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#3E5E17] flex items-center justify-center text-white font-semibold text-lg">
                        Y
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-[#222222]">Yolana</h3>
                        <span className="text-sm text-[#222222]/60">· Event Attendee</span>
                      </div>
                      <p className="text-[#222222] leading-relaxed">
                        One of the takeaways for me is simple trust. I know how to do that from when I was young! I don't have to 'adult' my life with Them, or 'adult' my spirituality. I can just simply trust Him, regardless of whether I understand or not, know what to do or say or not. I can trust Him because He is trustworthy, and my heart-of-hearts *knows* Him. I *know* He is My Good God, even when I don't know anything else. So that lets me relax and watch what will happen, and let Him hold all the pain and difficulties as they arise - that's His 'Stuff,' which is wonderful, because *my* 'Stuff' is HIMSELF. YES!!! 🌟
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#3E5E17] flex items-center justify-center text-white font-semibold text-lg">
                        B
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-[#222222]">Barb</h3>
                        <span className="text-sm text-[#222222]/60">· Event Attendee</span>
                      </div>
                      <p className="text-[#222222] leading-relaxed">
                        The LORD has confirmed that it is His Plan that I am walking in. I do not have to wonder why, I can enjoy every step! ✨🙌
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden w-full bg-[#222] py-32">
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
              <h2 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F8F4F1] mb-6 leading-[1.1] tracking-tight">
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
                    <svg className="w-6 h-6 text-[#74A78E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    <svg className="w-6 h-6 text-[#74A78E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#E3DDC9]/60 uppercase tracking-wider">PLACE</p>
                    <p className="text-base font-medium text-[#F8F4F1]">Virtual</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#74A78E]/20 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-[#74A78E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

            <div className="max-w-xl mx-auto bg-white rounded-[32px] p-12 shadow-2xl">
              {/* Price Header */}
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-sm font-medium mb-4">Limited Time Offer</span>
                <div className="space-y-2">
                  <span className="text-base text-gray-600 font-medium">EARLY BIRD OFFER</span>
                  <div className="flex flex-col items-center">
                    <span className="text-7xl font-bold text-black tracking-tight">$197</span>
                    <span className="text-base font-medium text-green-600 mt-2 mb-8">Exclusive savings on All Access Tickets</span>
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
                        <span className="text-xl font-medium">Brilliance24 Experience<br />March 22nd-24th 2024</span>
                        <span className="text-xl font-semibold text-gray-900 shrink-0">$197</span>
                      </div>
                      <span className="text-base text-gray-500 mt-1.5 block">Virtual front row seats to three days of transformational awakening with Graham Cooke & Team.</span>
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
                        <span className="text-xl font-medium">Event Replays</span>
                        <span className="text-xl font-semibold text-gray-900 shrink-0">$149</span>
                      </div>
                      <span className="text-base text-gray-500 mt-1.5 block">Relive your favourite moments from the event.</span>
                      <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-600 rounded-full text-sm font-medium mt-2">Early Bird Bonus</span>
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
                        <span className="text-xl font-medium">Exclusive Extra Sessions<br />with Graham & Dionne</span>
                        <span className="text-xl font-semibold text-gray-900 shrink-0">$97</span>
                      </div>
                      <span className="text-base text-gray-500 mt-1.5 block">Special intimate sessions with Graham & Dionne for deeper insights.</span>
                      <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-600 rounded-full text-sm font-medium mt-2">Early Bird Bonus</span>
                    </div>
                  </li>
                </ul>

                {/* Total Value & CTA */}
                <div className="pt-8 border-t border-gray-200">
                  <div className="bg-gray-50 -mx-10 -mb-10 p-8 rounded-b-[32px]">
                    <div className="space-y-8 mb-8">
                      <div>
                        <span className="text-3xl text-gray-400 line-through">Total Value: $689</span>
                      </div>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <p className="text-2xl font-bold">Full Weekend Ticket:</p>
                          <div className="flex flex-col items-center gap-4">
                            <span className="text-7xl font-bold text-green-600">$197</span>
                            <div className="bg-green-600 text-white px-5 py-2.5 rounded-full text-base font-bold">
                              Save $492
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <a 
                      href="https://www.tickets.brilliance25.com"
                      className="block w-full"
                    >
                      <button className="w-full bg-black text-white py-6 rounded-full text-2xl font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02] mb-4">
                        Secure Your Seat Now
                      </button>
                    </a>
                    <p className="text-base text-gray-700 font-medium mb-2">March 21-23, 2025</p>
                    <p className="text-sm text-gray-500">Limited spots available for optimal experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQ />

        <Footer />
      </main>
    </>
  );
}
