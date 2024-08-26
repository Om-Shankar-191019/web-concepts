/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themeColor: "#a21caf",
        themeColorHover: "#c026d3",
      },
    },
  },
  plugins: [],
};
