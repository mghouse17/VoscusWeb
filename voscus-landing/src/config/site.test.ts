import { describe, expect, it } from 'vitest';
import { demoHref, docsHref, siteConfig } from './site';

describe('siteConfig', () => {
  it('uses one canonical logo asset', () => {
    expect(siteConfig.logoPath).toBe('/voscus-logo-2026.png');
    expect(siteConfig.logoPath).not.toContain('logo.png');
  });

  it('keeps primary action links derived from shared contact config', () => {
    expect(demoHref).toBe('mailto:hello@voscus.ai?subject=Demo%20Request');
    expect(docsHref).toBe(
      'mailto:hello@voscus.ai?subject=Documentation%20and%20Integration%20Guides',
    );
  });

  it('keeps navigation explicit and unique', () => {
    const hrefs = siteConfig.navItems.map((item) => item.href);

    expect(new Set(hrefs).size).toBe(hrefs.length);
    expect(hrefs.every((href) => href.startsWith('#'))).toBe(true);
  });
});
