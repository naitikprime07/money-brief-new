/**
 * Article data. UI components receive these objects through props —
 * add, remove or edit articles here without touching any component.
 *
 * The site has exactly two sections:
 *   - 'finance' (category 'Finance') — personal finance, saving, investing, credit and tax basics
 *   - 'cloud'   (category 'Cloud')   — cloud computing and how it relates to money and data
 *
 * Content blocks: { type: 'p'|'h2'|'h3', text } | { type: 'ul'|'ol', items } | { type: 'callout', title, text }
 * All content is general and educational; it is not personalised financial advice.
 */

const p = (text) => ({ type: 'p', text });
const h2 = (text) => ({ type: 'h2', text });
const h3 = (text) => ({ type: 'h3', text });
const ul = (...items) => ({ type: 'ul', items });
const ol = (...items) => ({ type: 'ol', items });
const callout = (title, text) => ({ type: 'callout', title, text });

/**
 * The two sections every article belongs to, spread into the entries below.
 * The labels match src/data/categories.js, which is where navigation, the
 * footer and the section pages read them from — rename a section there and in
 * these two constants, nowhere else.
 */
const FINANCE = { category: 'Finance', section: 'finance' };
const CLOUD = { category: 'Cloud', section: 'cloud' };

const RAW_BLOGS = [
  /* ------------------------------------------------------------------ */
  /* Finance                                                            */
  /* ------------------------------------------------------------------ */
  {
    id: 1,
    slug: 'how-compound-interest-works',
    title: 'How Compound Interest Works',
    ...FINANCE,
    excerpt:
      'Money earns money, and then that profit earns profit of its own. This is the quiet mechanism behind long-term growth — and behind revolving debt.',
    isoDate: '2026-10-03',
    author: 'Finance Desk',
    imageAlt: 'A small green seedling growing out of a glass jar filled with coins, standing on a plain grey surface',
    content: [
      p('Compounding is what happens when the earnings on an investment are left in place and start earning too. Instead of a fixed return on your original sum, each period pays out on everything that has accumulated so far. Given enough years, that feedback loop — rather than any clever stock-picking — does most of the work.'),
      h2('Where the Growth Actually Comes From'),
      p('Picture money that earns a steady yearly return. In year one you are paid only on your original deposit. In year two you are paid on the deposit plus last year’s return. The starting amount never changes, but the base it is measured against keeps growing, so the same percentage produces a bigger cash figure every single year.'),
      callout('A single example', 'Put 1,000 to work at 10% a year and never touch it. After five years it is about 1,610; after ten, 2,590; after twenty, 6,730. The final ten years add far more than the first ten — that widening gap is compounding doing its work.'),
      h2('Time Beats Timing'),
      p('Because the effect builds slowly at first and then steeply, the years you stay invested matter more than the exact day you start. Money set aside in your twenties can overtake much larger sums begun later, purely because it has more periods to compound.'),
      h3('A quick doubling shortcut'),
      p('Divide 72 by your yearly return to guess how long a sum takes to double. At an 8% return that is roughly nine years; at 12%, about six. It is an estimate, not a promise, but it makes the value of a slightly higher steady rate easy to feel.'),
      h2('The Same Engine Runs in Reverse'),
      p('Borrowed money compounds too, usually at a far higher rate than savings ever pay. A credit-card balance kept to the minimum grows because interest is added to interest each month. Clearing expensive debt first is the most reliable “return” most people will ever lock in.'),
      h2('What Helps and What Hurts'),
      ul(
        'Leave returns invested instead of withdrawing them each year.',
        'Add to the balance regularly so compounding has more to work on.',
        'Watch fees — a cost taken every year shrinks the base and compounds against you.',
        'Avoid interrupting the process by jumping in and out of investments.',
      ),
    ],
  },
  {
    id: 2,
    slug: 'beginners-guide-to-investing',
    title: "Beginner's Guide to Investing",
    ...FINANCE,
    excerpt:
      'Investing is how money is put to work instead of sitting still. Before your first purchase, these are the ideas worth having firmly in place.',
    isoDate: '2026-10-06',
    author: 'Finance Desk',
    imageAlt: 'A hand holding a pen over a printed financial report covered in colourful charts, with an open laptop beside it',
    content: [
      p('Investing means buying assets — shares, bonds, funds or property — and holding them long enough for their value to grow or to pay you income. It is not the same as saving: an investment can fall as well as rise, and that possibility of loss is the price of the higher returns investing can offer over long stretches of time.'),
      h2('Why People Invest at All'),
      p('Cash left untouched quietly loses purchasing power every year because prices rise. Investing is the main way to try to stay ahead of that erosion. The trade-off is uncertainty: markets lurch around in the short term, so money you might need soon generally does not belong in them.'),
      h2('The Building Blocks'),
      ul(
        'Shares: tiny slices of a company, offering the strongest long-term growth but the bumpiest ride.',
        'Bonds: repayments of loans to governments or firms, calmer than shares yet weaker over the very long run.',
        'Funds: baskets holding many shares or bonds, so a single purchase spreads your risk.',
        'Cash and equivalents: safe and handy, though the returns rarely beat inflation by much.',
      ),
      h2('Risk Is Not One Thing'),
      p('There is market risk — everything falling together — and there is concentration risk from having too much riding on one holding. Diversifying through a broad fund mostly tackles the second. The first you cannot escape, only match to a time horizon you can genuinely wait out.'),
      callout('Before you start', 'Make sure short-term bills and a small cash buffer are handled first. Money you may need within a couple of years should not be exposed to a market that could dip on the exact week you need it.'),
      h2('A Sensible First Path'),
      ol(
        'Name the goal and the year you expect to need the money.',
        'Choose a mix of assets that suits that time frame.',
        'Prefer low-cost, diversified funds over chasing single winners.',
        'Invest a little and often rather than agonising over one perfect entry point.',
        'Check in a few times a year, not every time the news turns loud.',
      ),
      p('Good investing for a beginner is usually dull: a broad, cheap holding, contributions that keep arriving, and the patience to leave it alone. Feeling excited about a pick is generally a warning sign, not a feature.'),
    ],
  },
  {
    id: 3,
    slug: 'how-to-build-an-emergency-fund',
    title: 'How to Build an Emergency Fund',
    ...FINANCE,
    excerpt:
      'A cash buffer is the difference between a setback and a spiral. Here is how to decide its size, where to park it and how to fund it without feeling the strain.',
    isoDate: '2026-10-08',
    author: 'Finance Desk',
    featured: true,
    imageAlt: 'An emergency preparedness kit laid out with a first aid bag, water bottles, a torch, a small radio and tinned food',
    content: [
      p('An emergency fund is money deliberately kept aside for the unexpected: a repair you cannot defer, a medical bill, a gap between jobs. Its job is not to grow. Its job is to be present, so that one bad week does not turn into high-interest debt or a forced sale of long-term investments.'),
      h2('What It Actually Protects'),
      ul(
        'It keeps you off expensive credit when a lump-sum cost suddenly lands.',
        'It lets you leave a bad job or situation without instant income panic.',
        'It stops short-term shocks from derailing retirement or other long-term goals.',
      ),
      h2('Sizing It Realistically'),
      p('The familiar advice is three to six months of essential spending, but that is a range, not a rule. If your income is steady and your job secure, the lower end may be plenty. If you are self-employed, support dependants, or run a single-income household, lean higher. Build the number from your true essentials — housing, food, utilities, insurance, transport, minimum debt payments — not your whole lifestyle.'),
      callout('Break the target down', 'Six months of 35,000 in essentials is 210,000, which sounds daunting. Reframe it: roughly 35,000 for month one, then one milestone every few months. Small visible wins are what keep people going.'),
      h2('How to Fund It Without Willpower'),
      ol(
        'Automate a transfer the day you are paid, before anything else is spent.',
        'Route surprises — refunds, bonuses, tax back — straight into the fund.',
        'Trim one recurring cost and send that saving to the buffer, not to spending.',
        'Park it in a separate account so it is not sitting in your everyday balance.',
      ),
      h2('Where to Keep It'),
      p('Choose safety and same-week access over yield: an easy-access savings account or a short-term deposit beats anything that can drop in value. The whole point is that the number is predictable on the day you need it. Once you draw on it, rebuilding the buffer comes before resuming any other goal.'),
    ],
  },
  {
    id: 4,
    slug: 'smart-ways-to-save-money',
    title: 'Smart Ways to Save Money Every Month',
    ...FINANCE,
    excerpt:
      'Saving more is rarely about giving things up. It is about fixing the quiet, repeated decisions that drain a paycheck before it ever reaches you.',
    isoDate: '2026-09-30',
    author: 'Finance Desk',
    imageAlt: 'A child pouring coins from a small metal tin into a glass savings jar on a wooden floor',
    content: [
      p('Most people save far less than they could, not because they overspend on luxuries but because saving is always left until last. The reliable fix is to make saving automatic and to reshape the small recurring decisions that quietly empty a paycheck.'),
      h2('Move the Decision to the Front'),
      p('A transfer you never have to re-decide is worth more than the strongest intention. Set savings to leave your account automatically on payday, so what remains is genuinely what you have to work with. Start with an amount so small it feels almost pointless — the habit matters more than the figure at first.'),
      h2('Find the Money Already Leaving'),
      ul(
        'List every subscription and cancel the ones you have not used in a month.',
        'Re-shop insurance, phone and broadband once a year; loyalty is rarely rewarded.',
        'Turn off one automatic renewal you only keep for convenience.',
      ),
      h2('Change How You Buy, Not Whether You Buy'),
      p('Deprivation rarely lasts. Instead of banning enjoyment, add a small pause: any non-essential purchase over a set amount waits a few days. Most of the urge passes, and the things you still want after the wait are usually worth the money.'),
      callout('One-month experiment', 'Record what you spend for thirty days without trying to change it. The surprise is almost never the big-ticket items — it is the frequent, half-noticed small costs that add up fastest.'),
      h2('Small Habits With Long Runways'),
      ol(
        'Cook from a list and a plan; food waste is a silent tax.',
        'Buy fewer, better things that do not need replacing every year.',
        'Give each savings goal a name and a date so progress feels real.',
        'Send every windfall partly to savings before your lifestyle creeps up to meet it.',
      ),
      p('Saving well is not about enjoying life less. It is about making sure the money you earn is pointed at the things you genuinely value, with the rest of it quietly working for your future.'),
    ],
  },
  {
    id: 5,
    slug: 'understanding-mutual-funds',
    title: 'Understanding Mutual Funds',
    ...FINANCE,
    excerpt:
      'A mutual fund lets a small investor own a slice of hundreds of assets at once. Here is how they work, the types on offer and the costs to watch.',
    isoDate: '2026-09-27',
    author: 'Finance Desk',
    imageAlt: 'Jigsaw puzzle pieces cut from euro banknotes, showing parts of a green twenty and an orange fifty euro note',
    content: [
      p('A mutual fund lets a modest investor own a sliver of hundreds of companies or bonds at once. Money from many people is pooled and invested according to a stated strategy, and each investor holds units whose value tracks the portfolio underneath. It is diversification without having to build or manage it yourself.'),
      h2('What You Get for Pooling In'),
      ul(
        'Broad diversification from a single, modest purchase.',
        'A professional manager doing the research and the trading.',
        'Low entry amounts compared with buying many securities directly.',
        'Regular-investment options that suit a monthly savings routine.',
      ),
      h2('The Main Flavours'),
      h3('Equity funds'),
      p('Hold mostly company shares. They offer the strongest growth potential and the sharpest short-term swings, so they suit goals many years away.'),
      h3('Debt funds'),
      p('Hold bonds and other fixed-income assets. They usually ride out market storms more smoothly than equity funds, though interest-rate and credit risk remain.'),
      h3('Hybrid and index funds'),
      p('Hybrids blend shares and bonds in one product. Index funds do not try to beat the market at all — they simply mirror it, which usually makes them cheaper to run.'),
      h2('The Costs You Cannot See on a Price Tag'),
      p('Funds charge an annual expense ratio, taken out of the fund’s assets rather than billed to you, so it is easy to overlook. Some add an exit load for early withdrawals. Because a fee is deducted every year, a difference of even one percent compounds into a very large gap over decades.'),
      callout('Do not chase a low NAV', 'Net Asset Value is just the per-unit price, recalculated daily. A fund with a low NAV is not “cheaper” or better value than one with a high NAV — only how its holdings perform and what it costs to run matter.'),
      h2('Four Questions Before You Buy'),
      ol(
        'What is the fund’s stated objective, and does it fit my goal and time horizon?',
        'How does its expense ratio compare with similar funds?',
        'How did it behave across a full market cycle, not just the recent good years?',
        'What risks does the official scheme document spell out?',
      ),
    ],
  },
  {
    id: 6,
    slug: 'what-is-a-credit-score',
    title: 'What Is a Credit Score?',
    ...FINANCE,
    excerpt:
      'A three-digit number decides how easily you get credit and what it costs. Here is what feeds it and what actually moves it over time.',
    isoDate: '2026-09-24',
    author: 'Finance Desk',
    imageAlt: 'A close-up of an illuminated analog gauge with a red needle sweeping across a numbered dial',
    content: [
      p('A credit score is a three-digit summary of how you have handled borrowed money in the past. Lenders read it as a guess at how likely you are to repay, and it quietly decides both whether you get credit and how much that credit ends up costing you.'),
      h2('The Inputs Behind the Number'),
      p('Every bureau uses its own formula and the exact weights are not public, but the same handful of behaviours drives almost all of them:'),
      ul(
        'Payment history — whether you paid on time — is normally the heaviest single influence.',
        'Utilisation — how much of your available limit you are actually using.',
        'Age of your accounts — a long, tidy history is worth more than a short one.',
        'Credit mix — handling a sensible blend of card and loan credit.',
        'Recent applications — a cluster of new requests can look like distress.',
      ),
      callout('Utilisation in practice', 'If your cards carry a combined limit of 100,000 and you owe 60,000, you are using 60% of it. Keeping well under that — many lenders like to see below about 30% — tends to help the score.'),
      h2('What a Good Score Buys You'),
      p('Higher scores usually mean faster approvals and lower interest rates. On a large, long loan the rate difference is not cosmetic: a fraction of a percent saved over twenty years is a very real sum kept in your pocket.'),
      h2('Habits That Move It Up'),
      ol(
        'Never miss a due date — set at least the minimum to pay automatically.',
        'Keep card balances low relative to their limits.',
        'Do not open several new accounts in a short window.',
        'Read your report once a year and dispute anything that is simply wrong.',
      ),
      h3('There Is No Quick Fix'),
      p('A score cannot be hacked or rushed. Late payments lose weight gradually as they age, and steady, boring, on-time behaviour is the only reliable way to climb over months and years.'),
    ],
  },
  {
    id: 7,
    slug: 'how-to-create-a-monthly-budget',
    title: 'How to Create a Monthly Budget',
    ...FINANCE,
    excerpt:
      'A budget is a decision made once about your money instead of a hundred times under pressure. Here is a simple way to build one that lasts.',
    isoDate: '2026-09-21',
    author: 'Finance Desk',
    imageAlt: 'A stack of fifty-dollar notes in a paper envelope beside a spiral notebook with figures written on it and a calculator',
    content: [
      p('A budget is a plan that makes sure the essentials, your goals and a little enjoyment are all funded before the month quietly spends itself. It is not punishment — it is simply deciding once, calmly, where your money goes, instead of wondering at the end of the month where it went.'),
      h2('Begin With What Actually Arrives'),
      p('Work from your take-home pay, not your gross salary, because that is the figure you can really spend. If your income moves around month to month, plan against your lowest recent month and treat anything above it as a bonus to direct at goals.'),
      h2('Sort Spending Into Buckets'),
      ul(
        'Needs you cannot avoid: rent, groceries, utilities, minimum loan payments.',
        'Wants you would miss but could survive without: dining out, streaming, hobbies.',
        'Goals: savings, investments and any extra payment that clears debt faster.',
      ),
      h2('Pick a Framework You Will Stick To'),
      h3('The 50/30/20 split'),
      p('Roughly half of take-home pay to needs, a third to wants and a fifth to savings and debt. It is a loose starting point, not a law — adjust the shares to your rent and your circumstances.'),
      h3('Zero-based planning'),
      p('Assign every unit of income a job before the month starts until nothing is left unallocated. It takes longer, but it suits people who want tight control over where each amount goes.'),
      callout('Seeing 50/30/20 in numbers', 'On a take-home income of 60,000 that framework points to about 30,000 for needs, 18,000 for wants and 12,000 for savings and extra debt repayment — a target to bend, not a rule to obey blindly.'),
      h2('Review, Then Give Yourself Permission to Adjust'),
      ol(
        'Note what you actually spent, weekly, in an app or a simple sheet.',
        'At month-end, compare reality with the plan without judging yourself.',
        'Fix the categories that were unrealistic rather than abandoning the whole budget.',
        'Leave a small buffer for the irregular costs that always seem to arrive unannounced.',
      ),
      p('A budget only works if you keep using it, so start rough, refine it each month, and rebuild it whenever your income or your life changes. The plan should feel like a helpful default, not a test you fail.'),
    ],
  },
  {
    id: 8,
    slug: 'stock-market-basics-for-beginners',
    title: 'Stock Market Basics for Beginners',
    ...FINANCE,
    excerpt:
      'What actually happens when you buy a share? A plain-language introduction to exchanges, prices, indices and the risks you are taking on.',
    isoDate: '2026-09-18',
    author: 'Finance Desk',
    imageAlt: 'Several dark trading screens showing green and red candlestick charts, with a laptop glowing in the foreground',
    content: [
      p('A share is a tiny piece of ownership in a company. The stock market is the collection of exchanges where those pieces are bought and sold all day. Owning one means your money rises and falls with what the business — and the crowd of buyers around it — is worth at any moment.'),
      h2('What Moves a Price'),
      p('In the moment, prices move on simple supply and demand: how many people want to buy versus sell. Underneath that, earnings reports, interest rates, economic news and plain investor mood all shift what buyers are willing to pay. Short-term, prices can look almost random; over years they tend to drift toward how the underlying businesses actually perform.'),
      h2('A Few Words You Will Keep Meeting'),
      ul(
        'Exchange — the regulated marketplace where shares trade.',
        'Index — a tracked basket of shares standing in for part of the market.',
        'Dividend — a slice of profit some companies pay out to shareholders.',
        'Market capitalisation — the total value of a company’s shares.',
        'Bull and bear — long stretches of rising and falling prices.',
      ),
      h2('Two Ways to Hold Stocks'),
      h3('Picking individual companies'),
      p('Buying specific shares gives you control and, sometimes, a better return — but it demands real research and leaves you exposed if one company stumbles.'),
      h3('Buying the whole shelf'),
      p('Index funds and ETFs hold hundreds of companies at once, so a single purchase spreads your risk widely and usually costs little to run.'),
      callout('The honest warning', 'Shares can and do lose value, and yesterday’s returns do not promise tomorrow’s. Money you might need within a few years generally belongs somewhere calmer than the stock market.'),
      h2('Mistakes Almost Every Beginner Makes'),
      ol(
        'Trying to buy and sell around the news instead of staying invested.',
        'Concentrating hope — and money — in one or two names.',
        'Ignoring small fees and taxes that quietly nibble returns.',
        'Selling in a panic at the bottom of an ordinary downturn.',
      ),
    ],
  },
  {
    id: 9,
    slug: 'how-inflation-affects-your-money',
    title: 'How Inflation Affects Your Money',
    ...FINANCE,
    excerpt:
      'Inflation is the quiet tax that shrinks a flat salary and an idle savings balance every year. Here is how it works and what to do about it.',
    isoDate: '2026-09-15',
    author: 'Finance Desk',
    imageAlt: 'A near-empty supermarket aisle with a single shopping cart parked between fully stocked shelves',
    content: [
      p('Inflation is the slow rise in what things cost. As prices climb, each unit of money buys a little less than it did last year, so a salary or a savings balance that stays flat is actually shrinking in real terms. A little inflation is normal in a growing economy; the quiet part is how persistently it erodes purchasing power.'),
      h2('Where It Comes From'),
      ul(
        'Too much demand: people want more goods and services than are available, so prices rise to ration them.',
        'Rising costs: pricier energy, materials or wages get passed along to whoever buys the end product.',
        'More money chasing the same goods: a fast-growing money supply can lift prices over time.',
      ),
      h2('The Return You See vs. the Return You Keep'),
      p('The rate advertised on an account is the nominal return. The real return is what is left once inflation is subtracted. If your savings pay 4% while prices rise 5%, you are quietly losing about 1% of purchasing power each year, no matter what the statement says.'),
      callout('A decade of drift', 'At 6% inflation, a shop basket costing 1,000 today would need roughly 1,790 in ten years. Cash left sitting for that decade buys far less at the end than at the start.'),
      h2('Who Feels It Most, and Who Benefits'),
      p('People holding large amounts of cash or living on a fixed income feel inflation first, because their money does not grow to meet it. Borrowers on fixed repayments can actually benefit, since they pay back a loan in future money that is worth less than the money they borrowed.'),
      h2('Reasonable Ways to Respond'),
      ol(
        'Keep your emergency cash in an account that pays something competitive rather than nothing.',
        'Put genuinely long-term money into assets that have historically outrun inflation, accepting their bumps.',
        'Revisit your budget as everyday prices shift instead of assuming last year’s figures.',
        'Build inflation into distant goals like retirement, where decades of small price rises compound.',
      ),
      h3('What Central Banks Do About It'),
      p('Central banks nudge interest rates up to cool high inflation and down to support a sluggish economy. Those moves ripple outward into mortgage rates, savings accounts and share prices, which is why inflation is never only a headline problem.'),
    ],
  },
  {
    id: 10,
    slug: 'financial-planning-for-young-adults',
    title: 'Financial Planning for Young Adults',
    ...FINANCE,
    excerpt:
      'Your twenties rarely come with the most money, but they come with the one thing money cannot buy back: time. A roadmap for using it well.',
    isoDate: '2026-09-12',
    author: 'Finance Desk',
    imageAlt: 'A person in a grey cardigan reviewing a printed financial report on a clipboard at a desk with a keyboard',
    content: [
      p('Your twenties and early thirties rarely come with the most money, but they come with the one thing money cannot buy back: decades of time. The small structures you set up now quietly compound into outcomes that are very hard to recreate later, so getting the basics in place matters far more than any single clever decision.'),
      h2('Lay the Groundwork First'),
      ol(
        'Know exactly what lands each month and where it goes.',
        'Save a starter emergency buffer so surprises do not become debt.',
        'Attack high-interest borrowing before investing aggressively.',
        'Make sure you are not one medical or job shock away from a crisis.',
      ),
      h2('Give Every Goal a Time Frame'),
      p('Sort what you are saving for into buckets by when you need it: under two years, two to seven years, and everything beyond. Short-term money wants safety, medium-term money can take a little risk, and long-term money has time to ride out the market’s worst years.'),
      h2('Start Investing Sooner Than It Feels Ready'),
      p('A small amount invested regularly in your twenties can outgrow a much larger sum started a decade later, purely because it has more years to compound. The exact starting figure matters far less than the starting date.'),
      callout('Watch lifestyle creep', 'The most common reason early progress stalls is spending rising to meet every pay rise. Committing a fixed slice of each raise to savings lets your standard of living and your security climb together.'),
      h2('Treat Credit as a Tool, Not Extra Income'),
      p('A clean credit history makes a future home or car loan cheaper and easier. Use credit only for what you could have paid in cash, clear the balance in full where you can, and never let a due date slip.'),
      h2('Keep the Plan Alive'),
      ul(
        'Learn from clear, unbiased sources rather than whoever is selling something.',
        'Understand any product fully before committing money to it.',
        'Revisit your whole plan each year and after major life changes.',
      ),
    ],
  },
  {
    id: 11,
    slug: 'how-to-use-credit-cards-responsibly',
    title: 'How to Use Credit Cards Responsibly',
    ...FINANCE,
    excerpt:
      'A credit card is a loan you take out every month whether you notice it or not. Here is how to stay firmly on the interest-free side of it.',
    isoDate: '2026-09-09',
    author: 'Finance Desk',
    imageAlt: 'Four coloured credit cards fanned out on a rustic wooden table beside a small printed card',
    content: [
      p('A credit card is a short-term loan you take out every month, whether you notice it or not. Spend within your limit and clear the statement in full, and you borrow for free while gaining protection and a credit history. Carry a balance, and the same tool becomes one of the most expensive forms of debt there is.'),
      h2('Where the Cost Creeps In'),
      p('The trap is the minimum payment. Pay it and you stay in good standing, but the rest of the balance rolls over and attracts interest — often at a very high annual rate — and new purchases pile on top. That is how a one-off purchase becomes a multi-year balance.'),
      callout('Why rates bite', 'A 50,000 balance at 36% a year costs roughly 1,500 in interest in a single month before you buy anything new. Rewards worth a few hundred a year cannot outrun that.'),
      h2('Habits That Keep You on the Free Side'),
      ol(
        'Pay the full statement balance by the due date, every month.',
        'Set up at least an automatic payment so nothing is ever missed.',
        'Keep what you owe low relative to your limit.',
        'Scan each statement for charges you do not recognise.',
      ),
      h2('The Fine Print Worth Knowing'),
      ul(
        'Grace period — the interest-free window between buying and the due date, lost the moment you carry a balance.',
        'Annual fee — only worth it if the perks are ones you genuinely use.',
        'Rewards — cash back and points are a bonus, not a reason to spend more.',
        'Cash advances — fees and interest from day one; treat them as a last resort.',
      ),
      h2('If the Balance Has Already Grown'),
      p('Write down every card, its balance and its rate, stop adding to them, then throw any extra payment at the highest-rate balance while keeping minimums running on the rest. If you are struggling, call the issuer — hardship arrangements are usually cheaper for everyone than a default.'),
    ],
  },
  {
    id: 12,
    slug: 'understanding-loans-and-interest-rates',
    title: 'Understanding Loans and Interest Rates',
    ...FINANCE,
    excerpt:
      'Two loans with the same headline rate can cost wildly differently. Learn to read the total price before you sign.',
    isoDate: '2026-09-06',
    author: 'Finance Desk',
    imageAlt: 'A small wooden model house with a bunch of keys resting on a printed contract on a blue surface',
    content: [
      p('A loan buys you something now and makes you pay for it slowly, with interest as the price of that convenience. Two loans with the same headline rate can cost very differently once their term, fees and repayment style are counted, so the real skill is learning to read the total price rather than the advertised one.'),
      h2('The Words on Every Offer'),
      ul(
        'Principal — the amount you actually borrow.',
        'Interest rate — the yearly cost of the money, as a percentage.',
        'Tenure — how many years you have to pay it back.',
        'Instalment (EMI) — the regular payment that covers both principal and interest.',
        'Fees — processing charges and early-repayment penalties that change the true cost.',
      ),
      h2('Fixed or Floating'),
      p('A fixed rate holds steady for an agreed stretch, so your instalment never surprises you. A floating rate tracks a benchmark and can fall in your favour or rise against you. Choosing between them is really a choice between certainty and a bet on where rates go.'),
      h2('The Term Is Where the Real Cost Hides'),
      p('Stretching a loan over more years makes each payment smaller and easier to fit into a budget, but it keeps you paying interest for far longer. Shortening the term raises the instalment yet can save a large sum overall.'),
      callout('Same loan, different price', 'Borrowing 500,000 at 10% costs roughly 137,000 in total interest over five years, but about 293,000 over ten — even though the ten-year monthly payment is the smaller, more comfortable one.'),
      h2('Secured Against Unsecured'),
      p('A secured loan is backed by something the lender can repossess — a house, a vehicle — which is why it carries a lower rate. An unsecured personal loan rests only on your promise and your credit history, so it is priced higher to cover the extra risk the lender takes.'),
      h2('Before You Sign Anything'),
      ol(
        'Compare the total amount you will repay, not just the interest rate.',
        'Read every fee and the rules for paying the loan off early.',
        'Make sure the instalment leaves comfortable room in your monthly budget.',
        'Ask about anything in the agreement you cannot explain back to someone else.',
      ),
    ],
  },
  {
    id: 13,
    slug: 'tax-basics-everyone-should-know',
    title: 'Tax Basics Everyone Should Know',
    ...FINANCE,
    excerpt:
      'The rates and forms change everywhere you go, but a handful of tax ideas behave almost the same. Learn those and filing stops being a mystery.',
    isoDate: '2026-09-03',
    author: 'Finance Desk',
    imageAlt: 'A printed income tax form on a green desk beside an orange calculator, two pencils and some paper clips',
    content: [
      p('Nobody enjoys tax, but most of the confusion comes from a handful of ideas that behave almost the same everywhere. Once those click, a payslip makes more sense, filing feels less intimidating, and conversations with a professional become far more productive. The specific rates and forms change by country; the underlying logic rarely does.'),
      h2('The Income You Earn Is Not the Income You Are Taxed On'),
      p('Gross income is everything you are paid. Taxable income is what is left after the allowances and deductions the rules permit. Your bill is calculated on the smaller figure, which is why two people earning identical salaries can owe very different amounts.'),
      h2('Brackets Only Tax the Slice Above Each Line'),
      p('Most systems are progressive: each portion of income is taxed at its own rate, rising as income climbs. Moving into a higher bracket does not re-tax everything you already earn — only the amount that crosses the threshold is charged at the new rate.'),
      callout('Two rates worth knowing', 'Your marginal rate is what you pay on the very next unit of income. Your effective rate is your total tax divided by your total income — almost always the lower, friendlier number people actually feel.'),
      h2('Deductions and Credits Are Not the Same Thing'),
      ul(
        'A deduction shrinks the income you are taxed on.',
        'A credit reduces the tax you owe directly, unit for unit, so it is often the more valuable of the two.',
        'What you qualify for depends entirely on local rules and your own circumstances.',
      ),
      h2('Investment Income Has Its Own Rules'),
      p('Interest, dividends and capital gains are frequently taxed differently from a salary, and how long you hold something can change the rate applied. A return is only truly yours after tax, so the after-tax figure — not the headline one — is what to compare between options.'),
      h2('Habits That Make Filing Easier'),
      ol(
        'Keep payslips, statements and deductible receipts together all year, not in a last-minute panic.',
        'Put the filing deadlines in your calendar the day you learn them.',
        'Review your position before the year ends, when there is still time to act.',
        'For anything genuinely complicated, pay a qualified professional — it usually saves more than it costs.',
      ),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Cloud                                                              */
  /* ------------------------------------------------------------------ */
  {
    id: 15,
    slug: 'open-banking-and-your-money',
    title: 'Open Banking: How Apps Get Access to Your Bank Account',
    ...CLOUD,
    excerpt:
      'A budgeting app can show every balance you have without ever learning your password. Here is what actually happens when you approve a connection, and how to take it back.',
    isoDate: '2026-10-09',
    author: 'Cloud Desk',
    imageAlt: 'A laptop, a dark smartphone, a small notebook and a pair of glasses arranged on a pale desk, seen from above',
    // No bespoke cover illustration for this article yet, so its photograph is
    // used for social previews.
    ogImage: '/images/photos/open-banking-and-your-money.jpg',
    content: [
      p('Open banking is a combination of rules and technology that lets you instruct your bank to share your account information with a regulated third party — securely, for a limited purpose, and only for as long as you allow it. It is the reason a money app can show several accounts in one place without you handing over your login.'),
      h2('The Problem It Solves'),
      p('Before open banking, an app that wanted to read your balances usually asked for your online-banking username and password, then signed in as if it were you. That gave the app the same reach you have, with no way to limit what it could see or do.'),
      h2('What Happens When You Approve a Connection'),
      ol(
        'You choose the app inside your bank’s consent screen, or start the link from the app and finish it at your bank.',
        'Your bank authenticates you — normally the same strong login you use every day.',
        'The bank issues a token: a permission tied to one app, one account and one purpose.',
        'The app reads only what that token allows, and the token stops working when it expires or when you revoke it.',
      ),
      callout('A useful analogy', 'An API connection is a hotel key card: it opens one room, for one stay, and stops working when the stay ends. A shared password is a master key with no expiry date.'),
      h2('Two Kinds of Access'),
      h3('Account Information'),
      p('The app can read balances and transaction history so it can categorise spending, notice that a subscription went up, or show a month-by-month cash picture. It moves nothing.'),
      h3('Payment Initiation'),
      p('The app can set up a transfer from your account, which you still confirm at your bank. This is why some checkouts offer an instant bank payment instead of a card.'),
      h2('What Still Sits With You'),
      ul(
        'The connected-app list is usually under security, permissions or third-party access inside your banking app.',
        'Deleting an app from your phone does not remove its access — revoking it at the bank does.',
        'Where your bank offers both, an API connection is safer than an app logging in with your credentials.',
        'Keep your own copy of any record that matters; access can be withdrawn as easily as it was granted.',
      ),
      h2('Warning Signs'),
      ol(
        'A service that asks for your banking password rather than redirecting you to your bank to approve access.',
        'An app that will not state which data it reads, or how long it keeps it.',
        'Permissions that do not match the feature — a bill-splitting tool has no reason to start payments.',
      ),
      p('None of this makes connected apps risk-free. It does move the risk: away from who holds your password, and towards which permissions you granted and how carefully you prune them.'),
    ],
  },
  {
    id: 16,
    slug: 'how-digital-banks-protect-your-data',
    title: 'How Digital Banks Protect Your Data',
    ...CLOUD,
    excerpt:
      'Encryption, two-factor codes and access controls are not just technical buzzwords. Here is what actually stands between your money record and a stranger.',
    isoDate: '2026-10-11',
    author: 'Cloud Desk',
    imageAlt: 'A smartphone on a dark wooden table, wrapped in a metal chain secured by a black combination padlock',
    ogImage: '/images/photos/how-digital-banks-protect-your-data.jpg',
    content: [
      p('Any financial service that runs on the cloud is only as safe as the controls around the machines holding the data. Most of those controls are unglamorous and work precisely because they are boring and consistent.'),
      h2('Data in Transit and Data at Rest'),
      p('Information moves between your device and the service constantly, and it also sits on servers waiting to be read. These two states need different protection. Transport encryption, the padlock in a browser address bar, guards the moving data. Storage encryption guards the copies sitting on disks.'),
      h2('What Two-Factor Verification Adds'),
      ul(
        'A password proves something you know; a code or hardware key proves something you have.',
        'An attacker who guesses your password still cannot sign in without the second factor.',
        'Notification prompts are safer than text-message codes, which can be intercepted through a cloned SIM.',
      ),
      callout('Habits that matter', 'Never reuse a banking password on any other site. One breached shop database is the usual starting point for attempts to sign in elsewhere with the same email and password combination.'),
      h2('Access Control Inside the Provider'),
      p('Well-run services limit which employees can see customer records, log every access, and store sensitive values such as card numbers in specialised systems separate from ordinary application data. When you ask a provider how your data is handled, this is the area worth probing.'),
      h2('Your Share of the Responsibility'),
      ol(
        'Enable the strongest verification method the service offers, on every device.',
        'Keep contact details current so genuine fraud alerts reach you.',
        'Review account and connected-app access periodically and remove what you no longer use.',
        'Treat unexpected calls claiming to be from your bank as suspicious; hang up and call the official number.',
      ),
    ],
  },
  {
    id: 17,
    slug: 'what-happens-to-your-financial-data-online',
    title: 'What Happens to Your Financial Data Online',
    ...CLOUD,
    excerpt:
      'Statements, transaction histories and app backups outlive the accounts that created them. A calm look at where your money records end up.',
    isoDate: '2026-10-12',
    author: 'Cloud Desk',
    imageAlt: 'Black ring binders with coloured index tabs stacked beside an overstuffed lever-arch file on a white desk',
    ogImage: '/images/photos/what-happens-to-your-financial-data-online.jpg',
    content: [
      p('Every payment you make creates a record, and that record is copied. It exists in your bank’s systems, in the card network’s, in the merchant’s, and often in a budgeting app you connected years ago. None of this is alarming by itself, but it is worth understanding.'),
      h2('Where Copies of Your Money Data Live'),
      ul(
        'Your bank or wallet provider, including its backup systems.',
        'Payment networks and, for some transactions, the merchant.',
        'Any third-party app you granted account access to.',
        'Your own email, cloud storage and device backups, which often hold statements.',
      ),
      h2('When a Service Shuts Down'),
      p('Financial products are discontinued more often than readers expect. When one closes, export windows are usually short, and history you did not download may become difficult or impossible to obtain. A yearly habit of saving statements somewhere you control removes that risk.'),
      callout('Practical rule', 'If a record matters for tax, a loan application or a legal deadline, keep your own copy. Treat the provider’s version as a convenience, not as your archive.'),
      h2('Reading a Privacy Policy Without Wasting an Evening'),
      ol(
        'Search for retention: how long data is kept after an account closes.',
        'Look for sharing: what is passed to partners, advertisers or affiliates.',
        'Check deletion: whether you can request erasure and what the exclusions are.',
        'Confirm jurisdiction: which country’s law governs the data, and whether it can move.',
      ),
      h2('Data Has Value, Usually to Somebody Else'),
      p('Aggregated, anonymised transaction patterns are valuable to merchants, researchers and lenders. Most services describe this as harmless, and it often is. The point is not suspicion but awareness: know what you are agreeing to store, where it is stored, and for how long.'),
    ],
  },
  {
    id: 18,
    slug: 'what-is-cloud-computing',
    title: 'What Is Cloud Computing? How Rented Computing Works',
    ...CLOUD,
    excerpt:
      'Cloud computing means renting computing power, storage and software over the internet instead of owning it. Here are the core ideas in plain language.',
    isoDate: '2026-10-05',
    author: 'Cloud Desk',
    imageAlt: 'A close-up of a blue-lit perforated server cabinet front panel in a dark room',
    ogImage: '/images/photos/what-is-cloud-computing.jpg',
    content: [
      p('Cloud computing is the delivery of computing resources — servers, storage, databases, networking and software — over the internet, on demand. Instead of buying and maintaining your own machines, you use a provider’s infrastructure and pay for what you consume.'),
      h2('The Core Idea'),
      p('Before the cloud, a company that needed a website or an app had to buy servers, install them, keep them cool and replace them every few years. With the cloud, that same capacity can be switched on in minutes and switched off when it is no longer needed.'),
      h2('The Three Service Models'),
      h3('Infrastructure as a Service (IaaS)'),
      p('You rent raw building blocks such as virtual machines, storage and networks, and manage the operating system and software yourself. It offers the most control.'),
      h3('Platform as a Service (PaaS)'),
      p('The provider manages the servers and operating system; you deploy your application code. It lets developers focus on building rather than maintaining machines.'),
      h3('Software as a Service (SaaS)'),
      p('You use finished software through a browser or app — email, accounting tools, online banking. The provider manages everything behind the scenes.'),
      callout('Everyday example', 'If you use web-based email, store photos online or check your balance in a banking app, you are already using SaaS built on cloud infrastructure.'),
      h2('Key Benefits'),
      ul(
        'Scalability: capacity grows or shrinks with demand.',
        'Lower upfront cost: no large hardware purchase to get started.',
        'Accessibility: data and apps are reachable from any connected device.',
        'Reliability: providers replicate data across multiple locations.',
      ),
      h2('Things to Keep in Mind'),
      ol(
        'Costs are ongoing and can grow quietly as usage increases.',
        'You depend on an internet connection and the provider’s uptime.',
        'Security is shared — the provider protects the platform, you protect your accounts.',
        'Moving away from one provider to another can take time and effort.',
      ),
    ],
  },
  {
    id: 19,
    slug: 'public-private-and-hybrid-cloud',
    title: 'Public, Private and Hybrid Cloud Explained',
    ...CLOUD,
    excerpt:
      'Not every cloud is shared with the world. Learn how public, private and hybrid clouds differ, and why banks often use a mix of all three.',
    isoDate: '2026-10-01',
    author: 'Cloud Desk',
    imageAlt: 'Teal fibre-optic patch panels in a rack, with slim connector leads plugged into the ports',
    ogImage: '/images/photos/public-private-and-hybrid-cloud.jpg',
    content: [
      p('“The cloud” is not one single place. Organisations choose different deployment models depending on how much control, security and flexibility they need. The three main models are public, private and hybrid.'),
      h2('Public Cloud'),
      p('A public cloud is run by a third-party provider and shared by many customers, each kept separate through software. It is the most common model because it is quick to start and requires no hardware of your own.'),
      ul(
        'Pay only for what you use.',
        'Virtually unlimited capacity on demand.',
        'Less direct control over where and how data is physically stored.',
      ),
      h2('Private Cloud'),
      p('A private cloud is dedicated to a single organisation, either in its own data centre or hosted by a provider. It offers more control and can make it easier to meet strict regulatory requirements.'),
      ul(
        'Greater control over security and data location.',
        'Higher cost and more maintenance responsibility.',
        'Capacity is limited to what has been built or reserved.',
      ),
      h2('Hybrid Cloud'),
      p('A hybrid cloud connects private and public environments so workloads can move between them. Sensitive systems stay in the private environment, while less sensitive or fluctuating workloads use public capacity.'),
      callout('Why finance uses hybrid', 'Banks often keep core account records in tightly controlled environments while running customer-facing apps, analytics and testing on public cloud, gaining flexibility without giving up control of their most sensitive data.'),
      h2('Choosing a Model'),
      ol(
        'How sensitive is the data, and what regulations apply to it?',
        'How predictable is the workload — steady or highly variable?',
        'What budget and in-house skills are available?',
        'How important is speed of launching new services?',
      ),
    ],
  },
  {
    id: 20,
    slug: 'understanding-cloud-costs',
    title: 'Understanding Cloud Costs and Pricing Models',
    ...CLOUD,
    excerpt:
      'Pay-as-you-go sounds simple until the monthly bill arrives. Here is how cloud pricing works and the habits that keep spending under control.',
    isoDate: '2026-09-25',
    author: 'Cloud Desk',
    imageAlt: 'A hand pointing at a laptop screen while the other hand holds a green bank card, a wallet on the wooden desk between them',
    ogImage: '/images/photos/understanding-cloud-costs.jpg',
    content: [
      p('Cloud services replace large upfront purchases with ongoing, usage-based bills. That flexibility is a major advantage, but it also means costs can rise quietly if nobody is watching. Understanding the pricing models is the first step to spending wisely.'),
      h2('Common Pricing Models'),
      ul(
        'Pay-as-you-go: billed per second, hour or gigabyte actually used.',
        'Reserved or committed use: a discount in exchange for committing to a level of usage for one to three years.',
        'Spot or pre-emptible capacity: spare capacity at a steep discount that can be withdrawn at short notice.',
        'Subscriptions: a flat monthly or yearly fee per user, common for SaaS tools.',
      ),
      h2('Where the Money Goes'),
      p('Most cloud bills are driven by a handful of items: computing time, storage volume, data transferred out of the provider’s network, and managed services such as databases. Data transfer and forgotten resources are frequent sources of surprise charges.'),
      callout('Example', 'A test server costing 10 per hour that is accidentally left running for a month adds roughly 7,200 to the bill — for something nobody was using.'),
      h2('Habits That Control Costs'),
      ol(
        'Set budgets and alerts so you are notified before spending crosses a limit.',
        'Turn off or schedule non-production resources outside working hours.',
        'Right-size resources to actual usage instead of over-provisioning.',
        'Tag resources by team or project so every cost has an owner.',
        'Review the bill monthly and delete storage and snapshots that are no longer needed.',
      ),
      h2('For Individuals, Too'),
      p('The same thinking applies to personal subscriptions: storage plans, streaming services and productivity apps. Listing them together once a year and cancelling what you no longer use is the household version of cloud cost management.'),
    ],
  },
  {
    id: 21,
    slug: 'cloud-storage-and-backups',
    title: 'Cloud Storage and Backups: Keeping Your Records Safe',
    ...CLOUD,
    excerpt:
      'Statements, tax documents and receipts deserve more than one copy. Learn how to use cloud storage sensibly as part of a reliable backup plan.',
    isoDate: '2026-09-20',
    author: 'Cloud Desk',
    imageAlt: 'A brushed-metal external hard drive cabled to a laptop on a dark desk, a notebook and pen alongside',
    ogImage: '/images/photos/cloud-storage-and-backups.jpg',
    content: [
      p('Cloud storage lets you keep files on a provider’s servers and reach them from any device. It is an excellent way to protect important financial records from a lost phone or a failed laptop — as long as it is used as part of a plan rather than as the only copy.'),
      h2('Sync Is Not the Same as Backup'),
      p('Many cloud storage services sync files: a change on one device is copied everywhere. That is convenient, but it also means an accidental deletion or a file encrypted by malware can spread to every copy. A true backup keeps earlier versions you can restore.'),
      h2('The 3-2-1 Rule'),
      ul(
        'Keep at least 3 copies of important data.',
        'Store them on 2 different types of media, such as a laptop and an external drive.',
        'Keep 1 copy off-site — cloud storage is the easiest way to do this.',
      ),
      callout('What to back up', 'Bank and card statements, tax returns and supporting documents, loan and insurance papers, salary slips and investment statements are the records most often needed later — and hardest to recover once lost.'),
      h2('Choosing a Cloud Storage Service'),
      ol(
        'Check that files are encrypted in transit and at rest.',
        'Turn on two-factor verification for the account.',
        'Look for version history and a recycle bin with a long retention period.',
        'Understand the price as your storage grows, not just the free tier.',
      ),
      h2('Keep It Organised'),
      p('A simple folder structure — for example, one folder per year with sub-folders for banking, tax and insurance — makes records easy to find when you need them for a loan application or a tax query. Test restoring a file occasionally so you know the backup actually works.'),
    ],
  },
];

const wordCount = (blocks) =>
  blocks
    .flatMap((block) => (block.items ? block.items : [block.title, block.text]))
    .filter(Boolean)
    .join(' ')
    .split(/\s+/).length;

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

/**
 * Article photographs live in public/images/photos/ and are served from our own
 * origin — the site makes no third-party image request. They were fetched by
 * scripts/fetch-photos.ps1 and are used under the Pexels Licence (free for
 * commercial use, no attribution required). Copyright stays with each
 * photographer, so the Terms page never describes photographs as our own work.
 *
 * imageAlt describes what each photograph actually shows.
 */
const IMAGES = {
  'how-to-build-an-emergency-fund': '/images/photos/how-to-build-an-emergency-fund.jpg',
  'beginners-guide-to-investing': '/images/photos/beginners-guide-to-investing.jpg',
  'how-compound-interest-works': '/images/photos/how-compound-interest-works.jpg',
  'smart-ways-to-save-money': '/images/photos/smart-ways-to-save-money.jpg',
  'understanding-mutual-funds': '/images/photos/understanding-mutual-funds.jpg',
  'what-is-a-credit-score': '/images/photos/what-is-a-credit-score.jpg',
  'how-to-create-a-monthly-budget': '/images/photos/how-to-create-a-monthly-budget.jpg',
  'stock-market-basics-for-beginners': '/images/photos/stock-market-basics-for-beginners.jpg',
  'how-inflation-affects-your-money': '/images/photos/how-inflation-affects-your-money.jpg',
  'financial-planning-for-young-adults': '/images/photos/financial-planning-for-young-adults.jpg',
  'how-to-use-credit-cards-responsibly': '/images/photos/how-to-use-credit-cards-responsibly.jpg',
  'understanding-loans-and-interest-rates': '/images/photos/understanding-loans-and-interest-rates.jpg',
  'tax-basics-everyone-should-know': '/images/photos/tax-basics-everyone-should-know.jpg',
  'open-banking-and-your-money': '/images/photos/open-banking-and-your-money.jpg',
  'how-digital-banks-protect-your-data': '/images/photos/how-digital-banks-protect-your-data.jpg',
  'what-happens-to-your-financial-data-online': '/images/photos/what-happens-to-your-financial-data-online.jpg',
  'what-is-cloud-computing': '/images/photos/what-is-cloud-computing.jpg',
  'public-private-and-hybrid-cloud': '/images/photos/public-private-and-hybrid-cloud.jpg',
  'understanding-cloud-costs': '/images/photos/understanding-cloud-costs.jpg',
  'cloud-storage-and-backups': '/images/photos/cloud-storage-and-backups.jpg',
};

/**
 * Final article objects: derived fields (image paths, date, read time) are computed once.
 * ogImage is our own cover illustration in public/images/og/, used for social
 * previews only; an article that has no cover yet names its photograph instead.
 */
export const BLOGS = RAW_BLOGS.map((blog) => ({
  ...blog,
  image: IMAGES[blog.slug],
  ogImage: blog.ogImage ?? `/images/og/${blog.slug}.png`,
  // A cover illustration needs its own description, whereas a reused photograph
  // is already described by imageAlt.
  ogImageAlt: blog.ogImageAlt ?? (blog.ogImage ? blog.imageAlt : `${blog.title} — cover illustration`),
  date: formatDate(blog.isoDate),
  readTime: Math.max(1, Math.round(wordCount(blog.content) / 160)),
})).sort((a, b) => b.isoDate.localeCompare(a.isoDate));

export const getBlogBySlug = (slug) => BLOGS.find((blog) => blog.slug === slug);

export const getBlogsBySection = (section) => BLOGS.filter((blog) => blog.section === section);

export const getFeaturedBlog = () => BLOGS.find((blog) => blog.featured) ?? BLOGS[0];

/**
 * Related articles blend both sections rather than showing a single-topic block:
 * same-section and other-section picks are interleaved (most recent first in
 * each), so a Finance post surfaces a Cloud read too, and vice versa.
 */
export const getRelatedBlogs = (blog, limit = 3) => {
  const others = BLOGS.filter((item) => item.id !== blog.id);
  const sameSection = others.filter((item) => item.section === blog.section);
  const rest = others.filter((item) => item.section !== blog.section);

  const mixed = [];
  for (let i = 0; i < Math.max(sameSection.length, rest.length); i += 1) {
    if (sameSection[i]) mixed.push(sameSection[i]);
    if (rest[i]) mixed.push(rest[i]);
  }
  return mixed.slice(0, limit);
};