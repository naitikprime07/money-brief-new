import HeroSection from '../components/HeroSection/HeroSection';
import BlogGrid from '../components/BlogGrid/BlogGrid';
import CategorySection from '../components/CategorySection/CategorySection';
import FaqSection from '../components/FaqSection/FaqSection';
import SEO from '../components/SEO/SEO';
import { SITE } from '../config/site';
import { BLOGS } from '../data/blogs';
import { FAQS } from '../data/faqs';

const LATEST_COUNT = 6;

export default function Home() {
  const latest = BLOGS.filter((blog) => blog.section === 'finance').slice(0, LATEST_COUNT);
  const latestCloud = BLOGS.filter((blog) => blog.section === 'cloud').slice(0, LATEST_COUNT);
  const latestCrm = BLOGS.filter((blog) => blog.section === 'crm').slice(0, LATEST_COUNT);

  return (
    <>
      <SEO path="/" description={SITE.description} faqs={FAQS} />

      <HeroSection />

      <CategorySection
        id="latest"
        eyebrow="Fresh reads"
        title="Latest Financial Articles"
        action={{ label: 'View all articles', to: '/blog' }}
      >
        <BlogGrid blogs={latest} />
      </CategorySection>

      {latestCloud.length > 0 && (
        <CategorySection
          id="cloud"
          eyebrow="Cloud & your money"
          title="Latest Cloud Articles"
          description="How the cloud, apps and digital records now sit underneath everyday money — and how to keep that data safe."
          action={{ label: 'Browse Cloud articles', to: '/category/cloud' }}
        >
          <BlogGrid blogs={latestCloud} />
        </CategorySection>
      )}

      {latestCrm.length > 0 && (
        <CategorySection
          id="crm"
          eyebrow="CRM software"
          title="Latest CRM Software Articles"
          description="Customer relationship management software explained — how it works, what it costs and how to get real value from it."
          action={{ label: 'Browse CRM articles', to: '/category/crm' }}
        >
          <BlogGrid blogs={latestCrm} />
        </CategorySection>
      )}

      <FaqSection />
    </>
  );
}
