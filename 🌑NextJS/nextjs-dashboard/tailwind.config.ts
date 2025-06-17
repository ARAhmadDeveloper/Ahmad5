import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
 theme: {
    extend: {
      keyframes: {
        slideInDown: {
          '0%':   { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'slide-in-down': 'slideInDown 400ms ease-out forwards',
        'fade-in':       'fadeIn 300ms ease-out forwards',
      },
    },
  },
  variants: {
    extend: {
      animation: ['motion-safe'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
