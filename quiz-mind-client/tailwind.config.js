module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        deepslate: {
          0: "#D2D4D6",
          100: "#A5A9AD",
          200: "#797E85",
          300: "#4C535C",
          400: "#1F2833",
          500: "#192029",
          600: "#13181F",
          700: "#0C1014",
          800: "#06080A",
        },
        extrawhite: {
          0: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFFFFF",
          500: "#CCCCCC",
          600: "#999999",
          700: "#666666",
          800: "#333333",
        },
      },
    },
  },
  plugins: [],
};
