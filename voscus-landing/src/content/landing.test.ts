import { describe, expect, it } from 'vitest';
import { landingContent } from './landing';

describe('landingContent', () => {
  it('keeps comparison matrices complete for every competitor', () => {
    for (const competitor of landingContent.comparison.competitors) {
      expect(Object.keys(competitor.features).sort()).toEqual(
        [...landingContent.comparison.featureNames].sort(),
      );
    }
  });

  it('keeps copy free of common mojibake artifacts', () => {
    const serialized = JSON.stringify(landingContent);

    expect(serialized).not.toMatch(/[�â€™â€œâ€]/);
  });

  it('keeps CTA trust indicators populated', () => {
    expect(landingContent.cta.trust).toHaveLength(3);
    expect(landingContent.cta.trust.every((item) => item.label && item.value)).toBe(true);
  });
});
