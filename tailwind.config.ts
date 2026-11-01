import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.ts"],
  theme: {
    extend: {
      colors: {
        cream: "#F3DFA8",
        "cream-2": "#F8EBC4",
        paper: "#FBF4DF",
        blue: "#5B6C9E",
        "blue-deep": "#3F4E80",
        ink: "#2E3A63",
        "signal-red": "#C0563F",
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
      },
      borderRadius: { card: "20px" },
      lineHeight: { poster: "0.88" },
      maxWidth: { site: "1200px" },
      keyframes: {
        pulseDot: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(34,160,90,0.55)" },
          "50%": { boxShadow: "0 0 0 7px rgba(34,160,90,0)" },
        },
      },
      animation: { pulseDot: "pulseDot 2s ease-in-out infinite" },
    },
  },
  plugins: [],
};
export default config;
