export type Category = "Risk & Finance" | "AI & Agents" | "Data & ML" | "Engineering";

export type Art = "var" | "stress" | "pulse" | "f1" | "notes" | "spark" | "sentiment";

export type Project = {
  slug: string;
  title: string;
  tag: string;
  categories: Category[];
  description: string;
  tech: string[];
  art: Art;
  repo?: string;
  live?: string;
  featured?: boolean;
  metrics?: { value: string; label: string }[];
};

export const categories: ("All" | Category)[] = [
  "All",
  "Risk & Finance",
  "AI & Agents",
  "Data & ML",
  "Engineering",
];

const gh = (repo: string) => `https://github.com/gouravmurmu/${repo}`;

export const projects: Project[] = [
  {
    slug: "market-risk-copilot",
    title: "Agentic Market Risk Copilot",
    tag: "Featured · Risk + AI",
    categories: ["Risk & Finance", "AI & Agents"],
    featured: true,
    description:
      "A daily market risk platform for a sample $10M multi-asset portfolio. It computes 1-day VaR and Expected Shortfall eight ways (historical, filtered historical, parametric, Monte Carlo and stressed), backtests every model with Kupiec, Christoffersen and the Basel traffic light, checks limits, and uses a Claude-powered copilot to explain the day's move, flag breaches and draft the risk commentary. Deterministic models produce every number; a validator and human sign-off sit between the AI draft and the final report.",
    tech: ["Python", "NumPy", "SciPy", "FastAPI", "Postgres", "Claude API", "Next.js", "GitHub Actions"],
    art: "var",
    repo: gh("MarketRiskCopilot"),
    live: "https://market-risk-copilot-gules.vercel.app",
    metrics: [
      { value: "8", label: "VaR / ES models" },
      { value: "4", label: "Backtests" },
      { value: "1", label: "Commentary agent" },
    ],
  },
  {
    slug: "stress-terminal",
    title: "Volatility & Stress Testing Terminal",
    tag: "Risk & Finance",
    categories: ["Risk & Finance", "Data & ML"],
    description:
      "An interactive portfolio risk terminal: VaR by four methods with Kupiec backtests, EWMA, HAR-RV and GARCH-family volatility forecasts, a Markov-switching regime model, four Monte Carlo engines and stress tests against historical crises.",
    tech: ["Python", "Streamlit", "arch", "Statsmodels", "Docker"],
    art: "stress",
    repo: gh("MktVol_StressTestingDashboard"),
  },
  {
    slug: "marketpulse",
    title: "MarketPulse",
    tag: "Risk & Finance",
    categories: ["Risk & Finance", "Engineering"],
    description:
      "A multi-asset market research app for global and Indian equities, crypto, gold and silver. Charts with indicators, a risk panel per asset, and a Risk Lab for correlation, drawdowns, Monte Carlo and stress scenarios, all running on free tiers.",
    tech: ["Next.js", "TypeScript", "FastAPI", "Postgres", "Vercel", "Render"],
    art: "pulse",
    repo: gh("FinancePulse"),
    live: "https://marketpulse-sigma-seven.vercel.app/",
  },
  {
    slug: "f1",
    title: "F1 Race Intelligence",
    tag: "Data & ML",
    categories: ["Data & ML", "Engineering"],
    description:
      "Replay any race lap by lap while a Monte Carlo simulator predicts the finish. ML models for tyre degradation and pit stops, telemetry comparison, and every season since 1950. TTL caching and API fallbacks keep it fast.",
    tech: ["Python", "Scikit-learn", "Next.js", "Recharts", "Docker"],
    art: "f1",
    repo: gh("f1dashboard"),
    live: "https://f1dashboard-xffq.vercel.app/",
  },
  {
    slug: "sentiment-lens",
    title: "Sentiment Lens",
    tag: "Data & ML",
    categories: ["Data & ML", "AI & Agents", "Risk & Finance"],
    description:
      "Scores financial headlines with four interchangeable models plus FinBERT, builds a daily sentiment index per stock, and tests honestly whether news leads prices: lead-lag, Granger causality, event studies and walk-forward forecasts.",
    tech: ["Python", "FinBERT", "Streamlit", "Statsmodels", "CI"],
    art: "sentiment",
    repo: gh("Financial_Sentiment_Analyzer"),
  },
  {
    slug: "unsent-internet",
    title: "The Unsent Internet",
    tag: "Engineering",
    categories: ["Engineering"],
    description:
      "A small, nostalgic corner of the web where people anonymously leave the messages they never sent. Row-level security, rate limits and moderation are enforced in the database, and no key ever reaches the browser.",
    tech: ["Next.js", "TypeScript", "Supabase", "Postgres"],
    art: "notes",
    repo: gh("unsent-internet"),
    live: "https://unsent-internet.vercel.app/",
  },
  {
    slug: "spark",
    title: "SPARK",
    tag: "Engineering",
    categories: ["Engineering"],
    description:
      "A mobile-first prototype for QR-based event matchmaking: join an event, take an eight-question quiz, wait for the reveal and meet your match, with consent built into every step.",
    tech: ["Next.js", "React", "Framer Motion", "Tailwind"],
    art: "spark",
    repo: gh("SPARK"),
    live: "https://spark-navy-zeta.vercel.app/",
  },
];

export const smallProjects = [
  {
    title: "Global Crisis Intelligence",
    text: "Disaster and geopolitical monitoring with an explainable risk engine.",
    repo: gh("WorldRisk"),
  },
  {
    title: "AI Risk Analyzer",
    text: "Volatility, VaR, CVaR and Monte Carlo price paths with PDF reports.",
    repo: gh("AIRiskAnalyzer"),
  },
  {
    title: "End-to-end ML Project",
    text: "A full ML pipeline from ingestion to deployment.",
    repo: gh("mlproject"),
  },
  {
    title: "AutoApply",
    text: "Automation for repetitive job application steps.",
    repo: gh("AutoApply"),
  },
  {
    title: "Book Recommender",
    text: "Collaborative filtering recommendations.",
    repo: gh("Book-Recommender-Using-Collaborative-Filtering"),
  },
  {
    title: "Iris Classifier",
    text: "K-nearest neighbours classification.",
    repo: gh("-Iris-Flower-Classification-Using-K-Nearest-Neighbors-KNN-"),
  },
];
