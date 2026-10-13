import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowUpRight, FiTrendingUp, FiCloud } from 'react-icons/fi';
import ArticleImage from '../ArticleImage/ArticleImage';
import Container from '../Container/Container';
import { getBlogsBySection, getFeaturedBlog } from '../../data/blogs';
import './HeroSection.css';

/** One large featured guide, plus the newest Cloud and Finance guides beside it. */
const featured = getFeaturedBlog();
const latestCloud = getBlogsBySection('cloud').find((b) => b.id !== featured.id);
const latestFinance = getBlogsBySection('finance').find((b) => b.id !== featured.id);
const SIDE = [latestCloud, latestFinance].filter(Boolean);

/** Scrolling topic strip along the bottom of the hero; each topic has its own dot colour. */
const TOPICS = [
  { label: 'Budgeting', section: 'finance', color: '#d97706' },
  { label: 'Cloud Basics', section: 'cloud', color: '#059669' },
  { label: 'Saving', section: 'finance', color: '#ca8a04' },
  { label: 'Data Privacy', section: 'cloud', color: '#0d9488' },
  { label: 'Investing', section: 'finance', color: '#e11d48' },
  { label: 'Cloud Storage', section: 'cloud', color: '#7c3aed' },
  { label: 'Credit & Loans', section: 'finance', color: '#ea580c' },
  { label: 'Digital Security', section: 'cloud', color: '#16a34a' },
  { label: 'Taxes', section: 'finance', color: '#9333ea' },
  { label: 'Cloud Costs', section: 'cloud', color: '#65a30d' },
];

function StoryCard({ blog, size }) {
  const Icon = blog.section === 'cloud' ? FiCloud : FiTrendingUp;
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
          <p className="hero__eyebrow">The Finance &amp; Cloud Journal</p>

          <h1 className="hero__heading">
            <span className="hero__line">Learn</span>{' '}
            <span className="hero__word hero__word--finance">money.</span>
            <br />
            <span className="hero__line">Understand</span>{' '}
            <span className="hero__line">the</span>{' '}
            <span className="hero__word hero__word--cloud">cloud.</span>
          </h1>

          <p className="hero__subtitle">
            Calm, clear guides for everyday money decisions — and for the digital services
            that now hold, move and protect your money.
          </p>

          <div className="hero__actions">
            <Link to="/blog" className="hero__btn hero__btn--primary">
              Start reading
              <FiArrowRight aria-hidden="true" />
            </Link>
            <Link to={`/blog/${featured.slug}`} className="hero__btn hero__btn--ghost">
              Editor’s pick
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