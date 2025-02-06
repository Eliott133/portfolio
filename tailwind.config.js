import daisyui from './node_modules/daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-in-down": "fade-in-down 1s ease-out forwards",
      },
      keyframes: {
        "fade-in-down": {
          "0%": { opacity: 0, transform: "translateY(-15px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["winter", "dark"],
  },
}