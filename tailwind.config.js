/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      mono: ['input-mono', 'monospace'],
    },
    extend: {
      colors: {
        blue: {
          950: '#000033',
        },
        navy: {
          base: '#112240',
          shadow: '#020c1b',
        },
      },
    },
  },
  plugins: [],
};
