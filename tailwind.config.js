/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "var(--color-navy)",
        "navy-dark": "var(--color-navy-dark)",
        gold: "var(--color-gold)",
        "gold-lt": "var(--color-gold-lt)",
        cream: "var(--color-cream)",
        charcoal: "var(--color-charcoal)",
        mid: "var(--color-mid)",
        rule: "var(--color-rule)",
        "section-alt": "var(--color-section-alt)",
      },
      fontFamily: {
        heading: "var(--font-heading)",
        serif: "var(--font-serif)",
        body: "var(--font-body)",
      },
      maxWidth: {
        container: "1160px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
