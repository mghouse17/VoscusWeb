import React from 'react';
import {
  Code,
  Cpu,
  Eye,
  GitBranch,
  Target,
  Users,
} from 'lucide-react';
import { landingContent } from '../content/landing';
import { Reveal } from './Motion';

const featureIcons = {
  eye: Eye,
  target: Target,
  cpu: Cpu,
  split: GitBranch,
  code: Code,
  users: Users,
} as const;

export const ProductSection: React.FC = () => {
  const { product } = landingContent;

  return (
    <section id="product" className="relative bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal
          preset="container"
          className="mb-16 grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end"
        >
          <Reveal preset="item" className="mb-4">
            <span className="inline-block rounded-full border border-teal-700/15 bg-teal-50 px-3 py-1 text-sm font-bold text-teal-800">
              {product.eyebrow}
            </span>

            <h2 className="mt-5 text-4xl font-bold text-ink-900 md:text-5xl">
              {product.title}
            </h2>
          </Reveal>

          <Reveal
            as="p"
            preset="item"
            className="max-w-2xl text-lg leading-relaxed text-ink-700 lg:justify-self-end"
          >
            {product.description}
          </Reveal>
        </Reveal>

        <Reveal
          preset="container"
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_1.05fr]"
        >
          {product.features.map((feature, idx) => {
            const Icon = featureIcons[feature.icon];
            return (
              <Reveal
                key={feature.title}
                preset="item"
                className={`group rounded-[1.6rem] border border-ink-900/10 bg-ink-50/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-card-lift ${
                  idx === 0 || idx === 5 ? 'lg:row-span-2' : ''
                }`}
              >
                <div className="mb-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-icon transition-all duration-300 group-hover:bg-teal-50">
                    <Icon className="h-7 w-7 text-teal-700" />
                  </div>
                </div>

                <h3 className="mb-3 text-xl font-bold text-ink-900">{feature.title}</h3>

                <p className="leading-relaxed text-ink-600">{feature.description}</p>
              </Reveal>
            );
          })}
        </Reveal>

        <Reveal preset="container" className="mt-20">
          <Reveal preset="item" className="mb-12">
            <h3 className="mb-4 text-3xl font-bold text-ink-900">
              Pre-Execution Decision Dashboard
            </h3>
            <p className="max-w-2xl text-lg text-ink-700">
              Every action assessed, every decision explained, before anything runs
            </p>
          </Reveal>

          <Reveal preset="container" className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {product.metrics.map((metric) => (
              <Reveal
                key={metric.label}
                preset="item"
                className={`metric-card rounded-2xl p-6 ${
                  metric.pulse ? 'border-teal-700/25 bg-gradient-to-br from-teal-50 to-white' : ''
                }`}
              >
                <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-teal-700">
                  {metric.label}
                </p>
                <p
                  className={`text-3xl font-bold mb-1 ${
                    metric.pulse ? 'text-ink-900 metric-pulse' : 'text-ink-900'
                  }`}
                >
                  {metric.value}
                </p>
                <p className="text-xs text-ink-600">{metric.sublabel}</p>
              </Reveal>
            ))}
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
};
