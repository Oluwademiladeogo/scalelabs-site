'use client';

import { useScrollReveal } from './useScrollReveal';
import { CurrencyDollar, UsersThree, PencilSimpleLine, ArrowRight } from '@phosphor-icons/react';

export default function SocialProofSection() {
  const ref = useScrollReveal();

  const benefits = [
    {
      title: 'Zero Setup Cost',
      description: '$1,000 setup fee completely waived for founding partners.',
      icon: <CurrencyDollar size={22} weight="duotone" />,
    },
    {
      title: 'Direct Access',
      description: 'Work directly with our engineering team. No support tickets.',
      icon: <UsersThree size={22} weight="duotone" />,
    },
    {
      title: 'Shape the Product',
      description: 'Your feedback directly influences our roadmap and features.',
      icon: <PencilSimpleLine size={22} weight="duotone" />,
    },
  ];

  return (
    <section id="testimonials" ref={ref} className="py-24 sm:py-32 bg-[#fafaf8]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-20">
          <div className="fade-in-up">
            <span className="section-label text-blue-500/80 mb-4 inline-block">// Limited Availability</span>
            <h2 className="headline-lg text-[#111] mb-5">
              Founding partner<br className="hidden sm:block" /> program
            </h2>
            <p className="text-lg text-[#111]/40 max-w-xl mx-auto leading-relaxed">
              We&apos;re selecting 5 home service companies in Dallas–Fort Worth to be our founding partners.
            </p>
          </div>
        </div>

        <div className="fade-in-up grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="stagger-child card-hover group bg-white border border-black/[0.06] rounded-2xl p-8 sm:p-10"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#111] mb-2 tracking-tight">{benefit.title}</h3>
              <p className="text-[#111]/40 text-[15px] leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="fade-in-up text-center">
          <a
            href="https://cal.com/scalelabs/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#111] text-white font-semibold px-8 py-4 rounded-full text-[15px] transition-all duration-300 hover:bg-[#222] hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)]"
          >
            Only 5 spots remaining — Apply Now
            <ArrowRight size={16} weight="bold" />
          </a>
          <p className="text-[#111]/30 text-sm mt-5">
            In exchange, we just ask for an honest review after 30 days.
          </p>
        </div>
      </div>
    </section>
  );
}
