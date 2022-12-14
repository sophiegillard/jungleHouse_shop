/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '360':'361px',
      "390" : "389px",
      'xxs':'376px',
      'xs': '320px',
      's': '540px',
      'sm' : '640px',
      'md' : '768px',
      'lg': '1024px',
      '2xl': '1536px'
    },
    extend: {
      animation: {
        openmenu:  'openmenu 1s ease-in',
        closemenu:  'closemenu 1s ease-in',
      },
      keyframes: {
        openmenu: {
          // initial position
          '0%': {left:  '499px'},
          // final position
          '100%': {left:  '0px'}
        },
        closemenu: {
          // initial position
          '0%': {left:  '0px'},
          // final position
          '100%': {left:  '499px',
          opacity:0}
        },
      },
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
        'button-return': "url('/assets/images/plant.jpg')",
        'footer-image': "url('/assets/images/bookPlantes3.jpg')",
      },
      fontFamily: {
        'main': 'Dosis'
      },
    },
  },
  plugins: [],
}
