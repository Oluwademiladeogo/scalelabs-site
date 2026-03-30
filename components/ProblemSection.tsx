'use client';

import { useScrollReveal } from './useScrollReveal';
import AnimatedCounter from './AnimatedCounter';

export default function ProblemSection() {
  const ref = useScrollReveal();

  const stats = [
    {
      number: 28,
      suffix: '%',
      text: 'of business calls go unanswered',
    },
    {
      number: 78,
      suffix: '%',
      text: 'of customers hire the first company that responds',
    },
    {
      number: 85,
      suffix: '%',
      text: 'of callers who reach voicemail never leave a message',
    },
  ];

  return (
    <section id="problem" ref={ref} className="py-24 sm:py-32 bg-[#fafaf8]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-20">
          <div className="fade-in-up">
            <span className="section-label text-red-500/80 mb-4 inline-block">// The Problem</span>
            <h2 className="headline-lg text-[#111] mb-0">
              Every missed call is a<br className="hidden sm:block" /> lost job
            </h2>
          </div>
        </div>

        <div className="fade-in-up grid grid-cols-1 md:grid-cols-3 gap-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stagger-child card-hover group bg-white border border-black/[0.06] rounded-2xl p-8 sm:p-10 text-center"
            >
              <div className="text-5xl sm:text-6xl font-semibold text-[#111] mb-3 tracking-tight">
                <AnimatedCounter end={stat.number} suffix={stat.suffix} />
              </div>
              <p className="text-[#111]/50 text-[15px] leading-relaxed">{stat.text}</p>
            </div>
          ))}
        </div>

        <div className="fade-in-up max-w-2xl mx-auto text-center mt-16">
          <p className="text-lg text-[#111]/50 leading-relaxed">
            If your average job is worth{' '}
            <span className="font-semibold text-[#111]">$300–500</span>, you&apos;re leaving{' '}
            <span className="font-semibold text-amber-600">$5,000–15,000</span> on the table every month.
          </p>
        </div>
      </div>
    </section>
  );
}
