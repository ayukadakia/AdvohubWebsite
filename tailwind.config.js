/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige': '#dfd3bf',
        'green': '#7B6F53',
        'white': '#f9f5ec'
      },
      fontFamily: {
        lora: ['var(--font-lora', ...fontFamily.sans]
      },
    },
  },
  plugins: [
    require('tailwindcss-highlights'),
],
}

