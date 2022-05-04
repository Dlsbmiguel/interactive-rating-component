module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "hsl(25, 97%, 53%)",
        lightGrey: "hsl(217, 12%, 63%)",
        mediumGrey: "hsl(216, 12%, 54%)",
        darkBlue: "hsl(213, 19%, 18%)",
        veryDarkBlue: "hsl(216, 12%, 8%)",
        blackish: "	hsl(225, 21%, 11%)",
        gradientBlue: "hsl(215, 27%, 12%)",
      },
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
      },
    },
  },
  plugins: [],
};
