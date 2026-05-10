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
        sp: {
          black: "#000000",
          bg: "#121212",
          elevated: "#1A1A1A",
          card: "#282828",
          hover: "#2a2a2a",
          text: "#FFFFFF",
          sub: "#B3B3B3",
          muted: "#535353",
          green: "#1DB954",
          "green-bright": "#1ED760",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out both",
        "fade-in": "fadeIn 0.4s ease-out both",
        "slide-up": "slideUp 0.35s cubic-bezier(0.16,1,0.3,1) both",
        "wave": "wave 1.1s ease-in-out infinite",
        "pulse-green": "pulseGreen 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(100%)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        wave: {
          "0%, 100%": { transform: "scaleY(0.3)" },
          "50%": { transform: "scaleY(1)" },
        },
        pulseGreen: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
