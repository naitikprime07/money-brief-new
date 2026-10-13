import { CATEGORIES } from '../data/categories';

export const SITE = {
  name: 'Finverra',
  tagline: 'Finance, Cloud & CRM — explained simply',
  description:
    'Finverra explains personal finance, cloud computing and CRM software in plain language — practical guides, comparisons and tools for everyday money and business decisions.',
  /** Used to build canonical and Open Graph URLs. Set VITE_SITE_URL in production. */
  url: (import.meta.env.VITE_SITE_URL || 'https://finverra.com').replace(/\/$/, ''),
  defaultImage: '/images/og/og-default.png',
  locale: 'en_US',
};

/**
 * Header navigation: the home page, one link per section, then About. Built
 * from CATEGORIES so the nav can never list a section the site no longer has.
 */
export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  ...CATEGORIES.map((category) => ({ label: category.name, to: `/category/${category.slug}` })),
  { label: 'Calculators', to: '/tools' },
  { label: 'About', to: '/about' },
];
