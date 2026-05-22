/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"]
      },
      colors: {
        night: "#070818",
        ink: "#0b1024",
        cyanGlow: "#24e7ff",
        violetGlow: "#9b5cff",
        pinkGlow: "#ff4ecd"
      },
      boxShadow: {
        neon: "0 0 24px rgba(155,92,255,.35), 0 0 70px rgba(36,231,255,.18)",
        card: "0 24px 80px rgba(0,0,0,.35)"
      },
      animation: {
        gradient: "gradient 10s ease infinite",
        pulseGlow: "pulseGlow 2.4s ease-in-out infinite",
        spinSlow: "spin 18s linear infinite"
      },
      keyframes: {
        gradient: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 22px rgba(155,92,255,.36)" },
          "50%": { boxShadow: "0 0 42px rgba(36,231,255,.5)" }
        }
      }
    }
  },
  plugins: []
};
