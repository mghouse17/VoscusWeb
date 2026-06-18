import React from 'react';
import Image from 'next/image';
import { Activity, ArrowRight, Zap } from 'lucide-react';
import { demoHref } from '../config/site';
import { landingContent } from '../content/landing';
import { Reveal } from './Motion';

interface HeroProps {
  logoUrl?: string;
}

// Color classes indexed against disposition order: Allowed, Warned, Held, Stopped
const dispositionValueColors = [
  'text-teal-700',    // Allowed
  'text-amber-600',   // Warned
  'text-signal-500',  // Held
  'text-red-600',     // Stopped
] as const;

export const Hero: React.FC<HeroProps> = ({ logoUrl }) => {
  const { hero } = landingContent;

  return (
    <section className="hero-surface relative flex min-h-[92dvh] items-center overflow-hidden pt-20 pb-16 md:pb-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-grid absolute inset-0" />
        <div className="hero-angle absolute left-0 top-0 h-full w-full" />
      </div>

      <Reveal
        preset="containerSlow"
        animateOnLoad
        className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8"
      >
        {/* Left — copy */}
        <div>
          {logoUrl && (
            <Reveal preset="item" className="mb-8 flex flex-wrap items-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/80 bg-white/70 shadow-soft-logo">
                <Image
                  src={logoUrl}
                  alt="Voscus"
                  width={56}
                  height={56}
                  priority
                  className="h-12 w-12 object-contain"
                />
              </span>
              <span className="rounded-full border border-teal-700/15 bg-teal-50 px-4 py-2 text-sm font-bold text-teal-800">
                {hero.eyebrow}
              </span>
            </Reveal>
          )}

          <Reveal as="h1" preset="item" className="mb-7 max-w-3xl">
            <span className="font-sans text-5xl font-bold leading-[0.98] text-ink-900 md:text-6xl lg:text-7xl">
              {hero.title}
            </span>
          </Reveal>

          <Reveal
            as="p"
            preset="item"
            className="mb-9 max-w-2xl text-lg leading-relaxed text-ink-700 md:text-xl"
          >
            {hero.description}
          </Reveal>

          <Reveal preset="item" className="flex flex-col gap-4 sm:flex-row">
            <a
              href={demoHref}
              className="group relative flex min-w-fit items-center justify-center gap-2 rounded-full bg-ink-900 px-8 py-4 text-base font-bold text-white shadow-primary-cta transition-all duration-200 hover:bg-teal-800 active:scale-[0.98]"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#product"
              className="rounded-full border border-ink-900/15 bg-white/72 px-8 py-4 text-base font-bold text-ink-900 shadow-inner-line transition-all duration-200 hover:border-teal-700/30 hover:bg-teal-50 active:scale-[0.98]"
            >
              View Platform
            </a>
          </Reveal>
        </div>

        {/* Right — demo widget */}
        <Reveal preset="item" className="relative lg:pl-8">
          <div className="surface-lift relative overflow-hidden rounded-[2rem] p-4 sm:p-6">

            {/* Stream header with four-disposition spread */}
            <div className="mb-4 rounded-2xl bg-ink-900 px-4 py-3 text-white">
              <div className="mb-2.5 flex items-center gap-3">
                <Activity className="h-5 w-5 text-teal-300" />
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-teal-100">
                  Pre-execution stream
                </span>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {hero.dispositions.map((d, i) => (
                  <span key={d.label} className="font-mono text-xs">
                    <span className={dispositionValueColors[i] + ' font-bold'}>{d.value}</span>
                    <span className="ml-1 text-white/40">{d.label.toLowerCase()}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Stream rows */}
            <div className="space-y-3">
              {hero.streamItems.map(([time, copy, state]) => (
                <div key={copy} className="event-row">
                  <span className="font-mono text-xs font-semibold text-ink-500">{time}</span>
                  <span className="text-sm font-semibold text-ink-800">{copy}</span>
                  <span
                    className={`rounded-full px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider ${
                      state === 'held'
                        ? 'bg-signal-100 text-signal-500'
                        : 'bg-teal-50 text-teal-700'
                    }`}
                  >
                    {state}
                  </span>
                </div>
              ))}
            </div>

            {/* Decision reasoning panel */}
            <div className="mt-4 rounded-xl border border-ink-900/10 bg-ink-50 p-4">
              <div className="mb-3 flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-teal-700" />
                <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-ink-400">
                  Decision reasoning
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-[84px] flex-shrink-0 font-mono text-[10px] font-semibold uppercase tracking-wide text-ink-400 pt-px">
                    Blast Radius
                  </span>
                  <div>
                    <p className="text-xs font-bold text-ink-900">{hero.reasoning.blastRadius.value}</p>
                    <p className="text-[10px] leading-snug text-ink-500">{hero.reasoning.blastRadius.detail}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-[84px] flex-shrink-0 font-mono text-[10px] font-semibold uppercase tracking-wide text-ink-400 pt-px">
                    Policy Match
                  </span>
                  <div>
                    <p className="text-xs font-bold text-signal-500">{hero.reasoning.policyMatch.value}</p>
                    <p className="text-[10px] leading-snug text-ink-500">{hero.reasoning.policyMatch.detail}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-[84px] flex-shrink-0 font-mono text-[10px] font-semibold uppercase tracking-wide text-ink-400 pt-px">
                    Explanation
                  </span>
                  <p className="text-[11px] leading-relaxed text-ink-700">
                    {hero.reasoning.explanation}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </Reveal>
      </Reveal>
    </section>
  );
};
