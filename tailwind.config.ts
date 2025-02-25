import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#352F44',
        'secondary-dark': '#5C5470',
        'primary-light': '#B9B4C7',
        'secondary-light': '#FAF0E6'
      }
    }
  },
  plugins: []
};

export default config;
