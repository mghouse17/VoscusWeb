import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ProblemSection } from '../components/ProblemSection';
import { ProductSection } from '../components/ProductSection';
import { WhyVoscusSection } from '../components/WhyVoscusSection';
import { ComparisonSection } from '../components/ComparisonSection';
import { UseCasesSection } from '../components/UseCasesSection';
import { CTASection } from '../components/CTASection';
import { Footer } from '../components/Footer';
import { siteConfig } from '../config/site';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header logoUrl={siteConfig.logoPath} />
      <Hero logoUrl={siteConfig.logoPath} />
      <ProblemSection />
      <ProductSection />
      <WhyVoscusSection />
      <ComparisonSection />
      <UseCasesSection />
      <CTASection />
      <Footer logoUrl={siteConfig.logoPath} />
    </main>
  );
}
