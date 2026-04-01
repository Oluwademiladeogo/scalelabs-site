'use client';

import { useState, useEffect } from 'react';
import { List, X } from '@phosphor-icons/react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#problem', label: 'Problem' },
    { href: '#solution', label: 'How It Works' },
    { href: '#calculator', label: 'ROI Calculator' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Image src="/scalelabs-icon.svg" alt="ScaleLabs" width={32} height={32} className="brightness-[2] opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="text-white font-semibold text-[15px] tracking-tight">ScaleLabs</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline text-white/50 hover:text-white text-[13px] font-medium px-3.5 py-2 rounded-lg transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://cal.com/scalelabs/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-white text-[#0f0f0f] text-[13px] font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white/70 hover:text-white p-2 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} weight="light" /> : <List size={22} weight="light" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ${
            isOpen ? 'max-h-[400px] opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="divider-gradient-light mb-4" />
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-white/60 hover:text-white text-sm font-medium py-2.5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://cal.com/scalelabs/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 bg-white text-[#0f0f0f] text-sm font-semibold px-5 py-3 rounded-full transition-colors text-center"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </nav>
  );
}
