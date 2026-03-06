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
        bg: "#F8F9FA",
        surface: "#FFFFFF",
        surface2: "#F0F2F5",
        text: "#1A3B56",
        textMuted: "rgba(26,59,86,0.72)",
        border: "rgba(26,59,86,0.14)",
        accentPrimary: "#E88632",
        accentSecondary: "#86AB45",
        danger: "#FF5A6B",
        warning: "#FFCC66",
        darkSurface: "#1A3B56", // Keep dark tokens for specific cards if needed
        darkSurface2: "#234B6E",
      },
      borderRadius: {
        sm: "10px",
        md: "16px",
        lg: "24px",
        pill: "9999px",
      },
      boxShadow: {
        sm: "0 6px 18px rgba(26,59,86,0.08)",
        md: "0 14px 40px rgba(26,59,86,0.12)",
      },
      fontFamily: {
        heading: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "Roboto", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(circle, rgba(26,59,86,0.08) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-pattern': '24px 24px',
      }
    },
  },
  plugins: [],
};
export default config;
