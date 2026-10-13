import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiTrendingUp, FiCloud, FiUsers } from 'react-icons/fi';
import ArticleImage from '../ArticleImage/ArticleImage';
import Container from '../Container/Container';
import { getBlogsBySection, getFeaturedBlog } from '../../data/blogs';
import './HeroSection.css';

/** One large featured guide, plus the newest Cloud and CRM guides beside it. */
const featured = getFeaturedBlog();
const latestCloud = getBlogsBySection('cloud').find((b) => b.id !== featured.id);
const latestCrm = getBlogsBySection('crm').find((b) => b.id !== featured.id);
const SIDE = [latestCloud, latestCrm].filter(Boolean);

/** Scrolling topic strip along the bottom of the hero; each topic has its own dot colour. */
const TOPICS = [
  { label: 'Budgeting', section: 'finance', color: '#d97706' },
  { label: 'Cloud Basics', section: 'cloud', color: '#059669' },
  { label: 'CRM Software', section: 'crm', color: '#9f1239' },
  { label: 'Saving', section: 'finance', color: '#ca8a04' },
  { label: 'Data Privacy', section: 'cloud', color: '#0d9488' },
  { label: 'Investing', section: 'finance', color: '#e11d48' },
  { label: 'Sales Pipeline', section: 'crm', color: '#be123c' },
  { label: 'Cloud Storage', section: 'cloud', color: '#7c3aed' },
  { label: 'Credit & Loans', section: 'finance', color: '#ea580c' },
  { label: 'Digital Security', section: 'cloud', color: '#16a34a' },
  { label: 'Taxes', section: 'finance', color: '#9333ea' },
  { label: 'Cloud Costs', section: 'cloud', color: '#65a30d' },
];

const SECTION_ICONS = { finance: FiTrendingUp, cloud: FiCloud, crm: FiUsers };

function StoryCard({ blog, size }) {
  const Icon = SECTION_ICONS[blog.section] ?? FiTrendingUp;
  return (
    <Link to={`/blog/${blog.slug}`} className={`hero__story hero__story--${size} hero__story--${blog.section}`}>
      <ArticleImage
        src={blog.image}
        alt={blog.imageAlt}
        ratio={size === 'big' ? '4 / 3' : '1 / 1'}
        className="hero__story-image"
      />
      <span className="hero__story-shade" aria-hidden="true" />
      <span className="hero__story-body">
        <span className="hero__story-cat">
          <Icon aria-hidden="true" />
          {blog.category}
        </span>
        <span className="hero__story-title">{blog.title}</span>
      </span>
      <span className="hero__story-arrow" aria-hidden="true">
        <FiArrowUpRight />
      </span>
    </Link>
  );
}

/** Editorial hero: big type on the left, a photo mosaic of guides on the right. */
export default function HeroSection() {
  return (
    <section className="hero">
      <span className="hero__glow hero__glow--finance" aria-hidden="true" />
      <span className="hero__glow hero__glow--cloud" aria-hidden="true" />

      <Container className="hero__inner">
        <div className="hero__main">
          <p className="hero__eyebrow">The Finance, Cloud &amp; CRM Journal</p>

          <h1 className="hero__heading">
            <span className="hero__line">Discover</span>{' '}
            <span className="hero__word hero__word--finance">finance.</span>
            <br />
            <span className="hero__line">Unlock </span>{' '}
            <span className="hero__line">the</span>{' '}
            <span className="hero__word hero__word--cloud">technology.</span>
          </h1>

          <p className="hero__subtitle">
            Explore financial knowledge, understand cloud technology, and discover the digital tools shaping modern business.
          </p>

          <div className="hero__actions">
            <Link to="/blog" className="hero__btn hero__btn--primary">
              <svg viewBox="0 0 24 24" className="hero__btn-arrow hero__btn-arrow--in" aria-hidden="true">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
              </svg>
              <span className="hero__btn-text">Start reading</span>
              <span className="hero__btn-circle" aria-hidden="true" />
              <svg viewBox="0 0 24 24" className="hero__btn-arrow hero__btn-arrow--out" aria-hidden="true">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="hero__mosaic">
          <StoryCard blog={featured} size="big" />
          <div className="hero__side">
            {SIDE.map((blog) => (
              <StoryCard key={blog.id} blog={blog} size="small" />
            ))}
          </div>
        </div>
      </Container>

      <div className="hero__marquee" aria-label="Topics we cover">
        <ul className="hero__marquee-track">
          {[...TOPICS, ...TOPICS].map((topic, index) => (
            <li
              key={`${topic.label}-${index}`}
              className={`hero__marquee-item hero__marquee-item--${topic.section}`}
              style={{ '--topic-dot': topic.color }}
              aria-hidden={index >= TOPICS.length ? 'true' : undefined}
            >
              {topic.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}