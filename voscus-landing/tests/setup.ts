import '@testing-library/jest-dom/vitest';
import React from 'react';
import { vi } from 'vitest';

vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }: { src: string | { src: string }; alt: string }) =>
    React.createElement('img', {
      src: typeof src === 'string' ? src : src.src,
      alt,
      ...props,
    }),
}));

vi.mock('next/link', () => ({
  default: ({
    href,
    children,
    ...props
  }: {
    href: string | { pathname?: string };
    children: React.ReactNode;
  }) =>
    React.createElement(
      'a',
      {
        href: typeof href === 'string' ? href : href.pathname ?? '#',
        ...props,
      },
      children,
    ),
}));
