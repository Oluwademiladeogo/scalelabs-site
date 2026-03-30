'use client';

import { useState } from 'react';
import { useScrollReveal } from './useScrollReveal';
import { CaretDown } from '@phosphor-icons/react';

interface FAQItem {
  question: string;
  answer: string;
}

function FAQAccordion({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`border rounded-xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-black/[0.08] bg-white' : 'border-transparent bg-transparent'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left group transition-colors"
      >
        <span className={`font-medium pr-4 text-[15px] transition-colors duration-300 ${isOpen ? 'text-[#111]' : 'text-[#111]/60'}`}>
          {item.question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#111] text-white rotate-180' : 'bg-black/[0.04] text-[#111]/30'}`}>
          <CaretDown size={14} weight="bold" />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 text-[#111]/45 text-[15px] leading-relaxed">
          {item.answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const ref = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'How does it work technically?',
      answer: 'When a call goes unanswered, our system detects the missed call within seconds and immediately sends a personalized SMS to the caller. For Premium plans, our AI voice agent can answer calls directly. The system integrates with your existing phone number — no new hardware or software needed on your end.',
    },
    {
      question: 'Do I need to change my phone number?',
      answer: 'No. We work with your existing business phone number. We use call forwarding technology so your customers continue calling the same number they always have. Setup takes minutes, not days.',
    },
    {
      question: 'What if the AI makes a mistake?',
      answer: 'Our AI is trained specifically for home service businesses and handles conversations naturally. However, you always have full visibility into every interaction through your dashboard. You can customize responses, set boundaries on what the AI can and cannot do, and override any booking at any time.',
    },
    {
      question: 'How long does setup take?',
      answer: 'Most businesses are live within one week. We handle the entire setup — you just answer a few questions about your business and we do the rest.',
    },
    {
      question: 'Can I try it before I commit?',
      answer: 'If you\'re not seeing results after 30 days, we\'ll refund your first month\'s fee — no questions asked. Setup fee is non-refundable as it covers real configuration work, but it\'s waived for founding partners.',
    },
    {
      question: 'What happens after hours?',
      answer: 'That\'s where we really shine. Our system works 24/7, including nights, weekends, and holidays. After-hours callers are some of the highest-intent leads — they have an urgent problem and want it solved. We capture those leads while your competitors\' phones ring to voicemail.',
    },
    {
      question: 'Do I need to be tech-savvy?',
      answer: 'Not at all. If you can check a text message, you can use ScaleLabs. We handle all the setup and give you a simple dashboard to view leads and appointments. Most of our clients are hands-on contractors, not tech experts.',
    },
    {
      question: 'What if I want to cancel?',
      answer: 'We don\'t lock you into long-term contracts. You can cancel anytime with 30 days notice. We\'re confident you\'ll want to stay once you see the results, but we believe in earning your business every month.',
    },
  ];

  return (
    <section id="faq" ref={ref} className="py-24 sm:py-32 bg-[#fafaf8]">
      <div className="max-w-2xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <div className="fade-in-up">
            <span className="section-label text-blue-500/80 mb-4 inline-block">// FAQ</span>
            <h2 className="headline-lg text-[#111]">
              Questions & answers
            </h2>
          </div>
        </div>

        <div className="fade-in-up space-y-1">
          {faqs.map((faq, index) => (
            <FAQAccordion
              key={index}
              item={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
