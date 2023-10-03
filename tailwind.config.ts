import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        kalam: ["Kalam", "cursive"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        "primary-green" : "#76B947",
        "primary-green-deep" : "#669644",
        "primary-gray" : "#7A7A7A",
        "light-green" : "#76B9471A",
        "light-gray" : "#ECEEEF",
        "color-black" : "#000",
        "header-primary-black" : "#4C4B4C",
        "light-color" : "#878787"
      },
      screens: {
        sm: "640px",
        xl: "1140px",
        lg: "900px",
      },
    },
  },
  plugins: [],
}
export default config;
