import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {

        "united-nations-blue": "var(--united-nations-blue)",
        "bright-navy-blue": "var(--bright-navy-blue)",
        "spanish-gray": "var(--spanish-gray)",
        "black-coral": "var(--black-coral)",
        "oxford-blue": "var(--oxford-blue)",
        "yale-blue": "var(--yale-blue)",
        "blue-ncs": "var(--blue-ncs)",
        "gunmetal": "var(--gunmetal)",
        "gainsboro": "var(--gainsboro)",
        "cultured": "var(--cultured)",
        "white": "var(--white)",
        "black": "var(--black)",
        "onyx": "var(--onyx)",
        "jet": "var(--jet)",
      },
      fontFamily:{
        poppins: ["Poppins","sans-serif"],
        nunito: ["Nunito Sans","sans-serif"],
        montserrat:["Montserrat","sans-serif"]
      },
      screens: {
        ha: "1107px",
    },
    },
  },
  plugins: [],
};

export default config;
