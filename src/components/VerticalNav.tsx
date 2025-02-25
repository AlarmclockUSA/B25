'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

// Define the sections we want to track
const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'speakers', label: 'Speakers' },
  { id: 'agenda', label: 'Agenda' },
  { id: 'faq', label: 'FAQ' },
  { id: 'pricing', label: 'Tickets' }
];

export default function VerticalNav() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Get all section elements
    const sectionElements = sections.map(section => 
      document.getElementById(section.id)
    ).filter(Boolean);

    // Create an Intersection Observer to detect when sections are in view
    const observerOptions = {
      root: null, // viewport is the root
      rootMargin: '-20% 0px -70% 0px', // Consider sections visible when they're 20% from the top and 70% from the bottom
      threshold: 0 // Trigger as soon as any part of the element is visible
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Observe each section
    sectionElements.forEach(element => {
      if (element) observer.observe(element);
    });

    // Cleanup observer when component unmounts
    return () => {
      sectionElements.forEach(element => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <nav className="fixed left-8 top-1/4 transform -translate-y-1/2 z-40 hidden lg:block">
      <ul className="flex flex-col gap-6 bg-black/20 backdrop-blur-lg border border-[#F8F4F1]/10 rounded-xl p-4">
        {sections.map(section => (
          <li key={section.id}>
            <Link
              href={`#${section.id}`}
              className={`
                flex items-center gap-3 transition-all duration-300
                ${activeSection === section.id 
                  ? 'text-[#DD8D00]' 
                  : 'text-[#F8F4F1]/60 hover:text-[#F8F4F1]'}
              `}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(section.id)?.scrollIntoView({ 
                  behavior: 'smooth'
                });
              }}
            >
              <div className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${activeSection === section.id 
                  ? 'bg-[#DD8D00] scale-125' 
                  : 'bg-[#F8F4F1]/40'}
              `}></div>
              <span className={`
                text-sm font-medium transition-all duration-300
                ${activeSection === section.id ? 'opacity-100' : 'opacity-60'}
              `}>
                {section.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
} 