/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        button: "#10b981", //button colors

        //primary colors
        primary50: "#ecfeff",
        primary100: "#cffafe",
        primary200: "#a5f3fc",
        primary300: "#67e8f9",
        primary400: "#22d3ee",
        primary500: "#06b6d4",
        primary600: "#0891b2",
        primary700: "#0e7490",
        primary800: "#155e75",
        primary900: "#164e63",
        primary950: "#083344",

        //error colors

        error50: "#fff1f2",
        error100: "#ffe4e6",
        error200: "#fecdd3",
        error300: "#fda4af",
        error400: "#fb7185",
        error500: "#f43f5e",
        error600: "#e11d48",
        error700: "#be123c",
        error800: "#9f1239",
        error900: "#881337",
        error950: "#4c0519",
      },
    },
  },
  plugins: [],
};
