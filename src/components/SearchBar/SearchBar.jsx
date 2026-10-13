import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiX } from 'react-icons/fi';
import { BLOGS } from '../../data/blogs';
import { useArticleLink } from '../../hooks/useArticleLink';
import './SearchBar.css';

const MAX_RESULTS = 8;

/** Case-insensitive match on title, category and excerpt. */
function searchArticles(query) {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  return BLOGS
    .filter((blog) =>
      [blog.title, blog.category, blog.excerpt].some((text) => text.toLowerCase().includes(q)),
    )
    .slice(0, MAX_RESULTS);
}

function SearchResult({ blog, onNavigate }) {
  const { to, onClick } = useArticleLink(blog.slug);
  return (
    <li>
      <Link
        to={to}
        onClick={(event) => {
          onClick(event);
          onNavigate();
        }}
        className="search-overlay__result"
      >
        <span className="search-overlay__result-cat">{blog.category}</span>
        <span className="search-overlay__result-title">{blog.title}</span>
      </Link>
    </li>
  );
}

/** Header search icon that opens a full-screen article search overlay. */
export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const results = searchArticles(query);

  // Freeze the page behind the overlay and close on Escape.
  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => event.key === 'Escape' && close();
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    inputRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function close() {
    setOpen(false);
    setQuery('');
  }

  return (
    <>
      <button
        type="button"
        className="header__search-btn"
        onClick={() => setOpen(true)}
        aria-label="Search articles"
        title="Search articles"
      >
        <FiSearch aria-hidden="true" />
      </button>

      {open && (
        <div
          className="search-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Search articles"
          onClick={(event) => event.target === event.currentTarget && close()}
        >
          <button type="button" className="search-overlay__close" onClick={close} aria-label="Close search">
            <FiX aria-hidden="true" />
          </button>

          <div className="search-overlay__inner">
            <div className="search-overlay__field">
              <FiSearch className="search-overlay__icon" aria-hidden="true" />
              <input
                ref={inputRef}
                type="search"
                className="search-overlay__input"
                placeholder="Search articles…"
                aria-label="Search articles"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>

            {query.trim().length >= 2 && (
              results.length > 0 ? (
                <ul className="search-overlay__results">
                  {results.map((blog) => (
                    <SearchResult key={blog.id} blog={blog} onNavigate={close} />
                  ))}
                </ul>
              ) : (
                <p className="search-overlay__empty">No articles found.</p>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
}
