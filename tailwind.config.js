/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {

    fontFamily: {
      sans: ['"SF Pro"', "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "sans-serif"],
      serif: ['"SF Pro"', "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "sans-serif"],
    },

    extend: {
      colors: {
        brand: {
          DEFAULT: "#22c55e",
          dark: "#16a34a",
        },
      },
    },

  },

  plugins: [],
}
