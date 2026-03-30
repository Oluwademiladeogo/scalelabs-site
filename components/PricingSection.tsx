'use client';

import { useScrollReveal } from './useScrollReveal';
import { Check, Star } from '@phosphor-icons/react';

export default function PricingSection() {
  const ref = useScrollReveal();

  const plans = [
    {
      name: 'Starter',
      price: 300,
      setupFee: 500,
      popular: false,
      features: [
        'Missed call SMS recovery',
        'Lead capture',
        'Owner notifications',
        'Basic dashboard',
      ],
    },
    {
      name: 'Growth',
      price: 500,
      setupFee: 1000,
      popular: true,
      features: [
        'Everything in Starter',
        'AI qualification',
        'Appointment booking',
        'Follow-up sequences',
        'Weekly reports',
      ],
    },
    {
      name: 'Premium',
      price: 800,
      setupFee: 2000,
      popular: false,
      features: [
        'Everything in Growth',
        'Full voice AI receptionist',
        '24/7 coverage',
        'Priority support',
        'Custom integrations',
      ],
    },
  ];

  return (
    <section id="pricing" ref={ref} className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-20">
          <div className="fade-in-up">
            <span className="section-label text-blue-500/80 mb-4 inline-block">// Pricing</span>
            <h2 className="headline-lg text-[#111]">
              Simple, transparent pricing
            </h2>
          </div>
        </div>

        <div className="fade-in-up grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`stagger-child relative rounded-2xl p-8 sm:p-10 transition-all duration-500 ${
                plan.popular
                  ? 'bg-[#0f0f0f] text-white border border-white/10 card-hover-dark md:scale-[1.03]'
                  : 'bg-[#fafaf8] border border-black/[0.06] text-[#111] card-hover'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-[#111] text-[11px] font-semibold px-4 py-1.5 rounded-full whitespace-nowrap tracking-wide uppercase">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-sm font-medium mb-5 ${plan.popular ? 'text-white/50' : 'text-[#111]/40'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-semibold tracking-tight tabular-nums">
                    ${plan.price}
                  </span>
                  <span className={`text-sm ${plan.popular ? 'text-white/30' : 'text-[#111]/30'}`}>/mo</span>
                </div>
                <p className={`text-xs mt-2 ${plan.popular ? 'text-white/20' : 'text-[#111]/25'}`}>
                  Setup fee: ${plan.setupFee.toLocaleString()}
                </p>
              </div>

              <div className={`h-px mb-8 ${plan.popular ? 'bg-white/[0.06]' : 'bg-black/[0.04]'}`} />

              <ul className="space-y-3.5 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check
                      size={16}
                      weight="bold"
                      className={`flex-shrink-0 mt-0.5 ${plan.popular ? 'text-white/40' : 'text-[#111]/25'}`}
                    />
                    <span className={`text-sm ${plan.popular ? 'text-white/60' : 'text-[#111]/50'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://cal.com/scalelabs/demo"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center font-semibold py-3.5 rounded-full text-sm transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white text-[#0f0f0f] hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]'
                    : 'bg-[#111] text-white hover:bg-[#222]'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <div className="fade-in-up text-center mt-12">
          <div className="inline-flex items-center gap-2.5 bg-amber-50/80 border border-amber-200/50 rounded-full px-5 py-2.5">
            <Star size={14} weight="fill" className="text-amber-500" />
            <span className="text-amber-700/80 font-medium text-[13px]">
              Founding Partner Offer: Setup fee waived for our first 5 clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
