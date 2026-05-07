import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { demoHref, siteConfig } from '../config/site';
import { Header } from './Header';

describe('Header', () => {
  it('renders the canonical logo and shared navigation', () => {
    render(<Header logoUrl={siteConfig.logoPath} />);

    expect(screen.getByRole('img', { name: siteConfig.name })).toHaveAttribute(
      'src',
      siteConfig.logoPath,
    );

    for (const item of siteConfig.navItems) {
      expect(screen.getByRole('link', { name: item.label })).toHaveAttribute('href', item.href);
    }

    expect(screen.getByRole('link', { name: /book a demo/i })).toHaveAttribute('href', demoHref);
  });

  it('opens the mobile menu and closes it after a nav item is selected', async () => {
    const user = userEvent.setup();
    render(<Header logoUrl={siteConfig.logoPath} />);

    expect(screen.getAllByRole('link', { name: /book a demo/i })).toHaveLength(1);

    await user.click(screen.getByRole('button', { name: /toggle menu/i }));
    expect(screen.getAllByRole('link', { name: /book a demo/i })).toHaveLength(2);

    const problemLinks = screen.getAllByRole('link', { name: 'Problem' });
    await user.click(problemLinks[problemLinks.length - 1]);

    expect(screen.getAllByRole('link', { name: /book a demo/i })).toHaveLength(1);
  });
});
