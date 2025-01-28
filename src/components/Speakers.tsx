'use client';

import Image from 'next/image';

const speakers = [
  {
    name: 'Graham Cooke',
    role: 'Lead Speaker',
    image: '/Graham.png',
    bio: `Graham is a popular speaker around the world with a passion to empower the people of God to walk in their true identity. His life and ministry are marked by his delightful, intimate, and unreserved two-way friendship with the Lord, and his unique way of communicating a radiant idea of Jesus and the Kingdom of God.`
  },
  {
    name: 'Dionne van Zyl',
    role: 'President',
    image: '/Dionne.jpg',
    bio: `Dionne van Zyl is a dynamic and accomplished leader who serves as president of Brilliant Perspectives. His career spans from innovative tech startups that disrupted Wall Street norms to three impactful non-profits that have influenced generations. Now, Dionne is channeling his extensive experience and proven strategies into resources that Kingdom leaders can utilize for effortless and lasting transformation.`
  },
  {
    name: 'Jenny Taylor',
    role: 'Director',
    subRoles: ['Life Coach', 'Business Leader'],
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
    <section className="py-32 bg-[#222222] text-[#F8F4F1]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-base tracking-widest text-[#F8F4F1]/60 font-medium mb-6">YOUR GUIDES</p>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Meet Your Speakers</h2>
            <p className="text-xl text-[#F8F4F1]/80">AND YOUR TEAM</p>
          </div>
          
          <div className="grid gap-16">
            {/* Lead Speakers */}
            <div className="grid lg:grid-cols-2 gap-12">
              {speakers.slice(0, 2).map((speaker, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-8">
                    <div className="absolute -inset-4 bg-[#DD8D00]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 256px, 320px"
                        quality={95}
                        priority={index === 0}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold mb-4">{speaker.name}</h3>
                    <p className="text-xl text-[#DD8D00] mb-6">{speaker.role}</p>
                    <div className="space-y-6 text-lg text-[#F8F4F1]/80 leading-relaxed">
                      {speaker.bio.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {speakers.slice(2).map((speaker, index) => (
                <div key={index} className="group text-center">
                  <div className="relative w-56 h-56 mx-auto mb-6">
                    <div className="absolute -inset-2 bg-[#DD8D00]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 224px, 224px"
                        quality={90}
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{speaker.name}</h3>
                  <p className="text-[#DD8D00] font-medium mb-2">{speaker.role}</p>
                  {speaker.subRoles && (
                    <div className="space-y-1">
                      {speaker.subRoles.map((subRole, roleIndex) => (
                        <p key={roleIndex} className="text-[#F8F4F1]/60">{subRole}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 