import React from 'react';
import { AlertCircle, Code, Database, Globe, Mail } from 'lucide-react';
import { landingContent } from '../content/landing';
import { Reveal } from './Motion';

const riskIcons = {
  mail: Mail,
  code: Code,
  database: Database,
  globe: Globe,
} as const;

export const ProblemSection: React.FC = () => {
  const { problem } = landingContent;

  return (
    <section id="problem" className="relative overflow-hidden bg-ink-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal preset="container" className="mb-16 max-w-3xl">
          <Reveal preset="item" className="mb-4">
            <span className="inline-block rounded-full border border-signal-300/40 bg-signal-50 px-3 py-1 text-sm font-bold text-signal-500">
              {problem.eyebrow}
            </span>
          </Reveal>

          <Reveal
            as="h2"
            preset="item"
            className="mb-6 text-4xl font-bold text-ink-900 md:text-5xl"
          >
            {problem.title}
          </Reveal>

          <Reveal as="p" preset="item" className="max-w-2xl text-lg leading-relaxed text-ink-700">
            {problem.description}
          </Reveal>
        </Reveal>

        <Reveal preset="container" className="mb-16 grid grid-cols-1 gap-5 md:grid-cols-2">
          {problem.risks.map((risk) => {
            const Icon = riskIcons[risk.icon];
            return (
              <Reveal key={risk.title} preset="item" className="interactive-card group rounded-2xl p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 transition-colors group-hover:bg-teal-100">
                      <Icon className="h-6 w-6 text-teal-700" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 text-lg font-bold text-ink-900">{risk.title}</h3>
                    <p className="text-ink-600">{risk.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </Reveal>

        <Reveal preset="container" className="relative">
          <Reveal preset="item" className="insight-panel rounded-[2rem] p-8 text-white">
            <div className="flex gap-4">
              <AlertCircle className="mt-1 h-6 w-6 flex-shrink-0 text-signal-200" />
              <div>
                <h3 className="mb-2 text-lg font-bold text-white">The Question Competitors Don&apos;t Answer</h3>
                <p className="text-teal-50">{problem.insight}</p>
              </div>
            </div>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
};
