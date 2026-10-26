/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          purple:     "#7B2FF7",
          purpleDark: "#5B17D4",
          purpleLight:"#F0E9FF",
          orange:     "#FF6B35",
          orangeLight:"#FFF3EE",
          navy:       "#1a0533",
          dark:       "#1a1a2e",
        },
        purple: {
          DEFAULT: "#7B2FF7",
          dark:    "#5B17D4",
          light:   "#F0E9FF",
          50:      "#F5F0FF",
          100:     "#EDE0FF",
          200:     "#D4BAFF",
          300:     "#B990FF",
          400:     "#9B65FF",
          500:     "#7B2FF7",
          600:     "#5B17D4",
          700:     "#4510A6",
          800:     "#2F0B77",
          900:     "#1A0547",
        },
        orange: {
          DEFAULT: "#FF6B35",
          light:   "#FFF3EE",
          dark:    "#E04E15",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      animation: {
        "gradient-x": "gradientX 8s ease infinite",
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
      },
      keyframes: {
        gradientX: {
          "0%, 100%": { "background-size": "200% 200%", "background-position": "left center" },
          "50%": { "background-size": "200% 200%", "background-position": "right center" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};

