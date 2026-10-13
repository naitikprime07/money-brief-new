/**
 * Seven plain-language answers, four from Finance and three from Cloud — the
 * list stays inside the site's two sections. Rendered as the FAQ accordion on
 * the home page and emitted as FAQPage structured data for search results.
 */
export const FAQS = [
  /* ------------------------------------------------------------------ */
  /* Finance                                                            */
  /* ------------------------------------------------------------------ */
  {
    question: 'What is compound interest and why does time matter so much?',
    answer:
      'Compound interest is a return earned on your earlier returns as well as on the original amount, so growth accelerates the longer money stays put. A sum invested early has decades of that snowballing working for it, which is why starting soon often beats investing more later. The same effect runs in reverse on debt that is left unpaid.',
  },
  {
    question: 'What is the difference between saving and investing?',
    answer:
      'Saving is money set aside for the near term in a safe, easily reachable place — an emergency fund, a planned purchase, a fee due next year. Investing puts money to work over a longer horizon, accepting that its value will move up and down in exchange for a better chance of beating inflation. Most plans need both, usually in that order.',
  },
  {
    question: 'How do I build a budget that survives past the first month?',
    answer:
      'Start from what you actually spent over the last few months rather than an ideal plan, group the numbers into needs, wants and savings, then give every recurring bill a fixed date. Leave room for irregular costs — repairs, medical bills, festival spending — because a budget with no slack is the one people abandon. Review it monthly, not yearly.',
  },
  {
    question: 'How does inflation change what my savings are worth?',
    answer:
      'Inflation is the slow rise in prices, so the same amount of money buys a little less each year. Cash sitting in a current account loses that purchasing power quietly, which is why idle savings usually need some return — a fixed deposit, a debt fund or a long-term investment — just to stand still. Where you park money depends on when you expect to spend it.',
  },
  /* ------------------------------------------------------------------ */
  /* Cloud                                                              */
  /* ------------------------------------------------------------------ */
  {
    question: 'What is cloud computing, in plain language?',
    answer:
      'Cloud computing means renting computing power over the internet instead of owning it. Instead of buying a server or a hard drive, you pay a provider to store files, run applications or process data on machines you never see. You scale up when you need more and down when you do not, and you stop maintaining hardware yourself.',
  },
  {
    question: 'Is my financial data safe in the cloud?',
    answer:
      'Usually safer than on a single personal device, because reputable providers encrypt data in transit and at rest, isolate it between customers and monitor access around the clock. The weak link is typically the account, not the data centre — reused passwords, disabled two-factor authentication and phishing links. Turn on two-factor, use a unique password and review connected apps regularly.',
  },
  {
    question: 'How does a budgeting app see my bank balance without my password?',
    answer:
      'That is open banking. You grant the app consent, and your bank issues it a limited, revocable connection — often read-only — through a regulated interface. The app never learns your login. Check which accounts are connected every few months, revoke anything you no longer use, and keep the connection scoped to the balances you actually need to track.',
  },
];

/**
 * Separate FAQ list for the /tools page. Kept apart from FAQS so the home
 * page accordion stays inside the two-section scope; these answer questions
 * about the calculators themselves and feed the tools page FAQPage schema.
 */
export const TOOL_FAQS = [
  {
    question: 'How accurate are the results on this page?',
    answer:
      'Each calculator uses the standard formula its guide explains — compound growth for investments, reducing-balance interest for loans, fixed percentages for the budget split and steady compounding for inflation. The math is exact for the numbers you enter; the uncertainty is in the assumptions, because real returns, rates and price rises change over time.',
  },
  {
    question: 'Why are there no currency symbols?',
    answer:
      'The formulas do not depend on any currency. Enter amounts in whichever currency you use — rupees, dollars, euros — and every result comes back in the same one. Only the percentages are universal.',
  },
  {
    question: 'Is my input saved or sent anywhere?',
    answer:
      'No. Every calculator runs entirely in your browser, so the numbers you type never leave your device and nothing is stored between visits. Refresh the page and the fields simply return to their example values.',
  },
  {
    question: 'Can I rely on these numbers for a real decision?',
    answer:
      'Use them as a well-informed first estimate, which is what they are designed for. Before committing to a loan, an investment plan or a budget, check the actual rates, fees and tax rules that apply to you in your country — the guides linked under each calculator explain which details change the outcome.',
  },
];
