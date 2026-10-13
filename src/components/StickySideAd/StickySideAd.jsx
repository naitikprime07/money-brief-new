import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AdSlot from '../AdSlot/AdSlot';
import './StickySideAd.css';

/**
 * Bottom-right sticky display ad with a scroll arrow.
 *
 * - Only rendered when the page is actually scrollable (content taller than the
 *   viewport), so short pages never show the floating box.
 * - The arrow scrolls the page toward the bottom; once near the bottom it flips
 *   to scroll back to the top. Motion respects prefers-reduced-motion.
 */
export default function StickySideAd() {
  // Persistent layout ad: request a fresh creative on every page view.
  const { pathname } = useLocation();
  const [scrollable, setScrollable] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const measure = () => {
      const doc = document.documentElement;
      const overflow = doc.scrollHeight - window.innerHeight;
      setScrollable(overflow > 1);
      setAtBottom(window.scrollY >= overflow - 8);
    };
    measure();
    window.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    return () => {
      window.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
    };
  }, [pathname]);

  if (!scrollable) return null;

  const scrollTo = (top) => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top, left: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  const handleClick = () => {
    if (atBottom) {
      scrollTo(0);
    } else {
      scrollTo(document.documentElement.scrollHeight);
    }
  };

  return (
    <div className={`sticky-ad${atBottom ? ' sticky-ad--bottom' : ''}`}>
      <button
        type="button"
        className="sticky-ad__arrow"
        onClick={handleClick}
        aria-label={atBottom ? 'Scroll to top' : 'Scroll to bottom'}
        title={atBottom ? 'Scroll to top' : 'Scroll to bottom'}
      >
        <svg
          className="sticky-ad__icon"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          aria-hidden="true"
          focusable="false"
        >
          {atBottom ? (
            /* Scroll to top: bar on top, arrow pointing up */
            <>
              <path d="M5 5h14" />
              <path d="M12 20V9" />
              <path d="M7.5 13.5 12 9l4.5 4.5" />
            </>
          ) : (
            /* Scroll to bottom: arrow pointing down, bar on the base */
            <>
              <path d="M12 4v11" />
              <path d="M7.5 10.5 12 15l4.5-4.5" />
              <path d="M5 19h14" />
            </>
          )}
        </svg>
      </button>
      <AdSlot placement="sticky" refreshKey={pathname} className="sticky-ad__box" />
    </div>
  );
}
