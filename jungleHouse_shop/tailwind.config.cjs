/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-logo': '#389401',
        'green-logo-light': '#95b483',
        'green-logo-very-light': '#e9efda',
        'blue-drop':'#0073d9',
        'blue-drop-light':'rgba(186,208,232,0.77)',
        'shade-hero':'rgba(233,239,218,0.12)',
        'gray-shop':'rgb(76,79,73)',
        'white-shade':'rgba(255,255,255,0.63)',
        'white-shade-dark':'rgba(255,255,255,0.76)'
      },
      backgroundImage: {
        'button-return': "url('./src/assets/images/plant.jpg')",
        'footer-image': "url('./src/assets/images/bookPlantes3.jpg')",
      },
      fontFamily: {
        'main': 'Dosis'
      },
    },
  },
  plugins: [],
}
