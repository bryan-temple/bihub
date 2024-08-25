import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'founder': ['Founder Grotesk', 'sans-serif'],
        'familjen': ['Familjen Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        'orange': '#D67530',
        'green': '#3AB87D',
        'navy': '#0F2B42',
        'beige': '#EEC9B6',
      },
    },
  },
  plugins: [],
};

export default config;