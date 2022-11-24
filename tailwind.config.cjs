/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'semi-black': '#292627',
      'purple': '#751785',
      'border': '#DBDBDB',
      'footer': '#5D5658',
      'red': 'red'
    },
    fontFamily: {
      'serif': ['Catamaran', 'sans-serif']
    }
  },
  plugins: [],
}
