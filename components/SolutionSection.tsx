'use client';

import { useScrollReveal } from './useScrollReveal';
import { PhoneIncoming, ClipboardText, CalendarCheck } from '@phosphor-icons/react';

export default function SolutionSection() {
  const ref = useScrollReveal();

  const steps = [
    {
      number: '01',
      title: 'Catch Every Call',
      description: 'AI answers or instantly texts back when you can\'t. No more missed opportunities, even when your team is on a job site.',
      icon: <PhoneIncoming size={24} weight="duotone" />,
    },
    {
      number: '02',
      title: 'Qualify the Lead',
      description: 'Asks what they need, where they are, and how urgent it is. You get all the details before you even call back.',
      icon: <ClipboardText size={24} weight="duotone" />,
    },
    {
      number: '03',
      title: 'Book the Job',
      description: 'Schedules the appointment and notifies you instantly. By the time you see it, the job is already on your calendar.',
      icon: <CalendarCheck size={24} weight="duotone" />,
    },
  ];

  return (
    <section id="solution" ref={ref} className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-20">
          <div className="fade-in-up">
            <span className="section-label text-blue-500/80 mb-4 inline-block">// How It Works</span>
            <h2 className="headline-lg text-[#111]">
              Three steps to never<br className="hidden sm:block" /> miss a lead again
            </h2>
          </div>
        </div>

        <div className="fade-in-up grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((step, index) => (
            <div key={index} className="stagger-child group">
              <div className="card-hover bg-[#fafaf8] border border-black/[0.06] rounded-2xl p-8 sm:p-10 h-full relative overflow-hidden">
                {/* Step number watermark */}
                <span className="absolute top-6 right-8 text-[80px] font-bold text-black/[0.03] leading-none select-none">
                  {step.number}
                </span>

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-[#111] text-white flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-500">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#111] mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-[#111]/50 text-[15px] leading-relaxed">{step.description}</p>
                </div>

                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-2.5 w-5 h-px bg-black/10" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
