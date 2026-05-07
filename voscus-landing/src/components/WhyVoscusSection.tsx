import React from 'react';
import { Check, X } from 'lucide-react';
import { landingContent } from '../content/landing';
import { Reveal } from './Motion';

export const WhyVoscusSection: React.FC = () => {
  const { whyVoscus } = landingContent;

  return (
    <section id="why-voscus" className="relative overflow-hidden bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal preset="container" className="mb-16 max-w-3xl">
          <Reveal preset="itemTight" className="mb-4">
            <span className="inline-block rounded-full border border-signal-300/40 bg-signal-50 px-3 py-1 text-sm font-bold text-signal-500">
              {whyVoscus.eyebrow}
            </span>
          </Reveal>

          <Reveal
            as="h2"
            preset="itemTight"
            className="mb-6 text-4xl font-bold text-ink-900 md:text-5xl"
          >
            {whyVoscus.title}
          </Reveal>

          <Reveal as="p" preset="itemTight" className="max-w-2xl text-lg leading-relaxed text-ink-700">
            {whyVoscus.description}
          </Reveal>
        </Reveal>

        <Reveal
          preset="container"
          className="overflow-hidden rounded-[1.6rem] border border-ink-900/10 bg-white shadow-table"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-ink-900/10 bg-ink-50">
                  <th className="px-6 py-4 text-left text-sm font-bold text-ink-900">
                    Capability
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-teal-800">
                    Voscus
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-ink-600">
                    Legacy Guardrails
                  </th>
                </tr>
              </thead>
              <tbody>
                {whyVoscus.comparisons.map((row) => (
                  <Reveal
                    as="tr"
                    key={row.feature}
                    preset="itemTight"
                    className="border-b border-ink-900/5 transition-colors duration-200 hover:bg-teal-50/55"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-semibold text-ink-900">{row.feature}</p>
                        {'details' in row && row.details ? (
                          <p className="mt-1 text-sm text-ink-600">{row.details}</p>
                        ) : null}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.voscus === 'boolean' ? (
                        row.voscus ? (
                          <Check className="mx-auto h-5 w-5 text-teal-700" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-ink-300" />
                        )
                      ) : (
                        <span className="text-sm font-bold text-teal-700">{row.voscus}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.competitors === 'boolean' ? (
                        row.competitors ? (
                          <Check className="mx-auto h-5 w-5 text-ink-300" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-ink-300" />
                        )
                      ) : (
                        <span className="text-sm font-semibold text-ink-600">
                          {row.competitors}
                        </span>
                      )}
                    </td>
                  </Reveal>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal preset="container" className="mt-16">
          <Reveal preset="itemTight" className="rounded-[2rem] bg-deep-panel p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">The Core Difference</h3>
            <p className="mb-4 text-lg leading-relaxed text-teal-50">
              {whyVoscus.insight}
            </p>
            <p className="text-lg leading-relaxed text-teal-50">
              {whyVoscus.insightFollowup}
            </p>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
};
