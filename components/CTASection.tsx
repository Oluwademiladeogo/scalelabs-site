'use client';

import { useScrollReveal } from './useScrollReveal';
import { ArrowRight } from '@phosphor-icons/react';

export default function CTASection() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="py-28 sm:py-40 hero-gradient relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <div className="fade-in-up">
          <h2 className="headline-xl text-white mb-8">
            Ready to never miss<br className="hidden sm:block" /> a call again?
          </h2>
          <p className="text-lg sm:text-xl text-white/30 max-w-xl mx-auto mb-12 leading-relaxed font-light">
            Join the home service pros who are capturing every lead and booking more jobs — automatically.
          </p>
          <a
            href="https://cal.com/scalelabs/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-2.5 bg-white text-[#0f0f0f] font-semibold px-10 py-5 rounded-full text-[15px]"
          >
            Book Your Free Demo
            <ArrowRight size={16} weight="bold" />
          </a>
          <p className="text-white/20 text-sm mt-6">Free 15-minute call. No pressure. No contracts.</p>
        </div>
      </div>
    </section>
  );
}
