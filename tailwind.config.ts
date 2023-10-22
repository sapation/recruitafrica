import type { Config } from 'tailwindcss'
import radixThemePlugin from "radix-ui-themes-with-tailwind";

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
        "light-green" : "#76b947d1",
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
  plugins: [
    //  radixThemePlugin({
    //   useTailwindColorNames: true, // optional
    //   useTailwindRadiusNames: true, // optional
    //   mapMissingTailwindColors: true, // optional
    // }),
  ],
}
export default config;
