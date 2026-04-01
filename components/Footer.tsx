'use client';

import { EnvelopeSimple, CalendarBlank } from '@phosphor-icons/react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/scalelabs-icon.svg" alt="ScaleLabs" width={28} height={28} className="brightness-[2] opacity-60" />
              <span className="text-white/80 font-semibold text-[15px] tracking-tight">ScaleLabs</span>
            </div>
            <p className="text-white/25 text-sm leading-relaxed max-w-xs">
              AI-powered call recovery for home service businesses. Never lose a job to a missed call again.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="section-label text-white/30 mb-5">Navigation</h4>
            <ul className="space-y-2.5">
              {[
                { href: '#problem', label: 'The Problem' },
                { href: '#solution', label: 'How It Works' },
                { href: '#calculator', label: 'ROI Calculator' },
                { href: '#pricing', label: 'Pricing' },
                { href: '#faq', label: 'FAQ' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="link-underline text-white/30 hover:text-white/60 text-sm transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="section-label text-white/30 mb-5">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-white/30 text-sm">
                <EnvelopeSimple size={14} weight="light" />
                hello@scalelabs.studio
              </li>
              <li>
                <a
                  href="https://cal.com/scalelabs/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline flex items-center gap-2.5 text-white/30 hover:text-white/60 text-sm transition-colors duration-300"
                >
                  <CalendarBlank size={14} weight="light" />
                  Book a Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-gradient-light mt-12 mb-8" />

        <div className="flex items-center justify-center">
          <p className="text-white/15 text-xs">
            &copy; 2026 ScaleLabs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
