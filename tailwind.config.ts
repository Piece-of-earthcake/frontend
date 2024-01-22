import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      color:{
        'yellow-100':'#FBFFB9',
        'yellow-200':'#FDD692',
        'yellow-300':'#F6B352',
        'yellow-400':'#F68657',
        'yellow-500':'#EC7357',
        'brown-100':'#754F44',
        'gray-100':'#E0E3DA',
        'gray-200':'#383A3F',
        'gray-300':'#1F2124'
      },
      borderRadius:{
        md:'15px',
        lg:'30px'
      }
    },
  },
  plugins: [],
};
export default config;
