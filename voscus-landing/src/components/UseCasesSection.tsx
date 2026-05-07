import React from 'react';
import { Code2, MessageSquare, Stethoscope, TrendingUp, Workflow } from 'lucide-react';
import { landingContent } from '../content/landing';
import { Reveal } from './Motion';

const useCaseIcons = {
  trending: TrendingUp,
  health: Stethoscope,
  code2: Code2,
  workflow: Workflow,
  message: MessageSquare,
} as const;

export const UseCasesSection: React.FC = () => {
  const { useCases } = landingContent;

  return (
    <section className="use-case-surface relative overflow-hidden py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal preset="container" className="mb-16 max-w-3xl">
          <Reveal preset="item" className="mb-4">
            <span className="inline-block rounded-full border border-black/15 bg-white px-3 py-1 text-sm font-bold text-black">
              {useCases.eyebrow}
            </span>
          </Reveal>

          <Reveal as="h2" preset="item" className="mb-6 text-4xl font-bold text-black md:text-5xl">
            {useCases.title}
          </Reveal>

          <Reveal as="p" preset="item" className="max-w-2xl text-lg leading-relaxed text-black">
            {useCases.description}
          </Reveal>
        </Reveal>

        <Reveal preset="container" className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {useCases.items.map((useCase, idx) => {
            const Icon = useCaseIcons[useCase.icon];
            return (
              <Reveal
                key={useCase.title}
                preset="item"
                className={`group rounded-[1.6rem] border border-ink-900/10 bg-white/82 p-8 shadow-use-case transition-all duration-300 hover:-translate-y-1 hover:border-teal-700/25 hover:bg-white ${
                  idx === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <div className="flex gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 transition-colors group-hover:bg-signal-100">
                      <Icon className="h-6 w-6 text-black" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black">{useCase.title}</h3>
                  </div>
                </div>

                <p className="mb-6 text-black">{useCase.description}</p>

                <div>
                  <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-black">
                    Key Controls
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-black transition-colors group-hover:bg-signal-100"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
};
