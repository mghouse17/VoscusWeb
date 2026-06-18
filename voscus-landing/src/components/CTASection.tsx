import React from 'react';
import { ArrowRight } from 'lucide-react';
import { demoHref, docsHref } from '../config/site';
import { landingContent } from '../content/landing';
import { Reveal } from './Motion';

export const CTASection: React.FC = () => {
  const { cta } = landingContent;

  return (
    <section className="cta-surface relative overflow-hidden py-20 text-white md:py-32">
      <div className="cta-grid absolute inset-0 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-1 accent-rule" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal preset="containerSlow" className="text-left">
          <Reveal
            as="h2"
            preset="item"
            className="mb-6 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl"
          >
            {cta.title}
            <br />
            <span className="text-signal-200">{cta.accent}</span>
          </Reveal>

          <Reveal
            as="p"
            preset="item"
            className="mb-12 max-w-2xl text-xl leading-relaxed text-teal-50"
          >
            {cta.description}
          </Reveal>

          <Reveal preset="item" className="flex flex-col gap-4 sm:flex-row">
            <a
              href={demoHref}
              className="group relative flex min-w-fit items-center justify-center gap-2 rounded-full bg-signal-200 px-8 py-4 text-base font-bold text-ink-900 shadow-accent-cta transition-all duration-200 hover:bg-signal-100 active:scale-[0.98]"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={docsHref}
              className="rounded-full border border-white/15 bg-white/15 px-8 py-4 text-base font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] transition-all duration-200 hover:bg-white/25 active:scale-[0.98]"
            >
              View Docs
            </a>
          </Reveal>

          <Reveal preset="item" className="mt-16 border-t border-white/12 pt-12">
            <p className="mb-6 text-sm text-teal-100">
              Decision intelligence for engineering and security teams running AI agents at scale
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {cta.trust.map((stat) => (
                <div key={stat.label}>
                  <p className="mb-1 font-mono text-sm font-semibold uppercase tracking-wider text-teal-200">
                    {stat.label}
                  </p>
                  <p className="text-lg font-bold text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
};
