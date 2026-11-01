export const site = {
  name: "Gourav Murmu",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://gouravmurmu.vercel.app",
  title: "Gourav Murmu | Risk Analyst & Builder",
  description:
    "Risk analyst at JPMorganChase covering Market and Credit Risk for EMEA legal entities. I build quant, data and AI tools: VaR engines, market dashboards and LLM risk copilots.",
  role: "Risk Analyst & Builder",
  employerLine: "JPMorganChase · EMEA / Market & Credit Risk",
  pitch:
    "I turn risk data into reports regulators trust, and build AI and data tools on the side that make the numbers explain themselves.",
  email: "gouravmurmu1@gmail.com",
  links: {
    github: "https://github.com/gouravmurmu",
    linkedin: "https://www.linkedin.com/in/gourav-murmu-266108283",
    resume: "/resume.pdf",
  },
};

export const nav = [
  { label: "My Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  bio: [
    "I'm an Electrical Engineering graduate from MNIT Jaipur who moved into risk. By day I work on regulatory risk reporting at JPMorganChase.",
    "On the side I build quant and AI tools: VaR engines, market dashboards, sentiment models and live F1 analytics. I like making the numbers easy to trust and easy to explain.",
  ],
  current: {
    title: "Analyst, Legal Entity Risk Reporting",
    org: "JPMorganChase",
    detail: "EMEA region · covering both Market Risk and Credit Risk",
  },
  stats: [
    { value: "2", label: "Risk stripes", sub: "Market + Credit" },
    { value: "85%", label: "Faster daily", sub: "risk report" },
    { value: "80%", label: "Faster monthly", sub: "reconciliation" },
    { value: "10+", label: "Projects", sub: "shipped" },
  ],
  toolkit: [
    "Python",
    "SQL",
    "Pandas",
    "FastAPI",
    "Streamlit",
    "Next.js",
    "PyTorch",
    "Scikit-learn",
    "Docker",
    "Power BI",
    "Tableau",
    "LLM agents",
    "MATLAB",
  ],
};

export const focusAreas = [
  { label: "Market Risk", icon: "chart" },
  { label: "Credit Risk", icon: "shield" },
  { label: "Data Pipelines", icon: "pipe" },
  { label: "Machine Learning", icon: "brain" },
  { label: "AI Agents", icon: "bot" },
] as const;

export const focusStats = [
  { value: "PRA", label: "Regulatory reports delivered" },
  { value: "VaR / ES", label: "Historical, parametric & Monte Carlo" },
  { value: "EMEA", label: "Legal entity coverage" },
];

export const buildSteps = [
  {
    step: "01",
    title: "Source",
    text: "Market, telemetry or ledger data via APIs and SQL, with caching and fallbacks.",
  },
  {
    step: "02",
    title: "Model",
    text: "VaR and ES, backtests, ML forecasts and control theory.",
  },
  {
    step: "03",
    title: "Build",
    text: "FastAPI, Streamlit or Next.js front ends that show the result at a glance.",
  },
  {
    step: "04",
    title: "Ship",
    text: "Docker, CI and free hosting so anyone can open it.",
  },
];
