/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f9f7f5",
        secondary: "#007500",
        brown: "#553B36", // Adding the secondary color
      },
    },
  },
  plugins: [],
};
