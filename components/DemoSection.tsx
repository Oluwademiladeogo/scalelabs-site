'use client';

import { useScrollReveal } from './useScrollReveal';
import { ArrowRight } from '@phosphor-icons/react';

export default function DemoSection() {
  const ref = useScrollReveal();

  return (
    <section id="demo" ref={ref} className="py-24 sm:py-32 bg-[#fafaf8]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="fade-in-up max-w-2xl mx-auto text-center">
          <span className="section-label text-blue-500/80 mb-4 inline-block">// See It In Action</span>
          <h2 className="headline-lg text-[#111] mb-5">
            Book a 10-minute demo
          </h2>
          <p className="text-lg text-[#111]/40 max-w-xl mx-auto leading-relaxed mb-10">
            We&apos;ll call your business, let it ring, and show you exactly how fast we recover that lead — live, using your real phone number.
          </p>
          <a
            href="https://cal.com/scalelabs/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#111] text-white font-semibold px-8 py-4 rounded-full text-[15px] transition-all duration-300 hover:bg-[#222] hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)]"
          >
            Book Your Free Demo
            <ArrowRight size={16} weight="bold" />
          </a>
          <p className="text-[#111]/25 text-sm mt-5">
            No slides. No pitch deck. Just a live test on your phone.
          </p>
        </div>
      </div>
    </section>
  );
}
