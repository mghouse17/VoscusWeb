import React from 'react';
import { Check, Minus } from 'lucide-react';
import { demoHref } from '../config/site';
import { landingContent, type ComparisonFeatureName } from '../content/landing';
import { Reveal } from './Motion';

type Competitor = {
  name: string;
  focus: string;
  badge?: boolean;
  features: Readonly<Record<ComparisonFeatureName, boolean>>;
};

const competitors: readonly Competitor[] = landingContent.comparison.competitors;

export const ComparisonSection: React.FC = () => {
  const { comparison } = landingContent;

  return (
    <section id="comparison" className="relative bg-ink-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal preset="container" className="mb-16 max-w-3xl">
          <Reveal preset="item" className="mb-4">
            <span className="inline-block rounded-full border border-teal-700/15 bg-white px-3 py-1 text-sm font-bold text-teal-800">
              {comparison.eyebrow}
            </span>
          </Reveal>

          <Reveal
            as="h2"
            preset="item"
            className="mb-6 text-4xl font-bold text-ink-900 md:text-5xl"
          >
            {comparison.title}
          </Reveal>

          <Reveal as="p" preset="item" className="max-w-2xl text-lg leading-relaxed text-ink-700">
            {comparison.description}
          </Reveal>
        </Reveal>

        <Reveal preset="container" className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {competitors.map((competitor) => (
            <Reveal
              key={competitor.name}
              preset="item"
              className={`p-6 rounded-xl border transition-all duration-300 ${
                competitor.badge
                  ? 'border-teal-700/30 bg-gradient-to-b from-teal-50 to-white ring-2 ring-teal-100 shadow-comparison'
                  : 'border-ink-900/10 bg-white hover:border-teal-700/20'
              }`}
            >
              {competitor.badge ? (
                <div className="mb-4">
                  <span className="inline-block rounded-full bg-ink-900 px-2 py-1 text-xs font-bold text-white">
                    Purpose-Built
                  </span>
                </div>
              ) : null}

              <h3 className="mb-2 text-lg font-bold text-ink-900">{competitor.name}</h3>
              <p className="mb-6 text-sm text-ink-600">{competitor.focus}</p>

              <div className="space-y-3">
                {comparison.featureNames.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    {competitor.features[feature] ? (
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-700" />
                    ) : (
                      <Minus className="mt-0.5 h-4 w-4 flex-shrink-0 text-ink-300" />
                    )}
                    <span className="text-xs leading-tight text-ink-700">{feature}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </Reveal>

        <Reveal preset="container" className="mt-16">
          <Reveal preset="item">
            <p className="mb-6 text-lg text-ink-700">Ready to move beyond text moderation?</p>
            <a
              href={demoHref}
              className="inline-block rounded-full bg-ink-900 px-8 py-4 font-bold text-white transition-all duration-200 hover:bg-teal-800 active:scale-[0.98]"
            >
              Schedule a Demo
            </a>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
};
