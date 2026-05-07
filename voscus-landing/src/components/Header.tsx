'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { demoHref, siteConfig } from '../config/site';

interface HeaderProps {
  logoUrl?: string;
}

export const Header: React.FC<HeaderProps> = ({ logoUrl }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/10 bg-ink-50/82 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2 group">
          {logoUrl ? (
            <Image
              src={logoUrl}
              alt="Voscus"
              width={32}
              height={32}
              priority
              className="h-8 w-8 object-contain"
            />
          ) : (
            <div className="h-8 w-8 bg-gradient-to-br from-navy-600 to-navy-800 rounded-lg" />
          )}
          <span className="font-sans text-xl font-semibold text-ink-900 group-hover:text-teal-700 transition-colors">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-ink-700 hover:text-teal-700 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={demoHref}
            className="px-4 py-2 text-sm font-semibold text-ink-700 hover:text-teal-700 transition-colors"
          >
            Book a Demo
          </a>
          <a
            href="#product"
            className="px-4 py-2 text-sm font-semibold text-white bg-ink-900 hover:bg-teal-800 rounded-full transition-colors shadow-[0_14px_32px_-18px_rgba(8,51,49,0.8)] active:scale-[0.98]"
          >
            View Platform
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-teal-50 transition-colors"
          aria-label="Toggle menu"
        >
          <div className="w-5 h-5 flex flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-ink-900 transition-all ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`h-0.5 w-full bg-ink-900 transition-all ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-0.5 w-full bg-ink-900 transition-all ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-ink-900/10 bg-ink-50 animate-fadeIn">
          <div className="px-4 py-4 space-y-3">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm font-semibold text-ink-700 hover:text-teal-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={demoHref}
              className="w-full px-4 py-2 text-sm font-semibold text-white bg-ink-900 rounded-full transition-colors"
            >
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
