/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: "Raleway",
        tinos: "Times New Roman",
        
      },
      colors: {
        primary: "#008542",
        secondary: "#d9a625",
        tertiary: "#27941e",
        underline: "#528542",
        textbg: "#f2f2f2",
        textdefault: "#484c54",
        headerbotspan: "#d3d4da",
        gray: "#737373",
        btnGreenHover: "rgb(218, 166, 37)",
      },
      backgroundImage: {
        'bg-benefits': "url('/img/fca-bg-grayscale.jpg')",
        'scholarship': "url('/img/scholarship.webp')",
      }
    },
  },
  plugins: [],
};

