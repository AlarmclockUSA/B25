'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "Is this just a three day zoom call?",
    answer: "No! You get a front row seat in this immersive and interactive experience. The days of hours of endless zoom calls are behind us (and we're so thankful). Brilliance24 makes use of the latest technology to immerse you in three days of transformational teaching and community. So much more than a zoom call, livestream, or webinar, you'll meet others who think just like you, discover what God is doing around the world and unlock His Brilliance in you in the process.\n\nYou'll see the speakers (and they'll see you!) in spectacular HD broadcast live from our cutting edge studio that powers the event."
  },
  {
    question: "Why not just host an in-person event?",
    answer: "While we love in-person gatherings, we love our global family even more. When we realized that travel costs and life's commitments were keeping 75% of our precious community from experiencing these transformative moments firsthand, we knew there had to be a better way. That's why we've created this intimate virtual experience where everyone gets a front-row seat to transformation."
  },
  {
    question: "How do I access the conference?",
    answer: "We'll email you a link to a simple online portal, there you'll have access to all the breakouts, discussions & main stage sessions as well as any additional resources mentioned throughout the weekend. Everything you need for an amazing experience."
  },
  {
    question: "What if I need help with the technology?",
    answer: "To ensure you have the best possible experience we've made a whole team available to help you with any technology challenges you might have. This includes: Registration, initial access to the conference, and tech support throughout the conference.\n\nWe're so certain that our team will make this a smooth experience that if you can't still can't attend after our team assist you, we'll refund your ticket entirely."
  },
  {
    question: "Can I access replays?",
    answer: "You want to experience this live - A large percentage of our attendees choose to be able to relive their favorite moments and experiences with the purchase of an All Access Bundle. You'll receive replays within 60 days of the conference."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Create structured data for FAQ
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/\n\n/g, ' ')
      }
    }))
  };

  return (
    <section className="py-32 bg-[#F8F4F1]">
      {/* FAQ Structured Data */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <script type="application/ld+json">
              ${JSON.stringify(faqStructuredData)}
            </script>
          `
        }}
      />
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-base tracking-widest text-[#222222]/60 font-medium mb-6">QUESTIONS & ANSWERS</p>
            <h2 className="text-5xl md:text-6xl font-bold text-[#222222]">Common Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left px-8 py-6 flex items-center justify-between hover:bg-[#F8F4F1]/50 transition-colors duration-300"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-xl font-semibold text-[#222222]">{faq.question}</h3>
                  <div className={`w-6 h-6 rounded-full border-2 border-[#DD8D00] flex items-center justify-center transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                    <svg className="w-4 h-4 text-[#DD8D00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`px-8 transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {faq.answer.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-lg text-[#222222]/80 leading-relaxed mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 