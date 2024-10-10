import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],  
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        'giants-orange': '#f46036ff',
        'silver-lake-blue': '#5b85aaff',
        'delft-blue': '#414770ff',
        'russian-violet': '#372248ff',
        'dark-purple': '#171123ff',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
