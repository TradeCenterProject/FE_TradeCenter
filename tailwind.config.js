/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Noto Sans KR", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#6ACE8E",
        borderColor: "#B0B8C1",
      },
    },
  },
  plugins: [],
};
