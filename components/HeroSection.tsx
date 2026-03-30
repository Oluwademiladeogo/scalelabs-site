'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CalendarBlank, CheckCircle } from '@phosphor-icons/react';

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: 0.4 + i * 0.08,
      duration: 0.6,
      ease,
    },
  }),
};

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease },
  },
});

export default function HeroSection() {
  const headlineWords = ['Stop', 'Losing', 'Jobs', 'to'];
  const accentWords = ['Missed', 'Calls'];

  return (
    <section className="hero-gradient relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[15%] w-[500px] h-[500px] bg-blue-500/[0.04] rounded-full blur-[120px] pulse-glow" />
        <div className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] bg-indigo-500/[0.04] rounded-full blur-[120px] pulse-glow" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/[0.02] rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center pt-24 pb-20">
        {/* Badge */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-1.5 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white/50 text-xs font-medium tracking-wide">AI-Powered Call Recovery for Home Services</span>
        </motion.div>

        {/* Headline */}
        <h1 className="headline-xl text-white mb-8">
          <span className="block">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </span>
          <span className="block mt-2">
            {accentWords.map((word, i) => (
              <motion.span
                key={i}
                custom={headlineWords.length + i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="inline-block mr-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-400"
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp(1)}
          initial="hidden"
          animate="visible"
          className="text-lg sm:text-xl text-white/40 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Your phones ring. Your crew is on a job. The caller hangs up and calls your competitor.
          <span className="text-white/70 font-normal"> We fix that — automatically.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp(1.2)}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#demo"
            className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-[#0f0f0f] font-semibold px-8 py-4 rounded-full text-[15px]"
          >
            See It In Action
            <ArrowRight size={16} weight="bold" />
          </a>
          <a
            href="https://cal.com/scalelabs/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border border-white/20 text-white font-medium px-8 py-4 rounded-full text-[15px]"
          >
            Book a Free Demo
            <CalendarBlank size={16} weight="light" />
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          variants={fadeUp(1.5)}
          initial="hidden"
          animate="visible"
          className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/30 text-[13px]"
        >
          {['No hardware needed', 'Setup in days, not months', 'Cancel anytime'].map((text, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle size={14} weight="duotone" />
              {text}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border border-white/20 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-1 h-2 bg-white/30 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
