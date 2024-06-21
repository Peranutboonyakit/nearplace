/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          1: "#134B8A",
          2: "rgba(15, 30, 86, 1)",
          3: "#C4D3E9",
        },
        secondary: {
          1: "#605C5C",
          2: "#9e9e9e",
          3: "#C3BEBB",
          4: "#E0E0E0",
        },
      },
    },
    screens: {
      sm: "860px",
      md: "1200px",
      lg: "1440px",
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
