import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import BlogGrid from '../components/BlogGrid/BlogGrid';
import Container from '../components/Container/Container';
import SEO from '../components/SEO/SEO';
import { getBlogsBySection } from '../data/blogs';
import { CATEGORIES, getCategoryBySlug } from '../data/categories';
import { SITE } from '../config/site';
import NotFound from './NotFound';
import './Blog.css';

/** All Articles order: topics alternate Finance → Cloud → CRM down the same grid. */
function interleaveBySection() {
  const queues = CATEGORIES.map((item) => getBlogsBySection(item.slug));
  const mixed = [];
  for (let i = 0; queues.some((queue) => queue.length > i); i += 1) {
    queues.forEach((queue) => {
      if (queue[i]) mixed.push(queue[i]);
    });
  }
  return mixed;
}

const ALL_MIXED = interleaveBySection();

/** All Articles starts with 6 cards; each "Load more" reveals 6 more. */
const INITIAL_COUNT = 8;
const MORE_COUNT = 8;

/** Article listing — all articles at /blog, or one section at /category/:category. */
export default function Blog() {
  const { category: categorySlug } = useParams();
  const category = categorySlug ? getCategoryBySlug(categorySlug) : null;

  if (categorySlug && !category) return <NotFound />;

  const blogs = category ? getBlogsBySection(category.slug) : ALL_MIXED;
  const [visible, setVisible] = useState(INITIAL_COUNT);

  useEffect(() => {
    setVisible(INITIAL_COUNT);
  }, [categorySlug]);

  const shown = category ? blogs : blogs.slice(0, visible);
  const remaining = category ? 0 : blogs.length - visible;
  const title = category ? category.title : 'All Articles';
  const description = category
    ? category.description
    : `Every ${SITE.name} guide — personal finance explained in plain language, how the cloud behind modern money works, and the business software teams rely on.`;

  return (
    <>
      <SEO title={title} description={description} path={category ? `/category/${category.slug}` : '/blog'} />

      <section className="listing page-section" key={categorySlug ?? "all"}>
        <Container>
          {category && (
            <Link to="/blog" className="listing__back">
              <FiArrowLeft aria-hidden="true" />
              Back to all articles
            </Link>
          )}

          <header className="listing__header">
            <span className="eyebrow">{category ? 'Topic' : 'Library'}</span>
            <h1 className="listing__title">{title}</h1>
            <p className="listing__description">{description}</p>
            <p className="listing__count">
              {blogs.length} {blogs.length === 1 ? 'article' : 'articles'}
            </p>
          </header>

          {!category && (
            <nav className="listing__topics" aria-label="Browse by topic">
              {CATEGORIES.map((item) => (
                <Link key={item.slug} to={`/category/${item.slug}`} className="listing__chip">
                  {item.name}
                </Link>
              ))}
            </nav>
          )}

          <BlogGrid blogs={shown} />

          {remaining > 0 && (
            <div className="listing__more">
              <button
                type="button"
                className="listing__more-btn"
                onClick={() => setVisible((v) => v + MORE_COUNT)}
              >
                Load more articles
              </button>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
