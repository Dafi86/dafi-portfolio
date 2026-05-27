import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "#020617",
        foreground: "#f8fafc",

        primary: {
          DEFAULT: "#22d3ee",
          dark: "#0891b2",
        },

        card: "rgba(255,255,255,0.04)",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      boxShadow: {
        glow: "0 0 40px rgba(34,211,238,0.15)",

        card: "0 10px 40px rgba(0,0,0,0.35)",

        cyan: "0 0 25px rgba(34,211,238,0.25)",
      },

      backdropBlur: {
        xs: "2px",
      },

      borderRadius: {
        "4xl": "2rem",
      },

      animation: {
        blob: "blob 8s infinite",
        float: "float 6s ease-in-out infinite",
        pulseSlow: "pulseSlow 4s ease-in-out infinite",
        shine: "shine 5s linear infinite",
      },

      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },

          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },

          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },

          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },

        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },

          "50%": {
            transform: "translateY(-10px)",
          },
        },

        pulseSlow: {
          "0%, 100%": {
            opacity: "0.5",
          },

          "50%": {
            opacity: "1",
          },
        },

        shine: {
          "0%": {
            backgroundPosition: "-200% center",
          },

          "100%": {
            backgroundPosition: "200% center",
          },
        },
      },

      backgroundImage: {
        grid: "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",

        glow: "radial-gradient(circle at center, rgba(34,211,238,0.18), transparent 70%)",
      },
    },
  },

  plugins: [],
};

export default config;
