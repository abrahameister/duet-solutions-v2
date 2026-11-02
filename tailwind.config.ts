import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B1722",
        surface: "#1A3B56",
        surface2: "#234B6E",
        text: "#EAF0FF",
        textMuted: "rgba(234,240,255,0.72)",
        border: "rgba(234,240,255,0.14)",
        accentPrimary: "#E88632",
        accentSecondary: "#86AB45",
        danger: "#FF5A6B",
        warning: "#FFCC66",
        // Nuevos colores Sprint 1
        navy: "#0D2F4F",
        navyDark1: "#071B2C",
        navyDark2: "#0A2338",
        brandOrange: "#FF8C1A",
        brandGreen: "#86AE3F",
      },
      borderRadius: {
        sm: "10px",
        md: "16px",
        lg: "24px",
        pill: "9999px",
      },
      boxShadow: {
        sm: "0 6px 18px rgba(0,0,0,0.28)",
        md: "0 14px 40px rgba(0,0,0,0.35)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Space Grotesk", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        signature: ["var(--font-nanum)", "cursive"],
      },
      backgroundImage: {
        "dot-pattern": "radial-gradient(circle, rgba(234,240,255,0.05) 1px, transparent 1px)",
        "geist-grid":
          "linear-gradient(to right, rgba(234,240,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(234,240,255,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-pattern": "24px 24px",
        "geist-grid": "48px 48px",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
