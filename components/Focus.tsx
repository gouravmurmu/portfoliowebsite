import { focusAreas, focusStats } from "@/content/site";
import { FocusIcon } from "./Icons";
import Reveal from "./Reveal";

function Monitor() {
  const bars = [4, 9, 16, 28, 44, 60, 68, 58, 42, 26, 14, 7, 3];
  return (
    <svg viewBox="0 0 320 260" className="h-auto w-full max-w-[360px]" role="img" aria-label="Monitor showing a P&L line crossing a dashed red VaR 99% threshold, with a loss histogram">
      <rect x="10" y="10" width="300" height="190" rx="18" fill="#3F4E80" />
      <rect x="24" y="24" width="272" height="162" rx="10" fill="#FBF4DF" />
      <polyline
        points="38,92 60,80 80,88 100,66 120,76 140,58 160,72 180,52 200,98 220,132 240,86 260,70 282,60"
        fill="none"
        stroke="#3F4E80"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <line x1="36" x2="284" y1="122" y2="122" stroke="#C0563F" strokeWidth="2" strokeDasharray="7 5" />
      <text x="40" y="116" fontSize="11" fontFamily="sans-serif" fontWeight="800" fill="#C0563F">
        VaR 99%
      </text>
      <circle cx="220" cy="132" r="5" fill="#C0563F" />
      {bars.map((h, i) => (
        <rect key={i} x={98 + i * 10} y={178 - h * 0.6} width="7" height={h * 0.6} rx="1.5" fill={i < 2 ? "#C0563F" : "#5B6C9E"} />
      ))}
      <rect x="130" y="200" width="60" height="30" fill="#3F4E80" />
      <rect x="90" y="228" width="140" height="14" rx="7" fill="#3F4E80" />
    </svg>
  );
}

export default function Focus() {
  return (
    <section aria-labelledby="focus-title" className="bg-cream text-ink">
      <div className="mx-auto max-w-site px-4 py-16 sm:px-6 md:py-24">
        <h2 id="focus-title" className="font-display text-6xl font-black uppercase leading-poster text-blue md:text-9xl">
          Focus Areas
        </h2>

        <div className="mt-10 grid items-center gap-10 md:grid-cols-[1fr_1.1fr_1fr]">
          <Reveal>
            <ul className="space-y-3">
              {focusAreas.map((f) => (
                <li key={f.label} className="flex items-center gap-3 rounded-full bg-blue py-2 pl-2 pr-5 text-paper">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-cream text-blue-deep">
                    <FocusIcon name={f.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-display text-xl font-extrabold uppercase tracking-wide">{f.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.05} className="flex justify-center">
            <Monitor />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display text-3xl font-extrabold uppercase leading-tight text-blue-deep md:text-4xl">
              As a risk analyst, I bring a builder&apos;s mindset
            </p>
            <p className="mt-4 text-base leading-relaxed">
              My day job is getting risk numbers right for regulators. My side projects are about making those numbers
              faster to produce and easier to explain, with clean data pipelines, honest backtests and AI that only
              explains what deterministic models have already computed.
            </p>
          </Reveal>
        </div>

        <dl className="mt-12 grid gap-4 rounded-card bg-blue p-6 text-paper sm:grid-cols-3">
          {focusStats.map((s) => (
            <div key={s.value} className="flex items-center gap-3">
              <dt className="sr-only">{s.label}</dt>
              <dd className="whitespace-nowrap font-display text-3xl font-black uppercase text-cream">{s.value}</dd>
              <dd className="text-xs font-extrabold uppercase leading-snug tracking-wider">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
