/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
    fontFamily: {
      rounded: ["Nunito", "system-ui", "sans-serif"],
    },
    },
  },
  plugins: [],
};
