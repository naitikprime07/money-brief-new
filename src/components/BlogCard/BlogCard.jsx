import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { useArticleLink } from '../../hooks/useArticleLink';
import ArticleImage from '../ArticleImage/ArticleImage';
import './BlogCard.css';

/**
 * Article teaser card. The whole card is one accessible link to the article.
 * Layout: photo with the category pill over it, then a text panel that lifts
 * up over the bottom edge of the photo.
 */
export default function BlogCard({ blog }) {
  const { to, onClick } = useArticleLink(blog.slug);

  return (
    <article className={`blog-card blog-card--${blog.section}`}>
      <Link to={to} onClick={onClick} className="blog-card__link">
        <div className="blog-card__media">
          <ArticleImage
            src={blog.image}
            alt={blog.imageAlt}
            ratio="16 / 10"
            className="blog-card__image"
          />
          <span className="blog-card__cat">{blog.category}</span>
        </div>

        <div className="blog-card__body">
          <h3 className="blog-card__title">{blog.title}</h3>
          <p className="blog-card__excerpt">{blog.excerpt}</p>
          <div className="blog-card__meta">
            <span className="blog-card__facts">
              <time dateTime={blog.isoDate}>{blog.date}</time>
              <span aria-hidden="true">·</span>
              {blog.readTime} min read
            </span>
            <span className="blog-card__cta" aria-hidden="true">
              <FiArrowRight />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
