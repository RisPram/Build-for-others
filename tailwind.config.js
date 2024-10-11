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
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        moveToCenter: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        moveToEndLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        moveToEndRight: {
          "0%": { transform: "translateX(10%)", opacity: "0" },
          "100%": { transform: "translateX(0%)", opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        "move-in": "moveToCenter 1s ease-out forwards",
        "move-corner-left": "moveToEndLeft 1s ease-out forwards",
        "move-corner-right": "moveToEndRight 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
