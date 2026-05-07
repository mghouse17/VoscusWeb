import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { siteConfig } from '../config/site';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders the canonical logo and configured link groups', () => {
    render(<Footer logoUrl={siteConfig.logoPath} />);

    expect(screen.getByRole('img', { name: siteConfig.name })).toHaveAttribute(
      'src',
      siteConfig.logoPath,
    );

    for (const group of siteConfig.footerGroups) {
      const heading = screen.getByRole('heading', { name: group.title });
      const section = heading.parentElement;

      expect(section).not.toBeNull();
      for (const link of group.links) {
        expect(within(section as HTMLElement).getByRole('link', { name: link.label })).toHaveAttribute(
          'href',
          link.href,
        );
      }
    }
  });
});
