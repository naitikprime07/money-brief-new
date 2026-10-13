/**
 * The site's two sections. This is the single source of truth for the header
 * navigation, the footer topic list, the /blog topic chips, the category pages
 * and the breadcrumb on an article — add or rename a section here only.
 *
 * `name` is the short label used in navigation and on chips; `title` is the
 * heading of that section's page. Article cards carry the same `name` as their
 * eyebrow, so a card and its section always read identically.
 */
export const CATEGORIES = [
  {
    slug: 'finance',
    name: 'Finance',
    title: 'Personal Finance',
    description: 'Saving, investing, credit, budgeting and tax basics explained in plain language.',
  },
  {
    slug: 'cloud',
    name: 'Cloud',
    title: 'Cloud & Your Money',
    description: 'How cloud computing works, what it costs and how it protects — or exposes — your data.',
  },
];

export const getCategoryBySlug = (slug) => CATEGORIES.find((category) => category.slug === slug);
