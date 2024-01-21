/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          // move an element 100% to the right
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        // find shimmer role and play that animation for 1.5 inifinite
        shimmer: "shimmer 1.5s infinite",
      },
    },
  },
  plugins: [],
}
