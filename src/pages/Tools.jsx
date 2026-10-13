import Container from '../components/Container/Container';
import SEO from '../components/SEO/SEO';
import { BudgetCalculator, EmiCalculator, InflationCalculator, SipCalculator } from '../components/Calculators/Calculators';
import FaqSection from '../components/FaqSection/FaqSection';
import { SITE } from '../config/site';
import { TOOL_FAQS } from '../data/faqs';
import './Tools.css';

/** Free money calculators — practical tools that reuse the guide formulas. */
export default function Tools() {
  return (
    <>
      <SEO
        title="Money Calculators"
        description={`${SITE.name} free money tools — estimate investment growth, loan EMI, a 50/30/20 budget split and the effect of inflation, in plain numbers.`}
        path="/tools"
        faqs={TOOL_FAQS}
      />

      <section className="tools page-section">
        <Container>
          <header className="tools__header">
            <span className="eyebrow">Free tools</span>
            <h1 className="tools__title">Money Calculators</h1>
            <p className="tools__lede">
              Quick, transparent estimates for the numbers that come up most in our guides — how savings
              grow, what a loan really costs, how a budget splits, and what inflation quietly takes. Every
              figure is illustrative and currency-neutral, and nothing is stored or sent anywhere.
            </p>
          </header>

          <div className="tools__grid">
            <SipCalculator />
            <EmiCalculator />
            <BudgetCalculator />
            <InflationCalculator />
          </div>

          <p className="tools__note">
            These calculators use standard textbook formulas and round, steady assumptions. Real returns
            vary, and loans, taxes and fees differ between providers and countries — treat every result as
            an estimate, not personalised advice.
          </p>
        </Container>
      </section>

      <FaqSection
        faqs={TOOL_FAQS}
        heading="About These Calculators"
        description="How the tools work, what they assume and what they never store."
      />
    </>
  );
}
