'use client';

import Image from 'next/image';

const speakers = [
  {
    name: 'Graham Cooke',
    role: 'Keynote Speaker',
    image: '/Graham.png',
    bio: `Graham is a popular speaker around the world with a passion to empower the people of God to walk in their true identity. His life and ministry are marked by his delightful, intimate, and unreserved two-way friendship with the Lord, and his unique way of communicating a radiant idea of Jesus and the Kingdom of God.`
  },
  {
    name: 'Dionne van Zyl',
    role: 'Keynote Speaker',
    image: '/Dionne.jpg',
    bio: `Dionne van Zyl is a dynamic and accomplished leader who serves as president of Brilliant Perspectives. His career spans from innovative tech startups that disrupted Wall Street norms to three impactful non-profits that have influenced generations. Now, Dionne is channeling his extensive experience and proven strategies into resources that Kingdom leaders can utilize for effortless and lasting transformation.`
  },
  {
    name: 'Ray Higdon',
    role: 'Guest Speaker',
    image: '/Ray.png',
    bio: `A sought-after speaker and trainer, Ray has shared the stage with world-renowned thought leaders, including Tony Robbins, Les Brown, Robert Kiyosaki, Bob Proctor, Gary Vaynerchuk, Magic Johnson, and many more. As the CEO of the Higdon Group, Ray has helped sales teams generate over 300,000 new customers and recruit over 70,000 new sales reps since 2017. In 2023, Ray co-led the Higdon Maxwell Mentorship Program alongside legendary leadership expert John Maxwell.

After achieving massive success, including generating over $30 million in revenue and earning a spot on the Inc. 5000 list, Ray embarked on a two-year journey of deep personal exploration. In November 2022, he found his true purpose in Jesus. Since then, everything has changed, and his mission now is to help others grow in faith, business, and life through the principles of biblical success and leadership.`
  },
  {
    name: 'Jenny Taylor',
    role: 'Chief Operating Officer',
    subRoles: ['Brilliant Perspectives', 'Life Coach'],
    image: '/JennyTaylor.jpg',
    bio: ''
  },
  {
    name: 'Theresa Cooke',
    role: 'Ministry Leader',
    subRoles: ['Brilliant Women'],
    image: '/Theresa1.png',
    bio: ''
  },
  {
    name: 'Bridget van Zyl',
    role: 'Senior Church Leader',
    subRoles: ['Certified Family Life Coach'],
    image: '/Bridget.jpg',
    bio: ''
  }
];

export default function Speakers() {
  return (
    <section className="relative py-32 bg-[#222222] text-[#F8F4F1]">
      <div className="relative container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <span className="inline-block text-xs tracking-[0.2em] uppercase text-[#DD8D00] mb-6">
              The Team
            </span>
            <h2 className="text-[3.5rem] md:text-[5rem] font-bold mb-8 leading-[0.95] tracking-tight">
              Meet Your Guides
            </h2>
            <p className="text-base md:text-lg text-[#F8F4F1]/60 max-w-xl mx-auto tracking-wide">
              Join us for three transformative days with these extraordinary leaders who will guide you through powerful sessions and life-changing experiences
            </p>
          </div>
          
          <div className="grid gap-32">
            {/* Keynote Speakers */}
            <div className="grid gap-24">
              {speakers
                .filter(speaker => speaker.role === 'Keynote Speaker' || speaker.role === 'Guest Speaker')
                .map((speaker, index) => (
                  <div 
                    key={index} 
                    className="
                      group relative 
                      bg-[#2A2A2A]
                      rounded-none
                      p-12 md:p-16
                      transition-all duration-500
                      hover:bg-[#2D2D2D]
                    "
                  >
                    <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-start">
                      <div className="shrink-0 mx-auto lg:mx-0">
                        <div className="relative w-[280px] h-[280px] rounded-full overflow-hidden">
                          <Image
                            src={speaker.image}
                            alt={speaker.name}
                            fill
                            className={`
                              object-cover 
                              transition-transform duration-700 
                              group-hover:scale-[1.02]
                              ${speaker.name === 'Theresa Cooke' ? 'scale-[1.2]' : ''}
                              ${speaker.name === 'Ray Higdon' ? 'scale-[1.15] object-top' : ''}
                            `}
                            sizes="(max-width: 768px) 280px, 280px"
                            priority={index === 0}
                          />
                        </div>
                      </div>
                      <div className="flex-1 lg:pt-4">
                        <div className="space-y-6">
                          <div className="flex flex-wrap items-center gap-3">
                            <span 
                              className="
                                inline-block
                                text-xs
                                tracking-[0.2em]
                                uppercase
                                text-[#DD8D00]
                                bg-[#DD8D00]/10
                                px-3 py-1
                                rounded-full
                              "
                            >
                              {speaker.role}
                            </span>
                            {speaker.name === 'Ray Higdon' && (
                              <span 
                                className="
                                  inline-block
                                  text-xs
                                  tracking-[0.2em]
                                  uppercase
                                  text-[#74A78E]
                                  bg-[#74A78E]/10
                                  px-3 py-1
                                  rounded-full
                                "
                              >
                                NEW THIS YEAR
                              </span>
                            )}
                          </div>
                          <h3 className="text-[2.5rem] font-bold tracking-tight leading-[1.1]">{speaker.name}</h3>
                          <p className="text-base md:text-lg text-[#F8F4F1]/60 leading-relaxed max-w-2xl tracking-wide">{speaker.bio}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Other Speakers */}
            <div>
              <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                {speakers
                  .filter(speaker => speaker.role !== 'Keynote Speaker' && speaker.role !== 'Guest Speaker')
                  .map((speaker, index) => (
                    <div 
                      key={index} 
                      className="
                        group relative 
                        bg-transparent
                        transition-all duration-500
                      "
                    >
                      <div className="mb-8">
                        <div className="relative w-[280px] h-[280px] rounded-full overflow-hidden mx-auto">
                          <Image
                            src={speaker.image}
                            alt={speaker.name}
                            fill
                            className={`
                              object-cover 
                              transition-transform duration-700 
                              group-hover:scale-[1.02]
                              ${speaker.name === 'Theresa Cooke' ? 'scale-[1.2]' : ''}
                            `}
                            sizes="(max-width: 768px) 280px, 280px"
                          />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-2xl font-medium tracking-tight">{speaker.name}</h3>
                        <p className="text-sm tracking-[0.1em] uppercase text-[#DD8D00]">{speaker.role}</p>
                        {speaker.subRoles && (
                          <div className="flex flex-wrap gap-2">
                            {speaker.subRoles.map((subRole, roleIndex) => (
                              <span 
                                key={roleIndex} 
                                className="
                                  text-xs
                                  tracking-[0.1em]
                                  uppercase
                                  text-[#F8F4F1]/40
                                "
                              >
                                {subRole}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 