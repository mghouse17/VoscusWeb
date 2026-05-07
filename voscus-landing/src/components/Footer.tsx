import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '../config/site';

interface FooterProps {
  logoUrl?: string;
}

export const Footer: React.FC<FooterProps> = ({ logoUrl }) => {
  return (
    <footer className="bg-ink-950 text-teal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="#" className="flex items-center gap-2 mb-4">
              {logoUrl ? (
                <Image
                  src={logoUrl}
                  alt={siteConfig.name}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-lg bg-white p-1 object-contain"
                />
              ) : (
                <div className="h-8 w-8 bg-white rounded-lg" />
              )}
              <span className="font-logo text-lg font-semibold text-teal-900">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-sm text-teal-900">
              Action-level oversight for autonomous AI agents.
            </p>
          </div>

          {siteConfig.footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-sm font-bold text-teal-900">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.label}`}>
                    <a
                      href={link.href}
                      className="text-sm text-teal-900 transition-colors hover:text-signal-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-teal-900">
            &copy; 2026 {siteConfig.name} AI. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {siteConfig.legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-teal-900 transition-colors hover:text-signal-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
