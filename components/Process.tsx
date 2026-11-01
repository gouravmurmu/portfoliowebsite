import { buildSteps as process } from "@/content/site";
import Reveal from "./Reveal";

function Donut() {
  const r = 92;
  const cx = 120;
  const cy = 120;
  const segs = process.length;
  const gap = 0.06;
  const arc = (i: number) => {
    const a0 = (i / segs) * Math.PI * 2 - Math.PI / 2 + gap;
    const a1 = ((i + 1) / segs) * Math.PI * 2 - Math.PI / 2 - gap;
    const p = (a: number) => `${cx + r * Math.cos(a)} ${cy + r * Math.sin(a)}`;
    return `M ${p(a0)} A ${r} ${r} 0 0 1 ${p(a1)}`;
  };
  const fills = ["#3F4E80", "#5B6C9E", "#3F4E80", "#5B6C9E"];
  return (
    <svg viewBox="0 0 240 240" className="h-auto w-56 md:w-72" role="img" aria-label="Four-part cycle from data to decision: Source, Model, Build, Ship">
      {process.map((p, i) => (
        <path key={p.step} d={arc(i)} fill="none" stroke={fills[i]} strokeWidth="34" />
      ))}
      {process.map((p, i) => {
        const a = ((i + 0.5) / segs) * Math.PI * 2 - Math.PI / 2;
        return (
          <text
            key={p.step}
            x={cx + r * Math.cos(a)}
            y={cy + r * Math.sin(a) + 5}
            textAnchor="middle"
            fontSize="14"
            fontWeight="800"
            fontFamily="sans-serif"
            fill="#FBF4DF"
          >
            {p.step}
          </text>
        );
      })}
      <circle cx={cx} cy={cy} r="58" fill="#FBF4DF" stroke="#5B6C9E" strokeWidth="2" />
      <text x={cx} y={cy - 4} textAnchor="middle" fontSize="20" fontWeight="900" fontFamily="var(--font-display), sans-serif" fill="#3F4E80">
        DATA
      </text>
      <text x={cx} y={cy + 18} textAnchor="middle" fontSize="20" fontWeight="900" fontFamily="var(--font-display), sans-serif" fill="#3F4E80">
        → DECISION
      </text>
    </svg>
  );
}

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="scroll-mt-16 bg-cream-2 text-ink">
      <div className="mx-auto max-w-site px-4 py-16 sm:px-6 md:py-24">
        <h2 id="process-title" className="text-center font-display text-5xl font-black uppercase leading-poster text-blue-deep md:text-7xl">
          My Build Process
        </h2>
        <div className="mt-12 grid items-center gap-10 md:grid-cols-[auto_1fr]">
          <Reveal className="flex justify-center">
            <Donut />
          </Reveal>
          <Reveal delay={0.05}>
            <ol className="space-y-4">
              {process.map((p) => (
                <li key={p.step} className="flex items-center gap-4 rounded-[28px] border-2 border-blue bg-blue py-2 pl-2 pr-6 text-paper">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-cream font-display text-xl font-black text-blue-deep">
                    {p.step}
                  </span>
                  <span>
                    <span className="block font-display text-2xl font-extrabold uppercase leading-none">{p.title}</span>
                    <span className="block text-sm">{p.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
