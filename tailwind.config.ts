import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "var(--color-ivory)",
        cream: "var(--color-cream)",
        cocoa: "var(--color-cocoa)",
        charcoal: "var(--color-charcoal)",
        terracotta: "var(--color-terracotta)",
        coral: "var(--color-coral)",
        linen: "var(--color-linen)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(63, 45, 35, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
