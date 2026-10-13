import { Outlet, useLocation } from 'react-router-dom';
import AdSlot from '../components/AdSlot/AdSlot';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import StickySideAd from '../components/StickySideAd/StickySideAd';

/** Pages that must stay ad-free: legal/info pages and the 404 screen. */
const AD_FREE_PREFIXES = ['/about', '/terms', '/privacy'];
const KNOWN_ROUTES = /^\/(?:blog(?:\/[^/]+)?|category\/[^/]+|tools|about|terms|privacy)?$/;

function isAdFree(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/';
  if (AD_FREE_PREFIXES.some((p) => path === p || path.startsWith(`${p}/`))) return true;
  // Unknown routes render the NotFound page — keep it ad-free as well.
  return !KNOWN_ROUTES.test(path);
}

/** Shared page frame: header, top ad, page content, footer. */
export default function MainLayout() {
  // Persistent layout ads request a fresh creative on every page view.
  const { pathname } = useLocation();
  const adFree = isAdFree(pathname);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollToTop />
      <Header />

      {!adFree && (
        <div className="ad-band">
          <Container>
            <AdSlot placement="top" refreshKey={pathname} />
          </Container>
        </div>
      )}

      <main id="main">
        <Outlet />
      </main>

      {!adFree && <StickySideAd />}

      <Footer />
    </>
  );
}
