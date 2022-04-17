module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "greenHouseBg": "#F9F9F9",
      "greenHouseBtn": "#F6CA48",
    },
    fontFamily: {
      sans: ["Inter var", "sans-serif"],
      greenHouseFt: ["Roboto", "sans-serif"],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
