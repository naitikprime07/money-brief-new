/**
 * The four Money Calculators shown on /tools. Each card is self-contained:
 * plain number inputs, live results computed with the standard textbook
 * formulas used across the site's guides. Amounts are deliberately
 * currency-neutral (no symbols), matching the editorial rule that all
 * figures are illustrative, not advice.
 */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import './Calculators.css';

const num = (value) => {
  const n = parseFloat(value);
  return Number.isFinite(n) && n > 0 ? n : 0;
};

const fmt = (value) =>
  new Intl.NumberFormat('en', { maximumFractionDigits: 0 }).format(Math.max(0, Math.round(value)));

function Field({ label, suffix, value, onChange, min = 0, max }) {
  return (
    <label className="calc__field">
      <span className="calc__label">{label}</span>
      <span className="calc__inputwrap">
        <input
          className="calc__input"
          type="number"
          inputMode="decimal"
          value={value}
          min={min}
          max={max}
          onChange={(event) => onChange(event.target.value)}
        />
        {suffix && <span className="calc__suffix">{suffix}</span>}
      </span>
    </label>
  );
}

function Results({ rows }) {
  return (
    <div className="calc__results" aria-live="polite">
      {rows.map((row) => (
        <div key={row.label} className={`calc__row${row.highlight ? ' calc__row--highlight' : ''}`}>
          <span className="calc__row-label">{row.label}</span>
          <strong className="calc__row-value">{row.value}</strong>
        </div>
      ))}
    </div>
  );
}

function CalcCard({ title, description, guide, fields, rows }) {
  return (
    <article className="calc">
      <header className="calc__header">
        <h2 className="calc__title">{title}</h2>
        <p className="calc__desc">{description}</p>
      </header>
      <div className="calc__fields">{fields}</div>
      <Results rows={rows} />
      {guide && (
        <Link className="calc__guide" to={`/blog/${guide.slug}`}>
          Read the guide: {guide.label}
          <FiArrowRight aria-hidden="true" />
        </Link>
      )}
    </article>
  );
}

/** Future value of a fixed monthly investment (the standard SIP formula). */
export function SipCalculator() {
  const [monthly, setMonthly] = useState('500');
  const [rate, setRate] = useState('12');
  const [years, setYears] = useState('10');

  const p = num(monthly);
  const r = num(rate) / 100 / 12;
  const n = Math.round(num(years)) * 12;
  const future = r === 0 || n === 0 ? p * n : p * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  const invested = p * n;

  return (
    <CalcCard
      title="Investment Growth (SIP)"
      description="What a fixed amount invested every month can become, if it grows at a steady yearly return."
      guide={{ label: 'How Compound Interest Works', slug: 'how-compound-interest-works' }}
      fields={
        <>
          <Field label="Monthly investment" value={monthly} onChange={setMonthly} max={1e12} />
          <Field label="Expected return per year" suffix="%" value={rate} onChange={setRate} max={100} />
          <Field label="Years" value={years} onChange={setYears} max={60} />
        </>
      }
      rows={[
        { label: 'Estimated value at the end', value: fmt(future), highlight: true },
        { label: 'Total you invest', value: fmt(invested) },
        { label: 'Estimated growth', value: fmt(Math.max(future - invested, 0)) },
      ]}
    />
  );
}

/** Standard reducing-balance EMI: P·r·(1+r)^n / ((1+r)^n − 1). */
export function EmiCalculator() {
  const [amount, setAmount] = useState('100000');
  const [rate, setRate] = useState('9');
  const [years, setYears] = useState('5');

  const p = num(amount);
  const r = num(rate) / 100 / 12;
  const n = Math.round(num(years)) * 12;
  const factor = Math.pow(1 + r, n);
  const emi = n === 0 || p === 0 ? 0 : r === 0 ? p / n : (p * r * factor) / (factor - 1);
  const total = emi * n;

  return (
    <CalcCard
      title="Loan EMI"
      description="The fixed monthly payment that clears a loan over a chosen term, plus what it costs in total interest."
      guide={{ label: 'Understanding Loans & Interest Rates', slug: 'understanding-loans-and-interest-rates' }}
      fields={
        <>
          <Field label="Loan amount" value={amount} onChange={setAmount} max={1e12} />
          <Field label="Interest rate per year" suffix="%" value={rate} onChange={setRate} max={100} />
          <Field label="Term" suffix="years" value={years} onChange={setYears} max={40} />
        </>
      }
      rows={[
        { label: 'Monthly EMI', value: fmt(emi), highlight: true },
        { label: 'Total interest paid', value: fmt(Math.max(total - p, 0)) },
        { label: 'Total repaid', value: fmt(total) },
      ]}
    />
  );
}

/** The 50 / 30 / 20 rule applied to a monthly income. */
export function BudgetCalculator() {
  const [income, setIncome] = useState('3000');
  const i = num(income);

  return (
    <CalcCard
      title="50 / 30 / 20 Budget Split"
      description="A first-pass monthly plan: about half on needs, under a third on wants, and at least a fifth saved or invested."
      guide={{ label: 'How to Create a Monthly Budget', slug: 'how-to-create-a-monthly-budget' }}
      fields={<Field label="Monthly income (after tax)" value={income} onChange={setIncome} max={1e12} />}
      rows={[
        { label: 'Needs — rent, food, bills, travel (50%)', value: fmt(i * 0.5), highlight: true },
        { label: 'Wants — dining, fun, upgrades (30%)', value: fmt(i * 0.3) },
        { label: 'Save & invest (20%)', value: fmt(i * 0.2) },
      ]}
    />
  );
}

/** What today's money will feel like after years of steady inflation. */
export function InflationCalculator() {
  const [amount, setAmount] = useState('1000');
  const [rate, setRate] = useState('5');
  const [years, setYears] = useState('10');

  const a = num(amount);
  const i = num(rate) / 100;
  const n = Math.round(num(years));
  const futureCost = a * Math.pow(1 + i, n);
  const feelsLike = futureCost === 0 ? a : (a * a) / futureCost;

  return (
    <CalcCard
      title="Inflation Effect"
      description="What a basket you could buy today costs after years of steady price rises — and what your idle cash is really worth."
      guide={{ label: 'How Inflation Affects Your Money', slug: 'how-inflation-affects-your-money' }}
      fields={
        <>
          <Field label="Amount today" value={amount} onChange={setAmount} max={1e12} />
          <Field label="Inflation per year" suffix="%" value={rate} onChange={setRate} max={100} />
          <Field label="Years" value={years} onChange={setYears} max={60} />
        </>
      }
      rows={[
        { label: `That basket costs after ${n} ${n === 1 ? 'year' : 'years'}`, value: fmt(futureCost), highlight: true },
        { label: `Today's amount will then feel like`, value: fmt(feelsLike) },
        { label: 'Purchasing power lost', value: `${fmt(Math.max((1 - feelsLike / (a || 1)) * 100, 0))}%` },
      ]}
    />
  );
}
