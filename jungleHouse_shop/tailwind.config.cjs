/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-logo': '#31b472',
        'green-logo-light': '#73d097',
        'green-logo-very-light': '#c5d7cb',
        'blue-drop':'#0073d9'
      },
      backgroundImage: {
        'button-return': "url('./src/assets/images/plant.jpg')",
      }
    },
  },
  plugins: [],
}
