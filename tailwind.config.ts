import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        brand: {
          "dark-blue": "#35383E",
          primary: "#00ADB5",
          primaryhover: "#00A3A9",
          "primary-info": "#f0f0f0",
          "dark-gray": "#818181",
          "light-gray": "#848484",
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

export default config;
