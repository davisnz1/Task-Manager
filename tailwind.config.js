/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        brand: {
          "dark-blue": "#AEAFB1",
          primary: "#00ADB5",
          "dark-gray": "#818181",
          "": "#9A9C9F",
          "light-gray": "#EEEEEE",
          white: "#FFFFFF",
          background: "#F8F8F8",
          process: "#FFAA04",
          danger: "#EF4444",
        },
      },
    },
  },
  plugins: [],
};
