import type { Art } from "@/content/projects";

const C = {
  cream: "#F3DFA8",
  paper: "#FBF4DF",
  blue: "#5B6C9E",
  deep: "#3F4E80",
  ink: "#2E3A63",
  red: "#C0563F",
};

/** Flat, palette-only illustrations used as project card headers. */
export default function ProjectArt({ art, className }: { art: Art; className?: string }) {
  const common = {
    viewBox: "0 0 400 220",
    className,
    role: "img" as const,
    preserveAspectRatio: "xMidYMid meet" as const,
  };

  switch (art) {
    case "var": {
      const bars = [6, 12, 22, 38, 58, 74, 80, 70, 52, 34, 20, 11, 5];
      return (
        <svg {...common} aria-label="P&L line with a dashed VaR threshold and a loss histogram">
          <rect width="400" height="220" fill={C.paper} />
          <rect x="22" y="20" width="230" height="160" rx="14" fill={C.cream} stroke={C.blue} strokeWidth="2" />
          <polyline
            points="36,110 58,96 80,104 102,80 124,92 146,70 168,86 190,64 212,78 236,58"
            fill="none"
            stroke={C.deep}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <line x1="36" x2="238" y1="140" y2="140" stroke={C.red} strokeWidth="2" strokeDasharray="7 5" />
          <text x="40" y="160" fontSize="12" fontFamily="sans-serif" fontWeight="700" fill={C.red}>
            VaR 99%
          </text>
          <g transform="translate(270 34)">
            <rect width="110" height="146" rx="14" fill={C.blue} />
            {bars.map((h, i) => (
              <rect key={i} x={8 + i * 7.4} y={128 - h} width="5.6" height={h} rx="1.5" fill={i < 2 ? C.red : C.cream} />
            ))}
            <line x1="22" x2="22" y1="22" y2="132" stroke={C.red} strokeWidth="2" strokeDasharray="4 3" />
          </g>
          <circle cx="236" cy="58" r="5" fill={C.red} />
        </svg>
      );
    }
    case "stress":
      return (
        <svg {...common} aria-label="Volatility fan chart with stress scenario bars">
          <rect width="400" height="220" fill={C.paper} />
          <path d="M30 120 C 120 118, 200 112, 370 40 L 370 200 C 200 128, 120 122, 30 120 Z" fill={C.cream} />
          <path d="M30 120 C 120 119, 200 116, 370 80 L 370 160 C 200 124, 120 121, 30 120 Z" fill={C.blue} opacity="0.45" />
          <path d="M30 120 C 120 120, 200 119, 370 118" fill="none" stroke={C.deep} strokeWidth="3" />
          {[
            { x: 46, h: 44, l: "2008" },
            { x: 92, h: 30, l: "2020" },
            { x: 138, h: 22, l: "2022" },
          ].map((b) => (
            <g key={b.l}>
              <rect x={b.x} y={190 - b.h} width="30" height={b.h} rx="5" fill={C.red} />
              <text x={b.x + 15} y={206} fontSize="11" textAnchor="middle" fontFamily="sans-serif" fontWeight="700" fill={C.ink}>
                {b.l}
              </text>
            </g>
          ))}
          <rect x="250" y="20" width="120" height="30" rx="15" fill={C.blue} />
          <text x="310" y="40" fontSize="12" textAnchor="middle" fontFamily="sans-serif" fontWeight="800" fill={C.paper}>
            REGIME: CALM
          </text>
        </svg>
      );
    case "pulse":
      return (
        <svg {...common} aria-label="Market dashboard with asset tiles and a price chart">
          <rect width="400" height="220" fill={C.paper} />
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${24 + i * 122} 20)`}>
              <rect width="108" height="54" rx="12" fill={i === 1 ? C.blue : C.cream} stroke={C.blue} strokeWidth="2" />
              <rect x="12" y="14" width="44" height="7" rx="3.5" fill={i === 1 ? C.cream : C.blue} />
              <rect x="12" y="30" width="70" height="10" rx="5" fill={i === 1 ? C.paper : C.deep} />
            </g>
          ))}
          <rect x="24" y="88" width="352" height="114" rx="14" fill={C.cream} stroke={C.blue} strokeWidth="2" />
          {Array.from({ length: 16 }).map((_, i) => {
            const o = [40, 52, 46, 60, 56, 70, 64, 58, 72, 80, 74, 86, 82, 92, 88, 98][i];
            const c = [48, 46, 58, 54, 68, 62, 58, 70, 78, 74, 84, 80, 90, 86, 96, 94][i];
            const up = c > o;
            return (
              <rect
                key={i}
                x={44 + i * 20}
                y={190 - Math.max(o, c)}
                width="10"
                height={Math.max(4, Math.abs(c - o))}
                rx="2"
                fill={up ? C.blue : C.red}
              />
            );
          })}
        </svg>
      );
    case "f1":
      return (
        <svg {...common} aria-label="Race track outline with car positions and tyre stints">
          <rect width="400" height="220" fill={C.paper} />
          <path
            d="M60 160 C 30 120, 60 50, 120 56 L 220 64 C 260 68, 270 40, 310 40 C 360 40, 370 100, 330 120 L 250 150 C 220 162, 220 190, 180 190 L 90 190 C 70 190, 66 172, 60 160 Z"
            fill="none"
            stroke={C.blue}
            strokeWidth="14"
            strokeLinejoin="round"
          />
          <path
            d="M60 160 C 30 120, 60 50, 120 56 L 220 64 C 260 68, 270 40, 310 40 C 360 40, 370 100, 330 120 L 250 150 C 220 162, 220 190, 180 190 L 90 190 C 70 190, 66 172, 60 160 Z"
            fill="none"
            stroke={C.cream}
            strokeWidth="2"
            strokeDasharray="8 8"
          />
          <circle cx="120" cy="56" r="8" fill={C.red} stroke={C.paper} strokeWidth="2" />
          <circle cx="310" cy="40" r="8" fill={C.deep} stroke={C.paper} strokeWidth="2" />
          <circle cx="250" cy="150" r="8" fill={C.cream} stroke={C.ink} strokeWidth="2" />
          <g transform="translate(150 100)">
            <rect width="34" height="10" rx="5" fill={C.red} />
            <rect x="36" width="50" height="10" rx="5" fill={C.cream} stroke={C.blue} strokeWidth="1.5" />
            <rect x="88" width="28" height="10" rx="5" fill={C.blue} />
          </g>
        </svg>
      );
    case "sentiment":
      return (
        <svg {...common} aria-label="Headlines feeding a sentiment index line">
          <rect width="400" height="220" fill={C.paper} />
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(24 ${24 + i * 58})`}>
              <rect width="150" height="44" rx="12" fill={C.cream} stroke={C.blue} strokeWidth="2" />
              <rect x="12" y="12" width="96" height="7" rx="3.5" fill={C.deep} />
              <rect x="12" y="25" width="70" height="7" rx="3.5" fill={C.blue} opacity="0.6" />
              <circle cx="132" cy="22" r="7" fill={i === 1 ? C.red : C.blue} />
            </g>
          ))}
          <path d="M182 46 L 214 46 M182 104 L 214 104 M182 162 L 214 162" stroke={C.blue} strokeWidth="2" strokeDasharray="4 4" />
          <rect x="214" y="24" width="164" height="172" rx="14" fill={C.blue} />
          <line x1="226" x2="366" y1="110" y2="110" stroke={C.cream} strokeOpacity="0.5" strokeWidth="1.5" />
          <polyline
            points="228,124 248,100 268,112 288,82 308,128 328,90 348,70 364,80"
            fill="none"
            stroke={C.cream}
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "notes":
      return (
        <svg {...common} aria-label="Stack of unsent letters">
          <rect width="400" height="220" fill={C.paper} />
          <g transform="rotate(-8 200 110)">
            <rect x="110" y="50" width="180" height="120" rx="12" fill={C.blue} />
          </g>
          <g transform="rotate(4 200 110)">
            <rect x="110" y="46" width="180" height="120" rx="12" fill={C.cream} stroke={C.blue} strokeWidth="2" />
            <path d="M110 58 L 200 116 L 290 58" fill="none" stroke={C.blue} strokeWidth="2" />
            <circle cx="200" cy="124" r="14" fill={C.red} />
            <path d="M193 124 h14" stroke={C.paper} strokeWidth="2.5" strokeLinecap="round" />
          </g>
          <text x="40" y="200" fontFamily="var(--font-hand), cursive" fontSize="22" fill={C.deep}>
            never sent...
          </text>
        </svg>
      );
    case "spark":
      return (
        <svg {...common} aria-label="Phone showing a QR code and a match card">
          <rect width="400" height="220" fill={C.paper} />
          <rect x="70" y="18" width="110" height="190" rx="18" fill={C.blue} />
          <rect x="80" y="34" width="90" height="158" rx="10" fill={C.cream} />
          {Array.from({ length: 25 }).map((_, i) => {
            const on = [0, 1, 2, 4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 22, 23, 24, 3, 11].includes(i);
            return on ? (
              <rect key={i} x={95 + (i % 5) * 12} y={60 + Math.floor(i / 5) * 12} width="10" height="10" rx="2" fill={C.ink} />
            ) : null;
          })}
          <rect x="92" y="140" width="66" height="22" rx="11" fill={C.blue} />
          <g transform="translate(212 50)">
            <rect width="140" height="120" rx="16" fill={C.cream} stroke={C.blue} strokeWidth="2" />
            <circle cx="46" cy="46" r="20" fill={C.blue} />
            <circle cx="94" cy="46" r="20" fill={C.red} opacity="0.85" />
            <rect x="24" y="82" width="92" height="9" rx="4.5" fill={C.deep} />
            <rect x="40" y="97" width="60" height="7" rx="3.5" fill={C.blue} opacity="0.6" />
          </g>
        </svg>
      );
  }
}
