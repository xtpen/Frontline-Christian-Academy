/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: "Raleway",
        
      },
      colors: {
        primary: "#008542",
        secondary: "#d9a625",
        tertiary: "#27941e",
        underline: "#528542",
      },
    },
  },
  plugins: [],
};

