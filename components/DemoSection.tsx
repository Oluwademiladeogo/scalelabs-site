'use client';

import { useScrollReveal } from './useScrollReveal';
import { Play, ArrowRight } from '@phosphor-icons/react';

export default function DemoSection() {
  const ref = useScrollReveal();

  return (
    <section id="demo" ref={ref} className="py-24 sm:py-32 bg-[#fafaf8]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <div className="fade-in-up">
            <span className="section-label text-blue-500/80 mb-4 inline-block">// Demo</span>
            <h2 className="headline-lg text-[#111] mb-5">
              See it in action
            </h2>
            <p className="text-lg text-[#111]/40 max-w-xl mx-auto leading-relaxed">
              Watch how ScaleLabs handles a missed call in real-time
            </p>
          </div>
        </div>

        <div className="fade-in-up max-w-4xl mx-auto">
          {/* Browser frame mockup */}
          <div className="relative">
            <div className="bg-[#1a1a1a] rounded-t-2xl px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
              </div>
              <div className="flex-1 mx-8">
                <div className="bg-white/[0.06] rounded-lg h-7 flex items-center justify-center">
                  <span className="text-white/20 text-[11px] font-mono">scalelabs.studio/demo</span>
                </div>
              </div>
            </div>

            <div className="relative bg-[#111] rounded-b-2xl overflow-hidden aspect-video border-x border-b border-white/[0.04]">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <button className="group w-20 h-20 rounded-full bg-white/[0.08] border border-white/[0.1] flex items-center justify-center mb-5 transition-all duration-500 hover:bg-white/[0.12] hover:scale-105 hover:border-white/[0.15]">
                  <Play size={24} weight="fill" className="text-white/60 group-hover:text-white transition-colors duration-300 ml-0.5" />
                </button>
                <p className="text-white/20 text-sm">Demo video coming soon</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#111]/30 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="fade-in-up text-center mt-16">
          <p className="text-xl font-semibold text-[#111] mb-6 tracking-tight">
            Ready to stop losing jobs?
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
        </div>
      </div>
    </section>
  );
}
