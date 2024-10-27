/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        libre: ['"Libre Baskerville"', "serif"],
        caveat: ["Caveat", "cursive"],
      },
      colors: {
        baseColor: "#090909",
        whiteMode: "#fff",
        babyGreen: "#8CFF9E",
      },

      keyframes: {
        // marquee: {
        //   "0%": { transform: "translateX(0%)" },
        //   "100%": { transform: "translateX(-100%)" },
        // },
        // marquee2: {
        //   "0%": { transform: "translateX(100%)" },
        //   "100%": { transform: "translateX(0%)" },
        // },
        moveToCenterfromRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        moveToCenterfromleft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" }, // move to the center
        },
        moveToEndLeft: {
          "0%": { transform: "translateX(50%)", opacity: "0" },
          "100%": { transform: "translateX(0%)", opacity: "1" },
        },
        moveToEndRight: {
          "0%": { transform: "translateX(-50%)", opacity: "0" },
          "100%": { transform: "translateX(0%)", opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0.6" },
          "100%": { opacity: "0" },
        },
        heightIncrease: {
          "0%": { height: "10px" },
          "100%": { height: "300px" },
        },
      },
      animation: {
        // marquee: "marquee 25s linear infinite",
        // marquee2: "marquee2 25s linear infinite",
        moveToCenterfromRight: "moveToCenterfromRight .4s ease-out forwards",
        moveToCenterfromleft: "moveToCenterfromleft .4s ease-out forwards",
        "move-corner-left": "moveToEndLeft .4s ease-out forwards",
        "move-corner-right": "moveToEndRight .4s ease-out forwards",
        fadeOut: "fadeOut 1s ease-in-out forwards",
        heightIncrease: "heightIncrease 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
