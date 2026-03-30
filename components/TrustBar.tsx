'use client';

export default function TrustBar() {
  const technologies = [
    'Twilio',
    'Google Calendar',
    'OpenAI',
    'Enterprise Security',
    'Twilio',
    'Google Calendar',
    'OpenAI',
    'Enterprise Security',
  ];

  return (
    <section className="py-10 bg-white border-y border-black/[0.04] overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <p className="section-label text-[#111]/30 text-center mb-6">
          Powered by trusted technology
        </p>
      </div>

      {/* Infinite marquee */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="marquee-track">
          {[...technologies, ...technologies].map((tech, index) => (
            <span
              key={index}
              className="flex-shrink-0 text-[#111]/25 font-medium text-sm px-8 py-2 whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
