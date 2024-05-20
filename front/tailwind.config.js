/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkGray: '#355362',
        lightGray: '#FFFCF1',
        hoverGray: '#304D5C',
        white: '#FFFFFF',
        lightTeal: '#a3ccd1',
        teal: '#10a39e',
        nude: '#e6dcd2'
      }
    },
  },
  plugins: [],
}

