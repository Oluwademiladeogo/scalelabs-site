'use client';

import { useState } from 'react';
import { useScrollReveal } from './useScrollReveal';

export default function ROICalculator() {
  const ref = useScrollReveal();
  const [callsPerWeek, setCallsPerWeek] = useState(40);
  const [avgJobValue, setAvgJobValue] = useState(350);
  const [missedRate, setMissedRate] = useState(28);

  const missedCallsPerMonth = Math.round(callsPerWeek * 4.33 * (missedRate / 100));
  const recoveryRate = 0.5;
  const recoverableRevenue = Math.round(missedCallsPerMonth * avgJobValue * recoveryRate);
  const growthPlanCost = 500;
  const netGain = recoverableRevenue - growthPlanCost;
  const roiRatio = recoverableRevenue > 0 ? (recoverableRevenue / growthPlanCost).toFixed(1) : '0';

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="calculator" ref={ref} className="py-24 sm:py-32 hero-gradient relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/[0.04] rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <div className="fade-in-up">
            <span className="section-label text-amber-400/80 mb-4 inline-block">// ROI Calculator</span>
            <h2 className="headline-lg text-white">
              See what you&apos;re leaving<br className="hidden sm:block" /> on the table
            </h2>
          </div>
        </div>

        <div className="fade-in-up max-w-4xl mx-auto">
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-6 sm:p-10 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Sliders */}
              <div className="space-y-10">
                {/* Calls per week */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-white/50 text-sm font-medium">Calls per week</label>
                    <span className="text-white font-semibold text-sm bg-white/[0.06] px-3 py-1.5 rounded-lg tabular-nums">{callsPerWeek}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={callsPerWeek}
                    onChange={(e) => setCallsPerWeek(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-[11px] text-white/20 mt-2 font-mono">
                    <span>10</span>
                    <span>100</span>
                  </div>
                </div>

                {/* Average job value */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-white/50 text-sm font-medium">Average job value</label>
                    <span className="text-white font-semibold text-sm bg-white/[0.06] px-3 py-1.5 rounded-lg tabular-nums">{formatCurrency(avgJobValue)}</span>
                  </div>
                  <input
                    type="range"
                    min="150"
                    max="1000"
                    step="10"
                    value={avgJobValue}
                    onChange={(e) => setAvgJobValue(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-[11px] text-white/20 mt-2 font-mono">
                    <span>$150</span>
                    <span>$1,000</span>
                  </div>
                </div>

                {/* Missed call rate */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-white/50 text-sm font-medium">Estimated missed call rate</label>
                    <span className="text-white font-semibold text-sm bg-white/[0.06] px-3 py-1.5 rounded-lg tabular-nums">{missedRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    value={missedRate}
                    onChange={(e) => setMissedRate(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-[11px] text-white/20 mt-2 font-mono">
                    <span>10%</span>
                    <span>50%</span>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="flex flex-col justify-center">
                <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 text-center relative overflow-hidden">
                  {/* Subtle glow behind number */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-500/[0.06] rounded-full blur-[80px]" />

                  <div className="relative">
                    <p className="section-label text-white/30 mb-3">Recoverable Revenue</p>
                    <div className="text-5xl sm:text-6xl font-semibold text-amber-400 mb-1 tracking-tight tabular-nums">
                      {formatCurrency(recoverableRevenue)}
                    </div>
                    <p className="text-white/30 text-sm mb-1">per month</p>
                    <p className="text-white/15 text-xs mb-8">Based on 50% recovery rate — conservative estimate</p>

                    <div className="divider-gradient-light mb-6" />

                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white/30">After ScaleLabs ($300–$800/mo)</span>
                        <span className={`font-semibold text-lg tabular-nums ${netGain >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                          {netGain >= 0 ? '+' : ''}{formatCurrency(netGain)}/mo
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-3">
                        <span className="text-white/30 text-sm">ROI</span>
                        <span className="text-3xl font-semibold text-emerald-400 tracking-tight tabular-nums">{roiRatio}x</span>
                      </div>
                    </div>

                    <a
                      href="https://cal.com/scalelabs/demo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center justify-center w-full bg-white text-[#0f0f0f] font-semibold px-6 py-3.5 rounded-full text-sm transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                    >
                      Stop Losing Money — Book a Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
