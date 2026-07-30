export const siteConfig = {
  name: 'Voscus',
  logoPath: '/icon.png',
  contactEmail: 'hello@voscus.ai',
  demoSubject: 'Demo Request',
  navItems: [
    { label: 'Problem', href: '#problem' },
    { label: 'Product', href: '#product' },
    { label: 'Why Voscus', href: '#why-voscus' },
    { label: 'Comparison', href: '#comparison' },
  ],
  footerGroups: [
    {
      title: 'Product',
      links: [
        { label: 'Platform', href: '#product' },
        { label: 'Documentation', href: 'mailto:hello@voscus.ai?subject=Documentation Request' },
        { label: 'Pricing', href: 'mailto:hello@voscus.ai?subject=Pricing Request' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Blog', href: 'mailto:hello@voscus.ai?subject=Blog Updates' },
        { label: 'Careers', href: 'mailto:hello@voscus.ai?subject=Careers' },
        { label: 'Security', href: 'mailto:hello@voscus.ai?subject=Security Information' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { label: 'hello@voscus.ai', href: 'mailto:hello@voscus.ai' },
        { label: 'Twitter', href: 'mailto:hello@voscus.ai?subject=Social Links' },
        { label: 'LinkedIn', href: 'mailto:hello@voscus.ai?subject=Social Links' },
      ],
    },
  ],
  legalLinks: [
    { label: 'Privacy', href: 'mailto:hello@voscus.ai?subject=Privacy Policy' },
    { label: 'Terms', href: 'mailto:hello@voscus.ai?subject=Terms' },
  ],
} as const;

export const demoHref = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
  siteConfig.demoSubject,
)}`;

export const docsHref = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
  'Documentation and Integration Guides',
)}`;
