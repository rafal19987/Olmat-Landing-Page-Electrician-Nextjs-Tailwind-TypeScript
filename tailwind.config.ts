import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['var(--font-lato)'],
        jura: ['var(--font-jura)'],
      },
      rotate: {
        '225': '225deg',
      },
      colors: {
        primary: '#022B3A',
        secondary: '#E1E5F2',
        bodyBg: '#f6faff',
      },
    },
  },
  plugins: [],
};
export default config;
