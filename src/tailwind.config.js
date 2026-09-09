/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      // Keep Tailwind's normal breakpoints and add only the smaller one.
      screens: {
        xs: "480px",
      },

      colors: {
        desktop: "var(--color-desktop)",

        window: {
          DEFAULT: "var(--color-window)",
          content: "var(--color-content)",
          dark: "var(--color-border-dark)",
          middle: "var(--color-border-middle)",
          light: "var(--color-border-light)",
        },

        titlebar: {
          start: "var(--color-titlebar-start)",
          end: "var(--color-titlebar-end)",
        },

        ink: {
          DEFAULT: "var(--color-text)",
          muted: "var(--color-text-muted)",
        },

        link: {
          DEFAULT: "var(--color-link)",
          hover: "var(--color-link-hover)",
        },

        focus: "var(--color-focus)",
      },

      fontFamily: {
        sans: ["Tahoma", "Verdana", "Arial", "sans-serif"],
      },

      fontSize: {
        display: [
          "clamp(2.25rem, 5vw, 4rem)",
          {
            lineHeight: "1.05",
            fontWeight: "700",
            letterSpacing: "-0.035em",
          },
        ],

        heading: [
          "clamp(1.75rem, 3vw, 2.5rem)",
          {
            lineHeight: "1.15",
            fontWeight: "700",
            letterSpacing: "-0.025em",
          },
        ],

        body: [
          "1rem",
          {
            lineHeight: "1.65",
            fontWeight: "400",
          },
        ],

        ui: [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "400",
          },
        ],

        titlebar: [
          "0.8125rem",
          {
            lineHeight: "1.125rem",
            fontWeight: "700",
          },
        ],
      },

      backgroundImage: {
        titlebar:
          "linear-gradient(180deg, var(--color-titlebar-start) 0%, var(--color-titlebar-end) 100%)",
      },

      boxShadow: {
        window: "3px 4px 0 rgb(0 0 0 / 25%)",

        bevel:
          "inset 1px 1px 0 var(--color-border-light), inset -1px -1px 0 var(--color-border-dark)",

        "bevel-pressed":
          "inset 1px 1px 0 var(--color-border-dark), inset -1px -1px 0 var(--color-border-light)",
      },

      borderRadius: {
        xs: "2px",
        sm: "3px",
        DEFAULT: "4px",
        lg: "6px",
      },

      maxWidth: {
        portfolio: "90rem",
        reading: "44rem",
      },
    },
  },

  plugins: [],
};